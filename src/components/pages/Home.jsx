import { useState } from "react";

// import { useUserData } from "../../context/UserContext";

const Home = () => {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  // const { user, handleEditUser } = useUserData();

  return (
    <div className="home-container">
      <div className="header-wrapper">
        <h1 className="header">Home Page</h1>
      </div>

      {/* <div className="profile-wrapper">
        <div className="name">
          {user.firstName}, {user.lastName}
        </div>

        <img className="profile-image" src={user.image} alt="User Profile" />
      </div> */}

      <div className="edit-profile-wrapper">
        <div className="input-wrapper">
          <label>First Name:</label>
          <input
            type="text"
            onChange={(e) => setNewFirstName(e.target.value)}
          />

          {/* <button onClick={() => handleEditUser("firstName", newFirstName)}>
            Submit Changes
          </button> */}
        </div>

        <div className="input-wrapper">
          <label>Last Name:</label>
          <input type="text" onChange={(e) => setNewLastName(e.target.value)} />

          {/* <button onClick={() => handleEditUser("lastName", newLastName)}>
            Submit Changes
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
