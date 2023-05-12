export default function UIButtons() {
  const inactiveLink = "rounded-sm  font-normal text-gray-500 py-3 px-8";
  const activeLink = "py-3 px-8 rounded-sm navbg2 font-bold text-black";
  return (
    <div className="w-full flex gap-4">
      <div className={activeLink}>Programs & Degrees</div>
      <div className={inactiveLink}>Short Courses</div>
    </div>
  );
}
