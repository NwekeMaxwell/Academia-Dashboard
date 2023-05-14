import Layout from "@/components/Layout";
import ListComponent from "@/components/ListComponent";
import SearchBar from "@/components/SearchBar";
import UIButtons from "@/components/UIButtons";
import { ProgramData } from "@/components/Data";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(ProgramData);
  // search functionality
  const handleSearch = (searchText) => {
    if (searchText.trim() === "") {
      setData(ProgramData);
    } else {
      const filteredData = ProgramData.filter((item) =>
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
