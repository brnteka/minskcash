<template lang="pug">
div
	app-header
	app-hero
	app-advantages
	app-multi-step-section
	app-cards
	app-rules
	app-pre-footer
	app-footer
	app-modal-contact-form
	app-modal-multistep-form
	v-dialog
</template>
<script>
import AppHeader from "./components/header.vue";
import AppHero from "./components/hero.vue";
import AppAdvantages from "./components/advantages.vue";
import AppMultiStepSection from "./components/multistep-section.vue";
import AppCards from "./components/cards.vue";
import AppRules from "./components/rules.vue";
import AppPreFooter from "./components/prefooter.vue";
import AppFooter from "./components/footer.vue";
import AppModalMultistepForm from "./components/modal-multistep-form.vue";
import AppModalContactForm from "./components/modal-contact-form.vue";

export default {
	components: {
		AppHeader,
		AppHero,
		AppAdvantages,
		AppMultiStepSection,
		AppCards,
		AppRules,
		AppPreFooter,
		AppFooter,
		AppModalMultistepForm,
		AppModalContactForm
	},
	mounted() {
		document.addEventListener("mouseleave", event => {
			if (
				event.clientY <= 0 ||
				event.clientX <= 0 ||
				event.clientX >= window.innerWidth ||
				event.clientY >= window.innerHeight
			) {
				this.$modal.show("multistep-form");
			}
		});
	}
};
</script>
<style></style>
