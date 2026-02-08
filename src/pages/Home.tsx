import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-screen animate-fade-in flex-col justify-center align-middle">
      <div className="flex max-w-4xl grow flex-col sm:flex-row">
        <section className="flex flex-col justify-center p-2 sm:grow-1 sm:p-4">
          <h1>
            Hello,
            <br />
            I&apos;m Paul
          </h1>
          <p>/ Web Developer</p>
          <Link to="/about" className="mt-4 text-sm">
            About me &rarr;
          </Link>
        </section>
        <section className="mt-2 flex flex-col justify-center border-t-2 p-2 sm:mt-0 sm:grow-1 sm:border-t-0 sm:p-4 sm:pt-0">
          <h1>
            <a href="https://pauls-movie-list.com" rel="noopener noreferrer">
              Paul&apos;s Movie List
            </a>
          </h1>
        </section>
      </div>
      <footer className="flex gap-4 self-end justify-self-end p-4">
        <a
          href="https://www.linkedin.com/in/paul-ryan-12a5932a/"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        <a href="https://github.com/Paul-Ryan" rel="noopener noreferrer">
          github
        </a>
      </footer>
    </div>
  );
}

export default Home;
