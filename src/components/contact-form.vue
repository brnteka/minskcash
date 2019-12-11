<template lang="pug">
form.p-15.md_p-3.bg-white.rounded
    .mb-2
        label.text-sm.mb-1.block Телефон
        input.block.w-full.bg-gray.p-15.rounded.leading-none.border.border-gray-dark(type="text")
    .mb-2
        label.text-sm.mb-1.block Сумма
        input.block.w-full.bg-gray.p-15.rounded.leading-none.border.border-gray-dark(type="text")
    .mb-2
        label.text-sm.mb-1.block Город
        input.block.w-full.bg-gray.p-15.rounded.leading-none.border.border-gray-dark(type="text")
    div
        input.btn.btn-block(type="submit" value="Отправить заявку")
</template>
<script>
export default {};
</script>
<style></style>
