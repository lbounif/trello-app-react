//Props:
//1.task: tag, title, description, dateTask, 
//2.section, 
//3.toPreviousStep, 
//4.toNextStep
const TAGS = {
    work: "#ff675f",
    study: "#63ffbb",
    hobby: "#833ad9",
}
const Task = (props) => {
    return (
        <div className="card-container">
            {/* tag of the task */}
            <div 
                className="card-tag"
                style={{backgroundColor : TAGS[props.task.tag]}}>
            </div>
            <div className="card-title">{props.task.title}</div>
            <hr />
            <div className="card-description">{props.task.description}</div>
            <div className="card-footer">
                <div className="datetask">{props.task.ddl}</div>
                <div className="card-actions">
                    {
                        props.section === "To Do" ? null
                        : <div 
                            className="action"
                            onClick={()=>{props.toPreviousStep(props.task.id)}}>Previous</div>
                    }
                    {
                        props.section === "Completed" ? null
                        : <div 
                            className="action"
                            onClick={()=>{props.toNextStep(props.task.id)}}>Next</div>
                    }
                </div>
            </div>
        </div>
    )
}
export default Task