import React, { useEffect, useState } from 'react'
import style from "../../styles/Timer.module.css"

function Timer() {
    const [timer, setTimer] = useState<string>("25:00")
    const [play, setPlay] = useState<boolean>(false)

    const formatNumber = (time: number): string => {
        let formated: string = time > 9 ? time.toString() : "0" + time.toString();
        return formated
    }

    useEffect(() => {
        if (play === true) {
            let time = timer.split(":")
            let minutes = Number(time[0])
            let seconds = Number(time[1])
            console.log(seconds);
            if (minutes !== 0) {
                if (seconds > 0) {
                    setTimeout(() => {
                        seconds = seconds - 1
                        setTimer(formatNumber(minutes) + ":" + formatNumber(seconds))
                    }, 1000);
                } else {
                    setTimeout(() => {
                        minutes = minutes - 1
                        seconds = 60
                        setTimer(formatNumber(minutes) + ":" + formatNumber(seconds))
                    }, 1000);
                }
            }

        }
    }, [play, timer])


    return (
        <div className={style.container}>
            <div className={style.timer}>{timer}</div>
            <div className={style.command}>
                <button className={style.btnStop} onClick={() => setPlay(false)}>
                    <i className="fa fa-stop" aria-hidden="true"></i>
                    STOP
                </button>
                <button className={style.btnPlay} onClick={() => setPlay(true)}>
                    <i className="fa fa-play" aria-hidden="true"></i>
                    START
                </button>
                <button className={style.btnRestart} onClick={() => setTimer("25:00")}>
                    <i className="fa fa-fast-backward" aria-hidden="true"></i>
                    RESTART
                </button>
            </div>
        </div>
    )
}

export default Timer
