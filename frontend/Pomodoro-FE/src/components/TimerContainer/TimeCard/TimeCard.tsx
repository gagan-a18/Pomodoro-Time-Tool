import Timer from "./Timer";

const TimeCard = () => {

    const time = new Date();
    time.setSeconds(time.getSeconds() + 600);

    return (
        <>
            <div className="w-3/12">
                <Timer expiryTimestamp={time} />
            </div >
            <div className="w-3/12 border border-black">
                hi
            </div>
            <div className="w-3/12 border border-black">
                hi
            </div>
        </>
    )
}

export default TimeCard