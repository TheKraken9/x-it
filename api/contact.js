const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parseBody(req) {
  if (!req.body) {
    return {};
  }

  if (typeof req.body === "object") {
    return req.body;
  }

  try {
    return JSON.parse(req.body);
  } catch (error) {
    return {};
  }
}

function clean(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return clean(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function extractEmail(value) {
  const text = clean(value);
  const bracketMatch = text.match(/<([^>]+)>/);

  return (bracketMatch ? bracketMatch[1] : text).toLowerCase();
}

function isPersonalMailboxSender(value) {
  const email = extractEmail(value);
  const domain = email.split("@")[1] || "";
  const personalDomains = [
    "gmail.com",
    "googlemail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "live.com",
    "icloud.com"
  ];

  return personalDomains.indexOf(domain) !== -1;
}

function json(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return json(res, 405, { ok: false, error: "method_not_allowed" });
  }

  const body = parseBody(req);
  const name = clean(body.name);
  const email = clean(body.email).toLowerCase();
  const subject = clean(body.subject);
  const message = clean(body.message);
  const website = clean(body.website);

  if (website) {
    return json(res, 200, { ok: true });
  }

  if (!name || !emailPattern.test(email) || !subject || !message) {
    return json(res, 400, { ok: false, error: "invalid_payload" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "contact@octo.fr";
  const configuredFromEmail = process.env.CONTACT_FROM_EMAIL || "";
  const fallbackFromEmail = "OCTO <onboarding@resend.dev>";
  const fromEmail = configuredFromEmail && !isPersonalMailboxSender(configuredFromEmail)
    ? configuredFromEmail
    : fallbackFromEmail;

  if (!apiKey) {
    return json(res, 503, { ok: false, error: "email_service_not_configured" });
  }

  const text = [
    "Nouveau message depuis octo.fr",
    "",
    `Nom: ${name}`,
    `Email: ${email}`,
    `Sujet: ${subject}`,
    "",
    message
  ].join("\n");

  const html = `
    <h2>Nouveau message depuis octo.fr</h2>
    <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
    <p><strong>Email :</strong> ${escapeHtml(email)}</p>
    <p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>
    <p><strong>Message :</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `[OCTO] ${subject}`,
        text,
        html
      })
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Resend error:", details);
      return json(res, 502, { ok: false, error: "email_send_failed" });
    }

    return json(res, 200, { ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return json(res, 500, { ok: false, error: "unexpected_error" });
  }
};
