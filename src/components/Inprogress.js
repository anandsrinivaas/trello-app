import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Alert } from "reactstrap";

function Inprogress() {
  return (
    <Alert className="col-sm-5" color="warning">
      In progress
    </Alert>
  );
}

export default Inprogress;
