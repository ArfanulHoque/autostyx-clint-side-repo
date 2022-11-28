import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = res.json();
      return data;
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <CategoryCard
          key={category.category_id}
          category={category}
        ></CategoryCard>
      ))}
    </div>
  );
};

export default Category;
