<script lang="ts">
	import { Github, Linkedin, Mail } from 'lucide-svelte';
</script>

<div
	class="min-h-screen flex flex-col gap-normal justify-center items-center p-normal dark:text-white"
	id="contact"
>
	<div class="flex flex-col gap-normal justify-center items-center">
		<h1 class="h1 font-bold">Contact</h1>
		<p>Here are some ways you can find me.</p>
	</div>
	<div class="flex gap-normal">
		<a href="mailto:jonmsmall1030@gmail.com" target="_blank" class="btn variant-filled-primary">
			<span><Mail /></span>
		</a>
		<a href="https://github.com/theChantu" target="_blank" class="btn variant-filled-primary">
			<span><Github /></span>
		</a>
		<a
			href="https://www.linkedin.com/in/jonathan-s-8277741ba/"
			target="_blank"
			class="btn variant-filled-primary"
		>
			<span><Linkedin /></span>
		</a>
	</div>
</div>
