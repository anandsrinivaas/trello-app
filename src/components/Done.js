import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "reactstrap";

/* This component is the column space for having finished tasks */
function Done() {
  return (
    <Alert className="col-sm-4" color="success">
      Done
    </Alert>
  );
}

export default Done;
