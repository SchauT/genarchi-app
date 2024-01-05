<script>
  import LoadingAnimation from '$lib/LoadingAnimation.svelte';
  import {getHealth} from "../../api";

  let check = getHealth();
</script>

<h1 class="text-center mt-10">
  Backend API connexion is:
  {#await check}
    <LoadingAnimation />
  {:then}
    <strong style="color: green;">UP</strong>
  {:catch}
    <strong style="color: red;">DOWN</strong>
  {/await}
</h1>
