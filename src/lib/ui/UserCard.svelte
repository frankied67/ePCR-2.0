<script>
    import { users, createUser, deleteUser, loggedInUser, logout } from '$lib/stores/userStore';
    import { goto } from '$app/navigation';
  
    let newUsername = '';
    let newRole = '';
  
    const handleCreateUser = () => {
      if (newUsername && newRole) {
        createUser(newUsername, newRole);
        newUsername = ''; 
        newRole = ''; 
      }
    };
  
    const handleDeleteUser = (username) => {
      deleteUser(username);
    };

    const handleLogout = () => {
    logout();
    goto('/'); 
  };
  </script>
  
  <div class="card">
    <div class="card-header bg-primary text-white">
      <h4>Create User</h4>
    </div>
    <div class="card-body">
      <div class="mb-3">
        <input type="text" bind:value={newUsername} class="form-control" placeholder="Username" required />
      </div>
      <div class="mb-3">
        <input type="text" bind:value={newRole} class="form-control" placeholder="Role" required />
      </div>
      <button class="btn btn-primary" on:click={handleCreateUser}>Create User</button>
  
      <h5 class="mt-4">Users</h5>
      <ul class="list-group">
        {#each $users as user}
          <li class="list-group-item d-flex justify-content-between">
            <span>{user.username} - {user.role}</span>
            <button class="btn btn-danger btn-sm" on:click={() => handleDeleteUser(user.username)}>Delete</button>
          </li>
        {/each}
      </ul>
      <button class="btn btn-secondary mt-3" on:click={handleLogout}>Log Out</button>
    </div>
  </div>
  