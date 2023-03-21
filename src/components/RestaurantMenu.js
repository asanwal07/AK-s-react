import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { IMG_CDN_URL } from "./constants";
import Shimmer from "./Shimmer";


const RestaurantMenu = (id) => {

      const params = useParams();
      console.log(params);
      const { id } = params;//destructuring of data recieved from useParams.
      console.log(id);

      const [menuList, setMenuList] = useState(null);

      useEffect(() => {
            getMenuData();
      }, []);

      async function getMenuData() {
            const data = await fetch(
                  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}&submitAction=ENTER`
            )

            const json = await data.json();
            console.log(json);
            setMenuList(json.data);
      }

      if (!menuList) {
            return <Shimmer />;
      }

      return (
            <div className="Menu-Info">
                  <div>
                        <h1>Restaurant id : {id}</h1>
                        <h1>{menuList.name}</h1>
                        <img src={IMG_CDN_URL + menuList.cloudinaryImageId} />
                        <h3>{menuList.area}</h3>
                        <h3>{menuList.city}</h3>
                        <h3>{menuList.avgRating} stars</h3>
                        <h3>{menuList.costForTwoMsg}</h3>
                  </div>
                  <div>

                        <h1>Menu</h1>
                        <ul>
                              {Object.values(menuList?.menu?.items).map((menuitem) => (
                                    <li key={menuitem.id}>{menuitem.name}</li>
                              ))}
                        </ul>


                  </div>
            </div>
      )
}

export default RestaurantMenu;