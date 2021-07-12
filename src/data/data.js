import React from 'react';
import EmailIcon from '../../assets/icons/RegisterMethodIcons/EmailIcon';
import GoogleIcon from '../../assets/icons/RegisterMethodIcons/GoogleIcon';
import PhoneIcon from '../../assets/icons/RegisterMethodIcons/PhoneIcon';
import AppleIcon from '../../assets/icons/RegisterMethodIcons/AppleIcon';
import FacebookIcon from '../../assets/icons/RegisterMethodIcons/FacebookIcon';
import AllIcon from '../../assets/icons/CategoriesIcons/AllIcon';
import CarCategoryIcon from '../../assets/icons/CategoriesIcons/CarCategoryIcon';
import SmallCarIcon from '../../assets/icons/CategoriesIcons/SmallCarIcon';
import BicycleIcon from '../../assets/icons/CategoriesIcons/BicycleIcon';
import VanIcon from '../../assets/icons/CategoriesIcons/VanIcon';
import TruckIcon from '../../assets/icons/CategoriesIcons/TruckIcon';
import Truck2Icon from '../../assets/icons/CategoriesIcons/Truck2Icon';
import * as Images from '../constants/Images';
import FilterCarTypeOne from '../../assets/icons/carType/FilterCarTypeTwo';
import FilterCarTypeTwo from '../../assets/icons/carType/FilterCarTypeOne';
import FilterCarTypeThree from '../../assets/icons/carType/FilterCarTypeThree';
import FilterCarTypeFour from '../../assets/icons/carType/FilterCarTypeFour';
import FilterCarTypeFive from '../../assets/icons/carType/FilterCarTypeFive';
import FilterCarTypeSix from '../../assets/icons/carType/FilterCarTypeSix';
import FilterCarTypeSeven from '../../assets/icons/carType/FilterCarTypeSeven';
import FilterCarTypeEight from '../../assets/icons/carType/FilterCarTypeEight';
import faker from 'faker';

export const registerMethods = [
  {
    id: 1,
    title: 'Telefon ile Kayıt Olun',
    icon: <PhoneIcon width={24} height={24} />,
    method: 'phone',
  },
  {
    id: 2,
    title: 'Eposta ile Kayıt Olun',
    icon: <EmailIcon width={24} height={24} />,
    method: 'email',
  },
  {
    id: 3,
    title: 'Google ile Kayıt Olun',
    icon: <GoogleIcon width={24} height={24} />,
    method: 'google',
  },
  {
    id: 4,
    title: 'Apple ile Kayıt Olun',
    icon: <AppleIcon width={24} height={24} />,
    method: 'apple',
  },
  {
    id: 5,
    title: 'Facebook ile Kayıt Olun',
    icon: <FacebookIcon width={24} height={24} />,
    method: 'facebook',
  },
];

export const categories = selectedCategoryIndex => [
  {
    id: 1,
    title: 'Tümü',
    icon: (
      <AllIcon
        fill={selectedCategoryIndex === 0 ? Colors.categoriesOrange : 'gray'}
        width={24}
        height={24}
      />
    ),
  },
  {
    id: 2,
    icon: (
      <SmallCarIcon
        fill={selectedCategoryIndex === 1 ? Colors.categoriesOrange : 'gray'}
        width={40}
        height={40}
      />
    ),
  },
  {
    id: 3,
    icon: (
      <CarCategoryIcon
        color={selectedCategoryIndex === 2 ? Colors.categoriesOrange : 'gray'}
        fill={selectedCategoryIndex === 2 ? Colors.categoriesOrange : 'gray'}
        stroke={selectedCategoryIndex === 2 ? Colors.categoriesOrange : 'gray'}
        width={40}
        height={40}
      />
    ),
  },
  {
    id: 4,
    icon: (
      <BicycleIcon
        fill={selectedCategoryIndex === 3 ? Colors.categoriesOrange : 'white'}
        width={40}
        height={40}
      />
    ),
  },
  {
    id: 5,
    icon: (
      <VanIcon
        fill={selectedCategoryIndex === 4 ? Colors.categoriesOrange : 'gray'}
        width={40}
        height={40}
      />
    ),
  },
  {
    id: 6,
    icon: (
      <TruckIcon
        fill={selectedCategoryIndex === 5 ? Colors.categoriesOrange : 'white'}
        width={40}
        height={40}
      />
    ),
  },
  {
    id: 7,
    icon: (
      <Truck2Icon
        fill={selectedCategoryIndex === 6 ? Colors.categoriesOrange : 'white'}
        width={40}
        height={40}
      />
    ),
  },
];

