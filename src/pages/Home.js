import "./home.css"
import { TbBrandJavascript } from "react-icons/tb";
import mainImg from "../images/main-photo.jpg"
import Contact from "../components/Contact";
/*icons*/
import { FaGitSquare, FaReact, FaNpm } from "react-icons/fa";
import { BsGithub, BsFiletypeHtml, BsFiletypeCss } from "react-icons/bs";
import { DiCode } from "react-icons/di";
/*high lighter*/
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
/*high lighter my own file*/
import { codeString } from "./data/ShowFirstProject";
/**tlačítko na scroll to top */
import ScrollToTop from "react-scroll-to-top";



export const Home = () => {


  return (

    <div className="Home-wrapper">

      <div className="welcome-section-row" id="welcome-scoll">
        <div className="col-main-title">
          <h1 className="main-title">Dobrý den, jsem juniorní vývojař v JS</h1>
          <p>Programování se věnuji již dva roky</p>
          <div><DiCode className="js-icon" ></DiCode></div>

        </div>

        <div className="col-main-img">
          <img className="main-img" src={mainImg}></img>
        </div>
      </div>


      <div className="with-i-work-icons-section" id="with-i-work-scoll">
        <div className="col-with-i-work-text">
          <h2 className="with-i-work-text">S čím aktivně pracuji ?</h2>
        </div>

        <div className="col-with-i-work-icons">
          <FaGitSquare className="icon-1"></FaGitSquare>
          <BsGithub className="icon-1"></BsGithub>
          <FaReact className="icon-1"></FaReact>
          <TbBrandJavascript className="icon-1"></TbBrandJavascript>
          <BsFiletypeHtml id="mobile-none-icon" className="icon-1"></BsFiletypeHtml>
          <BsFiletypeCss className="icon-1"></BsFiletypeCss>
          <FaNpm className="icon-1"></FaNpm>
        </div>
      </div>

      <div className="my-work-section" id="first-project-scroll">
        <div className="col-my-work-iframe">
          <iframe className="my-iframe" src="https://moje-ukoly.netlify.app/"></iframe>
        </div>
        <div className="col-my-work-src-code">

          <SyntaxHighlighter className="my-first-poroject" language="javascript" style={docco}>

            {codeString}
          </SyntaxHighlighter>

        </div>

      </div>

      <Contact></Contact>

      <ScrollToTop smooth />

    </div>
  )
}

export default Home
