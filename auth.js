<script>
  // Initialize Supabase
  const SUPABASE_URL = "https://mbfmbeokcccrbrmhimqn.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iZm1iZW9rY2NjcmJybWhpbXFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0MTYyOTMsImV4cCI6MjA3Njk5MjI5M30.JhuTDxkW-rIB9e6VOMMm8E8Y37pegQAEUE2_QJMKl3E";
  const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // Handle login form submit
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("❌ Login failed: " + error.message);
    } else {
      alert("✅ Logged in!");
      window.location.href = "confirmation.html"; // redirect page
    }
  });
</script>
