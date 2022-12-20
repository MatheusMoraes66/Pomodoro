import React, { useEffect, useState } from 'react'
import style from "../../styles/Timer.module.css"

enum Time {
    Default = "25:00",
    LongTime = "35:00",
    SmallTime = "15:00"
}

function Timer() {
    const [time, setTime] = useState<string>("");
    const [config, setConfig] = useState<Time>(Time.Default);
    const [isPlay, setIsPlay] = useState<boolean>(false);

    useEffect(() => {
        if (isPlay === true) {
            const splitTimer = time.split(":")
            let minutes = transformInNumber(splitTimer[0])
            let seconds = transformInNumber(splitTimer[1])

            if (minutes !== 0) {
                subtractionTimer(seconds, minutes)
            }
        }
        if (time === "") {
            setTime(config)
        }
    }, [time, isPlay])

    const transformInNumber = (value: string) => {
        return Number(value);
    }

    const transformInString = (value: number) => {
        return value > 9 ? value : "0" + value;
    }

    const subtractionTimer = (seconds: number, minutes: number) => {
        if (seconds > 0) {
            seconds = seconds - 1;
        } else {
            minutes = minutes - 1;
            seconds = 60;
        }
        setTimeout(() => {
            const newTimeValue = (transformInString(minutes) + ":" + transformInString(seconds));
            setTime(newTimeValue);
        }, 1000);
    }

    const handlerStopTimer = () => {
        setIsPlay(false);
    }

    const handlerPlayTimer = () => {
        setIsPlay(true)
    }

    const handlerRestartTimer = () => {
        setTimeout(() => {
            setTime(config)
        }, 300);
    }

    const changeTimeConfig = (time: Time) => {
        handlerStopTimer()
        setConfig(time)
        
        setTimeout(() => {
            setTime(time)
        }, 300);
    }



    return (
        <div className={style.container}>
            <div className={style.tabsTime}>
                <button disabled={config === Time.Default} onClick={() => changeTimeConfig(Time.Default)}>Normal</button>
                <button disabled={config === Time.LongTime} onClick={() => changeTimeConfig(Time.LongTime)}>Long Timer</button>
                <button disabled={config === Time.SmallTime} onClick={() => changeTimeConfig(Time.SmallTime)}>Small Timer</button>
            </div>
            <div className={style.timer}>{time}</div>
            <div className={style.command}>
                <button disabled={isPlay === false} className={style.btnStop} onClick={handlerStopTimer}>
                    <i className="fa fa-stop" aria-hidden="true"></i>
                    STOP
                </button>
                <button disabled={isPlay === true} className={style.btnPlay} onClick={handlerPlayTimer}>
                    <i className="fa fa-play" aria-hidden="true"></i>
                    PLAY
                </button>
                <button className={style.btnRestart} onClick={() => handlerRestartTimer()}>
                    <i className="fa fa-fast-backward" aria-hidden="true"></i>
                    RESTART
                </button>
            </div>
        </div>
    )
}

export default Timer
