import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card, CardTitle, CardText, CardSubtitle, Row } from "reactstrap";

/* Data for cards */
const DUMMY_DATA = [
  {
    id: "a1",
    title: "Advertising outdoors",
    deadline: "01 June, 2021",
    storyPoints: "1",
  },
  {
    id: "a2",
    title: "Develop UI components",
    deadline: "10 July, 2021",
    storyPoints: "3",
  },
  {
    id: "a3",
    title: "Deploy changes to Staging",
    deadline: "30 July, 2021",
    storyPoints: "5",
  },
  {
    id: "a4",
    title: "Develop UI components",
    deadline: "10 July, 2021",
    storyPoints: "3",
  },
];

/* Drag and drop functionality*/
function Task() {
  const [cards, updateCards] = useState(DUMMY_DATA);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(cards);
    const [reorderedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItems);

    updateCards(items);
  }
  return (
    <React.Fragment>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="cardId">
          {(provided) => (
            <div
              className="cardId"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cards.map(({ id, title, deadline, storyPoints }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Card body>
                          <CardTitle tag="h5">{title}</CardTitle>
                          <Row>
                            <CardText className="col-sm-10">
                              {deadline}
                            </CardText>
                            <CardSubtitle className="col-sm-2">
                              {storyPoints}
                            </CardSubtitle>
                          </Row>
                        </Card>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </React.Fragment>
  );
}

export default Task;
