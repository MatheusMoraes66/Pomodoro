import { useEffect, useState } from "react";
import { useUser } from "../../contexts/userContext";
import style from "../../styles/Pomodore.module.css";
import { IUser } from "../../@types/user";
import { Link, useNavigate } from "react-router-dom";
import Timer from "../../components/Timer";

function Pomodore() {
    const navigate = useNavigate();
    const [selectUser, setSelectUser] = useState<IUser | undefined>()
    const { user } = useUser()
    useEffect(() => {
        if (user.name !== "") {
            setSelectUser(user)
        } else {
            navigate("/")
        }
        console.table(user)
    },[user])

    return (
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.header}>
                    <Link
                        className={style.returnlink} 
                        to={{
                            pathname: "/"
                        }}
                    >
                        <i className="fa fa-reply"></i>
                    </Link>
                   
                    <a className={style.userlink} href={selectUser?.html_url}>
                        <i className="fa fa-link"></i>
                    </a>
                    <div className={style.avatar}>
                        <img src={selectUser?.avatar_url} />
                    </div>
                    <span className={style.reposcount}>{selectUser?.public_repos}</span>
                    <div className={style.userinfo}>
                        <h2>{selectUser?.login}</h2>
                        <p>{selectUser?.name}</p>
                    </div>
                </div>
                <div className={style.totals}>
                    <div className={style.box}>
                        <p>{selectUser?.followers}</p>
                        <div className={style.desc}>Followers</div>
                    </div>
                    <div className={style.box}>
                        {selectUser?.following}
                        <div className={style.desc}>Following</div>
                    </div>
                </div>
                <Timer/>
            </div>
            
        </div>
    )
}

export default Pomodore;