export default async function getProjectsFromGithub() {
  try {
    const response = await fetch(`https://api.github.com/users/${import.meta.env.VITE_GITHUB_HANDLE}/repos`);

    return response.json();
  } catch (e) {
    console.error(e);
  }
}
