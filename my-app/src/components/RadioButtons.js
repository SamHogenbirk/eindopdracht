import React from "react";

const RadioButtons = ({ handleChange, props }) => {

    const render = (input) => {

        if (input === "chartType") {

            return (
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

            )
        } else if (input === "sort") {
            // return (

            //     <div className="sort-checkbox">
            //         <label htmlFor="select">Sort by:
            //             <label className="sort-checkbox" > Standaart
            //                 <input type="radio" defaultChecked={true} value="" name="sortRadio" onChange={handleChange} />
            //             </label>

            //             <label className="sort-checkbox"> Naam
            //                 <input type="radio" value="studentName" name="sortRadio" onChange={handleChange} />
            //             </label >

            //             <label className="sort-checkbox"> Opdracht
            //                 <input type="radio" value="assign" name="sortRadio" onChange={handleChange} />
            //             </label >

            //             <label className="sort-checkbox"> Difficulty
            //                 <input type="radio" value="difficulty" name="sortRadio" onChange={handleChange} />
            //             </label >

            //             <label className="sort-checkbox"> fun
            //                 <input type="radio" value="fun" name="sortRadio" onChange={handleChange} />
            //             </label>
            //         </label>
            //     </div>
            // )
        }
    }
    return (
        <>
            {render(props)}
        </>
    )
}

export default RadioButtons