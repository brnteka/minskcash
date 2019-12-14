<template lang="pug">
header.header.py-1.md_py-2.fixed.top-0.left-0.w-full.bg-white.z-10.bg-white.shadow
    .container.mx-auto.h-full.px-15
        .flex.items-center.justify-between.flex-wrap.h-full
            .md_mr-15.w-full.md_w-auto.md_flex-none.mb-1.md_mb-0
                .header-name.font-extrabold.leading-none Деньги в долг в Минске
                div от 100 до 5 000 BYN
            nav.mr-15.header-nav.hidden.xl_block
                ul.flex
                    li(v-for="navitem in nav").m-1
                        a( :href="'#' + navitem.link" data-scroll ).inline-block {{ navitem.text }}
            .md_mr-15.flex-none
                span.font-extrabold.text-md (831) 255-00-00
            .md_w-auto.text-center.flex-none
                button( @click="$modal.show('contact-form')" ).header-cb-btn Заказать звонок
</template>
<script>
import SmoothScroll from "smooth-scroll";

export default {
	data() {
		return {
			nav: [
				{
					link: "howtogetmoney",
					text: "Как получить деньги?"
				},
				{
					link: "whywe",
					text: "Почему мы?"
				},
				{
					link: "rules",
					text: "Условия"
				},
				{
					link: "contacts",
					text: "Контакты"
				}
			]
		};
	},
	created() {},
	mounted() {
		new SmoothScroll('a[href*="#"]', {
			speed: 300,
			offset: 88
		});
	}
};
</script>
<style>
.header {
	height: 88px;
	@screen md {
	}
}
.header-name {
	@apply text-md;

	@screen md {
		font-size: 22px;
	}
}
.header-nav {
	ul {
		li {
			a {
				@apply relative;

				&::before {
					content: "";
					height: 1px;
					@apply bg-red absolute bottom-0 left-0 right-0 opacity-100;
				}

				&:hover {
					&::before {
						@apply opacity-0;
					}
				}
			}
		}
	}
}
.header-cb-btn {
	@apply underline font-extrabold text-md text-red p-0 bg-transparent;

	@screen md {
		@apply no-underline inline-block bg-red py-15 px-3 text-white rounded cursor-pointer border-none;
	}
}
</style>
