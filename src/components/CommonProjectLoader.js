import React from "react";

import linkIcon from "../images/tools/linkIcon.png";
import githubIcon from "../images/tools/blackAndWhiteLogos/github.png";
const CommonProjectLoader = ({ projectTitle, imageSrc, projectDescription, languagesUsed = [], liveDemoLocation = null, sourceCodeLocation = null, otherLinks = [], otherLinkLabels = [] }) => {
  return (
    
    <table className="project-table col-lg-4">
        <tbody>

            {
                liveDemoLocation == null && (
                    <td className = "project-image-td">
                        <img className="card-img-top" src={imageSrc} alt="Card image cap" />                
                    </td>
                )                
            }

            {
                liveDemoLocation != null && (                
                    <td className = "project-image-td">
                        <a href={liveDemoLocation} target="_blank" rel="noopener noreferrer">
                            <img className="card-img-top" src={imageSrc} alt="Card image cap" />
                        </a>    
                    </td>            
                )
            }

            <td className="card-block text-center" style= {{ width: "50%", lineHeight: "normal" }}>
                {
                    languagesUsed.map( ( language ) => (                        
                        <img src={language} className="projectIcon" />
                    ))
                }

                <div className="card-title">{projectTitle}</div>
                <p className="card-text">{projectDescription}</p>
                
                <span>
                    {
                        !!liveDemoLocation ? (
                            <a href={liveDemoLocation} target="_blank" rel="noopener noreferrer">
                                <img src={linkIcon} className = "projectIcon" />
                                Demo
                            </a>
                        ) : null
                    }
                </span>
                &nbsp;&nbsp;
                <span>
                    {
                        !!sourceCodeLocation ? (
                            <a href={sourceCodeLocation} target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} className = "projectIcon" />
                                Source
                            </a>
                        ) : null
                    }
                </span>          

                <span>
                    {
                        otherLinks.map( ( link, idx ) => (      
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                {console.log(link)}
                                <img src={linkIcon} className = "projectIcon" />
                                {otherLinkLabels[idx]}
                            </a>                  
                            
                        ))
                    }
                </span>          
                
            </td>

        </tbody>
      </table>
  );
};

export default CommonProjectLoader;