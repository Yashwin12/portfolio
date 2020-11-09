import React from 'react';
import Typical from 'react-typical'
import "../css/heading.css"
import * as myConstClass from "../utilities/Constants";

class Header extends React.Component {

  render() {
    return (
      <div id="heading">
        <div className="container-fluid">
          <div className="col-12 col-lg-12 col-md-12 mx-auto">
            <div className="row">
              <div className="col-12 col-lg-12 col-md-12">
                <div className="row intro align-items-center">
                  <div className="col-12 col-lg-12 col-md-12">
                    <div className="row justify-content-center">
                      <h1 className="nameHeader fixed-sticky justify-content-center">Hi, I'm Yashvin!</h1>
                    </div>
                    <div className="row justify-content-center">
                      <section className="subHeaderIntro">
                        <Typical loop={1} wrapper="p"
                          steps={['I am a', 2500, myConstClass.HEADING_DESC, 10000]}
                        />
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
