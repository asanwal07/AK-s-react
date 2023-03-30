import React from "react";
import { useState, useEffect } from "react";
import { MENU_CDN_URL } from "../components/constants";

const useRestaurant = (id) => {


      const [restaurant, setRestaurant] = useState(null);


      useEffect(() => {
            getAllRestaurantsWithCategories()
      }, []);

      async function getAllRestaurantsWithCategories() {
            const res = await
                  fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=28.6547698&lng=77.18787619999999&restaurantId=" + id);

            const res_data = await res.json();
            const menuItemsList = res_data.data?.cards[2]["groupedCard"]?.cardGroupMap?.REGULAR?.cards;
            const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
            const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

            /* Mock Data */
            //const res_data =  restaurantMenu;

            const menu = menuItemsList?.map(item => {
                  if ((item.card.card["@type"] === itemCategory) || (item.card.card["@type"] === NestedItemCategory)) {
                        return item.card.card;
                  }
            })

            // console.log(menu);

            const modifiedData = {
                  info: res_data?.data?.cards[0]?.card?.card?.info,
                  menu: menu?.filter(value => value !== undefined)
            }

            setRestaurant(modifiedData);
            // console.log(modifiedData);
      }

      return restaurant;

};

export default useRestaurant;