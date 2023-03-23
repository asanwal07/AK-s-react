import React from "react";
const Shimmer = () => {
      return (
            <div className="Restaurant-List">
                  {Array(10).fill("").map((e, index) => <div key={index} className="Dummy-Card"></div>)}
            </div>
      )
}

export default Shimmer;