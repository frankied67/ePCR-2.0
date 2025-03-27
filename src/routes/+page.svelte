<script>
    import { goto } from "$app/navigation";
    
    let username = "";
    let password = "";
  
    async function login() {
      const success = true;

      if (success) {
        goto("/complaint");
      }
    }
  </script>
  
  <style>
    .login-page {
      background: url('/ambulance1.jpg') no-repeat center center;
      background-size: cover;
      height: 100vh;
    }
    .login-card {
      width: 100%;
      max-width: 400px;
      background: rgba(255, 255, 255, 0.9);
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  </style>
  
  <div class="login-page d-flex justify-content-center align-items-center">
    <div class="login-card">
      <h3 class="text-center mb-4">Welcome to ePCR 2.0</h3>
      <form on:submit|preventDefault={login}>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" id="username" class="form-control" bind:value={username} required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" id="password" class="form-control" bind:value={password} required />
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
      </form>
    </div>
  </div>

