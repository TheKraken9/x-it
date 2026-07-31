(function () {
	"use strict";

	var messages = {
		fr: {
			sending: "Envoi en cours...",
			success: "Merci, votre message a bien ete envoye. L'equipe evocto vous repondra rapidement.",
			error: "Le message n'a pas pu etre envoye. Vous pouvez nous ecrire directement a contact@evocto.fr.",
			invalid: "Merci de completer les champs obligatoires avec une adresse e-mail valide.",
			submit: "Envoyer le message"
		},
		en: {
			sending: "Sending...",
			success: "Thank you, your message has been sent. The evocto team will reply soon.",
			error: "The message could not be sent. You can email us directly at contact@evocto.fr.",
			invalid: "Please complete the required fields with a valid email address.",
			submit: "Send message"
		}
	};

	function currentLanguage() {
		return document.documentElement.lang === "en" ? "en" : "fr";
	}

	function text(key) {
		var lang = currentLanguage();
		return messages[lang][key] || messages.fr[key];
	}

	function setButtonText(button, value) {
		button.querySelectorAll(".text-one, .text-two").forEach(function (span) {
			span.textContent = value;
		});
	}

	function setStatus(statusElement, type, message) {
		statusElement.className = "evocto-contact-status is-visible is-" + type;
		statusElement.textContent = message;
	}

	function clearStatus(statusElement) {
		statusElement.className = "evocto-contact-status";
		statusElement.textContent = "";
	}

	function formPayload(form) {
		return Object.fromEntries(new FormData(form).entries());
	}

	function initContactForm() {
		var form = document.querySelector("[data-contact-form]");

		if (!form) {
			return;
		}

		var button = form.querySelector("[data-contact-submit]");
		var statusElement = form.querySelector("[data-contact-status]");

		document.addEventListener("evocto:languagechange", function () {
			if (!button.disabled) {
				setButtonText(button, text("submit"));
			}
		});

		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			clearStatus(statusElement);

			if (!form.checkValidity()) {
				form.reportValidity();
				setStatus(statusElement, "error", text("invalid"));
				return;
			}

			button.disabled = true;
			setButtonText(button, text("sending"));

			try {
				var response = await fetch(form.action, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(formPayload(form))
				});

				if (!response.ok) {
					throw new Error("Contact request failed");
				}

				form.reset();
				setStatus(statusElement, "success", text("success"));
			} catch (error) {
				setStatus(statusElement, "error", text("error"));
			} finally {
				button.disabled = false;
				setButtonText(button, text("submit"));
			}
		});
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", initContactForm);
	} else {
		initContactForm();
	}
})();
