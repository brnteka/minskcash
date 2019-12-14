<template lang="pug">
div
	label(
		:for="id"
	).text-sm.mb-1.block {{ label }}
	input(
		:type="setType"
		:inputmode="setInputMode"
		:name="name"
		:id="id"
		:value="value"
		v-bind="$attrs"
		v-on="getListeners"
		@input="handleInput"
		:class="{'border-red': error}"
	).block.w-full.bg-gray.p-15.rounded.leading-none.border.border-gray-dark
</template>
<script>
export default {
	props: ["id", "value", "label", "name", "error", "type", "inputmode"],
	computed: {
		uid() {
			return uniqueId("id");
		},
		getListeners() {
			const { input, ...others } = this.$listeners;
			return { ...others };
		},
		setType() {
			return this.type ? this.type : "text";
		},
		setInputMode() {
			return this.inputmode ? this.inputmode : null;
		}
	},
	methods: {
		handleInput(e) {
			this.$emit("input", e.target.value);
		}
	}
};
</script>
<style></style>
