
import { useSelector } from "react-redux"


const Test = () => {

    const data = useSelector((state) => state.data.StudentData)
    console.log(data)

// const calculateAverageDifficultyRatingPerStudent=(data) => {
//     const averageDifficultyRatingPerStudent = studentArray.map((student) => {
//         const difficultyRatingPerStudent =
//             data.filter((data) => data.studentName === student)
//                 .map((data) => data.difficulty)

//         const averageDifficultyRating = difficultyRatingPerStudent.reduce((a, b) => a + b) / difficultyRatingPerStudent.length

//         return averageDifficultyRating

//     })
//     return averageDifficultyRatingPerStudent
// }
}







export default Test