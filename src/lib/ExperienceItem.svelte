<script lang="ts">
  export let href : string = undefined
  export let name : string
  export let start : string
  export let end : string
</script>

{#if href}
  <li><a {href}>{name}</a>: {start} - {end}</li>
{:else}
  <li><p class="experience-item">{name}</p>: {start} - {end}</li>
{/if}
