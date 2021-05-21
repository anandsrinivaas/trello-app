import { Container, Row, Col } from "reactstrap";
import AddToDoCard from "./pages/AddToDoCard";
import AddCard from "./components/AddCard";
import Task from "./components/Task";
import Todo from "./components/Todo";
import Inprogress from "./components/Inprogress";
import Done from "./components/Done";
import "./index.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <Container className="Card">
            <h3 text-align="center">Kanban Desk</h3>
            <Row>
              <Col md="4" className="Card main-border">
                <Todo text="To do" />
                <Task />
                <AddCard />
              </Col>
              <Col md="4" className="Card main-border">
                <Inprogress />
              </Col>
              <Col md="4" className="Card main-border">
                <Done />
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
