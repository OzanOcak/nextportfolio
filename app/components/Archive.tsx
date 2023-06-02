"use client";
import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

function Archive() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-[100%] mx-auto py-10 lg-py-24 px-4">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-green-500">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lg:px-10">
        <ArchiveCard
          title="some title"
          desc="some description"
          listItems={["react", "css", "js"]}
          link="www.google.com"
        />
        <ArchiveCard
          title="some title2"
          desc="some description"
          listItems={["react", "css", "js"]}
          link="www.google.com"
        />
        <ArchiveCard
          title="some title3"
          desc="some description"
          listItems={["react", "css", "js"]}
          link="www.google.com"
        />
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="some title"
                desc="some description"
                listItems={["react", "css", "js"]}
                link="www.google.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="some title2"
                desc="some description"
                listItems={["react", "css", "js"]}
                link="www.google.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="some title3"
                desc="some description"
                listItems={["react", "css", "js"]}
                link="www.google.com"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="flex justify-center my-10">
        <button
          onClick={() => setShowMore(true)}
          className="w-36 h-12 rounded-md text-green-500
         text-[13px] border border-green-500 hover:bg-gray-800 duration-300"
        >
          Show More
        </button>
      </div>
    </div>
  );
}

export default Archive;
