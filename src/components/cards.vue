<template lang="pug">
section.py-5
    .container.px-15.mx-auto
        .mb-4.text-center
            .font-extrabold.text-lg.md_text-xl.mb-1 {{ heading }}
            div {{ leading }}
        .sm_flex.-mx-15.sm_flex-wrap
            .px-15.sm_w-6_12.md_w-4_12.lg_w-3_12.xl_w-2_12.mb-25.w-8_12.mx-auto( v-for="( carditem, index ) in cards" ) 
                img(
					:src="carditem.image"
					:alt="carditem.name"
					:title="carditem.name"
				).mb-1.w-full.shadow.rounded
                .text-center {{ carditem.name}}
</template>
<script>
import card1 from "../static/cards/01.png";
import card2 from "../static/cards/02.png";
import card3 from "../static/cards/03.png";
import card4 from "../static/cards/04.png";
import card5 from "../static/cards/05.png";
import card6 from "../static/cards/06.png";

export default {
	data() {
		return {
			heading: "Работаем с картами рассрочек",
			leading:
				"Деньги получаете наличными в течение 15-20 минут! Все расчеты только в белорусских рублях",
			cards: [
				{
					image: card1,
					name: "Карта рассрочки «халва»"
				},
				{
					image: card2,
					name: "«Карта покупок»"
				},
				{
					image: card3,
					name: "«Смарт» карта"
				},
				{
					image: card4,
					name: "Карта рассрочки «халва»"
				},
				{
					image: card5,
					name: "«Карта покупок»"
				},
				{
					image: card6,
					name: "«Смарт» карта"
				}
			]
		};
	}
};
</script>
<style></style>
