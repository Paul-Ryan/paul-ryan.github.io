import "./App.css";

function App() {
  const startDate = new Date("2018-06-01");
  const currentDate = new Date();
  const xYearsExperience = `${currentDate.getFullYear() - startDate.getFullYear()} years experience`;

  return (
    <>
      <div>
        <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <div className="text-xl font-medium text-black dark:text-white">
            Paul Ryan
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            <p>Hello.</p>
            <p>
              I’m Paul, a web developer focused on frontend development with{" "}
              {xYearsExperience}. I’ve spent the last few years working on
              small, motivated teams to create useful products with thoughtful
              user interfaces.
            </p>

            <p>
              These are the technologies I’ve been working with lately, but I’m
              very capable of picking up new skills depending on the
              circumstances and product requirements.
            </p>

            <p>
              Here are a few of the projects I’ve been working on my own. I also
              have plenty of experience working on corporate products, but I
              hope these examples give you a little bit of an idea about what I
              find interesting and cool.
            </p>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
