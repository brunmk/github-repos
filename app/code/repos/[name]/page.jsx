import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";
import { FaArrowLeft } from "react-icons/fa";

const RepoPage = ({ params: { name } }) => (
  <div className="container">
    <div className="card">
      <div className="card-body">
        <Link href="/code/repos">
          <FaArrowLeft className="me-1" />
          Back to repositories
        </Link>
      </div>
      <Suspense
        fallback={<div className="card-body">loading repositories...</div>}
      >
        <Repo name={name} />
      </Suspense>
      <Suspense
        fallback={<div className="card-body">loading directories...</div>}
      >
        <RepoDirs name={name} />
      </Suspense>
    </div>
  </div>
);

export default RepoPage;
