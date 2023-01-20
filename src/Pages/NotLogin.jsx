import React from "react";
import { Container, Button } from "react-bootstrap";

function NotLogin() {
  return (
    <>
      <Container className="not-login">
        <div className="not-login-box">
          <img src="" alt="Not Logged" style={{ maxWidth: "65%" }} />
          <h4>
            Uh oh! You are not logged in to
            <br />
            your FoodiesDev account.
          </h4>

          <Button className="submithome-button" href="/">
            Login Here
          </Button>
        </div>
      </Container>
    </>
  );
}

export default NotLogin;
