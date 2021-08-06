import { Config } from './../modules/Constants';
import { HttpClient } from "../modules";
import BaseService from "./BaseService";

class GeocodeService extends BaseService {

    public geocode = async (params: string) => {
        
        const response = await this.instance.get(`?geocode=${params.split(' ').join('+')}`)
        // апи яндекса в этом плане подвело конечно, апи ключ не в хэдере
        // и возвращаемое сервером значение так же не такое, как в доке, поэтому пришлось далеко залазить
        
        const position = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse()

        const data = {
            latitude: position[0], // широта
            longitude: position[1], // долгота
        }

        return data
    }
}

export default new GeocodeService(new HttpClient(Config.API_URL))