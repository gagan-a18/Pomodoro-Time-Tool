import { Progress } from "@nextui-org/react"
import { useAppSelector } from "../../redux-toolkit/hooks"


const ProgressCard = () => {

    const category = useAppSelector(state => state.category.name);

    return (
        <>
            <div className="w-3/12">{category === "Pomodoro" ? <Progress className="w-full" aria-label="Loader" size="sm" value={30} /> : ""}</div>
            <div className="w-3/12">{category === "Short Break" ? <Progress className="w-full" aria-label="Loader" size="sm" value={30} /> : ""}</div>
            <div className="w-3/12">{category === "Long Break" ? <Progress className="w-full" aria-label="Loader" size="sm" value={30} /> : ""}</div>
        </>
    )
}

export default ProgressCard