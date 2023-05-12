import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div className="w-full text-lg flex justify-between p-6 px-14 border-solid border-b">
      <div>
        <b>Learning</b>
      </div>
      <div className="flex gap-2 items-center">
        <span className="navbg2 grid border-blue-400 border text-blue-600 rounded-full w-10 h-10">
          <Icon icon="uil:image-upload" className="m-auto" />
        </span>
        <Icon icon="material-symbols:keyboard-arrow-down" className="w-6 h-6" />
      </div>
    </div>
  );
}
