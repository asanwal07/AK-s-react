import { Outlet } from "react-router-dom";
// import Profile from "./Profile";
const About = () => {
      return (
            <div className="About-Us">
                  <h1>This is about as page.</h1>
                  <p>Challenging my self and learning</p>
                  <Outlet />
            </div>
      )
}

export default About;