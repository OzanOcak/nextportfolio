import SectionTitle from "./SectionTitle";
import ReactBD from "./works/ReactBD";

function Experience() {
  return (
    <section
      id="experience"
      className="max-w-[80%] mx-auto py-10 lg-py-24 px-4"
    >
      <SectionTitle title="Where I worked" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            className="border-l-2 border-l-green-500 text-gray-500 bg-transparent
          hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
          >
            ReactBD
          </li>
          <li
            className="border-l-2 border-l-green-500 text-gray-500 bg-transparent
          hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
          >
            ReactBD
          </li>
          <li
            className="border-l-2 border-l-green-500 text-gray-500 bg-transparent
          hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
          >
            ReactBD
          </li>
        </ul>
        <ReactBD />
      </div>
    </section>
  );
}

export default Experience;
