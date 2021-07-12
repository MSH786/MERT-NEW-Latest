import faker from 'faker';

class Notification {
    constructor(isNew, firstname, lastname
        ){
            Object.assign(this,{
               id: (Math.random()) * 100,
               notification: faker.lorem.sentence(),
               firstname: firstname,
               lastname: lastname,
               profileImage: faker.image.people(),
               date: faker.date.weekday(),
               isNew: isNew
            })
    }

}

export default Notification;