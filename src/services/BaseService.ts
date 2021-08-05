import { HttpClient } from "../modules";

class BaseService {
    protected instance: typeof HttpClient.prototype.instance;

    constructor (private readonly httpClient: HttpClient) {
        this.instance = this.httpClient.instance

        this.instance.interceptors.request.use(config => {
            const token = process.env.REACT_APP_API_TOKEN
            config.headers["Authorization"] = `Bearer ${token}`

            return config
        },
        error => {
            Promise.reject(error);
        })
    }
}

export default BaseService