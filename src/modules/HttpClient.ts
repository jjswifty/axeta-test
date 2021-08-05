import axios, { AxiosInstance } from "axios";

export default class HttpClient {
    public instance: AxiosInstance;

    constructor(private readonly baseUrl?: string) {
        this.instance = axios.create({
            baseURL: this.baseUrl,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}