import "./home.css"
import { TbBrandJavascript } from "react-icons/tb";
import mainImg from "../images/main-photo.jpg"
/*icons*/
import { FaGitSquare, FaReact, FaNpm } from "react-icons/fa";
import { BsGithub, BsFiletypeHtml, BsFiletypeCss } from "react-icons/bs";
import { DiCode } from "react-icons/di";


export const Home = () => {


  return (

    <div className="Home-wrapper">

      <div className="welcome-section-row">
        <div className="col-main-title">
          <h1>Dobrý den, jsem juniorní vývojař v JS</h1>
          <p>Programování se věnuji již dva roky</p>
          <div>    <DiCode className="js-icon" ></DiCode></div>

        </div>

        <div className="col-main-img">
          <img className="main-img" src={mainImg}></img>
        </div>
      </div>


      <div className="with-i-work-icons-section">
        <div className="col-with-i-work-text">
          <h2 className="with-i-work-text">S čím aktivně pracuji ?</h2>
        </div>

        <div className="col-with-i-work-icons">
          <FaGitSquare className="icon-1"></FaGitSquare>
          <BsGithub className="icon-1"></BsGithub>
          <FaReact className="icon-1"></FaReact>
          <TbBrandJavascript className="icon-1"></TbBrandJavascript>
          <BsFiletypeHtml className="icon-1"></BsFiletypeHtml>
          <BsFiletypeCss className="icon-1"></BsFiletypeCss>
          <FaNpm className="icon-1"></FaNpm>
        </div>
      </div>

      <div className="my-work-section">
        <div className="col-my-work-iframe"></div>
        <iframe src="https://moje-ukoly.netlify.app/"></iframe>
      </div>

      <div className="col-my-work-src-code">


      </div>



    </div>
  )
}

export default Home
