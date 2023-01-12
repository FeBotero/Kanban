import { useEffect } from "react";
import { useState } from "react";

const listActivity = localStorage.getItem("activityList");
const activityList = JSON.parse(listActivity);
const storedProject = localStorage.getItem("projectList");
const projectList = JSON.parse(storedProject);

export function AddEtapas() {
  const projetos = [];
  for (let i = 0; i < projectList.length; i++) {
    projetos.push({ name: projectList[i], value: "a" + i });
  }

  const [task, setTask] = useState();
  const [taskName, setTaskName] = useState();
  const [taskProject, setTaskProject] = useState();

  const newActivity = {
    id: "",
    taskName: taskName,
    projectFather: taskProject,
    momentTask: task,
  };
  function Add() {
    activityList.push(newActivity);
    activityList[activityList.indexOf(newActivity)].activityID =
      activityList.indexOf(newActivity);
    localStorage.setItem("activityList", JSON.stringify(activityList));
  }

  useEffect(() => {
    projetos.map((e) => {
      document.getElementById(
        "projectName"
      ).innerHTML += `<option value=${e.value}>${e.name}</option>`;
    });
  }, []);

  return (
    <div className="formActivity">
      <select
        name="projectName"
        id="projectName"
        onChange={(e) => setTaskProject(e.target.value)}>
        <option value=""></option>
      </select>
      <select
        name="momentName"
        id="momentName"
        onChange={(e) => setTask(e.target.value)}>
        <option value="Momento">Qual momento?</option>
        <option value="task">Task</option>
        <option value="progress">Progress</option>
        <option value="completed">Completed</option>
      </select>
      <input type="text" onChange={(e) => setTaskName(e.target.value)} />
      <button onClick={Add}>Adicionar</button>
    </div>
  );
}
