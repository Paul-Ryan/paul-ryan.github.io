import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex h-screen animate-fade-in flex-col p-4 sm:p-8">
      <nav>
        <Link to="/">&larr; Home</Link>
      </nav>
      <div className="flex max-w-2xl grow flex-col justify-center">
        <h1>About me</h1>
        <p className="mt-4 leading-relaxed">
          I&apos;m Paul, a web developer who enjoys building things for the
          internet. I like working across the stack, from crafting clean UIs to
          wiring up the services behind them.
        </p>
        <p className="mt-4 leading-relaxed">
          When I&apos;m not coding, you can usually find me watching movies
          &mdash; I even built{" "}
          <a href="https://pauls-movie-list.com" rel="noopener noreferrer">
            a site
          </a>{" "}
          to keep track of them.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="https://www.linkedin.com/in/paul-ryan-12a5932a/"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a href="https://github.com/Paul-Ryan" rel="noopener noreferrer">
            github
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
