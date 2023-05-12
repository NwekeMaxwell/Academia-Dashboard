import Link from "next/link";
import { useRouter } from "next/router";

export default function UIButtons() {
  const inactiveLink = "rounded-sm  font-normal text-gray-500 py-3 px-8";
  const activeLink = "py-3 px-8 rounded-sm navbg2 font-bold text-black";

  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="w-full flex gap-4">
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
