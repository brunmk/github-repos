import Link from "next/link";
import React from "react";
import { resolve } from "styled-jsx/css";

async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    `https://api.github.com/repos/cassidoo/${name}/contents`
  );
  const contents = await response.json();
  return contents;
}
const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");
  return (
    <>
      <div className="card-body">
        <h3>Directories</h3>
        <ul>
          {dirs.map((dir) => (
            <li key={dir.path}>
              <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RepoDirs;
