import OverviewButton from "./OverviewButton";

export default function Options() {
  const lists = ["Itineary", "Reviews", "Policies", "FAQ"];
  return (
    <div className="flex flex-row justify-center items-center mt-12">
      <div className="w-9/12 px-4">
        <div className="flex flex-row justify-start pt-4 shadow-lg bg-white shadow-gray-400 w-full p-6">
          {lists.map((list) => (
            <OverviewButton btnTitle={list} />
          ))}
        </div>
      </div>
      <div className="w-3/12  "></div>
    </div>
  );
}
