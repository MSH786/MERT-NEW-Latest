import faker from 'faker/locale/tr';
import Location from './location';
import User from './user';

class Ilan {
    constructor(
        
        ){
            Object.assign(this,{
                id : faker.time.recent(),
                User : new User(),
                updatedDate : faker.date.recent(),
                createdDate : faker.date.recent(),
                title : faker.name.title(),
                description : faker.lorem,
                creditApplicationNumber : faker.datatype.number(1111,9999),
                viewNumber : faker.datatype.number(1111,9999),
                viewers : [new User(), new User()],
                buyers : [new User(), new User()],
                favoriteNumber : faker.datatype.number(1111,9999),
                sentMessagesNumber : faker.datatype.number(1111,9999),
                endDate : faker.date.future(),
                isAboveVitrin : faker.datatype.boolean(),
                updateIlanDate : faker.datatype.boolean(),
                location : new Location(),
                productType : "CAR",
                videoUrl : faker.image.transport()
            })
    }




}

export default Ilan;