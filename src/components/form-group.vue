<template lang="pug">
div
    label(:for="id").text-sm.mb-1.block {{ label }}
    input( type="text"
            :name="name"
            :id="id"
            :value="value"
            v-bind="$attrs"
            v-on="getListeners"
            @input="handleInput"
            :class="{'border-red': error}").block.w-full.bg-gray.p-15.rounded.leading-none.border.border-gray-dark
</template>
<script>
export default {
	props: ["id", "value", "label", "name", "error"],
	computed: {
		uid() {
			return uniqueId("id");
		},
		getListeners() {
			const { input, ...others } = this.$listeners;
			return { ...others };
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
