import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { IMG_CDN_URL } from "./constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenuList from "./RestaurantMenuList";

const RestaurantMenu = () => {

      const params = useParams();
      const { id } = params;//destructuring of data recieved from useParams.
      // console.log(id);

      const restaurantDetails = useRestaurant(id);

      return !restaurantDetails ? <Shimmer /> : (
            <div className="Menu-Info">
                  {/* {console.log(restaurantDetails.info)} */}
                  <RestaurantInfo res={restaurantDetails.info} />
                  {/* <RestaurantMenuList menu={restaurantDetails.menu} /> */}
            </div>
      )
}

export default RestaurantMenu;