export function getPersonLanguage() {
  return (
    localStorage.getItem("preferredLanguage").charAt(0).toUpperCase() +
    localStorage.getItem("preferredLanguage").slice(1)
  );
}
