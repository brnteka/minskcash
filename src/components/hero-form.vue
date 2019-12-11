<template lang="pug">
form.p-15.md_p-3.bg-white.rounded.shadow(@submit.prevent)
    .mb-2
        .md_flex.-mx-15
            .md_w-6_12.px-15.mb-15.md_mb-0
                label.block.mb-1.text-sm Телефон
                input.block.w-full.bg-gray.p-15.rounded.leading-none.border.border-gray-dark(type="text")
            .md_w-6_12.px-15
                label.block.mb-1.text-sm Ваш город
                input.block.w-full.bg-gray.p-15.rounded.leading-none.border.border-gray-dark(type="text")
    .mb-05
        .mb-1
            vue-slider(v-model="amount" use-keyboard=true :min="200" :max="5000" tooltip="none" :height="10" :dot-size="16" )
        .flex.-mx-05.justify-between
            .flex-none.px-05
                span.text-sm 200 Руб
            .flex-none.px-05
                span.text-sm 5000 Руб
    .mb-25
        .text-center.mb-1
            span.text-sm.leading-none Я хочу получить:
        .text-center
            .inline-block
                input.bg-gray.p-15.rounded.border.border-gray-dark.text-lg.font-extrabold.text-red.leading-none( min="200" max="5000" type="number" @change="testChange" :value="amount")
            .inline-block.ml-15
                span.font-extrabold Руб
    .text-center
        input.btn(type="submit" value="Получить деньги")
</template>
<script>
export default {
	data() {
		return {
			phone: "",
			city: "",
			amount: 2500
		};
	},
	methods: {
		testChange(e) {
			let min = 200;
			let max = 5000;
			let { valueAsNumber } = e.target;
			if (valueAsNumber > max) {
				this.amount = max;
				this.$forceUpdate();
			} else if (valueAsNumber < min) {
				this.amount = min;
				this.$forceUpdate();
			} else {
				this.amount = valueAsNumber;
			}
		}
	}
};
</script>
<style></style>
