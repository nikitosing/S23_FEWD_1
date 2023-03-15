<script lang="ts">
  import Social from "./Social.svelte";
  import githubLogo from '../../assets/github.png'
  import mailLogo from '../../assets/mail.png'
  import telegramLogo from '../../assets/telegram.png'
</script>

<p class="footer-text">Nikita Pozdniakov. 3023</p>
<div class="social-links">
  <Social id={"gh-link"} href={"https://github.com/nikitosing"} src={githubLogo} classValue={"github"} />
  <Social id={"tg-link"} href={"https://t.me/nikitosing4"} src={telegramLogo} classValue={"telegram"} />
  <Social id={"email"} href={"mailto:n.pozdniakov@innopolis.university"} src={mailLogo} classValue={"mail"} />
</div>