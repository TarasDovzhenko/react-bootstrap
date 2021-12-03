import React from "react";
import classes from "./Form.module.css";
import { Form, Row, Col, Button } from "react-bootstrap";

function Forms() {
  return (
    <div className={classes.formContent}>
      <Form className={classes.form}>
        <h3 className={classes.formLogo}>
          <span>Contact</span> <span className={classes.LogoUs}>Us</span>{" "}
        </h3>

        <Row>
          <Col>
            <Form.Control
              className={classes.nameList}
              placeholder="First name"
            />
          </Col>
          <Col>
            <Form.Control
              className={classes.surnameList}
              placeholder="Last name"
            />
          </Col>
        </Row>
        <Row className={classes.formInput}>
          <Col>
            <Form.Control
              className={classes.telList}
              placeholder="Enter number"
            />
          </Col>
          <Col>
            <Form.Control
              className={classes.emailList}
              placeholder="Enter email"
            />
          </Col>
        </Row>

        <Form.Control
          className={classes.formTextarea}
          as="textarea"
          placeholder="Leave a comment here"
        />
        <Button className={classes.btn} type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
}

export default Forms;
