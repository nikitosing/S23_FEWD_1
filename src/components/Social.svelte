<script lang="ts">
	export let id: string;
	export let href: string;
	export let src: string;
	export let classValue: string;
</script>

<a {id} {href}>
	<img class="{classValue} icon" {src} alt={classValue} />
</a>

<style>
	.icon {
		height: 45px;
		width: 45px;
	}

	.social-links {
		margin-right: 10px;
	}

	a {
		text-decoration: none;
	}
</style>
