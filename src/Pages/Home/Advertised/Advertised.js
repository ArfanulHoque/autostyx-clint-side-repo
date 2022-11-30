import React, { useState } from "react";
import BookProduct from "../../Products/BookProduct/BookProduct";
import AdvertisedCard from "./AdvertisedCard";

const Advertised = ({ advertise }) => {
  console.log(advertise);
  const [addDetails, setAddDetails] = useState(null);
  return (
    <div className="my-32">
      <h2>Advertise Items </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 gap-5">
        {advertise.map((add) => (
          <AdvertisedCard
            key={add._id}
            add={add}
            setAddDetails={setAddDetails}
          ></AdvertisedCard>
        ))}
      </div>

      {addDetails && (
        <BookProduct
          productDetails={addDetails}
          setProductDetails={setAddDetails}
        ></BookProduct>
      )}
    </div>
  );
};

export default Advertised;
