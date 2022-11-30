import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddProducts = () => {
  const { user } = useContext(AuthContext);

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const image = form.image.value;
    const location = form.location.value;
    const resalePrice = form.resalePrice.value;
    const orginalPrice = form.orginalPrice.value;
    const yearOfUse = form.yearOfUse.value;
    const condition = form.condition.value;
    const number = form.number.value;
    const yearOfPurchase = form.yearOfPurchase.value;
    const category_id = form.category.value;
    const addProduct = {
      name,
      description,
      image,
      location,
      resalePrice,
      orginalPrice,
      yearOfUse,
      sellerName: user?.displayName,
      seller_email: user?.email,
      condition,
      number,
      yearOfPurchase,
      category_id,
    };
    console.log(addProduct);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          toast.success("Booking Product Successfully");
        }
      });
  };

  return (
    <div>
      <h2 className="text-4xl text-center mb-3">Add Product</h2>
      <form onSubmit={handleAddProduct} className="grid grid-cols-1 gap-3">
        <input
          type="text"
          name="sellerName"
          placeholder="Seller-Name"
          className="input input-bordered w-full "
        />
        <input
          type="text"
          name="seller_email"
          placeholder="Seller-Email"
          className="input input-bordered w-full "
        />
        <input
          name="name"
          type="text"
          placeholder="Product-name"
          className="input input-bordered w-full "
        />
        <input
          name="resalePrice"
          type="text"
          placeholder="Resale-Price"
          className="input input-bordered w-full "
        />
        <input
          type="text"
          name="orginalPrice"
          placeholder="Original-Price"
          className="input input-bordered w-full "
        />
        <input
          type="text"
          name="yearOfPurchase"
          placeholder="Year-of-Purchase"
          className="input input-bordered w-full "
        />
        <input
          type="text"
          name="yearOfUse"
          placeholder="Year-of-Use"
          className="input input-bordered w-full "
        />
        <select name="condition" className="select select-bordered w-full ">
          <option>excellent</option>
          <option>good</option>
          <option>fair</option>
        </select>
        <input
          type="text"
          name="image"
          placeholder="Product-Image-URL"
          className="input input-bordered w-full "
        />

        <select name="category" className="select select-bordered w-full ">
          <option>Microbus</option>
          <option>Luxury car</option>
          <option>Electric ca</option>
        </select>

        <input
          type="text"
          name="description"
          placeholder="Description"
          className="input input-bordered w-full "
        />
        <input
          type="text"
          name="number"
          placeholder="Phone-Number"
          className="input input-bordered w-full "
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
        />

        <input
          className="btn btn-accent input input-bordered w-full "
          type="submit"
          value="Add Car"
        />
      </form>
    </div>
  );
};

export default AddProducts;
