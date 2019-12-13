<template lang="pug">
div
    .mb-05
        vue-slider(
            :value="value"
            @change="handleInput"
            use-keyboard=true
            :min="200"
            :max="5000"
            tooltip="none"
            :height="10"
            :dot-size="16"
            v-bind="$attrs"
            v-on="getListeners"
        )
    .flex.-mx-05.justify-between
        .flex-none.px-05
            span.text-sm 200 Руб
        .flex-none.px-05
            span.text-sm 5000 Руб
    .text-center.mb-1
        span.text-sm.leading-none.font-extrabold Я хочу получить:
    .text-center
        .inline-block
            input.bg-gray.p-15.rounded.border.border-gray-dark.text-lg.font-extrabold.text-red.leading-none(
                min="200"
                max="5000"
                type="number"
                :value="value"
                @change="testChange"
            )
        .inline-block.ml-15
            span.font-extrabold Руб
</template>
<script>
let sliderValue = {
	min: 200,
	max: 5000
};

export default {
	props: ["value"],
	computed: {
		getListeners() {
			const { change, ...others } = this.$listeners;
			return { ...others };
		}
	},
	methods: {
		handleInput(value) {
			this.$emit("input", value);
		},
		testChange(e) {
			let { valueAsNumber } = e.target;
			if (valueAsNumber > sliderValue.max) {
				this.handleInput(sliderValue.max);
				this.$forceUpdate();
			} else if (valueAsNumber < sliderValue.min) {
				this.handleInput(sliderValue.min);
				this.$forceUpdate();
			} else {
				this.handleInput(valueAsNumber);
			}
		}
	}
};
</script>
<style></style>
