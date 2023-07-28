<script>
	import libraryImg from '../lib/images/library.png';
	import minesweeperImg from '../lib/images/minesweeper.png';
	import chessImg from '../lib/images/chess.png';
	import tictactoeImg from '../lib/images/tictactoe.png';
	import { ExternalLink, Github } from 'lucide-svelte';
</script>

<div
	class="h-screen flex flex-col justify-center items-center p-normal gap-normal dark:text-white"
	id="projects"
>
	<h1 class="h1">Projects</h1>
	<div class="flex flex-col gap-normal w-full">
		<div class="project-card-container">
			<img class="project-card-image" src={libraryImg} alt="Library app" />
			<div class="project-card-details-container">
				<h2>Library</h2>
				<p>A place to store your book information. Built with React and Firebase.</p>
				<div class="project-card-links-container">
					<a href="https://library-17792.web.app/" target="_blank"><ExternalLink /></a>
					<a href="https://github.com/theChantu/library" target="_blank"><Github /></a>
				</div>
			</div>
		</div>
		<div class="project-card-container">
			<img class="project-card-image" src={minesweeperImg} alt="Minesweeper" />
			<div class="project-card-details-container">
				<h2>Minesweeper</h2>
				<p>A simple recreation of minesweeper. Built with Svelte.</p>
				<div class="project-card-links-container">
					<a href="https://thechantu.github.io/minesweeper/" target="_blank"><ExternalLink /></a>
					<a href="https://github.com/theChantu/minesweeper" target="_blank"><Github /></a>
				</div>
			</div>
		</div>
		<div class="project-card-container">
			<img class="project-card-image" src={chessImg} alt="Chess" />
			<div class="project-card-details-container">
				<h2>Chess</h2>
				<p>A simple recreation of chess, with a not so great AI. Built with React.</p>
				<div class="project-card-links-container">
					<a href="https://thechantu.github.io/chess/" target="_blank"><ExternalLink /></a>
					<a href="https://github.com/theChantu/chess" target="_blank"><Github /></a>
				</div>
			</div>
		</div>
		<div class="project-card-container">
			<img class="project-card-image" src={tictactoeImg} alt="Tic Tac Toe" />
			<div class="project-card-details-container">
				<h2>Tic Tac Toe</h2>
				<p>A simple recreation of Tic Tac Toe, with a decent AI. Built with React.</p>
				<div class="project-card-links-container">
					<a href="https://thechantu.github.io/tictactoe/" target="_blank"><ExternalLink /></a>
					<a href="https://github.com/theChantu/tictactoe" target="_blank"><Github /></a>
				</div>
			</div>
		</div>
	</div>
</div>
