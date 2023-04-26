import { useState } from "react";
// import { useUserData } from "../../context/UserContext";

const Contact = () => {
  const [newPhone, setNewPhone] = useState("");

  // const { user, handleEditUser } = useUserData();

  return (
    <div className="contact-container">
      <div className="header-wrapper">
        <div className="header">Contact</div>
      </div>

      <div className="contact-wrapper">
        {/* <div className="phone">Phone: {user.phone}</div> */}
      </div>

      <div className="edit-contact-wrapper">
        <div>New Phone Number </div>
        <input onChange={(e) => setNewPhone(e.target.value)} />

        {/* <button onClick={() => handleEditUser("phone", newPhone)}>
          Submit Changes
        </button> */}
      </div>
    </div>
  );
};

export default Contact;
