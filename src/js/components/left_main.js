import React from "react";

export default class Left_main extends React.Component {

  render() {
    return (
      <div className="left_main">
        <div>
          <p className="title">Top 20 Recent BrightEdge SEO Innovations</p>
          <p className="body">At BrightEdge our top value is customer success and we have developed tremendous innovations to help you stay ahead of the changes in search and content marketing. As a SaaS company, our software is delivered as a subscription and each month we bring you innovative new technologies at no additional cost.

  Please check out our latest Infographic that highlights the Top 20 BrightEdge
  Innovations from the past 12 months — all of these great features are available in your account today! [<span className="download"> <a href="#">Download a copy in PDF</a></span>]</p>
        </div>
        <div className="Image">
          <img className="img-responsive" src={'../../img/img_infographic.png'}/>
        </div>
      </div>
    );
  }
}
