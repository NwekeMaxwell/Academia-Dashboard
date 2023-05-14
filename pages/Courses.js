import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import UIButtons from "@/components/UIButtons";
import { CoursesData } from "@/components/Data";
import ListComponent from "@/components/ListComponent";
import { useState } from "react";

export default function Courses() {
  const [data, setData] = useState(CoursesData);
  //search functionality
  const handleSearch = (searchText) => {
    if (searchText.trim() === "") {
      setData(CoursesData);
    } else {
      const filteredData = CoursesData.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setData(filteredData);
    }
  };
  return (
    <Layout>
      <UIButtons />
      <SearchBar handleSearch={handleSearch} />
      {data?.map((item) => {
        return <ListComponent key={item.id} {...item} />;
      })}
    </Layout>
  );
}
