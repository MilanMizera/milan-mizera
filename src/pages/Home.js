import "./home.css"
import { TbBrandJavascript } from "react-icons/tb";
import mainImg from "../images/main-photo.jpg"

export const Home = () => {


  return (

    <div className="Home-wrapper">

      <div className="welcome-section-row">
        <div className="col-main-title">
          <h1>Dobrý den, jsem juniorní vývojař v JS</h1>
          <p>Programování se věnuji již dva roky</p>
          <div> <TbBrandJavascript className="js-icon"></TbBrandJavascript></div>
        </div>
        <div className="col-main-img">
          <img className="main-img" src={mainImg}></img>
        </div>
      </div>



    </div>
  )
}

export default Home
