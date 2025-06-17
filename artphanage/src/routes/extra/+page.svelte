<script>
	let val = await fetch("https://mastodon.social/api/v1/statuses",{
	method : "POST",
	headers: {
		"Content-Type" : "application/json",
		"Authorization" : "Bearer MCwrYtioslkpUYdkdcD52bez_Ac7dgfgSTCgGzQdBiY",
	} ,
	body: JSON.stringify({
			status : "Hello Mastodon, This is a test",
	}
	)})
	console.log(val)
</script>