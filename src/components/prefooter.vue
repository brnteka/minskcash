<template lang="pug">
section#howtogetmoney.py-5.bg-cover( :style="{ backgroundImage: `url('${ bg }')` }" )
	.container.px-15.mx-auto
		.mb-35.text-center
			.text-white.font-extrabold.text-lg.md_text-xl.mb-1 {{ heading }}
		.flex.-mx-15.justify-center
			.px-15.w-full.xl_w-8_12.lg_w-10_12
				.md_flex.-mx-15
					.px-15.md_w-6_12.mb-3.md_mb-0
						ol.steps-list
							li.text-white.font-extrabold.leading-none.bg-red.mb-1( v-for="( step, index ) in steps" ) {{ step }}
					.px-15.md_w-6_12
						contact-form
</template>
<script>
import bg from "../static/bg.png";
import contactForm from "./contact-form.vue";
export default {
	components: {
		contactForm
	},
	data() {
		return {
			bg: bg,
			heading: "З простых шага для получения денег",
			steps: [
				"Звоните прямо сейчас!",
				"Встречаемся и оформляем",
				"Получите деньги"
			]
		};
	}
};
</script>
<style>
.steps-list {
	list-style-type: decimal;
	list-style-position: inside;

	li {
		@apply px-2 py-15;
		border-radius: 25px 0 25px 25px;

		@screen md {
			font-size: 20px;
		}
	}
}
</style>