export const homeData = [
  {
    image: Images.imagesHomeImageOne,
    advertisement: false,
    modal: 'Audi A4',
    price: '271.000 ₺',
    km: '75.000',
    location: 'Maltepe',
    gear: 'Otomatik',
    gas: 'Dizel',
    id: 1,
    logo: Images.imagesHomeAudiLogo,
  },
  {
    image: Images.imagesHomeImageOne,
    advertisement: true,
    title: 'Krediye Uygun',
    subtitle: 'Araçlar',
    titlePosition: 'left',
    textAlign: 'left',
    id: 2,
  },
  {
    image: Images.imagesHomeImageOne,
    advertisement: true,
    title: '150.000 TL Altı',
    subtitle: 'Araçlar',
    titlePosition: 'right',
    textAlign: 'right',
    id: 3,
  },
  {
    image: Images.imagesHomeImageOne,
    advertisement: false,
    modal: 'Volvo XC60',
    price: '241.000 ₺',
    km: '75.000',
    location: 'Maltepe',
    gear: 'Otomatik',
    gas: 'Dizel',
    id: 4,
    logo: Images.imagesHomeAudiLogo,
  },
  {
    image: Images.imagesHomeImageOne,
    advertisement: false,
    modal: 'Audi A4',
    price: '271.000 ₺',
    km: '75.000',
    location: 'Maltepe',
    gear: 'Otomatik',
    gas: 'Dizel',
    id: 5,
  },
  {
    image: Images.imagesHomeImageOne,
    advertisement: false,
    modal: 'Volvo XC60',
    price: '271.000 ₺',
    km: '75.000',
    location: 'Maltepe',
    gear: 'Otomatik',
    gas: 'Dizel',
    id: 6,
  },
  {
    image: Images.imagesHomeImageOne,
    advertisement: false,
    modal: 'Audi A4',
    price: '271.000 ₺',
    km: '75.000',
    location: 'Maltepe',
    gear: 'Otomatik',
    gas: 'Dizel',
    id: 7,
    logo: Images.imagesHomeAudiLogo,
  },

  {
    image: Images.imagesHomeImageOne,
    advertisement: false,
    modal: 'Volvo XC60',
    price: '241.000 ₺',
    km: '75.000',
    location: 'Maltepe',
    gear: 'Otomatik',
    gas: 'Dizel',
    id: 8,
    logo: Images.imagesHomeAudiLogo,
  },
  {
    image: Images.imagesHomeImageOne,
    advertisement: false,
    modal: 'Audi A4',
    price: '271.000 ₺',
    km: '75.000',
    location: 'Maltepe',
    gear: 'Otomatik',
    gas: 'Dizel',
    id: 9,
  },
  {
    image: Images.imagesHomeImageOne,
    advertisement: false,
    modal: 'Volvo XC60',
    price: '271.000 ₺',
    km: '75.000',
    location: 'Maltepe',
    gear: 'Otomatik',
    gas: 'Dizel',
    id: 10,
  },
];

export const degerKategorileri = [
  {
    id: 1,
    title: 'Araç Tipi',
    value: 'Otomobil',
  },
  {
    id: 2,
    title: 'Yıl',
    value: 2019,
  },
  {
    id: 3,
    title: 'Marka',
    value: 'Jeep',
  },
  {
    id: 4,
    title: 'Model',
    value: 'Renegade',
  },
  {
    id: 5,
    title: 'Yakıt',
    value: 'Dizel',
  },
  {
    id: 6,
    title: 'Kasa Tipi',
    value: 'SUV',
  },
  {
    id: 7,
    title: 'Motor',
    value: '1.6 Multijet',
  },
  {
    id: 8,
    title: 'Paket',
    value: 'Limited',
  },
];

