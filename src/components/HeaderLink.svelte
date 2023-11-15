<script lang="ts">
	export let scrollIntoView: ({ target }: { target: any }) => void;
	export let href: string;
	export let title: string;
</script>

<!-- Make on hover transparent background matching a similar color to the header -->
<a
	class="header-link text-white font-semibold select-none"
	{href}
	on:click|preventDefault={scrollIntoView}>{title}</a
>
