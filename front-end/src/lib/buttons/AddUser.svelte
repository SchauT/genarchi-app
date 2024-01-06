<script>
  // @ts-nocheck

  import { postUser } from '../../api.ts';
  let newUser = '';

  const addUser = async (name, time) => {
    const response = await postUser(name);
    if (response.status === 200) {
      console.log('User added successfully');
    } else {
      console.log('Error adding user');
    }
  };
</script>

<button
  class="bg-teal-400 text-black hover:bg-teal-500 px-6 py-3 rounded-full text-lg font-bold uppercase"
  onclick="add_usr_modal.showModal()">Create New User</button
>

<dialog id="add_usr_modal" class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <h3 class="font-bold text-lg">Add a new user!</h3>
    <div class="modal-select-container flex justify-center gap-5 items-center">
      <div class="form-control w-full max-w-xs">
        <label class="label" for="userInput">
          <span class="label-text">What's his name ?</span>
        </label>
        <input id="userInput" type="text" placeholder="Type here" class="input input-bordered select-primary w-full max-w-xs" bind:value={newUser}/>
      </div>
    </div>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >✕</button
        >
        <button
          class="bg-teal-400 text-black hover:bg-teal-500 px-6 py-3 rounded-full text-lg font-bold uppercase"
          on:click={() => newUser ? addUser(newUser) : null}>Add</button
        >
      </form>
    </div>
  </div>
</dialog>