export const YilData = [
  {id: 1, label: '2000', value: '2000'},
  {id: 2, label: '2001', value: '2001'},
  {id: 3, label: '2002', value: '2002'},
  {id: 4, label: '2003', value: '2003'},
  {id: 5, label: '2004', value: '2004'},
  {id: 6, label: '2005', value: '2005'},
  {id: 7, label: '2006', value: '2006'},
  {id: 8, label: '2007', value: '2007'},
  {id: 9, label: '2008', value: '2008'},
  {id: 10, label: '2009', value: '2009'},
  {id: 11, label: '2010', value: '2010'},
  {id: 12, label: '2011', value: '2011'},
  {id: 13, label: '2012', value: '2012'},
  {id: 14, label: '2013', value: '2013'},
  {id: 15, label: '2014', value: '2014'},
  {id: 16, label: '2015', value: '2015'},
  {id: 17, label: '2016', value: '2016'},
  {id: 18, label: '2017', value: '2017'},
  {id: 19, label: '2018', value: '2018'},
  {id: 20, label: '2019', value: '2019'},
  {id: 21, label: '2020', value: '2020'},
  {id: 22, label: '2021', value: '2021'},
];

export const dataCarValuation = [
  {
    id: 1,
    title: 'Araç Tipi',
    data: [
      {
        id: 1,
        label: 'Otomobil',
        value: 'Otomobil',
      },
    ],
  },
  {
    id: 2,
    title: 'Yil',
    data: [
      {
        id: 1,
        label: '2019',
        value: '2019',
      },
    ],
  },
  {
    id: 3,
    title: 'Marka',
    data: [
      {
        id: 1,
        label: 'Jeep',
        value: 'Jeep',
      },
    ],
  },
  {
    id: 4,
    title: 'Model',
    data: [
      {
        id: 1,
        label: 'Renegade',
        value: 'Renegade',
      },
    ],
  },
  {
    id: 5,
    title: 'Yakit',
    data: [
      {
        id: 1,
        label: 'Dizel',
        value: 'Dizel',
      },
    ],
  },
  {
    id: 6,
    title: 'Kasa Tipi',
    data: [
      {
        id: 1,
        label: 'SUV',
        value: 'SUV',
      },
    ],
  },
  {
    id: 7,
    title: 'Motor',
    data: [
      {
        id: 1,
        label: '1.6 Multijet',
        value: '1.6 Multijet',
      },
    ],
  },
  {
    id: 8,
    title: 'Paket',
    data: [
      {
        id: 1,
        label: 'Limited',
        value: 'Limited',
      },
    ],
  },
];

export const dataCategory = [
  {
    id: 0,
    title: 'Tümü',
    image: require('../../assets/images/homeCategory/iconCatCarZero.png'),
  },
  {
    id: 1,
    title: 'Arac 1',
    image: require('../../assets/images/homeCategory/iconCatCarOne.png'),
  },
  {
    id: 2,
    title: 'Arac 2',
    image: require('../../assets/images/homeCategory/iconCatCarTwo.png'),
  },
  {
    id: 3,
    title: 'Arac 3',
    image: require('../../assets/images/homeCategory/iconCatCarThree.png'),
  },
  {
    id: 4,
    title: 'Arac 4',
    image: require('../../assets/images/homeCategory/iconCatCarFour.png'),
  },
  {
    id: 5,
    title: 'Arac 5',
    image: require('../../assets/images/homeCategory/iconCatCarFive.png'),
  },
  {
    id: 6,
    title: 'Arac 6',
    image: require('../../assets/images/homeCategory/iconCatCarSix.png'),
  },
];

export const userListData = [
  {
    id: 1,
    name: 'Esra Kılıç',
    dateTime: '14:32  03.05.2021',
    profilePic: require('../../assets/images/usersImages/user1.png'),
  },
  {
    id: 2,
    name: 'Kerem Tüz',
    dateTime: '12:17  03.05.2021',
    profilePic: require('../../assets/images/usersImages/user2.png'),
  },
  {
    id: 3,
    name: 'Ecem Ertaş',
    dateTime: '14:32  03.05.2021',
    profilePic: require('../../assets/images/usersImages/user3.png'),
  },
  {
    id: 4,
    name: 'Murat Çelik',
    dateTime: '14:32  03.05.2021 ',
    profilePic: require('../../assets/images/usersImages/user4.png'),
  },
];

