import React from "react";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import Link from "next/link";

async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/cassidoo/repos");
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  return (
    <div className="container">
      <h2 className="my-4 text-center">Repositories</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {repos.map((repo) => (
          <div className="col">
            <Link
              href={`/code/repos/${repo.name}`}
              className="text-decoration-none"
            >
              <div key={repo.id} className="card h-100 text-bg-light">
                <div className="card-body">
                  <h4 className="card-title">{repo.name}</h4>
                  <p>{repo.description}</p>
                </div>
                <div className="card-footer ">
                  <span className="me-3">
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span className="me-3">
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                  <span className="me-3">
                    <FaEye /> {repo.watchers_count}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReposPage;
