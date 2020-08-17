import React from 'react';

class TodoItem extends React.Component {
    render() {
        let checkBoxes = this.props.dataTodo
        let handleChange = this.props.handleChange
        let checkBoxDisplay = checkBoxes.map(cb => 
            <div style={ {display: "flex",
                        justifyContent: "center",
                        alignItems: "center", 
                        backgroundColor: 'ivory', 
                        border: 'solid gray', fontSize: 20} } >
                <input
                    type = "checkBox"
                    checked = {cb.checked === "true"}
                    onChange = { () => handleChange(cb.id) } >
                </input>
                <p onClick = { () => handleChange(cb.id)} > {cb.todo} </p>
            </div>
       )
        
        return (
            <div>
                {checkBoxDisplay}
            </div>
        )
    }
}

export default TodoItem