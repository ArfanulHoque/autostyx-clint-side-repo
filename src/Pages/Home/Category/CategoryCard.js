import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { category_id, name, image } = category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-56" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Click All Products button to see all products</p>
        <div className="card-actions w-full">
          <Link to={`/categories/${category_id}`} className="w-full">
            <button className="btn btn-primary w-full">All Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
