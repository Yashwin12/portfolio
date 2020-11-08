import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/Projects.css";

import journeyWeatherImgSrc from "../images/projects/journeyWeather.png";
import portfolioImgSrc from "../images/projects/portfolio.png";
import algoVisualizerImgSrc from "../images/projects/algoVisualizer.png";
import universeLoversImgSrc from "../images/projects/universeLovers.png";
import roadmapImgSrc from "../images/projects/roadmap.png";
import DSAndAlgosImgSrc from "../images/projects/DSAndAlgos.png";
import IOT_dashboardImgSrc from "../images/projects/IOT_dashboard.png";

import react from "../images/tools/blackAndWhiteLogos/react.png";
import html5 from "../images/tools/blackAndWhiteLogos/html5.png";
import css3 from "../images/tools/blackAndWhiteLogos/css3.png";
import googleMaps from "../images/tools/blackAndWhiteLogos/googleMaps.png";
import bootstrap from "../images/tools/blackAndWhiteLogos/bootstrap.png";
import nasa from "../images/tools/blackAndWhiteLogos/nasa.png";
import BSMockups from "../images/tools/blackAndWhiteLogos/BSMockups.png";
import java from "../images/tools/blackAndWhiteLogos/java.png";
import nodejs from "../images/tools/blackAndWhiteLogos/nodejs.png";
import mongoDB from "../images/tools/blackAndWhiteLogos/mongoDB.png";

import CommonProjectLoader from "./CommonProjectLoader";
import * as myConstClass from "../utilities/Constants";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <h1>Projects</h1>
        </div>

        <div className="row justify-content-center">
            <p className="col-lg-5 project-intro-text">
            The following projects have been key in facilitating my growth as a web developer. Each project utilizes a combination of research, experimentation and applied techniques or concepts that are critical for developing any successful experience. Each of these projects are deployed using Github pages, so the app may need a moment to wake on initial request.
            </p>
        </div>

        <br />

        <div className = "row justify-content-center">

            <CommonProjectLoader
                projectTitle="Portfolio"
                imageSrc={portfolioImgSrc}
                projectDescription={myConstClass.PORTFOLIO_DESC}
                languagesUsed={[react, html5, css3, bootstrap]}
                liveDemoLocation="https://yashwin12.github.io/portfolio/"
                sourceCodeLocation="https://github.com/Yashwin12/portfolio"
            />

            <CommonProjectLoader
                projectTitle="Journey-Weather"
                imageSrc={journeyWeatherImgSrc}
                projectDescription={myConstClass.JOURNEY_WEATHER_DESC}
                languagesUsed={[react, googleMaps, html5, css3, bootstrap]}
                liveDemoLocation="https://yashwin12.github.io/journey-weather/"
                sourceCodeLocation="https://github.com/Yashwin12/journey-weather"
            />

            <CommonProjectLoader
                projectTitle="Algo-Visualizer"
                imageSrc={algoVisualizerImgSrc}
                projectDescription={myConstClass.ALGO_VISUALIZER_DESC}
                languagesUsed={[react, html5, css3, bootstrap]}
                liveDemoLocation="https://yashwin12.github.io/algorithms-visualizer/"
                sourceCodeLocation="https://github.com/Yashwin12/algorithms-visualizer"
            />

            <CommonProjectLoader
                projectTitle="Universe-Lovers"
                imageSrc={universeLoversImgSrc}
                projectDescription={myConstClass.UNIVERSE_LOVERS_DESC}
                languagesUsed={[react, html5, css3, bootstrap, nasa]}
                sourceCodeLocation="https://github.com/Yashwin12/universe-lovers"
            />

            <CommonProjectLoader
                projectTitle="IOT-Smart City"
                imageSrc={IOT_dashboardImgSrc}
                projectDescription={myConstClass.UNIVERSE_LOVERS_DESC}
                languagesUsed={[nodejs, mongoDB, html5, css3, bootstrap]}
                otherLinks = { ["https://www.youtube.com/watch?v=mxR_nN_2Qrw&feature=youtu.be","https://ieeexplore.ieee.org/document/8777481"]}
                otherLinkLabels = {[ "Video", "IEEE Paper"]}
            />

            <CommonProjectLoader
                projectTitle="RoadMaps"
                imageSrc={roadmapImgSrc}
                projectDescription={myConstClass.ROADMAP_DESC}
                languagesUsed={[BSMockups]}
                sourceCodeLocation="https://github.com/Yashwin12/roadmap"
            />

            <CommonProjectLoader
                projectTitle="DS & Algos"
                imageSrc={DSAndAlgosImgSrc}
                projectDescription={myConstClass.DS_ALGO_DESC}
                languagesUsed={[java]}
                sourceCodeLocation="https://github.com/Yashwin12/FAANG"
            />

        </div>
        
      </div>
    );
  }
}

export default Projects;
