import React from "react";
import { useEffect, useState } from "react";
// import { RestaurantList } from "./constants"
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

import useOnline from "../utils/useOnline";

import { Link } from "react-router-dom";




function filterData(searchText, Restaurants) {
      //Tolowercase is used to filter the restaurants even the user writes in capital or lower case.
      return Restaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
}


const Body = () => {
      const [SearchText, setSearchText] = useState("");
      // const [IsLogged, setIsLogged] = useState("false");

      //maintaining two copies for filter the restaurants.
      const [Allrestaurants, setAllRestaurants] = useState([]);
      const [FilteredRestaurants, setFilteredRestaurants] = useState([]);

      useEffect(() => {
            getrestaurants();
      }, []);
      //[searchText]-> this means it will be called only when search text changes.
      // [](dependency array)--> this means it will only be called once and when->? after 1st render.
      // if no array is there that means it will be called each time after every render.


      async function getrestaurants() {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING");

            const json = await data.json();



            //For the first time both the reastaurants will contain all the restaurants as there is no filter applied till now.
            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

            //optional chaining. 
      }


      return (Allrestaurants?.length == 0) ? <Shimmer></Shimmer> : (
            <>
                  <div className="Search-Container">
                        <input
                              type="text"
                              className="Input-Container"
                              placeholder="Search here buddy"
                              value={SearchText}
                              onChange={(e) => {
                                    setSearchText(e.target.value)
                              }}
                        >
                        </input>

                        <button
                              // onclick we have to filter data
                              // how using filter function so pass searchText and restaurant list.
                              className="Search-Btn"
                              onClick={() => {
                                    const filteredData = filterData(SearchText, Allrestaurants);
                                    setFilteredRestaurants(filteredData);
                              }}
                        >Search</button>
                  </div>
                  <div className="Restaurant-List">
                        {
                              FilteredRestaurants?.map((restaurant) => {
                                    return <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.id}>
                                          {FilteredRestaurants?.length == 0 ? <h1>hiii</h1> : <RestaurantCard {...restaurant.data} />}
                                    </Link>
                              })
                        }
                  </div>
                  {/* <RestaurantCard {...RestaurantList[0].data} />
                  <RestaurantCard {...RestaurantList[1].data} />
                  <RestaurantCard {...RestaurantList[2].data} />
                  <RestaurantCard {...RestaurantList[3].data} />
                  <RestaurantCard {...RestaurantList[4].data} />
                  <RestaurantCard {...RestaurantList[5].data} /> */}
            </>
      )

}

export default Body;

// Making card dynamic - 1st method.

// const RestaurantCard = (props) => {
//       const { name, cloudinaryImageId, cuisines, avgRating } = restaurant.data;
//       return (
//             < div className="card" >
//                   <img src={
//                         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + props.restaurant.data.cloudinaryImageId}
//                   />
//                   <h2>{props.restaurant.data?.name}</h2>
//                   <h3>{props.restaurant.data?.cuisines.join(",")}</h3>
//                   <h4>{props.restaurant.data?.avgRating}</h4>
//             </div >
//       )
// }
//3rd way of recieving props now you dont even have to write restaurant instead you declare them in const and use them.
// const RestaurantCard = ({ restaurant }) => {
//       //
//       const { name, cloudinaryImageId, cuisines, lastMileTravelString } = restaurant.data;
//       return (
//             < div className="card" >
//                   <img src={
//                         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}
//                   />
//                   <h2>{name}</h2>
//                   <h4>{cuisines.join(",")}</h4>
//                   <h4>{lastMileTravelString} minutes</h4>
//             </div >
//       )
// }
// -->2nd way of recicving props or this is called destructuring.
// const RestaurantCard = (restaurant) => {
//
//       return (
//             < div className="card" >
//                   <img src={
//                         "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurant.restaurant.data.cloudinaryImageId}
//                   />
//                   <h2>{restaurant.data?.name}</h2>
//                   <h3>{restaurant.data?.cuisines.join(",")}</h3>
//                   <h4>{restaurant.data?.avgRating}</h4>
//             </div >
//       )
// }

