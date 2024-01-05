<script>
  // @ts-nocheck

  import {fetchUser, postLate} from '../api.ts';
  import {onMount} from 'svelte';

  let users = [];

  onMount(async () => {
    users = await fetchUser();
  });

  let selectedUserId = 0;
  function handleNameChange(select) {
    const selectedOption = select.options[select.selectedIndex];
    const selectedNameId = selectedOption.getAttribute('data-customer-id');

    selectedUserId = selectedNameId;
  }

  function handleClockInput() {
    const clockInput = document.getElementById('ClockInput');
    const hour = clockInput.value.split(':')[0];
    const minute = clockInput.value.split(':')[1];
    const t = new Date();
    return t.setHours(hour, minute);
  }

  const addLate = async () => {
    const clockSelect = handleClockInput();
    if (selectedUserId === 0 || clockSelect === '') {
      alert('Please select a customer and a time');
      return;
    }

    await postLate(selectedUserId, clockSelect);
  };
</script>

<button
  class="bg-teal-400 text-black hover:bg-teal-500 px-6 py-3 rounded-full text-lg font-bold uppercase"
  onclick="my_modal_4.showModal()">Add Late</button
>

<dialog id="my_modal_4" class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <h3 class="font-bold text-lg">Add a new late! 😠</h3>
    <div class="modal-select-container flex justify-center gap-5 items-center">
      <div class="form-control w-full max-w-xs">
        <label class="label" for="customerSelect">
          <span class="label-text">Pick the customer</span>
        </label>
        <select
          id="customerSelect"
          class="select select-primary w-full max-w-xs"
          on:change={() => handleNameChange(event.target)}
        >
          <option disabled selected>Select Customer</option>
          {#each users as user}
            <option data-customer-id={user.id}>
              {user.name}
            </option>
          {/each}
        </select>
      </div>
      <div class="form-control w-full max-w-xs">
        <label class="label" for="ClockInput">
          <span class="label-text">Pick the meeting started at</span>
        </label>
        <input
          class="input input-bordered input-primary w-full max-w-xs"
          type="time"
          id="ClockInput"
          name="appt"
          min="09:00"
          max="18:00"
          required
        />
      </div>
    </div>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >✕</button
        >
        <button
          class="bg-teal-400 text-black hover:bg-teal-500 px-6 py-3 rounded-full text-lg font-bold uppercase"
          on:click={() => addLate()}>Add</button
        >
      </form>
    </div>
  </div>
</dialog>
