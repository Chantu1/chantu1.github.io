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

<!-- TODO: Make the anchors a reusable component and add hover effects to it (like an underline that comes from the middle out to left and right) -->
<!-- <nav class="fixed top-0 w-full flex justify-between p-normal shadow-md z-50" id="header">
	<h1 class="dark:text-white font-semibold">Jonathan</h1>
	<div class="flex gap-normal">
		<HeaderLink {scrollIntoView} href="#home" title="Home" />
		<HeaderLink {scrollIntoView} href="#projects" title="Projects" />
		<HeaderLink {scrollIntoView} href="#contact" title="Contact" />
	</div>
	<div class="absolute top-0 left-0 w-full h-full filter blur-lg opacity-70" />
</nav> -->
<nav class="fixed top-0 w-full flex justify-between p-normal shadow-md z-50" id="header">
	<!-- Background blur effect  -->
	<div class="absolute inset-0 bg-opacity-50 backdrop-blur-md pointer-events-none" />
	<h1 class="font-semibold z-10">Jonathan</h1>
	<div class="flex gap-normal z-10">
		<HeaderLink {scrollIntoView} href="#home" title="Home" />
		<HeaderLink {scrollIntoView} href="#projects" title="Projects" />
		<HeaderLink {scrollIntoView} href="#contact" title="Contact" />
	</div>
</nav>
