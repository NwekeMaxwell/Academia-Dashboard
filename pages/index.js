import Layout from "@/components/Layout";
import ListComponent from "@/components/ListComponent";
import SearchBar from "@/components/SearchBar";
import UIButtons from "@/components/UIButtons";
import { ProgramData } from "@/components/Data";

export default function Home() {
  console.log(ProgramData);
  return (
    <Layout>
      <UIButtons />
      <SearchBar />
      {ProgramData?.map((item) => {
        return <ListComponent key={item.id} {...item} />;
      })}
    </Layout>
  );
}
