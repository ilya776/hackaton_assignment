import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/auth/register/';

export interface RegisterData {
    name: string;
    email: string;
    password: string;
}

export const registerUser = async (userData: RegisterData): Promise<any> => {
    try {
        const response = await axios.post(API_URL, userData);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new Error(error.response.data?.detail || JSON.stringify(error.response.data));
        } else {
            throw new Error('Network or server error');
        }
    }
};
