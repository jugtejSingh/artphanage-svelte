<script>
	let { text, className } = $props();
</script>

<h3 class={className}>{text}</h3>

<style>
	.text1 {
		font-size: 3rem;
		overflow: hidden;
		border: none;
		white-space: nowrap;
		animation:
			typing 5s steps(50),
			cursorMargin 5s;
	}
	.text2 {
		font-size: 3rem;
		overflow: hidden;
		border: none;
		white-space: nowrap;
		width: 0;
		animation:
			typing2 5s steps(50) forwards,
			cursorMargin 5s;
		animation-delay: 5s;
	}
	.text3 {
	font-size: 3rem;
		overflow: hidden;
		white-space: nowrap;
		width: 0;
		border: none;
		animation:
			typing3 5s steps(50) forwards,
			cursorMargin 5s;
		animation-delay: 10s;
	}
	@keyframes typing {
		from {
			width: 0;
		}
		100% {
			width: 27rem;
		}
	}
	@keyframes typing2 {
		from {
			width: 0;
		}
		100% {
			width: 25rem;
		}
	}
	@keyframes typing3 {
		from {
			width: 0;
		}
		100% {
			width: 28.5rem;
		}
	}
	@keyframes cursorMargin {
		from{
			border-right: 1px solid black
	}	100%{
				 border-right: 1px solid black}
	}
</style>
