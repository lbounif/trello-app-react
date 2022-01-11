import {Modal, Input, DatePicker, Select} from "antd"
import moment from "moment"
import { useState } from 'react';

const {Option} = Select
//props: show, handleShow, 
//handleOk, handleCancel
const AddTask = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [ddl, setDdl] = useState(null)
    const [tag, setTag] = useState("")
    return (
        <div className="new-task">
            <div className="new-task-btn" onClick={props.handleShow}>
                 Add new Task !
             </div>
            {/* Modal */}
            <div className="input-container">
                <Modal 
                    title="ADD A NEW RASK" 
                    visible={props.show} 
                    onOk={()=> {
                        props.newTask(title, description, ddl.format("YYYY-MM-DD"),tag)
                    }} 
                    onCancel={props.handleClose}>
                <div className="input-container">
                    <Input 
                        size="large"
                        value={title}
                        placeholder="Task Title"
                        onChange={(e)=> setTitle(e.target.value)}/>
                </div>
                <div className="input-container">
                    <Input 
                        size="large"
                        value={description}
                        placeholder="Task Description"
                        onChange={(e)=> setDescription(e.target.value)}/>
                </div>
                <div className="input-container">
                    <DatePicker 
                        size="large"
                        value={ddl}
                        onChange={(date)=> setDdl(date)}/>
                </div>
                <div className="input-container">
                    <Select 
                        size="large"
                        placeholder="Tag"
                        style={{ width: 120 }}
                        onChange={(value)=> setTag(value)}>
                        <Option value="work">Work</Option>
                        <Option value="study">Study</Option>
                        <Option value="hobby">Hobby</Option>
                    </Select>
                </div>
                </Modal>
             </div>
        </div>
    )
}
export default AddTask

