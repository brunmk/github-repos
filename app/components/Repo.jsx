import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(`https://api.github.com/repos/cassidoo/${name}`);
  const repo = await response.json();
  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  return (
    <>
      <div className="card-body">
        <h2 className="card-title">{repo.name}</h2>
        <p>{repo.description}</p>
      </div>
      <div className="card-footer">
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
    </>
  );
};

export default Repo;
