import axios from "axios";

interface ResponseUser {
    data: any,
    status: any
}

export async function getUser(user: string): Promise<ResponseUser | undefined> {
    let resp: ResponseUser;
    try {
        let response = await axios.get(
            `https://api.github.com/users/${user}`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );
        resp = {
            data: response.data,
            status: response.status
        }
        return resp;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            resp = {
                data: 'error message: ' + error.message,
                status: error.code
            }
            return resp;
        }
    }
}