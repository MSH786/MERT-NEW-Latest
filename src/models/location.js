import faker from 'faker/locale/tr';

class Location {
    constructor(
        ){
            Object.assign(this,{
                id : faker.time.recent(),
                latitude : faker.address.latitude(),
                longitude : faker.address.longitude()
            })
    }




}

export default Location;