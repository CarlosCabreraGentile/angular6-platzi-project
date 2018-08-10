export class HelperService {


    /*
    {
        "1533668396511":{
            "cercania":4,
            "descripcion":"Nuevo negocio bancario",
            "distancia":10,
        },
        "1533670740311": {
            "cercania":14,
            "descripcion":"Empresa extraña",
        }
    }

    [
        {
            "id": "1533668396511",
            "cercania":4,
            "descripcion":"Nuevo negocio bancario",
            "distancia":10,
        },
        {
            "id": "1533668396512",
            "cercania":14,
            "descripcion":"Empresa extraña",
        }
    ]

    */

    static fromObjectToArray(object: any) {
        if (!object){
            return [];
        }
        else{

            let  objectRetornado = Object.keys(object).map((key) => {
                const obj = object[key];
                obj['_id'] = key;
                return obj;
            });
            return objectRetornado;
        }    
    }

}