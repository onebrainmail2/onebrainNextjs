import React from "react";

interface Props {
}

const BrainLogo: React.FC<Props> = () => {
  return (
    <div className="col-lg-4 col-sm-12 col-xs-12 brain-logo-lg">
      <img src="brain-itself.gif" className="mx-auto d-block" alt="" />
      <div className="brain-circle-google-disk"></div>
      <div className="brain-circle-monday"></div>
      <div className="brain-circle-analytics"></div>
      <div className="brain-circle-canva"></div>
      <div className="brain-circle-trello"></div>
      <div className="brain-circle-slack"></div>
      <div className="brain-circle-asana"></div>
      <div className="brain-circle-discord"></div>
      <div className="brain-circle-clickup"></div>
      <div className="brain-circle-hubspot"></div>
    </div>
  );
};

export default BrainLogo;