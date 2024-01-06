<script>
  import AddLate from '$lib/buttons/AddLate.svelte';
  import AddUser from '$lib/buttons/AddUser.svelte';
  import Chart from '$lib/Chart.svelte';
  import RemoveUser from "$lib/buttons/RemoveUser.svelte";
</script>

<h1 class="text-3xl font-bold underline text-center mt-10">
  Welcome to Late Report
</h1>
<div class="flex justify-center items-center mt-4">
  <!-- Premier élément avec une marge à droite -->
  <div class="mr-4">
    <Chart />
  </div>

  <!-- Deuxième élément avec une séparation verticale et une marge à gauche -->
  <div class="flex flex-col border-l border-gray-400 pl-4">
    <AddUser />
    <div class="h-4"></div>
    <RemoveUser />
    <div class="h-4"></div>
    <AddLate />
  </div>
</div>
