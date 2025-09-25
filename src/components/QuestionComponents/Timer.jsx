import IconoTimer from "../../assets/icons/IconoTimer.png"

function Timer() {
    return (
        <div className="flex relative justify-center items-center w-20">
            <img src={IconoTimer} alt="IconoTimer" />
            <div className="flex flex-col pt-5 absolute justify-center items-center">
                <p className="text-2xl text-primary font-bold leading-5">190</p>
                <p className="text-xs text-primary font-bold leading-tight">seg</p>
            </div>
        </div>
    )
}

export default Timer