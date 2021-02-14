export const logout = (e) => {
  e.preventDefault();
  localStorage.removeItem("auth-token");
  window.location = "/";
};
