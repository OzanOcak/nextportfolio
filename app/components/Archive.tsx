import ArchiveCard from "./ArchiveCard";

function Archive() {
  return (
    <div className="max-w-[80%] mx-auto py-10 lg-py-24 px-4">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-green-500">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lg:px-10">
        <ArchiveCard />
      </div>
    </div>
  );
}

export default Archive;
