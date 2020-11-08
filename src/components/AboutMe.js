import React from "react";

import "../css/AboutMe.css";
import jsImageSrc from "../images/tools/javascript.png";
import pythonImageSrc from "../images/tools/python.png";
import javaImageSrc from "../images/tools/java.png";
import awsImageSrc from "../images/tools/aws.png";
import nodeImageSrc from "../images/tools/node.png";
import reactImageSrc from "../images/tools/react.png";
import cassandraImageSrc from "../images/tools/cassandra.png";
import mongoImageSrc from "../images/tools/mongodb.png";
import oracleImageSrc from "../images/tools/oracle.png";

import CommonToolsLoader from "./CommonToolsLoader";

class AboutMe extends React.Component {
  render() {
    return (
      <div id="aboutMe" className="container-fluid col-12 col-lg-12 col-md-12 mx-auto row justify-content-center coloum" >

        {/*HEADER: Tools of Choice */}
        <div className="col-12 col-lg-12 col-md-12 mx-auto">
          <div className="row justify-content-center">
            <h1>Tools of Choice</h1>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-5">
              {/* Paragraph */}
              <div className="row justify-content-center">
                <p className="tool_text">
                  Although the following set of tools are my goto for front-end
                  and back-end development, I'm always experimenting and
                  challenging myself to try emerging tools and technologies to
                  ensure that I can create engaging and, most importantly,
                  <strong>
                    <i> delightful </i>
                  </strong>
                  experiences for the end-user!
                </p>
              </div>

              <br />

              <div className="row justify-content-center">
                <CommonToolsLoader toolName="Javascript" imageSrc={jsImageSrc} />
                <CommonToolsLoader toolName="Java" imageSrc={javaImageSrc} />
                <CommonToolsLoader toolName="AWS" imageSrc={awsImageSrc} />
              </div>

              <br />

              <div className="row justify-content-center">
                <CommonToolsLoader toolName="React" imageSrc={reactImageSrc} />
                <CommonToolsLoader toolName="NodeJS" imageSrc={nodeImageSrc} />
                <CommonToolsLoader toolName="Python" imageSrc={pythonImageSrc} />
              </div>

              <br />

              <div className="row justify-content-center">
                <CommonToolsLoader toolName="Cassandra" imageSrc={cassandraImageSrc} />
                <CommonToolsLoader toolName="mongoDB" imageSrc={mongoImageSrc} />
                <CommonToolsLoader toolName="Oracle" imageSrc={oracleImageSrc} />
              </div>

              <br />
              <br />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
