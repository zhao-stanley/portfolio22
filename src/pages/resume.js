import SEO from "../components/global/SEO";
import siteMetadata from "../data/siteMetadata";

export default function About({}) {
  return (
    <>
      <SEO title={`Resume | ${siteMetadata.title}`} />
      <div className="w-full max-w-2xl flex flex-col gap-8">
        <main className="w-full flex flex-col gap-4">
          <h1 className="font-serif text-3xl lg:text-4xl">Resume</h1>
          <iframe
            className="w-full h-[860px] rounded-2xl"
            src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&scrollbar=0&view=fit"
          />
        </main>
      </div>
    </>
  );
}
