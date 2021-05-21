import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "reactstrap";

/* This component is for listing cards under To do section */
function Todo(props) {
  return (
    <Alert className="col-sm-4" color="primary">
      {props.text}
    </Alert>
  );
}

export default Todo;
