import { IMG_CDN_URL } from "./constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, lastMileTravelString }) => {
      return (
            < div className="card" key={cloudinaryImageId}>
                  <img src={IMG_CDN_URL + cloudinaryImageId} />
                  <h2>{name}</h2>
                  <h4>{cuisines.join(",")}</h4>
                  <h4>{lastMileTravelString} minutes</h4>
            </div >
      )
}

export default RestaurantCard;