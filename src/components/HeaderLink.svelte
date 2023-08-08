<script lang="ts">
	export let scrollIntoView: ({ target }: { target: any }) => void;
	export let href: string;
	export let title: string;
</script>

<a class="dark:text-white font-semibold" {href} on:click|preventDefault={scrollIntoView}>{title}</a>
