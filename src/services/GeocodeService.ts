import { Config } from './../modules/Constants';
import { HttpClient } from "../modules";
import BaseService from "./BaseService";

class GeocodeService extends BaseService {

    public geocode = async (params: string) => {
        
        const response = await this.instance.get(`?geocode=${params.split(' ').join('+')}`)
        const data = {} as {
            latitude: number
            longitude: number
        }
        // апи яндекса в этом плане подвело конечно, апи ключ не в хэдере
        // и возвращаемое сервером значение так же не такое, как в доке, поэтому пришлось далеко залазить

        if (!response.data.response.GeoObjectCollection?.featureMember[0]) return false

        // вот это вот огромное обращение из-за того что возвращается не так как нужно
        const position = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse()

        data.latitude = position[0] // широта
        data.longitude = position[1] // долгота
        
        return data
    }
}

export default new GeocodeService(new HttpClient(Config.API_URL))