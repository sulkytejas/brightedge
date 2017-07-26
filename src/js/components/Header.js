import React from "react";
//Boostrap
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header_top">
          <Grid><img src={'../../img/top_logo.svg'}/></Grid>
        </div>

      </div>

    );
  }
}
