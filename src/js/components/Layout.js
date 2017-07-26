// Stylesheets
require('../../css/app.scss');
//Reach elements
import React from "react";
import ReactDOM from 'react-dom';
import Footer from "./Footer";
import Header from "./Header";
import Right_main from "./right_main";
import Left_main from "./left_main";
//Boostrap
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Grid className="Main">
        <div className="header_bottom">
          <Grid>
            <img className="img-responsive" src={'../../img/top_banner.png'}/>
          </Grid>
          </div>
          <Row className="show-grid">
            <Col xs={12} md={8}><Left_main/></Col>
            <Col xs={12} md={4}><Right_main/></Col>
          </Row>

        </Grid>
        <Footer />
      </div>
    );
  }
}
