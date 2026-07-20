(function () {
	"use strict";

	var storageKey = "octo-legal-country";
	var validCountries = ["madagascar", "france"];

	function isValidCountry(country) {
		return validCountries.indexOf(country) !== -1;
	}

	function applyCountry(page, country) {
		var selectedCountry = isValidCountry(country) ? country : "";
		var hasSelection = Boolean(selectedCountry);

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
			var countryButton = event.target.closest("[data-legal-country]");
			var resetButton = event.target.closest("[data-legal-reset]");

			if (countryButton) {
				var country = countryButton.getAttribute("data-legal-country");
				localStorage.setItem(storageKey, country);
				applyCountry(page, country);
			}

			if (resetButton) {
				localStorage.removeItem(storageKey);
				applyCountry(page, "");
			}
		});

		applyCountry(page, localStorage.getItem(storageKey));
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", initLegalCountrySelector);
	} else {
		initLegalCountrySelector();
	}
})();
