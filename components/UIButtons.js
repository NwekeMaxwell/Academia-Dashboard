import Link from "next/link";
import { useRouter } from "next/router";

export default function UIButtons() {
  const inactiveLink =
    "rounded-sm md:text-base py-2 px-4 text-sm font-normal text-gray-500 md:py-3 md:px-8";
  const activeLink =
    "md:text-base text-sm py-2 px-4 md:py-3 md:px-8 rounded-sm navbg2 font-bold text-black";

  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="w-full md:mt-0 mt-4 flex gap:2 md:gap-4">
      <Link href={"/"} className={pathname === "/" ? activeLink : inactiveLink}>
        Programs & Degrees
      </Link>
      <Link
        href={"/Courses"}
        className={pathname === "/Courses" ? activeLink : inactiveLink}
      >
        Short Courses
      </Link>
    </div>
  );
}
