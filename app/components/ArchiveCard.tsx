import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  title: string;
  desc: string;
  listItems: string[];
  link: string;
}

function ArchiveCard({ title, desc, listItems, link }: Props) {
  return (
    <a href="" target="_blank">
      <div
        className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 
    hover:-translate-y-2 transition-transform duration-300 group"
      >
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-green-500" />
          <RxOpenInNewWindow className="text-4xl hover:text-green-500" />
        </div>
        <div>
          <h2
            className="text-xl font-titleFont font-semibold tracking-wide 
        group-hover:text-text-green-500"
          >
            {title}
          </h2>
          <p className="text-sm mt-3">{desc}</p>
        </div>
        <ul className="text-xs md:text-sm text-gray-500 flex items-center gap-2 justify-between flex-wrap">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export default ArchiveCard;
