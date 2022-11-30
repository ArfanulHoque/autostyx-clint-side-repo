import { useEffect, useState } from "react";

const CustomHook = (email) => {
  const [useRole, setUseRole] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/user?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setUseRole(data?.role);
        });
    }
  }, [email]);

  return [useRole];
};

export default CustomHook;
