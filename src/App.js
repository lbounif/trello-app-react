import './App.css';
import { useState } from "react"
import Section from "./components/Section"
import AddTask from "./components/AddTask"

const TASKS = [
  {
    id: 1,
    title: "Task Title 01",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "work",
    status: 0,
  },
  {
    id: 2,
    title: "Task Title 02",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "hobby",
    status: 0,
  },
  {
    id: 3,
    title: "Task Title 03",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "work",
    status: 0,
  },
  {
    id: 4,
    title: "Task Title 04",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "study",
    status: 1,
  },
  {
    id: 5,
    title: "Task Title 05",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "hobby",
    status: 1,
  },
  {
    id: 6,
    title: "Task Title 06",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "study",
    status: 1,
  },
  {
    id: 7,
    title: "Task Title 07",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "hobby",
    status: 2,
  },
  {
    id: 8,
    title: "Task Title 08",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "hobby",
    status: 2,
  },
  {
    id: 9,
    title: "Task Title 09",
    description:
      "As a user , I can perform multiple task on the platform, Log in , Sign in , submit a new work ,and complete a task !",
    ddl: "28/08/2020",
    tag: "work",
    status: 2,
  },
];
function App() {
  const [show, setShow] = useState(false)
  //add state for tasks
  const [tasks, setTasks] = useState(TASKS)
  const handleShow = () => setShow(true)
  const handleClose= () => setShow(false)
  const newTask = (title, description,ddl,tag) => {
    //add the new task to TASKS array
    setTasks((tasks) => {
      return [
        ...tasks,
        {
          title,
          description,
          ddl,
          tag,
          status: 0,
          id: Math.floor(Math.random() * 10000)
        }
      ]
    })
    setShow(false)
  }
  //toPreviousStep
  const toPreviousStep = (id) => {
     setTasks((tasks)=> {
       return tasks.map((task)=>{
         if(task.id === id) {
           return { ...task, status: task.status - 1}
         }
         return task
       })
     })
  }
  //toNextStep
  const toNextStep = (id) => {
    setTasks((tasks)=> {
      return tasks.map((task)=>{
        if(task.id === id) {
          return { ...task, status: task.status + 1}
        }
        return task
      })
    })
  }
  return (
    <div className="App">
      <AddTask 
        show={show}
        handleShow={handleShow}
        newTask={newTask}
        handleClose={handleClose}/>
      <div className="sections">
        <Section
          title="To Do"  
          toNextStep= {toNextStep}
          tasksArr={tasks.filter((task)=> task.status === 0)}/>
        <Section
          title="Currently doing"  
          toPreviousStep={toPreviousStep} 
          toNextStep={toNextStep}
          tasksArr={tasks.filter((task)=> task.status === 1)}/>
        <Section
          title="Completed"  
          toPreviousStep={toPreviousStep}  
          tasksArr={tasks.filter((task)=> task.status === 2)}/>
    </div>
      </div>
     
  );
}

export default App;
