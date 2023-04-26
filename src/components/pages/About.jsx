import { useState } from "react";
// import { useUserData } from "../../context/UserContext";

const About = () => {
  const [newBio, setNewBio] = useState("");

  // const { user, handleEditUser } = useUserData();

  return (
    <div className="about-container">
      <div className="bio-wrapper">
        <div className="label">Bio:</div>

        {/* <div className="bio">{user.bio}</div> */}
      </div>

      <div className="edit-bio-wrapper">
        <textarea onChange={(e) => setNewBio(e.target.value)} />

        {/* <button onClick={() => handleEditUser("bio", newBio)}>
          Submit Changes
        </button> */}
      </div>
    </div>
  );
};

export default About;