export const dataCarTypeSlider = [
  {
    id: 1,
    title: 'Otomobil',
    imgPath: 'path_to_image',
    selected: false,
    show: false,
  },
  {
    id: 2,
    title: 'Arazi, SUV, PickUp',
    imgPath: 'path_to_image',
    selected: false,
    show: false,
  },
  {
    id: 3,
    title: 'MotoSilet',
    imgPath: 'path_to_image',
    selected: false,
    show: false,
  },
  {
    id: 4,
    title: 'Minivan & Panelvan',
    imgPath: 'path_to_image',
    selected: false,
    show: false,
  },
  {
    id: 5,
    title: 'Kamyon & Kamyonet',
    imgPath: 'path_to_image',
    selected: false,
    show: false,
  },
  {
    id: 6,
    title: 'Car',
    imgPath: 'path_to_image',
    selected: false,
    show: false,
  },
];

export const dataCarModelData = [
  {
    id: 1,
    carTitle: 'BMW',
    img: 'path_to_img',
  },
  {
    id: 2,
    carTitle: 'Toyota',
    img: 'path_to_img',
  },
  {
    id: 3,
    carTitle: 'Suzuki',
    img: 'path_to_img',
  },
  {
    id: 4,
    carTitle: 'MGW',
    img: 'path_to_img',
  },
  {
    id: 5,
    carTitle: 'KIA',
    img: 'path_to_img',
  },
];
export const CarsList = [
  {
    id: 1,
    img: require('../../assets/images/dummyCarImages/car.jpg'),
  },
  {
    id: 2,
    img: require('../../assets/images/dummyCarImages/car2.jpg'),
  },
  {
    id: 3,
    img: require('../../assets/images/dummyCarImages/car.jpg'),
  },
  {
    id: 4,
    img: require('../../assets/images/dummyCarImages/car2.jpg'),
  },
  {
    id: 5,
    img: require('../../assets/images/dummyCarImages/car.jpg'),
  },
  {
    id: 6,
    img: require('../../assets/images/dummyCarImages/car2.jpg'),
  },
  {
    id: 7,
    img: require('../../assets/images/dummyCarImages/car.jpg'),
  },
  {
    id: 8,
    img: require('../../assets/images/dummyCarImages/car2.jpg'),
  },
];
export const ChatListData = [
  {
    id: 1,
    img: require('../../assets/images/dummyCarImages/car.jpg'),
    carName: 'BMW 320D XDrive P...',
    userName: 'Dilmin Güden',
    userImg: require('../../assets/images/usersImages/user1.png'),
    unreadTexts: 2,
    time: '17:42',
    lastText: 'BMW 320d aracınızla ilgili..',
    lastTextStatus: 'recieved',
  },
  {
    id: 2,
    img: require('../../assets/images/dummyCarImages/car2.jpg'),
    carName: 'Doktordan Acil Satılık',
    userName: 'Deniz Tepe',
    userImg: require('../../assets/images/usersImages/user2.png'),
    unreadTexts: 4,
    time: '16:39',
    lastText: 'Anladım, teşekkür ederim...',
    lastTextStatus: 'recieved',
  },
  {
    id: 3,
    img: require('../../assets/images/dummyCarImages/car.jpg'),
    carName: 'Pazartesine kadar bu...',
    userName: 'Kardelen Demir',
    userImg: require('../../assets/images/usersImages/user3.png'),
    unreadTexts: 0,
    time: '16:22',
    lastText: 'Tabii, istediğiniz zama...',
    lastTextStatus: 'delivered',
  },
  {
    id: 4,
    img: require('../../assets/images/dummyCarImages/car2.jpg'),
    carName: 'Hatasız İlk Kullanıcıdan',
    userName: 'Emir Kaya',
    userImg: require('../../assets/images/usersImages/user4.png'),
    unreadTexts: 0,
    time: '15:31',
    lastText: 'O halde benim için...',
    lastTextStatus: 'sent',
  },
  {
    id: 5,
    img: require('../../assets/images/dummyCarImages/car.jpg'),
    carName: 'Krediye Uygun Öğret..',
    userName: 'Emre Gür',
    userImg: require('../../assets/images/usersImages/user1.png'),
    unreadTexts: 0,
    time: '15:12',
    lastText: 'Görüşmek üzere o zaman..',
    lastTextStatus: 'recieved',
  },
  {
    id: 6,
    img: require('../../assets/images/dummyCarImages/car2.jpg'),
    carName: 'Gözüm Gibi Baktığım...',
    userName: 'Kemal Alparslan',
    userImg: require('../../assets/images/usersImages/user2.png'),
    unreadTexts: 0,
    time: '14:49',
    lastText: 'Tabii, istediğinizde ben...',
    lastTextStatus: 'recieved',
  },
  {
    id: 7,
    img: require('../../assets/images/dummyCarImages/car.jpg'),
    carName: 'Pazartesine kadar bu...',
    userName: 'Kardelen Demir',
    userImg: require('../../assets/images/usersImages/user3.png'),
    unreadTexts: 0,
    time: '16:22',
    lastText: 'Tabii, istediğiniz zama...',
    lastTextStatus: 'recieved',
  },
  {
    id: 8,
    img: require('../../assets/images/dummyCarImages/car2.jpg'),
    carName: 'Hatasız İlk Kullanıcıdan',
    userName: 'Emir Kaya',
    userImg: require('../../assets/images/usersImages/user4.png'),
    unreadTexts: 0,
    time: '15:31',
    lastText: 'O halde benim için...',
    lastTextStatus: 'recieved',
  },
];

