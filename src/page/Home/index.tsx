import { useEffect, useState } from 'react';

import style from '../../styles/Home.module.css'
import { useUser } from '../../contexts/userContext';
import ErrorMessage from '../../components/Message/ErrorMessage';

const Home = () => {
    const { searchUser } = useUser();
    const [name, setName] = useState<string>("")

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchUser(name)
    }
    return (
        <div>
            <div className={style.container}>
                <section className={style.title}>
                    <h1>Pomodore</h1>
                    <p>Digite o seu nome de usuario do GitHub, para poder acessar o aplicativo.</p>
                </section>
     
                <form className={style.search} onSubmit={handlerSubmit }>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <button className={style.btn} type="submit" hidden >Buscar</button>

                    </form>
            
            </div>
            <ErrorMessage message='ddd' isVisible={true} />
        </div>
    )
}

export default Home;