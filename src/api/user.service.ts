
import { API } from "./api"

export async function getUserByName(
    user: string
) {
    
    try {
        const response = await API.get(`/${user}`);
        return response.data;
    } catch (err) {
        throw new Error(err as string)
    }
}

export async function getRepositoryByUser(
    user: string
) {
    try {
        const response = await API.get(`/${user}/repos`);
        return response.data;
    } catch (err) {
        throw new Error(err as string)
    }
}