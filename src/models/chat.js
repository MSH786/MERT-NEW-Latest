import faker from 'faker/locale/tr';
import Ilan from './ilan';
import Message from './message';
import User from './user';

class Chat {
    constructor(
        
        ){
            Object.assign(this,{
                id : faker.time.recent(),
                createdDate : faker.date.recent(),
                messages : [new Message(),new Message(),new Message()],
                users: [new User(), new User()],
                ilan: new Ilan()
            })
    }




}

export default Chat;