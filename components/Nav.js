import { Icon } from "@iconify/react";
import Link from "next/link";

export default function () {
  const inactiveLink = "flex gap-4 p-2 mb-2 items-center ";
  const activeLink = inactiveLink + " text-lg bg-blue-200 text-blue-600";

  return (
    <aside className="p-5 h-full navbg w-72 flex flex-col gap-16">
      {/* logo */}
      <div className="w-full">
        <img src="/landa.svg" alt="" className="w-16 h-8 mx-2.5" />
      </div>
      {/* nav */}
      <nav className="flex flex-col h-screen justify-between">
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
