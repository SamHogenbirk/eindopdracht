import React from "react";

const FilterButtons = ({ handleChange, handleClick, data }) => {

    const render = (data) => {

        switch (data) {
            case "chartType":

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

            case "sort":



                return (

                    <div className="sort-wrapper">
                        <select name="sort">
                            <option value="">--choose an option--</option>
                            <option value="category">sort by assignment</option>
                            <option value="category">sort by name</option>
                            <option value="difficulty">sort by difficulty</option>
                            <option value="fun">sort by fun</option>
                        </select>
                        <label>
                            <button
                                id="x"
                                className="sort-button"
                                name="sortButton"
                                value="sort" onClick={handleClick}>
                                Sort asc
                            </button>
                        </label>
                    </div>

                )


            case "switchChart":
                return (
                    <div className="Switch-chart-wrapper">
                        <button
                            className="chart-button"
                            name="switch"
                            onClick={handleClick}>
                            switch chart
                        </button>
                    </div>
                )

        }

    }


    return (
        <>
            {render(data)}
        </>
    )
}

export default FilterButtons