export const carDetail = [
  {
    id: 1,
    name: 'Sedan',
    image_path: require('../../assets/images/carDetailImages/carDetail1.png'),
  },
  {
    id: 2,
    name: '17.000',
    image_path: require('../../assets/images/carDetailImages/carDetail2.png'),
  },
  {
    id: 3,
    name: 'Benzin',
    image_path: require('../../assets/images/carDetailImages/carDetail3.png'),
  },
  {
    id: 4,
    name: 'Otomatik',
    image_path: require('../../assets/images/carDetailImages/carDetail3.png'),
  },
  {
    id: 5,
    name: '4WD(Sürekli)',
    image_path: require('../../assets/images/carDetailImages/carDetail4.png'),
  },
  {
    id: 6,
    name: 'Beyaz',
    image_path: require('../../assets/images/carDetailImages/carDetail5.png'),
  },
  {
    id: 7,
    name: '2018',
    image_path: require('../../assets/images/carDetailImages/carDetail6.png'),
  },
  {
    id: 8,
    name: 'İkinci El',
    image_path: require('../../assets/images/carDetailImages/carDetail7.png'),
  },
  {
    id: 9,
    name: 'Kullanıcısından',
    image_path: require('../../assets/images/carDetailImages/carDetail8.png'),
  },
];

export const dataCities = [
  {
    id: 0,
    label: 'Trabzon',
    value: 'Trabzon',
  },
  {
    id: 1,
    label: 'Istanbul',
    value: 'Istanbul',
  },
  {
    id: 2,
    label: 'Ankara',
    value: 'Ankara',
  },
  {
    id: 3,
    label: 'Izmir',
    value: 'Izmir',
  },
];

export const dataCounties = [
  {
    id: 0,
    label: 'Kadikoy',
    value: 'Kadikoy',
  },
  {
    id: 1,
    label: 'Besiktas',
    value: 'Besiktas',
  },
  {
    id: 2,
    label: 'Bagcilar',
    value: 'Bagcilar',
  },
  {
    id: 3,
    label: 'Alibeykoy',
    value: 'Alibeykoy',
  },
];

export const dataCountryPlaceHolder = [
  {
    id: 0,
    label: 'Turkiye',
    value: 'TR',
  },
];

export const dataCountries = [
  {
    id: 0,
    label: 'Turkiye',
    value: 'TR',
  },
  {
    id: 1,
    label: 'Almanya',
    value: 'GE',
  },
  {
    id: 2,
    label: 'Fransa',
    value: 'FR',
  },
];

