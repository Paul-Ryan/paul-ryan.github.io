import { Link } from "react-router-dom";

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "GraphQL",
  "HTML/CSS",
  "Storybook",
  "Accessibility",
  "Jest",
  "React Testing Library",
  "Playwright",
  "A/B Testing",
  "Sentry",
  "Datadog",
  "Data Visualization",
  "AI/LLM Interfaces",
  "Claude Code",
];

type Highlight = { label?: string; text: string };

type Job = {
  company: string;
  title: string;
  dates: string;
  highlights: Highlight[];
};

const jobs: Job[] = [
  {
    company: "Quantcast",
    title: "Software Engineer → Senior Software Engineer",
    dates: "Aug 2019 – Present",
    highlights: [
      {
        label: "Ads Manager",
        text: "Built Quantcast’s self-serve campaign management UI app with product, design and backend engineers, covering campaign setup, editing and performance reporting.",
      },
      {
        label: "AI campaign analysis",
        text: "Led the frontend for Analysis by Q, partnering with design to turn streamed insights from a LangGraph agent into something advertisers can act on, with charts that render as the data arrives.",
      },
      {
        label: "Design system",
        text: "Maintain Quantcast’s Storybook component library. Led the rebrand update across all components, including a new data visualization palette.",
      },
      {
        label: "Engineering culture",
        text: "Run the monthly Frontend Guild, organizing talks and discussions for frontend enthusiasts and engineers. Topics have included AI-assisted development, monorepo migration, component libraries, datetime libraries, error tracking and security.",
      },
      {
        label: "AI-assisted development",
        text: "Added automated Claude Code reviews to a team’s CI pipeline and use agentic coding tools daily.",
      },
    ],
  },
  {
    company: "Dynata",
    title: "UI Developer",
    dates: "Jul 2018 – Aug 2019",
    highlights: [
      {
        text: "Launched Samplify, a self-serve market research platform for businesses, as one of three founding frontend developers, using React, TypeScript, Apollo GraphQL and Styled Components.",
      },
      {
        text: "Introduced TypeScript and unit tests to the codebase to catch errors before release.",
      },
    ],
  },
  {
    company: "App Academy",
    title: "Web Development Intern",
    dates: "Mar 2018 – Jun 2018",
    highlights: [
      { text: "Ran technical interviews and tutored beginner students." },
    ],
  },
  {
    company: "Bepress",
    title: "Front-end Web Implementation Specialist",
    dates: "Jan 2014 – Nov 2017",
    highlights: [
      {
        text: "Designed and implemented open-access academic journals using HTML/CSS templates with a heavy emphasis on accessibility and SEO.",
      },
    ],
  },
];

const education = [
  { school: "Emerson College", detail: "MA, Writing and Publishing, 2012" },
  { school: "App Academy", detail: "Web Development, 2018" },
];

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="mt-10 mb-3 border-b border-[#646cff]/30 pb-1 text-lg font-semibold text-[#646cff]">
      {children}
    </h2>
  );
}

function Resume() {
  return (
    <div className="flex min-h-screen animate-fade-in flex-col p-4 sm:p-8">
      <nav className="flex justify-between">
        <Link to="/">&larr; Home</Link>
        <a href="/Paul-Ryan-Resume.pdf" download>
          Download PDF
        </a>
      </nav>
      <main className="mt-8 max-w-3xl leading-relaxed">
        <h1>Resume</h1>
        <p className="mt-2 text-xl text-[#646cff]">Senior Frontend Engineer</p>

        <SectionHeading>Summary</SectionHeading>
        <p>
          Senior frontend engineer with 7+ years in ad tech, building
          advertiser-facing campaign, creative and AI tools in React and
          TypeScript. I own features end to end, from technical design through
          launch, and maintain the shared component library used across
          Quantcast&apos;s products.
        </p>

        <SectionHeading>Skills</SectionHeading>
        <p>{skills.join(", ")}</p>

        <SectionHeading>Experience</SectionHeading>
        {jobs.map((job) => (
          <section key={job.company} className="mt-6 first-of-type:mt-0">
            <h3 className="text-lg font-semibold">{job.company}</h3>
            <p className="opacity-70">
              {job.title} &middot; {job.dates}
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              {job.highlights.map((highlight) => (
                <li key={highlight.text}>
                  {highlight.label && (
                    <strong className="font-semibold">
                      {highlight.label}:{" "}
                    </strong>
                  )}
                  {highlight.text}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <SectionHeading>Education</SectionHeading>
        {education.map(({ school, detail }) => (
          <p key={school}>
            <strong className="font-semibold">{school}</strong> &middot;{" "}
            {detail}
          </p>
        ))}
      </main>
    </div>
  );
}

export default Resume;
