import jwt_decode from "jwt-decode";
export const isUser = () => {
  let isUserPresent = localStorage.getItem("token");

  if (typeof isUserPresent === "undefined" || isUserPresent === null) {
    return false;
  } else {
    const currentUser = jwt_decode(isUserPresent);
    return currentUser ? currentUser : false;
  }
};
