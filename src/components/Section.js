import Task from "./Task"

const Section = (props) => {
    return (
        <div className="section-container">
            <div className="section-header">{props.title}</div>
            {props.tasksArr.map((task)=> (
                <Task 
                    key={task.id}
                    task={task}
                    section={props.title}
                    toPreviousStep={props.toPreviousStep}
                    toNextStep={props.toNextStep}/>
            ))}
        </div>
    )
}
export default Section