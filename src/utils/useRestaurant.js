import React from "react";
import { useState, useEffect } from "react";
import { MENU_CDN_URL } from "../components/constants";

const useRestaurant = (resId) => {
      const [restaurant, setRestauraunt] = useState(null);

      useEffect(() => {
            getRestaurantInfo();
      }, []);

      async function getRestaurantInfo() {
            const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" + resId);
            const json = await data.json();
            setRestauraunt(json.data);
      }

      return restaurant;
};

export default useRestaurant;