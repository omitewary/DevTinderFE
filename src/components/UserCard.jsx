import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, gender, about, age } = user;
  const dispatch = useDispatch();

  const sendRequest = async (status, _id) => {
    await axios.post(
      `${BASE_URL}/request/send/${status}/${_id}`,
      {},
      { withCredentials: true }
    );
    dispatch(removeFeed(_id));
  };
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-xl">
        <figure>
          <img src={photoUrl} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{about}</p>
          {age && gender && <p>{age + ", " + gender}</p>}
          <div className="card-actions justify-center my-4">
            <button
              className="btn btn-primary"
              onClick={() => sendRequest("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => sendRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
