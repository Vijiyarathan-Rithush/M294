import axios from "axios"

/**
 * Erstellt eine HTTP-Verbindung mit axios für API-Anfragen.
 *
 * @type {import('axios').AxiosInstance}
 */
export const http = axios.create({
    baseURL: "http://localhost:3002",
    timeout: 8000,
    headers: { Accept: "Application/json" }
})