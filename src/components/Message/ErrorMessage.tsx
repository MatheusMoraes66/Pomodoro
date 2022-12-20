import React, { useEffect, useState } from 'react'
import style from '../../styles/ErrorMessage.module.css'
import { useMessage } from '../../contexts/useMessage'
import { MessageType } from '../../@types/message';

interface ErrorMessageProps {
    message: string,
    isVisible: boolean
}

function ErrorMessage(props: ErrorMessageProps) {
    const [isVisible, setIsVisible] = useState<boolean| undefined>();
    const { message } = useMessage()
    
    useEffect(() => {
        if (message.type === MessageType.ERROR) {
            setIsVisible(true)
            setTimeout(() => {
                setIsVisible(false)
            }, 6000);
        } else {
            setIsVisible(false)
        }
    }, [message])

    return (
        <div className={style.container}>
            {
                isVisible ? (
                    <div className={style.error}>
                        <p>{message.error}</p>
                    </div >
                ) : (
                    null
                )
            } 
        </div>
    )
}

export default ErrorMessage
