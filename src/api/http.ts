import axios from "axios";

export const http = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 8000,
    headers: {Accept: "application/json"},
});