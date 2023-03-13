<script lang="ts">
  export let id : string;
  export let href : string;
  export let src : string;
  export let classValue : string;
</script>


<a {id} {href}>
  <img class="{classValue} icon" {src} alt={classValue}>
</a>
