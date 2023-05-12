import { Icon } from "@iconify/react";

export default function ListComponent({
  image,
  title,
  subtitle,
  status,
  bgcolor,
  color,
}) {
  return (
    <div className="mt-12 p-5 h-auto w-8/12  listbg listbg2 flex items-center justify-between">
      <div className="flex gap-4 w-5/6">
        {/* image */}
        <div className="w-16 h-16 object-cover">
          <img src={image} alt="" className="h-full w-full" />
        </div>
        {/* descriptiion */}
        <div className="w-full">
          <div className="text-blue-700">{title}</div>
          <div className="font-bold">{subtitle}</div>
        </div>
      </div>
      {/* status */}
      <div className="flex gap-1">
        <span className={`${bgcolor} ${color} stat h-min text-xs font-bold`}>
          {status}
        </span>
        {status === "ongoing" ? (
          <Icon icon="ic:round-keyboard-arrow-right" className="h-6 w-6" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
