import { Icon } from "@iconify/react";
import PercentBar from "./PercentBar";
import Image from "next/image";

export default function ListComponent({
  image,
  title,
  subtitle,
  status,
  bgcolor,
  color,
  padding,
  percentage,
  button,
  name,
}) {
  return (
    <div className="md:mt-12 mt-6 p-5 h-auto w-full md:w-8/12  listbg listbg2 md:flex items-center justify-between">
      <div
        className={`${
          !name ? "flex-col" : ""
        } md:flex-row flex gap-4 mb-4 md:mb-0 w-5/6`}
      >
        {/* image */}
        <div className="w-16 h-16 object-cover">
          <Image
            src={image}
            width={35}
            height={35}
            alt=""
            className="h-full w-full"
          />
        </div>
        {/* descriptiion */}
        <div className="w-full">
          <div className="font-bold text-blue-700">{title}</div>
          <div className="font-bold">{subtitle}</div>
          {percentage ? <PercentBar percentage={percentage} /> : ""}
        </div>
      </div>
      {/* status */}
      <div className="flex gap-1">
        <span
          className={`${bgcolor} ${color} ${padding} ${button}
          h-min text-xs font-bold`}
        >
          {status}
        </span>
        {status === "ongoing" ? (
          <Icon
            icon="ic:round-keyboard-arrow-right"
            className="hidden md:block h-6 w-6"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
