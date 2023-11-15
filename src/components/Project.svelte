<script lang="ts">
	export let image: string;
	export let href: string;
	export let description: string;
</script>

<button
	class="flex-1 min-w-project max-h-96 relative overflow-hidden rounded-md group text-white dark:text-black shadow-sm transition duration-300 ease-in hover:shadow-lg cursor-default"
>
	<img
		class="object-cover w-full h-full transition duration-300 transform group-hover:scale-150 group-hover:opacity-0 group-focus:scale-150 group-focus:opacity-0"
		src={image}
		alt=""
	/>
	<div
		class="flex flex-col gap-normal p-normal text-center variant-filled-surface absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-darkPurple justify-center items-center transition ease-in duration-300"
	>
		<p class="text-black text-xl">
			{description}
		</p>
		<a class="btn variant-filled-primary" tabindex="0" {href} target="_blank">
			<span class="font-semibold text-lg">Preview</span>
		</a>
	</div>
</button>
