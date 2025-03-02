import { getCSRFToken } from "../helpers/auth";

export default function Logout() {
  const handleLogout = async () => {
    try {
      const response = await fetch("/users/logout/", {
        method: "POST",
        credentials: "include", // Ensures session cookies are sent
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCSRFToken(),
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

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
      Logout
    </button>
  );
}
