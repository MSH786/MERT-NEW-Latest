import faker from 'faker/locale/tr';
import User from './user';
import Ilan from './ilan';

class Car {
    constructor(
        
        ){
            Object.assign(this,{
                id : faker.time.recent(),
                type :  "OTOMOBIL",
                year : faker.datatype.number(1970,2021),
                brand : faker.name.lastName(),
                model : faker.name.lastName(),
                fuelType : faker.name.lastName(),
                bodyType : faker.name.lastName(),
                engine : faker.name.lastName(),
                packageType : faker.name.lastName(),
                km : faker.datatype.number(111, 999),
                color : "BLUE",
                plate : "34 ASD 4543",
                inspectionDate : faker.date.future(),
                appraisal : faker.name.lastName(),
                insuranceCode : faker.datatype.number(111,999),
                price: faker.datatype.float(1000,9999),
                vitrinImageUrl: faker.image.transport(),
                ilanId: new Ilan(),
                fromWho: "SAHIBINDEN"
            })
    }




}

export default Car;