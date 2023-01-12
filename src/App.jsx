import { AddProject } from "./components/AddProject";
import { AddEtapas } from "./components/AddEtapas";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

import { teste } from "./components/teste";

import "./style.css";
const storedProject = localStorage.getItem("projectList");

const projectList = JSON.parse(storedProject);
const storedActivity = localStorage.getItem("activityList");

const activityList = JSON.parse(storedActivity);

function App() {
  // function removeActivity(taskName) {
  //   let newActivityList = activityList.filter(
  //     (activity) => activity.taskName != taskName
  //   );
  //   localStorage.setItem("activityList", JSON.stringify(newActivityList));
  // }

  function handleOnDragEnd(result) {
    console.log(result);
    const items = Array.from(activityList);
    console.log(result.destination.droppableId);
    // const [newIndexReorder] = items.splice(result.source.index, 1);

    const newReorder = result.destination.droppableId;

    // items.splice(result.destination.index, 0, newIndexReorder);

    items[result.source.index].momentTask = newReorder;
    localStorage.setItem("activityList", JSON.stringify(items));
  }

  return (
    <div className="App">
      <ul id="Projects">
        {projectList.map((projectName) => {
          return (
            <li
              className={"a" + projectList.indexOf(projectName)}
              key={projectName}>
              {projectName}
            </li>
          );
        })}
      </ul>

      <p>Adicionar Projeto</p>
      <AddProject />
      <p>Adicionar Atividade</p>
      <AddEtapas />
      <div className="kanban kanbanGrid">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="task">
            {(provided) => (
              <ul
                id="task"
                className="task"
                {...provided.droppableProps}
                ref={provided.innerRef}>
                {/* <h2>Task</h2> */}
                {activityList.map(
                  ({ taskName, projectFather, momentTask }, index) => {
                    if (momentTask === "task") {
                      return (
                        <Draggable
                          key={taskName}
                          draggableId={taskName}
                          index={index}>
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}>
                              <div className={projectFather}>
                                <p>{taskName}</p>
                              </div>
                            </li>
                          )}
                        </Draggable>
                      );
                    } else {
                    }
                  }
                )}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          <Droppable droppableId="progress">
            {(provided) => (
              <ul
                id="progress"
                className="progress"
                {...provided.droppableProps}
                ref={provided.innerRef}>
                {/* <h2>Progress</h2> */}
                {activityList.map(
                  ({ taskName, projectFather, momentTask }, index) => {
                    if (momentTask === "progress") {
                      return (
                        <Draggable
                          key={taskName}
                          draggableId={taskName}
                          index={index}>
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}>
                              <div className={projectFather}>
                                <p>{taskName}</p>
                              </div>
                            </li>
                          )}
                        </Draggable>
                      );
                    } else {
                    }
                  }
                )}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          <Droppable droppableId="completed">
            {(provided) => (
              <ul
                id="completed"
                className="completed"
                {...provided.droppableProps}
                ref={provided.innerRef}>
                <h2>Completed</h2>
                {activityList.map(
                  ({ taskName, projectFather, momentTask }, index) => {
                    if (momentTask === "completed") {
                      return (
                        <Draggable
                          key={taskName}
                          draggableId={taskName}
                          index={index}>
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}>
                              <div className={projectFather}>
                                <p>{taskName}</p>
                              </div>
                            </li>
                          )}
                        </Draggable>
                      );
                    } else {
                    }
                  }
                )}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
