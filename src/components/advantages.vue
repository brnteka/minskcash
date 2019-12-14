<template lang="pug">
section#whywe.py-5.bg-cover( :style="{ backgroundImage: `url('${bg}')` }" )
    .container.px-15.mx-auto
        .mb-4.text-center
            span.text-white.font-extrabold.text-lg.md_text-xl {{ heading }}
        .md_flex.-mx-15.justify-around
            .xl_w-5_12.px-15.md_w-6_12
                ul
                    li.advantage-list-item.relative.pl-5.mb-3( v-for="( advantageitem, index ) in advantages" v-if="index < 5" )
                        span.text-white.font-extrabold.text-md {{ advantageitem }}
            .xl_w-5_12.px-15.md_w-6_12
                ul
                    li.advantage-list-item.relative.pl-5.mb-3( v-for="( advantageitem, index ) in advantages" v-if="index > 4" )
                        span.text-white.font-extrabold.text-md {{ advantageitem }}
        .mt-4.text-center
            button( @click="$modal.show('contact-form')" ).btn Получить деньги
</template>
<script>
import bg from "../static/bg.png";
//import tickList from "../images/tick-list.png";
export default {
	data() {
		return {
			bg: bg,
			heading: "Мы помогаем решить финансовые вопросы людям",
			advantages: [
				"Имеющим судимости",
				"Находящимся в декретном отпуске",
				"Пенсионерам, безработным",
				"Студентам",
				"Суммы займов от 100 до 5000 BYN",
				"Без официального места работы",
				"С плохой кредитной историей",
				"Без справки о доходах и залога",
				"Лицам от 18 до 60 лет",
				"Срок возврата от 5 месяцев до 2 лет"
			]
		};
	}
};
</script>
<style>
.advantage-list-item::before {
	content: url("../static/tick-list.png");
	@apply block absolute top-0 left-0;
}
</style>
