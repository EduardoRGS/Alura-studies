import React from "react";
import Button from "../Button";

class Form extends React.Component {
    render () {
        return (
            <form>
                <div>
                    <label htmlFor="task">
                       Add a new study
                    </label>
                    <input 
                        type="text"
                        name="task"
                        id="task"
                        placeholder="Study..."
                        required
                        />
                </div>
                <div>
                    <label htmlFor="time">
                       Time
                    </label>
                    <input 
                        type="time"
                        step="1"
                        name="time"
                        min="00:00:00"
                        max="01:30:00"
                        required/>
                </div>
                <Button></Button>
            </form>
        )
    }
}

export default Form;