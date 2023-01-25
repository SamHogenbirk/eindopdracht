
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { uniqueArray } from "../features/FilterSlice"



const Test = () => {

    const dispatch = useDispatch()
    dispatch(uniqueArray("studentName"))
    const res = useSelector((state) => state.filter)

    console.log(res)


    return (
        <div>

        </div>
    )


}

export default Test