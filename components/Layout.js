import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen flex">
      <Nav />
      <div className="w-full">
        <Header />
        <div className="w-full p-14 ">{children}</div>
      </div>
    </div>
  );
}
