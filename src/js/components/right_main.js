import React from "react";
import Button from 'react-bootstrap/lib/Button';
// Boostrap elements
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Modal from 'react-bootstrap/lib/Modal';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class Right_main extends React.Component {
  constructor() {
    super();
    this.state = {showModal:false};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
//Modal state manuplation
 open() {
    this.setState(
      {
        showModal:true
      }
    );
  }
  close() {
    this.setState(
      {
        showModal:false
      }
    );
  }
//Modal form O/P
  submit() {
    var first_name = document.getElementById('first_name');
    var last_name = document.getElementById('last_name');
    var email = document.getElementById('email');
    var company = document.getElementById('company');
    var phone = document.getElementById('phone');
    var annual_rev = document.getElementById('annual_rev');
    var notes = document.getElementById('notes');
    console.log("first name: "+ first_name.value + " last name: " + last_name.value + " email: " + email.value + " company: " + company.value + " phone: " + phone.value + " annual revenue: " + annual_rev.value + " additional note:" + notes.value );
  }

  render() {
  const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
  const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );
  return (
      <div>
        <div className="right_main">
          <div class="right_main_body">
            <img src={'../../img/bg_requestdemo.png'}/>
            <div className="right_main_text">
              <p> Want to learn more about the platform? </p>
              <Button onClick={this.open} className="warning" bsStyle="warning" >REQUEST A DEMO</Button>
            </div>

          </div>
          <div className="bottom">
            <p className="header">You might be also interested in ...</p>
            <Row className="show-grid">
              <Col sm={3} md={3}>  <img className="img-responsive" src={'../../img/img_securesearch.png'}/></Col>
              <Col sm={9} md={9}>
                <p className="title">We hold these Truths to be Self Evident:</p>
                <p className="body">Consectetur adipiscing elit. Sed ut orci ac neque tincidunt gravida non vitae tellus. Nam sem dui, varius.</p>
                <p ><a>Read More</a></p>
              </Col>
            </Row>
        </div>
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>Request a demo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <FormGroup>
                    <FormControl type="text" placeholder="First Name" id="first_name" />
                  </FormGroup>
                  <FormGroup>
                    <FormControl type="text" placeholder="Last Name" id="last_name" />
                  </FormGroup>
                  <FormGroup>
                    <FormControl type="text" placeholder="Email Address" id="email"/>
                  </FormGroup>
                  <FormGroup>
                    <FormControl type="text" placeholder="Company" id="company" />
                  </FormGroup>
                  <FormGroup>
                    <FormControl type="text" placeholder="Phone" id="phone" />
                  </FormGroup>
                  <FormGroup>
                    <FormControl type="text" placeholder="Annual Revenue" id="annual_rev"/>
                  </FormGroup>
                  <FormGroup>
                    <FormControl type="text" placeholder="Additional Text" id="notes" />
                  </FormGroup>
                  <div className="text-center">
                    <Button bsStyle="warning" onClick={this.submit}>Submit</Button>
                  </div>
                </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
        </div>
      </div>
    );
  }
}
