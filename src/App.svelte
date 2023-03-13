<script lang="ts">
  import Comic from './lib/Comic.svelte'
  import Bio from './lib/Bio.svelte'
  import Header from './lib/Header.svelte'
  import Experience from './lib/Experience.svelte'
  import Footer from './lib/Footer.svelte'
</script>

<main>
  <Header/>
  <main>
    <Bio/>
    <Experience/>
    <Comic/>
  </main>
  <footer>
    <Footer/>
  </footer>
</main>