import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Me from "../../public/assets/me.jpeg";

function About() {
  return (
    <section
      id="about"
      className="max-w-[100%]  md:max-w-[80%] mx-auto py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-4"
    >
      <SectionTitle title="About Me" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg-w-2/3 text-base text-gray-100 font-medium flex flex-col gap-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            iste veniam? Similique, et dolorum eos, debitis quas atque eveniet
            porro impedit voluptate optio laudantium nihil ea pariatur ratione
            nulla modi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est impedit
            tempora necessitatibus voluptatem voluptates maxime placeat autem,
            ex sapiente illum ullam vel! Nobis{" "}
            <span className="text-green-500">
              commodi sint fugit pariatur placeat veniam dolores.
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est impedit
            tempora necessitatibus voluptatem voluptates maxime placeat autem,
            ex sapiente illum ullam vel! Nobis{" "}
            <span className="text-green-500">
              commodi sint fugit pariatur placeat veniam dolores.
            </span>
          </p>
          <p>Here are a few technologies I have been working with</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-green-500">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3  h-80 relative group">
          <div className="absolute w-80 h-80 -left-4 -top-6 rounded-lg ">
            <div className=" h-full relative z-20 flex pl-6 lg:pl-0 ">
              <Image
                src={Me}
                alt="profile_img"
                className="rounded-lg h-full object-cover"
              />
              <div
                className="hidden lg:inline-block absolute w-full h-80 bg-green-700/20 rounded-md
              top-0 left-0 group-hover:bg-transparent duration-300"
              ></div>
            </div>
          </div>
          <div
            className="hidden  lg:inline-flex w-52 h-80 border-2 border-green-500 rounded-md 
            group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default About;
