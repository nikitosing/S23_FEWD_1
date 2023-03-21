<script lang="ts">
	import ExperienceItem from './ExperienceItem.svelte';
</script>

<div class="info-block">
	<h1>Experience:</h1>
	<ul>
		<ExperienceItem
			href={'https://github.com/blockscout/blockscout'}
			name={'BlockScout'}
			start={'05.2021'}
			end={'now'}
		/>
		<ExperienceItem
			href={'https://haclever.org/'}
			name={'HaClever'}
			start={'09.2020'}
			end={'05.2021'}
		/>
		<ExperienceItem name={'Freelance'} start={'2018'} end={'2021'} />
	</ul>
</div>

<style>
	.info-block {
		font-size: 20px;
		padding: 15px;
		text-align: left;
		max-width: 50%;
	}

	.info-block ul {
		padding-left: 0;
	}
</style>
