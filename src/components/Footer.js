import React from "react";
import linkedinImageSrc from "../images/tools/linkedin.png";
import gitHubImageSrc from "../images/tools/github.png";
import gmailImageSrc from "../images/tools/gmail.png";

import resume from "../files/yashvinResume.pdf";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container-fluid">
          <div className="col-12 col-lg-12 col-md-12 mx-auto">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12 ">
                <div className="row justify-content-center">
                  {" "}
                  {/* this is for the header row */}
                  <h6>
                    Want to download my resume,{" "}
                    <a
                      href={resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      download="Yashvin_Munsadwala_Resume.pdf"
                    >
                      click here!
                    </a>
                  </h6>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12 col-lg-12 ">
                <div className="row justify-content-center">
                  {" "}
                  {/* this is for the header row */}
                  <h6>
                    <a
                      href="https://www.linkedin.com/in/yashwin-munsadwala"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={linkedinImageSrc}
                        alt="Linkedin"
                        width="40"
                        height="40"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      href="https://github.com/Yashwin12"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={gitHubImageSrc} alt="Github" width="40" height="40" />
                    </a>

                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=munsadwalayashwin@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={gmailImageSrc} alt="Gmail" width="40" height="40" />
                    </a>

                  </h6>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12 col-lg-12 ">
                <div className="row justify-content-center">
                  {" "}
                  {/* this is for the header row */}
                  <p>Copyright &#169; Yashvin Munsadwala, 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
