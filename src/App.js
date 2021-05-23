import { Container, Row, Col } from "reactstrap";
import AddToDoCard from "./pages/AddToDoCard";
import AddCard from "./components/AddCard";
import Task from "./components/Task";
import Todo from "./components/Todo";
import "./index.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Container className="Card">
            <h3>Kanban Desk</h3>
            <Row>
              <Col md="12" className="Card main-border">
                <Task />
                <AddCard />
              </Col>
            </Row>
          </Container>
        </Route>

        <Route path="/new-to-do-card">
          <AddToDoCard />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
