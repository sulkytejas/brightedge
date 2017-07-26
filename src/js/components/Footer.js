import React from "react";
//Boostrap elements
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="footer">
          <Grid>
            <img src={'../../img/top_logo.svg'}/>
            <p> &copy; Copyright BrightEdge 2017 </p>
          </Grid>
        </div>

      </div>

    );
  }
}
