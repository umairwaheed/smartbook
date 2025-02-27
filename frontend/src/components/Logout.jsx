export default function Logout() {
  const handleLogout = async () => {
    try {
      const response = await fetch("/users/logout/", {
        method: "POST",
        credentials: "include", // Ensures session cookies are sent
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCSRFToken(), // Include CSRF token for security
        },
      });

      if (response.ok) {
        console.log("Logout successful");
        console.log(response);
        if (response.redirected) {
          const url = new URL(response.url);
          window.location.href = url.pathname;
        }
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Function to get CSRF token from cookies
  function getCSRFToken() {
    const csrfCookie = document.cookie.split("; ").find((row) => row.startsWith("csrftoken="));
    return csrfCookie ? csrfCookie.split("=")[1] : "";
  }

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
      Logout
    </button>
  );
}
