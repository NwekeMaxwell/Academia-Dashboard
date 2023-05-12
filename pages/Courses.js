import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import UIButtons from "@/components/UIButtons";
import { CoursesData } from "@/components/Data";
import ListComponent from "@/components/ListComponent";

export default function Courses() {
  return (
    <Layout>
      <UIButtons />
      <SearchBar />
      {CoursesData?.map((item) => {
        return <ListComponent key={item.id} {...item} />;
      })}
    </Layout>
  );
}
