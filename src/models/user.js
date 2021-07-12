import faker from 'faker/locale/tr';
import Location from './location';

class User {
    constructor(
        
        ){
            Object.assign(this,{
                id : faker.time.recent(),
                firstname : faker.name.firstName(),
                lastname : faker.name.lastName(),
                username : faker.name.lastName().toLowerCase(),
                profileImageUrl : faker.image.people(),
                phoneNumber : faker.phone.phoneFormats(),
                country : faker.address.country(),
                state : faker.address.state(),
                city : faker.address.city(),
                address : faker.address.secondaryAddress(),
                notifications : [],
                chats : [],
                location : new Location(),
                isActive : true,
                isVerified : true,
                blockedUsers : [],
                calledUsers : [],
                purchasedAds : [],
                searchHistory : [],
                visitedProfiles : [],
                registeredDate : faker.date.recent(),
                lastLoginDate : faker.date.recent(),
                deviceTokens : [],
                isNotificationActive : true,
                sharedObjects : [],
                isShowingPhoneNumber : true,
                premiums : [],
                complaints : [],
                freeAd : null,
                identificationNumber : faker.datatype.number(10000000000,99999999999),
                companyName : faker.name.jobTitle(),
                taxNumber : faker.datatype.number(10000000000,99999999999),
                homePhone : faker.phone.phoneNumber(),
                firmaName : faker.name.jobTitle(),
            })
    }




}

export default User;