import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://y-alpha-ten.vercel.app/categories");
      const data = res.json();
      return data;
    },
  });

  return (
    <div>
      <p className="text-4xl font-bold text-center mt-9">Category</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {categories.map((category) => (
          <CategoryCard
            key={category.category_id}
            category={category}
          ></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
