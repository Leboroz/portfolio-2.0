import type { GitHubUserRepo, GitHubUserReposResponse, Project } from "../../types";

export default async function getProjects(username: string): Promise<Project[]> {
  if (!username) throw new Error('username is missing');

  try {
    const repos = await getReposFromGithub(username);
    return convertGithubReposResponseToProjects(repos);
  } catch (e) {
    console.error(`Failed to fetch projects for username ${username}:`, e);
    return [];
  }
}

async function getForkedReposFromGithub(username: string): Promise<GitHubUserReposResponse> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);

  if (!response.ok) {
    throw new Error(`GitHub API request failed with status ${response.status}`);
  }

  return response.json();
}

async function getReposFromGithub(username: string): Promise<GitHubUserReposResponse> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);

  if (!response.ok) {
    throw new Error(`GitHub API request failed with status ${response.status}`);
  }

  return response.json();
}

function convertGithubReposResponseToProjects(githubRepos: GitHubUserReposResponse): Project[] {
  if (!Array.isArray(githubRepos)) {
    return [];
  }

  return githubRepos.map((githubRepo: GitHubUserRepo) => ({
    id: githubRepo.id,
    title: githubRepo.name,
    description: githubRepo.description,
    techStack: githubRepo.topics ?? [],
    liveUrl: githubRepo.homepage,
    sourceCode: githubRepo.html_url,
    createAt: githubRepo.created_at,
  }));
}
