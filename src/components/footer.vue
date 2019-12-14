<template lang="pug">
footer#contacts.py-5.bg-white
	.container.px-15.mx-auto
		.mb-2.text-center
			.font-extrabold.text-lg.md_text-xl {{ heading }}
		.lg_flex.-mx-15.justify-center
			.px-15.lg_w-6_12.text-center.leading-content
				.mb-15 {{ phone }}
				.mb-15 {{ address }}
				.mb-15 {{ disclaimer }}
				a( :href="info.link" ).text-red {{ info.text }}
</template>
<script>
export default {
	data() {
		return {
			heading: "Контакты",
			phone: "+375 29 229-85-85",
			address: "Партизанский просп., 150А, Минск (ТЦ Момо)",
			disclaimer:
				"*Мы не оказываем услуги по оформлению микрозаймов населению в соответствии с указом Президента № 325.",
			info: {
				link: "/",
				text:
					'"О привлечении и предоставлении займов, деятельности микрофинансовых организаций"'
			}
		};
	}
};
</script>
<style></style>
