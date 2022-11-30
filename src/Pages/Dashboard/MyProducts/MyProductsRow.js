import React, { useState } from "react";
import toast from "react-hot-toast";

const MyProductsRow = ({ products }) => {
  console.log(products);
  const { image, name, resalePrice, time } = products;
  const [disable, setDisable] = useState(false);
  const handleUpload = (value) => {
    fetch("http://localhost:5000/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledge) {
          setDisable(!disable);
          toast.success("Advertise Added Successfully.");
        } else {
          toast.error("You have already add this product on advertise");
        }
      });
    console.log(value);
  };
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">Price: ${resalePrice}</div>
          </div>
        </div>
      </td>
      <td>{time}</td>
      <button
        onClick={() => handleUpload(products)}
        className="btn btn-primary"
      >
        Advertise
      </button>
      <th>
        <button className="btn btn-primary btn-xs ">Delete</button>
      </th>
    </tr>
  );
};

export default MyProductsRow;
