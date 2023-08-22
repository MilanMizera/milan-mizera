import "./home.css"

import mainImg from "../images/main-photo.jpg"

export const Home = () => {


  return (

    <div className="Home-wrapper">

      <div className="welcome-section-row">
        <div className="col-main-text">
        <h1>Dobrý den, jsem juniorní vývojař v JS</h1>
        <p>Programování se věnuji již dva roky</p>
        </div>
        <div className="col-main-img">
        <img className="main-img" src={mainImg}></img>
        </div>
      </div>



    </div>
  )
}

export default Home
