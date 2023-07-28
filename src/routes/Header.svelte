<script lang="ts">
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

<div id="header">
	<nav
		class="fixed top-0 w-full flex justify-between bg-white dark:bg-primary p-normal shadow-md dark:shadow-dark"
	>
		<h1 class="dark:text-white font-semibold">Jonathan</h1>
		<div class="flex gap-normal">
			<a class="dark:text-white font-semibold" href="#home" on:click|preventDefault={scrollIntoView}
				>Home</a
			>
			<a
				class="dark:text-white font-semibold"
				href="#projects"
				on:click|preventDefault={scrollIntoView}>Projects</a
			>
			<a
				class="dark:text-white font-semibold"
				href="#contact"
				on:click|preventDefault={scrollIntoView}>Contact</a
			>
		</div>
	</nav>
</div>
