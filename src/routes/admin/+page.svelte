<script>
    import { loggedInUser } from '$lib/stores/userStore';
    import { goto } from '$app/navigation';
    import UserCard from '$lib/ui/UserCard.svelte';

    $: {
    if (!$loggedInUser) {
      goto('/');
    } else if ($loggedInUser.role !== 'admin') {
      goto('/');
    }
  }
  </script>
  
  <div class="container my-4">
    <h2>Admin Panel</h2>
    <UserCard />
  </div>
  