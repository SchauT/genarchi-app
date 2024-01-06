<script>
  // @ts-nocheck

  import {deleteUser, fetchUser} from '../../api.ts';
  import {onMount} from 'svelte';

  let users = [];

  onMount(async () => {
    users = await fetchUser();
  });

  const removeUser = async () => {
    const selectedUserName = document.getElementById('customerSelect').value.trim();
    if (selectedUserName === '') {
      alert('Please select a customer');
      return;
    }

    await deleteUser(selectedUserName);
  };
</script>

<button
  class="bg-teal-400 text-black hover:bg-teal-500 px-6 py-3 rounded-full text-lg font-bold uppercase"
  onclick="remove_usr_modal.showModal()">Remove User</button
>

<dialog id="remove_usr_modal" class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <h3 class="font-bold text-lg">Remove a user.</h3>
    <div class="modal-select-container flex justify-center gap-5 items-center">
      <div class="form-control w-full max-w-xs">
        <label class="label" for="customerSelect">
          <span class="label-text">Pick the user to remove</span>
        </label>
        <select
          id="customerSelect"
          class="select select-primary w-full max-w-xs"
        >
          <option disabled selected>Select User</option>
          {#each users as user}
            <option data-customer-name={user.name}>
              {user.name}
            </option>
          {/each}
        </select>
      </div>
    </div>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >✕</button
        >
        <button
          class="bg-teal-400 text-black hover:bg-teal-500 px-6 py-3 rounded-full text-lg font-bold uppercase"
          on:click={() => removeUser()}>Remove</button
        >
      </form>
    </div>
  </div>
</dialog>
