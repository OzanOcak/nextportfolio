import SectionTitle from "./SectionTitle";
import img from "../../public/assets/project.png";
import Image from "next/image";
//import { AiOutlineYoute } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

function Projects() {
  return (
    <section id="projects" className="max-w-[80%] mx-auto py-10 lg:py-24 px-4">
      <SectionTitle title="Some Things I have built" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            href=""
            target="_blank"
            className="w-full xl:w-1/2 h-auto relative group"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={img}
                alt="project_img"
              />
            </div>
          </a>
          <div
            className="w-full xl:w-3/5 flex flex-col gap-6 lg:justify-between
            items-end text-right xl:-ml-16 z-10"
          >
            <p className="font-titleFont text-green-500 text-sm tracking-wide">
              Featured Projects
            </p>
            <h3 className="text-2xl font-bold">Amazon Clone</h3>
            <p className="bg-[#112240]  text-sm md:text-base p-2 md:p-6 rounded-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <span className="text-green-500">
                Error pariatur eum aliquam dignissimos blanditiis
              </span>
              facere impedit numquam possimus, beatae consequuntur id itaque{" "}
              <span className="text-green-500">suscipit fuga placeat</span>,
              delectus exercitationem minus doloremque laboriosam.
            </p>
            <ul
              className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5
            justify-between text-gray-500"
            >
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel </li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a href="" className="hover:text-text-green-500 duration-300">
                <TbBrandGithub />
              </a>
              <a href="" className="hover:text-text-green-500 duration-300">
                <TbBrandGithub />
              </a>
              <a href="" className="hover:text-text-green-500 duration-300">
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/** ------------------------ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            href=""
            target="_blank"
            className="w-full xl:w-1/2 h-auto relative group"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={img}
                alt="project_img"
              />
            </div>
          </a>
          <div
            className="w-full xl:w-3/5 flex flex-col gap-6 lg:justify-between
            items-end text-right  z-10"
          >
            <p className="font-titleFont text-green-500 text-sm tracking-wide">
              Featured Projects
            </p>
            <h3 className="text-2xl font-bold ">Amazon Clone</h3>
            <p className="bg-[#112240] xl:-mr-16  text-sm md:text-base p-2 md:p-6 rounded-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <span className="text-green-500">
                Error pariatur eum aliquam dignissimos blanditiis
              </span>
              facere impedit numquam possimus, beatae consequuntur id itaque{" "}
              <span className="text-green-500">suscipit fuga placeat</span>,
              delectus exercitationem minus doloremque laboriosam.
            </p>
            <ul
              className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5
            justify-between text-gray-500"
            >
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel </li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a href="" className="hover:text-text-green-500 duration-300">
                <TbBrandGithub />
              </a>
              <a href="" className="hover:text-text-green-500 duration-300">
                <TbBrandGithub />
              </a>
              <a href="" className="hover:text-text-green-500 duration-300">
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
