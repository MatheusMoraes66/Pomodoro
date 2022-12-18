import { createContext, useContext, useState } from "react";
import { IMessage, MessageContextType, MessageType } from "../@types/message";

const DEFAULT_STATE: IMessage = {
    type: "",
    data: {},
    error: ""
}

const DEFAULT_CONTEXT: MessageContextType = {
    message: DEFAULT_STATE,
    messageRequest: () => DEFAULT_STATE,
    messageSuccess: (results: any) => DEFAULT_STATE,
    messageError: (errors: string) => DEFAULT_STATE
}

export const MessageContext = createContext<MessageContextType>(DEFAULT_CONTEXT)

export const useMessage = () => useContext(MessageContext)

function MessageProvider({ children }: { children: React.ReactElement }) {
    
    const [message, setMessage] = useState<IMessage>(DEFAULT_STATE)

    const messageRequest = () => {
        let action: IMessage = {
            type: MessageType.REQUEST,
            data: null,
            error: null
        }
        setMessage(action)

        return action
    }

    const messageSuccess = (results: any) => {
        let action: IMessage = {
            type: MessageType.SUCCESS,
            data: results,
            error: null
        }
        setMessage(action)

        return action
    }

    const messageError = (error: string) => {
        let action: IMessage = {
            type: MessageType.ERROR,
            data: null,
            error: error
        }
        console.log(action);
        
        setMessage(action)

        return action
    }

    return (
        <MessageContext.Provider
            value={{ 
                message,
                messageError,
                messageSuccess,
                messageRequest
            }}>
            {children}
        </MessageContext.Provider>
    )
}

export default MessageProvider