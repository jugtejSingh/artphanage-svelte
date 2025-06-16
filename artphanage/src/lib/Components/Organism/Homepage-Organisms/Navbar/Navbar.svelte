<script>
	import Button from '$lib/Components/Atoms/Button/Button.svelte';
</script>

<section class="Navbar">
	<div class="Navbar__menu">
	<Button variant="primary"  link="/blog"><img src="/burger-menu.svg" alt="" class="Navbar__menuImg" /></Button>
	</div>
	<div class="Navbar__links">
		<Button variant="primary"  link="/"><span class="NavLink">Home</span></Button>
		<Button variant="primary"  link="/shop"><span class="NavLink">Shop</span></Button>
		<Button variant="primary"  link="/blog"><span class="NavLink">Blog</span></Button>
	</div>

	<img src="/Logo2.png" alt="" class="Navbar__logo" />
	<div>
	<Button variant="primary" link="/cart">
		<img src="/shopping-cart.png" alt="" class="Navbar__shopping-cart" />
	</Button>
	</div>
</section>

<style>
	.Navbar__menu{
		display: none;
	}
	.Navbar__menuImg {
		width: 2rem;
	}
	.Navbar {
		height: 10vh;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 5px solid;
		border-image: linear-gradient(to left, #ffffff, #005F73) 1;
	}
	.Navbar__links {
		margin-left: 4rem;
		display: flex;
		flex-direction: row;
		gap: 5rem;
	}
	.Navbar__logo {
		margin-right: 10rem;
		width: 15rem;
		height: 4rem;
	}
	.Navbar__shopping-cart {
		margin-right: 4rem;
		width: 1.8rem;
		height: 2rem;
	}
	.NavLink:hover{
		padding-bottom: 0.5rem ;
		border-bottom: 1px solid black;
	}

	@media screen and (max-width: 1000px) {
		.Navbar__logo {
			margin-right: 5rem;
		}
	}
	@media screen and (max-width: 900px) {
		.Navbar__logo {
			margin-right: 3rem;
		}
	}

	@media screen and (max-width: 754px) {
		.Navbar__links {
			gap: 3rem;
		}
	}
		@media screen and (max-width: 633px) {
			.Navbar__links {
				gap: 1rem;
			}
		}

	@media screen and (max-width: 571px) {
		.Navbar__links {
			display: none;
		}
		.Navbar__menu {
			margin-left: 2rem;
			display: inline;
		}
		.Navbar__logo {
			margin-right: 0rem;
		}
		.Navbar__shopping-cart {
			margin-right: 2rem;
		}
	}
	@media screen and (max-width: 320px) {
		.Navbar__links {
			display: none;
		}
		.Navbar__menu {
			margin-left: 1rem;
			width: 1.5rem;
			display: inline;
		}
		.Navbar__menuImg {
			width: 1.5rem;
		}
		.Navbar__logo{
			width: 12rem;
			height: 3rem;
		}
		.Navbar__shopping-cart {
			margin-right: 1rem;
			width: 1.4rem;
			height: 1.4rem;
		}
	}
	@media screen and (max-width: 200px) {
		.Navbar__menu {
			margin-left: 0;
		}
		.Navbar__shopping-cart {
			margin-right: 0;
		}
	}

</style>
