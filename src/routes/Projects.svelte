<script>
	import libraryImg from '../lib/images/library.png';
	import minesweeperImg from '../lib/images/minesweeper.png';
	import chessImg from '../lib/images/chess.png';
	import tictactoeImg from '../lib/images/tictactoe.png';
	import { ExternalLink, Github } from 'lucide-svelte';
	import Project from '../components/Project.svelte';
</script>

<div class="min-h-screen flex flex-col justify-center items-center gap-normal" id="projects">
	<div class="flex flex-col gap-normal justify-center items-center">
		<h1 class="h1 font-bold">Projects</h1>
		<p>Here are some samples of my current projects.</p>
	</div>
	<div class="flex flex-wrap gap-normal w-full p-normal variant-filled-primary">
		<Project
			image={libraryImg}
			href="https://library-17792.web.app/"
			description="A place to store your book information."
		/>
		<Project
			image={minesweeperImg}
			href="https://thechantu.github.io/minesweeper/"
			description="A recreation of minesweeper."
		/>
		<Project
			image={chessImg}
			href="https://thechantu.github.io/chess/"
			description="A recreation of chess."
		/>
		<Project
			image={tictactoeImg}
			href="https://thechantu.github.io/tictactoe/"
			description="A recreation of Tic Tac Toe."
		/>
	</div>
</div>
