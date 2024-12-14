import toast from "react-hot-toast";

export const Logout = () => {
  if (window.confirm("Do you really want to logout?")) {
    localStorage.removeItem("isLoggedIn");
    toast.success("Logged out!");
    window.location.href = "/login";
  }
};
