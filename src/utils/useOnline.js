import React from "react";
import { useEffect, useState } from "react"

// whenever we use addevent listener , we need to

// It is always a good practice to clear our EventListener whenver we go outside 


const useOnline = () => {
      const [isOnline, setIsOnline] = useState("false");

      useEffect(() => {
            const handleOnline = () => {
                  setIsOnline(true);
            }
            const handleOffline = () => {
                  setIsOnline(false);
            }
            window.addEventListener("online", handleOnline);
            window.addEventListener("offline", handleOffline);

            return () => {
                  window.removeEventListener("online", handleOnline);
                  window.removeEventListener("offline", handleOffline);
            };
      }, []);
      return isOnline;
}

export default useOnline;