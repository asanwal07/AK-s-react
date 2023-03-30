
import { IMG_CDN_URL } from "./constants";

const RestaurantInfo = (res) => {
      return (
            <div>
                  {console.log(res)}
                  {/* <h1>Inside restaurant info</h1>
                  <h1>{Recieved.name}</h1>
                  <img src={IMG_CDN_URL + Recieved?.cloudinaryImageId} alt="" />
                  <h3>{Recieved.costForTwo}</h3>
                  <p>{Recieved.cuisines.join(" ,")}</p> */}
            </div>
      );
}

export default RestaurantInfo;

