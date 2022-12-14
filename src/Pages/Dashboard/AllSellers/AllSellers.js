import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllSellers = () => {
  const url = "https://y-alpha-ten.vercel.app/users?role=seller";

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  console.log(users);

  return (
    <div>
      <h2 className="text-4xl text-center mb-3">All Sellers</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Name</th>
              <th>Verify</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>
                  <button className="btn  btn-xs btn-primary">Verify</button>
                </td>
                <td>
                  <button className="btn  btn-xs btn-primary">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
