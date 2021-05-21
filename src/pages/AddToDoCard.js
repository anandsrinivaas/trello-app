import { Container } from "reactstrap";
import NewToDoCard from "./NewToDoCard";
import React from "react";
import { useHistory } from "react-router-dom";

function AddToDoCard(todoTaskData) {
  const history = useHistory();

  function addCardHandler() {
    fetch(
      "https://react-pet-project-e6751-default-rtdb.firebaseio.com/new.json",
      {
        method: "POST",
        body: JSON.stringify(todoTaskData),
      }
    ).then(() => {
        history.replace("/");
    });
  }

  return (
    <Container>
      <h3>Add New Todo Task Card</h3>
      <NewToDoCard onAddNewCardData={addCardHandler} />
    </Container>
  );
}

export default AddToDoCard;
