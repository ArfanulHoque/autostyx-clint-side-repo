import React from "react";

const AdvertisedCard = ({ add, setAddDetails }) => {
  const {
    name,
    image,
    condition,
    description,
    location,
    number,
    orginalPrice,
    resalePrice,
    sellerName,
    time,
    yearOfPurchase,
    yearOfUse,
  } = add;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="car" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{location}</p>
        <p className="font-bold">Seller-Name: {sellerName}</p>
        <p>phone: {number}</p>
        <p>
          <span className="font-bold">Re-sale Price:</span> $
          <span className="text-primary">{resalePrice}</span>
        </p>
        <p>Original-Price: ${orginalPrice}</p>
        <p>Year of Purchase: {yearOfPurchase}</p>
        <p>Year of Use: {yearOfUse}y</p>
        <p>Product-Condition: {condition}</p>
        <p>Posted time: {time}</p>
        <p>
          <span className="font-bold">Description:</span> {description}
        </p>

        <div className="card-actions justify-end">
          <label
            htmlFor="booking-modal"
            className="btn btn-primary w-full"
            onClick={() => setAddDetails(add)}
          >
            Book Product
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedCard;
