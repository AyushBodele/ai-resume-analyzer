import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>No resumes found. Upload your first resume to get feedback.</h2>
        </div>

        {/* Static loading image (not tied to async fetch anymore) */}
        <div className="flex flex-col items-center justify-center">
          <img src="/images/resume-scan-2.gif" className="w-[200px]" />
        </div>

        {/* Upload button */}
        <div className="flex flex-col items-center justify-center mt-10 gap-4">
          <Link
            to="/upload"
            className="primary-button w-fit text-xl font-semibold"
          >
            Upload Resume
          </Link>
        </div>
      </section>
    </main>
  );
}
