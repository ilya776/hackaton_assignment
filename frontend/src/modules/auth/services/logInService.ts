import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/auth";

export interface LoginData {
    email: string;
    password: string;
}

export interface LoginResponse {
    tokens: {
        access: string;
        refresh: string;
    };
}

export const login = async (data: LoginData): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(`${API_URL}/login/`, data);
    localStorage.setItem("accessToken", response.data.tokens.access);
    localStorage.setItem("refreshToken", response.data.tokens.refresh);
    return response.data;
};