export const completeChat = [
  {
    id: 1,
    userImg: require('../../assets/images/usersImages/user1.png'),
    message: 'Merhabalar. Araç ile ilgileniyorum. Takas düşünüyor musunuz?',
    date: '03.04.2021',
    time: '20:09',
    messageStatus: 'recieved',
  },
  {
    id: 2,
    userImg: require('../../assets/images/usersImages/user2.png'),
    message: 'Maalesef',
    date: '03.04.2021',
    time: '20:13',
    messageStatus: 'delivered',
  },
  {
    id: 3,
    userImg: require('../../assets/images/usersImages/user1.png'),
    message:
      'Anladım. Peki elinizde başka fotoğraf var mıdır? Bir de yerinizi öğrenebilir miyim?',
    date: '03.04.2021',
    time: '20:09',
    messageStatus: 'recieved',
  },
];

export const CardDummyData = [
  {
    id: '1',
    title: 'kemal Celik',
    subtitle: 'simdi',

    show: false,
  },
  {
    id: '2',
    title: 'Arazi, SUV, PickUp',
    selected: false,
    show: false,
  },
  {
    id: '3',
    title: 'MotoSilet',
    selected: false,
    show: false,
  },
  {
    id: '4',
    title: 'Minivan & Panelvan',
    selected: false,
    show: false,
  },
  {
    id: '5',
    title: 'Kamyon & Kamyonet',
    selected: false,
    show: false,
  },
  {
    id: '6',
    title: 'Car',
    selected: false,
    show: false,
  },
];

export const CardTypeData = [
  {
    id: 0,
    title: 'Otomobil',
    image: FilterCarTypeOne,
  },
  {
    id: 1,
    title: 'Arazi, SUV,Pickup',
    image: FilterCarTypeTwo,
  },
  {
    id: 2,
    title: 'Motosiklet',
    image: FilterCarTypeThree,
  },
  {
    id: 3,
    title: 'Minivan & Panelvan',
    image: FilterCarTypeEight,
  },
  {
    id: 4,
    title: 'Kamyon & Kamyonet',
    image: FilterCarTypeFour,
  },
  {
    id: 5,
    title: 'Çekici',
    image: FilterCarTypeFive,
  },
  {
    id: 6,
    title: 'Minibüs & Midibüs',
    image: FilterCarTypeSeven,
  },
  {
    id: 7,
    title: 'Motoryat',
    image: FilterCarTypeSix,
  },
];

export const dataProfile = [
  {
    id: 12121,
    adId: 46465,
    brand: 'Audi',
    model: 'hyroe',
    modelYear: '2017',
    price: '456.000',
    currency: '$',
    image: Images.profileItemCar,
  },
  {
    id: 25658,
    adId: 85421,
    brand: 'Opel',
    model: 'Corsa',
    modelYear: '2020',
    price: '380.000',
    currency: 'TL',
    image: Images.profileItemCar,
  },
  {
    id: 89523,
    adId: 12358,
    brand: 'BMW',
    model: 'Vihesta',
    modelYear: '2019',
    price: '590.000',
    currency: '$',
    image: Images.profileItemCar,
  },
  {
    id: 89553,
    adId: 34568,
    brand: 'Ferrai',
    model: 'O82',
    modelYear: '2021',
    price: '890.000',
    currency: 'Euro',
    image: Images.profileItemCar,
  },
  {
    id: 25658,
    adId: 85421,
    brand: 'Opel',
    model: 'Corsa',
    modelYear: '2020',
    price: '380.000',
    currency: 'TL',
    image: Images.profileItemCar,
  },
  {
    id: 89523,
    adId: 12358,
    brand: 'BMW',
    model: 'Vihesta',
    modelYear: '2019',
    price: '590.000',
    currency: '$',
    image: Images.profileItemCar,
  },
  {
    id: 89555,
    adId: 34568,
    brand: 'Ferrai',
    model: 'O82',
    modelYear: '2021',
    price: '890.000',
    currency: 'Euro',
    image: Images.profileItemCar,
  },
];

export const BankDetailData = [
  {
    id: '1',
    bankImg: require('../../assets/images/bankLogo/vakif.png'),
    toplam: '93.416',
    faiz: '1.50',
    aylik: '3.876',
  },
  {
    id: '2',
    bankImg: require('../../assets/images/bankLogo/ziraat.png'),
    toplam: '93.416',
    faiz: '1.50',
    aylik: '3.876',
  },
  {
    id: '3',
    bankImg: require('../../assets/images/bankLogo/turkiye.png'),
    toplam: '93.416',
    faiz: '1.50',
    aylik: '3.876',
  },
];
