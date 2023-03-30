import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import React from "react";

const Title = () => (
      <>
            <a href="/"> <img alt="logo" className="Image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1bmBO3vH6RGJ02yqSf4EFb0i0b54zu5_6Q&usqp=CAU"></img>
            </a>
      </>
);

// function IsLogged() {
//       return true;
// }

const Header = () => {

      const [IsLogged, setIsLogged] = useState(true);





      return (
            <>
                  <div className="Navbar">
                        <Title />
                        <div className="List-Items">
                              <ul>

                                    <li>
                                          <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                          <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                          <Link to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                          <Link to="/instamart">Instamart</Link>
                                    </li>
                                    <li>Cart</li>
                              </ul>
                        </div>
                        {IsLogged ? <button onClick={() => setIsLogged(false)}>Login</button>
                              : <button onClick={() => setIsLogged(true)}>Logout</button>}
                  </div>
            </>
      )
};

export default Header;