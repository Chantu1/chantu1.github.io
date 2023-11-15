<svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g id="loading">
		<rect width="120" height="100" fill="white" />
		<path
			id="spinner"
			d="M104 50C107.314 50 110.037 47.304 109.641 44.0141C108.467 34.2797 104.449 25.0565 98.0248 17.5329C90.2959 8.4809 79.5912 2.48305 67.8355 0.61777C56.0798 -1.24752 44.0443 1.14213 33.8929 7.35705C23.7416 13.572 16.1403 23.2045 12.4558 34.5226C8.77134 45.8407 9.24537 58.102 13.7927 69.1019C18.34 80.1018 26.6623 89.1187 37.2632 94.5313C47.8641 99.9439 60.0481 101.397 71.6247 98.6299C81.2466 96.3298 89.9242 91.2395 96.6035 84.0616C98.8609 81.6357 98.2465 77.8531 95.5678 75.9023L74.8989 60.8502C70.2032 57.4305 72.6221 50 78.4311 50H104Z"
			fill="url(#paint0_linear_1_2)"
		/>
		<circle id="foreground" cx="60" cy="50" r="40" fill="black" />
	</g>
	<defs>
		<linearGradient
			id="paint0_linear_1_2"
			x1="110"
			y1="46"
			x2="10"
			y2="62"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color="#D9D9D9" stop-opacity="0" />
			<stop offset="1" stop-color="#D9D9D9" />
		</linearGradient>
	</defs>
</svg>

<style>
	/* #spinner {
		fill: black;
	} */
	#foreground {
		fill: white;
	}

	#spinner {
		animation: loading 0.75s infinite linear;
		transform-origin: center;
	}

	@keyframes loading {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
