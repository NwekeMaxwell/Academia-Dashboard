import Layout from "@/components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div className="flex flex-col gap-4 ">
        <div className="font-bold">Hi, Visitor 👋🏼</div>
        <div>This is your DashBoard</div>
        <div className="text-gray-500">
          Sign in to get a personalised experience
        </div>
        <button className="bg-blue-500 p-2 w-max text-white ">
          Sign in with Google
        </button>
      </div>
    </Layout>
  );
}
