import React from "react";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profle = () => {
  const user = useSelector((store) => store.user);

  return (
    <div>
      <EditProfile user={user?.data} />
    </div>
  );
};

export default Profle;
