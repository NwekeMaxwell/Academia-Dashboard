import { Icon } from "@iconify/react";

export default function Header({ handleClick }) {
  return (
    <div className="w-full text-lg flex justify-between py-6 px-2 md:p-6 px-14 border-solid border-b">
      <div className="flex items-center">
        <div
          onClick={handleClick}
          className="block md:hidden flex items-center p-4"
        >
          <img src={"/menu.svg"} className="w-6 h-6" alt="" />
        </div>
        <b>Learning</b>
      </div>
      <div className="flex gap-2 items-center">
        <span className="navbg2 mr-2 md:mr-0 grid border-blue-400 border text-blue-600 rounded-full w-10 h-10">
          <Icon icon="uil:image-upload" className="m-auto hidden md:block" />
          <img src={"/avatar2.jpg"} alt="" className="m-auto md:hidden" />
        </span>
        <Icon
          icon="material-symbols:keyboard-arrow-down"
          className="hidden md:block w-6 h-6"
        />
      </div>
    </div>
  );
}
