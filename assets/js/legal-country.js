(function () {
	"use strict";

	var countryStorageKey = "octo-legal-country";
	var languageStorageKey = "octo-language";
	var validCountries = ["madagascar", "france"];
	var validLanguages = ["fr", "en"];

	function isValidCountry(country) {
		return validCountries.indexOf(country) !== -1;
	}

	function isValidLanguage(language) {
		return validLanguages.indexOf(language) !== -1;
	}

	function countryValue(country) {
		return isValidCountry(country) ? country : "madagascar";
	}

	function storedValue(key) {
		try {
			return localStorage.getItem(key);
		} catch (error) {
			return null;
		}
	}

	function setStoredValue(key, value) {
		try {
			localStorage.setItem(key, value);
		} catch (error) {
			return;
		}
	}

	function currentLanguage() {
		var htmlLanguage = (document.documentElement.lang || "").toLowerCase().split("-")[0];
		var savedLanguage = storedValue(languageStorageKey);

		if (isValidLanguage(savedLanguage)) {
			return savedLanguage;
		}

		if (isValidLanguage(htmlLanguage)) {
			return htmlLanguage;
		}

		return "fr";
	}

	function applyLegalLanguage(language) {
		var selectedLanguage = isValidLanguage(language) ? language : currentLanguage();

		document.querySelectorAll(".legal-language").forEach(function (section) {
			var isActive = section.getAttribute("data-legal-lang") === selectedLanguage;
			section.hidden = !isActive;
			section.setAttribute("aria-hidden", isActive ? "false" : "true");
		});
	}

	function applyCountry(page, country) {
		var selectedCountry = countryValue(country);
		var hasSelection = true;

		page.classList.toggle("is-country-selected", hasSelection);

		if (hasSelection) {
			document.documentElement.setAttribute("data-legal-country", selectedCountry);
		} else {
			document.documentElement.removeAttribute("data-legal-country");
		}

		page.querySelectorAll("[data-legal-country]").forEach(function (button) {
			button.classList.toggle("active", button.getAttribute("data-legal-country") === selectedCountry);
		});
	}

	function initLegalCountrySelector() {
		var page = document.querySelector("[data-legal-country-page]");
		if (!page) {
			return;
		}

		page.addEventListener("click", function (event) {
			var countryButton = event.target.closest(".legal-country-actions [data-legal-country]");

			if (countryButton) {
				var country = countryButton.getAttribute("data-legal-country");
				if (!isValidCountry(country)) {
					return;
				}
				setStoredValue(countryStorageKey, country);
				applyCountry(page, country);
			}
		});

		applyCountry(page, storedValue(countryStorageKey));
	}

	function initLegalLanguageSwitcher() {
		if (!document.querySelector(".legal-language")) {
			return;
		}

		applyLegalLanguage();

		document.addEventListener("octo:languagechange", function (event) {
			applyLegalLanguage(event.detail && event.detail.language);
		});

		document.addEventListener("click", function (event) {
			if (!event.target.closest("[data-lang-switch]")) {
				return;
			}

			window.setTimeout(function () {
				applyLegalLanguage();
			}, 0);
		});

		if ("MutationObserver" in window) {
			var observer = new MutationObserver(function () {
				applyLegalLanguage();
			});

			observer.observe(document.documentElement, {
				attributes: true,
				attributeFilter: ["lang"]
			});
		}
	}

	function init() {
		initLegalCountrySelector();
		initLegalLanguageSwitcher();
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
