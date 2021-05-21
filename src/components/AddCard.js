import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function AddCard() {
  return (
    <Link to="/new-to-do-card">
      <Button renderAs="button" className="col-md-12 button" color="secondary">
        + ADD NEW CARD
      </Button>
    </Link>
  );
}

export default AddCard;
