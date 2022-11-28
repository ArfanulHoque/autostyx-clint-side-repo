import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookProduct from "../BookProduct/BookProduct";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const [productDetails, setProductDetails] = useState(null);
  const data = useLoaderData();
  return (
    <div>
      <h2 className="text-center text-4xl font-bold">Products</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 px-10">
        {data.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setProductDetails={setProductDetails}
          ></ProductCard>
        ))}
      </div>
      <div>
        {productDetails && (
          <BookProduct
            productDetails={productDetails}
            setProductDetails={setProductDetails}
          ></BookProduct>
        )}
      </div>
    </div>
  );
};

export default Products;
