<script lang="ts">
	import HeaderLink from '../components/HeaderLink.svelte';

	// @ts-ignore
	function scrollIntoView({ target }) {
		const href = target.getAttribute('href');
		if (!href) return;
		const element = document.querySelector(href);
		if (!element) return;

		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<nav class="fixed top-0 w-full flex justify-between p-normal shadow-md z-50" id="header">
	<!-- Background blur effect  -->
	<div
		class="absolute inset-0 variant-filled-secondary bg-opacity-80 backdrop-blur-md pointer-events-none"
	/>
	<h1 class="text-white font-semibold select-none z-10">Jonathan</h1>
	<div class="flex gap-normal z-10">
		<HeaderLink {scrollIntoView} href="#home" title="Home" />
		<HeaderLink {scrollIntoView} href="#projects" title="Projects" />
		<HeaderLink {scrollIntoView} href="#contact" title="Contact" />
	</div>
</nav>
