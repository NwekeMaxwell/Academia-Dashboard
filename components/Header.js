import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Header({ handleClick }) {
  return (
    <div className="w-full text-lg flex justify-between py-6 px-2 md:p-6 px-14 border-solid border-b">
      <div className="flex items-center">
        <div
          onClick={handleClick}
          className="block md:hidden flex items-center p-4"
        >
          <Image
            src={"/menu.svg"}
            width={24}
            height={24}
            className="w-6 h-6 object-cover"
            alt=""
          />
        </div>
        <b>Learning</b>
      </div>
      <div className="flex gap-2 items-center">
        <span className="navbg2 mr-2 md:mr-0 grid md:border-blue-400 border text-blue-600 rounded-full w-10 h-10">
          <Icon icon="uil:image-upload" className="m-auto hidden md:block" />
          <Image
            src={"/avatar2.jpg"}
            width={35}
            height={35}
            alt=""
            className="m-auto md:hidden object-cover"
          />
        </span>
        <Icon
          icon="material-symbols:keyboard-arrow-down"
          className="hidden md:block w-6 h-6"
        />
      </div>
    </div>
  );
}
