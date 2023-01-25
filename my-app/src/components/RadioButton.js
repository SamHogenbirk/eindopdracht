import React from "react";


const RadioButton = ({ handleChange }) => {

    return (
        <>
            <div className="radio-button">
                <label> Average per:

                    <label> Assignment:
                        <input
                            defaultChecked="checked"
                            onChange={handleChange}
                            type="radio"
                            name="data"
                            value="assignment">
                        </input>
                    </label>

                    <label> Student:
                        <input
                            onChange={handleChange}
                            type="radio"
                            name="data"
                            value="student">
                        </input>
                    </label>
                    
                </label>
            </div>
        </>
    )
}

export default RadioButton;