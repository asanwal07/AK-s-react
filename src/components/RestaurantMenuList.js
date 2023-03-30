import React from "react";
import ItemCategory from "./ItemCategory";

import NestedItemCategory from "./NestedItemCategory";

const RestaurantMenuList = (RecievedDetails) => {

      return (
            <div>
                  <h1>Inside Restaurant menu list</h1>
                  {
                        RecievedDetails.map((item, index) => {
                              item.categories ? <NestedItemCategory {...RecievedDetails} /> :
                                    <ItemCategory {...RecievedDetails} />
                        })
                  }
            </div>
      );

}

export default RestaurantMenuList;