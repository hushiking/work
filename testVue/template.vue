<template v-if="loginType === 'username'">
	<laber>Username</laber>
	<input type="text" placeholder="Enter your username">
</template>
<template v-else>
	<label>Email</label>
	<input type="text" placeholder="Enter your email address">
</template>
<script>
	export default {
		name: 'login'
	}
</script>
<style></style>