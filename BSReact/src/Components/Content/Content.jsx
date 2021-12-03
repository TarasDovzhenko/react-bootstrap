import React from "react";
import { Card, Button } from "react-bootstrap";
import classes from "./Content.module.css";

function Content() {
  return (
    <>
      <Card className={classes.content}>
        <div className={classes.gradRight}></div>
        <div className={classes.gradLeft}></div>
        <Card.Body className={classes.heroContent}>
          <Card.Title className={classes.heroSlogan}>
            Lorem ipsum set ammet test-test
          </Card.Title>
          <Card.Text className={classes.heroText}>
            LET US HELP YOU GET IT ALL BACK!
          </Card.Text>
          <div className={classes.description}>
            <span className={classes.descriptionText}>
              We currently take cases that are $10,000 US and up
            </span>
            <Button className={classes.btn} variant="primary">
              Go somewhere
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Content;
