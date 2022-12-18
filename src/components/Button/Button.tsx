import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Children, FC } from 'react';
import style from '../../styles/Button.module.css';

interface ButtonProps{
    color?: string;
    text: string;
    action: () => void;
}

const Button: FC<ButtonProps> = ({ color, text, action}) => {
    return(
        <div className={style.btn} style={{backgroundColor: color}} onClick={action}>
            <p>{text}</p>
        </div>
    )
}

export default Button
