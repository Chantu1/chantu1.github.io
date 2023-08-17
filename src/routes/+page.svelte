<script>
	import Layout from './+layout.svelte';
	import Projects from './Projects.svelte';
	import Header from './Header.svelte';
	import Home from './Home.svelte';
	import Contact from './Contact.svelte';
	import Footer from './Footer.svelte';
</script>

<svelte:head>
	<title>Jonathan Small</title>
	<meta name="description" content="A portfolio" />
</svelte:head>

<Header />
<Home />
<Projects />
<Contact />
<Footer />
