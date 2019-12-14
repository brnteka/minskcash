<template lang="pug">
form.p-15.md_p-3.bg-white.rounded.shadow( @submit.prevent="submit" ref="form" )
	.mb-2
		.md_flex.-mx-15
			.md_w-6_12.px-15.mb-15.md_mb-0
				form-group(
					:label="phone.label"
					:inputmode="'decimal'"
					:name="phone.id"
					:id="phone.id + uid"
					:error="$v.phone.value.$error"
					v-model="phone.value"
				)
			.md_w-6_12.px-15
				form-group(
					:label="city.label"
					:name="city.id"
					:id="city.id + uid"
					v-model="city.value"
				)
	.mb-2
		range-slider( v-model="amount.value" )
		input(
			type="text"
			v-model="amount.value"
			hidden
			name="amount"
		)
	.text-center
		button.btn( type="submit" ) Получить деньги
</template>
<script>
import formGroup from "./form-group.vue";
import rangeSlider from "./range-slider.vue";
import { required } from "vuelidate/lib/validators";
import uniqueId from "lodash-es/uniqueId";
import sendForm from "../mixins/form-send.js";

export default {
	components: { formGroup, rangeSlider },
	mixins: [sendForm],
	data() {
		return {
			phone: {
				value: "",
				id: "phone",
				label: "Телефон"
			},
			city: {
				value: "",
				id: "city",
				label: "Ваш город"
			},
			amount: {
				value: 2500
			}
		};
	},
	validations: {
		phone: {
			value: {
				required
			}
		}
	},
	computed: {
		uid() {
			return uniqueId("uid");
		}
	},
	methods: {
		resetFields() {
			for (var key in this.$data) {
				key == "amount"
					? (this.$data[key].value = 2500)
					: (this.$data[key].value = "");
			}
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
<style></style>
