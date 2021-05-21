import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Alert } from "reactstrap";

/* This component is for listing cards and tasks that are in progress */
function Inprogress() {
  return (
    <Alert className="col-sm-5" color="warning">
      In progress
    </Alert>
  );
}

export default Inprogress;
