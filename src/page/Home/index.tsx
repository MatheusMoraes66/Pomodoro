import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';

import style from '../../styles/Home.module.css'
import { useUser } from '../../contexts/userContext';
import ErrorMessage from '../../components/Message/ErrorMessage';

const Home = () => {
    const { searchUser } = useUser();
    const [name, setName] = useState<string>("")

    return (
        <div>
            <div className={style.container}>
                <section className={style.title}>
                    <h1>Pomodore</h1>
                    <p>Digite o seu nome do usuario abaixo, para poder acessar o aplicativo.</p>
                </section>
                <section className={style.search}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <Button text='Buscar' action={() => searchUser(name)} />
                </section>
            </div>
            <ErrorMessage message='ddd' isVisible={true} />
        </div>
    )
}

export default Home;