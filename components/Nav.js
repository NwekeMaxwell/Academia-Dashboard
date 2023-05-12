import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Nav({ active, handleClick }) {
  const inactiveLink = "flex gap-4 p-2 mb-2 items-center ";
  const activeLink = inactiveLink + " text-lg bg-blue-200 text-blue-600";

  return (
    <aside
      className={`${
        active ? "block absolute h-full" : "hidden"
      } p-5 navbg w-72 md:block flex flex-col `}
    >
      {/* logo */}
      <div className="w-full flex justify-between">
        <Image
          src="/landa.svg"
          width={35}
          height={35}
          alt=""
          className="w-16 h-8 mx-2.5 object-cover"
        />
        <Image
          src="/cross.svg"
          alt=""
          width={35}
          height={35}
          onClick={handleClick}
          className="md:hidden object-cover"
        />
      </div>
      {/* nav */}
      <nav className={`flex mt-16 flex-col h-full justify-between`}>
        <div>
          <Link href={"/"} className={inactiveLink}>
            <Icon icon="tabler:layout-dashboard" />
            Dashboard
          </Link>
          <Link href={"/"} className={activeLink}>
            <Icon icon="material-symbols:menu-book-outline-sharp" />
            Learning
          </Link>
        </div>
        {/* footer */}
        <div>
          <Link
            href={"/"}
            className="navbg3 text-white mb-8 p-4 flex gap-3 items-center "
          >
            Find more Degrees <br />
            and Short Courses
            <span className="bg-white text-black p-1">
              <Icon icon="material-symbols:arrow-right-alt" />
            </span>
          </Link>

          <Link href={"/"} className={`${inactiveLink} mb-4 justify-between`}>
            Logout
            <Icon icon="material-symbols:logout" />
          </Link>
        </div>
      </nav>
    </aside>
  );
}
