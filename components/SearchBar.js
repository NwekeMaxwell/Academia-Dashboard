import { Icon } from "@iconify/react";

export default function SearchBar() {
  return (
    <div className="flex gap-6 mt-14">
      <div className="flex w-1/2">
        <div className="border border-gray-300 border-r-0">
          <Icon icon="material-symbols:search" className=" ml-4 w-6 h-full" />
        </div>
        <div className="border w-full border-l-0 border-gray-300 rounded-sm">
          <input
            type="text"
            className="w-full py-2 px-3"
            placeholder="Search for Programs..."
          />
        </div>
      </div>
      <div className="w-12 border border-gray-300 grid">
        <Icon icon="mdi:funnel-outline" className="w-6 m-auto h-full" />
      </div>
    </div>
  );
}
