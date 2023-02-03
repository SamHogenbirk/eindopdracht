import React from "react";

const RadioButtons = ({ handleChange, props }) => {

    return (
        <>
            <div className="radio-button">
                <label> Average per:

                    <label> Assignment:
                        <input
                            defaultChecked="checked"
                            onChange={handleChange}
                            type="radio"
                            name="chartType"
                            value="assignment">
                        </input>
                    </label>

                    <label> Student:
                        <input
                            onChange={handleChange}
                            type="radio"
                            name="chartType"
                            value="student">
                        </input>
                    </label>
                </label>
            </div>
        </>
    )
}

export default RadioButtons