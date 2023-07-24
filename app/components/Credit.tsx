import Link from "next/link";

const Credit = () => {
  return (
    <div className="bg-slate-950 hover:bg-slate-900 w-3/5 border border-white-200 rounded-md p-5 my-5">
      <div>
        <p className="text-lime-300 pb-3 text-2xl">[Portfolio Work]</p>
      </div>
      <div className="pb-2">
        <p className="text-lime-600 text-xl underline">Engineer</p>
        <p className=" text-slate-200">Nathan Schrader</p>
        <Link
          className="text-sky-500"
          href={"https://www.linkedin.com/in/schradermade/"}
          target="_blank"
        >
          LinkedIn Profile
        </Link>
        <br />
        <Link
          className="text-sky-500"
          href={"https://github.com/schradermade/WikiSearch/"}
          target="_blank"
        >
          Github repository
        </Link>
      </div>
      <div className="pb-2">
        <p className="text-lime-600  text-xl underline">Tech Implemented</p>
        <p className=" text-slate-200">
          - Next.js v13: SSR, Apps dir, error, loading
        </p>
        <p className=" text-slate-200">- fetch( )</p>
        <p className=" text-slate-200">- wiki API</p>
        <p className=" text-slate-200">- Tailwind CSS</p>
      </div>
      <div className="pb-2">
        <p className="text-lime-600 text-xl underline">Date Built</p>
        <p className=" text-slate-200">July 23rd, 2023</p>
      </div>
      <div>
        <p className="text-lime-600 text-xl underline">Project Description</p>
        <p className=" text-slate-200">
          User can type in search word into the input box and program will
          return results from the wiki API utilizing fetch( ). JSON data
          response is then parsed, mapped over, and passed into a reusable
          component with Tailwind styling. Since we do not know what the user
          will search ahead of time, we utilize Server Side Rendering. If we
          knew what the content would be ahead of time, such as blog posts, we
          would use Static Site Generation.
        </p>
      </div>
    </div>
  );
};

export default Credit;
