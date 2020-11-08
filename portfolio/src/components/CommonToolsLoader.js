import React from "react";

const CommonToolsLoader = ({ toolName, imageSrc }) => {
  return (
    <div className="col-4 col-md-6 col-lg-3">
      <div className="row justify-content-center">
        <h6>{toolName}</h6>
      </div>

      <div className="row justify-content-center">
        <img src={imageSrc} alt={toolName} className="icon" />
      </div>
    </div>
  );
};

export default CommonToolsLoader;
