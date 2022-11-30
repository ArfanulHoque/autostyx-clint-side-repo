import { useEffect, useState } from "react";

const CustomHook = (email) => {
  const [useRole, setUseRole] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(`https://y-alpha-ten.vercel.app/user?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          setUseRole(data?.role);
        });
    }
  }, [email]);

  return [useRole];
};

export default CustomHook;
