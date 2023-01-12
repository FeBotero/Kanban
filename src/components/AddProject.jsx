import { useState } from "react";
import Modal from "react-modal";
var listProject = localStorage.getItem("projectList");
const projectArray = JSON.parse(listProject);

export function AddProject() {
  var [project, setProject] = useState([]);

  function newProject() {
    projectArray.push(project);
    localStorage.setItem("projectList", JSON.stringify(projectArray));
    console.log(projectArray);
  }

  return (
    <div>
      <input
        type="text"
        id="newProject"
        onChange={(e) => setProject(e.target.value)}
      />

      <button onClick={newProject}>Adicionar</button>
    </div>
  );
}
