import Header from "@/components/Header";
import Nav from "@/components/Nav";
import { useState } from "react";

export default function Layout({ children }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="w-full h-full flex">
      <Nav active={active} handleClick={handleClick} />
      <div className="w-full">
        <Header handleClick={handleClick} />
        <div className="w-full p-5 md:p-14 ">{children}</div>
      </div>
    </div>
  );
}
