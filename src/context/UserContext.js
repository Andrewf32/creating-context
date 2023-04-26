// import { createContext, useContext, useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";

// import userMockData from "../components/mockdata/userMockData";

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({});

//   const history = useHistory();

//   const navigateBack = () => {
//     history.goBack();
//   };

//   const handleEditUser = (field, value) => {
//     setUser((previous) => {
//       return { ...previous, [field]: value };
//     });
//   };

//   useEffect(() => {
//     setUser(userMockData);
//   }, []);

//   const values = {
//     user,
//     handleEditUser,
//     navigateBack,
//   };

//   return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
// };

// export const useUserData = () => {
//   return useContext(UserContext);
// };
