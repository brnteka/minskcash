<template lang="pug">
form( @submit.prevent="submit" ref="form" ).p-15.md_p-3.bg-white.rounded
	.mb-2
		form-group(
			:id="phone.id + uid"
			:name="phone.id"
			:inputmode="'decimal'"
			:label="phone.label"
			v-model="phone.value"
			:error="$v.phone.value.$error"
		)
	.mb-2
		form-group(
			:id="amount.id + uid"
			:inputmode="'decimal'"
			:name="amount.id"
			:label="amount.label"
			v-model="amount.value"
		)
	.mb-2
		form-group(
			:id="city.id + uid"
			:name="city.id"
			:label="city.label"
			v-model="city.value"
		)
	div
		button.btn.btn-block( type="submit" ) Отправить
</template>
<script>
import formGroup from "./form-group.vue";
import { required } from "vuelidate/lib/validators";
import uniqueId from "lodash-es/uniqueId";
import sendForm from "../mixins/form-send.js";

export default {
	mixins: [sendForm],
	components: {
		formGroup
	},
	data() {
		return {
			phone: {
				value: "",
				label: "Телефон",
				id: "phone"
			},
			amount: {
				value: "",
				label: "Сумма",
				id: "amount"
			},
			city: {
				value: "",
				label: "Город",
				id: "city"
			}
		};
	},
	computed: {
		uid() {
			return uniqueId("uid");
		}
	},
	validations: {
		phone: {
			value: {
				required
			}
		}
	},
	methods: {
		resetFields() {
			for (var key in this.$data) {
				this.$data[key].value = "";
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
										this.$v.$reset();
										this.resetFields();
										this.$modal.hide("dialog");
										this.$modal.hide("contact-form");
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
										this.$modal.hide("contact-form");
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
