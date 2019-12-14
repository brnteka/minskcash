<template lang="pug">
section.py-5.bg-gray
	.container.px-15.mx-auto
		.mb-35.text-center
			h1.font-extrabold.text-lg.md_text-xl.mb-1 {{ heading }}
			div {{ leading }}
		.xl_flex.-mx-15.justify-center
			.px-15.xl_w-8_12
				hero-form
</template>
<script>
import heroForm from "./hero-form.vue";
export default {
	components: {
		heroForm
	},
	data() {
		return {
			heading: "Деньги в долг в Минске",
			leading: "от 100 до 5 000 BYN"
		};
	}
};
</script>
<style></style>
