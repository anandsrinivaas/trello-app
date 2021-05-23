import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Col, Row } from "reactstrap";
import { v4 as uuid } from "uuid";

const itemsFromBackend = [
  { id: uuid(), content: ["Create reusable components", "01 June, 2021", "3"] },
  {
    id: uuid(),
    content: ["Fetch back end data from database", "15 June, 2021", "5"],
  },
  { id: uuid(), content: ["Create POC for Trello app", "30 July, 2011", "8"] },
];

console.log(itemsFromBackend);

const columnsFromBackend = {
  [uuid()]: {
    name: "To do",
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: "In Progress",
    items: [],
  },
  [uuid()]: {
    name: "Done",
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

/* Drag and drop functionality*/
function Task() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <Row>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <Col md="4" key={columnId}>
              <h4>{column.name}</h4>
              <div>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "#b8b6b6"
                            : "#e0dede",
                          padding: 4,
                          minHeight: 500,
                        }}
                      >
                        {column.items.map((item, index, i) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#0e94ed"
                                        : "#71afd9",
                                      color: "#01101a",
                                      ...provided.draggableProps.style,
                                    }}
                                  >
                                    {item.content.map((subItems, index) => (
                                      <p key={index}>{subItems}</p>
                                    ))}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </Col>
          );
        })}
      </DragDropContext>
    </Row>
  );
}

export default Task;
