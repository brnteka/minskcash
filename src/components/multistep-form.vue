<template lang="pug">
.border-4.rounded.shadow.border-red
    .pt-3.px-15.pb-25.text-center.border-b-2.border-gray
        .font-extrabold.text-lg.md_text-xl.mb-15 Подберите условия займа за 1 минуту!
        div Ответе на 4 вопроса и наши специалисты подберут для вас наилучшие предложения.
    .p-15.md_p-3
        .mb-25.text-center
            span.text-md Шаг {{ currentstep }} из {{ numberOfSteps }}
                |.
            span.text-md.font-extrabold.ml-05 {{ formdata.steps[activeStep].question }}
        form.mb-3
            .text-center(v-show="currentstep == 1")
                .inline-block.m-05.input-radio( v-for="(city, i) in formdata.steps.first.cities")
                    input(type="radio" name="city" :id="'city-' + i + '-' + id" :value="city" v-model="steps.first.city")
                    label(:for="'city-' + i + '-' + id" ) {{ city }}
            div(v-show="currentstep == 2")
                .mb-2
                    vue-slider( v-model="steps.second.amount" use-keyboard=true :min="200" :max="5000" tooltip="none" :height="10" :dot-size="16" )
                .text-center.mb-1
                    span.text-sm.leading-none Я хочу получить:
                .text-center
                    .inline-block
                        input.bg-gray.p-15.rounded.border.border-gray-dark.text-lg.font-extrabold.text-red.leading-none( min="200" max="5000" type="number" :value="steps.second.amount" @change="testChange")
                    .inline-block.ml-15
                        span.font-extrabold Руб
            .text-center(v-show="currentstep == 3")
                .inline-block.m-05.input-radio( v-for="(variant, i) in formdata.steps.third.credithistory")
                    input(type="radio" name="credithistory" :id="'credithistory-' + i + '-' + id" :value="variant" v-model="steps.third.credithistory")
                    label(:for="'credithistory-' + i + '-' + id" ) {{ variant }}
            div(v-show="currentstep == 4")
                .md_flex.-mx-15.justify-center
                    .md_w-6_12.lg_w-5_12.px-15.mb-15.md_mb-0
                        label.text-sm.mb-1.block Ваше имя
                        input.block.w-full.bg-gray.p-15.rounded.leading-none.border.border-gray-dark(type="text" v-model="steps.fourth.name")
                    .md_w-6_12.lg_w-5_12.px-15
                        label.text-sm.mb-1.block Контактный телефон
                        input.block.w-full.bg-gray.p-15.rounded.leading-none.border.border-gray-dark(type="text" v-model="steps.fourth.email")
        .text-center
            button.btn.m-05.md_m-15(@click="prevStep" v-if="currentstep > 1") Назад
            button.btn.m-05.md_m-15(@click="nextStep" v-if="currentstep != numberOfSteps" :class="{disabled: activeStepValidity}") Далее
            button.btn.m-05.md_m-15(v-if="currentstep == numberOfSteps") Получить условия
</template>

<script>
import { required } from "vuelidate/lib/validators";
import uniqueId from "lodash-es/uniqueId";

let sliderValue = {
	min: 200,
	max: 5000
};

export default {
	data() {
		return {
			formdata: {
				steps: {
					first: {
						question: "Город, в котором проживаете:",
						cities: [
							"Минск и область",
							"Брест и область",
							"Гомель и область",
							"Могилеви область",
							"Витебски область",
							"Гроднои область",
							"Другое"
						]
					},
					second: {
						question: "Желаемая сумма займа"
					},
					third: {
						question: "Какая у Вас кредитная история?",
						credithistory: [
							"Положительная",
							"Отрицательная",
							"Никогда не брал кредит"
						]
					},
					fourth: {
						question:
							"У нас есть для вас отличное предложение! Спасибо, что прошли опрос! Для Вас есть выгодные условия для займа!"
					}
				}
			},
			currentstep: 1,
			steps: {
				first: {
					city: ""
				},
				second: {
					amount: 2500
				},
				third: {
					credithistory: ""
				},
				fourth: {
					name: "",
					email: ""
				}
			}
		};
	},
	validations: {
		steps: {
			first: {
				city: {
					required
				}
			},
			second: {
				amount: {
					required
				}
			},
			third: {
				credithistory: {
					required
				}
			},
			fourth: {
				name: {
					required
				},
				email: {
					required
				}
			}
		}
	},
	computed: {
		numberOfSteps() {
			return Object.keys(this.steps).length;
		},
		activeStep() {
			return Object.keys(this.steps)[this.currentstep - 1];
		},
		activeStepValidity() {
			return this.$v.steps[this.activeStep].$invalid;
		},
		id() {
			return uniqueId("id");
		}
	},
	methods: {
		nextStep(e) {
			if (!this.activeStepValidity) {
				this.currentstep++;
			}
		},
		prevStep(e) {
			this.currentstep--;
		},
		testChange(e) {
			let { valueAsNumber } = e.target;
			if (valueAsNumber > sliderValue.max) {
				this.steps.second.amount = sliderValue.max;
				this.$forceUpdate();
			} else if (valueAsNumber < sliderValue.min) {
				this.steps.second.amount = sliderValue.min;
				this.$forceUpdate();
			} else {
				this.steps.second.amount = valueAsNumber;
			}
		}
	}
};
</script>
