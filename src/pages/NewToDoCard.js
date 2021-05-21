import { useRef } from "react";
import { Card } from "reactstrap";
import classes from "./NewToDoCard.module.css";

/* Takes inputs from User and persists data in backend database as a JSON file*/
function NewToDoCard(props) {
  const titleInputRef = useRef();
  const deadlineInputRef = useRef();
  const storyPointsInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDeadline = deadlineInputRef.current.value;
    const enteredStoryPoints = storyPointsInputRef.current.value;

    const todoTaskData = {
      title: enteredTitle,
      deadline: enteredDeadline,
      storyPoints: enteredStoryPoints,
    };

    console.log(todoTaskData);
    props.onAddNewCardData(todoTaskData);
  }

  return (
    <Card body>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Task Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="deadline">Task Deadline</label>
          <input type="text" required id="deadline" ref={deadlineInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="storyPoints">Task Story Points</label>
          <input
            type="text"
            required
            id="storyPoints"
            ref={storyPointsInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add New Todo Task</button>
        </div>
      </form>
    </Card>
  );
}

export default NewToDoCard;
