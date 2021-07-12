import faker from 'faker/locale/tr';
import User from './user';

class Message {
    constructor(
        
        ){
            Object.assign(this,{
                id : faker.time.recent(),
                sentDate : faker.date.recent(),
                message : faker.lorem,
                sender : new User(),
                receiver : new User(),
                imageUrl : faker.image.transport(),
                videoUrl : "",
                location : "",
                status : "READ"
            })
    }




}

export default Message;