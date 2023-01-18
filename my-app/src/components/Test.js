
import { useSelector } from "react-redux"


const Test = () => {

    const data = useSelector((state) => state.data.StudentData)

    const calculateAverageDifficultyRatingPerAssigntment = (data) => {
        const assignments = data.map((data) => data.assignment)
        const uniqueAssignments = [...new Set(assignments)]
        const averageDifficultyRatingPerAssigntment = uniqueAssignments.map((assignment) => {
            const difficultyRatingPerAssignment = data.filter((data) => data.assignment === assignment).map((data) => data.difficultyRating)
            const averageDifficultyRating = difficultyRatingPerAssignment.reduce((a, b) => a + b) / difficultyRatingPerAssignment.length
            return averageDifficultyRating

        })

        return averageDifficultyRatingPerAssigntment

    }
    console.log(calculateAverageDifficultyRatingPerAssigntment(data))


    // const studentNames = [...new Set(studentData.map((object) => object.name))];

    // calculate averages per assignment for joy and difficulty
    // let allAveragesPerAssignment = [];
    // const uniqueAssignments = [...new Set(studentData.map((user) => user.assignment))].length;
    // for (let a = 0; a < uniqueAssignments; a++) {
    //     const assignmentAllUsers = studentData.filter(item => item.assignment === studentData[a].assignment);
    //     let joyPerAssignment = [];
    //     let difficultyPerAssignment = [];
    //     for (let i = 0; i < assignmentAllUsers.length; i++) {
    //         joyPerAssignment.push(assignmentAllUsers[i].joy);
    //         difficultyPerAssignment.push(assignmentAllUsers[i].difficulty);
    //     }

    //     let averageJoy = joyPerAssignment.reduce((accumulator, current) => accumulator + current) / assignmentAllUsers.length;
    //     let averageDifficulty = difficultyPerAssignment.reduce((accumulator, current) => accumulator + current) / assignmentAllUsers.length;
    //     let nameOfAssignment = assignmentAllUsers[0].assignment;
    //     let assignmentName = { assignment: nameOfAssignment };
    //     let averageJoyAssignment = { joy: averageJoy };
    //     let averageDifficultyAssignment = { difficulty: averageDifficulty };
    //     let totalAverageAssignment = {
    //         ...assignmentName,
    //         ...averageDifficultyAssignment,
    //         ...averageJoyAssignment,
    //     };
    //     allAveragesPerAssignment.push(totalAverageAssignment);
}







export default Test