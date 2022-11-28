import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookProduct = ({ productDetails, setProductDetails }) => {
  const { user } = useContext(AuthContext);
  const { name, resalePrice } = productDetails;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const meeting_Location = form.meeting_Location.value;
    const booking = {
      Product_name: name,
      product_price: resalePrice,
      user_name: user?.displayName,
      user_email: user?.email,
      phone,
      meeting_Location,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setProductDetails(null);
          toast.success("Booking confirmed");
        } else {
          alert("Already Booked");
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center mb-3">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
            <input
              name="user_name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              name="user_email"
              type="text"
              defaultValue={user?.email}
              disabled
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="Product_name"
              defaultValue={name}
              disabled
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="product_price"
              defaultValue={resalePrice}
              disabled
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              name="meeting_Location"
              placeholder="Meeting location"
              className="input input-bordered w-full"
            />

            <input
              className="btn btn-accent input input-bordered w-full "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookProduct;
