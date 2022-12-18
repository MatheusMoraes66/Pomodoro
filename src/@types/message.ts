export interface IMessage {
    type: string,
    data?: any | null,
    error?: string | null
}

export enum MessageType {
    REQUEST = "GET_REQUEST",
    SUCCESS = "GET_SUCCESS",
    ERROR = "GET_ERROR"
}

export type MessageContextType = {
    message: IMessage,
    messageRequest: () => IMessage,
    messageSuccess: (results: any) => IMessage,
    messageError: (errors: string) => IMessage
}