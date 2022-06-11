import React, { useState } from "react";

const useCheckToken = () => {
  const [isTokenValid, setIsTokenValid] = useState(false);

  function handleExpiry() {
    const user = localStorage.getItem('frond_user');
    if (!user) {
      setIsTokenValid(false);
    }
    const userItem = JSON.parse(user)
    const now = new Date()
    if (now.getDate() > userItem.expiry) {
      //if item is expired, delete item from storage and return error
      localStorage.removeItem('frond_user');
      setIsTokenValid(false)
    }
    else {
      setIsTokenValid(true)
    }
  }
  //return item.value
  return [isTokenValid, handleExpiry]
}

export default useCheckToken;