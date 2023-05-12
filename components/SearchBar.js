import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

export default function SearchBar() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="flex gap-4 md:gap-6 mt-10 md:mt-14">
      <div className="flex w-full md:w-1/2">
        <div className="border border-gray-300 border-r-0">
          <Icon icon="material-symbols:search" className=" ml-4 w-6 h-full" />
        </div>
        <div className="border w-full border-l-0 border-gray-300 rounded-sm">
          <input
            type="text"
            className="w-full py-2 px-3"
            placeholder={`Search for ${
              pathname === "/" ? "Programs..." : "Short Course..."
            }`}
          />
        </div>
      </div>
      <div className="w-12 border border-gray-300 grid">
        <Icon icon="mdi:funnel-outline" className="w-6 m-auto h-full" />
      </div>
    </div>
  );
}
