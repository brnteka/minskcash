<template lang="pug">
.border-4.rounded.shadow.border-red
    .pt-3.px-15.pb-25.text-center.border-b-2.border-gray
        .font-extrabold.text-lg.md_text-xl.mb-15 Подберите условия займа за 1 минуту!
        div Ответьте на 4 вопроса и наши специалисты подберут для вас наилучшие предложения.
    .p-15.md_p-3
        .mb-25.text-center
            span.text-md Шаг {{ currentstep }} из {{ numberOfSteps }}
                |.
            span.text-md.font-extrabold.ml-05 {{ steps[activeStep].question }}
        form(@submit.prevent="submit" ref="form")
            .mb-3
                .text-center(v-show="currentstep == 1")
                    .inline-block.m-05.input-radio( v-for="(city, i) in steps.first.cities")
                        input(type="radio" name="city" :id="'city' + i + uid" :value="city" v-model="steps.first.city.value")
                        label(:for="'city' + i + uid" ) {{ city }}
                div(v-show="currentstep == 2")
                    range-slider( v-model="steps.second.amount.value")
                    input(type="text" v-model="steps.second.amount.value" hidden name="amount")
                .text-center(v-show="currentstep == 3")
                    .inline-block.m-05.input-radio( v-for="(variant, i) in steps.third.credithistories")
                        input(type="radio" name="credithistory" :id="'credithistory' + i + uid" :value="variant" v-model="steps.third.credithistory.value")
                        label(:for="'credithistory' + i + uid" ) {{ variant }}
                div(v-show="currentstep == 4")
                    .mb-2.md_flex.-mx-15.justify-center
                        .md_w-5_12.lg_w-4_12.px-15
                            form-group(:label="steps.fourth.phone.label" :inputmode="'decimal'" :id="steps.fourth.phone.id + uid" :name="steps.fourth.phone.id" v-model="steps.fourth.phone.value" :error="$v.steps.fourth.phone.value.$error")
            .text-center
                button.btn.m-05.md_m-15(@click.prevent="prevStep" v-if="currentstep > 1") Назад
                button.btn.m-05.md_m-15(@click.prevent="nextStep" v-if="currentstep != numberOfSteps" :class="{disabled: activeStepValidity}") Далее
                button.btn.m-05.md_m-15(type="submit" v-if="currentstep == numberOfSteps") Получить условия
</template>

<script>
import formGroup from "./form-group.vue";
import rangeSlider from "./range-slider.vue";
import { required } from "vuelidate/lib/validators";
import uniqueId from "lodash-es/uniqueId";
import sendForm from "../mixins/form-send.js";

let sliderValue = {
	min: 200,
	max: 5000
};

export default {
	mixins: [sendForm],
	components: {
		formGroup,
		rangeSlider
	},
	data() {
		return {
			currentstep: 1,
			steps: {
				first: {
					question: "Город, в котором проживаете:",
					cities: [
						"Минск и область",
						"Брест и область",
						"Гомель и область",
						"Могилев и область",
						"Витебск и область",
						"Гродно и область",
						"Другое"
					],
					city: {
						value: ""
					}
				},
				second: {
					question: "Желаемая сумма займа",
					amount: {
						value: 2500
					}
				},
				third: {
					question: "Какая у Вас кредитная история?",
					credithistories: [
						"Положительная",
						"Отрицательная",
						"Никогда не брал кредит"
					],
					credithistory: {
						value: ""
					}
				},
				fourth: {
					question:
						"У нас есть для вас отличное предложение! Спасибо, что прошли опрос! Для Вас есть выгодные условия для займа!",
					phone: {
						value: "",
						id: "phone",
						label: "Контактный телефон"
					}
				}
			}
		};
	},
	validations: {
		steps: {
			first: {
				city: {
					value: {
						required
					}
				}
			},
			second: {
				amount: {
					value: {
						required
					}
				}
			},
			third: {
				credithistory: {
					value: {
						required
					}
				}
			},
			fourth: {
				phone: {
					value: {
						required
					}
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
		uid() {
			return uniqueId("uid");
		}
	},
	methods: {
		nextStep() {
			if (!this.activeStepValidity) {
				this.currentstep++;
			}
		},
		prevStep() {
			this.currentstep--;
		},
		resetFields() {
			this.currentstep = 1;
			this.steps.first.city.value = "";
			this.steps.second.amount.value = 2500;
			this.steps.third.credithistory.value = "";
			this.steps.fourth.name.value = "";
			this.steps.fourth.phone.value = "";
		},
		submit() {
			this.$v.$touch();
			if (!this.$v.$invalid) {
				this.sendForm(this.$refs.form)
					.then(response => {
						this.$modal.show("dialog", {
							title: "Заявка получена, ожидайте!",
							text: "Менеджер вам позвонит в ближайшее время.",
							buttons: [
								{
									title: "Закрыть",
									handler: () => {
										this.$modal.hide("dialog");
										this.$modal.hide("multistep-form");
										this.$v.$reset();
										this.resetFields();
									}
								}
							]
						});
					})
					.catch(error => {
						this.$modal.show("dialog", {
							title: "Что-то пошло не так.",
							text: error,
							buttons: [
								{
									title: "Закрыть",
									handler: () => {
										this.$modal.hide("dialog");
										this.$modal.hide("multistep-form");
									}
								}
							]
						});
					});
			}
		}
	}
};
</script>
