import { cache } from "react";
import "server-only";

export const getGithubStats = cache(async () => {
  const query = `
        {
          user(login: "supremedeity") {
            followers {
              totalCount
            }
            repositories(first: 100) {
              nodes {
                stargazers {
                  totalCount
                }
              }
            }
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
            }
            pullRequests(first: 100) {
              totalCount
            }
            issues(first: 100) {
              totalCount
            }
          }
        }
      `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: {revalidate: 3600}
  });

  const result = await response.json();

  const user = result.data.user;
  const totalStars = user.repositories.nodes.reduce(
    (acc: any, repo: any) => acc + repo.stargazers.totalCount,
    0
  );

  return {
    followers: user.followers.totalCount,
    totalStars: totalStars,
    totalContributions:
      user.contributionsCollection.contributionCalendar.totalContributions,
    totalPRs: user.pullRequests.totalCount,
    totalIssues: user.issues.totalCount,
  };
});
