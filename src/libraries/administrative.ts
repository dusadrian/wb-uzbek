export interface Administrative {
    [key: string]: {
        en: string,
        uz: string,
        ru: string,
        districts: {
            [key: string]: {
                en: string,
                uz: string,
                ru: string,
                type: string,
                settlements?: {
                    [key: string]: {
                        en: string,
                        uz: string,
                        ru: string,
                        type: string
                    }
                }
            }
        }
    }
}

export interface Code_Names {
    [key: string]: {
        en: string,
        uz: string,
        ru: string,
        type?: string
    }
}


export const regions: Code_Names = {
    "1703": {
        "en": "Andijan region",
        "uz": "Andijon viloyati",
        "ru": "Андижанская область"
    },
    "1706": {
        "en": "Bukhara region",
        "uz": "Buxoro viloyati",
        "ru": "Бухарская область"
    },
    "1708": {
        "en": "Jizzakh region",
        "uz": "Jizzax viloyati",
        "ru": "Джизакская область"
    },
    "1710": {
        "en": "Kashkadarya region",
        "uz": "Qashqadaryo viloyati",
        "ru": "Кашкадарьинская область"
    },
    "1712": {
        "en": "Navoi region",
        "uz": "Navoiy viloyati",
        "ru": "Навоийская область"
    },
    "1714": {
        "en": "Namangan region",
        "uz": "Namangan viloyati",
        "ru": "Наманганская область"
    },
    "1718": {
        "en": "Samarkand region",
        "uz": "Samarqand viloyati",
        "ru": "Самаркандская область"
    },
    "1722": {
        "en": "Surkhandarya region",
        "uz": "Surxondaryo viloyati",
        "ru": "Сурхандарьинская область"
    },
    "1724": {
        "en": "Syrdarya region",
        "uz": "Sirdaryo viloyati",
        "ru": "Сырдарьинская область"
    },
    "1726": {
        "en": "Tashkent city",
        "uz": "Toshkent shahri",
        "ru": "город Ташкент"
    },
    "1727": {
        "en": "Tashkent region",
        "uz": "Toshkent viloyati",
        "ru": "Ташкентская область"
    },
    "1730": {
        "en": "Fergana region",
        "uz": "Farg'ona viloyati",
        "ru": "Ферганская область"
    },
    "1733": {
        "en": "Khorezm region",
        "uz": "Xorazm viloyati",
        "ru": "Хорезмская область"
    },
    "1735": {
        "en": "Republic of Karakalpakstan",
        "uz": "Qoraqalpog'iston Respublikasi",
        "ru": "Республика Каракалпакстан"
    }
}

export const districts: Code_Names = {
    "1703202": {
        "en": "Oltinko'l district",
        "uz": "Oltinko'l tumani",
        "ru": "Алтынкульский район"
    },
    "1703203": {
        "en": "Andijon district",
        "uz": "Andijon tumani",
        "ru": "Андижанский район"
    },
    "1703206": {
        "en": "Baliqchi district",
        "uz": "Baliqchi tumani",
        "ru": "Балыкчинский район"
    },
    "1703209": {
        "en": "Bo'ston district",
        "uz": "Bo'ston tumani",
        "ru": "Бустонский район"
    },
    "1703210": {
        "en": "Buloqboshi district",
        "uz": "Buloqboshi tumani",
        "ru": "Булакбашинский район"
    },
    "1703211": {
        "en": "Jalaquduq district",
        "uz": "Jalaquduq tumani",
        "ru": "Жалакудукский район"
    },
    "1703214": {
        "en": "Izboskan district",
        "uz": "Izboskan tumani",
        "ru": "Избасканский район"
    },
    "1703217": {
        "en": "Ulug'nor district",
        "uz": "Ulug'nor tumani",
        "ru": "Улугноpский район"
    },
    "1703220": {
        "en": "Qo'rg'ontepa district",
        "uz": "Qo'rg'ontepa tumani",
        "ru": "Кургантепинский район"
    },
    "1703224": {
        "en": "Asaka district",
        "uz": "Asaka tumani",
        "ru": "Асакинский район"
    },
    "1703227": {
        "en": "Marxamat district",
        "uz": "Marxamat tumani",
        "ru": "Мархаматский район"
    },
    "1703230": {
        "en": "Shaxrixon district",
        "uz": "Shaxrixon tumani",
        "ru": "Шахриханский район"
    },
    "1703232": {
        "en": "Paxtaobod district",
        "uz": "Paxtaobod tumani",
        "ru": "Пахтаабадский район"
    },
    "1703236": {
        "en": "Xo'jaobod district",
        "uz": "Xo'jaobod tumani",
        "ru": "Ходжаабадский район"
    },
    "1703401": {
        "en": "Andijon",
        "uz": "Andijon",
        "ru": "Андижан"
    },
    "1703408": {
        "en": "Xonobod",
        "uz": "Xonobod",
        "ru": "Ханабад"
    },
    "1706204": {
        "en": "Olot district",
        "uz": "Olot tumani",
        "ru": "Алатский район"
    },
    "1706207": {
        "en": "Buxoro district",
        "uz": "Buxoro tumani",
        "ru": "Бухарский район"
    },
    "1706212": {
        "en": "Vobkent district",
        "uz": "Vobkent tumani",
        "ru": "Вабкентский район"
    },
    "1706215": {
        "en": "G'ijduvon district",
        "uz": "G'ijduvon tumani",
        "ru": "Гиждуванский район"
    },
    "1706219": {
        "en": "Kogon district",
        "uz": "Kogon tumani",
        "ru": "Каганский район"
    },
    "1706230": {
        "en": "Qorako'l district",
        "uz": "Qorako'l tumani",
        "ru": "Каракульский район"
    },
    "1706232": {
        "en": "Qorovulbozor district",
        "uz": "Qorovulbozor tumani",
        "ru": "Караулбазарский район"
    },
    "1706240": {
        "en": "Peshku district",
        "uz": "Peshku tumani",
        "ru": "Пешкунский район"
    },
    "1706242": {
        "en": "Romitan district",
        "uz": "Romitan tumani",
        "ru": "Ромитанский район"
    },
    "1706246": {
        "en": "Jondor district",
        "uz": "Jondor tumani",
        "ru": "Жондоpский район"
    },
    "1706258": {
        "en": "Shofirkon district",
        "uz": "Shofirkon tumani",
        "ru": "Шафирканский район"
    },
    "1706401": {
        "en": "Buxoro",
        "uz": "Buxoro",
        "ru": "Бухара"
    },
    "1706403": {
        "en": "Kogon",
        "uz": "Kogon",
        "ru": "Каган"
    },
    "1708201": {
        "en": "Arnasoy district",
        "uz": "Arnasoy tumani",
        "ru": "Арнасайский район"
    },
    "1708204": {
        "en": "Baxmal district",
        "uz": "Baxmal tumani",
        "ru": "Бахмальский район"
    },
    "1708209": {
        "en": "G'allaorol district",
        "uz": "G'allaorol tumani",
        "ru": "Галляаральский район"
    },
    "1708212": {
        "en": "Sharof Rashidov district",
        "uz": "Sharof Rashidov tumani",
        "ru": "Шароф Рашидовский район"
    },
    "1708215": {
        "en": "Do'stlik district",
        "uz": "Do'stlik tumani",
        "ru": "Дустликский район"
    },
    "1708218": {
        "en": "Zomin district",
        "uz": "Zomin tumani",
        "ru": "Зааминский район"
    },
    "1708220": {
        "en": "Zarbdor district",
        "uz": "Zarbdor tumani",
        "ru": "Зарбдарский район"
    },
    "1708223": {
        "en": "Mirzacho'l district",
        "uz": "Mirzacho'l tumani",
        "ru": "Мирзачульский район"
    },
    "1708225": {
        "en": "Zafarobod district",
        "uz": "Zafarobod tumani",
        "ru": "Зафарабадский район"
    },
    "1708228": {
        "en": "Paxtakor district",
        "uz": "Paxtakor tumani",
        "ru": "Пахтакорский район"
    },
    "1708235": {
        "en": "Forish district",
        "uz": "Forish tumani",
        "ru": "Фаришский район"
    },
    "1708237": {
        "en": "Yangiobod district",
        "uz": "Yangiobod tumani",
        "ru": "Янгиободский район"
    },
    "1708401": {
        "en": "Jizzax",
        "uz": "Jizzax",
        "ru": "Джизак"
    },
    "1710207": {
        "en": "G'uzor district",
        "uz": "G'uzor tumani",
        "ru": "Гузарский район"
    },
    "1710212": {
        "en": "Dehqonobod district",
        "uz": "Dehqonobod tumani",
        "ru": "Дехканабадский район"
    },
    "1710220": {
        "en": "Qamashi district",
        "uz": "Qamashi tumani",
        "ru": "Камашинский район"
    },
    "1710224": {
        "en": "Qarshi district",
        "uz": "Qarshi tumani",
        "ru": "Каршинский район"
    },
    "1710229": {
        "en": "Koson district",
        "uz": "Koson tumani",
        "ru": "Касанский район"
    },
    "1710232": {
        "en": "Kitob district",
        "uz": "Kitob tumani",
        "ru": "Китабский район"
    },
    "1710233": {
        "en": "Mirishkor district",
        "uz": "Mirishkor tumani",
        "ru": "Миришкорский район"
    },
    "1710234": {
        "en": "Muborak district",
        "uz": "Muborak tumani",
        "ru": "Мубарекский район"
    },
    "1710235": {
        "en": "Nishon district",
        "uz": "Nishon tumani",
        "ru": "Нишанский район"
    },
    "1710237": {
        "en": "Kasbi district",
        "uz": "Kasbi tumani",
        "ru": "Касбинский район"
    },
    "1710242": {
        "en": "Chiroqchi district",
        "uz": "Chiroqchi tumani",
        "ru": "Чиракчинский район"
    },
    "1710245": {
        "en": "Shahrisabz district",
        "uz": "Shahrisabz tumani",
        "ru": "Шахрисабзский район"
    },
    "1710250": {
        "en": "Yakkabog' district",
        "uz": "Yakkabog' tumani",
        "ru": "Яккабагский район"
    },
    "1710401": {
        "en": "Qarshi",
        "uz": "Qarshi",
        "ru": "Карши"
    },
    "1710405": {
        "en": "Shahrisabz",
        "uz": "Shahrisabz",
        "ru": "Шахрисабз"
    },
    "1712211": {
        "en": "Konimex district",
        "uz": "Konimex tumani",
        "ru": "Канимехский район"
    },
    "1712216": {
        "en": "Qiziltepa district",
        "uz": "Qiziltepa tumani",
        "ru": "Кызылтепинский район"
    },
    "1712230": {
        "en": "Navbahor district",
        "uz": "Navbahor tumani",
        "ru": "Навбахорский район"
    },
    "1712234": {
        "en": "Karmana district",
        "uz": "Karmana tumani",
        "ru": "Карманинский район"
    },
    "1712238": {
        "en": "Nurota district",
        "uz": "Nurota tumani",
        "ru": "Нуратинский район"
    },
    "1712244": {
        "en": "Tomdi district",
        "uz": "Tomdi tumani",
        "ru": "Тамдынский район"
    },
    "1712248": {
        "en": "Uchquduq district",
        "uz": "Uchquduq tumani",
        "ru": "Учкудукский район"
    },
    "1712251": {
        "en": "Xatirchi district",
        "uz": "Xatirchi tumani",
        "ru": "Хатырчинский район"
    },
    "1712401": {
        "en": "Navoiy",
        "uz": "Navoiy",
        "ru": "Навои"
    },
    "1712408": {
        "en": "Zarafshon",
        "uz": "Zarafshon",
        "ru": "Заpафшан"
    },
    "1712412": {
        "en": "G'ozg'on",
        "uz": "G'ozg'on",
        "ru": "Газган"
    },
    "1714204": {
        "en": "Mingbuloq district",
        "uz": "Mingbuloq tumani",
        "ru": "Мингбулакский pайон"
    },
    "1714207": {
        "en": "Kosonsoy district",
        "uz": "Kosonsoy tumani",
        "ru": "Касансайский район"
    },
    "1714212": {
        "en": "Namangan district",
        "uz": "Namangan tumani",
        "ru": "Наманганский район"
    },
    "1714216": {
        "en": "Norin district",
        "uz": "Norin tumani",
        "ru": "Нарынский район"
    },
    "1714219": {
        "en": "Pop district",
        "uz": "Pop tumani",
        "ru": "Папский район"
    },
    "1714224": {
        "en": "To'raqo'rg'on district",
        "uz": "To'raqo'rg'on tumani",
        "ru": "Туракурганский район"
    },
    "1714229": {
        "en": "Uychi district",
        "uz": "Uychi tumani",
        "ru": "Уйчинский район"
    },
    "1714234": {
        "en": "Uchqo'rg'on district",
        "uz": "Uchqo'rg'on tumani",
        "ru": "Учкурганский район"
    },
    "1714236": {
        "en": "Chortoq district",
        "uz": "Chortoq tumani",
        "ru": "Чартакский район"
    },
    "1714237": {
        "en": "Chust district",
        "uz": "Chust tumani",
        "ru": "Чустский район"
    },
    "1714242": {
        "en": "Yangiqo'rg'on district",
        "uz": "Yangiqo'rg'on tumani",
        "ru": "Янгикурганский район"
    },
    "1714401": {
        "en": "Namangan",
        "uz": "Namangan",
        "ru": "Наманган"
    },
    "1718203": {
        "en": "Oqdaryo district",
        "uz": "Oqdaryo tumani",
        "ru": "Акдарьинский район"
    },
    "1718206": {
        "en": "Bulung'ur district",
        "uz": "Bulung'ur tumani",
        "ru": "Булунгурский район"
    },
    "1718209": {
        "en": "Jomboy district",
        "uz": "Jomboy tumani",
        "ru": "Джамбайский район"
    },
    "1718212": {
        "en": "Ishtixon district",
        "uz": "Ishtixon tumani",
        "ru": "Иштыханский район"
    },
    "1718215": {
        "en": "Kattaqo'rg'on district",
        "uz": "Kattaqo'rg'on tumani",
        "ru": "Каттакурганский район"
    },
    "1718216": {
        "en": "Qo'shrabot district",
        "uz": "Qo'shrabot tumani",
        "ru": "Кошрабадский район"
    },
    "1718218": {
        "en": "Narpay district",
        "uz": "Narpay tumani",
        "ru": "Нарпайский район"
    },
    "1718224": {
        "en": "Payariq district",
        "uz": "Payariq tumani",
        "ru": "Пайарыкский район"
    },
    "1718227": {
        "en": "Pastdarg'om district",
        "uz": "Pastdarg'om tumani",
        "ru": "Пастдаргомский район"
    },
    "1718230": {
        "en": "Paxtachi district",
        "uz": "Paxtachi tumani",
        "ru": "Пахтачийский район"
    },
    "1718233": {
        "en": "Samarqand district",
        "uz": "Samarqand tumani",
        "ru": "Самаркандский район"
    },
    "1718235": {
        "en": "Nurobod district",
        "uz": "Nurobod tumani",
        "ru": "Нурабадский район"
    },
    "1718236": {
        "en": "Urgut district",
        "uz": "Urgut tumani",
        "ru": "Ургутский район"
    },
    "1718238": {
        "en": "Tayloq district",
        "uz": "Tayloq tumani",
        "ru": "Тайлякский район"
    },
    "1718401": {
        "en": "Samarqand",
        "uz": "Samarqand",
        "ru": "Самарканд"
    },
    "1718406": {
        "en": "Kattaqo'rg'on",
        "uz": "Kattaqo'rg'on",
        "ru": "Каттакурган"
    },
    "1722201": {
        "en": "Oltinsoy district",
        "uz": "Oltinsoy tumani",
        "ru": "Алтынсайский район"
    },
    "1722202": {
        "en": "Angor district",
        "uz": "Angor tumani",
        "ru": "Ангорский район"
    },
    "1722203": {
        "en": "Bandixon district",
        "uz": "Bandixon tumani",
        "ru": "Бандихонский район"
    },
    "1722204": {
        "en": "Boysun district",
        "uz": "Boysun tumani",
        "ru": "Байсунский район"
    },
    "1722207": {
        "en": "Muzrabot district",
        "uz": "Muzrabot tumani",
        "ru": "Музрабадский район"
    },
    "1722210": {
        "en": "Denov district",
        "uz": "Denov tumani",
        "ru": "Денауский район"
    },
    "1722212": {
        "en": "Jarqo'rg'on district",
        "uz": "Jarqo'rg'on tumani",
        "ru": "Джаркурганский район"
    },
    "1722214": {
        "en": "Qumqo'rg'on district",
        "uz": "Qumqo'rg'on tumani",
        "ru": "Кумкурганский район"
    },
    "1722215": {
        "en": "Qiziriq district",
        "uz": "Qiziriq tumani",
        "ru": "Кизирикский район"
    },
    "1722217": {
        "en": "Sariosiyo district",
        "uz": "Sariosiyo tumani",
        "ru": "Сариасийский район"
    },
    "1722220": {
        "en": "Termiz district",
        "uz": "Termiz tumani",
        "ru": "Термезский район"
    },
    "1722221": {
        "en": "Uzun district",
        "uz": "Uzun tumani",
        "ru": "Узунский район"
    },
    "1722223": {
        "en": "Sherobod district",
        "uz": "Sherobod tumani",
        "ru": "Шерабадский район"
    },
    "1722226": {
        "en": "Sho'rchi district",
        "uz": "Sho'rchi tumani",
        "ru": "Шурчинский район"
    },
    "1722401": {
        "en": "Termiz",
        "uz": "Termiz",
        "ru": "Термез"
    },
    "1724206": {
        "en": "Oqoltin district",
        "uz": "Oqoltin tumani",
        "ru": "Акалтынский район"
    },
    "1724212": {
        "en": "Boyovut district",
        "uz": "Boyovut tumani",
        "ru": "Баяутский район"
    },
    "1724216": {
        "en": "Sayxunobod district",
        "uz": "Sayxunobod tumani",
        "ru": "Сайхунабадский район"
    },
    "1724220": {
        "en": "Guliston district",
        "uz": "Guliston tumani",
        "ru": "Гулистанский район"
    },
    "1724226": {
        "en": "Sardoba district",
        "uz": "Sardoba tumani",
        "ru": "Сардобский район"
    },
    "1724228": {
        "en": "Mirzaobod district",
        "uz": "Mirzaobod tumani",
        "ru": "Мирзаабадский район"
    },
    "1724231": {
        "en": "Sirdaryo district",
        "uz": "Sirdaryo tumani",
        "ru": "Сырдарьинский район"
    },
    "1724235": {
        "en": "Xovos district",
        "uz": "Xovos tumani",
        "ru": "Хавасский район"
    },
    "1724401": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистан"
    },
    "1724410": {
        "en": "Shirin",
        "uz": "Shirin",
        "ru": "Шиpин"
    },
    "1724413": {
        "en": "Yangiyer",
        "uz": "Yangiyer",
        "ru": "Янгиеp"
    },
    "1726262": {
        "en": "Uchtepa district",
        "uz": "Uchtepa tumani",
        "ru": "Учтепинский район"
    },
    "1726264": {
        "en": "Bektemir district",
        "uz": "Bektemir tumani",
        "ru": "Бектемирский район"
    },
    "1726266": {
        "en": "Yunusobod district",
        "uz": "Yunusobod tumani",
        "ru": "Юнусабадский район"
    },
    "1726269": {
        "en": "Mirzo Ulug'bek district",
        "uz": "Mirzo Ulug'bek tumani",
        "ru": "Мирзо-Улугбекский район"
    },
    "1726273": {
        "en": "Mirobod district",
        "uz": "Mirobod tumani",
        "ru": "Мирабадский район"
    },
    "1726277": {
        "en": "Shayxontoxur district",
        "uz": "Shayxontoxur tumani",
        "ru": "Шайхантахурский район"
    },
    "1726280": {
        "en": "Olmazor district",
        "uz": "Olmazor tumani",
        "ru": "Алмазарский район"
    },
    "1726283": {
        "en": "Sirg'ali district",
        "uz": "Sirg'ali tumani",
        "ru": "Сергелийский район"
    },
    "1726287": {
        "en": "Yakkasaroy district",
        "uz": "Yakkasaroy tumani",
        "ru": "Яккасарайский район"
    },
    "1726290": {
        "en": "Yashnobod district",
        "uz": "Yashnobod tumani",
        "ru": "Яшнободский район"
    },
    "1726292": {
        "en": "Yangihayot district",
        "uz": "Yangihayot tumani",
        "ru": "Янгихаётский район"
    },
    "1726294": {
        "en": "Chilonzor district",
        "uz": "Chilonzor tumani",
        "ru": "Чиланзарский район"
    },
    "1727206": {
        "en": "Oqqo'rg'on district",
        "uz": "Oqqo'rg'on tumani",
        "ru": "Аккурганский район"
    },
    "1727212": {
        "en": "Ohangaron district",
        "uz": "Ohangaron tumani",
        "ru": "Ахангаранский район"
    },
    "1727220": {
        "en": "Bekobod district",
        "uz": "Bekobod tumani",
        "ru": "Бекабадский район"
    },
    "1727224": {
        "en": "Bo'stonliq district",
        "uz": "Bo'stonliq tumani",
        "ru": "Бостанлыкский район"
    },
    "1727228": {
        "en": "Bo'ka district",
        "uz": "Bo'ka tumani",
        "ru": "Букинский район"
    },
    "1727233": {
        "en": "Quyichirchiq district",
        "uz": "Quyichirchiq tumani",
        "ru": "Куйичирчикский район"
    },
    "1727237": {
        "en": "Zangiota district",
        "uz": "Zangiota tumani",
        "ru": "Зангиатинский район"
    },
    "1727239": {
        "en": "Yuqorichirchiq district",
        "uz": "Yuqorichirchiq tumani",
        "ru": "Юкоричирчикский район"
    },
    "1727248": {
        "en": "Qibray district",
        "uz": "Qibray tumani",
        "ru": "Кибрайский район"
    },
    "1727249": {
        "en": "Parkent district",
        "uz": "Parkent tumani",
        "ru": "Паркентский район"
    },
    "1727250": {
        "en": "Pskent district",
        "uz": "Pskent tumani",
        "ru": "Пскентский район"
    },
    "1727253": {
        "en": "O'rtachirchiq district",
        "uz": "O'rtachirchiq tumani",
        "ru": "Уртачирчикский район"
    },
    "1727256": {
        "en": "Chinoz district",
        "uz": "Chinoz tumani",
        "ru": "Чиназский район"
    },
    "1727259": {
        "en": "Yangiyo'l district",
        "uz": "Yangiyo'l tumani",
        "ru": "Янгиюльский район"
    },
    "1727265": {
        "en": "Toshkent district",
        "uz": "Toshkent tumani",
        "ru": "Ташкентский район"
    },
    "1727401": {
        "en": "Nurafshon",
        "uz": "Nurafshon",
        "ru": "Нурафшон"
    },
    "1727404": {
        "en": "Olmaliq",
        "uz": "Olmaliq",
        "ru": "Алмалык"
    },
    "1727407": {
        "en": "Angren",
        "uz": "Angren",
        "ru": "Ангрен"
    },
    "1727413": {
        "en": "Bekobod",
        "uz": "Bekobod",
        "ru": "Бекабад"
    },
    "1727415": {
        "en": "Ohangaron",
        "uz": "Ohangaron",
        "ru": "Ахангаран"
    },
    "1727419": {
        "en": "Chirchiq",
        "uz": "Chirchiq",
        "ru": "Чиpчик"
    },
    "1727424": {
        "en": "Yangiyo'l",
        "uz": "Yangiyo'l",
        "ru": "Янгиюль"
    },
    "1730203": {
        "en": "Oltiariq district",
        "uz": "Oltiariq tumani",
        "ru": "Алтыарыкский район"
    },
    "1730206": {
        "en": "Qo'shtepa district",
        "uz": "Qo'shtepa tumani",
        "ru": "Куштепинский район"
    },
    "1730209": {
        "en": "Bog'dod district",
        "uz": "Bog'dod tumani",
        "ru": "Багдадский район"
    },
    "1730212": {
        "en": "Buvayda district",
        "uz": "Buvayda tumani",
        "ru": "Бувайдинский район"
    },
    "1730215": {
        "en": "Beshariq district",
        "uz": "Beshariq tumani",
        "ru": "Бешарыкский район"
    },
    "1730218": {
        "en": "Quva district",
        "uz": "Quva tumani",
        "ru": "Кувинский район"
    },
    "1730221": {
        "en": "Uchko'prik district",
        "uz": "Uchko'prik tumani",
        "ru": "Учкуприкский район"
    },
    "1730224": {
        "en": "Rishton district",
        "uz": "Rishton tumani",
        "ru": "Риштанский район"
    },
    "1730226": {
        "en": "So'x district",
        "uz": "So'x tumani",
        "ru": "Сохский район"
    },
    "1730227": {
        "en": "Toshloq district",
        "uz": "Toshloq tumani",
        "ru": "Ташлакский район"
    },
    "1730230": {
        "en": "O'zbekiston district",
        "uz": "O'zbekiston tumani",
        "ru": "Узбекистанский район"
    },
    "1730233": {
        "en": "Farg'ona district",
        "uz": "Farg'ona tumani",
        "ru": "Ферганский район"
    },
    "1730236": {
        "en": "Dang'ara district",
        "uz": "Dang'ara tumani",
        "ru": "Дангаринский район"
    },
    "1730238": {
        "en": "Furqat district",
        "uz": "Furqat tumani",
        "ru": "Фуркатский район"
    },
    "1730242": {
        "en": "Yozyovon district",
        "uz": "Yozyovon tumani",
        "ru": "Язъяванский район"
    },
    "1730401": {
        "en": "Farg'ona",
        "uz": "Farg'ona",
        "ru": "Фергана"
    },
    "1730405": {
        "en": "Qo'qon",
        "uz": "Qo'qon",
        "ru": "Коканд"
    },
    "1730408": {
        "en": "Quvasoy",
        "uz": "Quvasoy",
        "ru": "Кувасай"
    },
    "1730412": {
        "en": "Marg'ilon",
        "uz": "Marg'ilon",
        "ru": "Маpгилан"
    },
    "1733204": {
        "en": "Bog'ot district",
        "uz": "Bog'ot tumani",
        "ru": "Багатский район"
    },
    "1733208": {
        "en": "Gurlan district",
        "uz": "Gurlan tumani",
        "ru": "Гурленский район"
    },
    "1733212": {
        "en": "Qo'shko'pir district",
        "uz": "Qo'shko'pir tumani",
        "ru": "Кошкупырский район"
    },
    "1733217": {
        "en": "Urganch district",
        "uz": "Urganch tumani",
        "ru": "Ургенчский район"
    },
    "1733220": {
        "en": "Xazorasp district",
        "uz": "Xazorasp tumani",
        "ru": "Хазараспский район"
    },
    "1733221": {
        "en": "Tuproqqal'a district",
        "uz": "Tuproqqal'a tumani",
        "ru": "Тупроккалинский район"
    },
    "1733223": {
        "en": "Xonqa district",
        "uz": "Xonqa tumani",
        "ru": "Ханкинский район"
    },
    "1733226": {
        "en": "Xiva district",
        "uz": "Xiva tumani",
        "ru": "Хивинский район"
    },
    "1733230": {
        "en": "Shovot district",
        "uz": "Shovot tumani",
        "ru": "Шаватский район"
    },
    "1733233": {
        "en": "Yangiariq district",
        "uz": "Yangiariq tumani",
        "ru": "Янгиарыкский район"
    },
    "1733236": {
        "en": "Yangibozor district",
        "uz": "Yangibozor tumani",
        "ru": "Янгибазарский район"
    },
    "1733401": {
        "en": "Urganch",
        "uz": "Urganch",
        "ru": "Ургенч"
    },
    "1733406": {
        "en": "Xiva",
        "uz": "Xiva",
        "ru": "Хива"
    },
    "1735204": {
        "en": "Amudaryo district",
        "uz": "Amudaryo tumani",
        "ru": "Амударьинский район"
    },
    "1735207": {
        "en": "Beruniy district",
        "uz": "Beruniy tumani",
        "ru": "Берунийский район"
    },
    "1735209": {
        "en": "Bo'zatov district",
        "uz": "Bo'zatov tumani",
        "ru": "Бозатауский район"
    },
    "1735211": {
        "en": "Qorao'zak district",
        "uz": "Qorao'zak tumani",
        "ru": "Караузякский район"
    },
    "1735212": {
        "en": "Kegeyli district",
        "uz": "Kegeyli tumani",
        "ru": "Кегейлийский район"
    },
    "1735215": {
        "en": "Qo'ng'irot district",
        "uz": "Qo'ng'irot tumani",
        "ru": "Кунградский район"
    },
    "1735218": {
        "en": "Qanliko'l district",
        "uz": "Qanliko'l tumani",
        "ru": "Канлыкульский район"
    },
    "1735222": {
        "en": "Mo'ynoq district",
        "uz": "Mo'ynoq tumani",
        "ru": "Муйнакский район"
    },
    "1735225": {
        "en": "Nukus district",
        "uz": "Nukus tumani",
        "ru": "Нукусский район"
    },
    "1735228": {
        "en": "Taxiatosh district",
        "uz": "Taxiatosh tumani",
        "ru": "Тахиаташский район"
    },
    "1735230": {
        "en": "Taxtako'pir district",
        "uz": "Taxtako'pir tumani",
        "ru": "Тахтакупырский район"
    },
    "1735233": {
        "en": "To'rtko'l district",
        "uz": "To'rtko'l tumani",
        "ru": "Турткульский район"
    },
    "1735236": {
        "en": "Xo'jayli district",
        "uz": "Xo'jayli tumani",
        "ru": "Ходжейлийский район"
    },
    "1735240": {
        "en": "Chimboy district",
        "uz": "Chimboy tumani",
        "ru": "Чимбайский район"
    },
    "1735243": {
        "en": "Shumanay district",
        "uz": "Shumanay tumani",
        "ru": "Шуманайский район"
    },
    "1735250": {
        "en": "Ellikkala district",
        "uz": "Ellikkala tumani",
        "ru": "Элликкалинский район"
    },
    "1735401": {
        "en": "Nukus",
        "uz": "Nukus",
        "ru": null
    }
}

export const settlements: Code_Names = {
    "1703202552": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустон",
        "type": "24"
    },
    "1703202554": {
        "en": "Dalvarzin",
        "uz": "Dalvarzin",
        "ru": "Далварзин",
        "type": "24"
    },
    "1703202556": {
        "en": "Jalabek",
        "uz": "Jalabek",
        "ru": "Жалабек",
        "type": "24"
    },
    "1703202558": {
        "en": "Ijtimoiyat",
        "uz": "Ijtimoiyat",
        "ru": "Ижтимоият",
        "type": "24"
    },
    "1703202562": {
        "en": "Kumakay",
        "uz": "Kumakay",
        "ru": "Кумакай",
        "type": "24"
    },
    "1703202564": {
        "en": "Qo'shtepa",
        "uz": "Qo'shtepa",
        "ru": "Куштепа",
        "type": "24"
    },
    "1703202566": {
        "en": "Madaniy mehnat",
        "uz": "Madaniy mehnat",
        "ru": "Маданий мехнат",
        "type": "24"
    },
    "1703202568": {
        "en": "Markaz",
        "uz": "Markaz",
        "ru": "Марказ",
        "type": "24"
    },
    "1703202572": {
        "en": "Maslahat",
        "uz": "Maslahat",
        "ru": "Маслахат",
        "type": "24"
    },
    "1703202574": {
        "en": "Namuna",
        "uz": "Namuna",
        "ru": "Намуна",
        "type": "24"
    },
    "1703202576": {
        "en": "Xondibog'i",
        "uz": "Xondibog'i",
        "ru": "Хондибоги",
        "type": "24"
    },
    "1703202804": {
        "en": "Oltinko'l",
        "uz": "Oltinko'l",
        "ru": "Алтынкуль",
        "type": "31"
    },
    "1703202807": {
        "en": "Oxunboboyev nomli",
        "uz": "Oxunboboyev nomli",
        "ru": "им. Ахунбабаева",
        "type": "31"
    },
    "1703202813": {
        "en": "Jalabek",
        "uz": "Jalabek",
        "ru": "Джалабек",
        "type": "31"
    },
    "1703202820": {
        "en": "Qo'shtepasaroy",
        "uz": "Qo'shtepasaroy",
        "ru": "Коштепасарай",
        "type": "31"
    },
    "1703202825": {
        "en": "Kumakay",
        "uz": "Kumakay",
        "ru": "Кумакай",
        "type": "31"
    },
    "1703202830": {
        "en": "Maslahat",
        "uz": "Maslahat",
        "ru": "Маслахат",
        "type": "31"
    },
    "1703202834": {
        "en": "Oraziy",
        "uz": "Oraziy",
        "ru": "им. Орази",
        "type": "31"
    },
    "1703202840": {
        "en": "Suvyulduz",
        "uz": "Suvyulduz",
        "ru": "Сувюлдуз",
        "type": "31"
    },
    "1703203551": {
        "en": "Kuyganyor",
        "uz": "Kuyganyor",
        "ru": "Куйган - яр",
        "type": "24"
    },
    "1703203553": {
        "en": "Ayrilish",
        "uz": "Ayrilish",
        "ru": "Айрилиш",
        "type": "24"
    },
    "1703203555": {
        "en": "Butaqora",
        "uz": "Butaqora",
        "ru": "Бутакора",
        "type": "24"
    },
    "1703203557": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистон",
        "type": "24"
    },
    "1703203559": {
        "en": "Gumbaz",
        "uz": "Gumbaz",
        "ru": "Гумбаз",
        "type": "24"
    },
    "1703203561": {
        "en": "Zavroq",
        "uz": "Zavroq",
        "ru": "Заврок",
        "type": "24"
    },
    "1703203563": {
        "en": "Qoraqalpoq",
        "uz": "Qoraqalpoq",
        "ru": "Каракалпак",
        "type": "24"
    },
    "1703203567": {
        "en": "Kunji",
        "uz": "Kunji",
        "ru": "Кунжи",
        "type": "24"
    },
    "1703203569": {
        "en": "Qo'shariq",
        "uz": "Qo'shariq",
        "ru": "Кушарик",
        "type": "24"
    },
    "1703203571": {
        "en": "Namuna",
        "uz": "Namuna",
        "ru": "Намуна",
        "type": "24"
    },
    "1703203573": {
        "en": "Og'ullik",
        "uz": "Og'ullik",
        "ru": "Огуллик",
        "type": "24"
    },
    "1703203575": {
        "en": "Oq-yor",
        "uz": "Oq-yor",
        "ru": "Ок-ер",
        "type": "24"
    },
    "1703203577": {
        "en": "Rovvot",
        "uz": "Rovvot",
        "ru": "Роввот",
        "type": "24"
    },
    "1703203579": {
        "en": "Xartum",
        "uz": "Xartum",
        "ru": "Хартум",
        "type": "24"
    },
    "1703203581": {
        "en": "Chilon",
        "uz": "Chilon",
        "ru": "Чилон",
        "type": "24"
    },
    "1703203583": {
        "en": "Chumbog'ich",
        "uz": "Chumbog'ich",
        "ru": "Чумбогич",
        "type": "24"
    },
    "1703203585": {
        "en": "Ekin tikin",
        "uz": "Ekin tikin",
        "ru": "Экин-тикин",
        "type": "24"
    },
    "1703203587": {
        "en": "Yangiobod",
        "uz": "Yangiobod",
        "ru": "Янгиабад",
        "type": "24"
    },
    "1703203589": {
        "en": "Gulobod",
        "uz": "Gulobod",
        "ru": "Гулобод",
        "type": "24"
    },
    "1703203803": {
        "en": "Oq-Yor",
        "uz": "Oq-Yor",
        "ru": "Ак-яр",
        "type": "31"
    },
    "1703203813": {
        "en": "Bo'taqora",
        "uz": "Bo'taqora",
        "ru": "Бутакара",
        "type": "31"
    },
    "1703203829": {
        "en": "Qo'nji",
        "uz": "Qo'nji",
        "ru": "Кунджи",
        "type": "31"
    },
    "1703203838": {
        "en": "Nayman",
        "uz": "Nayman",
        "ru": "Найман",
        "type": "31"
    },
    "1703203849": {
        "en": "Xakan",
        "uz": "Xakan",
        "ru": "Хакан",
        "type": "31"
    },
    "1703203863": {
        "en": "Xrabek",
        "uz": "Xrabek",
        "ru": "Хирабек",
        "type": "31"
    },
    "1703203866": {
        "en": "Xartum",
        "uz": "Xartum",
        "ru": "Хартум",
        "type": "31"
    },
    "1703203874": {
        "en": "Orol",
        "uz": "Orol",
        "ru": "Аpал",
        "type": "31"
    },
    "1703203885": {
        "en": "Yorboshi",
        "uz": "Yorboshi",
        "ru": "Ярбаши",
        "type": "31"
    },
    "1703206551": {
        "en": "Baliqchi",
        "uz": "Baliqchi",
        "ru": "Баликчи",
        "type": "24"
    },
    "1703206554": {
        "en": "Xo'jaobod",
        "uz": "Xo'jaobod",
        "ru": "Хужаабад",
        "type": "24"
    },
    "1703206558": {
        "en": "Chinobod markaz",
        "uz": "Chinobod markaz",
        "ru": "Чинобод марказ",
        "type": "24"
    },
    "1703206803": {
        "en": "Olimbek",
        "uz": "Olimbek",
        "ru": "Алимбек",
        "type": "31"
    },
    "1703206807": {
        "en": "Oxunboboyev nomli",
        "uz": "Oxunboboyev nomli",
        "ru": "им. Ахунбабаева",
        "type": "31"
    },
    "1703206813": {
        "en": "Baliqchi",
        "uz": "Baliqchi",
        "ru": "Балыкчи",
        "type": "31"
    },
    "1703206824": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистан",
        "type": "31"
    },
    "1703206831": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустан",
        "type": "31"
    },
    "1703206846": {
        "en": "Siza",
        "uz": "Siza",
        "ru": "Сиза",
        "type": "31"
    },
    "1703206857": {
        "en": "O'rmonbek",
        "uz": "O'rmonbek",
        "ru": "Урманбек",
        "type": "31"
    },
    "1703206868": {
        "en": "Xo'jaobod",
        "uz": "Xo'jaobod",
        "ru": "Ходжаабад",
        "type": "31"
    },
    "1703206879": {
        "en": "Eskixaqqulobod",
        "uz": "Eskixaqqulobod",
        "ru": "Эски Хаккулабад",
        "type": "31"
    },
    "1703209551": {
        "en": "Bo'z",
        "uz": "Bo'z",
        "ru": "Боз",
        "type": "24"
    },
    "1703209555": {
        "en": "M.Jalolov nomli",
        "uz": "M.Jalolov nomli",
        "ru": "М.Жалолов",
        "type": "24"
    },
    "1703209559": {
        "en": "Xoldevonbek",
        "uz": "Xoldevonbek",
        "ru": "Холдевонбек",
        "type": "24"
    },
    "1703209811": {
        "en": "Xoldevonbek",
        "uz": "Xoldevonbek",
        "ru": "Халдеванбек",
        "type": "31"
    },
    "1703209846": {
        "en": "M.Jalolov nomli",
        "uz": "M.Jalolov nomli",
        "ru": "им. М. Джалалова",
        "type": "31"
    },
    "1703209857": {
        "en": "Xovos",
        "uz": "Xovos",
        "ru": "Хавас",
        "type": "31"
    },
    "1703210551": {
        "en": "Buloqboshi",
        "uz": "Buloqboshi",
        "ru": "Булокбоши",
        "type": "24"
    },
    "1703210554": {
        "en": "Andijon",
        "uz": "Andijon",
        "ru": "Андижан",
        "type": "24"
    },
    "1703210561": {
        "en": "Uchtepa",
        "uz": "Uchtepa",
        "ru": "Учтепа",
        "type": "24"
    },
    "1703210564": {
        "en": "Shirmonbuloq",
        "uz": "Shirmonbuloq",
        "ru": "Ширмонбулок",
        "type": "24"
    },
    "1703210812": {
        "en": "Buloqboshi",
        "uz": "Buloqboshi",
        "ru": "Булакбаши",
        "type": "31"
    },
    "1703210832": {
        "en": "Kulla",
        "uz": "Kulla",
        "ru": "Кулла",
        "type": "31"
    },
    "1703210838": {
        "en": "Mayariq",
        "uz": "Mayariq",
        "ru": "Майарык",
        "type": "31"
    },
    "1703210850": {
        "en": "Nayman",
        "uz": "Nayman",
        "ru": "Найман",
        "type": "31"
    },
    "1703210894": {
        "en": "Shirmonbuloq",
        "uz": "Shirmonbuloq",
        "ru": "Ширманбулак",
        "type": "31"
    },
    "1703211501": {
        "en": "Jalaquduq",
        "uz": "Jalaquduq",
        "ru": "Жалакудук",
        "type": "23"
    },
    "1703211554": {
        "en": "Janubiy olamushuk",
        "uz": "Janubiy olamushuk",
        "ru": "Южный Аламышик",
        "type": "24"
    },
    "1703211556": {
        "en": "Beshtol",
        "uz": "Beshtol",
        "ru": "Бештол",
        "type": "24"
    },
    "1703211558": {
        "en": "Yorqishloq",
        "uz": "Yorqishloq",
        "ru": "Еркишлок",
        "type": "24"
    },
    "1703211562": {
        "en": "Jalaquduq",
        "uz": "Jalaquduq",
        "ru": "Жалакудук",
        "type": "24"
    },
    "1703211564": {
        "en": "Ko'kalam",
        "uz": "Ko'kalam",
        "ru": "Кукалам",
        "type": "24"
    },
    "1703211566": {
        "en": "Qo'shtepa",
        "uz": "Qo'shtepa",
        "ru": "Куштепа",
        "type": "24"
    },
    "1703211568": {
        "en": "Oyim",
        "uz": "Oyim",
        "ru": "Ойим",
        "type": "24"
    },
    "1703211804": {
        "en": "Abdullabiy",
        "uz": "Abdullabiy",
        "ru": "Абдуллабий",
        "type": "31"
    },
    "1703211807": {
        "en": "Oyim",
        "uz": "Oyim",
        "ru": "Аим",
        "type": "31"
    },
    "1703211814": {
        "en": "Beshtal",
        "uz": "Beshtal",
        "ru": "Бештал",
        "type": "31"
    },
    "1703211818": {
        "en": "Jalolquduq",
        "uz": "Jalolquduq",
        "ru": "Джалалкудук",
        "type": "31"
    },
    "1703211824": {
        "en": "Qatortol",
        "uz": "Qatortol",
        "ru": "Катартал",
        "type": "31"
    },
    "1703211830": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистан",
        "type": "31"
    },
    "1703211834": {
        "en": "Teshiktosh",
        "uz": "Teshiktosh",
        "ru": "Тешикташ",
        "type": "31"
    },
    "1703211841": {
        "en": "Yorqishloq",
        "uz": "Yorqishloq",
        "ru": "Яркишлак",
        "type": "31"
    },
    "1703214501": {
        "en": "Paytug",
        "uz": "Paytug",
        "ru": "Пайтуг",
        "type": "23"
    },
    "1703214553": {
        "en": "Gurkirov",
        "uz": "Gurkirov",
        "ru": "Гуркиров",
        "type": "24"
    },
    "1703214556": {
        "en": "Maygir",
        "uz": "Maygir",
        "ru": "Майгир",
        "type": "24"
    },
    "1703214559": {
        "en": "To'rtko'l",
        "uz": "To'rtko'l",
        "ru": "Турткул",
        "type": "24"
    },
    "1703214563": {
        "en": "Uzun ko'cha",
        "uz": "Uzun ko'cha",
        "ru": "Узун куча",
        "type": "24"
    },
    "1703214811": {
        "en": "Izboskan",
        "uz": "Izboskan",
        "ru": "Избаскан",
        "type": "31"
    },
    "1703214822": {
        "en": "Maygir",
        "uz": "Maygir",
        "ru": "Майгир",
        "type": "31"
    },
    "1703214833": {
        "en": "Namuna",
        "uz": "Namuna",
        "ru": "Намуна",
        "type": "31"
    },
    "1703214844": {
        "en": "O'rtoqlar",
        "uz": "O'rtoqlar",
        "ru": "Уртаклар",
        "type": "31"
    },
    "1703214855": {
        "en": "Shermatobod",
        "uz": "Shermatobod",
        "ru": "Шерматабад",
        "type": "31"
    },
    "1703214860": {
        "en": "Erkin",
        "uz": "Erkin",
        "ru": "Эркин",
        "type": "31"
    },
    "1703214866": {
        "en": "Yangizamon",
        "uz": "Yangizamon",
        "ru": "Янгизамон",
        "type": "31"
    },
    "1703214877": {
        "en": "Yangi qishloq",
        "uz": "Yangi qishloq",
        "ru": "Янгикишлак",
        "type": "31"
    },
    "1703214885": {
        "en": "Yakkatut",
        "uz": "Yakkatut",
        "ru": "Яккатут",
        "type": "31"
    },
    "1703217551": {
        "en": "Oq oltin",
        "uz": "Oq oltin",
        "ru": "Ок-олтин",
        "type": "24"
    },
    "1703217810": {
        "en": "Oq oltin",
        "uz": "Oq oltin",
        "ru": "Акалтын",
        "type": "31"
    },
    "1703217815": {
        "en": "Mingchinor",
        "uz": "Mingchinor",
        "ru": "Мингчинаp",
        "type": "31"
    },
    "1703217820": {
        "en": "Mingbuloq",
        "uz": "Mingbuloq",
        "ru": "Мингбулак",
        "type": "31"
    },
    "1703217830": {
        "en": "Navoiy nomli",
        "uz": "Navoiy nomli",
        "ru": "им. Навои",
        "type": "31"
    },
    "1703220501": {
        "en": "Qo'rg'ontepa",
        "uz": "Qo'rg'ontepa",
        "ru": "Кургантепа",
        "type": "23"
    },
    "1703220505": {
        "en": "Qorasuv",
        "uz": "Qorasuv",
        "ru": "Карасу",
        "type": "23"
    },
    "1703220553": {
        "en": "Sultonobod",
        "uz": "Sultonobod",
        "ru": "Султонабад",
        "type": "24"
    },
    "1703220813": {
        "en": "Dardok",
        "uz": "Dardok",
        "ru": "Дардак",
        "type": "31"
    },
    "1703220836": {
        "en": "Qo'rg'ontepa",
        "uz": "Qo'rg'ontepa",
        "ru": "Кургантепа",
        "type": "31"
    },
    "1703220847": {
        "en": "Savay",
        "uz": "Savay",
        "ru": "Савай",
        "type": "31"
    },
    "1703220858": {
        "en": "Sultonobod",
        "uz": "Sultonobod",
        "ru": "Султанабад",
        "type": "31"
    },
    "1703220872": {
        "en": "Chimyon",
        "uz": "Chimyon",
        "ru": "Чимион",
        "type": "31"
    },
    "1703224501": {
        "en": "Asaka",
        "uz": "Asaka",
        "ru": "Асака",
        "type": "23"
    },
    "1703224552": {
        "en": "Kujgan",
        "uz": "Kujgan",
        "ru": "Кужган",
        "type": "24"
    },
    "1703224554": {
        "en": "Navkan",
        "uz": "Navkan",
        "ru": "Навкан",
        "type": "24"
    },
    "1703224556": {
        "en": "Oqbo'yra",
        "uz": "Oqbo'yra",
        "ru": "Окбуйра",
        "type": "24"
    },
    "1703224558": {
        "en": "T.Aliyev",
        "uz": "T.Aliyev",
        "ru": "Т.Алиев",
        "type": "24"
    },
    "1703224811": {
        "en": "Zarbdor",
        "uz": "Zarbdor",
        "ru": "Зарбдар",
        "type": "31"
    },
    "1703224822": {
        "en": "Ilg'or",
        "uz": "Ilg'or",
        "ru": "Илгар",
        "type": "31"
    },
    "1703224833": {
        "en": "Qoratepa",
        "uz": "Qoratepa",
        "ru": "Каpатепа",
        "type": "31"
    },
    "1703224844": {
        "en": "Kujgan",
        "uz": "Kujgan",
        "ru": "Кужган",
        "type": "31"
    },
    "1703224855": {
        "en": "Qadim",
        "uz": "Qadim",
        "ru": "Кадим",
        "type": "31"
    },
    "1703224866": {
        "en": "Mustahkam",
        "uz": "Mustahkam",
        "ru": "Мустахкам",
        "type": "31"
    },
    "1703224877": {
        "en": "O'zbekiston",
        "uz": "O'zbekiston",
        "ru": "Узбекистан",
        "type": "31"
    },
    "1703224885": {
        "en": "Niyozbotir",
        "uz": "Niyozbotir",
        "ru": "Ниязбатыр",
        "type": "31"
    },
    "1703227501": {
        "en": "Marxamat",
        "uz": "Marxamat",
        "ru": "Мархамат",
        "type": "23"
    },
    "1703227554": {
        "en": "Polvontosh",
        "uz": "Polvontosh",
        "ru": "Палванташ",
        "type": "24"
    },
    "1703227557": {
        "en": "Boboxuroson",
        "uz": "Boboxuroson",
        "ru": "Бобохуросон",
        "type": "24"
    },
    "1703227561": {
        "en": "Qorabog'ish",
        "uz": "Qorabog'ish",
        "ru": "Корабогиш",
        "type": "24"
    },
    "1703227564": {
        "en": "Qoraqo'rg'on",
        "uz": "Qoraqo'rg'on",
        "ru": "Коракургон",
        "type": "24"
    },
    "1703227567": {
        "en": "Ko'tarma",
        "uz": "Ko'tarma",
        "ru": "Кутарма",
        "type": "24"
    },
    "1703227571": {
        "en": "Marxamat",
        "uz": "Marxamat",
        "ru": "Мархамат",
        "type": "24"
    },
    "1703227574": {
        "en": "Rovot",
        "uz": "Rovot",
        "ru": "Ровот",
        "type": "24"
    },
    "1703227577": {
        "en": "O'qchi",
        "uz": "O'qchi",
        "ru": "Укчи",
        "type": "24"
    },
    "1703227581": {
        "en": "Xakka",
        "uz": "Xakka",
        "ru": "Хакка",
        "type": "24"
    },
    "1703227584": {
        "en": "Xo'jaariq",
        "uz": "Xo'jaariq",
        "ru": "Хужаарик",
        "type": "24"
    },
    "1703227811": {
        "en": "Qoraqo'rg'on",
        "uz": "Qoraqo'rg'on",
        "ru": "Каракурган",
        "type": "31"
    },
    "1703227816": {
        "en": "Qorabog'ish",
        "uz": "Qorabog'ish",
        "ru": "Карабагиш",
        "type": "31"
    },
    "1703227822": {
        "en": "Ko'tarma",
        "uz": "Ko'tarma",
        "ru": "Кутарма",
        "type": "31"
    },
    "1703227833": {
        "en": "Marxamat",
        "uz": "Marxamat",
        "ru": "Мархамат",
        "type": "31"
    },
    "1703227855": {
        "en": "Shukurmergan",
        "uz": "Shukurmergan",
        "ru": "Шукурмерган",
        "type": "31"
    },
    "1703230501": {
        "en": "Shaxrixon",
        "uz": "Shaxrixon",
        "ru": "Шахрихан",
        "type": "23"
    },
    "1703230552": {
        "en": "Vaxim",
        "uz": "Vaxim",
        "ru": "Вахим",
        "type": "24"
    },
    "1703230554": {
        "en": "Cho'ja",
        "uz": "Cho'ja",
        "ru": "Чужа",
        "type": "24"
    },
    "1703230556": {
        "en": "Segaza kum",
        "uz": "Segaza kum",
        "ru": "Сегаза кум",
        "type": "24"
    },
    "1703230811": {
        "en": "Cho'ja",
        "uz": "Cho'ja",
        "ru": "Чужа",
        "type": "31"
    },
    "1703230822": {
        "en": "Naynavo",
        "uz": "Naynavo",
        "ru": "Найнава",
        "type": "31"
    },
    "1703230826": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистан",
        "type": "31"
    },
    "1703230835": {
        "en": "Paxtaobod",
        "uz": "Paxtaobod",
        "ru": "Пахтаабад",
        "type": "31"
    },
    "1703230846": {
        "en": "Toshtepa",
        "uz": "Toshtepa",
        "ru": "Таштепа",
        "type": "31"
    },
    "1703230857": {
        "en": "O'zbekiston",
        "uz": "O'zbekiston",
        "ru": "Узбекистан",
        "type": "31"
    },
    "1703230862": {
        "en": "O'rta Shaxrixon",
        "uz": "O'rta Shaxrixon",
        "ru": "Урта Шахрихан",
        "type": "31"
    },
    "1703230869": {
        "en": "Xaqiqat",
        "uz": "Xaqiqat",
        "ru": "Хакикат",
        "type": "31"
    },
    "1703230872": {
        "en": "Abdubiy",
        "uz": "Abdubiy",
        "ru": "Абдубий",
        "type": "31"
    },
    "1703230882": {
        "en": "Yangi yo'l",
        "uz": "Yangi yo'l",
        "ru": "Янгиюль",
        "type": "31"
    },
    "1703230890": {
        "en": "Nazarmaxram",
        "uz": "Nazarmaxram",
        "ru": "Назармахрам",
        "type": "31"
    },
    "1703230898": {
        "en": "Yuqori Shaxrixon",
        "uz": "Yuqori Shaxrixon",
        "ru": "Юкори  Шахрихан",
        "type": "31"
    },
    "1703232501": {
        "en": "Paxtaobod",
        "uz": "Paxtaobod",
        "ru": "Пахтаабад",
        "type": "23"
    },
    "1703232556": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "24"
    },
    "1703232559": {
        "en": "Izboskan",
        "uz": "Izboskan",
        "ru": "Избоскан",
        "type": "24"
    },
    "1703232563": {
        "en": "Pushmon",
        "uz": "Pushmon",
        "ru": "Пушмон",
        "type": "24"
    },
    "1703232803": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустан",
        "type": "31"
    },
    "1703232810": {
        "en": "Ittifoq",
        "uz": "Ittifoq",
        "ru": "Иттифак",
        "type": "31"
    },
    "1703232820": {
        "en": "Madaniyat",
        "uz": "Madaniyat",
        "ru": "Маданият",
        "type": "31"
    },
    "1703232834": {
        "en": "Paxtakor",
        "uz": "Paxtakor",
        "ru": "Пахтакор",
        "type": "31"
    },
    "1703232845": {
        "en": "Uyg'ur",
        "uz": "Uyg'ur",
        "ru": "Уйгур",
        "type": "31"
    },
    "1703236501": {
        "en": "Xo'jaobod",
        "uz": "Xo'jaobod",
        "ru": "Ходжаабад",
        "type": "23"
    },
    "1703236552": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистон",
        "type": "24"
    },
    "1703236554": {
        "en": "Dilkushod",
        "uz": "Dilkushod",
        "ru": "Дилкушод",
        "type": "24"
    },
    "1703236558": {
        "en": "Ko'tarma",
        "uz": "Ko'tarma",
        "ru": "Кутарма",
        "type": "24"
    },
    "1703236562": {
        "en": "Manak",
        "uz": "Manak",
        "ru": "Манак",
        "type": "24"
    },
    "1703236564": {
        "en": "Xidirsha",
        "uz": "Xidirsha",
        "ru": "Хидирша",
        "type": "24"
    },
    "1703236826": {
        "en": "Manak",
        "uz": "Manak",
        "ru": "Манак",
        "type": "31"
    },
    "1703236861": {
        "en": "Birlashgan",
        "uz": "Birlashgan",
        "ru": "Биpлашган",
        "type": "31"
    },
    "1703236872": {
        "en": "Oltin vodiy",
        "uz": "Oltin vodiy",
        "ru": "Олтин водий",
        "type": "31"
    },
    "1703236883": {
        "en": "Xo'jaobod",
        "uz": "Xo'jaobod",
        "ru": "Ходжаабад",
        "type": "31"
    },
    "1703408553": {
        "en": "Xonobod",
        "uz": "Xonobod",
        "ru": "Ханабад",
        "type": "24"
    },
    "1703408805": {
        "en": "Xonobod",
        "uz": "Xonobod",
        "ru": "Ханабад",
        "type": "31"
    },
    "1706204501": {
        "en": "Olot",
        "uz": "Olot",
        "ru": "Алат",
        "type": "23"
    },
    "1706204552": {
        "en": "Ganchi Chandir",
        "uz": "Ganchi Chandir",
        "ru": "Ганчи Чандир",
        "type": "24"
    },
    "1706204553": {
        "en": "Kesakli",
        "uz": "Kesakli",
        "ru": "Кесакли",
        "type": "24"
    },
    "1706204554": {
        "en": "Qirtay",
        "uz": "Qirtay",
        "ru": "Киртай",
        "type": "24"
    },
    "1706204555": {
        "en": "Sola qorovul",
        "uz": "Sola qorovul",
        "ru": "Сола коровул",
        "type": "24"
    },
    "1706204557": {
        "en": "Jayxunobod",
        "uz": "Jayxunobod",
        "ru": "Жайхунобод",
        "type": "24"
    },
    "1706204558": {
        "en": "O'zbekiston",
        "uz": "O'zbekiston",
        "ru": "Узбекистан",
        "type": "24"
    },
    "1706204559": {
        "en": "Chovdur",
        "uz": "Chovdur",
        "ru": "Човдур",
        "type": "24"
    },
    "1706204561": {
        "en": "Bo'ribek Chandir",
        "uz": "Bo'ribek Chandir",
        "ru": "Бурибек Чандир",
        "type": "24"
    },
    "1706204804": {
        "en": "Bahoriston",
        "uz": "Bahoriston",
        "ru": "Бахористон",
        "type": "31"
    },
    "1706204808": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистон",
        "type": "31"
    },
    "1706204810": {
        "en": "Denov",
        "uz": "Denov",
        "ru": "Денау",
        "type": "31"
    },
    "1706204820": {
        "en": "Jumabozor",
        "uz": "Jumabozor",
        "ru": "Джумабазар",
        "type": "31"
    },
    "1706204830": {
        "en": "Paxtakor",
        "uz": "Paxtakor",
        "ru": "Пахтакор",
        "type": "31"
    },
    "1706204840": {
        "en": "Talqon-sayyot",
        "uz": "Talqon-sayyot",
        "ru": "Талкансаят",
        "type": "31"
    },
    "1706204850": {
        "en": "Chandir",
        "uz": "Chandir",
        "ru": "Чандиp",
        "type": "31"
    },
    "1706204853": {
        "en": "Chorbog'",
        "uz": "Chorbog'",
        "ru": "Чарбаг",
        "type": "31"
    },
    "1706204856": {
        "en": "Qirlishon",
        "uz": "Qirlishon",
        "ru": "Киpлишон",
        "type": "31"
    },
    "1706204860": {
        "en": "Soyin-qorovul",
        "uz": "Soyin-qorovul",
        "ru": "Соин - Коpавул",
        "type": "31"
    },
    "1706207501": {
        "en": "Gala Osiyo",
        "uz": "Gala Osiyo",
        "ru": "Галлаасия",
        "type": "23"
    },
    "1706207553": {
        "en": "Dexcha",
        "uz": "Dexcha",
        "ru": "Дехча",
        "type": "24"
    },
    "1706207554": {
        "en": "Podshoyi",
        "uz": "Podshoyi",
        "ru": "Подшойи",
        "type": "24"
    },
    "1706207555": {
        "en": "Rabotak",
        "uz": "Rabotak",
        "ru": "Работак",
        "type": "24"
    },
    "1706207557": {
        "en": "O'rta Novmetan",
        "uz": "O'rta Novmetan",
        "ru": "Урта Новметан",
        "type": "24"
    },
    "1706207558": {
        "en": "Xumini bolo",
        "uz": "Xumini bolo",
        "ru": "Хумини боло",
        "type": "24"
    },
    "1706207561": {
        "en": "Arabxona",
        "uz": "Arabxona",
        "ru": "Арабхона",
        "type": "24"
    },
    "1706207810": {
        "en": "Bog'ikalon",
        "uz": "Bog'ikalon",
        "ru": "Багикалан",
        "type": "31"
    },
    "1706207824": {
        "en": "Qavola Maxmud",
        "uz": "Qavola Maxmud",
        "ru": "Каваля Махмуд",
        "type": "31"
    },
    "1706207830": {
        "en": "Kunjiqal'a",
        "uz": "Kunjiqal'a",
        "ru": "Кунжикала",
        "type": "31"
    },
    "1706207835": {
        "en": "Shexoncha",
        "uz": "Shexoncha",
        "ru": "Шахонча",
        "type": "31"
    },
    "1706207846": {
        "en": "Gulshanobod",
        "uz": "Gulshanobod",
        "ru": "Гулшанобод",
        "type": "31"
    },
    "1706207857": {
        "en": "Rabotiqalmoq",
        "uz": "Rabotiqalmoq",
        "ru": "Рабаткалмок",
        "type": "31"
    },
    "1706207860": {
        "en": "Saxovat",
        "uz": "Saxovat",
        "ru": "Саховат",
        "type": "31"
    },
    "1706207880": {
        "en": "Shergiron",
        "uz": "Shergiron",
        "ru": "Шергирон",
        "type": "31"
    },
    "1706207882": {
        "en": "Yangiobod",
        "uz": "Yangiobod",
        "ru": "Янгиобод",
        "type": "31"
    },
    "1706207883": {
        "en": "Yangi Turmush",
        "uz": "Yangi Turmush",
        "ru": "Янги Турмуш",
        "type": "31"
    },
    "1706207886": {
        "en": "Sohibkor",
        "uz": "Sohibkor",
        "ru": "Сохибкоp",
        "type": "31"
    },
    "1706207890": {
        "en": "So'fikorgar",
        "uz": "So'fikorgar",
        "ru": "Суфикоpгаp",
        "type": "31"
    },
    "1706207895": {
        "en": "Istiqbol",
        "uz": "Istiqbol",
        "ru": "Истикбол",
        "type": "31"
    },
    "1706207898": {
        "en": "Ko'chko'mar",
        "uz": "Ko'chko'mar",
        "ru": "Кучкумаp",
        "type": "31"
    },
    "1706212501": {
        "en": "Vobkent",
        "uz": "Vobkent",
        "ru": "Вабкент",
        "type": "23"
    },
    "1706212554": {
        "en": "Navbahor",
        "uz": "Navbahor",
        "ru": "Навбахор",
        "type": "24"
    },
    "1706212556": {
        "en": "Shirin",
        "uz": "Shirin",
        "ru": "Ширин",
        "type": "24"
    },
    "1706212558": {
        "en": "Kosari",
        "uz": "Kosari",
        "ru": "Косари",
        "type": "24"
    },
    "1706212808": {
        "en": "Imomqazixon",
        "uz": "Imomqazixon",
        "ru": "Имамказыхан",
        "type": "31"
    },
    "1706212811": {
        "en": "Pirmast",
        "uz": "Pirmast",
        "ru": "Пиpмаст",
        "type": "31"
    },
    "1706212822": {
        "en": "Qo'ng'irot",
        "uz": "Qo'ng'irot",
        "ru": "Кунград",
        "type": "31"
    },
    "1706212833": {
        "en": "Kumushkent",
        "uz": "Kumushkent",
        "ru": "Кумушкент",
        "type": "31"
    },
    "1706212844": {
        "en": "Roxkent",
        "uz": "Roxkent",
        "ru": "Рахкент",
        "type": "31"
    },
    "1706212854": {
        "en": "Xayrobotcha",
        "uz": "Xayrobotcha",
        "ru": "Хайрабатча",
        "type": "31"
    },
    "1706212855": {
        "en": "Xalach",
        "uz": "Xalach",
        "ru": "Халач",
        "type": "31"
    },
    "1706212857": {
        "en": "Xayrxush",
        "uz": "Xayrxush",
        "ru": "Хайрхуш",
        "type": "31"
    },
    "1706212867": {
        "en": "Qipchoq",
        "uz": "Qipchoq",
        "ru": "Кипчак",
        "type": "31"
    },
    "1706212877": {
        "en": "Exson",
        "uz": "Exson",
        "ru": "Эхсон",
        "type": "31"
    },
    "1706212887": {
        "en": "Yangikent",
        "uz": "Yangikent",
        "ru": "Янгикент",
        "type": "31"
    },
    "1706215501": {
        "en": "G'ijduvon",
        "uz": "G'ijduvon",
        "ru": "Гиждуван",
        "type": "23"
    },
    "1706215556": {
        "en": "Abadi",
        "uz": "Abadi",
        "ru": "Абади",
        "type": "24"
    },
    "1706215559": {
        "en": "Beshtuvo",
        "uz": "Beshtuvo",
        "ru": "Бештуво",
        "type": "24"
    },
    "1706215561": {
        "en": "Gajdumak",
        "uz": "Gajdumak",
        "ru": "Гаждумак",
        "type": "24"
    },
    "1706215562": {
        "en": "Jovgari",
        "uz": "Jovgari",
        "ru": "Джовгари",
        "type": "24"
    },
    "1706215563": {
        "en": "Ko'lijabbor",
        "uz": "Ko'lijabbor",
        "ru": "Кулижаббор",
        "type": "24"
    },
    "1706215564": {
        "en": "Mazragan",
        "uz": "Mazragan",
        "ru": "Мазраган",
        "type": "24"
    },
    "1706215565": {
        "en": "Yuqori Rostgo'y",
        "uz": "Yuqori Rostgo'y",
        "ru": "Юкори Ростгуй",
        "type": "24"
    },
    "1706215566": {
        "en": "O'zanon",
        "uz": "O'zanon",
        "ru": "Узанон",
        "type": "24"
    },
    "1706215568": {
        "en": "Xatcha",
        "uz": "Xatcha",
        "ru": "Хатча",
        "type": "24"
    },
    "1706215569": {
        "en": "Chag'dari",
        "uz": "Chag'dari",
        "ru": "Чагдари",
        "type": "24"
    },
    "1706215574": {
        "en": "Dodarak",
        "uz": "Dodarak",
        "ru": "Додарак",
        "type": "24"
    },
    "1706215576": {
        "en": "Namatgaron",
        "uz": "Namatgaron",
        "ru": "Наматгарон",
        "type": "24"
    },
    "1706215578": {
        "en": "Yuqori Qumoq",
        "uz": "Yuqori Qumoq",
        "ru": "Юкори Кумок",
        "type": "24"
    },
    "1706215803": {
        "en": "Armechan",
        "uz": "Armechan",
        "ru": "Армечан",
        "type": "31"
    },
    "1706215805": {
        "en": "Buktaroy",
        "uz": "Buktaroy",
        "ru": "Буктарай",
        "type": "31"
    },
    "1706215810": {
        "en": "G'ovshun",
        "uz": "G'ovshun",
        "ru": "Гавшун",
        "type": "31"
    },
    "1706215820": {
        "en": "Zarangari",
        "uz": "Zarangari",
        "ru": "Зарангаpи",
        "type": "31"
    },
    "1706215827": {
        "en": "Qaraxoni",
        "uz": "Qaraxoni",
        "ru": "Карахани",
        "type": "31"
    },
    "1706215831": {
        "en": "Ko'kcha",
        "uz": "Ko'kcha",
        "ru": "Кукча",
        "type": "31"
    },
    "1706215836": {
        "en": "Pozagari",
        "uz": "Pozagari",
        "ru": "Позагари",
        "type": "31"
    },
    "1706215840": {
        "en": "Paxtaobod",
        "uz": "Paxtaobod",
        "ru": "Пахтаобод",
        "type": "31"
    },
    "1706215848": {
        "en": "Soktari",
        "uz": "Soktari",
        "ru": "Соктари",
        "type": "31"
    },
    "1706215849": {
        "en": "Sarvari",
        "uz": "Sarvari",
        "ru": "Сарвари",
        "type": "31"
    },
    "1706215850": {
        "en": "Sarmijon",
        "uz": "Sarmijon",
        "ru": "Сармиджан",
        "type": "31"
    },
    "1706215860": {
        "en": "Ulfatbibi",
        "uz": "Ulfatbibi",
        "ru": "Ульфатбиби",
        "type": "31"
    },
    "1706215870": {
        "en": "G.Yunusov nomli",
        "uz": "G.Yunusov nomli",
        "ru": "им.Ф. Юнусова",
        "type": "31"
    },
    "1706215880": {
        "en": "Firishkent",
        "uz": "Firishkent",
        "ru": "Фиришкент",
        "type": "31"
    },
    "1706219557": {
        "en": "Sarayonobod",
        "uz": "Sarayonobod",
        "ru": "Сараенобод",
        "type": "24"
    },
    "1706219559": {
        "en": "Tutikunda",
        "uz": "Tutikunda",
        "ru": "Тутикунда",
        "type": "24"
    },
    "1706219811": {
        "en": "Kogon",
        "uz": "Kogon",
        "ru": "Каган",
        "type": "31"
    },
    "1706219814": {
        "en": "Xo'ja Yakshaba",
        "uz": "Xo'ja Yakshaba",
        "ru": "Хужа Якшаба",
        "type": "31"
    },
    "1706219816": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистон",
        "type": "31"
    },
    "1706219818": {
        "en": "Yangi xayot",
        "uz": "Yangi xayot",
        "ru": "Янги хает",
        "type": "31"
    },
    "1706219822": {
        "en": "Nurafshon",
        "uz": "Nurafshon",
        "ru": "Нурафшон",
        "type": "31"
    },
    "1706219824": {
        "en": "Beklar",
        "uz": "Beklar",
        "ru": "Беклаp",
        "type": "31"
    },
    "1706219833": {
        "en": "Niyozhoji",
        "uz": "Niyozhoji",
        "ru": "Ниёзхожи",
        "type": "31"
    },
    "1706219836": {
        "en": "Sarayon",
        "uz": "Sarayon",
        "ru": "Саpаен",
        "type": "31"
    },
    "1706219844": {
        "en": "B.Naqshband",
        "uz": "B.Naqshband",
        "ru": "Накшбанди",
        "type": "31"
    },
    "1706230501": {
        "en": "Qorako'l",
        "uz": "Qorako'l",
        "ru": "Каракуль",
        "type": "23"
    },
    "1706230552": {
        "en": "Bandboshi",
        "uz": "Bandboshi",
        "ru": "Бандбоши",
        "type": "24"
    },
    "1706230553": {
        "en": "Darg'abog'i",
        "uz": "Darg'abog'i",
        "ru": "Даргабоги",
        "type": "24"
    },
    "1706230554": {
        "en": "Jig'achi",
        "uz": "Jig'achi",
        "ru": "Джигачи",
        "type": "24"
    },
    "1706230555": {
        "en": "Qorahoji",
        "uz": "Qorahoji",
        "ru": "Корахожи",
        "type": "24"
    },
    "1706230556": {
        "en": "Quvvacha",
        "uz": "Quvvacha",
        "ru": "Куввача",
        "type": "24"
    },
    "1706230557": {
        "en": "Mirzaqal'a",
        "uz": "Mirzaqal'a",
        "ru": "Мирзакалъа",
        "type": "24"
    },
    "1706230558": {
        "en": "Sayyod",
        "uz": "Sayyod",
        "ru": "Сайед",
        "type": "24"
    },
    "1706230559": {
        "en": "Solur",
        "uz": "Solur",
        "ru": "Солур",
        "type": "24"
    },
    "1706230561": {
        "en": "Chandirobod",
        "uz": "Chandirobod",
        "ru": "Чандирабад",
        "type": "24"
    },
    "1706230562": {
        "en": "Sho'rabot",
        "uz": "Sho'rabot",
        "ru": "Шуррабад",
        "type": "24"
    },
    "1706230563": {
        "en": "Yakka A'lam",
        "uz": "Yakka A'lam",
        "ru": "Якка Аълам",
        "type": "24"
    },
    "1706230564": {
        "en": "Yangiqal'a",
        "uz": "Yangiqal'a",
        "ru": "Янгикалъа",
        "type": "24"
    },
    "1706230806": {
        "en": "Darg'ali",
        "uz": "Darg'ali",
        "ru": "Даргали",
        "type": "31"
    },
    "1706230809": {
        "en": "Bandboshi",
        "uz": "Bandboshi",
        "ru": "Бандбаши",
        "type": "31"
    },
    "1706230813": {
        "en": "Jig'achi",
        "uz": "Jig'achi",
        "ru": "Джигачи",
        "type": "31"
    },
    "1706230815": {
        "en": "Sho'rrabot",
        "uz": "Sho'rrabot",
        "ru": "Шуppабот",
        "type": "31"
    },
    "1706230825": {
        "en": "Ziyorat",
        "uz": "Ziyorat",
        "ru": "Зиярат",
        "type": "31"
    },
    "1706230827": {
        "en": "Kulonchi",
        "uz": "Kulonchi",
        "ru": "Кулончи",
        "type": "31"
    },
    "1706230832": {
        "en": "Qozon",
        "uz": "Qozon",
        "ru": "Казан",
        "type": "31"
    },
    "1706230834": {
        "en": "Quvvacha",
        "uz": "Quvvacha",
        "ru": "Куввача",
        "type": "31"
    },
    "1706230847": {
        "en": "Qoraun",
        "uz": "Qoraun",
        "ru": "Караун",
        "type": "31"
    },
    "1706230850": {
        "en": "Qorako'l",
        "uz": "Qorako'l",
        "ru": "Каракуль",
        "type": "31"
    },
    "1706230854": {
        "en": "Chandir",
        "uz": "Chandir",
        "ru": "Чандиp",
        "type": "31"
    },
    "1706230859": {
        "en": "Sayyot",
        "uz": "Sayyot",
        "ru": "Саят",
        "type": "31"
    },
    "1706230862": {
        "en": "Mallaishayx",
        "uz": "Mallaishayx",
        "ru": "Маллаишайх",
        "type": "31"
    },
    "1706230875": {
        "en": "Quyi Yangibozor",
        "uz": "Quyi Yangibozor",
        "ru": "Куйи Янгибазар",
        "type": "31"
    },
    "1706230880": {
        "en": "Qorahoji",
        "uz": "Qorahoji",
        "ru": "Каpаходжи",
        "type": "31"
    },
    "1706230885": {
        "en": "Chovli",
        "uz": "Chovli",
        "ru": "Човли",
        "type": "31"
    },
    "1706232501": {
        "en": "Qorovulbozor",
        "uz": "Qorovulbozor",
        "ru": "Караулбазар",
        "type": "23"
    },
    "1706232803": {
        "en": "Navbahor",
        "uz": "Navbahor",
        "ru": "Навбахор",
        "type": "31"
    },
    "1706232807": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустон",
        "type": "31"
    },
    "1706232810": {
        "en": "Buzachi",
        "uz": "Buzachi",
        "ru": "Бузачи",
        "type": "31"
    },
    "1706232815": {
        "en": "Jarqoq",
        "uz": "Jarqoq",
        "ru": "Жаркок",
        "type": "31"
    },
    "1706240551": {
        "en": "Yangibozor",
        "uz": "Yangibozor",
        "ru": "Янгибозор",
        "type": "24"
    },
    "1706240553": {
        "en": "Peshku",
        "uz": "Peshku",
        "ru": "Пешку",
        "type": "24"
    },
    "1706240555": {
        "en": "Shavgon",
        "uz": "Shavgon",
        "ru": "Шавгон",
        "type": "24"
    },
    "1706240557": {
        "en": "Mahallai-Mirishkor",
        "uz": "Mahallai-Mirishkor",
        "ru": "Махаллаи-Миришкор",
        "type": "24"
    },
    "1706240802": {
        "en": "Ibn Sino nomli",
        "uz": "Ibn Sino nomli",
        "ru": "им. Абу-Али-Ибн-Сино",
        "type": "31"
    },
    "1706240805": {
        "en": "Varaxsho",
        "uz": "Varaxsho",
        "ru": "Варахша",
        "type": "31"
    },
    "1706240807": {
        "en": "Jonkeldi",
        "uz": "Jonkeldi",
        "ru": "Джангельды",
        "type": "31"
    },
    "1706240810": {
        "en": "Zandani",
        "uz": "Zandani",
        "ru": "Зандани",
        "type": "31"
    },
    "1706240821": {
        "en": "Qal'ai Mirishkor",
        "uz": "Qal'ai Mirishkor",
        "ru": "Калаймиришкар",
        "type": "31"
    },
    "1706240832": {
        "en": "Peshku",
        "uz": "Peshku",
        "ru": "Пешку",
        "type": "31"
    },
    "1706240854": {
        "en": "Yangibozor",
        "uz": "Yangibozor",
        "ru": "Янгибазар",
        "type": "31"
    },
    "1706240860": {
        "en": "Bog'imuso",
        "uz": "Bog'imuso",
        "ru": "Богимуссо",
        "type": "31"
    },
    "1706240865": {
        "en": "Qoraqalpoq",
        "uz": "Qoraqalpoq",
        "ru": "Каpакалпак",
        "type": "31"
    },
    "1706240870": {
        "en": "Chibog'oni",
        "uz": "Chibog'oni",
        "ru": "Чибогони",
        "type": "31"
    },
    "1706242501": {
        "en": "Romitan",
        "uz": "Romitan",
        "ru": "Ромитан",
        "type": "23"
    },
    "1706242505": {
        "en": "Gazli",
        "uz": "Gazli",
        "ru": "Газли",
        "type": "23"
    },
    "1706242552": {
        "en": "Qoqishtuvon",
        "uz": "Qoqishtuvon",
        "ru": "Кокиштувон",
        "type": "24"
    },
    "1706242554": {
        "en": "Xosa",
        "uz": "Xosa",
        "ru": "Хоса",
        "type": "24"
    },
    "1706242556": {
        "en": "Yuqori G'azberon",
        "uz": "Yuqori G'azberon",
        "ru": "Юкори Газберон",
        "type": "24"
    },
    "1706242825": {
        "en": "Qizil Ravot",
        "uz": "Qizil Ravot",
        "ru": "Кызылрават",
        "type": "31"
    },
    "1706242834": {
        "en": "Romitan",
        "uz": "Romitan",
        "ru": "Ромитан",
        "type": "31"
    },
    "1706242864": {
        "en": "Bog'iturkon",
        "uz": "Bog'iturkon",
        "ru": "Богитуркон",
        "type": "31"
    },
    "1706242867": {
        "en": "Chelong'u",
        "uz": "Chelong'u",
        "ru": "Чилангу",
        "type": "31"
    },
    "1706242872": {
        "en": "Sho'rcha",
        "uz": "Sho'rcha",
        "ru": "Шурча",
        "type": "31"
    },
    "1706242875": {
        "en": "Qo'rg'on",
        "uz": "Qo'rg'on",
        "ru": "Курган",
        "type": "31"
    },
    "1706246551": {
        "en": "Jondor",
        "uz": "Jondor",
        "ru": "Жондор",
        "type": "24"
    },
    "1706246552": {
        "en": "Paxlavon",
        "uz": "Paxlavon",
        "ru": "Пахлавон",
        "type": "24"
    },
    "1706246553": {
        "en": "Dalmun",
        "uz": "Dalmun",
        "ru": "Далмун",
        "type": "24"
    },
    "1706246554": {
        "en": "Ko'liyon",
        "uz": "Ko'liyon",
        "ru": "Кулиен",
        "type": "24"
    },
    "1706246555": {
        "en": "Samonchuq",
        "uz": "Samonchuq",
        "ru": "Самончук",
        "type": "24"
    },
    "1706246556": {
        "en": "Tobagar",
        "uz": "Tobagar",
        "ru": "Тобагар",
        "type": "24"
    },
    "1706246557": {
        "en": "Ushot",
        "uz": "Ushot",
        "ru": "Ушот",
        "type": "24"
    },
    "1706246558": {
        "en": "Xazorman",
        "uz": "Xazorman",
        "ru": "Хазорман",
        "type": "24"
    },
    "1706246559": {
        "en": "Chorzona",
        "uz": "Chorzona",
        "ru": "Чорзона",
        "type": "24"
    },
    "1706246811": {
        "en": "Dalmun",
        "uz": "Dalmun",
        "ru": "Дальмун",
        "type": "31"
    },
    "1706246822": {
        "en": "Qaroli",
        "uz": "Qaroli",
        "ru": "Каpоли",
        "type": "31"
    },
    "1706246825": {
        "en": "Lolo",
        "uz": "Lolo",
        "ru": "Лола",
        "type": "31"
    },
    "1706246831": {
        "en": "Romish",
        "uz": "Romish",
        "ru": "Ромиш",
        "type": "31"
    },
    "1706246833": {
        "en": "Zarafshon",
        "uz": "Zarafshon",
        "ru": "Зарафшон",
        "type": "31"
    },
    "1706246844": {
        "en": "Oxshix",
        "uz": "Oxshix",
        "ru": "Охших",
        "type": "31"
    },
    "1706246855": {
        "en": "Xumdonak",
        "uz": "Xumdonak",
        "ru": "Хумданак",
        "type": "31"
    },
    "1706246866": {
        "en": "Xumini bolo",
        "uz": "Xumini bolo",
        "ru": "Хумин",
        "type": "31"
    },
    "1706246870": {
        "en": "Mustaqillik",
        "uz": "Mustaqillik",
        "ru": "Мустакиллик",
        "type": "31"
    },
    "1706246875": {
        "en": "Po'loti",
        "uz": "Po'loti",
        "ru": "Пулоти",
        "type": "31"
    },
    "1706246880": {
        "en": "Samonchuq",
        "uz": "Samonchuq",
        "ru": "Самончук",
        "type": "31"
    },
    "1706246885": {
        "en": "Aleli",
        "uz": "Aleli",
        "ru": "Алели",
        "type": "31"
    },
    "1706246890": {
        "en": "Mirzayon",
        "uz": "Mirzayon",
        "ru": "Миpзоен",
        "type": "31"
    },
    "1706258501": {
        "en": "Shofirkon",
        "uz": "Shofirkon",
        "ru": "Шафиркан",
        "type": "23"
    },
    "1706258552": {
        "en": "Jo'yrabot",
        "uz": "Jo'yrabot",
        "ru": "Жуйрабад",
        "type": "24"
    },
    "1706258553": {
        "en": "Iskogare",
        "uz": "Iskogare",
        "ru": "Искогаре",
        "type": "24"
    },
    "1706258554": {
        "en": "Quyi Chuqurak",
        "uz": "Quyi Chuqurak",
        "ru": "Куйи Чукурак",
        "type": "24"
    },
    "1706258555": {
        "en": "Mirzoqul",
        "uz": "Mirzoqul",
        "ru": "Мирзокул",
        "type": "24"
    },
    "1706258556": {
        "en": "Talisafed",
        "uz": "Talisafed",
        "ru": "Талисафед",
        "type": "24"
    },
    "1706258557": {
        "en": "Undare",
        "uz": "Undare",
        "ru": "Ундаре",
        "type": "24"
    },
    "1706258558": {
        "en": "Chandir",
        "uz": "Chandir",
        "ru": "Чандир",
        "type": "24"
    },
    "1706258561": {
        "en": "G'ulomte",
        "uz": "G'ulomte",
        "ru": "Гуломте",
        "type": "24"
    },
    "1706258805": {
        "en": "Vargonze",
        "uz": "Vargonze",
        "ru": "Варданзе",
        "type": "31"
    },
    "1706258811": {
        "en": "Denov",
        "uz": "Denov",
        "ru": "Денау",
        "type": "31"
    },
    "1706258822": {
        "en": "Jo'ynav",
        "uz": "Jo'ynav",
        "ru": "Жуйнау",
        "type": "31"
    },
    "1706258828": {
        "en": "Jo'yrabot",
        "uz": "Jo'yrabot",
        "ru": "Жуйработ",
        "type": "31"
    },
    "1706258833": {
        "en": "Do'rmon",
        "uz": "Do'rmon",
        "ru": "Дурмен",
        "type": "31"
    },
    "1706258844": {
        "en": "Savrak",
        "uz": "Savrak",
        "ru": "Саврак",
        "type": "31"
    },
    "1706258855": {
        "en": "Sulton Jo'ra",
        "uz": "Sulton Jo'ra",
        "ru": "им. С. Джури",
        "type": "31"
    },
    "1706258866": {
        "en": "Tezguzar",
        "uz": "Tezguzar",
        "ru": "Тезгузар",
        "type": "31"
    },
    "1706258877": {
        "en": "Mazlaxon chandir",
        "uz": "Mazlaxon chandir",
        "ru": "Мазлахон Чандир",
        "type": "31"
    },
    "1706258880": {
        "en": "Sh.Hamroyev nomli",
        "uz": "Sh.Hamroyev nomli",
        "ru": "им. Ш. Хамраева",
        "type": "31"
    },
    "1706258885": {
        "en": "Iskogare",
        "uz": "Iskogare",
        "ru": "Искогаpе",
        "type": "31"
    },
    "1706258890": {
        "en": "Bog'iafzal",
        "uz": "Bog'iafzal",
        "ru": "Богиафзал",
        "type": "31"
    },
    "1706401803": {
        "en": "Otbozor",
        "uz": "Otbozor",
        "ru": "Атбазар",
        "type": "31"
    },
    "1706401805": {
        "en": "Shirbuddin",
        "uz": "Shirbuddin",
        "ru": "Шербуддин",
        "type": "31"
    },
    "1708201551": {
        "en": "G'oliblar",
        "uz": "G'oliblar",
        "ru": "Голиблар",
        "type": "24"
    },
    "1708201556": {
        "en": "Gulbahor",
        "uz": "Gulbahor",
        "ru": "Гулбахор",
        "type": "24"
    },
    "1708201802": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустон",
        "type": "31"
    },
    "1708201803": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "31"
    },
    "1708201804": {
        "en": "Zarafshon",
        "uz": "Zarafshon",
        "ru": "Зарафшан",
        "type": "31"
    },
    "1708201806": {
        "en": "Oltin vodiy",
        "uz": "Oltin vodiy",
        "ru": "Олтин водий",
        "type": "31"
    },
    "1708201807": {
        "en": "Cho'lquvar",
        "uz": "Cho'lquvar",
        "ru": "Чулкувар",
        "type": "31"
    },
    "1708201813": {
        "en": "Yangibo'ston",
        "uz": "Yangibo'ston",
        "ru": "Янгибустан",
        "type": "31"
    },
    "1708204551": {
        "en": "O'smat",
        "uz": "O'smat",
        "ru": "Усмат",
        "type": "24"
    },
    "1708204552": {
        "en": "Oqtosh",
        "uz": "Oqtosh",
        "ru": "Акташ",
        "type": "24"
    },
    "1708204553": {
        "en": "Mo'g'ol",
        "uz": "Mo'g'ol",
        "ru": "Мугол",
        "type": "24"
    },
    "1708204554": {
        "en": "Novqa",
        "uz": "Novqa",
        "ru": "Новка",
        "type": "24"
    },
    "1708204555": {
        "en": "Alamli",
        "uz": "Alamli",
        "ru": "Аламли",
        "type": "24"
    },
    "1708204556": {
        "en": "Tongotar",
        "uz": "Tongotar",
        "ru": "Тонготар",
        "type": "24"
    },
    "1708204558": {
        "en": "Baxmal",
        "uz": "Baxmal",
        "ru": "Бахмал",
        "type": "24"
    },
    "1708204802": {
        "en": "Oyqor",
        "uz": "Oyqor",
        "ru": "Айкар",
        "type": "31"
    },
    "1708204804": {
        "en": "Oqtosh",
        "uz": "Oqtosh",
        "ru": "Акташ",
        "type": "31"
    },
    "1708204808": {
        "en": "Bog'ishamol",
        "uz": "Bog'ishamol",
        "ru": "Багишамал",
        "type": "31"
    },
    "1708204810": {
        "en": "Barlos",
        "uz": "Barlos",
        "ru": "Барлас",
        "type": "31"
    },
    "1708204812": {
        "en": "Baxmal",
        "uz": "Baxmal",
        "ru": "Бахмал",
        "type": "31"
    },
    "1708204817": {
        "en": "Gulbuloq",
        "uz": "Gulbuloq",
        "ru": "Гульбулак",
        "type": "31"
    },
    "1708204830": {
        "en": "Mo'g'ol",
        "uz": "Mo'g'ol",
        "ru": "Мугал",
        "type": "31"
    },
    "1708204835": {
        "en": "Sangzor",
        "uz": "Sangzor",
        "ru": "Сангзар",
        "type": "31"
    },
    "1708204840": {
        "en": "Tongotar",
        "uz": "Tongotar",
        "ru": "Тонготар",
        "type": "31"
    },
    "1708204845": {
        "en": "Uzunbuloq",
        "uz": "Uzunbuloq",
        "ru": "Узунбулак",
        "type": "31"
    },
    "1708209501": {
        "en": "G'allaorol",
        "uz": "G'allaorol",
        "ru": "Галляарал",
        "type": "23"
    },
    "1708209554": {
        "en": "Qo'ytosh",
        "uz": "Qo'ytosh",
        "ru": "Кайташ",
        "type": "24"
    },
    "1708209557": {
        "en": "Marjonbuloq",
        "uz": "Marjonbuloq",
        "ru": "Марджанбулак",
        "type": "24"
    },
    "1708209559": {
        "en": "Lalmikor",
        "uz": "Lalmikor",
        "ru": "Лалмикор",
        "type": "24"
    },
    "1708209561": {
        "en": "Qangliobod",
        "uz": "Qangliobod",
        "ru": "Канглиобод",
        "type": "24"
    },
    "1708209565": {
        "en": "Abdukarim",
        "uz": "Abdukarim",
        "ru": "Абдукарим",
        "type": "24"
    },
    "1708209567": {
        "en": "Chuvilloq",
        "uz": "Chuvilloq",
        "ru": "Чувиллок",
        "type": "24"
    },
    "1708209823": {
        "en": "G'ubdin",
        "uz": "G'ubdin",
        "ru": "Губдин",
        "type": "31"
    },
    "1708209825": {
        "en": "Xonimqo'rg'on",
        "uz": "Xonimqo'rg'on",
        "ru": "Хонимкуpган",
        "type": "31"
    },
    "1708209834": {
        "en": "Ittifoq",
        "uz": "Ittifoq",
        "ru": "Иттифак",
        "type": "31"
    },
    "1708209836": {
        "en": "Gulchambar",
        "uz": "Gulchambar",
        "ru": "Гулчамбар",
        "type": "31"
    },
    "1708209838": {
        "en": "Qipchoqsuv",
        "uz": "Qipchoqsuv",
        "ru": "Кипчоксув",
        "type": "31"
    },
    "1708209848": {
        "en": "Ko'kbuloq",
        "uz": "Ko'kbuloq",
        "ru": "Кокбулак",
        "type": "31"
    },
    "1708209853": {
        "en": "Korizquduq",
        "uz": "Korizquduq",
        "ru": "Коризкудук",
        "type": "31"
    },
    "1708209857": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистан",
        "type": "31"
    },
    "1708209860": {
        "en": "Buloqboshi",
        "uz": "Buloqboshi",
        "ru": "Булакбаши",
        "type": "31"
    },
    "1708209865": {
        "en": "Madaniyat",
        "uz": "Madaniyat",
        "ru": "Маданият",
        "type": "31"
    },
    "1708209868": {
        "en": "Mirzabuloq",
        "uz": "Mirzabuloq",
        "ru": "Мирзабулак",
        "type": "31"
    },
    "1708209870": {
        "en": "Moltob",
        "uz": "Moltob",
        "ru": "Молтаб",
        "type": "31"
    },
    "1708209875": {
        "en": "Tozaurug'",
        "uz": "Tozaurug'",
        "ru": "Тозауpуг",
        "type": "31"
    },
    "1708209880": {
        "en": "Mulkush",
        "uz": "Mulkush",
        "ru": "Мулкуш",
        "type": "31"
    },
    "1708212551": {
        "en": "Uch-tepa",
        "uz": "Uch-tepa",
        "ru": "Уч-тепа",
        "type": "24"
    },
    "1708212552": {
        "en": "Gandumtosh",
        "uz": "Gandumtosh",
        "ru": "Гандумтош",
        "type": "24"
    },
    "1708212553": {
        "en": "Qorayantoq",
        "uz": "Qorayantoq",
        "ru": "Караянтак",
        "type": "24"
    },
    "1708212554": {
        "en": "Qang'li",
        "uz": "Qang'li",
        "ru": "Кангли",
        "type": "24"
    },
    "1708212555": {
        "en": "Toqchiliq",
        "uz": "Toqchiliq",
        "ru": "Токчилик",
        "type": "24"
    },
    "1708212557": {
        "en": "Mulkanlik",
        "uz": "Mulkanlik",
        "ru": "Мулканлик",
        "type": "24"
    },
    "1708212559": {
        "en": "Jizzaxlik",
        "uz": "Jizzaxlik",
        "ru": "Жиззахлик",
        "type": "24"
    },
    "1708212807": {
        "en": "Oq oltin",
        "uz": "Oq oltin",
        "ru": "Акалтын",
        "type": "31"
    },
    "1708212810": {
        "en": "Ziyokor",
        "uz": "Ziyokor",
        "ru": "Зиекор",
        "type": "31"
    },
    "1708212816": {
        "en": "Qang'li",
        "uz": "Qang'li",
        "ru": "Кангли",
        "type": "31"
    },
    "1708212820": {
        "en": "Rovat",
        "uz": "Rovat",
        "ru": "Рават",
        "type": "31"
    },
    "1708212832": {
        "en": "Qo'shbarmoq",
        "uz": "Qo'shbarmoq",
        "ru": "Кушбаpмок",
        "type": "31"
    },
    "1708212835": {
        "en": "Paxtaobod",
        "uz": "Paxtaobod",
        "ru": "Пахтаабад",
        "type": "31"
    },
    "1708212837": {
        "en": "Qulama",
        "uz": "Qulama",
        "ru": "Кулама",
        "type": "31"
    },
    "1708212854": {
        "en": "Xayrobod",
        "uz": "Xayrobod",
        "ru": "Хайрабад",
        "type": "31"
    },
    "1708212860": {
        "en": "Fayzobod",
        "uz": "Fayzobod",
        "ru": "Файзобод",
        "type": "31"
    },
    "1708212865": {
        "en": "Kuyovboshi",
        "uz": "Kuyovboshi",
        "ru": "Куёвбоши",
        "type": "31"
    },
    "1708212870": {
        "en": "Samarqand quduq",
        "uz": "Samarqand quduq",
        "ru": "Самаpканд - кудук",
        "type": "31"
    },
    "1708212875": {
        "en": "Uchtepa",
        "uz": "Uchtepa",
        "ru": "Учтепа",
        "type": "31"
    },
    "1708215501": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "23"
    },
    "1708215553": {
        "en": "Navro'z",
        "uz": "Navro'z",
        "ru": "Навруз",
        "type": "24"
    },
    "1708215803": {
        "en": "Bog'zor",
        "uz": "Bog'zor",
        "ru": "Багзар",
        "type": "31"
    },
    "1708215805": {
        "en": "Bunyodkor",
        "uz": "Bunyodkor",
        "ru": "Бунедкор",
        "type": "31"
    },
    "1708215812": {
        "en": "Qahramon",
        "uz": "Qahramon",
        "ru": "Кахрамон",
        "type": "31"
    },
    "1708215823": {
        "en": "Manas",
        "uz": "Manas",
        "ru": "Манас",
        "type": "31"
    },
    "1708215830": {
        "en": "Saritepa",
        "uz": "Saritepa",
        "ru": "Саритепа",
        "type": "31"
    },
    "1708215840": {
        "en": "Oltin vodiy",
        "uz": "Oltin vodiy",
        "ru": "Олтин водий",
        "type": "31"
    },
    "1708215845": {
        "en": "Mevazor",
        "uz": "Mevazor",
        "ru": "Мевазоp",
        "type": "31"
    },
    "1708218503": {
        "en": "Dashtobod",
        "uz": "Dashtobod",
        "ru": "Даштобод",
        "type": "23"
    },
    "1708218551": {
        "en": "Zomin",
        "uz": "Zomin",
        "ru": "Заамин",
        "type": "24"
    },
    "1708218553": {
        "en": "Yom",
        "uz": "Yom",
        "ru": "Ем",
        "type": "24"
    },
    "1708218555": {
        "en": "Sirg'ali",
        "uz": "Sirg'ali",
        "ru": "Сиргали",
        "type": "24"
    },
    "1708218557": {
        "en": "Pshag'or",
        "uz": "Pshag'or",
        "ru": "Пшагор",
        "type": "24"
    },
    "1708218811": {
        "en": "G'allakor",
        "uz": "G'allakor",
        "ru": "Галлякор",
        "type": "31"
    },
    "1708218813": {
        "en": "Gulshan",
        "uz": "Gulshan",
        "ru": "Гульшан",
        "type": "31"
    },
    "1708218817": {
        "en": "Duoba",
        "uz": "Duoba",
        "ru": "Дуоба",
        "type": "31"
    },
    "1708218834": {
        "en": "A.Navoiy",
        "uz": "A.Navoiy",
        "ru": "им. Навои",
        "type": "31"
    },
    "1708218838": {
        "en": "Obi hayot",
        "uz": "Obi hayot",
        "ru": "Обихаят",
        "type": "31"
    },
    "1708218857": {
        "en": "Chorvador",
        "uz": "Chorvador",
        "ru": "Чарвадар",
        "type": "31"
    },
    "1708218858": {
        "en": "Istiqlol",
        "uz": "Istiqlol",
        "ru": "Истиклол",
        "type": "31"
    },
    "1708218860": {
        "en": "Beshkubi",
        "uz": "Beshkubi",
        "ru": "Бешкуби",
        "type": "31"
    },
    "1708218870": {
        "en": "Shirin",
        "uz": "Shirin",
        "ru": "Шиpин",
        "type": "31"
    },
    "1708220551": {
        "en": "Zarbdor",
        "uz": "Zarbdor",
        "ru": "Зарбдар",
        "type": "24"
    },
    "1708220553": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустан",
        "type": "24"
    },
    "1708220555": {
        "en": "Fayzobod",
        "uz": "Fayzobod",
        "ru": "Файзобод",
        "type": "24"
    },
    "1708220557": {
        "en": "Sharq yulduzi",
        "uz": "Sharq yulduzi",
        "ru": "Шарк Юлдузи",
        "type": "24"
    },
    "1708220827": {
        "en": "Sharq yulduzi",
        "uz": "Sharq yulduzi",
        "ru": "Шаpк Юлдузи",
        "type": "31"
    },
    "1708220831": {
        "en": "Toshkesgan",
        "uz": "Toshkesgan",
        "ru": "Ташкесган",
        "type": "31"
    },
    "1708220835": {
        "en": "Tinchlik",
        "uz": "Tinchlik",
        "ru": "Тинчлик",
        "type": "31"
    },
    "1708220843": {
        "en": "Oqar",
        "uz": "Oqar",
        "ru": "Окар",
        "type": "31"
    },
    "1708220850": {
        "en": "Lalmikor",
        "uz": "Lalmikor",
        "ru": "Лалмикоp",
        "type": "31"
    },
    "1708220863": {
        "en": "Yangikent",
        "uz": "Yangikent",
        "ru": "Янгикент",
        "type": "31"
    },
    "1708220865": {
        "en": "Andijon",
        "uz": "Andijon",
        "ru": "Андижан",
        "type": "31"
    },
    "1708220870": {
        "en": "Adirobod",
        "uz": "Adirobod",
        "ru": "Адиpабад",
        "type": "31"
    },
    "1708223501": {
        "en": "Gagarin",
        "uz": "Gagarin",
        "ru": "Гагарин",
        "type": "23"
    },
    "1708223553": {
        "en": "Paxtazor",
        "uz": "Paxtazor",
        "ru": "Пахтазор",
        "type": "24"
    },
    "1708223555": {
        "en": "Mirzadala",
        "uz": "Mirzadala",
        "ru": "Мирзадала",
        "type": "24"
    },
    "1708223803": {
        "en": "Bog'bon",
        "uz": "Bog'bon",
        "ru": "Багбан",
        "type": "31"
    },
    "1708223815": {
        "en": "Jibek-jo'li",
        "uz": "Jibek-jo'li",
        "ru": "Жибек- жолы",
        "type": "31"
    },
    "1708223830": {
        "en": "Toshkent",
        "uz": "Toshkent",
        "ru": "Ташкент",
        "type": "31"
    },
    "1708223833": {
        "en": "O'zbekiston",
        "uz": "O'zbekiston",
        "ru": "Узбекистан",
        "type": "31"
    },
    "1708223840": {
        "en": "Yangidala",
        "uz": "Yangidala",
        "ru": "Янгидала",
        "type": "31"
    },
    "1708223850": {
        "en": "Gulzor",
        "uz": "Gulzor",
        "ru": "Гульзар",
        "type": "31"
    },
    "1708225551": {
        "en": "Zafarobod",
        "uz": "Zafarobod",
        "ru": "Зафарабад",
        "type": "24"
    },
    "1708225553": {
        "en": "Yorqin",
        "uz": "Yorqin",
        "ru": "Яркин",
        "type": "24"
    },
    "1708225555": {
        "en": "Pistalikent",
        "uz": "Pistalikent",
        "ru": "Писталикент",
        "type": "24"
    },
    "1708225557": {
        "en": "Nurafshon",
        "uz": "Nurafshon",
        "ru": "Нурафшон",
        "type": "24"
    },
    "1708225802": {
        "en": "Birlik",
        "uz": "Birlik",
        "ru": "Бирлик",
        "type": "31"
    },
    "1708225807": {
        "en": "Yorqin",
        "uz": "Yorqin",
        "ru": "Еркин",
        "type": "31"
    },
    "1708225812": {
        "en": "Lolazor",
        "uz": "Lolazor",
        "ru": "Лолазор",
        "type": "31"
    },
    "1708225828": {
        "en": "Uzun",
        "uz": "Uzun",
        "ru": "Узун",
        "type": "31"
    },
    "1708225832": {
        "en": "Xulkar",
        "uz": "Xulkar",
        "ru": "Хулкар",
        "type": "31"
    },
    "1708225848": {
        "en": "Chimqo'rg'on",
        "uz": "Chimqo'rg'on",
        "ru": "Чимкурган",
        "type": "31"
    },
    "1708228501": {
        "en": "Paxtakor",
        "uz": "Paxtakor",
        "ru": "Пахтакор",
        "type": "23"
    },
    "1708228553": {
        "en": "Gulzor",
        "uz": "Gulzor",
        "ru": "Гулзор",
        "type": "24"
    },
    "1708228805": {
        "en": "Buyuk Ipak yo'li",
        "uz": "Buyuk Ipak yo'li",
        "ru": "Буюк Ипак йули",
        "type": "31"
    },
    "1708228807": {
        "en": "Olmazor",
        "uz": "Olmazor",
        "ru": "Алмазар",
        "type": "31"
    },
    "1708228819": {
        "en": "Mingchinor",
        "uz": "Mingchinor",
        "ru": "Мингчинар",
        "type": "31"
    },
    "1708228822": {
        "en": "Paxtakor",
        "uz": "Paxtakor",
        "ru": "Пахтакор",
        "type": "31"
    },
    "1708228828": {
        "en": "Bog'ishamol",
        "uz": "Bog'ishamol",
        "ru": "Богишамол",
        "type": "31"
    },
    "1708228835": {
        "en": "Chamanzor",
        "uz": "Chamanzor",
        "ru": "Чаманзар",
        "type": "31"
    },
    "1708228840": {
        "en": "Oq buloq",
        "uz": "Oq buloq",
        "ru": "Акбулак",
        "type": "31"
    },
    "1708235551": {
        "en": "Bog'don",
        "uz": "Bog'don",
        "ru": "Богдон",
        "type": "24"
    },
    "1708235560": {
        "en": "Uchquloch",
        "uz": "Uchquloch",
        "ru": "Учкулач",
        "type": "24"
    },
    "1708235805": {
        "en": "Omonkeldi",
        "uz": "Omonkeldi",
        "ru": "Амангельды",
        "type": "31"
    },
    "1708235813": {
        "en": "Darvoza",
        "uz": "Darvoza",
        "ru": "Дарваза",
        "type": "31"
    },
    "1708235824": {
        "en": "Arnasoy",
        "uz": "Arnasoy",
        "ru": "Аpнасай",
        "type": "31"
    },
    "1708235828": {
        "en": "Qoraabdol",
        "uz": "Qoraabdol",
        "ru": "Караабдал",
        "type": "31"
    },
    "1708235835": {
        "en": "Egizbuloq",
        "uz": "Egizbuloq",
        "ru": "Эгизбулак",
        "type": "31"
    },
    "1708235846": {
        "en": "Qizilqum",
        "uz": "Qizilqum",
        "ru": "Кызылкум",
        "type": "31"
    },
    "1708235868": {
        "en": "Forish",
        "uz": "Forish",
        "ru": "Фариш",
        "type": "31"
    },
    "1708235885": {
        "en": "Uxum",
        "uz": "Uxum",
        "ru": "Ухум",
        "type": "31"
    },
    "1708235890": {
        "en": "Garasha",
        "uz": "Garasha",
        "ru": "Гараша",
        "type": "31"
    },
    "1708235895": {
        "en": "Osmonsoy",
        "uz": "Osmonsoy",
        "ru": "Османсай",
        "type": "31"
    },
    "1708237552": {
        "en": "Yangiobod",
        "uz": "Yangiobod",
        "ru": "Янгиабад",
        "type": "24"
    },
    "1708237554": {
        "en": "Savot",
        "uz": "Savot",
        "ru": "Савот",
        "type": "24"
    },
    "1708237804": {
        "en": "Sarmich",
        "uz": "Sarmich",
        "ru": "Сармич",
        "type": "31"
    },
    "1708237813": {
        "en": "Xo'jamushkent",
        "uz": "Xo'jamushkent",
        "ru": "Ходжамушкент",
        "type": "31"
    },
    "1708237822": {
        "en": "Savot",
        "uz": "Savot",
        "ru": "Сават",
        "type": "31"
    },
    "1708237831": {
        "en": "Havotog'",
        "uz": "Havotog'",
        "ru": "Ховотог",
        "type": "31"
    },
    "1708237840": {
        "en": "Xovos",
        "uz": "Xovos",
        "ru": "Хавас",
        "type": "31"
    },
    "1710207501": {
        "en": "G'uzor",
        "uz": "G'uzor",
        "ru": "Гузар",
        "type": "23"
    },
    "1710207552": {
        "en": "Jarariq",
        "uz": "Jarariq",
        "ru": "Жарарик",
        "type": "24"
    },
    "1710207554": {
        "en": "Obihayot",
        "uz": "Obihayot",
        "ru": "Обихает",
        "type": "24"
    },
    "1710207556": {
        "en": "Yangikent",
        "uz": "Yangikent",
        "ru": "Янгикент",
        "type": "24"
    },
    "1710207558": {
        "en": "Sherali",
        "uz": "Sherali",
        "ru": "Шерали",
        "type": "24"
    },
    "1710207562": {
        "en": "Mash'al",
        "uz": "Mash'al",
        "ru": "Машъал",
        "type": "24"
    },
    "1710207810": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустан",
        "type": "31"
    },
    "1710207823": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистан",
        "type": "31"
    },
    "1710207834": {
        "en": "Gulshan",
        "uz": "Gulshan",
        "ru": "Гульшан",
        "type": "31"
    },
    "1710207842": {
        "en": "Zarbdor",
        "uz": "Zarbdor",
        "ru": "Зарбдар",
        "type": "31"
    },
    "1710207844": {
        "en": "Qorako'l",
        "uz": "Qorako'l",
        "ru": "Каракуль",
        "type": "31"
    },
    "1710207846": {
        "en": "Shakarbuloq",
        "uz": "Shakarbuloq",
        "ru": "Шакарбулак",
        "type": "31"
    },
    "1710207857": {
        "en": "Mehnatobod",
        "uz": "Mehnatobod",
        "ru": "Мехнатабад",
        "type": "31"
    },
    "1710207860": {
        "en": "Qo'shtepa",
        "uz": "Qo'shtepa",
        "ru": "Куштепа",
        "type": "31"
    },
    "1710207870": {
        "en": "Pachkamar",
        "uz": "Pachkamar",
        "ru": "Пачкамар",
        "type": "31"
    },
    "1710207875": {
        "en": "Xalqabod",
        "uz": "Xalqabod",
        "ru": "Халкабад",
        "type": "31"
    },
    "1710207880": {
        "en": "Batosh",
        "uz": "Batosh",
        "ru": "Батош",
        "type": "31"
    },
    "1710207885": {
        "en": "Sherali",
        "uz": "Sherali",
        "ru": "Шеpали",
        "type": "31"
    },
    "1710212551": {
        "en": "Karashina",
        "uz": "Karashina",
        "ru": "Корашина",
        "type": "24"
    },
    "1710212553": {
        "en": "Dehqonobod",
        "uz": "Dehqonobod",
        "ru": "Дехканабад",
        "type": "24"
    },
    "1710212558": {
        "en": "Beshbuloq",
        "uz": "Beshbuloq",
        "ru": "Бешбулок",
        "type": "24"
    },
    "1710212804": {
        "en": "Obiravon",
        "uz": "Obiravon",
        "ru": "Обиравон",
        "type": "31"
    },
    "1710212809": {
        "en": "Oqqishloq",
        "uz": "Oqqishloq",
        "ru": "Аккишлак",
        "type": "31"
    },
    "1710212810": {
        "en": "O'zbekiston",
        "uz": "O'zbekiston",
        "ru": "Узбекистан",
        "type": "31"
    },
    "1710212811": {
        "en": "Oqtosh",
        "uz": "Oqtosh",
        "ru": "Акташ",
        "type": "31"
    },
    "1710212814": {
        "en": "Boshchorbog'",
        "uz": "Boshchorbog'",
        "ru": "Бошчорбог",
        "type": "31"
    },
    "1710212816": {
        "en": "Beshqo'ton",
        "uz": "Beshqo'ton",
        "ru": "Бешкутан",
        "type": "31"
    },
    "1710212822": {
        "en": "Bibiqorasoch",
        "uz": "Bibiqorasoch",
        "ru": "Бибикарасоч",
        "type": "31"
    },
    "1710212827": {
        "en": "Duob",
        "uz": "Duob",
        "ru": "Дуаб",
        "type": "31"
    },
    "1710212832": {
        "en": "Qo'rg'ontosh",
        "uz": "Qo'rg'ontosh",
        "ru": "Курганташ",
        "type": "31"
    },
    "1710212833": {
        "en": "Qizilcha",
        "uz": "Qizilcha",
        "ru": "Кизилча",
        "type": "31"
    },
    "1710212836": {
        "en": "Oqirtma",
        "uz": "Oqirtma",
        "ru": "Окиpтма",
        "type": "31"
    },
    "1710212839": {
        "en": "Bozortepa",
        "uz": "Bozortepa",
        "ru": "Базаpтепа",
        "type": "31"
    },
    "1710212845": {
        "en": "Qirqquloch",
        "uz": "Qirqquloch",
        "ru": "Киpккулач",
        "type": "31"
    },
    "1710212850": {
        "en": "Oqrabod",
        "uz": "Oqrabod",
        "ru": "Окpабод",
        "type": "31"
    },
    "1710220501": {
        "en": "Qamashi",
        "uz": "Qamashi",
        "ru": "Камаши",
        "type": "23"
    },
    "1710220552": {
        "en": "Balandchayla",
        "uz": "Balandchayla",
        "ru": "Баландчайла",
        "type": "24"
    },
    "1710220554": {
        "en": "Qoratepa",
        "uz": "Qoratepa",
        "ru": "Коратепа",
        "type": "24"
    },
    "1710220556": {
        "en": "Qiziltepa",
        "uz": "Qiziltepa",
        "ru": "Кызилтепа",
        "type": "24"
    },
    "1710220558": {
        "en": "Sarbozor",
        "uz": "Sarbozor",
        "ru": "Сарбозор",
        "type": "24"
    },
    "1710220562": {
        "en": "Badahshon",
        "uz": "Badahshon",
        "ru": "Бадахшон",
        "type": "24"
    },
    "1710220833": {
        "en": "Qorabog'",
        "uz": "Qorabog'",
        "ru": "Карабаг",
        "type": "31"
    },
    "1710220835": {
        "en": "Qoratepa",
        "uz": "Qoratepa",
        "ru": "Каратепа",
        "type": "31"
    },
    "1710220844": {
        "en": "Ko'kbuloq",
        "uz": "Ko'kbuloq",
        "ru": "Кокбулак",
        "type": "31"
    },
    "1710220845": {
        "en": "Qiziltepa",
        "uz": "Qiziltepa",
        "ru": "Кизилтепа",
        "type": "31"
    },
    "1710220847": {
        "en": "Rabod",
        "uz": "Rabod",
        "ru": "Равот",
        "type": "31"
    },
    "1710220855": {
        "en": "To'qboy",
        "uz": "To'qboy",
        "ru": "Тукбай",
        "type": "31"
    },
    "1710220866": {
        "en": "Chim",
        "uz": "Chim",
        "ru": "Чим",
        "type": "31"
    },
    "1710220870": {
        "en": "Qamay",
        "uz": "Qamay",
        "ru": "Камай",
        "type": "31"
    },
    "1710220875": {
        "en": "Jonbo'zsoy",
        "uz": "Jonbo'zsoy",
        "ru": "Жонбузсой",
        "type": "31"
    },
    "1710220880": {
        "en": "Loyqasoy",
        "uz": "Loyqasoy",
        "ru": "Лойкасой",
        "type": "31"
    },
    "1710220885": {
        "en": "Yortepa",
        "uz": "Yortepa",
        "ru": "Еpтепа",
        "type": "31"
    },
    "1710224501": {
        "en": "Beshkent",
        "uz": "Beshkent",
        "ru": "Бешкент",
        "type": "23"
    },
    "1710224553": {
        "en": "Fayzobod",
        "uz": "Fayzobod",
        "ru": "Файзиабад",
        "type": "24"
    },
    "1710224556": {
        "en": "Saroy",
        "uz": "Saroy",
        "ru": "Сарай",
        "type": "24"
    },
    "1710224559": {
        "en": "G'ubdin",
        "uz": "G'ubdin",
        "ru": "Губдин",
        "type": "24"
    },
    "1710224563": {
        "en": "Lag'mon",
        "uz": "Lag'mon",
        "ru": "Лагмон",
        "type": "24"
    },
    "1710224566": {
        "en": "Kuchkak",
        "uz": "Kuchkak",
        "ru": "Кучкак",
        "type": "24"
    },
    "1710224569": {
        "en": "Xonobod",
        "uz": "Xonobod",
        "ru": "Хонабад",
        "type": "24"
    },
    "1710224573": {
        "en": "Shilvi",
        "uz": "Shilvi",
        "ru": "Шилви",
        "type": "24"
    },
    "1710224576": {
        "en": "Qovchin",
        "uz": "Qovchin",
        "ru": "Ковчин",
        "type": "24"
    },
    "1710224579": {
        "en": "Nuqrabod",
        "uz": "Nuqrabod",
        "ru": "Нукрабад",
        "type": "24"
    },
    "1710224583": {
        "en": "Yertepa",
        "uz": "Yertepa",
        "ru": "Ертепа",
        "type": "24"
    },
    "1710224586": {
        "en": "Navro'z",
        "uz": "Navro'z",
        "ru": "Навруз",
        "type": "24"
    },
    "1710224589": {
        "en": "Jumabozor",
        "uz": "Jumabozor",
        "ru": "Жумабозор",
        "type": "24"
    },
    "1710224593": {
        "en": "Mustaqillik",
        "uz": "Mustaqillik",
        "ru": "Мустакиллик",
        "type": "24"
    },
    "1710224596": {
        "en": "Mirmiron",
        "uz": "Mirmiron",
        "ru": "Мирмирон",
        "type": "24"
    },
    "1710224599": {
        "en": "Yangi xayot",
        "uz": "Yangi xayot",
        "ru": "Янгихает",
        "type": "24"
    },
    "1710224808": {
        "en": "Bog'obod",
        "uz": "Bog'obod",
        "ru": "Багабад",
        "type": "31"
    },
    "1710224812": {
        "en": "Charag'il",
        "uz": "Charag'il",
        "ru": "Чарогил",
        "type": "31"
    },
    "1710224822": {
        "en": "Dasht",
        "uz": "Dasht",
        "ru": "Дашт",
        "type": "31"
    },
    "1710224833": {
        "en": "Yertepa",
        "uz": "Yertepa",
        "ru": "Ертепа",
        "type": "31"
    },
    "1710224840": {
        "en": "Navbahor",
        "uz": "Navbahor",
        "ru": "Навбахор",
        "type": "31"
    },
    "1710224842": {
        "en": "Qoratepa",
        "uz": "Qoratepa",
        "ru": "Каратепа",
        "type": "31"
    },
    "1710224843": {
        "en": "Cho'libo'ston",
        "uz": "Cho'libo'ston",
        "ru": "Чулибустан",
        "type": "31"
    },
    "1710224844": {
        "en": "Kat",
        "uz": "Kat",
        "ru": "Кат",
        "type": "31"
    },
    "1710224847": {
        "en": "Qovchin",
        "uz": "Qovchin",
        "ru": "Ковчин",
        "type": "31"
    },
    "1710224855": {
        "en": "Chaman",
        "uz": "Chaman",
        "ru": "Чаман",
        "type": "31"
    },
    "1710224877": {
        "en": "O'zbekiston mustaqilligi",
        "uz": "O'zbekiston mustaqilligi",
        "ru": "Узбекистон мустакиллиги",
        "type": "31"
    },
    "1710224880": {
        "en": "Paxtakor",
        "uz": "Paxtakor",
        "ru": "Пахтакор",
        "type": "31"
    },
    "1710224884": {
        "en": "Poshton",
        "uz": "Poshton",
        "ru": "Поштон",
        "type": "31"
    },
    "1710224888": {
        "en": "Tallikuron",
        "uz": "Tallikuron",
        "ru": "Талликурган",
        "type": "31"
    },
    "1710224895": {
        "en": "Hilol",
        "uz": "Hilol",
        "ru": "Хилал",
        "type": "31"
    },
    "1710229501": {
        "en": "Koson",
        "uz": "Koson",
        "ru": "Касан",
        "type": "23"
    },
    "1710229552": {
        "en": "Boyg'undi",
        "uz": "Boyg'undi",
        "ru": "Бойгунди",
        "type": "24"
    },
    "1710229554": {
        "en": "Boyterak",
        "uz": "Boyterak",
        "ru": "Бойтерак",
        "type": "24"
    },
    "1710229556": {
        "en": "Guvalak",
        "uz": "Guvalak",
        "ru": "Гувалак",
        "type": "24"
    },
    "1710229558": {
        "en": "Istiqlol",
        "uz": "Istiqlol",
        "ru": "Истиклол",
        "type": "24"
    },
    "1710229560": {
        "en": "Qo'yi Obron",
        "uz": "Qo'yi Obron",
        "ru": "Куйи Оброн",
        "type": "24"
    },
    "1710229562": {
        "en": "Mudin",
        "uz": "Mudin",
        "ru": "Мудин",
        "type": "24"
    },
    "1710229564": {
        "en": "Oqtepa",
        "uz": "Oqtepa",
        "ru": "Октепа",
        "type": "24"
    },
    "1710229566": {
        "en": "Obod",
        "uz": "Obod",
        "ru": "Абад",
        "type": "24"
    },
    "1710229568": {
        "en": "Pudina",
        "uz": "Pudina",
        "ru": "Пудина",
        "type": "24"
    },
    "1710229570": {
        "en": "Po'lati",
        "uz": "Po'lati",
        "ru": "Пулоти",
        "type": "24"
    },
    "1710229572": {
        "en": "Rahimso'fi",
        "uz": "Rahimso'fi",
        "ru": "Рахимсуфи",
        "type": "24"
    },
    "1710229574": {
        "en": "Surhon",
        "uz": "Surhon",
        "ru": "Сурхон",
        "type": "24"
    },
    "1710229576": {
        "en": "To'lg'a",
        "uz": "To'lg'a",
        "ru": "Тулга",
        "type": "24"
    },
    "1710229578": {
        "en": "Esaboy",
        "uz": "Esaboy",
        "ru": "Эсабой",
        "type": "24"
    },
    "1710229807": {
        "en": "Alachabob",
        "uz": "Alachabob",
        "ru": "Алачабаб",
        "type": "31"
    },
    "1710229812": {
        "en": "Rudaksoy",
        "uz": "Rudaksoy",
        "ru": "Рудаксой",
        "type": "31"
    },
    "1710229815": {
        "en": "Gulbog'",
        "uz": "Gulbog'",
        "ru": "Гульбаг",
        "type": "31"
    },
    "1710229823": {
        "en": "Koson",
        "uz": "Koson",
        "ru": "Касан",
        "type": "31"
    },
    "1710229835": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "31"
    },
    "1710229846": {
        "en": "Qo'ng'irtog'",
        "uz": "Qo'ng'irtog'",
        "ru": "Кунгиртог",
        "type": "31"
    },
    "1710229860": {
        "en": "Gulobod",
        "uz": "Gulobod",
        "ru": "Гулобод",
        "type": "31"
    },
    "1710229868": {
        "en": "Istiqlol",
        "uz": "Istiqlol",
        "ru": "Истиклол",
        "type": "31"
    },
    "1710229871": {
        "en": "Tinchlik",
        "uz": "Tinchlik",
        "ru": "Тинчлик",
        "type": "31"
    },
    "1710232501": {
        "en": "Kitob",
        "uz": "Kitob",
        "ru": "Китаб",
        "type": "23"
    },
    "1710232553": {
        "en": "Alaqo'yliq",
        "uz": "Alaqo'yliq",
        "ru": "Алакуйлик",
        "type": "24"
    },
    "1710232556": {
        "en": "Bektemir",
        "uz": "Bektemir",
        "ru": "Бектемир",
        "type": "24"
    },
    "1710232559": {
        "en": "Rus qishloq",
        "uz": "Rus qishloq",
        "ru": "Рус",
        "type": "24"
    },
    "1710232563": {
        "en": "Baxtdarvozasi",
        "uz": "Baxtdarvozasi",
        "ru": "Бахтдарвозаси",
        "type": "24"
    },
    "1710232566": {
        "en": "Beshterak",
        "uz": "Beshterak",
        "ru": "Бештерак",
        "type": "24"
    },
    "1710232569": {
        "en": "Varganza",
        "uz": "Varganza",
        "ru": "Варганза",
        "type": "24"
    },
    "1710232573": {
        "en": "Obikanda",
        "uz": "Obikanda",
        "ru": "Обиканда",
        "type": "24"
    },
    "1710232576": {
        "en": "Panji",
        "uz": "Panji",
        "ru": "Панжи",
        "type": "24"
    },
    "1710232579": {
        "en": "Sariosiyo",
        "uz": "Sariosiyo",
        "ru": "Сариосие",
        "type": "24"
    },
    "1710232583": {
        "en": "Sevaz",
        "uz": "Sevaz",
        "ru": "Севаз",
        "type": "24"
    },
    "1710232586": {
        "en": "Xoji",
        "uz": "Xoji",
        "ru": "Хожи",
        "type": "24"
    },
    "1710232589": {
        "en": "Yakkatut",
        "uz": "Yakkatut",
        "ru": "Яккатут",
        "type": "24"
    },
    "1710232593": {
        "en": "Yangiobod",
        "uz": "Yangiobod",
        "ru": "Янгиабад",
        "type": "24"
    },
    "1710232803": {
        "en": "Bektemir",
        "uz": "Bektemir",
        "ru": "Бектемир",
        "type": "31"
    },
    "1710232808": {
        "en": "Qatorbog'",
        "uz": "Qatorbog'",
        "ru": "Катарбаг",
        "type": "31"
    },
    "1710232809": {
        "en": "Qaynarbuloq",
        "uz": "Qaynarbuloq",
        "ru": "Кайнарбулак",
        "type": "31"
    },
    "1710232811": {
        "en": "Qo'yioqboy",
        "uz": "Qo'yioqboy",
        "ru": "Куйнакбай",
        "type": "31"
    },
    "1710232833": {
        "en": "Makrid",
        "uz": "Makrid",
        "ru": "Макрид",
        "type": "31"
    },
    "1710232855": {
        "en": "Tagob",
        "uz": "Tagob",
        "ru": "Тагоб",
        "type": "31"
    },
    "1710232866": {
        "en": "Paxtaobod",
        "uz": "Paxtaobod",
        "ru": "Пахтаабад",
        "type": "31"
    },
    "1710232877": {
        "en": "Sevaz",
        "uz": "Sevaz",
        "ru": "Сиваз",
        "type": "31"
    },
    "1710232880": {
        "en": "Tupchoq",
        "uz": "Tupchoq",
        "ru": "Тупчак",
        "type": "31"
    },
    "1710232885": {
        "en": "Bog'bon",
        "uz": "Bog'bon",
        "ru": "Багбан",
        "type": "31"
    },
    "1710232890": {
        "en": "Beshterak",
        "uz": "Beshterak",
        "ru": "Бештеpак",
        "type": "31"
    },
    "1710232895": {
        "en": "Jilisuv",
        "uz": "Jilisuv",
        "ru": "Жилисув",
        "type": "31"
    },
    "1710233551": {
        "en": "Yangi Mirishkor",
        "uz": "Yangi Mirishkor",
        "ru": "Янги Миришкор",
        "type": "24"
    },
    "1710233555": {
        "en": "Jeynov",
        "uz": "Jeynov",
        "ru": "Жейнов",
        "type": "24"
    },
    "1710233558": {
        "en": "Pomuq",
        "uz": "Pomuq",
        "ru": "Помук",
        "type": "24"
    },
    "1710233808": {
        "en": "Obod",
        "uz": "Obod",
        "ru": "Абад",
        "type": "31"
    },
    "1710233812": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустон",
        "type": "31"
    },
    "1710233823": {
        "en": "Vori",
        "uz": "Vori",
        "ru": "Вори",
        "type": "31"
    },
    "1710233828": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистан",
        "type": "31"
    },
    "1710233832": {
        "en": "Gulshanbog'",
        "uz": "Gulshanbog'",
        "ru": "Гулшан баг",
        "type": "31"
    },
    "1710233836": {
        "en": "Jeynov",
        "uz": "Jeynov",
        "ru": "Джейнау",
        "type": "31"
    },
    "1710233842": {
        "en": "Mirishkor",
        "uz": "Mirishkor",
        "ru": "Миришкор",
        "type": "31"
    },
    "1710233848": {
        "en": "Navbahor",
        "uz": "Navbahor",
        "ru": "Навбахор",
        "type": "31"
    },
    "1710233855": {
        "en": "Pomuq",
        "uz": "Pomuq",
        "ru": "Помук",
        "type": "31"
    },
    "1710233862": {
        "en": "Chamanzor",
        "uz": "Chamanzor",
        "ru": "Чаманзар",
        "type": "31"
    },
    "1710233865": {
        "en": "Chandir",
        "uz": "Chandir",
        "ru": "Чандиp",
        "type": "31"
    },
    "1710233869": {
        "en": "Yangiobod",
        "uz": "Yangiobod",
        "ru": "Янгиабад",
        "type": "31"
    },
    "1710234501": {
        "en": "Muborak",
        "uz": "Muborak",
        "ru": "Мубаpек",
        "type": "23"
    },
    "1710234552": {
        "en": "Qarliq",
        "uz": "Qarliq",
        "ru": "Карлик",
        "type": "24"
    },
    "1710234554": {
        "en": "Baxt",
        "uz": "Baxt",
        "ru": "Бахт",
        "type": "24"
    },
    "1710234556": {
        "en": "Qoraqum",
        "uz": "Qoraqum",
        "ru": "Каракум",
        "type": "24"
    },
    "1710234558": {
        "en": "Diyonat",
        "uz": "Diyonat",
        "ru": "Диёнат",
        "type": "24"
    },
    "1710234562": {
        "en": "Shayx",
        "uz": "Shayx",
        "ru": "Шайх",
        "type": "24"
    },
    "1710234835": {
        "en": "Qoraqum",
        "uz": "Qoraqum",
        "ru": "Каракум",
        "type": "31"
    },
    "1710234845": {
        "en": "Muborak",
        "uz": "Muborak",
        "ru": "Муборак",
        "type": "31"
    },
    "1710234878": {
        "en": "Qarliq",
        "uz": "Qarliq",
        "ru": "Карлик",
        "type": "31"
    },
    "1710234882": {
        "en": "Sariq",
        "uz": "Sariq",
        "ru": "Саpик",
        "type": "31"
    },
    "1710235501": {
        "en": "Yangi Nishon",
        "uz": "Yangi Nishon",
        "ru": "Янги-Нишан",
        "type": "23"
    },
    "1710235505": {
        "en": "Talimarjon",
        "uz": "Talimarjon",
        "ru": "Талимарджан",
        "type": "23"
    },
    "1710235553": {
        "en": "Nuriston",
        "uz": "Nuriston",
        "ru": "Нуристон",
        "type": "24"
    },
    "1710235555": {
        "en": "Nishon",
        "uz": "Nishon",
        "ru": "Нишон",
        "type": "24"
    },
    "1710235557": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистан",
        "type": "24"
    },
    "1710235559": {
        "en": "Oq oltin",
        "uz": "Oq oltin",
        "ru": "Ак алтин",
        "type": "24"
    },
    "1710235561": {
        "en": "Sardoba",
        "uz": "Sardoba",
        "ru": "Сардоба",
        "type": "24"
    },
    "1710235565": {
        "en": "Paxtachi",
        "uz": "Paxtachi",
        "ru": "Пахтачи",
        "type": "24"
    },
    "1710235567": {
        "en": "Oydin",
        "uz": "Oydin",
        "ru": "Ойдин",
        "type": "24"
    },
    "1710235569": {
        "en": "Samarqand",
        "uz": "Samarqand",
        "ru": "Самарканд",
        "type": "24"
    },
    "1710235571": {
        "en": "Paxtaobod",
        "uz": "Paxtaobod",
        "ru": "Пахтаабад",
        "type": "24"
    },
    "1710235804": {
        "en": "Oydinlik",
        "uz": "Oydinlik",
        "ru": "Ойдинлик",
        "type": "31"
    },
    "1710235807": {
        "en": "Oq oltin",
        "uz": "Oq oltin",
        "ru": "Акалтын",
        "type": "31"
    },
    "1710235826": {
        "en": "Qirqquloch",
        "uz": "Qirqquloch",
        "ru": "Кирккулоч",
        "type": "31"
    },
    "1710235848": {
        "en": "Navro'z",
        "uz": "Navro'z",
        "ru": "Навруз",
        "type": "31"
    },
    "1710235850": {
        "en": "Nishon",
        "uz": "Nishon",
        "ru": "Нишан",
        "type": "31"
    },
    "1710235860": {
        "en": "Paxtazor",
        "uz": "Paxtazor",
        "ru": "Пахтазар",
        "type": "31"
    },
    "1710235874": {
        "en": "Shirinobod",
        "uz": "Shirinobod",
        "ru": "Ширинабад",
        "type": "31"
    },
    "1710235880": {
        "en": "Balxiyak",
        "uz": "Balxiyak",
        "ru": "Балхияк",
        "type": "31"
    },
    "1710237551": {
        "en": "Mug'lon",
        "uz": "Mug'lon",
        "ru": "Муглон",
        "type": "24"
    },
    "1710237554": {
        "en": "Denov",
        "uz": "Denov",
        "ru": "Денов",
        "type": "24"
    },
    "1710237556": {
        "en": "Kasbi",
        "uz": "Kasbi",
        "ru": "Касби",
        "type": "24"
    },
    "1710237558": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "24"
    },
    "1710237562": {
        "en": "Yangi qishloq",
        "uz": "Yangi qishloq",
        "ru": "Янги кишлок",
        "type": "24"
    },
    "1710237564": {
        "en": "Xo'jakasbi",
        "uz": "Xo'jakasbi",
        "ru": "Хужа Касби",
        "type": "24"
    },
    "1710237566": {
        "en": "Fazli",
        "uz": "Fazli",
        "ru": "Фазли",
        "type": "24"
    },
    "1710237568": {
        "en": "Maymanoq",
        "uz": "Maymanoq",
        "ru": "Майманок",
        "type": "24"
    },
    "1710237572": {
        "en": "Qatag'an",
        "uz": "Qatag'an",
        "ru": "Катаган",
        "type": "24"
    },
    "1710237822": {
        "en": "Qamashi",
        "uz": "Qamashi",
        "ru": "Камаши",
        "type": "31"
    },
    "1710237825": {
        "en": "Komilon",
        "uz": "Komilon",
        "ru": "Камилан",
        "type": "31"
    },
    "1710237833": {
        "en": "Qatag'on",
        "uz": "Qatag'on",
        "ru": "Катаган",
        "type": "31"
    },
    "1710237840": {
        "en": "Cho'lquvar",
        "uz": "Cho'lquvar",
        "ru": "Чулкувар",
        "type": "31"
    },
    "1710237855": {
        "en": "Mug'lon",
        "uz": "Mug'lon",
        "ru": "Муглон",
        "type": "31"
    },
    "1710237866": {
        "en": "Denov",
        "uz": "Denov",
        "ru": "Денау",
        "type": "31"
    },
    "1710237877": {
        "en": "Qoraqo'ng'irot",
        "uz": "Qoraqo'ng'irot",
        "ru": "Коракунгирот",
        "type": "31"
    },
    "1710237882": {
        "en": "Yuksalish",
        "uz": "Yuksalish",
        "ru": "Юксалиш",
        "type": "31"
    },
    "1710237886": {
        "en": "Paxtakor",
        "uz": "Paxtakor",
        "ru": "Пахтакор",
        "type": "31"
    },
    "1710237890": {
        "en": "G'alaba",
        "uz": "G'alaba",
        "ru": "Галаба",
        "type": "31"
    },
    "1710242501": {
        "en": "Chiroqchi",
        "uz": "Chiroqchi",
        "ru": "Чиракчи",
        "type": "23"
    },
    "1710242553": {
        "en": "Jar",
        "uz": "Jar",
        "ru": "Джар",
        "type": "24"
    },
    "1710242556": {
        "en": "O'ymovut",
        "uz": "O'ymovut",
        "ru": "Уймовут",
        "type": "24"
    },
    "1710242559": {
        "en": "Dam",
        "uz": "Dam",
        "ru": "Дам",
        "type": "24"
    },
    "1710242563": {
        "en": "Pakandi",
        "uz": "Pakandi",
        "ru": "Паканди",
        "type": "24"
    },
    "1710242566": {
        "en": "Paxtaobod",
        "uz": "Paxtaobod",
        "ru": "Пахтаобод",
        "type": "24"
    },
    "1710242569": {
        "en": "Chiyal",
        "uz": "Chiyal",
        "ru": "Чиял",
        "type": "24"
    },
    "1710242573": {
        "en": "Ko'kdala",
        "uz": "Ko'kdala",
        "ru": "Кукдала",
        "type": "24"
    },
    "1710242576": {
        "en": "Ayritom",
        "uz": "Ayritom",
        "ru": "Айритом",
        "type": "24"
    },
    "1710242811": {
        "en": "Olmazor",
        "uz": "Olmazor",
        "ru": "Олмазор",
        "type": "31"
    },
    "1710242822": {
        "en": "Qalqama",
        "uz": "Qalqama",
        "ru": "Калкама",
        "type": "31"
    },
    "1710242824": {
        "en": "Ko'kdala",
        "uz": "Ko'kdala",
        "ru": "Кокдала",
        "type": "31"
    },
    "1710242826": {
        "en": "Xumo",
        "uz": "Xumo",
        "ru": "Хумо",
        "type": "31"
    },
    "1710242840": {
        "en": "Langar",
        "uz": "Langar",
        "ru": "Лангар",
        "type": "31"
    },
    "1710242844": {
        "en": "Jar",
        "uz": "Jar",
        "ru": "Джар",
        "type": "31"
    },
    "1710242856": {
        "en": "Taraqqiyot",
        "uz": "Taraqqiyot",
        "ru": "Тараккиёт",
        "type": "31"
    },
    "1710242872": {
        "en": "Uyshun",
        "uz": "Uyshun",
        "ru": "Уйшун",
        "type": "31"
    },
    "1710242874": {
        "en": "Nurafshon",
        "uz": "Nurafshon",
        "ru": "Нурафшон",
        "type": "31"
    },
    "1710242876": {
        "en": "Chiyal",
        "uz": "Chiyal",
        "ru": "Чиел",
        "type": "31"
    },
    "1710242877": {
        "en": "Qumdaryo",
        "uz": "Qumdaryo",
        "ru": "Кумдаре",
        "type": "31"
    },
    "1710242878": {
        "en": "Sho'rquduq",
        "uz": "Sho'rquduq",
        "ru": "Шуркудук",
        "type": "31"
    },
    "1710242880": {
        "en": "Eski Anxor",
        "uz": "Eski Anxor",
        "ru": "Эски Ангор",
        "type": "31"
    },
    "1710242884": {
        "en": "Yangihayot",
        "uz": "Yangihayot",
        "ru": "Янгихает",
        "type": "31"
    },
    "1710242886": {
        "en": "Paxtaobod",
        "uz": "Paxtaobod",
        "ru": "Пахтаабад",
        "type": "31"
    },
    "1710242888": {
        "en": "Dodiq",
        "uz": "Dodiq",
        "ru": "Додик",
        "type": "31"
    },
    "1710242890": {
        "en": "Qahramon",
        "uz": "Qahramon",
        "ru": "Кахpамон",
        "type": "31"
    },
    "1710242892": {
        "en": "Uymovut",
        "uz": "Uymovut",
        "ru": "Уймавут",
        "type": "31"
    },
    "1710242894": {
        "en": "Mirzato'p",
        "uz": "Mirzato'p",
        "ru": "Миpзатуп",
        "type": "31"
    },
    "1710242896": {
        "en": "Torjilg'a",
        "uz": "Torjilg'a",
        "ru": "Тоpжилга",
        "type": "31"
    },
    "1710245553": {
        "en": "Miraki",
        "uz": "Miraki",
        "ru": "Мираки",
        "type": "24"
    },
    "1710245555": {
        "en": "Qumqishloq",
        "uz": "Qumqishloq",
        "ru": "Кумкишлок",
        "type": "24"
    },
    "1710245557": {
        "en": "O'rtaqo'rg'on",
        "uz": "O'rtaqo'rg'on",
        "ru": "Уртакургон",
        "type": "24"
    },
    "1710245561": {
        "en": "Chorshanbe",
        "uz": "Chorshanbe",
        "ru": "Чоршанбе",
        "type": "24"
    },
    "1710245563": {
        "en": "Temirchi",
        "uz": "Temirchi",
        "ru": "Темирчи",
        "type": "24"
    },
    "1710245565": {
        "en": "Yangiqishloq",
        "uz": "Yangiqishloq",
        "ru": "Янгикишлок",
        "type": "24"
    },
    "1710245567": {
        "en": "Qutchi",
        "uz": "Qutchi",
        "ru": "Кутчи",
        "type": "24"
    },
    "1710245569": {
        "en": "Shamaton",
        "uz": "Shamaton",
        "ru": "Шаматон",
        "type": "24"
    },
    "1710245571": {
        "en": "Ammog'on-1",
        "uz": "Ammog'on-1",
        "ru": "Аммогон-1",
        "type": "24"
    },
    "1710245573": {
        "en": "Qo'shqanot",
        "uz": "Qo'shqanot",
        "ru": "Кушканот",
        "type": "24"
    },
    "1710245575": {
        "en": "Anday",
        "uz": "Anday",
        "ru": "Андай",
        "type": "24"
    },
    "1710245583": {
        "en": "Xo'jaxuroson",
        "uz": "Xo'jaxuroson",
        "ru": "Хужахуросон",
        "type": "24"
    },
    "1710245585": {
        "en": "Keldihayot",
        "uz": "Keldihayot",
        "ru": "Келдихает",
        "type": "24"
    },
    "1710245802": {
        "en": "Oq suv",
        "uz": "Oq suv",
        "ru": "Аксу",
        "type": "31"
    },
    "1710245811": {
        "en": "Do'xchi",
        "uz": "Do'xchi",
        "ru": "Дукчи",
        "type": "31"
    },
    "1710245818": {
        "en": "Kunchiqar",
        "uz": "Kunchiqar",
        "ru": "Кунчикар",
        "type": "31"
    },
    "1710245823": {
        "en": "Qutchi",
        "uz": "Qutchi",
        "ru": "Кутчи",
        "type": "31"
    },
    "1710245835": {
        "en": "Mo'minobod",
        "uz": "Mo'minobod",
        "ru": "Муминабад",
        "type": "31"
    },
    "1710245840": {
        "en": "Namaton",
        "uz": "Namaton",
        "ru": "Наматан",
        "type": "31"
    },
    "1710245851": {
        "en": "To'damaydon",
        "uz": "To'damaydon",
        "ru": "Тудамайдон",
        "type": "31"
    },
    "1710245860": {
        "en": "O'zbekiston",
        "uz": "O'zbekiston",
        "ru": "Узбекистан",
        "type": "31"
    },
    "1710245869": {
        "en": "Hisorak",
        "uz": "Hisorak",
        "ru": "Хисарак",
        "type": "31"
    },
    "1710245872": {
        "en": "Xitoy",
        "uz": "Xitoy",
        "ru": "Хитай",
        "type": "31"
    },
    "1710245881": {
        "en": "Shakarteri",
        "uz": "Shakarteri",
        "ru": "Шакартери",
        "type": "31"
    },
    "1710245892": {
        "en": "Shamaton",
        "uz": "Shamaton",
        "ru": "Шаматан",
        "type": "31"
    },
    "1710250501": {
        "en": "Yakkabog'",
        "uz": "Yakkabog'",
        "ru": "Яккабаг",
        "type": "23"
    },
    "1710250555": {
        "en": "Eski Yakkabog'",
        "uz": "Eski Yakkabog'",
        "ru": "Эски Яккабаг",
        "type": "24"
    },
    "1710250557": {
        "en": "Alaqarg'a",
        "uz": "Alaqarg'a",
        "ru": "Алакарга",
        "type": "24"
    },
    "1710250558": {
        "en": "Alako'ylak",
        "uz": "Alako'ylak",
        "ru": "Алакуйлак",
        "type": "24"
    },
    "1710250559": {
        "en": "Jarqirg'iz",
        "uz": "Jarqirg'iz",
        "ru": "Жаркиргиз",
        "type": "24"
    },
    "1710250561": {
        "en": "Qayrag'och",
        "uz": "Qayrag'och",
        "ru": "Кайрагач",
        "type": "24"
    },
    "1710250563": {
        "en": "Qatag'on",
        "uz": "Qatag'on",
        "ru": "Катагон",
        "type": "24"
    },
    "1710250565": {
        "en": "Kattabog'",
        "uz": "Kattabog'",
        "ru": "Каттабог",
        "type": "24"
    },
    "1710250567": {
        "en": "Madaniyat",
        "uz": "Madaniyat",
        "ru": "Маданият",
        "type": "24"
    },
    "1710250569": {
        "en": "Mevazor",
        "uz": "Mevazor",
        "ru": "Мевазор",
        "type": "24"
    },
    "1710250571": {
        "en": "Samoq",
        "uz": "Samoq",
        "ru": "Самок",
        "type": "24"
    },
    "1710250573": {
        "en": "Turon",
        "uz": "Turon",
        "ru": "Турон",
        "type": "24"
    },
    "1710250575": {
        "en": "O'z",
        "uz": "O'z",
        "ru": "Уз",
        "type": "24"
    },
    "1710250577": {
        "en": "Chubron",
        "uz": "Chubron",
        "ru": "Чуброн",
        "type": "24"
    },
    "1710250579": {
        "en": "Edilbek",
        "uz": "Edilbek",
        "ru": "Эдилбек",
        "type": "24"
    },
    "1710250811": {
        "en": "Qayrag'och",
        "uz": "Qayrag'och",
        "ru": "Кайрагач",
        "type": "31"
    },
    "1710250822": {
        "en": "Esat",
        "uz": "Esat",
        "ru": "Эсат",
        "type": "31"
    },
    "1710250825": {
        "en": "Qo'shchinor",
        "uz": "Qo'shchinor",
        "ru": "Кошчинар",
        "type": "31"
    },
    "1710250833": {
        "en": "Qishliq",
        "uz": "Qishliq",
        "ru": "Кишлик",
        "type": "31"
    },
    "1710250844": {
        "en": "Samoq",
        "uz": "Samoq",
        "ru": "Самак",
        "type": "31"
    },
    "1710250855": {
        "en": "Sandal",
        "uz": "Sandal",
        "ru": "Сандал",
        "type": "31"
    },
    "1710250858": {
        "en": "O'rta",
        "uz": "O'rta",
        "ru": "Урта",
        "type": "31"
    },
    "1710250861": {
        "en": "Chaydori",
        "uz": "Chaydori",
        "ru": "Чайдари",
        "type": "31"
    },
    "1710250866": {
        "en": "Hiyobon",
        "uz": "Hiyobon",
        "ru": "Хиябан",
        "type": "31"
    },
    "1710401555": {
        "en": "Qashqadaryo",
        "uz": "Qashqadaryo",
        "ru": "Кашкадарья",
        "type": "24"
    },
    "1712211551": {
        "en": "Konimex",
        "uz": "Konimex",
        "ru": "Канимех",
        "type": "24"
    },
    "1712211552": {
        "en": "Balaqaraq",
        "uz": "Balaqaraq",
        "ru": "Балакарак",
        "type": "24"
    },
    "1712211554": {
        "en": "Mamiqchi",
        "uz": "Mamiqchi",
        "ru": "Мамикчи",
        "type": "24"
    },
    "1712211556": {
        "en": "Sho'rtepa",
        "uz": "Sho'rtepa",
        "ru": "Шуртепа",
        "type": "24"
    },
    "1712211558": {
        "en": "Zafarobod",
        "uz": "Zafarobod",
        "ru": "Зафарабад",
        "type": "24"
    },
    "1712211811": {
        "en": "Yangig'ozg'on",
        "uz": "Yangig'ozg'on",
        "ru": "Янгиказган",
        "type": "31"
    },
    "1712211818": {
        "en": "Sarajal",
        "uz": "Sarajal",
        "ru": "Саржал",
        "type": "31"
    },
    "1712211822": {
        "en": "Chordara",
        "uz": "Chordara",
        "ru": "Чардара",
        "type": "31"
    },
    "1712211826": {
        "en": "Karakata",
        "uz": "Karakata",
        "ru": "Караката",
        "type": "31"
    },
    "1712211835": {
        "en": "Uchtobe",
        "uz": "Uchtobe",
        "ru": "Учтобе",
        "type": "31"
    },
    "1712211840": {
        "en": "Boymurot",
        "uz": "Boymurot",
        "ru": "Баймуpат",
        "type": "31"
    },
    "1712211845": {
        "en": "Yangiobod",
        "uz": "Yangiobod",
        "ru": "Янгиабад",
        "type": "31"
    },
    "1712216501": {
        "en": "Qiziltepa",
        "uz": "Qiziltepa",
        "ru": "Кызылтепа",
        "type": "23"
    },
    "1712216552": {
        "en": "Husbuddin",
        "uz": "Husbuddin",
        "ru": "Хусбуддин",
        "type": "24"
    },
    "1712216554": {
        "en": "Qalayn-Azizon",
        "uz": "Qalayn-Azizon",
        "ru": "Калъайи Азизон",
        "type": "24"
    },
    "1712216556": {
        "en": "Baland G'ardiyon",
        "uz": "Baland G'ardiyon",
        "ru": "Баланд гардиен",
        "type": "24"
    },
    "1712216558": {
        "en": "G'oyibon",
        "uz": "G'oyibon",
        "ru": "Гойибон",
        "type": "24"
    },
    "1712216560": {
        "en": "Oq soch",
        "uz": "Oq soch",
        "ru": "Оксоч",
        "type": "24"
    },
    "1712216562": {
        "en": "Vang'ozi",
        "uz": "Vang'ozi",
        "ru": "Вангози",
        "type": "24"
    },
    "1712216564": {
        "en": "Oqmachit",
        "uz": "Oqmachit",
        "ru": "Окмачит",
        "type": "24"
    },
    "1712216566": {
        "en": "Zarmetan",
        "uz": "Zarmetan",
        "ru": "Зарметан",
        "type": "24"
    },
    "1712216568": {
        "en": "G'amxo'r",
        "uz": "G'amxo'r",
        "ru": "Гамхур",
        "type": "24"
    },
    "1712216572": {
        "en": "Uzilishkent",
        "uz": "Uzilishkent",
        "ru": "Узилишкент",
        "type": "24"
    },
    "1712216574": {
        "en": "O'rtaqo'rg'on",
        "uz": "O'rtaqo'rg'on",
        "ru": "Уртакургон",
        "type": "24"
    },
    "1712216576": {
        "en": "Xo'jaqo'rg'on",
        "uz": "Xo'jaqo'rg'on",
        "ru": "Хужакургон",
        "type": "24"
    },
    "1712216803": {
        "en": "Oq oltin",
        "uz": "Oq oltin",
        "ru": "Акалтын",
        "type": "31"
    },
    "1712216805": {
        "en": "Arabon",
        "uz": "Arabon",
        "ru": "Арабон",
        "type": "31"
    },
    "1712216808": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустан",
        "type": "31"
    },
    "1712216812": {
        "en": "Vang'ozi",
        "uz": "Vang'ozi",
        "ru": "Вангази",
        "type": "31"
    },
    "1712216819": {
        "en": "G'ardiyon",
        "uz": "G'ardiyon",
        "ru": "Гардиян",
        "type": "31"
    },
    "1712216825": {
        "en": "Zarmitan",
        "uz": "Zarmitan",
        "ru": "Зармитан",
        "type": "31"
    },
    "1712216840": {
        "en": "Xo'ja-Hasan",
        "uz": "Xo'ja-Hasan",
        "ru": "Ходжахасан",
        "type": "31"
    },
    "1712216850": {
        "en": "Yangi hayot",
        "uz": "Yangi hayot",
        "ru": "Янгихаят",
        "type": "31"
    },
    "1712230552": {
        "en": "Kalkonota",
        "uz": "Kalkonota",
        "ru": "Калконота",
        "type": "24"
    },
    "1712230553": {
        "en": "Saroy",
        "uz": "Saroy",
        "ru": "Сарой",
        "type": "24"
    },
    "1712230555": {
        "en": "Quyi Beshrabot",
        "uz": "Quyi Beshrabot",
        "ru": "Куйи Бешработ",
        "type": "24"
    },
    "1712230557": {
        "en": "Keskanterak",
        "uz": "Keskanterak",
        "ru": "Кескантерак",
        "type": "24"
    },
    "1712230559": {
        "en": "Ijant",
        "uz": "Ijant",
        "ru": "Ижант",
        "type": "24"
    },
    "1712230805": {
        "en": "Olchin",
        "uz": "Olchin",
        "ru": "Алчин",
        "type": "31"
    },
    "1712230808": {
        "en": "Arabsaroy",
        "uz": "Arabsaroy",
        "ru": "Арабсарай",
        "type": "31"
    },
    "1712230815": {
        "en": "Keskanterak",
        "uz": "Keskanterak",
        "ru": "Кескантерак",
        "type": "31"
    },
    "1712230838": {
        "en": "Yangi-yo'l",
        "uz": "Yangi-yo'l",
        "ru": "Янгиюль",
        "type": "31"
    },
    "1712230855": {
        "en": "Turkiston",
        "uz": "Turkiston",
        "ru": "Туркестан",
        "type": "31"
    },
    "1712230880": {
        "en": "Yangiqo'rg'on",
        "uz": "Yangiqo'rg'on",
        "ru": "Янгикурган",
        "type": "31"
    },
    "1712230882": {
        "en": "Beshrabot",
        "uz": "Beshrabot",
        "ru": "Бешpабот",
        "type": "31"
    },
    "1712234551": {
        "en": "Karmana",
        "uz": "Karmana",
        "ru": "Кармана",
        "type": "24"
    },
    "1712234557": {
        "en": "Malikrabot",
        "uz": "Malikrabot",
        "ru": "Маликработ",
        "type": "24"
    },
    "1712234559": {
        "en": "Paxtaobod",
        "uz": "Paxtaobod",
        "ru": "Пахтаабад",
        "type": "24"
    },
    "1712234561": {
        "en": "Podkoron",
        "uz": "Podkoron",
        "ru": "Подкорон",
        "type": "24"
    },
    "1712234563": {
        "en": "Kamolot",
        "uz": "Kamolot",
        "ru": "Камолот",
        "type": "24"
    },
    "1712234565": {
        "en": "Yoshlik",
        "uz": "Yoshlik",
        "ru": "Ешлик",
        "type": "24"
    },
    "1712234802": {
        "en": "Uyrot",
        "uz": "Uyrot",
        "ru": "Уйрат",
        "type": "31"
    },
    "1712234823": {
        "en": "Do'rmon",
        "uz": "Do'rmon",
        "ru": "Дорман",
        "type": "31"
    },
    "1712234845": {
        "en": "Narpay",
        "uz": "Narpay",
        "ru": "Нарпай",
        "type": "31"
    },
    "1712234867": {
        "en": "Xazora",
        "uz": "Xazora",
        "ru": "Хазара",
        "type": "31"
    },
    "1712234878": {
        "en": "Yangiariq",
        "uz": "Yangiariq",
        "ru": "Янгиарык",
        "type": "31"
    },
    "1712234882": {
        "en": "Jaloyir",
        "uz": "Jaloyir",
        "ru": "Джалаиp",
        "type": "31"
    },
    "1712238501": {
        "en": "Nurota",
        "uz": "Nurota",
        "ru": "Нурата",
        "type": "23"
    },
    "1712238555": {
        "en": "Qizilcha",
        "uz": "Qizilcha",
        "ru": "Кизилча",
        "type": "24"
    },
    "1712238557": {
        "en": "Temurqovuq",
        "uz": "Temurqovuq",
        "ru": "Темирковук",
        "type": "24"
    },
    "1712238558": {
        "en": "Chuya",
        "uz": "Chuya",
        "ru": "Чуя",
        "type": "24"
    },
    "1712238559": {
        "en": "Yangibino",
        "uz": "Yangibino",
        "ru": "Янгибино",
        "type": "24"
    },
    "1712238820": {
        "en": "Dehibaland",
        "uz": "Dehibaland",
        "ru": "Дебаланд",
        "type": "31"
    },
    "1712238825": {
        "en": "Gum",
        "uz": "Gum",
        "ru": "Гум",
        "type": "31"
    },
    "1712238835": {
        "en": "G'ozg'on",
        "uz": "G'ozg'on",
        "ru": "Гозгон",
        "type": "31"
    },
    "1712238840": {
        "en": "Qizilcha",
        "uz": "Qizilcha",
        "ru": "Кызылча",
        "type": "31"
    },
    "1712238860": {
        "en": "Nurota",
        "uz": "Nurota",
        "ru": "Нурата",
        "type": "31"
    },
    "1712238877": {
        "en": "Sentob",
        "uz": "Sentob",
        "ru": "Сентяб",
        "type": "31"
    },
    "1712238890": {
        "en": "Chuya",
        "uz": "Chuya",
        "ru": "Чуя",
        "type": "31"
    },
    "1712244551": {
        "en": "Tomdibuloq",
        "uz": "Tomdibuloq",
        "ru": "Томдибулок",
        "type": "24"
    },
    "1712244808": {
        "en": "Oktau",
        "uz": "Oktau",
        "ru": "Актау",
        "type": "31"
    },
    "1712244812": {
        "en": "Ayaqquduq",
        "uz": "Ayaqquduq",
        "ru": "Аякудук",
        "type": "31"
    },
    "1712244830": {
        "en": "Suketti",
        "uz": "Suketti",
        "ru": "Сукитти",
        "type": "31"
    },
    "1712244835": {
        "en": "Keregetau",
        "uz": "Keregetau",
        "ru": "Керегетау",
        "type": "31"
    },
    "1712244837": {
        "en": "Keriz",
        "uz": "Keriz",
        "ru": "Кериз",
        "type": "31"
    },
    "1712244840": {
        "en": "Tomdibuloq",
        "uz": "Tomdibuloq",
        "ru": "Тамдыбулак",
        "type": "31"
    },
    "1712244850": {
        "en": "Shiyeli",
        "uz": "Shiyeli",
        "ru": "Шиели",
        "type": "31"
    },
    "1712248501": {
        "en": "Uchquduq",
        "uz": "Uchquduq",
        "ru": "Учкудук",
        "type": "23"
    },
    "1712248555": {
        "en": "Shalxar",
        "uz": "Shalxar",
        "ru": "Шалкар",
        "type": "24"
    },
    "1712248805": {
        "en": "Ko'kayaz",
        "uz": "Ko'kayaz",
        "ru": "Кукаяз",
        "type": "31"
    },
    "1712248808": {
        "en": "Altintov",
        "uz": "Altintov",
        "ru": "Алтинтов",
        "type": "31"
    },
    "1712248813": {
        "en": "Bozdun",
        "uz": "Bozdun",
        "ru": "Буздун",
        "type": "31"
    },
    "1712248826": {
        "en": "Mingbuloq",
        "uz": "Mingbuloq",
        "ru": "Мингбулак",
        "type": "31"
    },
    "1712248844": {
        "en": "Uzunquduq",
        "uz": "Uzunquduq",
        "ru": "Узункудук",
        "type": "31"
    },
    "1712251501": {
        "en": "Yangirabod",
        "uz": "Yangirabod",
        "ru": "Янгиpабод",
        "type": "23"
    },
    "1712251558": {
        "en": "Langar",
        "uz": "Langar",
        "ru": "Лянгар",
        "type": "24"
    },
    "1712251562": {
        "en": "Jaloyir",
        "uz": "Jaloyir",
        "ru": "Джалойир",
        "type": "24"
    },
    "1712251564": {
        "en": "Qo'shchinor",
        "uz": "Qo'shchinor",
        "ru": "Кушчинор",
        "type": "24"
    },
    "1712251566": {
        "en": "Polvontepa",
        "uz": "Polvontepa",
        "ru": "Полвонтепа",
        "type": "24"
    },
    "1712251568": {
        "en": "Qo'rg'on",
        "uz": "Qo'rg'on",
        "ru": "Кургон",
        "type": "24"
    },
    "1712251570": {
        "en": "Tasmachi",
        "uz": "Tasmachi",
        "ru": "Тасмачи",
        "type": "24"
    },
    "1712251573": {
        "en": "Bog'ishamol",
        "uz": "Bog'ishamol",
        "ru": "Богишамол",
        "type": "24"
    },
    "1712251575": {
        "en": "G'alabek",
        "uz": "G'alabek",
        "ru": "Галабек",
        "type": "24"
    },
    "1712251577": {
        "en": "Paxtakor",
        "uz": "Paxtakor",
        "ru": "Пахтакор",
        "type": "24"
    },
    "1712251579": {
        "en": "Turkman",
        "uz": "Turkman",
        "ru": "Туркман",
        "type": "24"
    },
    "1712251581": {
        "en": "Yangi qurilish",
        "uz": "Yangi qurilish",
        "ru": "Янги курилиш",
        "type": "24"
    },
    "1712251807": {
        "en": "Sahovat",
        "uz": "Sahovat",
        "ru": "Саховат",
        "type": "31"
    },
    "1712251812": {
        "en": "Olchinobod",
        "uz": "Olchinobod",
        "ru": "Алчинабад",
        "type": "31"
    },
    "1712251819": {
        "en": "O'zbekiston",
        "uz": "O'zbekiston",
        "ru": "Узбекистон",
        "type": "31"
    },
    "1712251824": {
        "en": "Bog'chakalon",
        "uz": "Bog'chakalon",
        "ru": "Бахчакалан",
        "type": "31"
    },
    "1712251835": {
        "en": "Xonaqa",
        "uz": "Xonaqa",
        "ru": "Ханака",
        "type": "31"
    },
    "1712251840": {
        "en": "Qoracha",
        "uz": "Qoracha",
        "ru": "Каpача",
        "type": "31"
    },
    "1712251851": {
        "en": "Pulkan shoir",
        "uz": "Pulkan shoir",
        "ru": "им. Пулкан шаира",
        "type": "31"
    },
    "1712251865": {
        "en": "Yangirabod",
        "uz": "Yangirabod",
        "ru": "Янгирабод",
        "type": "31"
    },
    "1712251878": {
        "en": "Ko'ksaroy",
        "uz": "Ko'ksaroy",
        "ru": "Куксарой",
        "type": "31"
    },
    "1712401564": {
        "en": "Tinchlik",
        "uz": "Tinchlik",
        "ru": "Тинчлик",
        "type": "24"
    },
    "1712408556": {
        "en": "Muruntau",
        "uz": "Muruntau",
        "ru": "Мурунтау",
        "type": "24"
    },
    "1714204551": {
        "en": "Jo'masho'y",
        "uz": "Jo'masho'y",
        "ru": "Джумашуй",
        "type": "24"
    },
    "1714204552": {
        "en": "Go'rtepa",
        "uz": "Go'rtepa",
        "ru": "Гуртепа",
        "type": "24"
    },
    "1714204553": {
        "en": "Dovduq",
        "uz": "Dovduq",
        "ru": "Довдук",
        "type": "24"
    },
    "1714204555": {
        "en": "O'zgarish",
        "uz": "O'zgarish",
        "ru": "Узгариш",
        "type": "24"
    },
    "1714204556": {
        "en": "Mehnatobod",
        "uz": "Mehnatobod",
        "ru": "Мехнатабад",
        "type": "24"
    },
    "1714204557": {
        "en": "Madyarovul",
        "uz": "Madyarovul",
        "ru": "Мадяровул",
        "type": "24"
    },
    "1714204559": {
        "en": "Kugolikul",
        "uz": "Kugolikul",
        "ru": "Куголикул",
        "type": "24"
    },
    "1714204805": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустан",
        "type": "31"
    },
    "1714204810": {
        "en": "Gulbog'",
        "uz": "Gulbog'",
        "ru": "Гульбаг",
        "type": "31"
    },
    "1714204820": {
        "en": "Go'rtepa",
        "uz": "Go'rtepa",
        "ru": "Гуртепа",
        "type": "31"
    },
    "1714204822": {
        "en": "Dovduq",
        "uz": "Dovduq",
        "ru": "Довдук",
        "type": "31"
    },
    "1714204828": {
        "en": "Oltinko'l",
        "uz": "Oltinko'l",
        "ru": "Алтынкуль",
        "type": "31"
    },
    "1714204830": {
        "en": "Mehnatobod",
        "uz": "Mehnatobod",
        "ru": "Мехнатабад",
        "type": "31"
    },
    "1714204840": {
        "en": "Momoxon",
        "uz": "Momoxon",
        "ru": "Момохан",
        "type": "31"
    },
    "1714207501": {
        "en": "Kosonsoy",
        "uz": "Kosonsoy",
        "ru": "Касансай",
        "type": "23"
    },
    "1714207552": {
        "en": "Bog'ishamol",
        "uz": "Bog'ishamol",
        "ru": "Богишамол",
        "type": "24"
    },
    "1714207554": {
        "en": "Istiqlol",
        "uz": "Istiqlol",
        "ru": "Истиклол",
        "type": "24"
    },
    "1714207556": {
        "en": "Koson",
        "uz": "Koson",
        "ru": "Косон",
        "type": "24"
    },
    "1714207558": {
        "en": "Ququmboy",
        "uz": "Ququmboy",
        "ru": "Кукумбой",
        "type": "24"
    },
    "1714207561": {
        "en": "Ozod",
        "uz": "Ozod",
        "ru": "Озод",
        "type": "24"
    },
    "1714207562": {
        "en": "Tergachi",
        "uz": "Tergachi",
        "ru": "Тергачи",
        "type": "24"
    },
    "1714207564": {
        "en": "Chindavul",
        "uz": "Chindavul",
        "ru": "Чиндовул",
        "type": "24"
    },
    "1714207566": {
        "en": "Chust ko'cha",
        "uz": "Chust ko'cha",
        "ru": "Чуст куча",
        "type": "24"
    },
    "1714207568": {
        "en": "Yangiyo'l",
        "uz": "Yangiyo'l",
        "ru": "Янгийул",
        "type": "24"
    },
    "1714207569": {
        "en": "Yangi shahar",
        "uz": "Yangi shahar",
        "ru": "Янгишахар",
        "type": "24"
    },
    "1714207806": {
        "en": "Qorasuv",
        "uz": "Qorasuv",
        "ru": "Карасув",
        "type": "31"
    },
    "1714207808": {
        "en": "Shirin",
        "uz": "Shirin",
        "ru": "Шиpин",
        "type": "31"
    },
    "1714207810": {
        "en": "Ququmboy",
        "uz": "Ququmboy",
        "ru": "Кукумбай",
        "type": "31"
    },
    "1714207820": {
        "en": "Koson",
        "uz": "Koson",
        "ru": "Касан",
        "type": "31"
    },
    "1714207827": {
        "en": "Yoshlik",
        "uz": "Yoshlik",
        "ru": "Ешлик",
        "type": "31"
    },
    "1714207830": {
        "en": "Tergachi",
        "uz": "Tergachi",
        "ru": "Тергачи",
        "type": "31"
    },
    "1714207837": {
        "en": "Chindovul",
        "uz": "Chindovul",
        "ru": "Чиндавал",
        "type": "31"
    },
    "1714212551": {
        "en": "Toshbuloq",
        "uz": "Toshbuloq",
        "ru": "Ташбулак",
        "type": "24"
    },
    "1714212553": {
        "en": "Navbahor",
        "uz": "Navbahor",
        "ru": "Навбахор",
        "type": "24"
    },
    "1714212561": {
        "en": "Qumqo'rg'on",
        "uz": "Qumqo'rg'on",
        "ru": "Кумкургон",
        "type": "24"
    },
    "1714212563": {
        "en": "Sho'rqo'rg'on",
        "uz": "Sho'rqo'rg'on",
        "ru": "Шуркургон",
        "type": "24"
    },
    "1714212565": {
        "en": "Mirishkor",
        "uz": "Mirishkor",
        "ru": "Миришкор",
        "type": "24"
    },
    "1714212811": {
        "en": "Nurafshon",
        "uz": "Nurafshon",
        "ru": "Нурафшон",
        "type": "31"
    },
    "1714212822": {
        "en": "Istiqlol",
        "uz": "Istiqlol",
        "ru": "Истиклол",
        "type": "31"
    },
    "1714212833": {
        "en": "Navbahor",
        "uz": "Navbahor",
        "ru": "Навбахор",
        "type": "31"
    },
    "1714212855": {
        "en": "Qumqo'rg'on",
        "uz": "Qumqo'rg'on",
        "ru": "Кумкурган",
        "type": "31"
    },
    "1714212859": {
        "en": "Mirishkor",
        "uz": "Mirishkor",
        "ru": "Миришкор",
        "type": "31"
    },
    "1714212866": {
        "en": "Tepaqo'rg'on",
        "uz": "Tepaqo'rg'on",
        "ru": "Тепакурган",
        "type": "31"
    },
    "1714212877": {
        "en": "O'zbekiston",
        "uz": "O'zbekiston",
        "ru": "Узбекистан",
        "type": "31"
    },
    "1714212880": {
        "en": "Xonabod",
        "uz": "Xonabod",
        "ru": "Ханабад",
        "type": "31"
    },
    "1714212885": {
        "en": "Bog'ishamol",
        "uz": "Bog'ishamol",
        "ru": "Багишамал",
        "type": "31"
    },
    "1714212890": {
        "en": "Sho'rqishloq",
        "uz": "Sho'rqishloq",
        "ru": "Шуркишлак",
        "type": "31"
    },
    "1714216501": {
        "en": "Xaqqulobod",
        "uz": "Xaqqulobod",
        "ru": "Хаккулабад",
        "type": "23"
    },
    "1714216552": {
        "en": "Qorateri",
        "uz": "Qorateri",
        "ru": "Коратери",
        "type": "24"
    },
    "1714216554": {
        "en": "Marg'uzar",
        "uz": "Marg'uzar",
        "ru": "Маргузар",
        "type": "24"
    },
    "1714216556": {
        "en": "Norinkapa",
        "uz": "Norinkapa",
        "ru": "Норинкапа",
        "type": "24"
    },
    "1714216558": {
        "en": "Pastki cho'ja",
        "uz": "Pastki cho'ja",
        "ru": "Пастки Чужа",
        "type": "24"
    },
    "1714216561": {
        "en": "Uchtepa",
        "uz": "Uchtepa",
        "ru": "Учтепа",
        "type": "24"
    },
    "1714216562": {
        "en": "Xo'jaobod",
        "uz": "Xo'jaobod",
        "ru": "Хужаабад",
        "type": "24"
    },
    "1714216564": {
        "en": "Chambil",
        "uz": "Chambil",
        "ru": "Чамбил",
        "type": "24"
    },
    "1714216566": {
        "en": "Sho'ra",
        "uz": "Sho'ra",
        "ru": "Шуро",
        "type": "24"
    },
    "1714216815": {
        "en": "Xo'jaobod",
        "uz": "Xo'jaobod",
        "ru": "Хужаабад",
        "type": "31"
    },
    "1714216820": {
        "en": "Marg'izor",
        "uz": "Marg'izor",
        "ru": "Маргузаp",
        "type": "31"
    },
    "1714216826": {
        "en": "Norinkapa",
        "uz": "Norinkapa",
        "ru": "Нарынкапа",
        "type": "31"
    },
    "1714216837": {
        "en": "Paxtaqishloq",
        "uz": "Paxtaqishloq",
        "ru": "Пахтакишлак",
        "type": "31"
    },
    "1714216848": {
        "en": "To'da",
        "uz": "To'da",
        "ru": "Туда",
        "type": "31"
    },
    "1714216856": {
        "en": "Qo'rg'ontepa",
        "uz": "Qo'rg'ontepa",
        "ru": "Кургонтепа",
        "type": "31"
    },
    "1714216859": {
        "en": "Uchtepa",
        "uz": "Uchtepa",
        "ru": "Учтепа",
        "type": "31"
    },
    "1714216862": {
        "en": "Toshloq",
        "uz": "Toshloq",
        "ru": "Ташлак",
        "type": "31"
    },
    "1714219501": {
        "en": "Pop",
        "uz": "Pop",
        "ru": "Пап",
        "type": "23"
    },
    "1714219554": {
        "en": "Oltinkon",
        "uz": "Oltinkon",
        "ru": "Алтынкан",
        "type": "24"
    },
    "1714219555": {
        "en": "Navbahor",
        "uz": "Navbahor",
        "ru": "Навбахор",
        "type": "24"
    },
    "1714219557": {
        "en": "Uyg'ursoy",
        "uz": "Uyg'ursoy",
        "ru": "Уйгурсай",
        "type": "24"
    },
    "1714219560": {
        "en": "Xalqobod",
        "uz": "Xalqobod",
        "ru": "Халкабад",
        "type": "24"
    },
    "1714219565": {
        "en": "Chorkesar",
        "uz": "Chorkesar",
        "ru": "Чаркесар",
        "type": "24"
    },
    "1714219567": {
        "en": "Uyg'ur",
        "uz": "Uyg'ur",
        "ru": "Уйгур",
        "type": "24"
    },
    "1714219569": {
        "en": "Yangi Xo'jaobod",
        "uz": "Yangi Xo'jaobod",
        "ru": "Янги Хужаабад",
        "type": "24"
    },
    "1714219571": {
        "en": "Sang",
        "uz": "Sang",
        "ru": "Санг",
        "type": "24"
    },
    "1714219573": {
        "en": "G'urumsaroy",
        "uz": "G'urumsaroy",
        "ru": "Гурумсарай",
        "type": "24"
    },
    "1714219575": {
        "en": "Qandig'on",
        "uz": "Qandig'on",
        "ru": "Кандигон",
        "type": "24"
    },
    "1714219576": {
        "en": "Pungon",
        "uz": "Pungon",
        "ru": "Пунгон",
        "type": "24"
    },
    "1714219578": {
        "en": "Chodak",
        "uz": "Chodak",
        "ru": "Чодак",
        "type": "24"
    },
    "1714219581": {
        "en": "Madaniyat",
        "uz": "Madaniyat",
        "ru": "Маданият",
        "type": "24"
    },
    "1714219583": {
        "en": "Qurg'onobod",
        "uz": "Qurg'onobod",
        "ru": "Кургонобод",
        "type": "24"
    },
    "1714219585": {
        "en": "Chorkesar-2",
        "uz": "Chorkesar-2",
        "ru": "Чаркесар-2",
        "type": "24"
    },
    "1714219809": {
        "en": "Madaniyat",
        "uz": "Madaniyat",
        "ru": "Маданият",
        "type": "31"
    },
    "1714219811": {
        "en": "Sirdaryo",
        "uz": "Sirdaryo",
        "ru": "Сирдарё",
        "type": "31"
    },
    "1714219822": {
        "en": "Nayman",
        "uz": "Nayman",
        "ru": "Найман",
        "type": "31"
    },
    "1714219833": {
        "en": "Pop",
        "uz": "Pop",
        "ru": "Пап",
        "type": "31"
    },
    "1714219834": {
        "en": "Paxtaobod",
        "uz": "Paxtaobod",
        "ru": "Пахтаабад",
        "type": "31"
    },
    "1714219844": {
        "en": "Uyg'ur",
        "uz": "Uyg'ur",
        "ru": "Уйгур",
        "type": "31"
    },
    "1714219855": {
        "en": "G'urumsaroy",
        "uz": "G'urumsaroy",
        "ru": "Гурумсарой",
        "type": "31"
    },
    "1714219866": {
        "en": "Chodak",
        "uz": "Chodak",
        "ru": "Чадак",
        "type": "31"
    },
    "1714219877": {
        "en": "Yangi hayot",
        "uz": "Yangi hayot",
        "ru": "Янгихаят",
        "type": "31"
    },
    "1714219885": {
        "en": "Pungon",
        "uz": "Pungon",
        "ru": "Пунган",
        "type": "31"
    },
    "1714224501": {
        "en": "To'raqo'rg'on",
        "uz": "To'raqo'rg'on",
        "ru": "Туракурган",
        "type": "23"
    },
    "1714224554": {
        "en": "Oqtosh",
        "uz": "Oqtosh",
        "ru": "Акташ",
        "type": "24"
    },
    "1714224556": {
        "en": "Yettikon",
        "uz": "Yettikon",
        "ru": "Еттикан",
        "type": "24"
    },
    "1714224558": {
        "en": "Yandama",
        "uz": "Yandama",
        "ru": "Яндама",
        "type": "24"
    },
    "1714224561": {
        "en": "Axsi",
        "uz": "Axsi",
        "ru": "Ахси",
        "type": "24"
    },
    "1714224563": {
        "en": "Kalvak",
        "uz": "Kalvak",
        "ru": "Колвак",
        "type": "24"
    },
    "1714224565": {
        "en": "Mozorko'xna",
        "uz": "Mozorko'xna",
        "ru": "Мизаркухна",
        "type": "24"
    },
    "1714224567": {
        "en": "Buramatut",
        "uz": "Buramatut",
        "ru": "Бураматут",
        "type": "24"
    },
    "1714224569": {
        "en": "Shaxand",
        "uz": "Shaxand",
        "ru": "Шахант",
        "type": "24"
    },
    "1714224571": {
        "en": "Olchin",
        "uz": "Olchin",
        "ru": "Олчин",
        "type": "24"
    },
    "1714224575": {
        "en": "Saroy",
        "uz": "Saroy",
        "ru": "Сарой",
        "type": "24"
    },
    "1714224577": {
        "en": "Katagon",
        "uz": "Katagon",
        "ru": "Катагон",
        "type": "24"
    },
    "1714224579": {
        "en": "Kichikqurama",
        "uz": "Kichikqurama",
        "ru": "Кичиккурама",
        "type": "24"
    },
    "1714224581": {
        "en": "Namdon",
        "uz": "Namdon",
        "ru": "Намдон",
        "type": "24"
    },
    "1714224809": {
        "en": "Axsi",
        "uz": "Axsi",
        "ru": "Ахси",
        "type": "31"
    },
    "1714224812": {
        "en": "Buramatut",
        "uz": "Buramatut",
        "ru": "Бураматут",
        "type": "31"
    },
    "1714224824": {
        "en": "Katagansaroy",
        "uz": "Katagansaroy",
        "ru": "Катагансаpай",
        "type": "31"
    },
    "1714224835": {
        "en": "Sayram",
        "uz": "Sayram",
        "ru": "Сайрам",
        "type": "31"
    },
    "1714224846": {
        "en": "Yandama",
        "uz": "Yandama",
        "ru": "Яндама",
        "type": "31"
    },
    "1714224850": {
        "en": "Xo'jand",
        "uz": "Xo'jand",
        "ru": "Ходжанд",
        "type": "31"
    },
    "1714224857": {
        "en": "Shaxand",
        "uz": "Shaxand",
        "ru": "Шаханд",
        "type": "31"
    },
    "1714224864": {
        "en": "Yortepa",
        "uz": "Yortepa",
        "ru": "Яртепа",
        "type": "31"
    },
    "1714229551": {
        "en": "Uychi",
        "uz": "Uychi",
        "ru": "Уйчи",
        "type": "24"
    },
    "1714229555": {
        "en": "O'nxayat",
        "uz": "O'nxayat",
        "ru": "Унхаят",
        "type": "24"
    },
    "1714229557": {
        "en": "Birlashgan",
        "uz": "Birlashgan",
        "ru": "Бирлашган",
        "type": "24"
    },
    "1714229559": {
        "en": "Fayziobod",
        "uz": "Fayziobod",
        "ru": "Файзиобод",
        "type": "24"
    },
    "1714229561": {
        "en": "Churtuk",
        "uz": "Churtuk",
        "ru": "Чуртук",
        "type": "24"
    },
    "1714229563": {
        "en": "Axsi",
        "uz": "Axsi",
        "ru": "Ахси",
        "type": "24"
    },
    "1714229565": {
        "en": "Jiydakapa",
        "uz": "Jiydakapa",
        "ru": "Джийдакапа",
        "type": "24"
    },
    "1714229567": {
        "en": "Kichik toshloq",
        "uz": "Kichik toshloq",
        "ru": "Кичик тошлок",
        "type": "24"
    },
    "1714229569": {
        "en": "Mashad",
        "uz": "Mashad",
        "ru": "Машад",
        "type": "24"
    },
    "1714229573": {
        "en": "Soku",
        "uz": "Soku",
        "ru": "Соку",
        "type": "24"
    },
    "1714229575": {
        "en": "Boyog'on",
        "uz": "Boyog'on",
        "ru": "Буеган",
        "type": "24"
    },
    "1714229577": {
        "en": "G'ayrat",
        "uz": "G'ayrat",
        "ru": "Гайрат",
        "type": "24"
    },
    "1714229579": {
        "en": "Ziyokor",
        "uz": "Ziyokor",
        "ru": "Зиекор",
        "type": "24"
    },
    "1714229808": {
        "en": "G'ayrat",
        "uz": "G'ayrat",
        "ru": "Гайрат",
        "type": "31"
    },
    "1714229811": {
        "en": "Jiydakapa",
        "uz": "Jiydakapa",
        "ru": "Джидакапа",
        "type": "31"
    },
    "1714229815": {
        "en": "Birlashgan",
        "uz": "Birlashgan",
        "ru": "Бирлашган",
        "type": "31"
    },
    "1714229822": {
        "en": "Teshiktosh",
        "uz": "Teshiktosh",
        "ru": "Тешиктош",
        "type": "31"
    },
    "1714229833": {
        "en": "Uychi",
        "uz": "Uychi",
        "ru": "Уйчи",
        "type": "31"
    },
    "1714229844": {
        "en": "Mashad",
        "uz": "Mashad",
        "ru": "Машад",
        "type": "31"
    },
    "1714229855": {
        "en": "Yorkatay",
        "uz": "Yorkatay",
        "ru": "Яркатай",
        "type": "31"
    },
    "1714229866": {
        "en": "Yorqo'rg'on",
        "uz": "Yorqo'rg'on",
        "ru": "Яркурган",
        "type": "31"
    },
    "1714234501": {
        "en": "Uchqo'rg'on",
        "uz": "Uchqo'rg'on",
        "ru": "Учкуpган",
        "type": "23"
    },
    "1714234552": {
        "en": "Qayqi",
        "uz": "Qayqi",
        "ru": "Кайки",
        "type": "24"
    },
    "1714234554": {
        "en": "Qo'g'ay",
        "uz": "Qo'g'ay",
        "ru": "Кугай",
        "type": "24"
    },
    "1714234556": {
        "en": "Uchyog'och",
        "uz": "Uchyog'och",
        "ru": "Учагач",
        "type": "24"
    },
    "1714234558": {
        "en": "Yangiobod",
        "uz": "Yangiobod",
        "ru": "Янгиабад",
        "type": "24"
    },
    "1714234811": {
        "en": "Qayqi",
        "uz": "Qayqi",
        "ru": "Кайки",
        "type": "31"
    },
    "1714234822": {
        "en": "Baxt",
        "uz": "Baxt",
        "ru": "Бахт",
        "type": "31"
    },
    "1714234833": {
        "en": "Qo'g'ay-o'lmas",
        "uz": "Qo'g'ay-o'lmas",
        "ru": "Кугайульмас",
        "type": "31"
    },
    "1714234844": {
        "en": "Qo'g'ay",
        "uz": "Qo'g'ay",
        "ru": "Кугай",
        "type": "31"
    },
    "1714234851": {
        "en": "O'zbekiston",
        "uz": "O'zbekiston",
        "ru": "Узбекистан",
        "type": "31"
    },
    "1714234861": {
        "en": "Yangiobod",
        "uz": "Yangiobod",
        "ru": "Янгиабад",
        "type": "31"
    },
    "1714234863": {
        "en": "Yangi yor",
        "uz": "Yangi yor",
        "ru": "Янгиер",
        "type": "31"
    },
    "1714234870": {
        "en": "Yashiq",
        "uz": "Yashiq",
        "ru": "Яшик",
        "type": "31"
    },
    "1714236501": {
        "en": "Chortoq",
        "uz": "Chortoq",
        "ru": "Чаpтак",
        "type": "23"
    },
    "1714236552": {
        "en": "Muchum",
        "uz": "Muchum",
        "ru": "Мучум",
        "type": "24"
    },
    "1714236554": {
        "en": "Koroskon",
        "uz": "Koroskon",
        "ru": "Караскан",
        "type": "24"
    },
    "1714236556": {
        "en": "Ko'shan",
        "uz": "Ko'shan",
        "ru": "Кушан",
        "type": "24"
    },
    "1714236558": {
        "en": "Ayqiron",
        "uz": "Ayqiron",
        "ru": "Айкирон",
        "type": "24"
    },
    "1714236560": {
        "en": "Alixon",
        "uz": "Alixon",
        "ru": "Алихон",
        "type": "24"
    },
    "1714236562": {
        "en": "Pastki Peshqo'rg'on",
        "uz": "Pastki Peshqo'rg'on",
        "ru": "Пастки Пешкургон",
        "type": "24"
    },
    "1714236564": {
        "en": "Yuqori Peshqo'rg'on",
        "uz": "Yuqori Peshqo'rg'on",
        "ru": "Юкори Пешкургон",
        "type": "24"
    },
    "1714236566": {
        "en": "Ora ariq",
        "uz": "Ora ariq",
        "ru": "Ораарык",
        "type": "24"
    },
    "1714236568": {
        "en": "Baliqli ko'l",
        "uz": "Baliqli ko'l",
        "ru": "Баликкул",
        "type": "24"
    },
    "1714236572": {
        "en": "Xazratishox",
        "uz": "Xazratishox",
        "ru": "Хазратишох",
        "type": "24"
    },
    "1714236803": {
        "en": "Ayqiron",
        "uz": "Ayqiron",
        "ru": "Айкиран",
        "type": "31"
    },
    "1714236805": {
        "en": "Alixon",
        "uz": "Alixon",
        "ru": "Алихан",
        "type": "31"
    },
    "1714236807": {
        "en": "Bog'iston",
        "uz": "Bog'iston",
        "ru": "Багистан",
        "type": "31"
    },
    "1714236809": {
        "en": "Tinchlik",
        "uz": "Tinchlik",
        "ru": "Тинчлик",
        "type": "31"
    },
    "1714236815": {
        "en": "Karaskan",
        "uz": "Karaskan",
        "ru": "Караскан",
        "type": "31"
    },
    "1714236820": {
        "en": "Muchum",
        "uz": "Muchum",
        "ru": "Мучум",
        "type": "31"
    },
    "1714236826": {
        "en": "Peshqo'rg'on",
        "uz": "Peshqo'rg'on",
        "ru": "Пешкурган",
        "type": "31"
    },
    "1714236853": {
        "en": "Xazratishox",
        "uz": "Xazratishox",
        "ru": "Хазратишо",
        "type": "31"
    },
    "1714236856": {
        "en": "Saroy",
        "uz": "Saroy",
        "ru": "Сарай",
        "type": "31"
    },
    "1714237501": {
        "en": "Chust",
        "uz": "Chust",
        "ru": "Чуст",
        "type": "23"
    },
    "1714237552": {
        "en": "Olmos",
        "uz": "Olmos",
        "ru": "Олмос",
        "type": "24"
    },
    "1714237554": {
        "en": "Axcha",
        "uz": "Axcha",
        "ru": "Ахча",
        "type": "24"
    },
    "1714237556": {
        "en": "Sarimsoqtepa",
        "uz": "Sarimsoqtepa",
        "ru": "Саримсоктепа",
        "type": "24"
    },
    "1714237558": {
        "en": "Varzik",
        "uz": "Varzik",
        "ru": "Варзик",
        "type": "24"
    },
    "1714237560": {
        "en": "Qoraqo'rg'on",
        "uz": "Qoraqo'rg'on",
        "ru": "Коракургон",
        "type": "24"
    },
    "1714237562": {
        "en": "G'ova",
        "uz": "G'ova",
        "ru": "Гова",
        "type": "24"
    },
    "1714237564": {
        "en": "Karkidon",
        "uz": "Karkidon",
        "ru": "Каркидон",
        "type": "24"
    },
    "1714237566": {
        "en": "Karnon",
        "uz": "Karnon",
        "ru": "Карнон",
        "type": "24"
    },
    "1714237568": {
        "en": "Yorqishloq",
        "uz": "Yorqishloq",
        "ru": "Еркишлок",
        "type": "24"
    },
    "1714237570": {
        "en": "Shoyon",
        "uz": "Shoyon",
        "ru": "Шаен",
        "type": "24"
    },
    "1714237572": {
        "en": "Xisorak",
        "uz": "Xisorak",
        "ru": "Хисорак",
        "type": "24"
    },
    "1714237803": {
        "en": "Og'asaray",
        "uz": "Og'asaray",
        "ru": "Огасарай",
        "type": "31"
    },
    "1714237805": {
        "en": "Olmos",
        "uz": "Olmos",
        "ru": "Алмас",
        "type": "31"
    },
    "1714237807": {
        "en": "Axcha",
        "uz": "Axcha",
        "ru": "Ахча",
        "type": "31"
    },
    "1714237812": {
        "en": "Varzik",
        "uz": "Varzik",
        "ru": "Варзик",
        "type": "31"
    },
    "1714237823": {
        "en": "G'ova",
        "uz": "G'ova",
        "ru": "Гова",
        "type": "31"
    },
    "1714237834": {
        "en": "Karkidon",
        "uz": "Karkidon",
        "ru": "Каркидон",
        "type": "31"
    },
    "1714237848": {
        "en": "Xisorak",
        "uz": "Xisorak",
        "ru": "Хисарак",
        "type": "31"
    },
    "1714237859": {
        "en": "Baymoq",
        "uz": "Baymoq",
        "ru": "Баймак",
        "type": "31"
    },
    "1714237870": {
        "en": "Sho'rkent",
        "uz": "Sho'rkent",
        "ru": "Шуркент",
        "type": "31"
    },
    "1714237875": {
        "en": "Karnon",
        "uz": "Karnon",
        "ru": "Карнан",
        "type": "31"
    },
    "1714237880": {
        "en": "Shoyon",
        "uz": "Shoyon",
        "ru": "Шаян",
        "type": "31"
    },
    "1714242551": {
        "en": "Yangiqo'rg'on",
        "uz": "Yangiqo'rg'on",
        "ru": "Янгикурган",
        "type": "24"
    },
    "1714242553": {
        "en": "Bekobod",
        "uz": "Bekobod",
        "ru": "Бекобод",
        "type": "24"
    },
    "1714242555": {
        "en": "G'ovazon",
        "uz": "G'ovazon",
        "ru": "Говазон",
        "type": "24"
    },
    "1714242557": {
        "en": "Zarkent",
        "uz": "Zarkent",
        "ru": "Заркент",
        "type": "24"
    },
    "1714242559": {
        "en": "Iskavot",
        "uz": "Iskavot",
        "ru": "Искавот",
        "type": "24"
    },
    "1714242561": {
        "en": "Kalisho",
        "uz": "Kalisho",
        "ru": "Калишох",
        "type": "24"
    },
    "1714242563": {
        "en": "Qizil qiyoq",
        "uz": "Qizil qiyoq",
        "ru": "Кизилкиек",
        "type": "24"
    },
    "1714242565": {
        "en": "Qorayong'oq",
        "uz": "Qorayong'oq",
        "ru": "Кораенгок",
        "type": "24"
    },
    "1714242567": {
        "en": "Qorapolvon",
        "uz": "Qorapolvon",
        "ru": "Кораполвон",
        "type": "24"
    },
    "1714242569": {
        "en": "Qorachasho'rkent",
        "uz": "Qorachasho'rkent",
        "ru": "Корачашуркент",
        "type": "24"
    },
    "1714242571": {
        "en": "Ko'kyor",
        "uz": "Ko'kyor",
        "ru": "Кукер",
        "type": "24"
    },
    "1714242573": {
        "en": "Navkent",
        "uz": "Navkent",
        "ru": "Навкент",
        "type": "24"
    },
    "1714242575": {
        "en": "Nanay",
        "uz": "Nanay",
        "ru": "Нанай",
        "type": "24"
    },
    "1714242577": {
        "en": "Poromon",
        "uz": "Poromon",
        "ru": "Парамон",
        "type": "24"
    },
    "1714242579": {
        "en": "Rovot",
        "uz": "Rovot",
        "ru": "Ровут",
        "type": "24"
    },
    "1714242581": {
        "en": "Sangiston",
        "uz": "Sangiston",
        "ru": "Сангистон",
        "type": "24"
    },
    "1714242583": {
        "en": "Salmon",
        "uz": "Salmon",
        "ru": "Солман",
        "type": "24"
    },
    "1714242585": {
        "en": "Xo'jasho'rkent",
        "uz": "Xo'jasho'rkent",
        "ru": "Хужашуркент",
        "type": "24"
    },
    "1714242587": {
        "en": "Yumaloqtepa",
        "uz": "Yumaloqtepa",
        "ru": "Юмалок тепа",
        "type": "24"
    },
    "1714242810": {
        "en": "Bekobod",
        "uz": "Bekobod",
        "ru": "Бекабад",
        "type": "31"
    },
    "1714242813": {
        "en": "Birlashkan",
        "uz": "Birlashkan",
        "ru": "Бирлашкан",
        "type": "31"
    },
    "1714242824": {
        "en": "Zarbdor",
        "uz": "Zarbdor",
        "ru": "Зарбдор",
        "type": "31"
    },
    "1714242830": {
        "en": "Zarkent",
        "uz": "Zarkent",
        "ru": "Заркент",
        "type": "31"
    },
    "1714242840": {
        "en": "Qorapolvon",
        "uz": "Qorapolvon",
        "ru": "Карапалван",
        "type": "31"
    },
    "1714242846": {
        "en": "Sharq yulduzi",
        "uz": "Sharq yulduzi",
        "ru": "Шарк юлдузи",
        "type": "31"
    },
    "1714242859": {
        "en": "Nanay",
        "uz": "Nanay",
        "ru": "Нанай",
        "type": "31"
    },
    "1714242862": {
        "en": "Navkent",
        "uz": "Navkent",
        "ru": "Новкент",
        "type": "31"
    },
    "1714242865": {
        "en": "Poromon",
        "uz": "Poromon",
        "ru": "Парамон",
        "type": "31"
    },
    "1714242871": {
        "en": "Istiqlol",
        "uz": "Istiqlol",
        "ru": "Истиклол",
        "type": "31"
    },
    "1714242875": {
        "en": "Navro'zobod",
        "uz": "Navro'zobod",
        "ru": "Наврузабад",
        "type": "31"
    },
    "1714401365": {
        "en": "Davlatobod tumani",
        "uz": "Davlatobod tumani",
        "ru": "Давлатободский район",
        "type": "22"
    },
    "1714401367": {
        "en": "Yangi Namangan tumani",
        "uz": "Yangi Namangan tumani",
        "ru": "Янги Наманганский район",
        "type": "22"
    },
    "1718203551": {
        "en": "Loyish",
        "uz": "Loyish",
        "ru": "Лаиш",
        "type": "24"
    },
    "1718203555": {
        "en": "Dahbed",
        "uz": "Dahbed",
        "ru": "Дахбед",
        "type": "24"
    },
    "1718203557": {
        "en": "Avazali",
        "uz": "Avazali",
        "ru": "Авазали",
        "type": "24"
    },
    "1718203559": {
        "en": "Bolta",
        "uz": "Bolta",
        "ru": "Болта",
        "type": "24"
    },
    "1718203561": {
        "en": "Qirqdarxon",
        "uz": "Qirqdarxon",
        "ru": "Киркдархон",
        "type": "24"
    },
    "1718203563": {
        "en": "Kumushkent",
        "uz": "Kumushkent",
        "ru": "Кумушкент",
        "type": "24"
    },
    "1718203565": {
        "en": "Oytamg'ali",
        "uz": "Oytamg'ali",
        "ru": "Ойтамгали",
        "type": "24"
    },
    "1718203567": {
        "en": "Oqdaryo",
        "uz": "Oqdaryo",
        "ru": "Окдаре",
        "type": "24"
    },
    "1718203569": {
        "en": "Yangiqo'rg'on",
        "uz": "Yangiqo'rg'on",
        "ru": "Янгикургон",
        "type": "24"
    },
    "1718203571": {
        "en": "Yangiobod",
        "uz": "Yangiobod",
        "ru": "Янгиабад",
        "type": "24"
    },
    "1718203816": {
        "en": "Zarafshon",
        "uz": "Zarafshon",
        "ru": "Зарафшан",
        "type": "31"
    },
    "1718203820": {
        "en": "Qorateri",
        "uz": "Qorateri",
        "ru": "Каратери",
        "type": "31"
    },
    "1718203822": {
        "en": "A.Navoiy",
        "uz": "A.Navoiy",
        "ru": "Навои",
        "type": "31"
    },
    "1718203833": {
        "en": "Primkent",
        "uz": "Primkent",
        "ru": "Примкент",
        "type": "31"
    },
    "1718203844": {
        "en": "Yangikent",
        "uz": "Yangikent",
        "ru": "Янгикент",
        "type": "31"
    },
    "1718203855": {
        "en": "Yangiqo'rg'on",
        "uz": "Yangiqo'rg'on",
        "ru": "Янгикурган",
        "type": "31"
    },
    "1718206501": {
        "en": "Bulung'ur",
        "uz": "Bulung'ur",
        "ru": "Булунгур",
        "type": "23"
    },
    "1718206553": {
        "en": "Kildon",
        "uz": "Kildon",
        "ru": "Килдон",
        "type": "24"
    },
    "1718206556": {
        "en": "Soxibkor",
        "uz": "Soxibkor",
        "ru": "Сохибкор",
        "type": "24"
    },
    "1718206559": {
        "en": "Bog'bon",
        "uz": "Bog'bon",
        "ru": "Богбон",
        "type": "24"
    },
    "1718206811": {
        "en": "Beshqo'ton",
        "uz": "Beshqo'ton",
        "ru": "Бешкутан",
        "type": "31"
    },
    "1718206840": {
        "en": "Kildon",
        "uz": "Kildon",
        "ru": "Кильдан",
        "type": "31"
    },
    "1718206845": {
        "en": "Kulchabiy",
        "uz": "Kulchabiy",
        "ru": "Кулчабий",
        "type": "31"
    },
    "1718206850": {
        "en": "O'rtabuloq",
        "uz": "O'rtabuloq",
        "ru": "Уpтабулак",
        "type": "31"
    },
    "1718206856": {
        "en": "Navoiy nomli",
        "uz": "Navoiy nomli",
        "ru": "им. Навои",
        "type": "31"
    },
    "1718206867": {
        "en": "Soxibkor",
        "uz": "Soxibkor",
        "ru": "Сахибкор",
        "type": "31"
    },
    "1718206878": {
        "en": "F.Yo'ldoshev nomli",
        "uz": "F.Yo'ldoshev nomli",
        "ru": "им. Ф. Юлдашева",
        "type": "31"
    },
    "1718209501": {
        "en": "Jomboy",
        "uz": "Jomboy",
        "ru": "Джамбай",
        "type": "23"
    },
    "1718209554": {
        "en": "Dehqonobod",
        "uz": "Dehqonobod",
        "ru": "Дехконабад",
        "type": "24"
    },
    "1718209558": {
        "en": "Eski Jomboy",
        "uz": "Eski Jomboy",
        "ru": "Эски Джомбой",
        "type": "24"
    },
    "1718209564": {
        "en": "Xo'ja",
        "uz": "Xo'ja",
        "ru": "Хужа",
        "type": "24"
    },
    "1718209568": {
        "en": "G'azira",
        "uz": "G'azira",
        "ru": "Газира",
        "type": "24"
    },
    "1718209574": {
        "en": "Kattaqishloq",
        "uz": "Kattaqishloq",
        "ru": "Катта кишлак",
        "type": "24"
    },
    "1718209820": {
        "en": "Dehqonobod",
        "uz": "Dehqonobod",
        "ru": "Дехканабад",
        "type": "31"
    },
    "1718209822": {
        "en": "Jomboy",
        "uz": "Jomboy",
        "ru": "Джамбай",
        "type": "31"
    },
    "1718209833": {
        "en": "Juriyat",
        "uz": "Juriyat",
        "ru": "Джурият",
        "type": "31"
    },
    "1718209844": {
        "en": "Qangli",
        "uz": "Qangli",
        "ru": "Кангли",
        "type": "31"
    },
    "1718209848": {
        "en": "Qoramuyin",
        "uz": "Qoramuyin",
        "ru": "Карамуюн",
        "type": "31"
    },
    "1718209855": {
        "en": "Qo'ng'irot",
        "uz": "Qo'ng'irot",
        "ru": "Кунград",
        "type": "31"
    },
    "1718209866": {
        "en": "Xolvoyi",
        "uz": "Xolvoyi",
        "ru": "Холвай",
        "type": "31"
    },
    "1718209870": {
        "en": "Sherqo'rg'on",
        "uz": "Sherqo'rg'on",
        "ru": "Шеркурган",
        "type": "31"
    },
    "1718212501": {
        "en": "Ishtixon",
        "uz": "Ishtixon",
        "ru": "Иштыхан",
        "type": "23"
    },
    "1718212555": {
        "en": "Mitan",
        "uz": "Mitan",
        "ru": "Митан",
        "type": "24"
    },
    "1718212557": {
        "en": "Azamat",
        "uz": "Azamat",
        "ru": "Азамат",
        "type": "24"
    },
    "1718212559": {
        "en": "Damariq",
        "uz": "Damariq",
        "ru": "Дамарик",
        "type": "24"
    },
    "1718212561": {
        "en": "Bahrin",
        "uz": "Bahrin",
        "ru": "Бахрин",
        "type": "24"
    },
    "1718212563": {
        "en": "Qirqyigit",
        "uz": "Qirqyigit",
        "ru": "Киркйигит",
        "type": "24"
    },
    "1718212565": {
        "en": "Odil",
        "uz": "Odil",
        "ru": "Одил",
        "type": "24"
    },
    "1718212567": {
        "en": "Sug'ot",
        "uz": "Sug'ot",
        "ru": "Сугот",
        "type": "24"
    },
    "1718212569": {
        "en": "Xalqobod",
        "uz": "Xalqobod",
        "ru": "Халкабад",
        "type": "24"
    },
    "1718212571": {
        "en": "Shayxislom",
        "uz": "Shayxislom",
        "ru": "Шайхислом",
        "type": "24"
    },
    "1718212573": {
        "en": "Sheyxlar",
        "uz": "Sheyxlar",
        "ru": "Шейхлар",
        "type": "24"
    },
    "1718212575": {
        "en": "Yangikent",
        "uz": "Yangikent",
        "ru": "Янгикент",
        "type": "24"
    },
    "1718212577": {
        "en": "Yangirabot",
        "uz": "Yangirabot",
        "ru": "Янгиработ",
        "type": "24"
    },
    "1718212803": {
        "en": "Azamat",
        "uz": "Azamat",
        "ru": "Азамат",
        "type": "31"
    },
    "1718212818": {
        "en": "Zarband",
        "uz": "Zarband",
        "ru": "Зарбанд",
        "type": "31"
    },
    "1718212824": {
        "en": "Qurli",
        "uz": "Qurli",
        "ru": "Курли",
        "type": "31"
    },
    "1718212844": {
        "en": "Chordara",
        "uz": "Chordara",
        "ru": "Чардара",
        "type": "31"
    },
    "1718212855": {
        "en": "Ravot",
        "uz": "Ravot",
        "ru": "Рават",
        "type": "31"
    },
    "1718212866": {
        "en": "O'rtaqishloq",
        "uz": "O'rtaqishloq",
        "ru": "Уртакишлак",
        "type": "31"
    },
    "1718212877": {
        "en": "Haqiqat",
        "uz": "Haqiqat",
        "ru": "Хакикат",
        "type": "31"
    },
    "1718212879": {
        "en": "Halqabod",
        "uz": "Halqabod",
        "ru": "Халкабад",
        "type": "31"
    },
    "1718212888": {
        "en": "Fayziobod",
        "uz": "Fayziobod",
        "ru": "Файзиабад",
        "type": "31"
    },
    "1718215551": {
        "en": "Payshanba",
        "uz": "Payshanba",
        "ru": "Пайшанба",
        "type": "24"
    },
    "1718215554": {
        "en": "Suv xovuzi",
        "uz": "Suv xovuzi",
        "ru": "Сув ховузи",
        "type": "24"
    },
    "1718215558": {
        "en": "Mundiyon",
        "uz": "Mundiyon",
        "ru": "Мундиен",
        "type": "24"
    },
    "1718215564": {
        "en": "Polvontepa",
        "uz": "Polvontepa",
        "ru": "Полвонтепа",
        "type": "24"
    },
    "1718215568": {
        "en": "Qoradaryo",
        "uz": "Qoradaryo",
        "ru": "Карадарья",
        "type": "24"
    },
    "1718215574": {
        "en": "Vayrat",
        "uz": "Vayrat",
        "ru": "Войрот",
        "type": "24"
    },
    "1718215578": {
        "en": "Yangiqo'rg'oncha",
        "uz": "Yangiqo'rg'oncha",
        "ru": "Янгикургонча",
        "type": "24"
    },
    "1718215584": {
        "en": "Kattaming",
        "uz": "Kattaming",
        "ru": "Каттаминг",
        "type": "24"
    },
    "1718215811": {
        "en": "Girdiqo'rg'on",
        "uz": "Girdiqo'rg'on",
        "ru": "Гирдыкурган",
        "type": "31"
    },
    "1718215815": {
        "en": "Yangiqo'rg'oncha",
        "uz": "Yangiqo'rg'oncha",
        "ru": "Янгикуpганча",
        "type": "31"
    },
    "1718215818": {
        "en": "Omonboy",
        "uz": "Omonboy",
        "ru": "Аманбай",
        "type": "31"
    },
    "1718215822": {
        "en": "Durbesh",
        "uz": "Durbesh",
        "ru": "Дурбеш",
        "type": "31"
    },
    "1718215833": {
        "en": "Kattako'rpa",
        "uz": "Kattako'rpa",
        "ru": "Каттакурпа",
        "type": "31"
    },
    "1718215837": {
        "en": "Kattaming",
        "uz": "Kattaming",
        "ru": "Каттаминг",
        "type": "31"
    },
    "1718215845": {
        "en": "Kichikmundiyon",
        "uz": "Kichikmundiyon",
        "ru": "Кичикмундиян",
        "type": "31"
    },
    "1718215850": {
        "en": "Moybuloq",
        "uz": "Moybuloq",
        "ru": "Майбулак",
        "type": "31"
    },
    "1718215867": {
        "en": "Saroyqo'rg'on",
        "uz": "Saroyqo'rg'on",
        "ru": "Сарайкурган",
        "type": "31"
    },
    "1718215889": {
        "en": "Jumaboy",
        "uz": "Jumaboy",
        "ru": "Джумабай",
        "type": "31"
    },
    "1718215895": {
        "en": "Qo'shtepa",
        "uz": "Qo'shtepa",
        "ru": "Куштепа",
        "type": "31"
    },
    "1718216551": {
        "en": "Qo'shrabot",
        "uz": "Qo'shrabot",
        "ru": "Кушрабад",
        "type": "24"
    },
    "1718216555": {
        "en": "Zarkent",
        "uz": "Zarkent",
        "ru": "Заркент",
        "type": "24"
    },
    "1718216802": {
        "en": "Oqtepa",
        "uz": "Oqtepa",
        "ru": "Актепа",
        "type": "31"
    },
    "1718216805": {
        "en": "Oxunboboyev nomli",
        "uz": "Oxunboboyev nomli",
        "ru": "им. Ахунбабаева",
        "type": "31"
    },
    "1718216810": {
        "en": "Jush",
        "uz": "Jush",
        "ru": "Джуш",
        "type": "31"
    },
    "1718216814": {
        "en": "Zarmitan",
        "uz": "Zarmitan",
        "ru": "Зармитан",
        "type": "31"
    },
    "1718216820": {
        "en": "Qo'shrabot",
        "uz": "Qo'shrabot",
        "ru": "Кошрабад",
        "type": "31"
    },
    "1718216825": {
        "en": "Pichat",
        "uz": "Pichat",
        "ru": "Пичат",
        "type": "31"
    },
    "1718216830": {
        "en": "Urgandji",
        "uz": "Urgandji",
        "ru": "Уpганджи",
        "type": "31"
    },
    "1718218501": {
        "en": "Oqtosh",
        "uz": "Oqtosh",
        "ru": "Акташ",
        "type": "23"
    },
    "1718218554": {
        "en": "Mirbozor",
        "uz": "Mirbozor",
        "ru": "Мирбазар",
        "type": "24"
    },
    "1718218558": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистон",
        "type": "24"
    },
    "1718218564": {
        "en": "Qo'yi Charxin",
        "uz": "Qo'yi Charxin",
        "ru": "Куйи Чархин",
        "type": "24"
    },
    "1718218811": {
        "en": "Oltio'g'il",
        "uz": "Oltio'g'il",
        "ru": "Алтыугил",
        "type": "31"
    },
    "1718218819": {
        "en": "Islom Shoir",
        "uz": "Islom Shoir",
        "ru": "им. Ислома Шоира",
        "type": "31"
    },
    "1718218822": {
        "en": "Qorako'l",
        "uz": "Qorako'l",
        "ru": "Каракуль",
        "type": "31"
    },
    "1718218826": {
        "en": "Kosogoron",
        "uz": "Kosogoron",
        "ru": "Косагаpан",
        "type": "31"
    },
    "1718218835": {
        "en": "Qadim",
        "uz": "Qadim",
        "ru": "Кадим",
        "type": "31"
    },
    "1718218846": {
        "en": "Chaqar",
        "uz": "Chaqar",
        "ru": "Чакаp",
        "type": "31"
    },
    "1718218870": {
        "en": "Balandqo'rg'on",
        "uz": "Balandqo'rg'on",
        "ru": "Баландкурган",
        "type": "31"
    },
    "1718218872": {
        "en": "Yangirabod",
        "uz": "Yangirabod",
        "ru": "Янгирабад",
        "type": "31"
    },
    "1718218875": {
        "en": "Qorasiyrak",
        "uz": "Qorasiyrak",
        "ru": "Каpасиpак",
        "type": "31"
    },
    "1718224501": {
        "en": "Payariq",
        "uz": "Payariq",
        "ru": "Пайаpык",
        "type": "23"
    },
    "1718224502": {
        "en": "Chelak",
        "uz": "Chelak",
        "ru": "Челек",
        "type": "23"
    },
    "1718224552": {
        "en": "Tomoyrat",
        "uz": "Tomoyrat",
        "ru": "Томойрот",
        "type": "24"
    },
    "1718224554": {
        "en": "Qorasuv",
        "uz": "Qorasuv",
        "ru": "Карасув",
        "type": "24"
    },
    "1718224556": {
        "en": "Ko'ksaroy",
        "uz": "Ko'ksaroy",
        "ru": "Куксарой",
        "type": "24"
    },
    "1718224558": {
        "en": "G'ujumsoy",
        "uz": "G'ujumsoy",
        "ru": "Гужумсой",
        "type": "24"
    },
    "1718224562": {
        "en": "Xo'ja Ismoil",
        "uz": "Xo'ja Ismoil",
        "ru": "Хужа Исмоил",
        "type": "24"
    },
    "1718224564": {
        "en": "Tupolos",
        "uz": "Tupolos",
        "ru": "Туполос",
        "type": "24"
    },
    "1718224566": {
        "en": "Oqqo'rg'on",
        "uz": "Oqqo'rg'on",
        "ru": "Оккургон",
        "type": "24"
    },
    "1718224568": {
        "en": "Do'stlarobod",
        "uz": "Do'stlarobod",
        "ru": "Дустларабад",
        "type": "24"
    },
    "1718224572": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "24"
    },
    "1718224805": {
        "en": "Oqqo'rg'on",
        "uz": "Oqqo'rg'on",
        "ru": "Аккурган",
        "type": "31"
    },
    "1718224810": {
        "en": "Oytamg'ali",
        "uz": "Oytamg'ali",
        "ru": "Айтамгали",
        "type": "31"
    },
    "1718224815": {
        "en": "Birlashgan",
        "uz": "Birlashgan",
        "ru": "Бирлашган",
        "type": "31"
    },
    "1718224825": {
        "en": "O'rta saydov",
        "uz": "O'rta saydov",
        "ru": "Уртасайдов",
        "type": "31"
    },
    "1718224838": {
        "en": "Choparoshli",
        "uz": "Choparoshli",
        "ru": "Чапарашли",
        "type": "31"
    },
    "1718224845": {
        "en": "Ko'kdala",
        "uz": "Ko'kdala",
        "ru": "Кокдала",
        "type": "31"
    },
    "1718224848": {
        "en": "Ko'lto'sin",
        "uz": "Ko'lto'sin",
        "ru": "Культусин",
        "type": "31"
    },
    "1718224855": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистан",
        "type": "31"
    },
    "1718224866": {
        "en": "Qorasuv",
        "uz": "Qorasuv",
        "ru": "Карасув",
        "type": "31"
    },
    "1718224877": {
        "en": "Sanoat",
        "uz": "Sanoat",
        "ru": "Саноат",
        "type": "31"
    },
    "1718224888": {
        "en": "Choshtepa",
        "uz": "Choshtepa",
        "ru": "Чаштепа",
        "type": "31"
    },
    "1718227501": {
        "en": "Juma",
        "uz": "Juma",
        "ru": "Джума",
        "type": "23"
    },
    "1718227558": {
        "en": "Charxin",
        "uz": "Charxin",
        "ru": "Чархин",
        "type": "24"
    },
    "1718227562": {
        "en": "Chortut",
        "uz": "Chortut",
        "ru": "Чортут",
        "type": "24"
    },
    "1718227564": {
        "en": "O'rta Charxin",
        "uz": "O'rta Charxin",
        "ru": "Урта Чархин",
        "type": "24"
    },
    "1718227566": {
        "en": "Balhiyon",
        "uz": "Balhiyon",
        "ru": "Балхиен",
        "type": "24"
    },
    "1718227568": {
        "en": "Go'zalkent",
        "uz": "Go'zalkent",
        "ru": "Гузалкент",
        "type": "24"
    },
    "1718227572": {
        "en": "Nayman",
        "uz": "Nayman",
        "ru": "Найман",
        "type": "24"
    },
    "1718227574": {
        "en": "Jag'alboyli",
        "uz": "Jag'alboyli",
        "ru": "Джагалбойли",
        "type": "24"
    },
    "1718227576": {
        "en": "Mehnat",
        "uz": "Mehnat",
        "ru": "Мехнат",
        "type": "24"
    },
    "1718227578": {
        "en": "Hindiboyi",
        "uz": "Hindiboyi",
        "ru": "Хиндибойи",
        "type": "24"
    },
    "1718227582": {
        "en": "Agron",
        "uz": "Agron",
        "ru": "Агрон",
        "type": "24"
    },
    "1718227584": {
        "en": "Iskandari",
        "uz": "Iskandari",
        "ru": "Искандари",
        "type": "24"
    },
    "1718227586": {
        "en": "Saribosh",
        "uz": "Saribosh",
        "ru": "Сарибош",
        "type": "24"
    },
    "1718227807": {
        "en": "Arabxona",
        "uz": "Arabxona",
        "ru": "Арабхана",
        "type": "31"
    },
    "1718227812": {
        "en": "Bolatosh",
        "uz": "Bolatosh",
        "ru": "Балаташ",
        "type": "31"
    },
    "1718227817": {
        "en": "Go'zalkent",
        "uz": "Go'zalkent",
        "ru": "Гузалкент",
        "type": "31"
    },
    "1718227840": {
        "en": "Anxor",
        "uz": "Anxor",
        "ru": "Анхоp",
        "type": "31"
    },
    "1718227842": {
        "en": "Besh qahramon",
        "uz": "Besh qahramon",
        "ru": "Бешкахрамон",
        "type": "31"
    },
    "1718227845": {
        "en": "Saribosh",
        "uz": "Saribosh",
        "ru": "Саpибаш",
        "type": "31"
    },
    "1718227848": {
        "en": "Po'latchi",
        "uz": "Po'latchi",
        "ru": "Пулатчи",
        "type": "31"
    },
    "1718227850": {
        "en": "Namuna",
        "uz": "Namuna",
        "ru": "Намуна",
        "type": "31"
    },
    "1718227860": {
        "en": "Sanchikul",
        "uz": "Sanchikul",
        "ru": "Санчикуль",
        "type": "31"
    },
    "1718227867": {
        "en": "Torariq",
        "uz": "Torariq",
        "ru": "Тоpаpык",
        "type": "31"
    },
    "1718227875": {
        "en": "Do'rmontepa",
        "uz": "Do'rmontepa",
        "ru": "Дурмонтепа",
        "type": "31"
    },
    "1718227880": {
        "en": "Dimishkibolo",
        "uz": "Dimishkibolo",
        "ru": "Димишкиболо",
        "type": "31"
    },
    "1718227890": {
        "en": "Chimboy",
        "uz": "Chimboy",
        "ru": "Чимбай",
        "type": "31"
    },
    "1718230551": {
        "en": "Ziyovuddin",
        "uz": "Ziyovuddin",
        "ru": "Зиатдин",
        "type": "24"
    },
    "1718230553": {
        "en": "Qodirist",
        "uz": "Qodirist",
        "ru": "Кадирист",
        "type": "24"
    },
    "1718230555": {
        "en": "Past Burkut",
        "uz": "Past Burkut",
        "ru": "Паст Буркут",
        "type": "24"
    },
    "1718230557": {
        "en": "Sanchiqul",
        "uz": "Sanchiqul",
        "ru": "Санчикул",
        "type": "24"
    },
    "1718230559": {
        "en": "Suluvqo'rg'on",
        "uz": "Suluvqo'rg'on",
        "ru": "Сулувкургон",
        "type": "24"
    },
    "1718230561": {
        "en": "Urgich",
        "uz": "Urgich",
        "ru": "Ургич",
        "type": "24"
    },
    "1718230563": {
        "en": "Xumor",
        "uz": "Xumor",
        "ru": "Хумор",
        "type": "24"
    },
    "1718230804": {
        "en": "Do'stobod",
        "uz": "Do'stobod",
        "ru": "Дустобод",
        "type": "31"
    },
    "1718230813": {
        "en": "Xayrobod",
        "uz": "Xayrobod",
        "ru": "Хайpабад",
        "type": "31"
    },
    "1718230827": {
        "en": "Misit",
        "uz": "Misit",
        "ru": "Мисит",
        "type": "31"
    },
    "1718230839": {
        "en": "Sultonobod",
        "uz": "Sultonobod",
        "ru": "Султанабад",
        "type": "31"
    },
    "1718230850": {
        "en": "Yuqori Po'latchi",
        "uz": "Yuqori Po'latchi",
        "ru": "Юкори Пулатчи",
        "type": "31"
    },
    "1718230861": {
        "en": "Quyiboq",
        "uz": "Quyiboq",
        "ru": "Куйбок",
        "type": "31"
    },
    "1718230870": {
        "en": "Xumor",
        "uz": "Xumor",
        "ru": "Хумар",
        "type": "31"
    },
    "1718230875": {
        "en": "Karnab",
        "uz": "Karnab",
        "ru": "Карнаб",
        "type": "31"
    },
    "1718233551": {
        "en": "Gulobod",
        "uz": "Gulobod",
        "ru": "Гулабад",
        "type": "24"
    },
    "1718233555": {
        "en": "Xo'ja Ahrori Vali",
        "uz": "Xo'ja Ahrori Vali",
        "ru": "Хужа Ахрори Вали",
        "type": "24"
    },
    "1718233806": {
        "en": "Ohalik",
        "uz": "Ohalik",
        "ru": "Агалик",
        "type": "31"
    },
    "1718233812": {
        "en": "Qo'shtamg'ali",
        "uz": "Qo'shtamg'ali",
        "ru": "Куштамгали",
        "type": "31"
    },
    "1718233819": {
        "en": "Bog'ibaland",
        "uz": "Bog'ibaland",
        "ru": "Багибаланд",
        "type": "31"
    },
    "1718233830": {
        "en": "Dashtakibolo",
        "uz": "Dashtakibolo",
        "ru": "Даштакиболо",
        "type": "31"
    },
    "1718233850": {
        "en": "Kattaqo'rg'onariq",
        "uz": "Kattaqo'rg'onariq",
        "ru": "Каттакурганарык",
        "type": "31"
    },
    "1718233856": {
        "en": "Kulbaipoyon",
        "uz": "Kulbaipoyon",
        "ru": "Кульбапоян",
        "type": "31"
    },
    "1718233880": {
        "en": "Ulug'bek",
        "uz": "Ulug'bek",
        "ru": "Улугбек",
        "type": "31"
    },
    "1718233893": {
        "en": "Qaynama",
        "uz": "Qaynama",
        "ru": "Кайнама",
        "type": "31"
    },
    "1718235501": {
        "en": "Nurobod",
        "uz": "Nurobod",
        "ru": "Нурабад",
        "type": "23"
    },
    "1718235556": {
        "en": "Nurbuloq",
        "uz": "Nurbuloq",
        "ru": "Нурбулок",
        "type": "24"
    },
    "1718235817": {
        "en": "Jom",
        "uz": "Jom",
        "ru": "Джам",
        "type": "31"
    },
    "1718235820": {
        "en": "Jarquduq",
        "uz": "Jarquduq",
        "ru": "Джаркудук",
        "type": "31"
    },
    "1718235833": {
        "en": "Nurbuloq",
        "uz": "Nurbuloq",
        "ru": "Нуpбулак",
        "type": "31"
    },
    "1718235840": {
        "en": "Tim",
        "uz": "Tim",
        "ru": "Тим",
        "type": "31"
    },
    "1718235843": {
        "en": "Sazog'on",
        "uz": "Sazog'on",
        "ru": "Сазогон",
        "type": "31"
    },
    "1718235846": {
        "en": "Ulus",
        "uz": "Ulus",
        "ru": "Улус",
        "type": "31"
    },
    "1718235850": {
        "en": "Tutli",
        "uz": "Tutli",
        "ru": "Тутли",
        "type": "31"
    },
    "1718236501": {
        "en": "Urgut",
        "uz": "Urgut",
        "ru": "Ургут",
        "type": "23"
    },
    "1718236553": {
        "en": "Jartepa",
        "uz": "Jartepa",
        "ru": "Джартепа",
        "type": "24"
    },
    "1718236556": {
        "en": "Kamangaron",
        "uz": "Kamangaron",
        "ru": "Камангарон",
        "type": "24"
    },
    "1718236559": {
        "en": "G'o's",
        "uz": "G'o's",
        "ru": "Гус",
        "type": "24"
    },
    "1718236563": {
        "en": "Pochvon",
        "uz": "Pochvon",
        "ru": "Почвон",
        "type": "24"
    },
    "1718236566": {
        "en": "Ispanza",
        "uz": "Ispanza",
        "ru": "Испанза",
        "type": "24"
    },
    "1718236569": {
        "en": "Uramas",
        "uz": "Uramas",
        "ru": "Урамас",
        "type": "24"
    },
    "1718236573": {
        "en": "Kenagas",
        "uz": "Kenagas",
        "ru": "Кенагас",
        "type": "24"
    },
    "1718236806": {
        "en": "Beshbuloq",
        "uz": "Beshbuloq",
        "ru": "Бешбулак",
        "type": "31"
    },
    "1718236811": {
        "en": "Ispanza",
        "uz": "Ispanza",
        "ru": "Испанза",
        "type": "31"
    },
    "1718236814": {
        "en": "G'o's",
        "uz": "G'o's",
        "ru": "Гус",
        "type": "31"
    },
    "1718236823": {
        "en": "Ilonli",
        "uz": "Ilonli",
        "ru": "Иланли",
        "type": "31"
    },
    "1718236834": {
        "en": "Qoratepa",
        "uz": "Qoratepa",
        "ru": "Каратепа",
        "type": "31"
    },
    "1718236839": {
        "en": "Baxrin",
        "uz": "Baxrin",
        "ru": "Бахpин",
        "type": "31"
    },
    "1718236846": {
        "en": "Jartepa",
        "uz": "Jartepa",
        "ru": "Джаpтепа",
        "type": "31"
    },
    "1718236852": {
        "en": "Uramas",
        "uz": "Uramas",
        "ru": "Уpамас",
        "type": "31"
    },
    "1718236858": {
        "en": "Mirzaqishloq",
        "uz": "Mirzaqishloq",
        "ru": "Мирзакишлак",
        "type": "31"
    },
    "1718236869": {
        "en": "Pochvon",
        "uz": "Pochvon",
        "ru": "Почван",
        "type": "31"
    },
    "1718236880": {
        "en": "Buloqboshi",
        "uz": "Buloqboshi",
        "ru": "Булокбоши",
        "type": "31"
    },
    "1718236891": {
        "en": "Yangiariq",
        "uz": "Yangiariq",
        "ru": "Янгиарык",
        "type": "31"
    },
    "1718238551": {
        "en": "Toyloq",
        "uz": "Toyloq",
        "ru": "Тайлок",
        "type": "24"
    },
    "1718238554": {
        "en": "Adas",
        "uz": "Adas",
        "ru": "Адас",
        "type": "24"
    },
    "1718238558": {
        "en": "Bog'izag'on",
        "uz": "Bog'izag'on",
        "ru": "Богизагон",
        "type": "24"
    },
    "1718238805": {
        "en": "Adas",
        "uz": "Adas",
        "ru": "Адас",
        "type": "31"
    },
    "1718238815": {
        "en": "Bog'izag'on",
        "uz": "Bog'izag'on",
        "ru": "Багизаган",
        "type": "31"
    },
    "1718238820": {
        "en": "Jumabozor",
        "uz": "Jumabozor",
        "ru": "Джумабазар",
        "type": "31"
    },
    "1718238830": {
        "en": "G'o'lba",
        "uz": "G'o'lba",
        "ru": "Гулба",
        "type": "31"
    },
    "1718238840": {
        "en": "Madaniyat",
        "uz": "Madaniyat",
        "ru": "Маданият",
        "type": "31"
    },
    "1718238845": {
        "en": "Sochakibolo",
        "uz": "Sochakibolo",
        "ru": "Сочакиболо",
        "type": "31"
    },
    "1718238850": {
        "en": "Tepaqishloq",
        "uz": "Tepaqishloq",
        "ru": "Тепакишлак",
        "type": "31"
    },
    "1718238855": {
        "en": "Toyloq",
        "uz": "Toyloq",
        "ru": "Тайляк",
        "type": "31"
    },
    "1718238860": {
        "en": "Qo'rg'oncha",
        "uz": "Qo'rg'oncha",
        "ru": "Курганча",
        "type": "31"
    },
    "1718401554": {
        "en": "Kimyogarlar",
        "uz": "Kimyogarlar",
        "ru": "Кимегаpлаp",
        "type": "24"
    },
    "1718401556": {
        "en": "Farxod",
        "uz": "Farxod",
        "ru": "Фархад",
        "type": "24"
    },
    "1718401558": {
        "en": "Xishrav",
        "uz": "Xishrav",
        "ru": "Хишрау",
        "type": "24"
    },
    "1718406554": {
        "en": "Ingichka",
        "uz": "Ingichka",
        "ru": "Ингичка",
        "type": "24"
    },
    "1722201551": {
        "en": "Qorliq",
        "uz": "Qorliq",
        "ru": "Корлик",
        "type": "24"
    },
    "1722201553": {
        "en": "Botosh",
        "uz": "Botosh",
        "ru": "Ботош",
        "type": "24"
    },
    "1722201555": {
        "en": "Jobu",
        "uz": "Jobu",
        "ru": "Джобу",
        "type": "24"
    },
    "1722201557": {
        "en": "Ipoq",
        "uz": "Ipoq",
        "ru": "Ипок",
        "type": "24"
    },
    "1722201559": {
        "en": "Qurama",
        "uz": "Qurama",
        "ru": "Курама",
        "type": "24"
    },
    "1722201561": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустон",
        "type": "24"
    },
    "1722201563": {
        "en": "Mormin",
        "uz": "Mormin",
        "ru": "Мармин",
        "type": "24"
    },
    "1722201565": {
        "en": "Xayrandara",
        "uz": "Xayrandara",
        "ru": "Хайрандора",
        "type": "24"
    },
    "1722201567": {
        "en": "Xo'jasoat",
        "uz": "Xo'jasoat",
        "ru": "Хужасоат",
        "type": "24"
    },
    "1722201569": {
        "en": "Chep",
        "uz": "Chep",
        "ru": "Чен",
        "type": "24"
    },
    "1722201571": {
        "en": "Shakarqamish",
        "uz": "Shakarqamish",
        "ru": "Шакаркамиш",
        "type": "24"
    },
    "1722201573": {
        "en": "Ekraz",
        "uz": "Ekraz",
        "ru": "Экраз",
        "type": "24"
    },
    "1722201575": {
        "en": "Yangiqurilish",
        "uz": "Yangiqurilish",
        "ru": "Янгикурилиш",
        "type": "24"
    },
    "1722201577": {
        "en": "Gulobod",
        "uz": "Gulobod",
        "ru": "Гулобод",
        "type": "24"
    },
    "1722201801": {
        "en": "Oq oltin",
        "uz": "Oq oltin",
        "ru": "Акалтын",
        "type": "31"
    },
    "1722201802": {
        "en": "Oqarbuloq",
        "uz": "Oqarbuloq",
        "ru": "Акарбулак",
        "type": "31"
    },
    "1722201803": {
        "en": "Oltinsoy",
        "uz": "Oltinsoy",
        "ru": "Алтынсай",
        "type": "31"
    },
    "1722201804": {
        "en": "Vaxshivor",
        "uz": "Vaxshivor",
        "ru": "Вахшивар",
        "type": "31"
    },
    "1722201807": {
        "en": "Dug'oba",
        "uz": "Dug'oba",
        "ru": "Дугаба",
        "type": "31"
    },
    "1722201813": {
        "en": "Qorliq",
        "uz": "Qorliq",
        "ru": "Карлук",
        "type": "31"
    },
    "1722201816": {
        "en": "Mirshodi",
        "uz": "Mirshodi",
        "ru": "Миршаде",
        "type": "31"
    },
    "1722201820": {
        "en": "Uzumzor",
        "uz": "Uzumzor",
        "ru": "Узумзор",
        "type": "31"
    },
    "1722201823": {
        "en": "Lutfiy",
        "uz": "Lutfiy",
        "ru": "Лутфий",
        "type": "31"
    },
    "1722202551": {
        "en": "Angor ( mavjud)",
        "uz": "Angor ( mavjud)",
        "ru": "Ангор",
        "type": "24"
    },
    "1722202553": {
        "en": "Tallimaron",
        "uz": "Tallimaron",
        "ru": "Таллимарон",
        "type": "24"
    },
    "1722202556": {
        "en": "Xomkon",
        "uz": "Xomkon",
        "ru": "Хамкан",
        "type": "24"
    },
    "1722202559": {
        "en": "Qorasuv",
        "uz": "Qorasuv",
        "ru": "Карасу",
        "type": "24"
    },
    "1722202561": {
        "en": "Yangiobod",
        "uz": "Yangiobod",
        "ru": "Янгиабад",
        "type": "24"
    },
    "1722202563": {
        "en": "Talloshqon",
        "uz": "Talloshqon",
        "ru": "Таллошкан",
        "type": "24"
    },
    "1722202566": {
        "en": "Gilambob",
        "uz": "Gilambob",
        "ru": "Гиламбоб",
        "type": "24"
    },
    "1722202569": {
        "en": "Zartepa",
        "uz": "Zartepa",
        "ru": "Зартепа",
        "type": "24"
    },
    "1722202571": {
        "en": "Yangi turmush",
        "uz": "Yangi turmush",
        "ru": "Янги турмуш",
        "type": "24"
    },
    "1722202573": {
        "en": "Angor ( yangi)",
        "uz": "Angor ( yangi)",
        "ru": "Ангор",
        "type": "24"
    },
    "1722202576": {
        "en": "Kayran",
        "uz": "Kayran",
        "ru": "Кайран",
        "type": "24"
    },
    "1722202579": {
        "en": "Novshahar",
        "uz": "Novshahar",
        "ru": "Новшахар",
        "type": "24"
    },
    "1722202815": {
        "en": "Navoiy",
        "uz": "Navoiy",
        "ru": "им. Навои",
        "type": "31"
    },
    "1722202825": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "31"
    },
    "1722202829": {
        "en": "Tallimaron",
        "uz": "Tallimaron",
        "ru": "Талимаран",
        "type": "31"
    },
    "1722202838": {
        "en": "Qorasuv",
        "uz": "Qorasuv",
        "ru": "Корасув",
        "type": "31"
    },
    "1722202840": {
        "en": "Istiqlol",
        "uz": "Istiqlol",
        "ru": "Истиклол",
        "type": "31"
    },
    "1722202843": {
        "en": "Zang",
        "uz": "Zang",
        "ru": "Занг",
        "type": "31"
    },
    "1722202846": {
        "en": "Kayran",
        "uz": "Kayran",
        "ru": "Кайран",
        "type": "31"
    },
    "1722203551": {
        "en": "Bandixon",
        "uz": "Bandixon",
        "ru": "Бандихон",
        "type": "24"
    },
    "1722204501": {
        "en": "Boysun",
        "uz": "Boysun",
        "ru": "Байсун",
        "type": "23"
    },
    "1722204552": {
        "en": "Kofrun",
        "uz": "Kofrun",
        "ru": "Кофрун",
        "type": "24"
    },
    "1722204554": {
        "en": "Tangimush",
        "uz": "Tangimush",
        "ru": "Тангимуш",
        "type": "24"
    },
    "1722204556": {
        "en": "Pasurxi",
        "uz": "Pasurxi",
        "ru": "Пасурхи",
        "type": "24"
    },
    "1722204558": {
        "en": "Qorabo'yin",
        "uz": "Qorabo'yin",
        "ru": "Корабуйин",
        "type": "24"
    },
    "1722204562": {
        "en": "Rabot",
        "uz": "Rabot",
        "ru": "Рабат",
        "type": "24"
    },
    "1722204811": {
        "en": "Qo'ng'irot",
        "uz": "Qo'ng'irot",
        "ru": "Кунгирот",
        "type": "31"
    },
    "1722204825": {
        "en": "Temir darvoza",
        "uz": "Temir darvoza",
        "ru": "Темир дарвоза",
        "type": "31"
    },
    "1722204828": {
        "en": "Qo'rg'oncha",
        "uz": "Qo'rg'oncha",
        "ru": "Курганча",
        "type": "31"
    },
    "1722204830": {
        "en": "Machay",
        "uz": "Machay",
        "ru": "Мачай",
        "type": "31"
    },
    "1722204832": {
        "en": "Poyonqo'rg'on",
        "uz": "Poyonqo'rg'on",
        "ru": "Поенкургон",
        "type": "31"
    },
    "1722204843": {
        "en": "Chinorli",
        "uz": "Chinorli",
        "ru": "Чинорли",
        "type": "31"
    },
    "1722204846": {
        "en": "Ketmonchi",
        "uz": "Ketmonchi",
        "ru": "Кетмончи",
        "type": "31"
    },
    "1722207551": {
        "en": "Xalqobod",
        "uz": "Xalqobod",
        "ru": "Халкабад",
        "type": "24"
    },
    "1722207553": {
        "en": "Baxt",
        "uz": "Baxt",
        "ru": "Бахт",
        "type": "24"
    },
    "1722207555": {
        "en": "Baynalmilal",
        "uz": "Baynalmilal",
        "ru": "Байналмилал",
        "type": "24"
    },
    "1722207557": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистан",
        "type": "24"
    },
    "1722207559": {
        "en": "Iftixor",
        "uz": "Iftixor",
        "ru": "Ифтихор",
        "type": "24"
    },
    "1722207561": {
        "en": "Qozoyoqli",
        "uz": "Qozoyoqli",
        "ru": "Казоекли",
        "type": "24"
    },
    "1722207563": {
        "en": "Oq oltin",
        "uz": "Oq oltin",
        "ru": "Ак алтин",
        "type": "24"
    },
    "1722207565": {
        "en": "Taskent",
        "uz": "Taskent",
        "ru": "Таскент",
        "type": "24"
    },
    "1722207567": {
        "en": "Ozod Vatan",
        "uz": "Ozod Vatan",
        "ru": "Озод Ватан",
        "type": "24"
    },
    "1722207569": {
        "en": "Chegarachi",
        "uz": "Chegarachi",
        "ru": "Чегарачи",
        "type": "24"
    },
    "1722207811": {
        "en": "Beshqo'ton",
        "uz": "Beshqo'ton",
        "ru": "Бешкутан",
        "type": "31"
    },
    "1722207815": {
        "en": "Boldir",
        "uz": "Boldir",
        "ru": "Больдыр",
        "type": "31"
    },
    "1722207822": {
        "en": "Sarhad",
        "uz": "Sarhad",
        "ru": "Сархад",
        "type": "31"
    },
    "1722207830": {
        "en": "Qorakamar",
        "uz": "Qorakamar",
        "ru": "Каракамар",
        "type": "31"
    },
    "1722207833": {
        "en": "Sharq yulduzi",
        "uz": "Sharq yulduzi",
        "ru": "Шарк юлдузи",
        "type": "31"
    },
    "1722207844": {
        "en": "Muzrabot",
        "uz": "Muzrabot",
        "ru": "Музрабад",
        "type": "31"
    },
    "1722207847": {
        "en": "Navbahor",
        "uz": "Navbahor",
        "ru": "Навбахор",
        "type": "31"
    },
    "1722207849": {
        "en": "Obodon",
        "uz": "Obodon",
        "ru": "Абадан",
        "type": "31"
    },
    "1722207863": {
        "en": "Sho'rob",
        "uz": "Sho'rob",
        "ru": "Шураб",
        "type": "31"
    },
    "1722210501": {
        "en": "Denov",
        "uz": "Denov",
        "ru": "Денау",
        "type": "23"
    },
    "1722210554": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "24"
    },
    "1722210556": {
        "en": "Yurchi",
        "uz": "Yurchi",
        "ru": "Юрчи",
        "type": "24"
    },
    "1722210558": {
        "en": "Qiziljar",
        "uz": "Qiziljar",
        "ru": "Кизилжар",
        "type": "24"
    },
    "1722210562": {
        "en": "Xolchayon",
        "uz": "Xolchayon",
        "ru": "Холчаен",
        "type": "24"
    },
    "1722210564": {
        "en": "Xitoyan",
        "uz": "Xitoyan",
        "ru": "Китоян",
        "type": "24"
    },
    "1722210566": {
        "en": "Paxtakurash",
        "uz": "Paxtakurash",
        "ru": "Пахтакураш",
        "type": "24"
    },
    "1722210568": {
        "en": "Namozgoh",
        "uz": "Namozgoh",
        "ru": "Намазгах",
        "type": "24"
    },
    "1722210572": {
        "en": "Jamatak",
        "uz": "Jamatak",
        "ru": "Джаматак",
        "type": "24"
    },
    "1722210574": {
        "en": "Yangi Hazorbog'",
        "uz": "Yangi Hazorbog'",
        "ru": "Янги Хазарбаг",
        "type": "24"
    },
    "1722210576": {
        "en": "Yangibog'",
        "uz": "Yangibog'",
        "ru": "Янгибаг",
        "type": "24"
    },
    "1722210578": {
        "en": "Dahana",
        "uz": "Dahana",
        "ru": "Дахана",
        "type": "24"
    },
    "1722210582": {
        "en": "Yangiobod",
        "uz": "Yangiobod",
        "ru": "Янгиабад",
        "type": "24"
    },
    "1722210806": {
        "en": "Anbarsoy",
        "uz": "Anbarsoy",
        "ru": "Анбарсай",
        "type": "31"
    },
    "1722210823": {
        "en": "Denov",
        "uz": "Denov",
        "ru": "Денау",
        "type": "31"
    },
    "1722210830": {
        "en": "Kenagas",
        "uz": "Kenagas",
        "ru": "Кенагас",
        "type": "31"
    },
    "1722210834": {
        "en": "Qiziljar",
        "uz": "Qiziljar",
        "ru": "Кызылжаp",
        "type": "31"
    },
    "1722210838": {
        "en": "Farg'ona",
        "uz": "Farg'ona",
        "ru": "Фергана",
        "type": "31"
    },
    "1722210840": {
        "en": "Tortuvli",
        "uz": "Tortuvli",
        "ru": "Тоpтувли",
        "type": "31"
    },
    "1722210845": {
        "en": "Pistamozor",
        "uz": "Pistamozor",
        "ru": "Пистамазар",
        "type": "31"
    },
    "1722210850": {
        "en": "Sina",
        "uz": "Sina",
        "ru": "Сина",
        "type": "31"
    },
    "1722210864": {
        "en": "Xayrabot",
        "uz": "Xayrabot",
        "ru": "Хайрабад",
        "type": "31"
    },
    "1722210868": {
        "en": "Hazarbog'",
        "uz": "Hazarbog'",
        "ru": "Хазарбаг",
        "type": "31"
    },
    "1722210870": {
        "en": "Xolchayon",
        "uz": "Xolchayon",
        "ru": "Халчиян",
        "type": "31"
    },
    "1722210873": {
        "en": "Yangibog'",
        "uz": "Yangibog'",
        "ru": "Янгибаг",
        "type": "31"
    },
    "1722210875": {
        "en": "Yangizamon",
        "uz": "Yangizamon",
        "ru": "Янгизамон",
        "type": "31"
    },
    "1722210879": {
        "en": "Yurchi",
        "uz": "Yurchi",
        "ru": "Юрчи",
        "type": "31"
    },
    "1722210881": {
        "en": "Yangiobod",
        "uz": "Yangiobod",
        "ru": "Янгиабад",
        "type": "31"
    },
    "1722210883": {
        "en": "Binokor",
        "uz": "Binokor",
        "ru": "Бинокоp",
        "type": "31"
    },
    "1722210885": {
        "en": "Dahana",
        "uz": "Dahana",
        "ru": "Дахана",
        "type": "31"
    },
    "1722212501": {
        "en": "Jarqo'rg'on",
        "uz": "Jarqo'rg'on",
        "ru": "Джаркурган",
        "type": "23"
    },
    "1722212554": {
        "en": "Kakaydi",
        "uz": "Kakaydi",
        "ru": "Какайды",
        "type": "24"
    },
    "1722212558": {
        "en": "Minor",
        "uz": "Minor",
        "ru": "Минор",
        "type": "24"
    },
    "1722212564": {
        "en": "Qoraqursoq",
        "uz": "Qoraqursoq",
        "ru": "Каракурсак",
        "type": "24"
    },
    "1722212568": {
        "en": "Markaziy Surxon",
        "uz": "Markaziy Surxon",
        "ru": "Марказий Сурхан",
        "type": "24"
    },
    "1722212574": {
        "en": "Kafrun",
        "uz": "Kafrun",
        "ru": "Кофрун",
        "type": "24"
    },
    "1722212811": {
        "en": "Oqqo'rg'on",
        "uz": "Oqqo'rg'on",
        "ru": "Аккурган",
        "type": "31"
    },
    "1722212833": {
        "en": "Jarqo'rg'on",
        "uz": "Jarqo'rg'on",
        "ru": "Джаркурган",
        "type": "31"
    },
    "1722212855": {
        "en": "Dehqonobod",
        "uz": "Dehqonobod",
        "ru": "Дехканабад",
        "type": "31"
    },
    "1722212866": {
        "en": "Minor",
        "uz": "Minor",
        "ru": "Минор",
        "type": "31"
    },
    "1722212877": {
        "en": "Surxon",
        "uz": "Surxon",
        "ru": "Сурхан",
        "type": "31"
    },
    "1722212880": {
        "en": "Chorjo'y",
        "uz": "Chorjo'y",
        "ru": "Чаpджуй",
        "type": "31"
    },
    "1722212889": {
        "en": "Sharq Yulduzi",
        "uz": "Sharq Yulduzi",
        "ru": "Шарк-Юлдузи",
        "type": "31"
    },
    "1722214501": {
        "en": "Qumqo'rg'on",
        "uz": "Qumqo'rg'on",
        "ru": "Кумкурган",
        "type": "23"
    },
    "1722214570": {
        "en": "Hurriyat",
        "uz": "Hurriyat",
        "ru": "Хуppият",
        "type": "24"
    },
    "1722214572": {
        "en": "Elbayon",
        "uz": "Elbayon",
        "ru": "Элбаен",
        "type": "24"
    },
    "1722214574": {
        "en": "Elobod",
        "uz": "Elobod",
        "ru": "Элобод",
        "type": "24"
    },
    "1722214576": {
        "en": "Azlarsoy",
        "uz": "Azlarsoy",
        "ru": "Азларсай",
        "type": "24"
    },
    "1722214578": {
        "en": "Bog'ora",
        "uz": "Bog'ora",
        "ru": "Богара",
        "type": "24"
    },
    "1722214582": {
        "en": "Oqsoy",
        "uz": "Oqsoy",
        "ru": "Аксай",
        "type": "24"
    },
    "1722214584": {
        "en": "Jiydali",
        "uz": "Jiydali",
        "ru": "Джийдали",
        "type": "24"
    },
    "1722214586": {
        "en": "Navbahor",
        "uz": "Navbahor",
        "ru": "Навбахор",
        "type": "24"
    },
    "1722214588": {
        "en": "Qarsoqli",
        "uz": "Qarsoqli",
        "ru": "Карсакли",
        "type": "24"
    },
    "1722214592": {
        "en": "Yangiyer",
        "uz": "Yangiyer",
        "ru": "Янгиер",
        "type": "24"
    },
    "1722214594": {
        "en": "Jaloir",
        "uz": "Jaloir",
        "ru": "Джалойир",
        "type": "24"
    },
    "1722214803": {
        "en": "Oqqapchig'ay",
        "uz": "Oqqapchig'ay",
        "ru": "Аккапчигай",
        "type": "31"
    },
    "1722214810": {
        "en": "Jaloir Qo'rg'oni",
        "uz": "Jaloir Qo'rg'oni",
        "ru": "Жалоир Кургони",
        "type": "31"
    },
    "1722214815": {
        "en": "Sheroziy",
        "uz": "Sheroziy",
        "ru": "Шерозий",
        "type": "31"
    },
    "1722214818": {
        "en": "Oqjar",
        "uz": "Oqjar",
        "ru": "Акжаp",
        "type": "31"
    },
    "1722214820": {
        "en": "Qumqo'rg'on",
        "uz": "Qumqo'rg'on",
        "ru": "Кумкурган",
        "type": "31"
    },
    "1722214830": {
        "en": "Yuqori Kakaydi",
        "uz": "Yuqori Kakaydi",
        "ru": "Юкары-Какайды",
        "type": "31"
    },
    "1722214833": {
        "en": "Ketmon",
        "uz": "Ketmon",
        "ru": "Кетман",
        "type": "31"
    },
    "1722214836": {
        "en": "Arslonboyli",
        "uz": "Arslonboyli",
        "ru": "Аpсланбайли",
        "type": "31"
    },
    "1722215551": {
        "en": "Sariq",
        "uz": "Sariq",
        "ru": "Сарик",
        "type": "24"
    },
    "1722215553": {
        "en": "Kunchiqish",
        "uz": "Kunchiqish",
        "ru": "Кунчикиш",
        "type": "24"
    },
    "1722215556": {
        "en": "Yangi hayot",
        "uz": "Yangi hayot",
        "ru": "Янги хает",
        "type": "24"
    },
    "1722215559": {
        "en": "Karmaki",
        "uz": "Karmaki",
        "ru": "Кармаки",
        "type": "24"
    },
    "1722215563": {
        "en": "Istara",
        "uz": "Istara",
        "ru": "Истара",
        "type": "24"
    },
    "1722215805": {
        "en": "Zarkamar",
        "uz": "Zarkamar",
        "ru": "Заркамар",
        "type": "31"
    },
    "1722215841": {
        "en": "Olmazor",
        "uz": "Olmazor",
        "ru": "Олмазор",
        "type": "31"
    },
    "1722215843": {
        "en": "Bandixon",
        "uz": "Bandixon",
        "ru": "Бандихон",
        "type": "31"
    },
    "1722215845": {
        "en": "Qiziriq",
        "uz": "Qiziriq",
        "ru": "Кизирик",
        "type": "31"
    },
    "1722215847": {
        "en": "Kirshak",
        "uz": "Kirshak",
        "ru": "Киршак",
        "type": "31"
    },
    "1722215849": {
        "en": "Chorvador",
        "uz": "Chorvador",
        "ru": "Чорвадор",
        "type": "31"
    },
    "1722215860": {
        "en": "Paxtakor",
        "uz": "Paxtakor",
        "ru": "Пахтакор",
        "type": "31"
    },
    "1722215865": {
        "en": "Sharq Istara",
        "uz": "Sharq Istara",
        "ru": "Шарк Истара",
        "type": "31"
    },
    "1722215867": {
        "en": "Yangi yo'l",
        "uz": "Yangi yo'l",
        "ru": "Янгиюль",
        "type": "31"
    },
    "1722215870": {
        "en": "Mehnatobod",
        "uz": "Mehnatobod",
        "ru": "Мехнатабад",
        "type": "31"
    },
    "1722217505": {
        "en": "Sharg'un",
        "uz": "Sharg'un",
        "ru": "Шаргунь",
        "type": "23"
    },
    "1722217551": {
        "en": "Sariosiyo",
        "uz": "Sariosiyo",
        "ru": "Сариасия",
        "type": "24"
    },
    "1722217554": {
        "en": "Yangihayot",
        "uz": "Yangihayot",
        "ru": "Янгихает",
        "type": "24"
    },
    "1722217558": {
        "en": "Tortuli",
        "uz": "Tortuli",
        "ru": "Тартули",
        "type": "24"
    },
    "1722217564": {
        "en": "Bo'yropo'sht",
        "uz": "Bo'yropo'sht",
        "ru": "Буйрапушт",
        "type": "24"
    },
    "1722217812": {
        "en": "Dashnobod",
        "uz": "Dashnobod",
        "ru": "Дашнабад",
        "type": "31"
    },
    "1722217826": {
        "en": "Navro'z",
        "uz": "Navro'z",
        "ru": "Навруз",
        "type": "31"
    },
    "1722217828": {
        "en": "Buyuk kelajak",
        "uz": "Buyuk kelajak",
        "ru": "Буюк келажак",
        "type": "31"
    },
    "1722217832": {
        "en": "Sangardak",
        "uz": "Sangardak",
        "ru": "Сангардак",
        "type": "31"
    },
    "1722217835": {
        "en": "Bog'i iram",
        "uz": "Bog'i iram",
        "ru": "Боги ирам",
        "type": "31"
    },
    "1722217846": {
        "en": "So'fiyon",
        "uz": "So'fiyon",
        "ru": "Суфиян",
        "type": "31"
    },
    "1722217851": {
        "en": "Toqchiyon",
        "uz": "Toqchiyon",
        "ru": "Такчиян",
        "type": "31"
    },
    "1722217862": {
        "en": "O'zbekiston",
        "uz": "O'zbekiston",
        "ru": "Узбекистан",
        "type": "31"
    },
    "1722217880": {
        "en": "Xufar",
        "uz": "Xufar",
        "ru": "Хуфар",
        "type": "31"
    },
    "1722220551": {
        "en": "Uchqizil",
        "uz": "Uchqizil",
        "ru": "Учкизил",
        "type": "24"
    },
    "1722220553": {
        "en": "Limonchi",
        "uz": "Limonchi",
        "ru": "Лимончи",
        "type": "24"
    },
    "1722220555": {
        "en": "Tajribakor",
        "uz": "Tajribakor",
        "ru": "Тажрибакор",
        "type": "24"
    },
    "1722220557": {
        "en": "Namuna",
        "uz": "Namuna",
        "ru": "Намуна",
        "type": "24"
    },
    "1722220559": {
        "en": "At-Termiziy",
        "uz": "At-Termiziy",
        "ru": "Ат-Термизий",
        "type": "24"
    },
    "1722220561": {
        "en": "Mustaqillik",
        "uz": "Mustaqillik",
        "ru": "Мустакиллик",
        "type": "24"
    },
    "1722220563": {
        "en": "Pattakesar",
        "uz": "Pattakesar",
        "ru": "Паттакесар",
        "type": "24"
    },
    "1722220565": {
        "en": "Chegarachi",
        "uz": "Chegarachi",
        "ru": "Чегарачи",
        "type": "24"
    },
    "1722220567": {
        "en": "Qizilboy",
        "uz": "Qizilboy",
        "ru": "Кизилбай",
        "type": "24"
    },
    "1722220844": {
        "en": "Mehnatobod",
        "uz": "Mehnatobod",
        "ru": "Мехнатобод",
        "type": "31"
    },
    "1722220855": {
        "en": "Paxtaobod",
        "uz": "Paxtaobod",
        "ru": "Пахтаабад",
        "type": "31"
    },
    "1722220870": {
        "en": "Uchqizil",
        "uz": "Uchqizil",
        "ru": "Учкизил",
        "type": "31"
    },
    "1722220888": {
        "en": "Yangiariq",
        "uz": "Yangiariq",
        "ru": "Янгиарык",
        "type": "31"
    },
    "1722220895": {
        "en": "Kokildorota",
        "uz": "Kokildorota",
        "ru": "Кокилдорота",
        "type": "31"
    },
    "1722221551": {
        "en": "Uzun",
        "uz": "Uzun",
        "ru": "Узун",
        "type": "24"
    },
    "1722221553": {
        "en": "Chinor",
        "uz": "Chinor",
        "ru": "Чинар",
        "type": "24"
    },
    "1722221556": {
        "en": "Ulanqul",
        "uz": "Ulanqul",
        "ru": "Уланкул",
        "type": "24"
    },
    "1722221559": {
        "en": "Qarashiq",
        "uz": "Qarashiq",
        "ru": "Карашик",
        "type": "24"
    },
    "1722221563": {
        "en": "Yangi kuch",
        "uz": "Yangi kuch",
        "ru": "Янги куч",
        "type": "24"
    },
    "1722221566": {
        "en": "Jonchekka",
        "uz": "Jonchekka",
        "ru": "Джанчекка",
        "type": "24"
    },
    "1722221569": {
        "en": "Malandiyon",
        "uz": "Malandiyon",
        "ru": "Маландиян",
        "type": "24"
    },
    "1722221573": {
        "en": "Mehnat",
        "uz": "Mehnat",
        "ru": "Мехнат",
        "type": "24"
    },
    "1722221576": {
        "en": "Yangi ro'zg'or",
        "uz": "Yangi ro'zg'or",
        "ru": "Янги рузгор",
        "type": "24"
    },
    "1722221806": {
        "en": "Bobotog'",
        "uz": "Bobotog'",
        "ru": "Бабатаг",
        "type": "31"
    },
    "1722221816": {
        "en": "Jonchekka",
        "uz": "Jonchekka",
        "ru": "Джанчека",
        "type": "31"
    },
    "1722221824": {
        "en": "Fayzova",
        "uz": "Fayzova",
        "ru": "им. Файзова",
        "type": "31"
    },
    "1722221856": {
        "en": "Telpakchinor",
        "uz": "Telpakchinor",
        "ru": "Тельпакчинар",
        "type": "31"
    },
    "1722221868": {
        "en": "Uzun",
        "uz": "Uzun",
        "ru": "Узун",
        "type": "31"
    },
    "1722221875": {
        "en": "Oq Ostona",
        "uz": "Oq Ostona",
        "ru": "Акастана",
        "type": "31"
    },
    "1722221880": {
        "en": "Xonjiza",
        "uz": "Xonjiza",
        "ru": "Хондиза",
        "type": "31"
    },
    "1722223501": {
        "en": "Sherobod",
        "uz": "Sherobod",
        "ru": "Шерабад",
        "type": "23"
    },
    "1722223552": {
        "en": "Zarabog'",
        "uz": "Zarabog'",
        "ru": "Зарабаг",
        "type": "24"
    },
    "1722223554": {
        "en": "Kilkon",
        "uz": "Kilkon",
        "ru": "Килкон",
        "type": "24"
    },
    "1722223556": {
        "en": "Navbog'",
        "uz": "Navbog'",
        "ru": "Навбаг",
        "type": "24"
    },
    "1722223558": {
        "en": "Paxtaobod",
        "uz": "Paxtaobod",
        "ru": "Пахтаабад",
        "type": "24"
    },
    "1722223562": {
        "en": "Sariqamish",
        "uz": "Sariqamish",
        "ru": "Сарикамиш",
        "type": "24"
    },
    "1722223564": {
        "en": "Cho'yinchi",
        "uz": "Cho'yinchi",
        "ru": "Чуйинчи",
        "type": "24"
    },
    "1722223566": {
        "en": "Yangiariq",
        "uz": "Yangiariq",
        "ru": "Янги арик",
        "type": "24"
    },
    "1722223810": {
        "en": "Oqqo'rg'on",
        "uz": "Oqqo'rg'on",
        "ru": "Аккурган",
        "type": "31"
    },
    "1722223822": {
        "en": "Ko'hitang",
        "uz": "Ko'hitang",
        "ru": "Кухитанг",
        "type": "31"
    },
    "1722223833": {
        "en": "Sariqamish",
        "uz": "Sariqamish",
        "ru": "Саpикамиш",
        "type": "31"
    },
    "1722223854": {
        "en": "Seplon",
        "uz": "Seplon",
        "ru": "Сеплан",
        "type": "31"
    },
    "1722223856": {
        "en": "Talloshqon",
        "uz": "Talloshqon",
        "ru": "Талашкан",
        "type": "31"
    },
    "1722223858": {
        "en": "Rabatak",
        "uz": "Rabatak",
        "ru": "Рабатаг",
        "type": "31"
    },
    "1722223865": {
        "en": "Yangiturmush",
        "uz": "Yangiturmush",
        "ru": "Янгитурмуш",
        "type": "31"
    },
    "1722223867": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустансай",
        "type": "31"
    },
    "1722223870": {
        "en": "Chinobod",
        "uz": "Chinobod",
        "ru": "Чинабад",
        "type": "31"
    },
    "1722226501": {
        "en": "Sho'rchi",
        "uz": "Sho'rchi",
        "ru": "Шурчи",
        "type": "23"
    },
    "1722226554": {
        "en": "Elbayon",
        "uz": "Elbayon",
        "ru": "Элбаен",
        "type": "24"
    },
    "1722226558": {
        "en": "To'la",
        "uz": "To'la",
        "ru": "Тула",
        "type": "24"
    },
    "1722226562": {
        "en": "Yalti",
        "uz": "Yalti",
        "ru": "Ялти",
        "type": "24"
    },
    "1722226564": {
        "en": "Xushchekka",
        "uz": "Xushchekka",
        "ru": "Хушчека",
        "type": "24"
    },
    "1722226566": {
        "en": "Qo'shtegirmon",
        "uz": "Qo'shtegirmon",
        "ru": "Куштегирмон",
        "type": "24"
    },
    "1722226568": {
        "en": "Kattasovur",
        "uz": "Kattasovur",
        "ru": "Катта совур",
        "type": "24"
    },
    "1722226572": {
        "en": "Karvon",
        "uz": "Karvon",
        "ru": "Карвон",
        "type": "24"
    },
    "1722226574": {
        "en": "G'armaqo'rg'on",
        "uz": "G'armaqo'rg'on",
        "ru": "Гармакурган",
        "type": "24"
    },
    "1722226576": {
        "en": "Jarqishloq",
        "uz": "Jarqishloq",
        "ru": "Джаркишлок",
        "type": "24"
    },
    "1722226578": {
        "en": "Joyilma",
        "uz": "Joyilma",
        "ru": "Джайилма",
        "type": "24"
    },
    "1722226816": {
        "en": "Qo'ldosh",
        "uz": "Qo'ldosh",
        "ru": "Кулдош",
        "type": "31"
    },
    "1722226820": {
        "en": "Alpomish",
        "uz": "Alpomish",
        "ru": "Алпомиш",
        "type": "31"
    },
    "1722226824": {
        "en": "Baxtlitepa",
        "uz": "Baxtlitepa",
        "ru": "Бахтлитепа",
        "type": "31"
    },
    "1722226844": {
        "en": "Savur",
        "uz": "Savur",
        "ru": "Совур",
        "type": "31"
    },
    "1722226852": {
        "en": "Elobod",
        "uz": "Elobod",
        "ru": "Элабад",
        "type": "31"
    },
    "1722226863": {
        "en": "Sohibkor",
        "uz": "Sohibkor",
        "ru": "Сахибкор",
        "type": "31"
    },
    "1722226866": {
        "en": "Dalvarzin",
        "uz": "Dalvarzin",
        "ru": "Дальверзин",
        "type": "31"
    },
    "1722226869": {
        "en": "Jaloir",
        "uz": "Jaloir",
        "ru": "Джалаир",
        "type": "31"
    },
    "1722226872": {
        "en": "Sho'rchi",
        "uz": "Sho'rchi",
        "ru": "Шурчи",
        "type": "31"
    },
    "1722226882": {
        "en": "Yangibozor",
        "uz": "Yangibozor",
        "ru": "Янгибазар",
        "type": "31"
    },
    "1724206551": {
        "en": "Sardoba",
        "uz": "Sardoba",
        "ru": "Сардоба",
        "type": "24"
    },
    "1724206552": {
        "en": "Farg'ona",
        "uz": "Farg'ona",
        "ru": "Фергана",
        "type": "24"
    },
    "1724206554": {
        "en": "Andijon",
        "uz": "Andijon",
        "ru": "Андижон",
        "type": "24"
    },
    "1724206814": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустан",
        "type": "31"
    },
    "1724206824": {
        "en": "Ahillik",
        "uz": "Ahillik",
        "ru": "Ахиллик",
        "type": "31"
    },
    "1724206850": {
        "en": "Shodlik",
        "uz": "Shodlik",
        "ru": "Шадлик",
        "type": "31"
    },
    "1724212551": {
        "en": "Boyovut",
        "uz": "Boyovut",
        "ru": "Баяут",
        "type": "24"
    },
    "1724212552": {
        "en": "Markaz",
        "uz": "Markaz",
        "ru": "Марказ",
        "type": "24"
    },
    "1724212553": {
        "en": "Bekat",
        "uz": "Bekat",
        "ru": "Бекат",
        "type": "24"
    },
    "1724212554": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "24"
    },
    "1724212811": {
        "en": "Boyovut",
        "uz": "Boyovut",
        "ru": "Баяут",
        "type": "31"
    },
    "1724212818": {
        "en": "G'allakor",
        "uz": "G'allakor",
        "ru": "Галлакор",
        "type": "31"
    },
    "1724212830": {
        "en": "Darvazakir",
        "uz": "Darvazakir",
        "ru": "Дарбазакыр",
        "type": "31"
    },
    "1724212834": {
        "en": "Dehqonobod",
        "uz": "Dehqonobod",
        "ru": "Дехканабад",
        "type": "31"
    },
    "1724212847": {
        "en": "Olmazor",
        "uz": "Olmazor",
        "ru": "Алмазар",
        "type": "31"
    },
    "1724212850": {
        "en": "Mingchinor",
        "uz": "Mingchinor",
        "ru": "Мингчинар",
        "type": "31"
    },
    "1724212855": {
        "en": "Buyuk yurt",
        "uz": "Buyuk yurt",
        "ru": "Буюк юрт",
        "type": "31"
    },
    "1724212861": {
        "en": "Tabarruk",
        "uz": "Tabarruk",
        "ru": "Табаррук",
        "type": "31"
    },
    "1724212865": {
        "en": "Madaniyat",
        "uz": "Madaniyat",
        "ru": "Маданият",
        "type": "31"
    },
    "1724212868": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "31"
    },
    "1724212875": {
        "en": "Laylakko'l",
        "uz": "Laylakko'l",
        "ru": "Лайлакуль",
        "type": "31"
    },
    "1724212880": {
        "en": "Tinchlik",
        "uz": "Tinchlik",
        "ru": "Тинчлик",
        "type": "31"
    },
    "1724216551": {
        "en": "Sayxun",
        "uz": "Sayxun",
        "ru": "Сайхун",
        "type": "24"
    },
    "1724216553": {
        "en": "Sohil",
        "uz": "Sohil",
        "ru": "Сохил",
        "type": "24"
    },
    "1724216555": {
        "en": "Sho'ro'zak",
        "uz": "Sho'ro'zak",
        "ru": "Шурузак",
        "type": "24"
    },
    "1724216557": {
        "en": "Paxtakon",
        "uz": "Paxtakon",
        "ru": "Пахтакон",
        "type": "24"
    },
    "1724216811": {
        "en": "Ittifak",
        "uz": "Ittifak",
        "ru": "Иттифак",
        "type": "31"
    },
    "1724216822": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистан",
        "type": "31"
    },
    "1724216827": {
        "en": "Nurota",
        "uz": "Nurota",
        "ru": "Нурата",
        "type": "31"
    },
    "1724216830": {
        "en": "O'zbekiston",
        "uz": "O'zbekiston",
        "ru": "Узбекистон",
        "type": "31"
    },
    "1724216833": {
        "en": "Istiqlol",
        "uz": "Istiqlol",
        "ru": "Истиклол",
        "type": "31"
    },
    "1724216844": {
        "en": "Sho'ro'zak",
        "uz": "Sho'ro'zak",
        "ru": "Шурузяк",
        "type": "31"
    },
    "1724216855": {
        "en": "Yangi hayot",
        "uz": "Yangi hayot",
        "ru": "Янгихаят",
        "type": "31"
    },
    "1724220551": {
        "en": "Dehqonobod",
        "uz": "Dehqonobod",
        "ru": "Дехканабад",
        "type": "24"
    },
    "1724220552": {
        "en": "Hulkar",
        "uz": "Hulkar",
        "ru": "Хулкар",
        "type": "24"
    },
    "1724220553": {
        "en": "Beshbuloq",
        "uz": "Beshbuloq",
        "ru": "Бешбулак",
        "type": "24"
    },
    "1724220554": {
        "en": "Ulug'bek",
        "uz": "Ulug'bek",
        "ru": "Улугбек",
        "type": "24"
    },
    "1724220556": {
        "en": "Xalqako'l",
        "uz": "Xalqako'l",
        "ru": "Халкакул",
        "type": "24"
    },
    "1724220805": {
        "en": "Oltintepa",
        "uz": "Oltintepa",
        "ru": "Алтынтепа",
        "type": "31"
    },
    "1724220816": {
        "en": "Soyibobod",
        "uz": "Soyibobod",
        "ru": "Саибобод",
        "type": "31"
    },
    "1724220820": {
        "en": "Xumo",
        "uz": "Xumo",
        "ru": "Хумо",
        "type": "31"
    },
    "1724220823": {
        "en": "Kunchi",
        "uz": "Kunchi",
        "ru": "Кунчи",
        "type": "31"
    },
    "1724220827": {
        "en": "Beshbuloq",
        "uz": "Beshbuloq",
        "ru": "Бешбулак",
        "type": "31"
    },
    "1724220835": {
        "en": "Chortoq",
        "uz": "Chortoq",
        "ru": "Чоpток",
        "type": "31"
    },
    "1724220846": {
        "en": "Oltin O'rda",
        "uz": "Oltin O'rda",
        "ru": "Олтин Уpда",
        "type": "31"
    },
    "1724220879": {
        "en": "Zarbdor",
        "uz": "Zarbdor",
        "ru": "Зарбдар",
        "type": "31"
    },
    "1724220882": {
        "en": "Soxilobod",
        "uz": "Soxilobod",
        "ru": "Сахилабад",
        "type": "31"
    },
    "1724226551": {
        "en": "Paxtaobod",
        "uz": "Paxtaobod",
        "ru": "Пахтаабад",
        "type": "24"
    },
    "1724226811": {
        "en": "Cho'lquvar",
        "uz": "Cho'lquvar",
        "ru": "Чулкуваp",
        "type": "31"
    },
    "1724226822": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистон",
        "type": "31"
    },
    "1724226833": {
        "en": "Yangiqishloq",
        "uz": "Yangiqishloq",
        "ru": "Янгикишлак",
        "type": "31"
    },
    "1724226844": {
        "en": "Gulzor",
        "uz": "Gulzor",
        "ru": "Гульзар",
        "type": "31"
    },
    "1724226855": {
        "en": "Yangiobod",
        "uz": "Yangiobod",
        "ru": "Янгиабад",
        "type": "31"
    },
    "1724226865": {
        "en": "Qo'rg'ontepa",
        "uz": "Qo'rg'ontepa",
        "ru": "Куpгантепа",
        "type": "31"
    },
    "1724228551": {
        "en": "Navro'z",
        "uz": "Navro'z",
        "ru": "Навруз",
        "type": "24"
    },
    "1724228552": {
        "en": "Oqoltin",
        "uz": "Oqoltin",
        "ru": "Акалтин",
        "type": "24"
    },
    "1724228805": {
        "en": "Bahoriston",
        "uz": "Bahoriston",
        "ru": "Бахористан",
        "type": "31"
    },
    "1724228818": {
        "en": "Oqoltin",
        "uz": "Oqoltin",
        "ru": "Акалтын",
        "type": "31"
    },
    "1724228830": {
        "en": "Mehnatobod",
        "uz": "Mehnatobod",
        "ru": "Мехнатабад",
        "type": "31"
    },
    "1724228832": {
        "en": "Mirzacho'l",
        "uz": "Mirzacho'l",
        "ru": "Мирзачуль",
        "type": "31"
    },
    "1724228835": {
        "en": "Navbahor",
        "uz": "Navbahor",
        "ru": "Навбахор",
        "type": "31"
    },
    "1724228838": {
        "en": "Toshkent",
        "uz": "Toshkent",
        "ru": "Ташкент",
        "type": "31"
    },
    "1724228845": {
        "en": "Birlashgan",
        "uz": "Birlashgan",
        "ru": "Биpлашган",
        "type": "31"
    },
    "1724228860": {
        "en": "Nurafshon",
        "uz": "Nurafshon",
        "ru": "Нуpафшан",
        "type": "31"
    },
    "1724228869": {
        "en": "Yo'ldoshobod",
        "uz": "Yo'ldoshobod",
        "ru": "Юлдашабад",
        "type": "31"
    },
    "1724231501": {
        "en": "Sirdaryo",
        "uz": "Sirdaryo",
        "ru": "Сыpдаpья",
        "type": "23"
    },
    "1724231503": {
        "en": "Baxt",
        "uz": "Baxt",
        "ru": "Бахт",
        "type": "23"
    },
    "1724231552": {
        "en": "Quyosh",
        "uz": "Quyosh",
        "ru": "Куеш",
        "type": "24"
    },
    "1724231553": {
        "en": "Malik",
        "uz": "Malik",
        "ru": "Малек",
        "type": "24"
    },
    "1724231554": {
        "en": "Ziyokor",
        "uz": "Ziyokor",
        "ru": "Зиекор",
        "type": "24"
    },
    "1724231555": {
        "en": "J.Mamanov",
        "uz": "J.Mamanov",
        "ru": "Дж.Маманов",
        "type": "24"
    },
    "1724231811": {
        "en": "Xaqiqat",
        "uz": "Xaqiqat",
        "ru": "Хакикат",
        "type": "31"
    },
    "1724231822": {
        "en": "Turon",
        "uz": "Turon",
        "ru": "Туpон",
        "type": "31"
    },
    "1724231827": {
        "en": "Xalqobod",
        "uz": "Xalqobod",
        "ru": "Халкабад",
        "type": "31"
    },
    "1724231833": {
        "en": "Malik",
        "uz": "Malik",
        "ru": "Малик",
        "type": "31"
    },
    "1724231844": {
        "en": "Oydin",
        "uz": "Oydin",
        "ru": "Ойдин",
        "type": "31"
    },
    "1724231848": {
        "en": "Paxtazor",
        "uz": "Paxtazor",
        "ru": "Пахтазор",
        "type": "31"
    },
    "1724231855": {
        "en": "Sirdaryo",
        "uz": "Sirdaryo",
        "ru": "Сырдарья",
        "type": "31"
    },
    "1724231866": {
        "en": "Cho'lto'qay",
        "uz": "Cho'lto'qay",
        "ru": "Чултукай",
        "type": "31"
    },
    "1724231870": {
        "en": "Sholikor",
        "uz": "Sholikor",
        "ru": "Шаликор",
        "type": "31"
    },
    "1724235551": {
        "en": "Xovos",
        "uz": "Xovos",
        "ru": "Хавас",
        "type": "24"
    },
    "1724235553": {
        "en": "Gulbahor",
        "uz": "Gulbahor",
        "ru": "Гулбахор",
        "type": "24"
    },
    "1724235805": {
        "en": "Binokor",
        "uz": "Binokor",
        "ru": "Бинокор",
        "type": "31"
    },
    "1724235808": {
        "en": "Gulbahor",
        "uz": "Gulbahor",
        "ru": "Гульбахор",
        "type": "31"
    },
    "1724235813": {
        "en": "Zafarobod",
        "uz": "Zafarobod",
        "ru": "Зафарабад",
        "type": "31"
    },
    "1724235817": {
        "en": "Paxtakor",
        "uz": "Paxtakor",
        "ru": "Пахтакор",
        "type": "31"
    },
    "1724235820": {
        "en": "Soxibkor",
        "uz": "Soxibkor",
        "ru": "Сахибкор",
        "type": "31"
    },
    "1724235821": {
        "en": "Turkiston",
        "uz": "Turkiston",
        "ru": "Туpкистан",
        "type": "31"
    },
    "1724235822": {
        "en": "Farxod",
        "uz": "Farxod",
        "ru": "Фархад",
        "type": "31"
    },
    "1724235835": {
        "en": "Xovotog'",
        "uz": "Xovotog'",
        "ru": "Хаватаг",
        "type": "31"
    },
    "1724235837": {
        "en": "Xusnobod",
        "uz": "Xusnobod",
        "ru": "Хуснабад",
        "type": "31"
    },
    "1724235839": {
        "en": "Chamanzor",
        "uz": "Chamanzor",
        "ru": "Чаманзар",
        "type": "31"
    },
    "1724235843": {
        "en": "Qahramon",
        "uz": "Qahramon",
        "ru": "Кахрамон",
        "type": "31"
    },
    "1724401807": {
        "en": "Ulug'obod",
        "uz": "Ulug'obod",
        "ru": "Улугабад",
        "type": "31"
    },
    "1724401810": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "31"
    },
    "1724401815": {
        "en": "Bahor",
        "uz": "Bahor",
        "ru": "Бахор",
        "type": "31"
    },
    "1726269558": {
        "en": "Ulug'bek",
        "uz": "Ulug'bek",
        "ru": "Улугбек",
        "type": "24"
    },
    "1727206501": {
        "en": "Oqqo'rg'on",
        "uz": "Oqqo'rg'on",
        "ru": "Аккурган",
        "type": "23"
    },
    "1727206554": {
        "en": "Olimkent",
        "uz": "Olimkent",
        "ru": "Алимкент",
        "type": "24"
    },
    "1727206558": {
        "en": "Hamzaobod",
        "uz": "Hamzaobod",
        "ru": "Хамзаабад",
        "type": "24"
    },
    "1727206804": {
        "en": "Oytamg'ali",
        "uz": "Oytamg'ali",
        "ru": "Айтамгали",
        "type": "31"
    },
    "1727206806": {
        "en": "Oqqo'rg'on",
        "uz": "Oqqo'rg'on",
        "ru": "Аккурган",
        "type": "31"
    },
    "1727206808": {
        "en": "Achchi",
        "uz": "Achchi",
        "ru": "Аччи",
        "type": "31"
    },
    "1727206820": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "31"
    },
    "1727206822": {
        "en": "Zarbdor",
        "uz": "Zarbdor",
        "ru": "Зарбдар",
        "type": "31"
    },
    "1727206824": {
        "en": "Shoxruxiya",
        "uz": "Shoxruxiya",
        "ru": "Шохрухия",
        "type": "31"
    },
    "1727206838": {
        "en": "Erkinlik",
        "uz": "Erkinlik",
        "ru": "Эpкинлик",
        "type": "31"
    },
    "1727206846": {
        "en": "Zafar",
        "uz": "Zafar",
        "ru": "Зафар",
        "type": "31"
    },
    "1727206854": {
        "en": "Toshto'g'on",
        "uz": "Toshto'g'on",
        "ru": "Таштуган",
        "type": "31"
    },
    "1727206865": {
        "en": "Eltamg'ali",
        "uz": "Eltamg'ali",
        "ru": "Элтамгалы",
        "type": "31"
    },
    "1727212552": {
        "en": "Yon-ariq",
        "uz": "Yon-ariq",
        "ru": "Ен-арик",
        "type": "24"
    },
    "1727212554": {
        "en": "Qora Xitoy",
        "uz": "Qora Xitoy",
        "ru": "Каракитай",
        "type": "24"
    },
    "1727212556": {
        "en": "Telov",
        "uz": "Telov",
        "ru": "Телов",
        "type": "24"
    },
    "1727212558": {
        "en": "Eyvalek",
        "uz": "Eyvalek",
        "ru": "Эйвалек",
        "type": "24"
    },
    "1727212811": {
        "en": "Uvaq",
        "uz": "Uvaq",
        "ru": "Увак",
        "type": "31"
    },
    "1727212814": {
        "en": "Birlik",
        "uz": "Birlik",
        "ru": "Бирлик",
        "type": "31"
    },
    "1727212820": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "31"
    },
    "1727212822": {
        "en": "Qurama",
        "uz": "Qurama",
        "ru": "Курама",
        "type": "31"
    },
    "1727212833": {
        "en": "Qora xitoy",
        "uz": "Qora xitoy",
        "ru": "Карахтай",
        "type": "31"
    },
    "1727212846": {
        "en": "Ozodlik",
        "uz": "Ozodlik",
        "ru": "Озодлик",
        "type": "31"
    },
    "1727212854": {
        "en": "Susam",
        "uz": "Susam",
        "ru": "Сусам",
        "type": "31"
    },
    "1727212865": {
        "en": "Telov",
        "uz": "Telov",
        "ru": "Телав",
        "type": "31"
    },
    "1727220551": {
        "en": "Zafar",
        "uz": "Zafar",
        "ru": "Зафар",
        "type": "24"
    },
    "1727220553": {
        "en": "Bobur",
        "uz": "Bobur",
        "ru": "Бобур",
        "type": "24"
    },
    "1727220557": {
        "en": "Ko'rkam",
        "uz": "Ko'rkam",
        "ru": "Куркам",
        "type": "24"
    },
    "1727220559": {
        "en": "Xos",
        "uz": "Xos",
        "ru": "Хос",
        "type": "24"
    },
    "1727220561": {
        "en": "Gulzor",
        "uz": "Gulzor",
        "ru": "Гулзор",
        "type": "24"
    },
    "1727220804": {
        "en": "Mo'yinqum",
        "uz": "Mo'yinqum",
        "ru": "Муйинкум",
        "type": "31"
    },
    "1727220808": {
        "en": "Bahoriston",
        "uz": "Bahoriston",
        "ru": "Бахористан",
        "type": "31"
    },
    "1727220811": {
        "en": "Bekobod",
        "uz": "Bekobod",
        "ru": "Бекабад",
        "type": "31"
    },
    "1727220822": {
        "en": "Dalvarzin",
        "uz": "Dalvarzin",
        "ru": "Дальверзин",
        "type": "31"
    },
    "1727220825": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистан",
        "type": "31"
    },
    "1727220827": {
        "en": "Madaniyat",
        "uz": "Madaniyat",
        "ru": "Маданият",
        "type": "31"
    },
    "1727220835": {
        "en": "Jumabozor",
        "uz": "Jumabozor",
        "ru": "Джумабазар",
        "type": "31"
    },
    "1727220846": {
        "en": "Qiyot",
        "uz": "Qiyot",
        "ru": "Кият",
        "type": "31"
    },
    "1727220857": {
        "en": "Mehnatobod",
        "uz": "Mehnatobod",
        "ru": "Мехнатабад",
        "type": "31"
    },
    "1727220868": {
        "en": "Yangiqo'rg'on",
        "uz": "Yangiqo'rg'on",
        "ru": "Янгикургон",
        "type": "31"
    },
    "1727220879": {
        "en": "Chanoq",
        "uz": "Chanoq",
        "ru": "Чанак",
        "type": "31"
    },
    "1727220890": {
        "en": "Yangi hayot",
        "uz": "Yangi hayot",
        "ru": "Янгихаят",
        "type": "31"
    },
    "1727224501": {
        "en": "G'azalkent",
        "uz": "G'azalkent",
        "ru": "Газалкент",
        "type": "23"
    },
    "1727224554": {
        "en": "Iskandar",
        "uz": "Iskandar",
        "ru": "Искандар",
        "type": "24"
    },
    "1727224558": {
        "en": "Chorvoq",
        "uz": "Chorvoq",
        "ru": "Чарвак",
        "type": "24"
    },
    "1727224560": {
        "en": "Burchmullo",
        "uz": "Burchmullo",
        "ru": "Бурчмулло",
        "type": "24"
    },
    "1727224562": {
        "en": "Pargos",
        "uz": "Pargos",
        "ru": "Паргос",
        "type": "24"
    },
    "1727224564": {
        "en": "Sari qanli",
        "uz": "Sari qanli",
        "ru": "Сари Канли",
        "type": "24"
    },
    "1727224566": {
        "en": "Sobir Raximov",
        "uz": "Sobir Raximov",
        "ru": "Собир Рахимов",
        "type": "24"
    },
    "1727224568": {
        "en": "Soyliq",
        "uz": "Soyliq",
        "ru": "Сойлик",
        "type": "24"
    },
    "1727224572": {
        "en": "Talpin",
        "uz": "Talpin",
        "ru": "Талпин",
        "type": "24"
    },
    "1727224574": {
        "en": "Tulabe",
        "uz": "Tulabe",
        "ru": "Тулабе",
        "type": "24"
    },
    "1727224576": {
        "en": "Uyenqulsoy",
        "uz": "Uyenqulsoy",
        "ru": "Уенкулсай",
        "type": "24"
    },
    "1727224578": {
        "en": "Xumsan",
        "uz": "Xumsan",
        "ru": "Хумсон",
        "type": "24"
    },
    "1727224582": {
        "en": "Ho'ja",
        "uz": "Ho'ja",
        "ru": "Хужа",
        "type": "24"
    },
    "1727224584": {
        "en": "Xo'jakent",
        "uz": "Xo'jakent",
        "ru": "Хужакент",
        "type": "24"
    },
    "1727224586": {
        "en": "Chinor",
        "uz": "Chinor",
        "ru": "Чинор",
        "type": "24"
    },
    "1727224588": {
        "en": "Qoronqul",
        "uz": "Qoronqul",
        "ru": "Коронкул",
        "type": "24"
    },
    "1727224592": {
        "en": "Qurbonov nomli",
        "uz": "Qurbonov nomli",
        "ru": "Курбонов",
        "type": "24"
    },
    "1727224594": {
        "en": "Qo'shqo'rg'on",
        "uz": "Qo'shqo'rg'on",
        "ru": "Кушкурган",
        "type": "24"
    },
    "1727224810": {
        "en": "Bo'stonliq",
        "uz": "Bo'stonliq",
        "ru": "Бостанлык",
        "type": "31"
    },
    "1727224815": {
        "en": "Chimgan",
        "uz": "Chimgan",
        "ru": "Чимган",
        "type": "31"
    },
    "1727224822": {
        "en": "G'azalkent",
        "uz": "G'azalkent",
        "ru": "Газалкент",
        "type": "31"
    },
    "1727224827": {
        "en": "Xumsan",
        "uz": "Xumsan",
        "ru": "Хумсан",
        "type": "31"
    },
    "1727224833": {
        "en": "Dumaloq",
        "uz": "Dumaloq",
        "ru": "Думалак",
        "type": "31"
    },
    "1727224835": {
        "en": "Nanay",
        "uz": "Nanay",
        "ru": "Нанай",
        "type": "31"
    },
    "1727224838": {
        "en": "Qoramanas",
        "uz": "Qoramanas",
        "ru": "Караманас",
        "type": "31"
    },
    "1727224845": {
        "en": "Qo'shqo'rg'on",
        "uz": "Qo'shqo'rg'on",
        "ru": "Кошкурган",
        "type": "31"
    },
    "1727224850": {
        "en": "Chimboyliq",
        "uz": "Chimboyliq",
        "ru": "Чимбайлык",
        "type": "31"
    },
    "1727224856": {
        "en": "Soyliq",
        "uz": "Soyliq",
        "ru": "Сайлык",
        "type": "31"
    },
    "1727224860": {
        "en": "Sijjak",
        "uz": "Sijjak",
        "ru": "Сиджак",
        "type": "31"
    },
    "1727224865": {
        "en": "Pargos",
        "uz": "Pargos",
        "ru": "Паpгос",
        "type": "31"
    },
    "1727224867": {
        "en": "Pskom",
        "uz": "Pskom",
        "ru": "Пском",
        "type": "31"
    },
    "1727224878": {
        "en": "Xo'jakent",
        "uz": "Xo'jakent",
        "ru": "Хужакент",
        "type": "31"
    },
    "1727224889": {
        "en": "Xondoyliq",
        "uz": "Xondoyliq",
        "ru": "Хандайлык",
        "type": "31"
    },
    "1727224893": {
        "en": "Yangi ovul",
        "uz": "Yangi ovul",
        "ru": "Янгиаул",
        "type": "31"
    },
    "1727224895": {
        "en": "Azadbash",
        "uz": "Azadbash",
        "ru": "Азадбаш",
        "type": "31"
    },
    "1727224897": {
        "en": "Bog'iston",
        "uz": "Bog'iston",
        "ru": "Богустан",
        "type": "31"
    },
    "1727228501": {
        "en": "Bo'ka",
        "uz": "Bo'ka",
        "ru": "Бука",
        "type": "23"
    },
    "1727228803": {
        "en": "Iftixor",
        "uz": "Iftixor",
        "ru": "Ифтихор",
        "type": "31"
    },
    "1727228811": {
        "en": "Qoraqo'yli",
        "uz": "Qoraqo'yli",
        "ru": "Каракуйли",
        "type": "31"
    },
    "1727228822": {
        "en": "Turon",
        "uz": "Turon",
        "ru": "Туpон",
        "type": "31"
    },
    "1727228833": {
        "en": "Ko'korol",
        "uz": "Ko'korol",
        "ru": "Кокарал",
        "type": "31"
    },
    "1727228835": {
        "en": "Qo'shtepa",
        "uz": "Qo'shtepa",
        "ru": "Коштепа",
        "type": "31"
    },
    "1727228844": {
        "en": "Namuna",
        "uz": "Namuna",
        "ru": "Намуна",
        "type": "31"
    },
    "1727228855": {
        "en": "Rovot",
        "uz": "Rovot",
        "ru": "Рават",
        "type": "31"
    },
    "1727228866": {
        "en": "Chig'atoy",
        "uz": "Chig'atoy",
        "ru": "Чигатай",
        "type": "31"
    },
    "1727233501": {
        "en": "Do'stobod",
        "uz": "Do'stobod",
        "ru": "Дустобод",
        "type": "23"
    },
    "1727233552": {
        "en": "Qo'rg'oncha",
        "uz": "Qo'rg'oncha",
        "ru": "Курганча",
        "type": "24"
    },
    "1727233554": {
        "en": "Paxtazor",
        "uz": "Paxtazor",
        "ru": "Пахтазор",
        "type": "24"
    },
    "1727233804": {
        "en": "Gul",
        "uz": "Gul",
        "ru": "Гуль",
        "type": "31"
    },
    "1727233810": {
        "en": "Ketmontepa",
        "uz": "Ketmontepa",
        "ru": "Кетментепа",
        "type": "31"
    },
    "1727233815": {
        "en": "Maydontol",
        "uz": "Maydontol",
        "ru": "Майдантал",
        "type": "31"
    },
    "1727233830": {
        "en": "Qo'rg'oncha",
        "uz": "Qo'rg'oncha",
        "ru": "Курганча",
        "type": "31"
    },
    "1727233840": {
        "en": "Ma'naviyat",
        "uz": "Ma'naviyat",
        "ru": "Маънавият",
        "type": "31"
    },
    "1727233850": {
        "en": "Ma'rifat",
        "uz": "Ma'rifat",
        "ru": "Маърифат",
        "type": "31"
    },
    "1727233860": {
        "en": "O'zbekiston",
        "uz": "O'zbekiston",
        "ru": "Узбекистан",
        "type": "31"
    },
    "1727233870": {
        "en": "Toshovul",
        "uz": "Toshovul",
        "ru": "Ташаул",
        "type": "31"
    },
    "1727233872": {
        "en": "Toshloq",
        "uz": "Toshloq",
        "ru": "Ташлак",
        "type": "31"
    },
    "1727237552": {
        "en": "Eshonguzar",
        "uz": "Eshonguzar",
        "ru": "Эшангузар",
        "type": "24"
    },
    "1727237558": {
        "en": "O'rtaovul",
        "uz": "O'rtaovul",
        "ru": "Уртааул",
        "type": "24"
    },
    "1727237562": {
        "en": "Xonabod",
        "uz": "Xonabod",
        "ru": "Ханабад",
        "type": "24"
    },
    "1727237564": {
        "en": "Erkin",
        "uz": "Erkin",
        "ru": "Эркин",
        "type": "24"
    },
    "1727237566": {
        "en": "Quyoshli",
        "uz": "Quyoshli",
        "ru": "Куешли",
        "type": "24"
    },
    "1727237568": {
        "en": "Daliguzar",
        "uz": "Daliguzar",
        "ru": "Далигузар",
        "type": "24"
    },
    "1727237571": {
        "en": "Pastdarxon",
        "uz": "Pastdarxon",
        "ru": "Пасдархон",
        "type": "24"
    },
    "1727237572": {
        "en": "Tarnov",
        "uz": "Tarnov",
        "ru": "Тарнов",
        "type": "24"
    },
    "1727237574": {
        "en": "Zangiota",
        "uz": "Zangiota",
        "ru": "Зангиата",
        "type": "24"
    },
    "1727237576": {
        "en": "Nazarbek",
        "uz": "Nazarbek",
        "ru": "Назарбек",
        "type": "24"
    },
    "1727237578": {
        "en": "Axmad Yassaviy",
        "uz": "Axmad Yassaviy",
        "ru": "Ахмад Яссавий",
        "type": "24"
    },
    "1727237582": {
        "en": "Ulug'bek",
        "uz": "Ulug'bek",
        "ru": "Улугбек",
        "type": "24"
    },
    "1727237809": {
        "en": "Turkiston",
        "uz": "Turkiston",
        "ru": "Туркистон",
        "type": "31"
    },
    "1727237818": {
        "en": "Qatortol",
        "uz": "Qatortol",
        "ru": "Катартал",
        "type": "31"
    },
    "1727237832": {
        "en": "Chig'atoy-Oqtepa",
        "uz": "Chig'atoy-Oqtepa",
        "ru": "Чигатай-Актепа",
        "type": "31"
    },
    "1727237836": {
        "en": "Nazarbek",
        "uz": "Nazarbek",
        "ru": "Назарбек",
        "type": "31"
    },
    "1727237840": {
        "en": "Zangiota",
        "uz": "Zangiota",
        "ru": "Зангиата",
        "type": "31"
    },
    "1727237852": {
        "en": "O'zgarish",
        "uz": "O'zgarish",
        "ru": "Узгариш",
        "type": "31"
    },
    "1727237859": {
        "en": "Boz-su",
        "uz": "Boz-su",
        "ru": "Боз-су",
        "type": "31"
    },
    "1727237870": {
        "en": "Honobod",
        "uz": "Honobod",
        "ru": "Ханабад",
        "type": "31"
    },
    "1727237875": {
        "en": "Erkin",
        "uz": "Erkin",
        "ru": "Эркин",
        "type": "31"
    },
    "1727239551": {
        "en": "Yangibozor",
        "uz": "Yangibozor",
        "ru": "Янгибазар",
        "type": "24"
    },
    "1727239553": {
        "en": "Mirobod",
        "uz": "Mirobod",
        "ru": "Мирабад",
        "type": "24"
    },
    "1727239555": {
        "en": "Xitoy Tepa",
        "uz": "Xitoy Tepa",
        "ru": "Китай тепа",
        "type": "24"
    },
    "1727239806": {
        "en": "Oqovul",
        "uz": "Oqovul",
        "ru": "Акаоул",
        "type": "31"
    },
    "1727239812": {
        "en": "Arganchi",
        "uz": "Arganchi",
        "ru": "Арганчи",
        "type": "31"
    },
    "1727239823": {
        "en": "Bordonko'l",
        "uz": "Bordonko'l",
        "ru": "Барданкуль",
        "type": "31"
    },
    "1727239830": {
        "en": "Jambul",
        "uz": "Jambul",
        "ru": "Джамбул",
        "type": "31"
    },
    "1727239835": {
        "en": "Sakson ota",
        "uz": "Sakson ota",
        "ru": "Саксан-ата",
        "type": "31"
    },
    "1727239840": {
        "en": "Navro'z",
        "uz": "Navro'z",
        "ru": "Навруз",
        "type": "31"
    },
    "1727239867": {
        "en": "Istiqlol",
        "uz": "Istiqlol",
        "ru": "Истиклол",
        "type": "31"
    },
    "1727239882": {
        "en": "Surnkent",
        "uz": "Surnkent",
        "ru": "Суранкент",
        "type": "31"
    },
    "1727239885": {
        "en": "Tinchlik",
        "uz": "Tinchlik",
        "ru": "Тинчлик",
        "type": "31"
    },
    "1727248551": {
        "en": "Qibray",
        "uz": "Qibray",
        "ru": "Кибрай",
        "type": "24"
    },
    "1727248556": {
        "en": "Salar",
        "uz": "Salar",
        "ru": "Салар",
        "type": "24"
    },
    "1727248558": {
        "en": "Argin",
        "uz": "Argin",
        "ru": "Аргин",
        "type": "24"
    },
    "1727248559": {
        "en": "Taraqqiyot",
        "uz": "Taraqqiyot",
        "ru": "Тараккиет",
        "type": "24"
    },
    "1727248561": {
        "en": "Alisherobod",
        "uz": "Alisherobod",
        "ru": "Алишерабад",
        "type": "24"
    },
    "1727248563": {
        "en": "Geofizika",
        "uz": "Geofizika",
        "ru": "Геофизика",
        "type": "24"
    },
    "1727248565": {
        "en": "Do'rmon",
        "uz": "Do'rmon",
        "ru": "Дурмон",
        "type": "24"
    },
    "1727248567": {
        "en": "Yoshlik",
        "uz": "Yoshlik",
        "ru": "Ешлик",
        "type": "24"
    },
    "1727248569": {
        "en": "Ko'prik boshi",
        "uz": "Ko'prik boshi",
        "ru": "Куприк боши",
        "type": "24"
    },
    "1727248571": {
        "en": "Madaniyat",
        "uz": "Madaniyat",
        "ru": "Маданият",
        "type": "24"
    },
    "1727248573": {
        "en": "Mustaqillik",
        "uz": "Mustaqillik",
        "ru": "Мустакиллик",
        "type": "24"
    },
    "1727248575": {
        "en": "Nurafshon",
        "uz": "Nurafshon",
        "ru": "Нурафшон",
        "type": "24"
    },
    "1727248577": {
        "en": "Uymaut",
        "uz": "Uymaut",
        "ru": "Уймамут",
        "type": "24"
    },
    "1727248579": {
        "en": "Unqo'rg'on-1",
        "uz": "Unqo'rg'on-1",
        "ru": "Ункургон-1",
        "type": "24"
    },
    "1727248581": {
        "en": "O'tkir",
        "uz": "O'tkir",
        "ru": "Уткир",
        "type": "24"
    },
    "1727248583": {
        "en": "X.Amirov",
        "uz": "X.Amirov",
        "ru": "Х.Амиров",
        "type": "24"
    },
    "1727248811": {
        "en": "Baytqo'rg'on",
        "uz": "Baytqo'rg'on",
        "ru": "Байткурган",
        "type": "31"
    },
    "1727248820": {
        "en": "Yangiobod",
        "uz": "Yangiobod",
        "ru": "Янгиабад",
        "type": "31"
    },
    "1727248844": {
        "en": "Unqo'rg'on",
        "uz": "Unqo'rg'on",
        "ru": "Ункурган",
        "type": "31"
    },
    "1727248848": {
        "en": "Qipchoq",
        "uz": "Qipchoq",
        "ru": "Кипчак",
        "type": "31"
    },
    "1727248855": {
        "en": "Zafarobod",
        "uz": "Zafarobod",
        "ru": "Зафаробод",
        "type": "31"
    },
    "1727248860": {
        "en": "Oq-qovoq",
        "uz": "Oq-qovoq",
        "ru": "Окковок",
        "type": "31"
    },
    "1727248866": {
        "en": "Do'rmon",
        "uz": "Do'rmon",
        "ru": "Дурмон",
        "type": "31"
    },
    "1727248877": {
        "en": "Tuzel",
        "uz": "Tuzel",
        "ru": "Тузель",
        "type": "31"
    },
    "1727248888": {
        "en": "Chinobod",
        "uz": "Chinobod",
        "ru": "Чинабад",
        "type": "31"
    },
    "1727248895": {
        "en": "Yon-ariq",
        "uz": "Yon-ariq",
        "ru": "Енарык",
        "type": "31"
    },
    "1727249501": {
        "en": "Parkent",
        "uz": "Parkent",
        "ru": "Паркент",
        "type": "23"
    },
    "1727249553": {
        "en": "Quyosh",
        "uz": "Quyosh",
        "ru": "Куеш",
        "type": "24"
    },
    "1727249555": {
        "en": "Qo'rg'ontepa",
        "uz": "Qo'rg'ontepa",
        "ru": "Кургантепа",
        "type": "24"
    },
    "1727249557": {
        "en": "Chinorli",
        "uz": "Chinorli",
        "ru": "Чинорли",
        "type": "24"
    },
    "1727249811": {
        "en": "Zarkent",
        "uz": "Zarkent",
        "ru": "Заркент",
        "type": "31"
    },
    "1727249815": {
        "en": "Qoraqalpoq",
        "uz": "Qoraqalpoq",
        "ru": "Каракалпак",
        "type": "31"
    },
    "1727249817": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустан",
        "type": "31"
    },
    "1727249825": {
        "en": "Nomdanak",
        "uz": "Nomdanak",
        "ru": "Намданак",
        "type": "31"
    },
    "1727249830": {
        "en": "Parkent",
        "uz": "Parkent",
        "ru": "Паркент",
        "type": "31"
    },
    "1727249836": {
        "en": "So'qoq",
        "uz": "So'qoq",
        "ru": "Сукок",
        "type": "31"
    },
    "1727249850": {
        "en": "Xisarak",
        "uz": "Xisarak",
        "ru": "Хисарак",
        "type": "31"
    },
    "1727249855": {
        "en": "Boshqizilsoy",
        "uz": "Boshqizilsoy",
        "ru": "Бошкизилсой",
        "type": "31"
    },
    "1727249860": {
        "en": "Changi",
        "uz": "Changi",
        "ru": "Чанги",
        "type": "31"
    },
    "1727250501": {
        "en": "Pskent",
        "uz": "Pskent",
        "ru": "Пскент",
        "type": "23"
    },
    "1727250554": {
        "en": "Muratali",
        "uz": "Muratali",
        "ru": "Муротали",
        "type": "24"
    },
    "1727250558": {
        "en": "Said",
        "uz": "Said",
        "ru": "Саид",
        "type": "24"
    },
    "1727250811": {
        "en": "Oq tepa",
        "uz": "Oq tepa",
        "ru": "Актепа",
        "type": "31"
    },
    "1727250822": {
        "en": "Dungqo'rg'on",
        "uz": "Dungqo'rg'on",
        "ru": "Дунгкурган",
        "type": "31"
    },
    "1727250833": {
        "en": "Kelovchi",
        "uz": "Kelovchi",
        "ru": "Керавчи",
        "type": "31"
    },
    "1727250844": {
        "en": "Murotali",
        "uz": "Murotali",
        "ru": "Муратали",
        "type": "31"
    },
    "1727250855": {
        "en": "Koriz",
        "uz": "Koriz",
        "ru": "Кариз",
        "type": "31"
    },
    "1727250860": {
        "en": "Said",
        "uz": "Said",
        "ru": "Саид",
        "type": "31"
    },
    "1727253555": {
        "en": "Tuyabo'g'iz",
        "uz": "Tuyabo'g'iz",
        "ru": "Туябугуз",
        "type": "24"
    },
    "1727253561": {
        "en": "Kuchluk",
        "uz": "Kuchluk",
        "ru": "Кучлик",
        "type": "24"
    },
    "1727253565": {
        "en": "Qorasuv",
        "uz": "Qorasuv",
        "ru": "Корасув",
        "type": "24"
    },
    "1727253569": {
        "en": "Sholikor",
        "uz": "Sholikor",
        "ru": "Шоликор",
        "type": "24"
    },
    "1727253808": {
        "en": "Angor",
        "uz": "Angor",
        "ru": "Ангар",
        "type": "31"
    },
    "1727253813": {
        "en": "Qumovul",
        "uz": "Qumovul",
        "ru": "Кумовул",
        "type": "31"
    },
    "1727253820": {
        "en": "Qorasuv",
        "uz": "Qorasuv",
        "ru": "Карасу",
        "type": "31"
    },
    "1727253832": {
        "en": "Oq ota",
        "uz": "Oq ota",
        "ru": "Ок- ота",
        "type": "31"
    },
    "1727253834": {
        "en": "Haqiqat",
        "uz": "Haqiqat",
        "ru": "Хакикат",
        "type": "31"
    },
    "1727253841": {
        "en": "Navoiy nomli",
        "uz": "Navoiy nomli",
        "ru": "им. Навои",
        "type": "31"
    },
    "1727253849": {
        "en": "Yo'ng'ichqala",
        "uz": "Yo'ng'ichqala",
        "ru": "Юнучкала",
        "type": "31"
    },
    "1727253860": {
        "en": "Paxtaobod",
        "uz": "Paxtaobod",
        "ru": "Пахтаабад",
        "type": "31"
    },
    "1727253863": {
        "en": "Paxtakor",
        "uz": "Paxtakor",
        "ru": "Пахтакор",
        "type": "31"
    },
    "1727253865": {
        "en": "O'rtasaroy",
        "uz": "O'rtasaroy",
        "ru": "Урта-Сарай",
        "type": "31"
    },
    "1727253871": {
        "en": "Istiqbol",
        "uz": "Istiqbol",
        "ru": "Истикбол",
        "type": "31"
    },
    "1727253875": {
        "en": "Yangi turmush",
        "uz": "Yangi turmush",
        "ru": "Янгитурмуш",
        "type": "31"
    },
    "1727253880": {
        "en": "Uyshun",
        "uz": "Uyshun",
        "ru": "Уйшун",
        "type": "31"
    },
    "1727256501": {
        "en": "Chinoz",
        "uz": "Chinoz",
        "ru": "Чиназ",
        "type": "23"
    },
    "1727256553": {
        "en": "Olmazor",
        "uz": "Olmazor",
        "ru": "Алмазар",
        "type": "24"
    },
    "1727256555": {
        "en": "Yangi Chinoz",
        "uz": "Yangi Chinoz",
        "ru": "Янги Чиназ",
        "type": "24"
    },
    "1727256557": {
        "en": "Gulzorobod",
        "uz": "Gulzorobod",
        "ru": "Гулзорабад",
        "type": "24"
    },
    "1727256559": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "24"
    },
    "1727256561": {
        "en": "Paxta",
        "uz": "Paxta",
        "ru": "Пахта",
        "type": "24"
    },
    "1727256563": {
        "en": "A.Temur",
        "uz": "A.Temur",
        "ru": "А.Темур",
        "type": "24"
    },
    "1727256565": {
        "en": "Birlik",
        "uz": "Birlik",
        "ru": "Бирлик",
        "type": "24"
    },
    "1727256567": {
        "en": "Chorvador",
        "uz": "Chorvador",
        "ru": "Чорвадор",
        "type": "24"
    },
    "1727256569": {
        "en": "Kir",
        "uz": "Kir",
        "ru": "Кир",
        "type": "24"
    },
    "1727256813": {
        "en": "Isloxat",
        "uz": "Isloxat",
        "ru": "Ислохат",
        "type": "31"
    },
    "1727256815": {
        "en": "Eshonobod",
        "uz": "Eshonobod",
        "ru": "Эшонобод",
        "type": "31"
    },
    "1727256826": {
        "en": "Turkiston",
        "uz": "Turkiston",
        "ru": "Туpкистан",
        "type": "31"
    },
    "1727256836": {
        "en": "O'zbekiston",
        "uz": "O'zbekiston",
        "ru": "Узбекистан",
        "type": "31"
    },
    "1727256840": {
        "en": "Chinoz",
        "uz": "Chinoz",
        "ru": "Чиназ",
        "type": "31"
    },
    "1727256853": {
        "en": "Eski Toshkent",
        "uz": "Eski Toshkent",
        "ru": "Эски-Ташкент",
        "type": "31"
    },
    "1727256860": {
        "en": "Ko'tarma",
        "uz": "Ko'tarma",
        "ru": "Кутарма",
        "type": "31"
    },
    "1727256864": {
        "en": "Yollama",
        "uz": "Yollama",
        "ru": "Яллама",
        "type": "31"
    },
    "1727259553": {
        "en": "Gulbahor",
        "uz": "Gulbahor",
        "ru": "Гульбахор",
        "type": "24"
    },
    "1727259555": {
        "en": "Bozsu",
        "uz": "Bozsu",
        "ru": "Бозсу",
        "type": "24"
    },
    "1727259557": {
        "en": "Nov",
        "uz": "Nov",
        "ru": "Нов",
        "type": "24"
    },
    "1727259559": {
        "en": "Kirsadoq",
        "uz": "Kirsadoq",
        "ru": "Кирсадок",
        "type": "24"
    },
    "1727259563": {
        "en": "Qovunchi",
        "uz": "Qovunchi",
        "ru": "Ковунчи",
        "type": "24"
    },
    "1727259804": {
        "en": "Yo'g'ontepa",
        "uz": "Yo'g'ontepa",
        "ru": "Йугонтепа",
        "type": "31"
    },
    "1727259814": {
        "en": "Halqobod",
        "uz": "Halqobod",
        "ru": "Халкабад",
        "type": "31"
    },
    "1727259825": {
        "en": "Xonqo'rg'on",
        "uz": "Xonqo'rg'on",
        "ru": "Хонкургон",
        "type": "31"
    },
    "1727259834": {
        "en": "Navbahor",
        "uz": "Navbahor",
        "ru": "Навбахор",
        "type": "31"
    },
    "1727259837": {
        "en": "Niyozbosh",
        "uz": "Niyozbosh",
        "ru": "Ниязбаш",
        "type": "31"
    },
    "1727259848": {
        "en": "Qo'sh yog'och",
        "uz": "Qo'sh yog'och",
        "ru": "Кушегоч",
        "type": "31"
    },
    "1727259871": {
        "en": "Sho'ralisoy",
        "uz": "Sho'ralisoy",
        "ru": "Шуралисай",
        "type": "31"
    },
    "1727259882": {
        "en": "Eski Qovunchi",
        "uz": "Eski Qovunchi",
        "ru": "Эски-Каунчи",
        "type": "31"
    },
    "1727265501": {
        "en": "Keles",
        "uz": "Keles",
        "ru": "Келес",
        "type": "23"
    },
    "1727265553": {
        "en": "Z.Jalilov",
        "uz": "Z.Jalilov",
        "ru": "З.Жалилов",
        "type": "24"
    },
    "1727265555": {
        "en": "Ko'k saroy",
        "uz": "Ko'k saroy",
        "ru": "Куксарай",
        "type": "24"
    },
    "1727265557": {
        "en": "Kensoy",
        "uz": "Kensoy",
        "ru": "Кенсай",
        "type": "24"
    },
    "1727265559": {
        "en": "Sabzavot",
        "uz": "Sabzavot",
        "ru": "Сабзавот",
        "type": "24"
    },
    "1727265563": {
        "en": "M.Fozilov",
        "uz": "M.Fozilov",
        "ru": "М.Фозилов",
        "type": "24"
    },
    "1727265565": {
        "en": "Shamsiobod",
        "uz": "Shamsiobod",
        "ru": "Шамсиабад",
        "type": "24"
    },
    "1727265567": {
        "en": "Chig'atoy",
        "uz": "Chig'atoy",
        "ru": "Чигатай",
        "type": "24"
    },
    "1727265569": {
        "en": "Hasanboy",
        "uz": "Hasanboy",
        "ru": "Хасанбой",
        "type": "24"
    },
    "1727265573": {
        "en": "Qashqarlik",
        "uz": "Qashqarlik",
        "ru": "Кашкарлик",
        "type": "24"
    },
    "1727265811": {
        "en": "Ko'k-terak",
        "uz": "Ko'k-terak",
        "ru": "Кук-Терак",
        "type": "31"
    },
    "1727265813": {
        "en": "Chuvalachi",
        "uz": "Chuvalachi",
        "ru": "Чувалачи",
        "type": "31"
    },
    "1727265816": {
        "en": "Masalboy",
        "uz": "Masalboy",
        "ru": "Масалбай",
        "type": "31"
    },
    "1727265819": {
        "en": "Qizg'aldoq",
        "uz": "Qizg'aldoq",
        "ru": "Кизгалдак",
        "type": "31"
    },
    "1727265825": {
        "en": "Ko'k Saroy",
        "uz": "Ko'k Saroy",
        "ru": "Куксарай",
        "type": "31"
    },
    "1727265828": {
        "en": "Hasanboy",
        "uz": "Hasanboy",
        "ru": "Хасанбай",
        "type": "31"
    },
    "1727265833": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистан",
        "type": "31"
    },
    "1727265836": {
        "en": "Yunusobod",
        "uz": "Yunusobod",
        "ru": "Юнусабад",
        "type": "31"
    },
    "1727265839": {
        "en": "Choshtepa",
        "uz": "Choshtepa",
        "ru": "Чаштепа",
        "type": "31"
    },
    "1727407505": {
        "en": "Yangiobod",
        "uz": "Yangiobod",
        "ru": "Янгиабад",
        "type": "23"
    },
    "1727407554": {
        "en": "Krasnogorsk",
        "uz": "Krasnogorsk",
        "ru": "Красногорск",
        "type": "24"
    },
    "1727407558": {
        "en": "Nurobod",
        "uz": "Nurobod",
        "ru": "Нурабад",
        "type": "24"
    },
    "1730203508": {
        "en": "Tinchlik",
        "uz": "Tinchlik",
        "ru": "Тинчлик",
        "type": "23"
    },
    "1730203551": {
        "en": "Oltiariq",
        "uz": "Oltiariq",
        "ru": "Алтыарык",
        "type": "24"
    },
    "1730203552": {
        "en": "Chinor",
        "uz": "Chinor",
        "ru": "Чинор",
        "type": "24"
    },
    "1730203554": {
        "en": "Azimobod",
        "uz": "Azimobod",
        "ru": "Азимабад",
        "type": "24"
    },
    "1730203556": {
        "en": "Bo'rbaliq",
        "uz": "Bo'rbaliq",
        "ru": "Бурбалик",
        "type": "24"
    },
    "1730203558": {
        "en": "Djurek",
        "uz": "Djurek",
        "ru": "Джурек",
        "type": "24"
    },
    "1730203562": {
        "en": "Zilxa",
        "uz": "Zilxa",
        "ru": "Зилха",
        "type": "24"
    },
    "1730203564": {
        "en": "Katput",
        "uz": "Katput",
        "ru": "Катпут",
        "type": "24"
    },
    "1730203566": {
        "en": "Oqbo'yra",
        "uz": "Oqbo'yra",
        "ru": "Окбуйра",
        "type": "24"
    },
    "1730203568": {
        "en": "Povulg'on",
        "uz": "Povulg'on",
        "ru": "Повулган",
        "type": "24"
    },
    "1730203570": {
        "en": "Poloson",
        "uz": "Poloson",
        "ru": "Паласан",
        "type": "24"
    },
    "1730203572": {
        "en": "Chordara",
        "uz": "Chordara",
        "ru": "Чордара",
        "type": "24"
    },
    "1730203574": {
        "en": "Eskiarab",
        "uz": "Eskiarab",
        "ru": "Эскиараб",
        "type": "24"
    },
    "1730203576": {
        "en": "Yangiarab",
        "uz": "Yangiarab",
        "ru": "Янгиараб",
        "type": "24"
    },
    "1730203578": {
        "en": "Yangiqo'rg'on",
        "uz": "Yangiqo'rg'on",
        "ru": "Янгикурган",
        "type": "24"
    },
    "1730203804": {
        "en": "Oqbo'yra",
        "uz": "Oqbo'yra",
        "ru": "Акбуйра",
        "type": "31"
    },
    "1730203806": {
        "en": "Oltiariq",
        "uz": "Oltiariq",
        "ru": "Алтыарык",
        "type": "31"
    },
    "1730203810": {
        "en": "Yangiarab",
        "uz": "Yangiarab",
        "ru": "Янгиараб",
        "type": "31"
    },
    "1730203812": {
        "en": "Bo'rbaliq",
        "uz": "Bo'rbaliq",
        "ru": "Бурбалык",
        "type": "31"
    },
    "1730203820": {
        "en": "G'ayrat",
        "uz": "G'ayrat",
        "ru": "Гайрат",
        "type": "31"
    },
    "1730203824": {
        "en": "Djurek",
        "uz": "Djurek",
        "ru": "Джурек",
        "type": "31"
    },
    "1730203840": {
        "en": "Qiziltepa",
        "uz": "Qiziltepa",
        "ru": "Кызылтепа",
        "type": "31"
    },
    "1730203842": {
        "en": "Poloson",
        "uz": "Poloson",
        "ru": "Паласан",
        "type": "31"
    },
    "1730203848": {
        "en": "Fayziobod",
        "uz": "Fayziobod",
        "ru": "Файзиабад",
        "type": "31"
    },
    "1730203870": {
        "en": "Toshqo'rg'on",
        "uz": "Toshqo'rg'on",
        "ru": "Тошкургон",
        "type": "31"
    },
    "1730203875": {
        "en": "Kapchugay",
        "uz": "Kapchugay",
        "ru": "Капчугай",
        "type": "31"
    },
    "1730203881": {
        "en": "Povulg'on",
        "uz": "Povulg'on",
        "ru": "Павулган",
        "type": "31"
    },
    "1730203885": {
        "en": "Katput",
        "uz": "Katput",
        "ru": "Катпут",
        "type": "31"
    },
    "1730203890": {
        "en": "Zilxa",
        "uz": "Zilxa",
        "ru": "Зилха",
        "type": "31"
    },
    "1730203895": {
        "en": "Azimobod",
        "uz": "Azimobod",
        "ru": "Азимабад",
        "type": "31"
    },
    "1730206553": {
        "en": "Boltako'l",
        "uz": "Boltako'l",
        "ru": "Болтакул",
        "type": "24"
    },
    "1730206555": {
        "en": "Gishtmon",
        "uz": "Gishtmon",
        "ru": "Гиштмон",
        "type": "24"
    },
    "1730206557": {
        "en": "Do'rmon",
        "uz": "Do'rmon",
        "ru": "Дурмон",
        "type": "24"
    },
    "1730206559": {
        "en": "Katta Beshkapa",
        "uz": "Katta Beshkapa",
        "ru": "Катта бешкапа",
        "type": "24"
    },
    "1730206561": {
        "en": "Qizil ariq",
        "uz": "Qizil ariq",
        "ru": "Кизиларик",
        "type": "24"
    },
    "1730206563": {
        "en": "Qorajiyda",
        "uz": "Qorajiyda",
        "ru": "Каражийда",
        "type": "24"
    },
    "1730206565": {
        "en": "Qorakaltak",
        "uz": "Qorakaltak",
        "ru": "Каракалтак",
        "type": "24"
    },
    "1730206567": {
        "en": "Qumtepa",
        "uz": "Qumtepa",
        "ru": "Кумтепа",
        "type": "24"
    },
    "1730206569": {
        "en": "Quyi Oqtepa",
        "uz": "Quyi Oqtepa",
        "ru": "Куйи Октепа",
        "type": "24"
    },
    "1730206571": {
        "en": "Sarmozor",
        "uz": "Sarmozor",
        "ru": "Сармозор",
        "type": "24"
    },
    "1730206573": {
        "en": "Xotinariq",
        "uz": "Xotinariq",
        "ru": "Хотинарык",
        "type": "24"
    },
    "1730206575": {
        "en": "Shahartepa",
        "uz": "Shahartepa",
        "ru": "Шахартепа",
        "type": "24"
    },
    "1730206577": {
        "en": "Eshonguzar",
        "uz": "Eshonguzar",
        "ru": "Эшонгузар",
        "type": "24"
    },
    "1730206579": {
        "en": "Yangiariq",
        "uz": "Yangiariq",
        "ru": "Янгиарык",
        "type": "24"
    },
    "1730206806": {
        "en": "Fayz",
        "uz": "Fayz",
        "ru": "Файз",
        "type": "31"
    },
    "1730206815": {
        "en": "Do'rmon",
        "uz": "Do'rmon",
        "ru": "Дуpман",
        "type": "31"
    },
    "1730206822": {
        "en": "Qoraqo'shchi",
        "uz": "Qoraqo'shchi",
        "ru": "Каракушчи",
        "type": "31"
    },
    "1730206825": {
        "en": "Qumtepa",
        "uz": "Qumtepa",
        "ru": "Кумтепа",
        "type": "31"
    },
    "1730206827": {
        "en": "Sarmozor",
        "uz": "Sarmozor",
        "ru": "Саримазар",
        "type": "31"
    },
    "1730206830": {
        "en": "Solijonobod",
        "uz": "Solijonobod",
        "ru": "Салиджанабад",
        "type": "31"
    },
    "1730206834": {
        "en": "Langar",
        "uz": "Langar",
        "ru": "Лянгар",
        "type": "31"
    },
    "1730206841": {
        "en": "Paxtakor",
        "uz": "Paxtakor",
        "ru": "Пахтакор",
        "type": "31"
    },
    "1730206854": {
        "en": "O'qchi",
        "uz": "O'qchi",
        "ru": "Укчи",
        "type": "31"
    },
    "1730206862": {
        "en": "Xalqabod",
        "uz": "Xalqabod",
        "ru": "Халкабад",
        "type": "31"
    },
    "1730206876": {
        "en": "Shahartepa",
        "uz": "Shahartepa",
        "ru": "Шахартепа",
        "type": "31"
    },
    "1730206885": {
        "en": "Yo'ldoshobod",
        "uz": "Yo'ldoshobod",
        "ru": "Юлдашабад",
        "type": "31"
    },
    "1730206890": {
        "en": "Loyson",
        "uz": "Loyson",
        "ru": "Лайсан",
        "type": "31"
    },
    "1730206895": {
        "en": "Boltako'l",
        "uz": "Boltako'l",
        "ru": "Балтакуль",
        "type": "31"
    },
    "1730206898": {
        "en": "G'ishtmon",
        "uz": "G'ishtmon",
        "ru": "Гиштман",
        "type": "31"
    },
    "1730209551": {
        "en": "Bog'dod",
        "uz": "Bog'dod",
        "ru": "Багдад",
        "type": "24"
    },
    "1730209553": {
        "en": "Amirobod",
        "uz": "Amirobod",
        "ru": "Амиробод",
        "type": "24"
    },
    "1730209555": {
        "en": "Maylavoy",
        "uz": "Maylavoy",
        "ru": "Майлавой",
        "type": "24"
    },
    "1730209557": {
        "en": "Oltin vodiy",
        "uz": "Oltin vodiy",
        "ru": "Олтин водий",
        "type": "24"
    },
    "1730209559": {
        "en": "Bog'ishamol",
        "uz": "Bog'ishamol",
        "ru": "Богишамол",
        "type": "24"
    },
    "1730209561": {
        "en": "Bordon",
        "uz": "Bordon",
        "ru": "Бордон",
        "type": "24"
    },
    "1730209563": {
        "en": "Do'rmoncha",
        "uz": "Do'rmoncha",
        "ru": "Дурманча",
        "type": "24"
    },
    "1730209565": {
        "en": "Irgali",
        "uz": "Irgali",
        "ru": "Иргали",
        "type": "24"
    },
    "1730209567": {
        "en": "Qaroqchitol",
        "uz": "Qaroqchitol",
        "ru": "Каракчитол",
        "type": "24"
    },
    "1730209569": {
        "en": "Kaxat",
        "uz": "Kaxat",
        "ru": "Кахат",
        "type": "24"
    },
    "1730209571": {
        "en": "Qirqboldi",
        "uz": "Qirqboldi",
        "ru": "Киркболды",
        "type": "24"
    },
    "1730209573": {
        "en": "Konizar",
        "uz": "Konizar",
        "ru": "Конизар",
        "type": "24"
    },
    "1730209575": {
        "en": "Qo'shtegirmon",
        "uz": "Qo'shtegirmon",
        "ru": "Куштегирмон",
        "type": "24"
    },
    "1730209577": {
        "en": "Matqulobod",
        "uz": "Matqulobod",
        "ru": "Маткулабад",
        "type": "24"
    },
    "1730209579": {
        "en": "Mirzaobod",
        "uz": "Mirzaobod",
        "ru": "Мирзаабад",
        "type": "24"
    },
    "1730209581": {
        "en": "Samandarak",
        "uz": "Samandarak",
        "ru": "Самандарак",
        "type": "24"
    },
    "1730209583": {
        "en": "Samarqand",
        "uz": "Samarqand",
        "ru": "Самарканд",
        "type": "24"
    },
    "1730209585": {
        "en": "O'ltarma",
        "uz": "O'ltarma",
        "ru": "Ултарма",
        "type": "24"
    },
    "1730209587": {
        "en": "Xusnobod",
        "uz": "Xusnobod",
        "ru": "Хуснабад",
        "type": "24"
    },
    "1730209589": {
        "en": "Chekmirzaobod",
        "uz": "Chekmirzaobod",
        "ru": "Чекмирзаабад",
        "type": "24"
    },
    "1730209591": {
        "en": "Churindi",
        "uz": "Churindi",
        "ru": "Чуринди",
        "type": "24"
    },
    "1730209810": {
        "en": "Zafarobod",
        "uz": "Zafarobod",
        "ru": "Зафарабад",
        "type": "31"
    },
    "1730209820": {
        "en": "Amirobod",
        "uz": "Amirobod",
        "ru": "Амирабад",
        "type": "31"
    },
    "1730209823": {
        "en": "Qaroqchitol",
        "uz": "Qaroqchitol",
        "ru": "Каракчитал",
        "type": "31"
    },
    "1730209824": {
        "en": "Matqulobod",
        "uz": "Matqulobod",
        "ru": "Маткулабад",
        "type": "31"
    },
    "1730209826": {
        "en": "Tinchlik",
        "uz": "Tinchlik",
        "ru": "Тинчлик",
        "type": "31"
    },
    "1730209834": {
        "en": "Paxtaobod",
        "uz": "Paxtaobod",
        "ru": "Пахтаабад",
        "type": "31"
    },
    "1730209845": {
        "en": "O'ltarma",
        "uz": "O'ltarma",
        "ru": "Ультарма",
        "type": "31"
    },
    "1730209856": {
        "en": "Chuvalanchi",
        "uz": "Chuvalanchi",
        "ru": "Чуваланчи",
        "type": "31"
    },
    "1730209860": {
        "en": "Do'rmancha",
        "uz": "Do'rmancha",
        "ru": "Дорманча",
        "type": "31"
    },
    "1730209865": {
        "en": "Samarqand",
        "uz": "Samarqand",
        "ru": "Самарканд",
        "type": "31"
    },
    "1730212551": {
        "en": "Ibrat",
        "uz": "Ibrat",
        "ru": "Ибрат",
        "type": "24"
    },
    "1730212553": {
        "en": "Yuqori Bachqir",
        "uz": "Yuqori Bachqir",
        "ru": "Юкори Бачкир",
        "type": "24"
    },
    "1730212555": {
        "en": "Quyi Bachqir",
        "uz": "Quyi Bachqir",
        "ru": "Куйи Бачкир",
        "type": "24"
    },
    "1730212557": {
        "en": "Chinobod",
        "uz": "Chinobod",
        "ru": "Чинабад",
        "type": "24"
    },
    "1730212559": {
        "en": "Buvayda",
        "uz": "Buvayda",
        "ru": "Бувайда",
        "type": "24"
    },
    "1730212561": {
        "en": "Zarbuloq",
        "uz": "Zarbuloq",
        "ru": "Зарбулок",
        "type": "24"
    },
    "1730212563": {
        "en": "Qum",
        "uz": "Qum",
        "ru": "Кум",
        "type": "24"
    },
    "1730212565": {
        "en": "Yuqori Nayman",
        "uz": "Yuqori Nayman",
        "ru": "Юкори Найман",
        "type": "24"
    },
    "1730212567": {
        "en": "Oqqo'rg'on",
        "uz": "Oqqo'rg'on",
        "ru": "Аккурган",
        "type": "24"
    },
    "1730212569": {
        "en": "Quyi Urganji",
        "uz": "Quyi Urganji",
        "ru": "Куйи Урганжи",
        "type": "24"
    },
    "1730212806": {
        "en": "Oqqo'rg'on",
        "uz": "Oqqo'rg'on",
        "ru": "Аккурган",
        "type": "31"
    },
    "1730212810": {
        "en": "Alqor",
        "uz": "Alqor",
        "ru": "Алкар",
        "type": "31"
    },
    "1730212820": {
        "en": "Begobod",
        "uz": "Begobod",
        "ru": "Бекабад",
        "type": "31"
    },
    "1730212830": {
        "en": "Beshterak",
        "uz": "Beshterak",
        "ru": "Бештерак",
        "type": "31"
    },
    "1730212840": {
        "en": "Buvayda",
        "uz": "Buvayda",
        "ru": "Бувайда",
        "type": "31"
    },
    "1730212850": {
        "en": "Jalayer",
        "uz": "Jalayer",
        "ru": "Джалаер",
        "type": "31"
    },
    "1730212860": {
        "en": "Qo'ng'irot",
        "uz": "Qo'ng'irot",
        "ru": "Кунград",
        "type": "31"
    },
    "1730212862": {
        "en": "Qo'rg'onobod",
        "uz": "Qo'rg'onobod",
        "ru": "Курганабад",
        "type": "31"
    },
    "1730212866": {
        "en": "Uzumzor",
        "uz": "Uzumzor",
        "ru": "Узумзар",
        "type": "31"
    },
    "1730212869": {
        "en": "Yangiqadam",
        "uz": "Yangiqadam",
        "ru": "Янгикадам",
        "type": "31"
    },
    "1730212870": {
        "en": "Yangiqo'rg'on",
        "uz": "Yangiqo'rg'on",
        "ru": "Янгикурган",
        "type": "31"
    },
    "1730215501": {
        "en": "Beshariq",
        "uz": "Beshariq",
        "ru": "Бешарык",
        "type": "23"
    },
    "1730215553": {
        "en": "Nafosat",
        "uz": "Nafosat",
        "ru": "Нафосат",
        "type": "24"
    },
    "1730215556": {
        "en": "Zarqaynar",
        "uz": "Zarqaynar",
        "ru": "Заркайнар",
        "type": "24"
    },
    "1730215559": {
        "en": "Kapayangi",
        "uz": "Kapayangi",
        "ru": "Капаянги",
        "type": "24"
    },
    "1730215563": {
        "en": "Qumqishloq",
        "uz": "Qumqishloq",
        "ru": "Кумкишлак",
        "type": "24"
    },
    "1730215566": {
        "en": "Oqtovuq",
        "uz": "Oqtovuq",
        "ru": "Актовук",
        "type": "24"
    },
    "1730215569": {
        "en": "Rapqon",
        "uz": "Rapqon",
        "ru": "Рапкан",
        "type": "24"
    },
    "1730215573": {
        "en": "Tovul",
        "uz": "Tovul",
        "ru": "Товул",
        "type": "24"
    },
    "1730215576": {
        "en": "Uzun",
        "uz": "Uzun",
        "ru": "Узун",
        "type": "24"
    },
    "1730215579": {
        "en": "Chimboy",
        "uz": "Chimboy",
        "ru": "Чимбай",
        "type": "24"
    },
    "1730215583": {
        "en": "Manguobod",
        "uz": "Manguobod",
        "ru": "Мангуобод",
        "type": "24"
    },
    "1730215804": {
        "en": "Andarxon",
        "uz": "Andarxon",
        "ru": "Андархан",
        "type": "31"
    },
    "1730215811": {
        "en": "Beshariq",
        "uz": "Beshariq",
        "ru": "Бешарык",
        "type": "31"
    },
    "1730215815": {
        "en": "Vatan",
        "uz": "Vatan",
        "ru": "Ватан",
        "type": "31"
    },
    "1730215826": {
        "en": "Qorajiyda",
        "uz": "Qorajiyda",
        "ru": "Каражийда",
        "type": "31"
    },
    "1730215828": {
        "en": "Qashqar",
        "uz": "Qashqar",
        "ru": "Кашкар",
        "type": "31"
    },
    "1730215839": {
        "en": "Beshsari",
        "uz": "Beshsari",
        "ru": "Бешсари",
        "type": "31"
    },
    "1730215844": {
        "en": "Rapqon",
        "uz": "Rapqon",
        "ru": "Рапкан",
        "type": "31"
    },
    "1730215848": {
        "en": "Tovul",
        "uz": "Tovul",
        "ru": "Тавул",
        "type": "31"
    },
    "1730215855": {
        "en": "Yakkatut",
        "uz": "Yakkatut",
        "ru": "Яккатут",
        "type": "31"
    },
    "1730218501": {
        "en": "Quva",
        "uz": "Quva",
        "ru": "Кува",
        "type": "23"
    },
    "1730218552": {
        "en": "Sanoatchilar",
        "uz": "Sanoatchilar",
        "ru": "Саноатчилар",
        "type": "24"
    },
    "1730218553": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистон",
        "type": "24"
    },
    "1730218554": {
        "en": "Damariq",
        "uz": "Damariq",
        "ru": "Дамарик",
        "type": "24"
    },
    "1730218555": {
        "en": "Jalayer",
        "uz": "Jalayer",
        "ru": "Джалаер",
        "type": "24"
    },
    "1730218556": {
        "en": "Qayirma",
        "uz": "Qayirma",
        "ru": "Кайирма",
        "type": "24"
    },
    "1730218557": {
        "en": "Qaqir",
        "uz": "Qaqir",
        "ru": "Какир",
        "type": "24"
    },
    "1730218558": {
        "en": "Qandabuloq",
        "uz": "Qandabuloq",
        "ru": "Кандабулок",
        "type": "24"
    },
    "1730218559": {
        "en": "Qorashox",
        "uz": "Qorashox",
        "ru": "Карашох",
        "type": "24"
    },
    "1730218561": {
        "en": "Mustaqillik",
        "uz": "Mustaqillik",
        "ru": "Мустакиллик",
        "type": "24"
    },
    "1730218562": {
        "en": "Oltinariq",
        "uz": "Oltinariq",
        "ru": "Олтинарик",
        "type": "24"
    },
    "1730218563": {
        "en": "Pastki Xo'ja Xasan",
        "uz": "Pastki Xo'ja Xasan",
        "ru": "Пастки Хужа Хасан",
        "type": "24"
    },
    "1730218564": {
        "en": "Tolmozor",
        "uz": "Tolmozor",
        "ru": "Толмазор",
        "type": "24"
    },
    "1730218565": {
        "en": "Turk",
        "uz": "Turk",
        "ru": "Турк",
        "type": "24"
    },
    "1730218567": {
        "en": "O'zbek",
        "uz": "O'zbek",
        "ru": "Узбек",
        "type": "24"
    },
    "1730218569": {
        "en": "Yuziya",
        "uz": "Yuziya",
        "ru": "Юзия",
        "type": "24"
    },
    "1730218804": {
        "en": "Akbarabad",
        "uz": "Akbarabad",
        "ru": "Акбарабад",
        "type": "31"
    },
    "1730218813": {
        "en": "Baynalminal",
        "uz": "Baynalminal",
        "ru": "Байналминал",
        "type": "31"
    },
    "1730218826": {
        "en": "Dehqonobod",
        "uz": "Dehqonobod",
        "ru": "Дехканабад",
        "type": "31"
    },
    "1730218829": {
        "en": "Ittifoq",
        "uz": "Ittifoq",
        "ru": "Иттифок",
        "type": "31"
    },
    "1730218837": {
        "en": "Madaniyat",
        "uz": "Madaniyat",
        "ru": "Маданият",
        "type": "31"
    },
    "1730218842": {
        "en": "Iftixor",
        "uz": "Iftixor",
        "ru": "Ифтихор",
        "type": "31"
    },
    "1730218851": {
        "en": "Namuna",
        "uz": "Namuna",
        "ru": "Намуна",
        "type": "31"
    },
    "1730218862": {
        "en": "Bahor",
        "uz": "Bahor",
        "ru": "Бахор",
        "type": "31"
    },
    "1730218871": {
        "en": "Turkrovot",
        "uz": "Turkrovot",
        "ru": "Туркрават",
        "type": "31"
    },
    "1730218884": {
        "en": "Soyguzar",
        "uz": "Soyguzar",
        "ru": "Сойгузар",
        "type": "31"
    },
    "1730218886": {
        "en": "Yangihayot",
        "uz": "Yangihayot",
        "ru": "Янгихаят",
        "type": "31"
    },
    "1730221551": {
        "en": "Uchko'prik",
        "uz": "Uchko'prik",
        "ru": "Учкуприк",
        "type": "24"
    },
    "1730221553": {
        "en": "Begobod",
        "uz": "Begobod",
        "ru": "Бегабад",
        "type": "24"
    },
    "1730221555": {
        "en": "G'ijdan",
        "uz": "G'ijdan",
        "ru": "Гиждан",
        "type": "24"
    },
    "1730221557": {
        "en": "Katta Qashqar",
        "uz": "Katta Qashqar",
        "ru": "Катта кашкар",
        "type": "24"
    },
    "1730221559": {
        "en": "Qumariqobod",
        "uz": "Qumariqobod",
        "ru": "Кумарикобод",
        "type": "24"
    },
    "1730221561": {
        "en": "Bog'ibo'ston",
        "uz": "Bog'ibo'ston",
        "ru": "Богибустон",
        "type": "24"
    },
    "1730221563": {
        "en": "Mirzaxo'ja",
        "uz": "Mirzaxo'ja",
        "ru": "Мирзахужа",
        "type": "24"
    },
    "1730221565": {
        "en": "Palaxon",
        "uz": "Palaxon",
        "ru": "Палахон",
        "type": "24"
    },
    "1730221567": {
        "en": "Sobirjon",
        "uz": "Sobirjon",
        "ru": "Собиржан",
        "type": "24"
    },
    "1730221569": {
        "en": "Turg'oq",
        "uz": "Turg'oq",
        "ru": "Тургок",
        "type": "24"
    },
    "1730221571": {
        "en": "Yangiqishloq",
        "uz": "Yangiqishloq",
        "ru": "Янгикишлок",
        "type": "24"
    },
    "1730221816": {
        "en": "G'ijdon",
        "uz": "G'ijdon",
        "ru": "Гиждан",
        "type": "31"
    },
    "1730221828": {
        "en": "Kenagas",
        "uz": "Kenagas",
        "ru": "Кенагас",
        "type": "31"
    },
    "1730221839": {
        "en": "Navro'z",
        "uz": "Navro'z",
        "ru": "Навруз",
        "type": "31"
    },
    "1730221851": {
        "en": "Chorbog'",
        "uz": "Chorbog'",
        "ru": "Чарбог",
        "type": "31"
    },
    "1730221856": {
        "en": "Palaxon",
        "uz": "Palaxon",
        "ru": "Палахан",
        "type": "31"
    },
    "1730221859": {
        "en": "Sariqo'rg'on",
        "uz": "Sariqo'rg'on",
        "ru": "Сарыкурган",
        "type": "31"
    },
    "1730221862": {
        "en": "Uchko'prik",
        "uz": "Uchko'prik",
        "ru": "Учкуприк",
        "type": "31"
    },
    "1730221873": {
        "en": "Yangiqishloq",
        "uz": "Yangiqishloq",
        "ru": "Янгикишлак",
        "type": "31"
    },
    "1730221876": {
        "en": "Obod diyor",
        "uz": "Obod diyor",
        "ru": "Обод диер",
        "type": "31"
    },
    "1730224501": {
        "en": "Rishton",
        "uz": "Rishton",
        "ru": "Риштан",
        "type": "23"
    },
    "1730224552": {
        "en": "Avazboy",
        "uz": "Avazboy",
        "ru": "Авазбай",
        "type": "24"
    },
    "1730224554": {
        "en": "Beshkapa",
        "uz": "Beshkapa",
        "ru": "Бешкапа",
        "type": "24"
    },
    "1730224556": {
        "en": "Bujay",
        "uz": "Bujay",
        "ru": "Бужай",
        "type": "24"
    },
    "1730224558": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустан",
        "type": "24"
    },
    "1730224562": {
        "en": "Do'tir",
        "uz": "Do'tir",
        "ru": "Дутир",
        "type": "24"
    },
    "1730224564": {
        "en": "Saxovat",
        "uz": "Saxovat",
        "ru": "Саховат",
        "type": "24"
    },
    "1730224566": {
        "en": "Zoxidon",
        "uz": "Zoxidon",
        "ru": "Зохидан",
        "type": "24"
    },
    "1730224568": {
        "en": "Qayrag'och",
        "uz": "Qayrag'och",
        "ru": "Кайрагач",
        "type": "24"
    },
    "1730224572": {
        "en": "Oq-yer",
        "uz": "Oq-yer",
        "ru": "Ак-ер",
        "type": "24"
    },
    "1730224574": {
        "en": "Pandigon",
        "uz": "Pandigon",
        "ru": "Пандиган",
        "type": "24"
    },
    "1730224576": {
        "en": "To'da",
        "uz": "To'da",
        "ru": "Туда",
        "type": "24"
    },
    "1730224578": {
        "en": "O'yrat",
        "uz": "O'yrat",
        "ru": "Уйрат",
        "type": "24"
    },
    "1730224582": {
        "en": "Xurramobod",
        "uz": "Xurramobod",
        "ru": "Хуррамабад",
        "type": "24"
    },
    "1730224804": {
        "en": "Oq-oltin",
        "uz": "Oq-oltin",
        "ru": "Акалтын",
        "type": "31"
    },
    "1730224806": {
        "en": "Oq-yer",
        "uz": "Oq-yer",
        "ru": "Акъер",
        "type": "31"
    },
    "1730224823": {
        "en": "Beshkapa",
        "uz": "Beshkapa",
        "ru": "Бешкапа",
        "type": "31"
    },
    "1730224829": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустан",
        "type": "31"
    },
    "1730224835": {
        "en": "Mehnatobod",
        "uz": "Mehnatobod",
        "ru": "Мехнатабад",
        "type": "31"
    },
    "1730224846": {
        "en": "Rishton",
        "uz": "Rishton",
        "ru": "Риштан",
        "type": "31"
    },
    "1730224868": {
        "en": "Zoxidon",
        "uz": "Zoxidon",
        "ru": "Зохидон",
        "type": "31"
    },
    "1730224879": {
        "en": "To'da",
        "uz": "To'da",
        "ru": "Туда",
        "type": "31"
    },
    "1730224890": {
        "en": "O'smonxo'jayev",
        "uz": "O'smonxo'jayev",
        "ru": "им. Б. Усманходжаева",
        "type": "31"
    },
    "1730224895": {
        "en": "Yoyilma",
        "uz": "Yoyilma",
        "ru": "Яйилма",
        "type": "31"
    },
    "1730224897": {
        "en": "Qayrag'och",
        "uz": "Qayrag'och",
        "ru": "Кайрагач",
        "type": "31"
    },
    "1730226551": {
        "en": "Ravon",
        "uz": "Ravon",
        "ru": "Равон",
        "type": "24"
    },
    "1730226554": {
        "en": "Qal'a",
        "uz": "Qal'a",
        "ru": "Калъа",
        "type": "24"
    },
    "1730226557": {
        "en": "Sarikanda",
        "uz": "Sarikanda",
        "ru": "Сариканда",
        "type": "24"
    },
    "1730226561": {
        "en": "So'x",
        "uz": "So'x",
        "ru": "Сох",
        "type": "24"
    },
    "1730226564": {
        "en": "Tul",
        "uz": "Tul",
        "ru": "Тул",
        "type": "24"
    },
    "1730226567": {
        "en": "Hushyor",
        "uz": "Hushyor",
        "ru": "Хушер",
        "type": "24"
    },
    "1730226571": {
        "en": "Tarovatli",
        "uz": "Tarovatli",
        "ru": "Тароватли",
        "type": "24"
    },
    "1730226812": {
        "en": "Sohibkor",
        "uz": "Sohibkor",
        "ru": "Сохибкор",
        "type": "31"
    },
    "1730226840": {
        "en": "Ravon",
        "uz": "Ravon",
        "ru": "Раван",
        "type": "31"
    },
    "1730226857": {
        "en": "So'x",
        "uz": "So'x",
        "ru": "Сох",
        "type": "31"
    },
    "1730226893": {
        "en": "Hushyor",
        "uz": "Hushyor",
        "ru": "Хушъяр",
        "type": "31"
    },
    "1730227551": {
        "en": "Toshloq",
        "uz": "Toshloq",
        "ru": "Ташлак",
        "type": "24"
    },
    "1730227553": {
        "en": "Arabmozor",
        "uz": "Arabmozor",
        "ru": "Арабмозор",
        "type": "24"
    },
    "1730227555": {
        "en": "Axshak",
        "uz": "Axshak",
        "ru": "Ахшак",
        "type": "24"
    },
    "1730227557": {
        "en": "Varzak",
        "uz": "Varzak",
        "ru": "Варзак",
        "type": "24"
    },
    "1730227559": {
        "en": "Zarkent",
        "uz": "Zarkent",
        "ru": "Заркент",
        "type": "24"
    },
    "1730227561": {
        "en": "Qumariq",
        "uz": "Qumariq",
        "ru": "Кумарик",
        "type": "24"
    },
    "1730227563": {
        "en": "Quyi Nayman",
        "uz": "Quyi Nayman",
        "ru": "Куйи Найман",
        "type": "24"
    },
    "1730227565": {
        "en": "Sadda",
        "uz": "Sadda",
        "ru": "Садда",
        "type": "24"
    },
    "1730227567": {
        "en": "Turvat",
        "uz": "Turvat",
        "ru": "Турват",
        "type": "24"
    },
    "1730227569": {
        "en": "Yakkatut",
        "uz": "Yakkatut",
        "ru": "Яккатут",
        "type": "24"
    },
    "1730227810": {
        "en": "Axshak",
        "uz": "Axshak",
        "ru": "Ахшак",
        "type": "31"
    },
    "1730227815": {
        "en": "Quyi Yakkatut",
        "uz": "Quyi Yakkatut",
        "ru": "Куйи Яккатут",
        "type": "31"
    },
    "1730227823": {
        "en": "Varzak",
        "uz": "Varzak",
        "ru": "Варзак",
        "type": "31"
    },
    "1730227836": {
        "en": "Arabmozor",
        "uz": "Arabmozor",
        "ru": "Арабмазар",
        "type": "31"
    },
    "1730227849": {
        "en": "Qumariq",
        "uz": "Qumariq",
        "ru": "Кумарык",
        "type": "31"
    },
    "1730227853": {
        "en": "Nayman",
        "uz": "Nayman",
        "ru": "Найман",
        "type": "31"
    },
    "1730227855": {
        "en": "Naymanbo'ston",
        "uz": "Naymanbo'ston",
        "ru": "Найманбустан",
        "type": "31"
    },
    "1730227872": {
        "en": "Sadda",
        "uz": "Sadda",
        "ru": "Садда",
        "type": "31"
    },
    "1730227882": {
        "en": "Zarkent",
        "uz": "Zarkent",
        "ru": "Заркент",
        "type": "31"
    },
    "1730227885": {
        "en": "Qo'rg'oncha",
        "uz": "Qo'rg'oncha",
        "ru": "Курганча",
        "type": "31"
    },
    "1730230501": {
        "en": "Yaypan",
        "uz": "Yaypan",
        "ru": "Яйпан",
        "type": "23"
    },
    "1730230556": {
        "en": "Sho'rsuv",
        "uz": "Sho'rsuv",
        "ru": "Шорсу",
        "type": "24"
    },
    "1730230558": {
        "en": "Avg'on",
        "uz": "Avg'on",
        "ru": "Авгон",
        "type": "24"
    },
    "1730230562": {
        "en": "Dahana Qaqir",
        "uz": "Dahana Qaqir",
        "ru": "Дахана какир",
        "type": "24"
    },
    "1730230564": {
        "en": "Islom",
        "uz": "Islom",
        "ru": "Ислам",
        "type": "24"
    },
    "1730230566": {
        "en": "Katta Tagob",
        "uz": "Katta Tagob",
        "ru": "Катта Тагаб",
        "type": "24"
    },
    "1730230568": {
        "en": "Qizil Qaqir",
        "uz": "Qizil Qaqir",
        "ru": "Кизил какир",
        "type": "24"
    },
    "1730230570": {
        "en": "Kichik Tagob",
        "uz": "Kichik Tagob",
        "ru": "Кичик Тагаб",
        "type": "24"
    },
    "1730230572": {
        "en": "Sardoba",
        "uz": "Sardoba",
        "ru": "Сардоба",
        "type": "24"
    },
    "1730230574": {
        "en": "Kudash",
        "uz": "Kudash",
        "ru": "Кудаш",
        "type": "24"
    },
    "1730230576": {
        "en": "Kul elash",
        "uz": "Kul elash",
        "ru": "Кул элаш",
        "type": "24"
    },
    "1730230577": {
        "en": "Qulibek",
        "uz": "Qulibek",
        "ru": "Кулибек",
        "type": "24"
    },
    "1730230578": {
        "en": "Qumbosti",
        "uz": "Qumbosti",
        "ru": "Кумбосди",
        "type": "24"
    },
    "1730230580": {
        "en": "Qo'shqo'noq",
        "uz": "Qo'shqo'noq",
        "ru": "Кушкунак",
        "type": "24"
    },
    "1730230582": {
        "en": "Qo'rg'oncha",
        "uz": "Qo'rg'oncha",
        "ru": "Курганча",
        "type": "24"
    },
    "1730230584": {
        "en": "Nursux",
        "uz": "Nursux",
        "ru": "Нурсух",
        "type": "24"
    },
    "1730230586": {
        "en": "Ovchi",
        "uz": "Ovchi",
        "ru": "Овчи",
        "type": "24"
    },
    "1730230588": {
        "en": "Oyimcha Qaqir",
        "uz": "Oyimcha Qaqir",
        "ru": "Айимча какир",
        "type": "24"
    },
    "1730230590": {
        "en": "Oqmachit",
        "uz": "Oqmachit",
        "ru": "Акмачит",
        "type": "24"
    },
    "1730230592": {
        "en": "Oxta Tagob",
        "uz": "Oxta Tagob",
        "ru": "Ахта Тагаб",
        "type": "24"
    },
    "1730230594": {
        "en": "O'qchi Dasht",
        "uz": "O'qchi Dasht",
        "ru": "Укчи Дашт",
        "type": "24"
    },
    "1730230596": {
        "en": "O'qchi Rajabgardi",
        "uz": "O'qchi Rajabgardi",
        "ru": "Укчи Ражабгарди",
        "type": "24"
    },
    "1730230598": {
        "en": "Iftixor",
        "uz": "Iftixor",
        "ru": "Ифтихор",
        "type": "24"
    },
    "1730230807": {
        "en": "Ovchi",
        "uz": "Ovchi",
        "ru": "Авчи",
        "type": "31"
    },
    "1730230811": {
        "en": "Qorayozbobo",
        "uz": "Qorayozbobo",
        "ru": "Кораезбобо",
        "type": "31"
    },
    "1730230822": {
        "en": "G'aniobod",
        "uz": "G'aniobod",
        "ru": "Ганиабад",
        "type": "31"
    },
    "1730230838": {
        "en": "Konizar",
        "uz": "Konizar",
        "ru": "Конизор",
        "type": "31"
    },
    "1730230844": {
        "en": "Qaynar",
        "uz": "Qaynar",
        "ru": "Кайнар",
        "type": "31"
    },
    "1730230855": {
        "en": "Mingtut",
        "uz": "Mingtut",
        "ru": "Мингтут",
        "type": "31"
    },
    "1730230866": {
        "en": "Nursux",
        "uz": "Nursux",
        "ru": "Нурсук",
        "type": "31"
    },
    "1730230869": {
        "en": "Rajabgardi",
        "uz": "Rajabgardi",
        "ru": "Раджабгарди",
        "type": "31"
    },
    "1730230873": {
        "en": "Qizil Qaqir",
        "uz": "Qizil Qaqir",
        "ru": "Кызыл какир",
        "type": "31"
    },
    "1730230875": {
        "en": "Tagob",
        "uz": "Tagob",
        "ru": "Тагаб",
        "type": "31"
    },
    "1730233555": {
        "en": "Chimyon ( mavjud)",
        "uz": "Chimyon ( mavjud)",
        "ru": "Чимион",
        "type": "24"
    },
    "1730233557": {
        "en": "Avval",
        "uz": "Avval",
        "ru": "Аввал",
        "type": "24"
    },
    "1730233559": {
        "en": "Archa",
        "uz": "Archa",
        "ru": "Арча",
        "type": "24"
    },
    "1730233561": {
        "en": "Vodil",
        "uz": "Vodil",
        "ru": "Водил",
        "type": "24"
    },
    "1730233563": {
        "en": "Yuqori Vodil",
        "uz": "Yuqori Vodil",
        "ru": "Юкори Водил",
        "type": "24"
    },
    "1730233565": {
        "en": "Damko'l",
        "uz": "Damko'l",
        "ru": "Дамкул",
        "type": "24"
    },
    "1730233567": {
        "en": "Yoshlarobod",
        "uz": "Yoshlarobod",
        "ru": "Ешларабад",
        "type": "24"
    },
    "1730233569": {
        "en": "Qo'rg'ontepa",
        "uz": "Qo'rg'ontepa",
        "ru": "Кургонтепа",
        "type": "24"
    },
    "1730233571": {
        "en": "Langar",
        "uz": "Langar",
        "ru": "Лангар",
        "type": "24"
    },
    "1730233573": {
        "en": "Log'on",
        "uz": "Log'on",
        "ru": "Лаган",
        "type": "24"
    },
    "1730233575": {
        "en": "Mindon",
        "uz": "Mindon",
        "ru": "Миндон",
        "type": "24"
    },
    "1730233577": {
        "en": "Novkent",
        "uz": "Novkent",
        "ru": "Новкент",
        "type": "24"
    },
    "1730233579": {
        "en": "Yuqori Oqtepa",
        "uz": "Yuqori Oqtepa",
        "ru": "Юкори Октепа",
        "type": "24"
    },
    "1730233581": {
        "en": "Parvoz",
        "uz": "Parvoz",
        "ru": "Парвоз",
        "type": "24"
    },
    "1730233583": {
        "en": "Yuqori Soybo'yi",
        "uz": "Yuqori Soybo'yi",
        "ru": "Юкори Сойбуйи",
        "type": "24"
    },
    "1730233585": {
        "en": "Bahor",
        "uz": "Bahor",
        "ru": "Бахор",
        "type": "24"
    },
    "1730233587": {
        "en": "Xonqiz",
        "uz": "Xonqiz",
        "ru": "Хонкиз",
        "type": "24"
    },
    "1730233589": {
        "en": "Xo'roba",
        "uz": "Xo'roba",
        "ru": "Хуроба",
        "type": "24"
    },
    "1730233591": {
        "en": "Neftchilar",
        "uz": "Neftchilar",
        "ru": "Нефтчилар",
        "type": "24"
    },
    "1730233593": {
        "en": "Shoximardonobod",
        "uz": "Shoximardonobod",
        "ru": "Шохимардонабад",
        "type": "24"
    },
    "1730233595": {
        "en": "Yuqori Mindon",
        "uz": "Yuqori Mindon",
        "ru": "Юкори миндан",
        "type": "24"
    },
    "1730233804": {
        "en": "Avval",
        "uz": "Avval",
        "ru": "Ауваль",
        "type": "31"
    },
    "1730233816": {
        "en": "Gulshan",
        "uz": "Gulshan",
        "ru": "Гульшан",
        "type": "31"
    },
    "1730233821": {
        "en": "Qo'rg'ontepa",
        "uz": "Qo'rg'ontepa",
        "ru": "Кургантепа",
        "type": "31"
    },
    "1730233826": {
        "en": "Soy bo'yi",
        "uz": "Soy bo'yi",
        "ru": "Сайбуйи",
        "type": "31"
    },
    "1730233830": {
        "en": "Log'on",
        "uz": "Log'on",
        "ru": "Лаган",
        "type": "31"
    },
    "1730233836": {
        "en": "Mindon",
        "uz": "Mindon",
        "ru": "Миндан",
        "type": "31"
    },
    "1730233839": {
        "en": "Navkat",
        "uz": "Navkat",
        "ru": "Навкат",
        "type": "31"
    },
    "1730233847": {
        "en": "Qaptarxona",
        "uz": "Qaptarxona",
        "ru": "Каптаpхона",
        "type": "31"
    },
    "1730233864": {
        "en": "Shoximardon",
        "uz": "Shoximardon",
        "ru": "Шахимаpдан",
        "type": "31"
    },
    "1730233870": {
        "en": "Parvoz",
        "uz": "Parvoz",
        "ru": "Парвоз",
        "type": "31"
    },
    "1730233876": {
        "en": "Chimyon",
        "uz": "Chimyon",
        "ru": "Чимион",
        "type": "31"
    },
    "1730233880": {
        "en": "Damko'l",
        "uz": "Damko'l",
        "ru": "Дамкуль",
        "type": "31"
    },
    "1730233885": {
        "en": "Xonqiz",
        "uz": "Xonqiz",
        "ru": "Ханкыз",
        "type": "31"
    },
    "1730233890": {
        "en": "Oqbilol",
        "uz": "Oqbilol",
        "ru": "Акбилал",
        "type": "31"
    },
    "1730233895": {
        "en": "Yuqori Vodil",
        "uz": "Yuqori Vodil",
        "ru": "Юкоpи Вуадыл",
        "type": "31"
    },
    "1730233898": {
        "en": "Vodil",
        "uz": "Vodil",
        "ru": "Вуадыл",
        "type": "31"
    },
    "1730236551": {
        "en": "Dang'ara",
        "uz": "Dang'ara",
        "ru": "Дангара",
        "type": "24"
    },
    "1730236554": {
        "en": "Doimobod",
        "uz": "Doimobod",
        "ru": "Доимабад",
        "type": "24"
    },
    "1730236557": {
        "en": "Katta Ganjiravon",
        "uz": "Katta Ganjiravon",
        "ru": "Катта ганжиравон",
        "type": "24"
    },
    "1730236561": {
        "en": "Katta Turk",
        "uz": "Katta Turk",
        "ru": "Катта турк",
        "type": "24"
    },
    "1730236564": {
        "en": "Qum Qiyali",
        "uz": "Qum Qiyali",
        "ru": "Кум кияли",
        "type": "24"
    },
    "1730236567": {
        "en": "Toptiqsaroy",
        "uz": "Toptiqsaroy",
        "ru": "Топтиксарай",
        "type": "24"
    },
    "1730236571": {
        "en": "Tumor",
        "uz": "Tumor",
        "ru": "Тумор",
        "type": "24"
    },
    "1730236574": {
        "en": "Yuqori Urganji",
        "uz": "Yuqori Urganji",
        "ru": "Юкори Урганжи",
        "type": "24"
    },
    "1730236577": {
        "en": "Yangi zamon",
        "uz": "Yangi zamon",
        "ru": "Янги замон",
        "type": "24"
    },
    "1730236803": {
        "en": "Oqdjar",
        "uz": "Oqdjar",
        "ru": "Акджар",
        "type": "31"
    },
    "1730236808": {
        "en": "Sohil",
        "uz": "Sohil",
        "ru": "Сохил",
        "type": "31"
    },
    "1730236822": {
        "en": "Naymancha",
        "uz": "Naymancha",
        "ru": "Найманча",
        "type": "31"
    },
    "1730236830": {
        "en": "Qiyali",
        "uz": "Qiyali",
        "ru": "Кияли",
        "type": "31"
    },
    "1730236833": {
        "en": "Mulkobod",
        "uz": "Mulkobod",
        "ru": "Мулкабад",
        "type": "31"
    },
    "1730236841": {
        "en": "Sanam",
        "uz": "Sanam",
        "ru": "Санам",
        "type": "31"
    },
    "1730236844": {
        "en": "Chinobod",
        "uz": "Chinobod",
        "ru": "Чинабад",
        "type": "31"
    },
    "1730236855": {
        "en": "Taypoq",
        "uz": "Taypoq",
        "ru": "Тайпак",
        "type": "31"
    },
    "1730238551": {
        "en": "Navbahor",
        "uz": "Navbahor",
        "ru": "Навбахор",
        "type": "24"
    },
    "1730238553": {
        "en": "Kaldo'shan",
        "uz": "Kaldo'shan",
        "ru": "Калдушан",
        "type": "24"
    },
    "1730238555": {
        "en": "Qo'qonboy",
        "uz": "Qo'qonboy",
        "ru": "Куконбай",
        "type": "24"
    },
    "1730238557": {
        "en": "Tomosha",
        "uz": "Tomosha",
        "ru": "Томоша",
        "type": "24"
    },
    "1730238559": {
        "en": "Chek chuvaldak",
        "uz": "Chek chuvaldak",
        "ru": "Чек чувалдак",
        "type": "24"
    },
    "1730238561": {
        "en": "Shoyinbek",
        "uz": "Shoyinbek",
        "ru": "Шойинбек",
        "type": "24"
    },
    "1730238563": {
        "en": "Eski",
        "uz": "Eski",
        "ru": "Эски",
        "type": "24"
    },
    "1730238565": {
        "en": "Eshon",
        "uz": "Eshon",
        "ru": "Эшон",
        "type": "24"
    },
    "1730238810": {
        "en": "G'allakor",
        "uz": "G'allakor",
        "ru": "Галлакор",
        "type": "31"
    },
    "1730238830": {
        "en": "Qo'qon",
        "uz": "Qo'qon",
        "ru": "Коканд",
        "type": "31"
    },
    "1730238835": {
        "en": "Navbahor",
        "uz": "Navbahor",
        "ru": "Навбахор",
        "type": "31"
    },
    "1730238840": {
        "en": "Tomosha",
        "uz": "Tomosha",
        "ru": "Тамаша",
        "type": "31"
    },
    "1730238850": {
        "en": "Shunkor",
        "uz": "Shunkor",
        "ru": "Шункар",
        "type": "31"
    },
    "1730238855": {
        "en": "G'uncha",
        "uz": "G'uncha",
        "ru": "Гунча",
        "type": "31"
    },
    "1730242551": {
        "en": "Yozyovon",
        "uz": "Yozyovon",
        "ru": "Язъяван",
        "type": "24"
    },
    "1730242554": {
        "en": "Yozyovon chek",
        "uz": "Yozyovon chek",
        "ru": "Езевон чек",
        "type": "24"
    },
    "1730242557": {
        "en": "Yo'ldoshobod",
        "uz": "Yo'ldoshobod",
        "ru": "Йулдошабад",
        "type": "24"
    },
    "1730242561": {
        "en": "Qorasoqol",
        "uz": "Qorasoqol",
        "ru": "Карасакал",
        "type": "24"
    },
    "1730242564": {
        "en": "Qoratepa",
        "uz": "Qoratepa",
        "ru": "Коратепа",
        "type": "24"
    },
    "1730242567": {
        "en": "Kelajak",
        "uz": "Kelajak",
        "ru": "Келажак",
        "type": "24"
    },
    "1730242571": {
        "en": "Quyi Soybo'yi",
        "uz": "Quyi Soybo'yi",
        "ru": "Куйи Сойбуйи",
        "type": "24"
    },
    "1730242574": {
        "en": "Toshxovuz",
        "uz": "Toshxovuz",
        "ru": "Тошховуз",
        "type": "24"
    },
    "1730242577": {
        "en": "Xonobod",
        "uz": "Xonobod",
        "ru": "Хонабад",
        "type": "24"
    },
    "1730242806": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистан",
        "type": "31"
    },
    "1730242810": {
        "en": "Qatortol",
        "uz": "Qatortol",
        "ru": "Катартал",
        "type": "31"
    },
    "1730242817": {
        "en": "Karatepa",
        "uz": "Karatepa",
        "ru": "Каpатепа",
        "type": "31"
    },
    "1730242830": {
        "en": "Xonobod",
        "uz": "Xonobod",
        "ru": "Ханабад",
        "type": "31"
    },
    "1730242832": {
        "en": "Istiqlol",
        "uz": "Istiqlol",
        "ru": "Истиклол",
        "type": "31"
    },
    "1730242848": {
        "en": "Yozyovon",
        "uz": "Yozyovon",
        "ru": "Язъяван",
        "type": "31"
    },
    "1730242852": {
        "en": "Yangiobod",
        "uz": "Yangiobod",
        "ru": "Янгиабад",
        "type": "31"
    },
    "1730242855": {
        "en": "Ishtirxon",
        "uz": "Ishtirxon",
        "ru": "Иштиpхон",
        "type": "31"
    },
    "1730242860": {
        "en": "Qorasoqol",
        "uz": "Qorasoqol",
        "ru": "Карасакал",
        "type": "31"
    },
    "1730242865": {
        "en": "Yangibo'ston",
        "uz": "Yangibo'ston",
        "ru": "Янгибустан",
        "type": "31"
    },
    "1730405555": {
        "en": "Muqimiy",
        "uz": "Muqimiy",
        "ru": "Мукими",
        "type": "24"
    },
    "1730408555": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "24"
    },
    "1730408811": {
        "en": "Arsif",
        "uz": "Arsif",
        "ru": "Арсив",
        "type": "31"
    },
    "1730408822": {
        "en": "Valik",
        "uz": "Valik",
        "ru": "Валик",
        "type": "31"
    },
    "1730408829": {
        "en": "Qo'chqorchi",
        "uz": "Qo'chqorchi",
        "ru": "Кучкаpчи",
        "type": "31"
    },
    "1730408833": {
        "en": "Muyon",
        "uz": "Muyon",
        "ru": "Муян",
        "type": "31"
    },
    "1730408841": {
        "en": "Isfayramsoy",
        "uz": "Isfayramsoy",
        "ru": "Исфайрамсой",
        "type": "31"
    },
    "1730408845": {
        "en": "So'fon",
        "uz": "So'fon",
        "ru": "Суфан",
        "type": "31"
    },
    "1730412557": {
        "en": "Yangi Marg'ilon",
        "uz": "Yangi Marg'ilon",
        "ru": "Янги Маpгилан",
        "type": "24"
    },
    "1733204551": {
        "en": "Bog'ot",
        "uz": "Bog'ot",
        "ru": "Багат",
        "type": "24"
    },
    "1733204553": {
        "en": "Nurafshon",
        "uz": "Nurafshon",
        "ru": "Нурафшон",
        "type": "24"
    },
    "1733204555": {
        "en": "Oltinqum",
        "uz": "Oltinqum",
        "ru": "Олтинкум",
        "type": "24"
    },
    "1733204557": {
        "en": "Uzumzor",
        "uz": "Uzumzor",
        "ru": "Узумзор",
        "type": "24"
    },
    "1733204559": {
        "en": "Yangiqadam",
        "uz": "Yangiqadam",
        "ru": "Янгикадам",
        "type": "24"
    },
    "1733204805": {
        "en": "Qorayong'oq",
        "uz": "Qorayong'oq",
        "ru": "Караянтак",
        "type": "31"
    },
    "1733204813": {
        "en": "Beshariq",
        "uz": "Beshariq",
        "ru": "Бешарык",
        "type": "31"
    },
    "1733204822": {
        "en": "Dehqonbozor",
        "uz": "Dehqonbozor",
        "ru": "Дехканбазар",
        "type": "31"
    },
    "1733204833": {
        "en": "Qulonqorabog'",
        "uz": "Qulonqorabog'",
        "ru": "Куланкарабаг",
        "type": "31"
    },
    "1733204844": {
        "en": "O'g'uzrabot",
        "uz": "O'g'uzrabot",
        "ru": "Угузработ",
        "type": "31"
    },
    "1733204849": {
        "en": "Madaniyat",
        "uz": "Madaniyat",
        "ru": "Маданият",
        "type": "31"
    },
    "1733204855": {
        "en": "Nayman",
        "uz": "Nayman",
        "ru": "Найман",
        "type": "31"
    },
    "1733204866": {
        "en": "Mirishkor",
        "uz": "Mirishkor",
        "ru": "Миришкор",
        "type": "31"
    },
    "1733204870": {
        "en": "Xo'jalik",
        "uz": "Xo'jalik",
        "ru": "Хужалик",
        "type": "31"
    },
    "1733204875": {
        "en": "Qipchoq",
        "uz": "Qipchoq",
        "ru": "Кипчак",
        "type": "31"
    },
    "1733208551": {
        "en": "Gurlan",
        "uz": "Gurlan",
        "ru": "Гурлен",
        "type": "24"
    },
    "1733208554": {
        "en": "Chakkalar",
        "uz": "Chakkalar",
        "ru": "Чаккалар",
        "type": "24"
    },
    "1733208557": {
        "en": "Bo'zqal'a",
        "uz": "Bo'zqal'a",
        "ru": "Бузкалъа",
        "type": "24"
    },
    "1733208561": {
        "en": "Nurzamin",
        "uz": "Nurzamin",
        "ru": "Нурзамин",
        "type": "24"
    },
    "1733208564": {
        "en": "Nukus yop",
        "uz": "Nukus yop",
        "ru": "Нукус еп",
        "type": "24"
    },
    "1733208567": {
        "en": "Markaziy Guliston",
        "uz": "Markaziy Guliston",
        "ru": "Марказий Гулистан",
        "type": "24"
    },
    "1733208571": {
        "en": "Do'simbiy",
        "uz": "Do'simbiy",
        "ru": "Дусимбий",
        "type": "24"
    },
    "1733208574": {
        "en": "Taxtako'pir",
        "uz": "Taxtako'pir",
        "ru": "Тахтакупир",
        "type": "24"
    },
    "1733208577": {
        "en": "Yormish",
        "uz": "Yormish",
        "ru": "Ермиш",
        "type": "24"
    },
    "1733208803": {
        "en": "Olg'a",
        "uz": "Olg'a",
        "ru": "Алга",
        "type": "31"
    },
    "1733208820": {
        "en": "Vazir",
        "uz": "Vazir",
        "ru": "Вазир",
        "type": "31"
    },
    "1733208825": {
        "en": "Guliston",
        "uz": "Guliston",
        "ru": "Гулистан",
        "type": "31"
    },
    "1733208826": {
        "en": "Xizireli",
        "uz": "Xizireli",
        "ru": "Хизирэли",
        "type": "31"
    },
    "1733208835": {
        "en": "Birlashgan",
        "uz": "Birlashgan",
        "ru": "Бирлашган",
        "type": "31"
    },
    "1733208855": {
        "en": "Saxtiyon",
        "uz": "Saxtiyon",
        "ru": "Сахтиян",
        "type": "31"
    },
    "1733208857": {
        "en": "Do'simbiy",
        "uz": "Do'simbiy",
        "ru": "Досимбий",
        "type": "31"
    },
    "1733208874": {
        "en": "Sholikor",
        "uz": "Sholikor",
        "ru": "Шаликор",
        "type": "31"
    },
    "1733208881": {
        "en": "Eshimjiron",
        "uz": "Eshimjiron",
        "ru": "Эшимжиран",
        "type": "31"
    },
    "1733212551": {
        "en": "Qo'shko'pir",
        "uz": "Qo'shko'pir",
        "ru": "Кошкупыр",
        "type": "24"
    },
    "1733212553": {
        "en": "Qoromon",
        "uz": "Qoromon",
        "ru": "Караман",
        "type": "24"
    },
    "1733212555": {
        "en": "O'rta qishloq",
        "uz": "O'rta qishloq",
        "ru": "Урта кишлак",
        "type": "24"
    },
    "1733212557": {
        "en": "Xonbod",
        "uz": "Xonbod",
        "ru": "Хонабад",
        "type": "24"
    },
    "1733212559": {
        "en": "Shixmashhad",
        "uz": "Shixmashhad",
        "ru": "Шихмашхад",
        "type": "24"
    },
    "1733212561": {
        "en": "Sherobod",
        "uz": "Sherobod",
        "ru": "Шерабад",
        "type": "24"
    },
    "1733212811": {
        "en": "Shix",
        "uz": "Shix",
        "ru": "Ших",
        "type": "31"
    },
    "1733212822": {
        "en": "G'ozovot",
        "uz": "G'ozovot",
        "ru": "Газават",
        "type": "31"
    },
    "1733212827": {
        "en": "Oqdarband",
        "uz": "Oqdarband",
        "ru": "Акдарбанд",
        "type": "31"
    },
    "1733212833": {
        "en": "Qotog'on",
        "uz": "Qotog'on",
        "ru": "Котогон",
        "type": "31"
    },
    "1733212840": {
        "en": "Kenagas",
        "uz": "Kenagas",
        "ru": "Кенегес",
        "type": "31"
    },
    "1733212856": {
        "en": "O'zbekyap",
        "uz": "O'zbekyap",
        "ru": "Узбекяб",
        "type": "31"
    },
    "1733212867": {
        "en": "O'rtayap",
        "uz": "O'rtayap",
        "ru": "Уртаяп",
        "type": "31"
    },
    "1733212878": {
        "en": "Xadra",
        "uz": "Xadra",
        "ru": "Хадра",
        "type": "31"
    },
    "1733212889": {
        "en": "Xonobod",
        "uz": "Xonobod",
        "ru": "Ханабад",
        "type": "31"
    },
    "1733212891": {
        "en": "Xosiyon",
        "uz": "Xosiyon",
        "ru": "Хасиян",
        "type": "31"
    },
    "1733212893": {
        "en": "Xayrobod",
        "uz": "Xayrobod",
        "ru": "Хайрабад",
        "type": "31"
    },
    "1733212895": {
        "en": "Yangilik",
        "uz": "Yangilik",
        "ru": "Янгилик",
        "type": "31"
    },
    "1733217554": {
        "en": "Cholish",
        "uz": "Cholish",
        "ru": "Чалыш",
        "type": "24"
    },
    "1733217558": {
        "en": "Oq oltin",
        "uz": "Oq oltin",
        "ru": "Ак алтин",
        "type": "24"
    },
    "1733217562": {
        "en": "Chandir",
        "uz": "Chandir",
        "ru": "Чондир",
        "type": "24"
    },
    "1733217566": {
        "en": "Ko'palik",
        "uz": "Ko'palik",
        "ru": "Купалик",
        "type": "24"
    },
    "1733217572": {
        "en": "Gardonlar",
        "uz": "Gardonlar",
        "ru": "Гардонлар",
        "type": "24"
    },
    "1733217822": {
        "en": "Bekobod",
        "uz": "Bekobod",
        "ru": "Бекабад",
        "type": "31"
    },
    "1733217833": {
        "en": "G'aybu",
        "uz": "G'aybu",
        "ru": "Гайбу",
        "type": "31"
    },
    "1733217844": {
        "en": "Qoromon",
        "uz": "Qoromon",
        "ru": "Караман",
        "type": "31"
    },
    "1733217855": {
        "en": "Qoroul",
        "uz": "Qoroul",
        "ru": "Караул",
        "type": "31"
    },
    "1733217863": {
        "en": "Chatko'pir",
        "uz": "Chatko'pir",
        "ru": "Чаткупыр",
        "type": "31"
    },
    "1733217869": {
        "en": "Chakkasholikor",
        "uz": "Chakkasholikor",
        "ru": "Чаккашаликар",
        "type": "31"
    },
    "1733217872": {
        "en": "Chandirkiyat",
        "uz": "Chandirkiyat",
        "ru": "Чандиркият",
        "type": "31"
    },
    "1733217882": {
        "en": "Yuqori bog'",
        "uz": "Yuqori bog'",
        "ru": "Юкарибаг",
        "type": "31"
    },
    "1733217890": {
        "en": "Yuqori do'rman",
        "uz": "Yuqori do'rman",
        "ru": "Юкары-Дорман",
        "type": "31"
    },
    "1733217895": {
        "en": "G'alaba",
        "uz": "G'alaba",
        "ru": "Галаба",
        "type": "31"
    },
    "1733220551": {
        "en": "Xazorasp",
        "uz": "Xazorasp",
        "ru": "Хазарасп",
        "type": "24"
    },
    "1733220553": {
        "en": "Oq yop",
        "uz": "Oq yop",
        "ru": "Ак еп",
        "type": "24"
    },
    "1733220555": {
        "en": "Oyok ovvo",
        "uz": "Oyok ovvo",
        "ru": "Аек-авва",
        "type": "24"
    },
    "1733220557": {
        "en": "Nurxayot",
        "uz": "Nurxayot",
        "ru": "Нурхаёт",
        "type": "24"
    },
    "1733220803": {
        "en": "Ovshar",
        "uz": "Ovshar",
        "ru": "Авшар",
        "type": "31"
    },
    "1733220806": {
        "en": "Karvak",
        "uz": "Karvak",
        "ru": "Карвак",
        "type": "31"
    },
    "1733220812": {
        "en": "Beshta",
        "uz": "Beshta",
        "ru": "Бешта",
        "type": "31"
    },
    "1733220814": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустан",
        "type": "31"
    },
    "1733220822": {
        "en": "Pitnak",
        "uz": "Pitnak",
        "ru": "Питнак",
        "type": "31"
    },
    "1733220830": {
        "en": "Pichoqchi",
        "uz": "Pichoqchi",
        "ru": "Пичакчи",
        "type": "31"
    },
    "1733220845": {
        "en": "Sanoat",
        "uz": "Sanoat",
        "ru": "Саноат",
        "type": "31"
    },
    "1733220852": {
        "en": "Sarimoy",
        "uz": "Sarimoy",
        "ru": "Саримай",
        "type": "31"
    },
    "1733220862": {
        "en": "Tuproqqal'a",
        "uz": "Tuproqqal'a",
        "ru": "Тупраккала",
        "type": "31"
    },
    "1733220868": {
        "en": "Muxomon",
        "uz": "Muxomon",
        "ru": "Мухаман",
        "type": "31"
    },
    "1733220879": {
        "en": "Yangibozor",
        "uz": "Yangibozor",
        "ru": "Янгибазар",
        "type": "31"
    },
    "1733221501": {
        "en": "Pitnak",
        "uz": "Pitnak",
        "ru": "Питнак",
        "type": "23"
    },
    "1733223551": {
        "en": "Xonqa",
        "uz": "Xonqa",
        "ru": "Ханка",
        "type": "24"
    },
    "1733223553": {
        "en": "Istiqlol",
        "uz": "Istiqlol",
        "ru": "Истиклол",
        "type": "24"
    },
    "1733223555": {
        "en": "Madaniy yer",
        "uz": "Madaniy yer",
        "ru": "Маданий ер",
        "type": "24"
    },
    "1733223557": {
        "en": "Birlashgan",
        "uz": "Birlashgan",
        "ru": "Бирлашган",
        "type": "24"
    },
    "1733223559": {
        "en": "Yosh kuch",
        "uz": "Yosh kuch",
        "ru": "Еш куч",
        "type": "24"
    },
    "1733223803": {
        "en": "Amudaryo",
        "uz": "Amudaryo",
        "ru": "Амударья",
        "type": "31"
    },
    "1733223810": {
        "en": "Qoraqosh",
        "uz": "Qoraqosh",
        "ru": "Каракош",
        "type": "31"
    },
    "1733223812": {
        "en": "Katta Jirmiz",
        "uz": "Katta Jirmiz",
        "ru": "Катта Жирмиз",
        "type": "31"
    },
    "1733223820": {
        "en": "Madir",
        "uz": "Madir",
        "ru": "Мадир",
        "type": "31"
    },
    "1733223830": {
        "en": "Qirq-yop",
        "uz": "Qirq-yop",
        "ru": "Кыркяп",
        "type": "31"
    },
    "1733223835": {
        "en": "Navxos",
        "uz": "Navxos",
        "ru": "Навхас",
        "type": "31"
    },
    "1733223840": {
        "en": "Namuna",
        "uz": "Namuna",
        "ru": "Намуна",
        "type": "31"
    },
    "1733223860": {
        "en": "Sarapoyon",
        "uz": "Sarapoyon",
        "ru": "Сарыпаян",
        "type": "31"
    },
    "1733223870": {
        "en": "Tomadurgadik",
        "uz": "Tomadurgadik",
        "ru": "Тамадургадык",
        "type": "31"
    },
    "1733223890": {
        "en": "Olaja",
        "uz": "Olaja",
        "ru": "Аладжа",
        "type": "31"
    },
    "1733226552": {
        "en": "Gullanbog'",
        "uz": "Gullanbog'",
        "ru": "Гулланбаг",
        "type": "24"
    },
    "1733226554": {
        "en": "Parchanxos",
        "uz": "Parchanxos",
        "ru": "Парчанхас",
        "type": "24"
    },
    "1733226562": {
        "en": "Iftixor",
        "uz": "Iftixor",
        "ru": "Ифтихор",
        "type": "24"
    },
    "1733226564": {
        "en": "Sho'r-Qal'a",
        "uz": "Sho'r-Qal'a",
        "ru": "Шуркалъа",
        "type": "24"
    },
    "1733226566": {
        "en": "Yuqori qo'm",
        "uz": "Yuqori qo'm",
        "ru": "Юкориком",
        "type": "24"
    },
    "1733226568": {
        "en": "Hamkor",
        "uz": "Hamkor",
        "ru": "Хамкор",
        "type": "24"
    },
    "1733226805": {
        "en": "Oq-yop",
        "uz": "Oq-yop",
        "ru": "Акяп",
        "type": "31"
    },
    "1733226810": {
        "en": "Gandimyon",
        "uz": "Gandimyon",
        "ru": "Гандимян",
        "type": "31"
    },
    "1733226820": {
        "en": "Dashyoq",
        "uz": "Dashyoq",
        "ru": "Дашьяк",
        "type": "31"
    },
    "1733226826": {
        "en": "Juryon",
        "uz": "Juryon",
        "ru": "Журян",
        "type": "31"
    },
    "1733226834": {
        "en": "Irdinzon",
        "uz": "Irdinzon",
        "ru": "Ирдимзан",
        "type": "31"
    },
    "1733226845": {
        "en": "Eski-Qiyot",
        "uz": "Eski-Qiyot",
        "ru": "Эски кият",
        "type": "31"
    },
    "1733226856": {
        "en": "Sayot",
        "uz": "Sayot",
        "ru": "Саят",
        "type": "31"
    },
    "1733226867": {
        "en": "Shomoxulum",
        "uz": "Shomoxulum",
        "ru": "Шамахулум",
        "type": "31"
    },
    "1733226878": {
        "en": "Chinobod",
        "uz": "Chinobod",
        "ru": "Чинабад",
        "type": "31"
    },
    "1733230551": {
        "en": "Shovot",
        "uz": "Shovot",
        "ru": "Шават",
        "type": "24"
    },
    "1733230554": {
        "en": "Bo'yrochi",
        "uz": "Bo'yrochi",
        "ru": "Буйрачи",
        "type": "24"
    },
    "1733230557": {
        "en": "Ipakchi",
        "uz": "Ipakchi",
        "ru": "Ипакчи",
        "type": "24"
    },
    "1733230561": {
        "en": "Kangli",
        "uz": "Kangli",
        "ru": "Кангли",
        "type": "24"
    },
    "1733230564": {
        "en": "Qat-qal'a",
        "uz": "Qat-qal'a",
        "ru": "Кат-калъа",
        "type": "24"
    },
    "1733230567": {
        "en": "Monoq",
        "uz": "Monoq",
        "ru": "Монак",
        "type": "24"
    },
    "1733230571": {
        "en": "Chig'atoy",
        "uz": "Chig'atoy",
        "ru": "Чигатай",
        "type": "24"
    },
    "1733230811": {
        "en": "Qat-qal'a",
        "uz": "Qat-qal'a",
        "ru": "Каткала",
        "type": "31"
    },
    "1733230822": {
        "en": "Hurriyat",
        "uz": "Hurriyat",
        "ru": "Хуррият",
        "type": "31"
    },
    "1733230825": {
        "en": "Bo'yroqchi",
        "uz": "Bo'yroqchi",
        "ru": "Буйрачи",
        "type": "31"
    },
    "1733230830": {
        "en": "Beshmergan",
        "uz": "Beshmergan",
        "ru": "Бешмерган",
        "type": "31"
    },
    "1733230833": {
        "en": "Ijtimoyat",
        "uz": "Ijtimoyat",
        "ru": "Ижтимаят",
        "type": "31"
    },
    "1733230839": {
        "en": "Kangli",
        "uz": "Kangli",
        "ru": "Кангли",
        "type": "31"
    },
    "1733230844": {
        "en": "Qiyot",
        "uz": "Qiyot",
        "ru": "Кият",
        "type": "31"
    },
    "1733230855": {
        "en": "Chig'atoyqal'a",
        "uz": "Chig'atoyqal'a",
        "ru": "Чигатай кала",
        "type": "31"
    },
    "1733230866": {
        "en": "O'zbekiston",
        "uz": "O'zbekiston",
        "ru": "Узбекистан",
        "type": "31"
    },
    "1733230877": {
        "en": "Cho'qli",
        "uz": "Cho'qli",
        "ru": "Чоклы",
        "type": "31"
    },
    "1733230888": {
        "en": "Shovotqal'a",
        "uz": "Shovotqal'a",
        "ru": "Шават кала",
        "type": "31"
    },
    "1733233551": {
        "en": "Yangiariq",
        "uz": "Yangiariq",
        "ru": "Янгиарык",
        "type": "24"
    },
    "1733233553": {
        "en": "Gulbog'",
        "uz": "Gulbog'",
        "ru": "Гулбог",
        "type": "24"
    },
    "1733233555": {
        "en": "Soburzon",
        "uz": "Soburzon",
        "ru": "Собурзан",
        "type": "24"
    },
    "1733233557": {
        "en": "Suvgan",
        "uz": "Suvgan",
        "ru": "Сувган",
        "type": "24"
    },
    "1733233561": {
        "en": "Tagan",
        "uz": "Tagan",
        "ru": "Таган",
        "type": "24"
    },
    "1733233563": {
        "en": "Qo'shloq",
        "uz": "Qo'shloq",
        "ru": "Кушлок",
        "type": "24"
    },
    "1733233811": {
        "en": "Qarmish",
        "uz": "Qarmish",
        "ru": "Кармиш",
        "type": "31"
    },
    "1733233822": {
        "en": "Ostona",
        "uz": "Ostona",
        "ru": "Астана",
        "type": "31"
    },
    "1733233833": {
        "en": "Kattabog'",
        "uz": "Kattabog'",
        "ru": "Каттабаг",
        "type": "31"
    },
    "1733233844": {
        "en": "Gulobod",
        "uz": "Gulobod",
        "ru": "Гулобод",
        "type": "31"
    },
    "1733233855": {
        "en": "Gullanbog'",
        "uz": "Gullanbog'",
        "ru": "Гулланбаг",
        "type": "31"
    },
    "1733233872": {
        "en": "Tagan",
        "uz": "Tagan",
        "ru": "Таган",
        "type": "31"
    },
    "1733233884": {
        "en": "Qo'riqtom",
        "uz": "Qo'riqtom",
        "ru": "Куриктам",
        "type": "31"
    },
    "1733233897": {
        "en": "Chiriqchi",
        "uz": "Chiriqchi",
        "ru": "Чикирчи",
        "type": "31"
    },
    "1733236551": {
        "en": "Yangibozor",
        "uz": "Yangibozor",
        "ru": "Янгибазар",
        "type": "24"
    },
    "1733236554": {
        "en": "Yangi yop",
        "uz": "Yangi yop",
        "ru": "Янги-еп",
        "type": "24"
    },
    "1733236558": {
        "en": "Mangitlar",
        "uz": "Mangitlar",
        "ru": "Мангитлар",
        "type": "24"
    },
    "1733236803": {
        "en": "Oyoqdo'rman",
        "uz": "Oyoqdo'rman",
        "ru": "Аякдорман",
        "type": "31"
    },
    "1733236805": {
        "en": "Bog'olon",
        "uz": "Bog'olon",
        "ru": "Багалан",
        "type": "31"
    },
    "1733236806": {
        "en": "Boshkirshix",
        "uz": "Boshkirshix",
        "ru": "Башкирших",
        "type": "31"
    },
    "1733236808": {
        "en": "Bo'zqal'a",
        "uz": "Bo'zqal'a",
        "ru": "Бозкала",
        "type": "31"
    },
    "1733236812": {
        "en": "Qalandardo'rman",
        "uz": "Qalandardo'rman",
        "ru": "Каландардорман",
        "type": "31"
    },
    "1733236830": {
        "en": "Uyg'ur",
        "uz": "Uyg'ur",
        "ru": "Уйгур",
        "type": "31"
    },
    "1733236834": {
        "en": "Cho'bolonchi",
        "uz": "Cho'bolonchi",
        "ru": "Чубаланчи",
        "type": "31"
    },
    "1733236836": {
        "en": "Shirinqo'ng'irot",
        "uz": "Shirinqo'ng'irot",
        "ru": "Ширинкунград",
        "type": "31"
    },
    "1735204501": {
        "en": "Mang'it",
        "uz": "Mang'it",
        "ru": "Мангит",
        "type": "23"
    },
    "1735204554": {
        "en": "Jumurtov",
        "uz": "Jumurtov",
        "ru": "Джумуртау",
        "type": "24"
    },
    "1735204555": {
        "en": "Kipshak",
        "uz": "Kipshak",
        "ru": "Кипчок",
        "type": "24"
    },
    "1735204556": {
        "en": "Kilichboy",
        "uz": "Kilichboy",
        "ru": "Киличбай",
        "type": "24"
    },
    "1735204557": {
        "en": "Xitoy",
        "uz": "Xitoy",
        "ru": "Китай",
        "type": "24"
    },
    "1735204805": {
        "en": "Nazarxon",
        "uz": "Nazarxon",
        "ru": "Назаpхан",
        "type": "31"
    },
    "1735204811": {
        "en": "O'rta-qala",
        "uz": "O'rta-qala",
        "ru": "Оpта - кала",
        "type": "31"
    },
    "1735204822": {
        "en": "Qipchaq",
        "uz": "Qipchaq",
        "ru": "Кипчак",
        "type": "31"
    },
    "1735204833": {
        "en": "Quyuq-kupir",
        "uz": "Quyuq-kupir",
        "ru": "Куюк- Купиp",
        "type": "31"
    },
    "1735204844": {
        "en": "Xitay",
        "uz": "Xitay",
        "ru": "Ктай",
        "type": "31"
    },
    "1735204848": {
        "en": "Oq oltin",
        "uz": "Oq oltin",
        "ru": "Ок олтин",
        "type": "31"
    },
    "1735204855": {
        "en": "Chaykul",
        "uz": "Chaykul",
        "ru": "Чайкол",
        "type": "31"
    },
    "1735204866": {
        "en": "Qlichboy",
        "uz": "Qlichboy",
        "ru": "Кличбай",
        "type": "31"
    },
    "1735204870": {
        "en": "Kangli",
        "uz": "Kangli",
        "ru": "Канлы",
        "type": "31"
    },
    "1735204874": {
        "en": "Amir Temur",
        "uz": "Amir Temur",
        "ru": "Амир Темур",
        "type": "31"
    },
    "1735204875": {
        "en": "Durman",
        "uz": "Durman",
        "ru": "Дурман",
        "type": "31"
    },
    "1735204880": {
        "en": "Bobur nomli",
        "uz": "Bobur nomli",
        "ru": "им. Бабура",
        "type": "31"
    },
    "1735204883": {
        "en": "Buzyop",
        "uz": "Buzyop",
        "ru": "Бузяп",
        "type": "31"
    },
    "1735204887": {
        "en": "To'lqin",
        "uz": "To'lqin",
        "ru": "Тулкин",
        "type": "31"
    },
    "1735204889": {
        "en": "Tashyop",
        "uz": "Tashyop",
        "ru": "Ташеп",
        "type": "31"
    },
    "1735204892": {
        "en": "Xolimbeg",
        "uz": "Xolimbeg",
        "ru": "Холимбег",
        "type": "31"
    },
    "1735207501": {
        "en": "Beruniy",
        "uz": "Beruniy",
        "ru": "Беруни",
        "type": "23"
    },
    "1735207552": {
        "en": "Bulish",
        "uz": "Bulish",
        "ru": "Булиш",
        "type": "24"
    },
    "1735207807": {
        "en": "Abay",
        "uz": "Abay",
        "ru": "Абай",
        "type": "31"
    },
    "1735207811": {
        "en": "Ozod",
        "uz": "Ozod",
        "ru": "Азад",
        "type": "31"
    },
    "1735207814": {
        "en": "Sarkop",
        "uz": "Sarkop",
        "ru": "Саpкоп",
        "type": "31"
    },
    "1735207816": {
        "en": "Navoiy",
        "uz": "Navoiy",
        "ru": "Навои",
        "type": "31"
    },
    "1735207818": {
        "en": "Beruniy",
        "uz": "Beruniy",
        "ru": "Беpуни",
        "type": "31"
    },
    "1735207822": {
        "en": "Maxtumquli",
        "uz": "Maxtumquli",
        "ru": "Махтумкули",
        "type": "31"
    },
    "1735207827": {
        "en": "Biybazar",
        "uz": "Biybazar",
        "ru": "Бийбазар",
        "type": "31"
    },
    "1735207829": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "31"
    },
    "1735207832": {
        "en": "Altinsay",
        "uz": "Altinsay",
        "ru": "Алтынсай",
        "type": "31"
    },
    "1735207843": {
        "en": "Qizilqal'a",
        "uz": "Qizilqal'a",
        "ru": "Кызылкала",
        "type": "31"
    },
    "1735207865": {
        "en": "Shabaz",
        "uz": "Shabaz",
        "ru": "Шабаз",
        "type": "31"
    },
    "1735207876": {
        "en": "Shimam",
        "uz": "Shimam",
        "ru": "Шимам",
        "type": "31"
    },
    "1735207880": {
        "en": "Tinchlik",
        "uz": "Tinchlik",
        "ru": "Тинчлик",
        "type": "31"
    },
    "1735209551": {
        "en": "Bo'zatov",
        "uz": "Bo'zatov",
        "ru": "Бозатау",
        "type": "24"
    },
    "1735209804": {
        "en": "Aspantay",
        "uz": "Aspantay",
        "ru": "Аспантай",
        "type": "31"
    },
    "1735209808": {
        "en": "Yerkindarya",
        "uz": "Yerkindarya",
        "ru": "Еркиндарья",
        "type": "31"
    },
    "1735209812": {
        "en": "Ko'k-suv",
        "uz": "Ko'k-suv",
        "ru": "Кук-су",
        "type": "31"
    },
    "1735209818": {
        "en": "Qusqanatov",
        "uz": "Qusqanatov",
        "ru": "Кусканатау",
        "type": "31"
    },
    "1735211551": {
        "en": "Qorao'zak",
        "uz": "Qorao'zak",
        "ru": "Караузяк",
        "type": "24"
    },
    "1735211803": {
        "en": "Olgabas",
        "uz": "Olgabas",
        "ru": "Алгабас",
        "type": "31"
    },
    "1735211815": {
        "en": "Yesimuzak",
        "uz": "Yesimuzak",
        "ru": "Есимозек",
        "type": "31"
    },
    "1735211823": {
        "en": "Qarakul",
        "uz": "Qarakul",
        "ru": "Каpакуль",
        "type": "31"
    },
    "1735211826": {
        "en": "Qarabug'a",
        "uz": "Qarabug'a",
        "ru": "Карабуга",
        "type": "31"
    },
    "1735211828": {
        "en": "Qorauzek",
        "uz": "Qorauzek",
        "ru": "Караузяк",
        "type": "31"
    },
    "1735211830": {
        "en": "Qoyboq",
        "uz": "Qoyboq",
        "ru": "Койбак",
        "type": "31"
    },
    "1735211835": {
        "en": "Madeniyat",
        "uz": "Madeniyat",
        "ru": "Маденият",
        "type": "31"
    },
    "1735211837": {
        "en": "Berdax",
        "uz": "Berdax",
        "ru": "им. Бердах",
        "type": "31"
    },
    "1735212505": {
        "en": "Xalqobod",
        "uz": "Xalqobod",
        "ru": "Халкабад",
        "type": "23"
    },
    "1735212551": {
        "en": "Kegeyli",
        "uz": "Kegeyli",
        "ru": "Кегейли",
        "type": "24"
    },
    "1735212806": {
        "en": "Aktuba",
        "uz": "Aktuba",
        "ru": "Актуба",
        "type": "31"
    },
    "1735212815": {
        "en": "Janabazar",
        "uz": "Janabazar",
        "ru": "Жанабазар",
        "type": "31"
    },
    "1735212833": {
        "en": "Jalpak jap",
        "uz": "Jalpak jap",
        "ru": "Жалпакжап",
        "type": "31"
    },
    "1735212834": {
        "en": "Кок Озек",
        "uz": "Кок Озек",
        "ru": "Кок Озек",
        "type": "31"
    },
    "1735212835": {
        "en": "Kumshunkul",
        "uz": "Kumshunkul",
        "ru": "Кумшункуль",
        "type": "31"
    },
    "1735212839": {
        "en": "Juzim bag'",
        "uz": "Juzim bag'",
        "ru": "Жузим баг",
        "type": "31"
    },
    "1735212841": {
        "en": "Ийшан кала",
        "uz": "Ийшан кала",
        "ru": "Ийшан кала",
        "type": "31"
    },
    "1735212855": {
        "en": "Obad",
        "uz": "Obad",
        "ru": "Абад",
        "type": "31"
    },
    "1735215501": {
        "en": "Qo'ng'irot",
        "uz": "Qo'ng'irot",
        "ru": "Кунград",
        "type": "23"
    },
    "1735215552": {
        "en": "Jasliq",
        "uz": "Jasliq",
        "ru": "Жаслык",
        "type": "24"
    },
    "1735215554": {
        "en": "Qaraqalpaqstan",
        "uz": "Qaraqalpaqstan",
        "ru": "Каракалпакстан",
        "type": "24"
    },
    "1735215560": {
        "en": "Qiriqqiz",
        "uz": "Qiriqqiz",
        "ru": "Кырыккыз",
        "type": "24"
    },
    "1735215562": {
        "en": "Oltinko'l",
        "uz": "Oltinko'l",
        "ru": "Алтынкуль",
        "type": "24"
    },
    "1735215567": {
        "en": "Yelabad",
        "uz": "Yelabad",
        "ru": "Елабад",
        "type": "24"
    },
    "1735215806": {
        "en": "Adebiyat",
        "uz": "Adebiyat",
        "ru": "Адебият",
        "type": "31"
    },
    "1735215809": {
        "en": "Ajaniyaz-ata nomli",
        "uz": "Ajaniyaz-ata nomli",
        "ru": "им.Ажинияза",
        "type": "31"
    },
    "1735215811": {
        "en": "Qo'ng'irot",
        "uz": "Qo'ng'irot",
        "ru": "Кунгpад",
        "type": "31"
    },
    "1735215814": {
        "en": "Kanli",
        "uz": "Kanli",
        "ru": "Канлы",
        "type": "31"
    },
    "1735215818": {
        "en": "Urnek",
        "uz": "Urnek",
        "ru": "Орнек",
        "type": "31"
    },
    "1735215822": {
        "en": "Raushan",
        "uz": "Raushan",
        "ru": "Раушан",
        "type": "31"
    },
    "1735215826": {
        "en": "Suuyenli",
        "uz": "Suuyenli",
        "ru": "Сууенли",
        "type": "31"
    },
    "1735215830": {
        "en": "Ustyurt",
        "uz": "Ustyurt",
        "ru": "Устирт",
        "type": "31"
    },
    "1735215834": {
        "en": "Xorezm",
        "uz": "Xorezm",
        "ru": "Хорезм",
        "type": "31"
    },
    "1735215841": {
        "en": "Kokdarya",
        "uz": "Kokdarya",
        "ru": "Кокдарья",
        "type": "31"
    },
    "1735215845": {
        "en": "Miynetabad",
        "uz": "Miynetabad",
        "ru": "Мийнетабад",
        "type": "31"
    },
    "1735215847": {
        "en": "Qipshaq",
        "uz": "Qipshaq",
        "ru": "Кыпшак",
        "type": "31"
    },
    "1735218551": {
        "en": "Qanliko'l",
        "uz": "Qanliko'l",
        "ru": "Канлыкуль",
        "type": "24"
    },
    "1735218805": {
        "en": "Arzimbet qum",
        "uz": "Arzimbet qum",
        "ru": "Арзымбет кум",
        "type": "31"
    },
    "1735218808": {
        "en": "Bustan",
        "uz": "Bustan",
        "ru": "Бостон",
        "type": "31"
    },
    "1735218816": {
        "en": "Qanliko'l",
        "uz": "Qanliko'l",
        "ru": "Канлыкуль",
        "type": "31"
    },
    "1735218817": {
        "en": "Kosjap",
        "uz": "Kosjap",
        "ru": "Косжап",
        "type": "31"
    },
    "1735218819": {
        "en": "Beskupir",
        "uz": "Beskupir",
        "ru": "Бескопыр",
        "type": "31"
    },
    "1735218821": {
        "en": "Navriz",
        "uz": "Navriz",
        "ru": "Наурыз",
        "type": "31"
    },
    "1735218823": {
        "en": "Jana qal'a",
        "uz": "Jana qal'a",
        "ru": "Жана кала",
        "type": "31"
    },
    "1735222501": {
        "en": "Mo'ynoq",
        "uz": "Mo'ynoq",
        "ru": "Муйнак",
        "type": "23"
    },
    "1735222811": {
        "en": "Bozatau",
        "uz": "Bozatau",
        "ru": "Бозатау",
        "type": "31"
    },
    "1735222822": {
        "en": "Kazax-darya",
        "uz": "Kazax-darya",
        "ru": "Казахдарья",
        "type": "31"
    },
    "1735222833": {
        "en": "Madeli",
        "uz": "Madeli",
        "ru": "Мадели",
        "type": "31"
    },
    "1735222844": {
        "en": "Tik-uzyak",
        "uz": "Tik-uzyak",
        "ru": "Тикузяк",
        "type": "31"
    },
    "1735222855": {
        "en": "Uchsay",
        "uz": "Uchsay",
        "ru": "Учсай",
        "type": "31"
    },
    "1735222866": {
        "en": "Xakim-ata",
        "uz": "Xakim-ata",
        "ru": "Хаким-ата",
        "type": "31"
    },
    "1735222877": {
        "en": "Qizil jar",
        "uz": "Qizil jar",
        "ru": "Кизил жар",
        "type": "31"
    },
    "1735225551": {
        "en": "Oqmang'it",
        "uz": "Oqmang'it",
        "ru": "Акмангит",
        "type": "24"
    },
    "1735225822": {
        "en": "Bakanshakli",
        "uz": "Bakanshakli",
        "ru": "Баканшаклы",
        "type": "31"
    },
    "1735225835": {
        "en": "Krantau",
        "uz": "Krantau",
        "ru": "Крантау",
        "type": "31"
    },
    "1735225843": {
        "en": "Takirkul",
        "uz": "Takirkul",
        "ru": "Такыркол",
        "type": "31"
    },
    "1735225846": {
        "en": "Samanbay",
        "uz": "Samanbay",
        "ru": "Саманбай",
        "type": "31"
    },
    "1735225854": {
        "en": "Arbashi",
        "uz": "Arbashi",
        "ru": "Арбаши",
        "type": "31"
    },
    "1735225858": {
        "en": "Kerder",
        "uz": "Kerder",
        "ru": "Кеpдеp",
        "type": "31"
    },
    "1735228501": {
        "en": "Taxiatosh",
        "uz": "Taxiatosh",
        "ru": "Тахиаташ",
        "type": "23"
    },
    "1735228553": {
        "en": "Naymanko'l",
        "uz": "Naymanko'l",
        "ru": "Найманкул",
        "type": "24"
    },
    "1735228806": {
        "en": "Kenеgеs",
        "uz": "Kenеgеs",
        "ru": "Кенегес",
        "type": "31"
    },
    "1735228809": {
        "en": "Naymanko'l",
        "uz": "Naymanko'l",
        "ru": "Найманкул",
        "type": "31"
    },
    "1735228812": {
        "en": "Sarаyko'l",
        "uz": "Sarаyko'l",
        "ru": "Сарайкул",
        "type": "31"
    },
    "1735230551": {
        "en": "Taxtako'pir",
        "uz": "Taxtako'pir",
        "ru": "Тахтакупыр",
        "type": "24"
    },
    "1735230803": {
        "en": "Atakul",
        "uz": "Atakul",
        "ru": "Атакуль",
        "type": "31"
    },
    "1735230820": {
        "en": "Qara-oy",
        "uz": "Qara-oy",
        "ru": "Караой",
        "type": "31"
    },
    "1735230833": {
        "en": "Mulik",
        "uz": "Mulik",
        "ru": "Мулик",
        "type": "31"
    },
    "1735230835": {
        "en": "Qungrat kul",
        "uz": "Qungrat kul",
        "ru": "Коныраткол",
        "type": "31"
    },
    "1735230837": {
        "en": "Janadarya",
        "uz": "Janadarya",
        "ru": "Жанадаpья",
        "type": "31"
    },
    "1735230840": {
        "en": "Beltau",
        "uz": "Beltau",
        "ru": "Белтау",
        "type": "31"
    },
    "1735230844": {
        "en": "Qarateren",
        "uz": "Qarateren",
        "ru": "Каратерен",
        "type": "31"
    },
    "1735230877": {
        "en": "Taxtako'pir",
        "uz": "Taxtako'pir",
        "ru": "Тахтакупыр",
        "type": "31"
    },
    "1735233501": {
        "en": "To'rtko'l",
        "uz": "To'rtko'l",
        "ru": "Турткуль",
        "type": "23"
    },
    "1735233552": {
        "en": "Miskin",
        "uz": "Miskin",
        "ru": "Мискин",
        "type": "24"
    },
    "1735233554": {
        "en": "Turkmankuli",
        "uz": "Turkmankuli",
        "ru": "Туркманкули",
        "type": "24"
    },
    "1735233556": {
        "en": "Tozabog'",
        "uz": "Tozabog'",
        "ru": "Тозабог",
        "type": "24"
    },
    "1735233558": {
        "en": "Nurli yo'l",
        "uz": "Nurli yo'l",
        "ru": "Нурли-йул",
        "type": "24"
    },
    "1735233560": {
        "en": "Amirobod",
        "uz": "Amirobod",
        "ru": "Амирабад",
        "type": "24"
    },
    "1735233804": {
        "en": "Aqboshli",
        "uz": "Aqboshli",
        "ru": "Акбашлы",
        "type": "31"
    },
    "1735233806": {
        "en": "Aqqamish",
        "uz": "Aqqamish",
        "ru": "Аккамыш",
        "type": "31"
    },
    "1735233808": {
        "en": "Paxtaabad",
        "uz": "Paxtaabad",
        "ru": "Пахтаабад",
        "type": "31"
    },
    "1735233812": {
        "en": "Ata uba",
        "uz": "Ata uba",
        "ru": "Атауба",
        "type": "31"
    },
    "1735233816": {
        "en": "Kana Turtkul",
        "uz": "Kana Turtkul",
        "ru": "Кана Турткул",
        "type": "31"
    },
    "1735233828": {
        "en": "Yonboshqal'a",
        "uz": "Yonboshqal'a",
        "ru": "Джамбаскала",
        "type": "31"
    },
    "1735233830": {
        "en": "A.Durdiyeva",
        "uz": "A.Durdiyeva",
        "ru": "им. Дурдыева",
        "type": "31"
    },
    "1735233840": {
        "en": "Kelteminar",
        "uz": "Kelteminar",
        "ru": "Кельтеминар",
        "type": "31"
    },
    "1735233842": {
        "en": "Kukcha",
        "uz": "Kukcha",
        "ru": "Кокча",
        "type": "31"
    },
    "1735233844": {
        "en": "Qumbaskan",
        "uz": "Qumbaskan",
        "ru": "Кумбаскан",
        "type": "31"
    },
    "1735233878": {
        "en": "O'zbekiston",
        "uz": "O'zbekiston",
        "ru": "Узбекистон",
        "type": "31"
    },
    "1735233880": {
        "en": "Paxtachi",
        "uz": "Paxtachi",
        "ru": "Пахтачи",
        "type": "31"
    },
    "1735233881": {
        "en": "Tazabogyap",
        "uz": "Tazabogyap",
        "ru": "Тазабагяб",
        "type": "31"
    },
    "1735233892": {
        "en": "Ullubog'",
        "uz": "Ullubog'",
        "ru": "Уллубаг",
        "type": "31"
    },
    "1735233896": {
        "en": "Shuraxan",
        "uz": "Shuraxan",
        "ru": "Шурахан",
        "type": "31"
    },
    "1735236501": {
        "en": "Xo'jayli",
        "uz": "Xo'jayli",
        "ru": "Ходжейли",
        "type": "23"
    },
    "1735236553": {
        "en": "Vodnik",
        "uz": "Vodnik",
        "ru": "Водник",
        "type": "24"
    },
    "1735236811": {
        "en": "Amudarya",
        "uz": "Amudarya",
        "ru": "Амударья",
        "type": "31"
    },
    "1735236819": {
        "en": "Janajap",
        "uz": "Janajap",
        "ru": "Жанажап",
        "type": "31"
    },
    "1735236833": {
        "en": "Kulyab",
        "uz": "Kulyab",
        "ru": "Куляб",
        "type": "31"
    },
    "1735236839": {
        "en": "Mustaqillik",
        "uz": "Mustaqillik",
        "ru": "Мустакиллик",
        "type": "31"
    },
    "1735236855": {
        "en": "Samankol",
        "uz": "Samankol",
        "ru": "Саманкуль",
        "type": "31"
    },
    "1735236877": {
        "en": "Sarishunkul",
        "uz": "Sarishunkul",
        "ru": "Сарычункуль",
        "type": "31"
    },
    "1735236888": {
        "en": "Qumjiqqin",
        "uz": "Qumjiqqin",
        "ru": "Кумжиккин",
        "type": "31"
    },
    "1735240501": {
        "en": "Chimboy",
        "uz": "Chimboy",
        "ru": "Чимбай",
        "type": "23"
    },
    "1735240553": {
        "en": "Ayteke",
        "uz": "Ayteke",
        "ru": "Айтеке",
        "type": "24"
    },
    "1735240802": {
        "en": "Kizil uzek",
        "uz": "Kizil uzek",
        "ru": "Кызыл Озек",
        "type": "31"
    },
    "1735240812": {
        "en": "Kamisarik",
        "uz": "Kamisarik",
        "ru": "Камыс арык",
        "type": "31"
    },
    "1735240822": {
        "en": "Baxitli",
        "uz": "Baxitli",
        "ru": "Бахытлы",
        "type": "31"
    },
    "1735240833": {
        "en": "Kenes",
        "uz": "Kenes",
        "ru": "Кенес",
        "type": "31"
    },
    "1735240844": {
        "en": "Mayjap",
        "uz": "Mayjap",
        "ru": "Майжап",
        "type": "31"
    },
    "1735240848": {
        "en": "Pashen tov",
        "uz": "Pashen tov",
        "ru": "Пашент тау",
        "type": "31"
    },
    "1735240855": {
        "en": "Tazgara",
        "uz": "Tazgara",
        "ru": "Тазгаpа",
        "type": "31"
    },
    "1735240862": {
        "en": "Tagjap",
        "uz": "Tagjap",
        "ru": "Тагжап",
        "type": "31"
    },
    "1735240866": {
        "en": "Tazajol",
        "uz": "Tazajol",
        "ru": "Тазажол",
        "type": "31"
    },
    "1735240870": {
        "en": "Kosterek",
        "uz": "Kosterek",
        "ru": "Костеpек",
        "type": "31"
    },
    "1735243501": {
        "en": "Shumanay",
        "uz": "Shumanay",
        "ru": "Шуманай",
        "type": "23"
    },
    "1735243805": {
        "en": "Birleshik",
        "uz": "Birleshik",
        "ru": "Бирлешик",
        "type": "31"
    },
    "1735243809": {
        "en": "Begjap",
        "uz": "Begjap",
        "ru": "Бегжап",
        "type": "31"
    },
    "1735243812": {
        "en": "Diyxanabad",
        "uz": "Diyxanabad",
        "ru": "Дийханабад",
        "type": "31"
    },
    "1735243818": {
        "en": "Mamiy",
        "uz": "Mamiy",
        "ru": "Мамый",
        "type": "31"
    },
    "1735243821": {
        "en": "Sarmanbaykol",
        "uz": "Sarmanbaykol",
        "ru": "Сарманбайкол",
        "type": "31"
    },
    "1735243825": {
        "en": "Ak jap",
        "uz": "Ak jap",
        "ru": "Акжап",
        "type": "31"
    },
    "1735243830": {
        "en": "Ketenler",
        "uz": "Ketenler",
        "ru": "Кетенлер",
        "type": "31"
    },
    "1735250501": {
        "en": "Bo'ston",
        "uz": "Bo'ston",
        "ru": "Бустан",
        "type": "23"
    },
    "1735250555": {
        "en": "Saxtiyon",
        "uz": "Saxtiyon",
        "ru": "Сахтиен",
        "type": "24"
    },
    "1735250803": {
        "en": "Aqchakul",
        "uz": "Aqchakul",
        "ru": "Акчакуль",
        "type": "31"
    },
    "1735250807": {
        "en": "Gulistan",
        "uz": "Gulistan",
        "ru": "Гулистан",
        "type": "31"
    },
    "1735250808": {
        "en": "Guldursun",
        "uz": "Guldursun",
        "ru": "Гульдирсин",
        "type": "31"
    },
    "1735250812": {
        "en": "Taza bog'",
        "uz": "Taza bog'",
        "ru": "Тазабог",
        "type": "31"
    },
    "1735250815": {
        "en": "Sarabiy",
        "uz": "Sarabiy",
        "ru": "Саpабий",
        "type": "31"
    },
    "1735250820": {
        "en": "Qizil qum",
        "uz": "Qizil qum",
        "ru": "Кызылкум",
        "type": "31"
    },
    "1735250823": {
        "en": "Qirqqiz",
        "uz": "Qirqqiz",
        "ru": "Кырккыз",
        "type": "31"
    },
    "1735250827": {
        "en": "Navoiy nomli",
        "uz": "Navoiy nomli",
        "ru": "им. Навои",
        "type": "31"
    },
    "1735250830": {
        "en": "Qilchinok",
        "uz": "Qilchinok",
        "ru": "Килчинак",
        "type": "31"
    },
    "1735250835": {
        "en": "Amirabad",
        "uz": "Amirabad",
        "ru": "Амирабад",
        "type": "31"
    },
    "1735250850": {
        "en": "Sharq Yulduzi",
        "uz": "Sharq Yulduzi",
        "ru": "Шарк-Юлдузи",
        "type": "31"
    },
    "1735250855": {
        "en": "Ellikkala",
        "uz": "Ellikkala",
        "ru": "Элликкала",
        "type": "31"
    },
    "1735250860": {
        "en": "Do'stlik",
        "uz": "Do'stlik",
        "ru": "Дустлик",
        "type": "31"
    },
    "1735401554": {
        "en": "Karatau",
        "uz": "Karatau",
        "ru": "Каратау",
        "type": "24"
    }
}

export const settlement_types: Code_Names = {
    "10": {
        "en": "Region",
        "uz": "Viloyati",
        "ru": "Oбласть"
    },
    "20": {
        "en": "District",
        "uz": "Tumani",
        "ru": "Район"
    },
    "24": {
        "en": "Urban-type settlement",
        "uz": "Tuman ichidagi shaharchalar",
        "ru": "Городские поселки"
    },
    "31": {
        "en": "Rural community",
        "uz": "Qishloq fuqarolar yig'ini",
        "ru": "Сельские сходы граждан"
    },
    "23": {
        "en": "Town",
        "uz": "Tuman ahamiyatiga ega shaharlar",
        "ru": "Города районного подч."
    },
    "21": {
        "en": "District-level city",
        "uz": "Viloyat ahamiyatiga ega shaharlar",
        "ru": "Города областного подчинения"
    },
    "22": {
        "en": "City District",
        "uz": "Shaxarning tumanlari",
        "ru": "Районы города"
    }
}

export const administrative: Administrative = {
    "1703": {
        "en": "Andijan region",
        "uz": "Andijon viloyati",
        "ru": "Андижанская область",
        "districts": {
            "1703202": {
                "en": "Oltinko'l district",
                "uz": "Oltinko'l tumani",
                "ru": "Алтынкульский район",
                "type": "20",
                "settlements": {
                    "1703202552": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустон",
                        "type": "24"
                    },
                    "1703202554": {
                        "en": "Dalvarzin",
                        "uz": "Dalvarzin",
                        "ru": "Далварзин",
                        "type": "24"
                    },
                    "1703202556": {
                        "en": "Jalabek",
                        "uz": "Jalabek",
                        "ru": "Жалабек",
                        "type": "24"
                    },
                    "1703202558": {
                        "en": "Ijtimoiyat",
                        "uz": "Ijtimoiyat",
                        "ru": "Ижтимоият",
                        "type": "24"
                    },
                    "1703202562": {
                        "en": "Kumakay",
                        "uz": "Kumakay",
                        "ru": "Кумакай",
                        "type": "24"
                    },
                    "1703202564": {
                        "en": "Qo'shtepa",
                        "uz": "Qo'shtepa",
                        "ru": "Куштепа",
                        "type": "24"
                    },
                    "1703202566": {
                        "en": "Madaniy mehnat",
                        "uz": "Madaniy mehnat",
                        "ru": "Маданий мехнат",
                        "type": "24"
                    },
                    "1703202568": {
                        "en": "Markaz",
                        "uz": "Markaz",
                        "ru": "Марказ",
                        "type": "24"
                    },
                    "1703202572": {
                        "en": "Maslahat",
                        "uz": "Maslahat",
                        "ru": "Маслахат",
                        "type": "24"
                    },
                    "1703202574": {
                        "en": "Namuna",
                        "uz": "Namuna",
                        "ru": "Намуна",
                        "type": "24"
                    },
                    "1703202576": {
                        "en": "Xondibog'i",
                        "uz": "Xondibog'i",
                        "ru": "Хондибоги",
                        "type": "24"
                    },
                    "1703202804": {
                        "en": "Oltinko'l",
                        "uz": "Oltinko'l",
                        "ru": "Алтынкуль",
                        "type": "31"
                    },
                    "1703202807": {
                        "en": "Oxunboboyev nomli",
                        "uz": "Oxunboboyev nomli",
                        "ru": "им. Ахунбабаева",
                        "type": "31"
                    },
                    "1703202813": {
                        "en": "Jalabek",
                        "uz": "Jalabek",
                        "ru": "Джалабек",
                        "type": "31"
                    },
                    "1703202820": {
                        "en": "Qo'shtepasaroy",
                        "uz": "Qo'shtepasaroy",
                        "ru": "Коштепасарай",
                        "type": "31"
                    },
                    "1703202825": {
                        "en": "Kumakay",
                        "uz": "Kumakay",
                        "ru": "Кумакай",
                        "type": "31"
                    },
                    "1703202830": {
                        "en": "Maslahat",
                        "uz": "Maslahat",
                        "ru": "Маслахат",
                        "type": "31"
                    },
                    "1703202834": {
                        "en": "Oraziy",
                        "uz": "Oraziy",
                        "ru": "им. Орази",
                        "type": "31"
                    },
                    "1703202840": {
                        "en": "Suvyulduz",
                        "uz": "Suvyulduz",
                        "ru": "Сувюлдуз",
                        "type": "31"
                    }
                }
            },
            "1703203": {
                "en": "Andijon district",
                "uz": "Andijon tumani",
                "ru": "Андижанский район",
                "type": "20",
                "settlements": {
                    "1703203551": {
                        "en": "Kuyganyor",
                        "uz": "Kuyganyor",
                        "ru": "Куйган - яр",
                        "type": "24"
                    },
                    "1703203553": {
                        "en": "Ayrilish",
                        "uz": "Ayrilish",
                        "ru": "Айрилиш",
                        "type": "24"
                    },
                    "1703203555": {
                        "en": "Butaqora",
                        "uz": "Butaqora",
                        "ru": "Бутакора",
                        "type": "24"
                    },
                    "1703203557": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистон",
                        "type": "24"
                    },
                    "1703203559": {
                        "en": "Gumbaz",
                        "uz": "Gumbaz",
                        "ru": "Гумбаз",
                        "type": "24"
                    },
                    "1703203561": {
                        "en": "Zavroq",
                        "uz": "Zavroq",
                        "ru": "Заврок",
                        "type": "24"
                    },
                    "1703203563": {
                        "en": "Qoraqalpoq",
                        "uz": "Qoraqalpoq",
                        "ru": "Каракалпак",
                        "type": "24"
                    },
                    "1703203567": {
                        "en": "Kunji",
                        "uz": "Kunji",
                        "ru": "Кунжи",
                        "type": "24"
                    },
                    "1703203569": {
                        "en": "Qo'shariq",
                        "uz": "Qo'shariq",
                        "ru": "Кушарик",
                        "type": "24"
                    },
                    "1703203571": {
                        "en": "Namuna",
                        "uz": "Namuna",
                        "ru": "Намуна",
                        "type": "24"
                    },
                    "1703203573": {
                        "en": "Og'ullik",
                        "uz": "Og'ullik",
                        "ru": "Огуллик",
                        "type": "24"
                    },
                    "1703203575": {
                        "en": "Oq-yor",
                        "uz": "Oq-yor",
                        "ru": "Ок-ер",
                        "type": "24"
                    },
                    "1703203577": {
                        "en": "Rovvot",
                        "uz": "Rovvot",
                        "ru": "Роввот",
                        "type": "24"
                    },
                    "1703203579": {
                        "en": "Xartum",
                        "uz": "Xartum",
                        "ru": "Хартум",
                        "type": "24"
                    },
                    "1703203581": {
                        "en": "Chilon",
                        "uz": "Chilon",
                        "ru": "Чилон",
                        "type": "24"
                    },
                    "1703203583": {
                        "en": "Chumbog'ich",
                        "uz": "Chumbog'ich",
                        "ru": "Чумбогич",
                        "type": "24"
                    },
                    "1703203585": {
                        "en": "Ekin tikin",
                        "uz": "Ekin tikin",
                        "ru": "Экин-тикин",
                        "type": "24"
                    },
                    "1703203587": {
                        "en": "Yangiobod",
                        "uz": "Yangiobod",
                        "ru": "Янгиабад",
                        "type": "24"
                    },
                    "1703203589": {
                        "en": "Gulobod",
                        "uz": "Gulobod",
                        "ru": "Гулобод",
                        "type": "24"
                    },
                    "1703203803": {
                        "en": "Oq-Yor",
                        "uz": "Oq-Yor",
                        "ru": "Ак-яр",
                        "type": "31"
                    },
                    "1703203813": {
                        "en": "Bo'taqora",
                        "uz": "Bo'taqora",
                        "ru": "Бутакара",
                        "type": "31"
                    },
                    "1703203829": {
                        "en": "Qo'nji",
                        "uz": "Qo'nji",
                        "ru": "Кунджи",
                        "type": "31"
                    },
                    "1703203838": {
                        "en": "Nayman",
                        "uz": "Nayman",
                        "ru": "Найман",
                        "type": "31"
                    },
                    "1703203849": {
                        "en": "Xakan",
                        "uz": "Xakan",
                        "ru": "Хакан",
                        "type": "31"
                    },
                    "1703203863": {
                        "en": "Xrabek",
                        "uz": "Xrabek",
                        "ru": "Хирабек",
                        "type": "31"
                    },
                    "1703203866": {
                        "en": "Xartum",
                        "uz": "Xartum",
                        "ru": "Хартум",
                        "type": "31"
                    },
                    "1703203874": {
                        "en": "Orol",
                        "uz": "Orol",
                        "ru": "Аpал",
                        "type": "31"
                    },
                    "1703203885": {
                        "en": "Yorboshi",
                        "uz": "Yorboshi",
                        "ru": "Ярбаши",
                        "type": "31"
                    }
                }
            },
            "1703206": {
                "en": "Baliqchi district",
                "uz": "Baliqchi tumani",
                "ru": "Балыкчинский район",
                "type": "20",
                "settlements": {
                    "1703206551": {
                        "en": "Baliqchi",
                        "uz": "Baliqchi",
                        "ru": "Баликчи",
                        "type": "24"
                    },
                    "1703206554": {
                        "en": "Xo'jaobod",
                        "uz": "Xo'jaobod",
                        "ru": "Хужаабад",
                        "type": "24"
                    },
                    "1703206558": {
                        "en": "Chinobod markaz",
                        "uz": "Chinobod markaz",
                        "ru": "Чинобод марказ",
                        "type": "24"
                    },
                    "1703206803": {
                        "en": "Olimbek",
                        "uz": "Olimbek",
                        "ru": "Алимбек",
                        "type": "31"
                    },
                    "1703206807": {
                        "en": "Oxunboboyev nomli",
                        "uz": "Oxunboboyev nomli",
                        "ru": "им. Ахунбабаева",
                        "type": "31"
                    },
                    "1703206813": {
                        "en": "Baliqchi",
                        "uz": "Baliqchi",
                        "ru": "Балыкчи",
                        "type": "31"
                    },
                    "1703206824": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистан",
                        "type": "31"
                    },
                    "1703206831": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустан",
                        "type": "31"
                    },
                    "1703206846": {
                        "en": "Siza",
                        "uz": "Siza",
                        "ru": "Сиза",
                        "type": "31"
                    },
                    "1703206857": {
                        "en": "O'rmonbek",
                        "uz": "O'rmonbek",
                        "ru": "Урманбек",
                        "type": "31"
                    },
                    "1703206868": {
                        "en": "Xo'jaobod",
                        "uz": "Xo'jaobod",
                        "ru": "Ходжаабад",
                        "type": "31"
                    },
                    "1703206879": {
                        "en": "Eskixaqqulobod",
                        "uz": "Eskixaqqulobod",
                        "ru": "Эски Хаккулабад",
                        "type": "31"
                    }
                }
            },
            "1703209": {
                "en": "Bo'ston district",
                "uz": "Bo'ston tumani",
                "ru": "Бустонский район",
                "type": "20",
                "settlements": {
                    "1703209551": {
                        "en": "Bo'z",
                        "uz": "Bo'z",
                        "ru": "Боз",
                        "type": "24"
                    },
                    "1703209555": {
                        "en": "M.Jalolov nomli",
                        "uz": "M.Jalolov nomli",
                        "ru": "М.Жалолов",
                        "type": "24"
                    },
                    "1703209559": {
                        "en": "Xoldevonbek",
                        "uz": "Xoldevonbek",
                        "ru": "Холдевонбек",
                        "type": "24"
                    },
                    "1703209811": {
                        "en": "Xoldevonbek",
                        "uz": "Xoldevonbek",
                        "ru": "Халдеванбек",
                        "type": "31"
                    },
                    "1703209846": {
                        "en": "M.Jalolov nomli",
                        "uz": "M.Jalolov nomli",
                        "ru": "им. М. Джалалова",
                        "type": "31"
                    },
                    "1703209857": {
                        "en": "Xovos",
                        "uz": "Xovos",
                        "ru": "Хавас",
                        "type": "31"
                    }
                }
            },
            "1703210": {
                "en": "Buloqboshi district",
                "uz": "Buloqboshi tumani",
                "ru": "Булакбашинский район",
                "type": "20",
                "settlements": {
                    "1703210551": {
                        "en": "Buloqboshi",
                        "uz": "Buloqboshi",
                        "ru": "Булокбоши",
                        "type": "24"
                    },
                    "1703210554": {
                        "en": "Andijon",
                        "uz": "Andijon",
                        "ru": "Андижан",
                        "type": "24"
                    },
                    "1703210561": {
                        "en": "Uchtepa",
                        "uz": "Uchtepa",
                        "ru": "Учтепа",
                        "type": "24"
                    },
                    "1703210564": {
                        "en": "Shirmonbuloq",
                        "uz": "Shirmonbuloq",
                        "ru": "Ширмонбулок",
                        "type": "24"
                    },
                    "1703210812": {
                        "en": "Buloqboshi",
                        "uz": "Buloqboshi",
                        "ru": "Булакбаши",
                        "type": "31"
                    },
                    "1703210832": {
                        "en": "Kulla",
                        "uz": "Kulla",
                        "ru": "Кулла",
                        "type": "31"
                    },
                    "1703210838": {
                        "en": "Mayariq",
                        "uz": "Mayariq",
                        "ru": "Майарык",
                        "type": "31"
                    },
                    "1703210850": {
                        "en": "Nayman",
                        "uz": "Nayman",
                        "ru": "Найман",
                        "type": "31"
                    },
                    "1703210894": {
                        "en": "Shirmonbuloq",
                        "uz": "Shirmonbuloq",
                        "ru": "Ширманбулак",
                        "type": "31"
                    }
                }
            },
            "1703211": {
                "en": "Jalaquduq district",
                "uz": "Jalaquduq tumani",
                "ru": "Жалакудукский район",
                "type": "20",
                "settlements": {
                    "1703211501": {
                        "en": "Jalaquduq",
                        "uz": "Jalaquduq",
                        "ru": "Жалакудук",
                        "type": "23"
                    },
                    "1703211554": {
                        "en": "Janubiy olamushuk",
                        "uz": "Janubiy olamushuk",
                        "ru": "Южный Аламышик",
                        "type": "24"
                    },
                    "1703211556": {
                        "en": "Beshtol",
                        "uz": "Beshtol",
                        "ru": "Бештол",
                        "type": "24"
                    },
                    "1703211558": {
                        "en": "Yorqishloq",
                        "uz": "Yorqishloq",
                        "ru": "Еркишлок",
                        "type": "24"
                    },
                    "1703211562": {
                        "en": "Jalaquduq",
                        "uz": "Jalaquduq",
                        "ru": "Жалакудук",
                        "type": "24"
                    },
                    "1703211564": {
                        "en": "Ko'kalam",
                        "uz": "Ko'kalam",
                        "ru": "Кукалам",
                        "type": "24"
                    },
                    "1703211566": {
                        "en": "Qo'shtepa",
                        "uz": "Qo'shtepa",
                        "ru": "Куштепа",
                        "type": "24"
                    },
                    "1703211568": {
                        "en": "Oyim",
                        "uz": "Oyim",
                        "ru": "Ойим",
                        "type": "24"
                    },
                    "1703211804": {
                        "en": "Abdullabiy",
                        "uz": "Abdullabiy",
                        "ru": "Абдуллабий",
                        "type": "31"
                    },
                    "1703211807": {
                        "en": "Oyim",
                        "uz": "Oyim",
                        "ru": "Аим",
                        "type": "31"
                    },
                    "1703211814": {
                        "en": "Beshtal",
                        "uz": "Beshtal",
                        "ru": "Бештал",
                        "type": "31"
                    },
                    "1703211818": {
                        "en": "Jalolquduq",
                        "uz": "Jalolquduq",
                        "ru": "Джалалкудук",
                        "type": "31"
                    },
                    "1703211824": {
                        "en": "Qatortol",
                        "uz": "Qatortol",
                        "ru": "Катартал",
                        "type": "31"
                    },
                    "1703211830": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистан",
                        "type": "31"
                    },
                    "1703211834": {
                        "en": "Teshiktosh",
                        "uz": "Teshiktosh",
                        "ru": "Тешикташ",
                        "type": "31"
                    },
                    "1703211841": {
                        "en": "Yorqishloq",
                        "uz": "Yorqishloq",
                        "ru": "Яркишлак",
                        "type": "31"
                    }
                }
            },
            "1703214": {
                "en": "Izboskan district",
                "uz": "Izboskan tumani",
                "ru": "Избасканский район",
                "type": "20",
                "settlements": {
                    "1703214501": {
                        "en": "Paytug",
                        "uz": "Paytug",
                        "ru": "Пайтуг",
                        "type": "23"
                    },
                    "1703214553": {
                        "en": "Gurkirov",
                        "uz": "Gurkirov",
                        "ru": "Гуркиров",
                        "type": "24"
                    },
                    "1703214556": {
                        "en": "Maygir",
                        "uz": "Maygir",
                        "ru": "Майгир",
                        "type": "24"
                    },
                    "1703214559": {
                        "en": "To'rtko'l",
                        "uz": "To'rtko'l",
                        "ru": "Турткул",
                        "type": "24"
                    },
                    "1703214563": {
                        "en": "Uzun ko'cha",
                        "uz": "Uzun ko'cha",
                        "ru": "Узун куча",
                        "type": "24"
                    },
                    "1703214811": {
                        "en": "Izboskan",
                        "uz": "Izboskan",
                        "ru": "Избаскан",
                        "type": "31"
                    },
                    "1703214822": {
                        "en": "Maygir",
                        "uz": "Maygir",
                        "ru": "Майгир",
                        "type": "31"
                    },
                    "1703214833": {
                        "en": "Namuna",
                        "uz": "Namuna",
                        "ru": "Намуна",
                        "type": "31"
                    },
                    "1703214844": {
                        "en": "O'rtoqlar",
                        "uz": "O'rtoqlar",
                        "ru": "Уртаклар",
                        "type": "31"
                    },
                    "1703214855": {
                        "en": "Shermatobod",
                        "uz": "Shermatobod",
                        "ru": "Шерматабад",
                        "type": "31"
                    },
                    "1703214860": {
                        "en": "Erkin",
                        "uz": "Erkin",
                        "ru": "Эркин",
                        "type": "31"
                    },
                    "1703214866": {
                        "en": "Yangizamon",
                        "uz": "Yangizamon",
                        "ru": "Янгизамон",
                        "type": "31"
                    },
                    "1703214877": {
                        "en": "Yangi qishloq",
                        "uz": "Yangi qishloq",
                        "ru": "Янгикишлак",
                        "type": "31"
                    },
                    "1703214885": {
                        "en": "Yakkatut",
                        "uz": "Yakkatut",
                        "ru": "Яккатут",
                        "type": "31"
                    }
                }
            },
            "1703217": {
                "en": "Ulug'nor district",
                "uz": "Ulug'nor tumani",
                "ru": "Улугноpский район",
                "type": "20",
                "settlements": {
                    "1703217551": {
                        "en": "Oq oltin",
                        "uz": "Oq oltin",
                        "ru": "Ок-олтин",
                        "type": "24"
                    },
                    "1703217810": {
                        "en": "Oq oltin",
                        "uz": "Oq oltin",
                        "ru": "Акалтын",
                        "type": "31"
                    },
                    "1703217815": {
                        "en": "Mingchinor",
                        "uz": "Mingchinor",
                        "ru": "Мингчинаp",
                        "type": "31"
                    },
                    "1703217820": {
                        "en": "Mingbuloq",
                        "uz": "Mingbuloq",
                        "ru": "Мингбулак",
                        "type": "31"
                    },
                    "1703217830": {
                        "en": "Navoiy nomli",
                        "uz": "Navoiy nomli",
                        "ru": "им. Навои",
                        "type": "31"
                    }
                }
            },
            "1703220": {
                "en": "Qo'rg'ontepa district",
                "uz": "Qo'rg'ontepa tumani",
                "ru": "Кургантепинский район",
                "type": "20",
                "settlements": {
                    "1703220501": {
                        "en": "Qo'rg'ontepa",
                        "uz": "Qo'rg'ontepa",
                        "ru": "Кургантепа",
                        "type": "23"
                    },
                    "1703220505": {
                        "en": "Qorasuv",
                        "uz": "Qorasuv",
                        "ru": "Карасу",
                        "type": "23"
                    },
                    "1703220553": {
                        "en": "Sultonobod",
                        "uz": "Sultonobod",
                        "ru": "Султонабад",
                        "type": "24"
                    },
                    "1703220813": {
                        "en": "Dardok",
                        "uz": "Dardok",
                        "ru": "Дардак",
                        "type": "31"
                    },
                    "1703220836": {
                        "en": "Qo'rg'ontepa",
                        "uz": "Qo'rg'ontepa",
                        "ru": "Кургантепа",
                        "type": "31"
                    },
                    "1703220847": {
                        "en": "Savay",
                        "uz": "Savay",
                        "ru": "Савай",
                        "type": "31"
                    },
                    "1703220858": {
                        "en": "Sultonobod",
                        "uz": "Sultonobod",
                        "ru": "Султанабад",
                        "type": "31"
                    },
                    "1703220872": {
                        "en": "Chimyon",
                        "uz": "Chimyon",
                        "ru": "Чимион",
                        "type": "31"
                    }
                }
            },
            "1703224": {
                "en": "Asaka district",
                "uz": "Asaka tumani",
                "ru": "Асакинский район",
                "type": "20",
                "settlements": {
                    "1703224501": {
                        "en": "Asaka",
                        "uz": "Asaka",
                        "ru": "Асака",
                        "type": "23"
                    },
                    "1703224552": {
                        "en": "Kujgan",
                        "uz": "Kujgan",
                        "ru": "Кужган",
                        "type": "24"
                    },
                    "1703224554": {
                        "en": "Navkan",
                        "uz": "Navkan",
                        "ru": "Навкан",
                        "type": "24"
                    },
                    "1703224556": {
                        "en": "Oqbo'yra",
                        "uz": "Oqbo'yra",
                        "ru": "Окбуйра",
                        "type": "24"
                    },
                    "1703224558": {
                        "en": "T.Aliyev",
                        "uz": "T.Aliyev",
                        "ru": "Т.Алиев",
                        "type": "24"
                    },
                    "1703224811": {
                        "en": "Zarbdor",
                        "uz": "Zarbdor",
                        "ru": "Зарбдар",
                        "type": "31"
                    },
                    "1703224822": {
                        "en": "Ilg'or",
                        "uz": "Ilg'or",
                        "ru": "Илгар",
                        "type": "31"
                    },
                    "1703224833": {
                        "en": "Qoratepa",
                        "uz": "Qoratepa",
                        "ru": "Каpатепа",
                        "type": "31"
                    },
                    "1703224844": {
                        "en": "Kujgan",
                        "uz": "Kujgan",
                        "ru": "Кужган",
                        "type": "31"
                    },
                    "1703224855": {
                        "en": "Qadim",
                        "uz": "Qadim",
                        "ru": "Кадим",
                        "type": "31"
                    },
                    "1703224866": {
                        "en": "Mustahkam",
                        "uz": "Mustahkam",
                        "ru": "Мустахкам",
                        "type": "31"
                    },
                    "1703224877": {
                        "en": "O'zbekiston",
                        "uz": "O'zbekiston",
                        "ru": "Узбекистан",
                        "type": "31"
                    },
                    "1703224885": {
                        "en": "Niyozbotir",
                        "uz": "Niyozbotir",
                        "ru": "Ниязбатыр",
                        "type": "31"
                    }
                }
            },
            "1703227": {
                "en": "Marxamat district",
                "uz": "Marxamat tumani",
                "ru": "Мархаматский район",
                "type": "20",
                "settlements": {
                    "1703227501": {
                        "en": "Marxamat",
                        "uz": "Marxamat",
                        "ru": "Мархамат",
                        "type": "23"
                    },
                    "1703227554": {
                        "en": "Polvontosh",
                        "uz": "Polvontosh",
                        "ru": "Палванташ",
                        "type": "24"
                    },
                    "1703227557": {
                        "en": "Boboxuroson",
                        "uz": "Boboxuroson",
                        "ru": "Бобохуросон",
                        "type": "24"
                    },
                    "1703227561": {
                        "en": "Qorabog'ish",
                        "uz": "Qorabog'ish",
                        "ru": "Корабогиш",
                        "type": "24"
                    },
                    "1703227564": {
                        "en": "Qoraqo'rg'on",
                        "uz": "Qoraqo'rg'on",
                        "ru": "Коракургон",
                        "type": "24"
                    },
                    "1703227567": {
                        "en": "Ko'tarma",
                        "uz": "Ko'tarma",
                        "ru": "Кутарма",
                        "type": "24"
                    },
                    "1703227571": {
                        "en": "Marxamat",
                        "uz": "Marxamat",
                        "ru": "Мархамат",
                        "type": "24"
                    },
                    "1703227574": {
                        "en": "Rovot",
                        "uz": "Rovot",
                        "ru": "Ровот",
                        "type": "24"
                    },
                    "1703227577": {
                        "en": "O'qchi",
                        "uz": "O'qchi",
                        "ru": "Укчи",
                        "type": "24"
                    },
                    "1703227581": {
                        "en": "Xakka",
                        "uz": "Xakka",
                        "ru": "Хакка",
                        "type": "24"
                    },
                    "1703227584": {
                        "en": "Xo'jaariq",
                        "uz": "Xo'jaariq",
                        "ru": "Хужаарик",
                        "type": "24"
                    },
                    "1703227811": {
                        "en": "Qoraqo'rg'on",
                        "uz": "Qoraqo'rg'on",
                        "ru": "Каракурган",
                        "type": "31"
                    },
                    "1703227816": {
                        "en": "Qorabog'ish",
                        "uz": "Qorabog'ish",
                        "ru": "Карабагиш",
                        "type": "31"
                    },
                    "1703227822": {
                        "en": "Ko'tarma",
                        "uz": "Ko'tarma",
                        "ru": "Кутарма",
                        "type": "31"
                    },
                    "1703227833": {
                        "en": "Marxamat",
                        "uz": "Marxamat",
                        "ru": "Мархамат",
                        "type": "31"
                    },
                    "1703227855": {
                        "en": "Shukurmergan",
                        "uz": "Shukurmergan",
                        "ru": "Шукурмерган",
                        "type": "31"
                    }
                }
            },
            "1703230": {
                "en": "Shaxrixon district",
                "uz": "Shaxrixon tumani",
                "ru": "Шахриханский район",
                "type": "20",
                "settlements": {
                    "1703230501": {
                        "en": "Shaxrixon",
                        "uz": "Shaxrixon",
                        "ru": "Шахрихан",
                        "type": "23"
                    },
                    "1703230552": {
                        "en": "Vaxim",
                        "uz": "Vaxim",
                        "ru": "Вахим",
                        "type": "24"
                    },
                    "1703230554": {
                        "en": "Cho'ja",
                        "uz": "Cho'ja",
                        "ru": "Чужа",
                        "type": "24"
                    },
                    "1703230556": {
                        "en": "Segaza kum",
                        "uz": "Segaza kum",
                        "ru": "Сегаза кум",
                        "type": "24"
                    },
                    "1703230811": {
                        "en": "Cho'ja",
                        "uz": "Cho'ja",
                        "ru": "Чужа",
                        "type": "31"
                    },
                    "1703230822": {
                        "en": "Naynavo",
                        "uz": "Naynavo",
                        "ru": "Найнава",
                        "type": "31"
                    },
                    "1703230826": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистан",
                        "type": "31"
                    },
                    "1703230835": {
                        "en": "Paxtaobod",
                        "uz": "Paxtaobod",
                        "ru": "Пахтаабад",
                        "type": "31"
                    },
                    "1703230846": {
                        "en": "Toshtepa",
                        "uz": "Toshtepa",
                        "ru": "Таштепа",
                        "type": "31"
                    },
                    "1703230857": {
                        "en": "O'zbekiston",
                        "uz": "O'zbekiston",
                        "ru": "Узбекистан",
                        "type": "31"
                    },
                    "1703230862": {
                        "en": "O'rta Shaxrixon",
                        "uz": "O'rta Shaxrixon",
                        "ru": "Урта Шахрихан",
                        "type": "31"
                    },
                    "1703230869": {
                        "en": "Xaqiqat",
                        "uz": "Xaqiqat",
                        "ru": "Хакикат",
                        "type": "31"
                    },
                    "1703230872": {
                        "en": "Abdubiy",
                        "uz": "Abdubiy",
                        "ru": "Абдубий",
                        "type": "31"
                    },
                    "1703230882": {
                        "en": "Yangi yo'l",
                        "uz": "Yangi yo'l",
                        "ru": "Янгиюль",
                        "type": "31"
                    },
                    "1703230890": {
                        "en": "Nazarmaxram",
                        "uz": "Nazarmaxram",
                        "ru": "Назармахрам",
                        "type": "31"
                    },
                    "1703230898": {
                        "en": "Yuqori Shaxrixon",
                        "uz": "Yuqori Shaxrixon",
                        "ru": "Юкори  Шахрихан",
                        "type": "31"
                    }
                }
            },
            "1703232": {
                "en": "Paxtaobod district",
                "uz": "Paxtaobod tumani",
                "ru": "Пахтаабадский район",
                "type": "20",
                "settlements": {
                    "1703232501": {
                        "en": "Paxtaobod",
                        "uz": "Paxtaobod",
                        "ru": "Пахтаабад",
                        "type": "23"
                    },
                    "1703232556": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "24"
                    },
                    "1703232559": {
                        "en": "Izboskan",
                        "uz": "Izboskan",
                        "ru": "Избоскан",
                        "type": "24"
                    },
                    "1703232563": {
                        "en": "Pushmon",
                        "uz": "Pushmon",
                        "ru": "Пушмон",
                        "type": "24"
                    },
                    "1703232803": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустан",
                        "type": "31"
                    },
                    "1703232810": {
                        "en": "Ittifoq",
                        "uz": "Ittifoq",
                        "ru": "Иттифак",
                        "type": "31"
                    },
                    "1703232820": {
                        "en": "Madaniyat",
                        "uz": "Madaniyat",
                        "ru": "Маданият",
                        "type": "31"
                    },
                    "1703232834": {
                        "en": "Paxtakor",
                        "uz": "Paxtakor",
                        "ru": "Пахтакор",
                        "type": "31"
                    },
                    "1703232845": {
                        "en": "Uyg'ur",
                        "uz": "Uyg'ur",
                        "ru": "Уйгур",
                        "type": "31"
                    }
                }
            },
            "1703236": {
                "en": "Xo'jaobod district",
                "uz": "Xo'jaobod tumani",
                "ru": "Ходжаабадский район",
                "type": "20",
                "settlements": {
                    "1703236501": {
                        "en": "Xo'jaobod",
                        "uz": "Xo'jaobod",
                        "ru": "Ходжаабад",
                        "type": "23"
                    },
                    "1703236552": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистон",
                        "type": "24"
                    },
                    "1703236554": {
                        "en": "Dilkushod",
                        "uz": "Dilkushod",
                        "ru": "Дилкушод",
                        "type": "24"
                    },
                    "1703236558": {
                        "en": "Ko'tarma",
                        "uz": "Ko'tarma",
                        "ru": "Кутарма",
                        "type": "24"
                    },
                    "1703236562": {
                        "en": "Manak",
                        "uz": "Manak",
                        "ru": "Манак",
                        "type": "24"
                    },
                    "1703236564": {
                        "en": "Xidirsha",
                        "uz": "Xidirsha",
                        "ru": "Хидирша",
                        "type": "24"
                    },
                    "1703236826": {
                        "en": "Manak",
                        "uz": "Manak",
                        "ru": "Манак",
                        "type": "31"
                    },
                    "1703236861": {
                        "en": "Birlashgan",
                        "uz": "Birlashgan",
                        "ru": "Биpлашган",
                        "type": "31"
                    },
                    "1703236872": {
                        "en": "Oltin vodiy",
                        "uz": "Oltin vodiy",
                        "ru": "Олтин водий",
                        "type": "31"
                    },
                    "1703236883": {
                        "en": "Xo'jaobod",
                        "uz": "Xo'jaobod",
                        "ru": "Ходжаабад",
                        "type": "31"
                    }
                }
            },
            "1703401": {
                "en": "Andijon",
                "uz": "Andijon",
                "ru": "Андижан",
                "type": "21"
            },
            "1703408": {
                "en": "Xonobod",
                "uz": "Xonobod",
                "ru": "Ханабад",
                "type": "21",
                "settlements": {
                    "1703408553": {
                        "en": "Xonobod",
                        "uz": "Xonobod",
                        "ru": "Ханабад",
                        "type": "24"
                    },
                    "1703408805": {
                        "en": "Xonobod",
                        "uz": "Xonobod",
                        "ru": "Ханабад",
                        "type": "31"
                    }
                }
            }
        }
    },
    "1706": {
        "en": "Bukhara region",
        "uz": "Buxoro viloyati",
        "ru": "Бухарская область",
        "districts": {
            "1706204": {
                "en": "Olot district",
                "uz": "Olot tumani",
                "ru": "Алатский район",
                "type": "20",
                "settlements": {
                    "1706204501": {
                        "en": "Olot",
                        "uz": "Olot",
                        "ru": "Алат",
                        "type": "23"
                    },
                    "1706204552": {
                        "en": "Ganchi Chandir",
                        "uz": "Ganchi Chandir",
                        "ru": "Ганчи Чандир",
                        "type": "24"
                    },
                    "1706204553": {
                        "en": "Kesakli",
                        "uz": "Kesakli",
                        "ru": "Кесакли",
                        "type": "24"
                    },
                    "1706204554": {
                        "en": "Qirtay",
                        "uz": "Qirtay",
                        "ru": "Киртай",
                        "type": "24"
                    },
                    "1706204555": {
                        "en": "Sola qorovul",
                        "uz": "Sola qorovul",
                        "ru": "Сола коровул",
                        "type": "24"
                    },
                    "1706204557": {
                        "en": "Jayxunobod",
                        "uz": "Jayxunobod",
                        "ru": "Жайхунобод",
                        "type": "24"
                    },
                    "1706204558": {
                        "en": "O'zbekiston",
                        "uz": "O'zbekiston",
                        "ru": "Узбекистан",
                        "type": "24"
                    },
                    "1706204559": {
                        "en": "Chovdur",
                        "uz": "Chovdur",
                        "ru": "Човдур",
                        "type": "24"
                    },
                    "1706204561": {
                        "en": "Bo'ribek Chandir",
                        "uz": "Bo'ribek Chandir",
                        "ru": "Бурибек Чандир",
                        "type": "24"
                    },
                    "1706204804": {
                        "en": "Bahoriston",
                        "uz": "Bahoriston",
                        "ru": "Бахористон",
                        "type": "31"
                    },
                    "1706204808": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистон",
                        "type": "31"
                    },
                    "1706204810": {
                        "en": "Denov",
                        "uz": "Denov",
                        "ru": "Денау",
                        "type": "31"
                    },
                    "1706204820": {
                        "en": "Jumabozor",
                        "uz": "Jumabozor",
                        "ru": "Джумабазар",
                        "type": "31"
                    },
                    "1706204830": {
                        "en": "Paxtakor",
                        "uz": "Paxtakor",
                        "ru": "Пахтакор",
                        "type": "31"
                    },
                    "1706204840": {
                        "en": "Talqon-sayyot",
                        "uz": "Talqon-sayyot",
                        "ru": "Талкансаят",
                        "type": "31"
                    },
                    "1706204850": {
                        "en": "Chandir",
                        "uz": "Chandir",
                        "ru": "Чандиp",
                        "type": "31"
                    },
                    "1706204853": {
                        "en": "Chorbog'",
                        "uz": "Chorbog'",
                        "ru": "Чарбаг",
                        "type": "31"
                    },
                    "1706204856": {
                        "en": "Qirlishon",
                        "uz": "Qirlishon",
                        "ru": "Киpлишон",
                        "type": "31"
                    },
                    "1706204860": {
                        "en": "Soyin-qorovul",
                        "uz": "Soyin-qorovul",
                        "ru": "Соин - Коpавул",
                        "type": "31"
                    }
                }
            },
            "1706207": {
                "en": "Buxoro district",
                "uz": "Buxoro tumani",
                "ru": "Бухарский район",
                "type": "20",
                "settlements": {
                    "1706207501": {
                        "en": "Gala Osiyo",
                        "uz": "Gala Osiyo",
                        "ru": "Галлаасия",
                        "type": "23"
                    },
                    "1706207553": {
                        "en": "Dexcha",
                        "uz": "Dexcha",
                        "ru": "Дехча",
                        "type": "24"
                    },
                    "1706207554": {
                        "en": "Podshoyi",
                        "uz": "Podshoyi",
                        "ru": "Подшойи",
                        "type": "24"
                    },
                    "1706207555": {
                        "en": "Rabotak",
                        "uz": "Rabotak",
                        "ru": "Работак",
                        "type": "24"
                    },
                    "1706207557": {
                        "en": "O'rta Novmetan",
                        "uz": "O'rta Novmetan",
                        "ru": "Урта Новметан",
                        "type": "24"
                    },
                    "1706207558": {
                        "en": "Xumini bolo",
                        "uz": "Xumini bolo",
                        "ru": "Хумини боло",
                        "type": "24"
                    },
                    "1706207561": {
                        "en": "Arabxona",
                        "uz": "Arabxona",
                        "ru": "Арабхона",
                        "type": "24"
                    },
                    "1706207810": {
                        "en": "Bog'ikalon",
                        "uz": "Bog'ikalon",
                        "ru": "Багикалан",
                        "type": "31"
                    },
                    "1706207824": {
                        "en": "Qavola Maxmud",
                        "uz": "Qavola Maxmud",
                        "ru": "Каваля Махмуд",
                        "type": "31"
                    },
                    "1706207830": {
                        "en": "Kunjiqal'a",
                        "uz": "Kunjiqal'a",
                        "ru": "Кунжикала",
                        "type": "31"
                    },
                    "1706207835": {
                        "en": "Shexoncha",
                        "uz": "Shexoncha",
                        "ru": "Шахонча",
                        "type": "31"
                    },
                    "1706207846": {
                        "en": "Gulshanobod",
                        "uz": "Gulshanobod",
                        "ru": "Гулшанобод",
                        "type": "31"
                    },
                    "1706207857": {
                        "en": "Rabotiqalmoq",
                        "uz": "Rabotiqalmoq",
                        "ru": "Рабаткалмок",
                        "type": "31"
                    },
                    "1706207860": {
                        "en": "Saxovat",
                        "uz": "Saxovat",
                        "ru": "Саховат",
                        "type": "31"
                    },
                    "1706207880": {
                        "en": "Shergiron",
                        "uz": "Shergiron",
                        "ru": "Шергирон",
                        "type": "31"
                    },
                    "1706207882": {
                        "en": "Yangiobod",
                        "uz": "Yangiobod",
                        "ru": "Янгиобод",
                        "type": "31"
                    },
                    "1706207883": {
                        "en": "Yangi Turmush",
                        "uz": "Yangi Turmush",
                        "ru": "Янги Турмуш",
                        "type": "31"
                    },
                    "1706207886": {
                        "en": "Sohibkor",
                        "uz": "Sohibkor",
                        "ru": "Сохибкоp",
                        "type": "31"
                    },
                    "1706207890": {
                        "en": "So'fikorgar",
                        "uz": "So'fikorgar",
                        "ru": "Суфикоpгаp",
                        "type": "31"
                    },
                    "1706207895": {
                        "en": "Istiqbol",
                        "uz": "Istiqbol",
                        "ru": "Истикбол",
                        "type": "31"
                    },
                    "1706207898": {
                        "en": "Ko'chko'mar",
                        "uz": "Ko'chko'mar",
                        "ru": "Кучкумаp",
                        "type": "31"
                    }
                }
            },
            "1706212": {
                "en": "Vobkent district",
                "uz": "Vobkent tumani",
                "ru": "Вабкентский район",
                "type": "20",
                "settlements": {
                    "1706212501": {
                        "en": "Vobkent",
                        "uz": "Vobkent",
                        "ru": "Вабкент",
                        "type": "23"
                    },
                    "1706212554": {
                        "en": "Navbahor",
                        "uz": "Navbahor",
                        "ru": "Навбахор",
                        "type": "24"
                    },
                    "1706212556": {
                        "en": "Shirin",
                        "uz": "Shirin",
                        "ru": "Ширин",
                        "type": "24"
                    },
                    "1706212558": {
                        "en": "Kosari",
                        "uz": "Kosari",
                        "ru": "Косари",
                        "type": "24"
                    },
                    "1706212808": {
                        "en": "Imomqazixon",
                        "uz": "Imomqazixon",
                        "ru": "Имамказыхан",
                        "type": "31"
                    },
                    "1706212811": {
                        "en": "Pirmast",
                        "uz": "Pirmast",
                        "ru": "Пиpмаст",
                        "type": "31"
                    },
                    "1706212822": {
                        "en": "Qo'ng'irot",
                        "uz": "Qo'ng'irot",
                        "ru": "Кунград",
                        "type": "31"
                    },
                    "1706212833": {
                        "en": "Kumushkent",
                        "uz": "Kumushkent",
                        "ru": "Кумушкент",
                        "type": "31"
                    },
                    "1706212844": {
                        "en": "Roxkent",
                        "uz": "Roxkent",
                        "ru": "Рахкент",
                        "type": "31"
                    },
                    "1706212854": {
                        "en": "Xayrobotcha",
                        "uz": "Xayrobotcha",
                        "ru": "Хайрабатча",
                        "type": "31"
                    },
                    "1706212855": {
                        "en": "Xalach",
                        "uz": "Xalach",
                        "ru": "Халач",
                        "type": "31"
                    },
                    "1706212857": {
                        "en": "Xayrxush",
                        "uz": "Xayrxush",
                        "ru": "Хайрхуш",
                        "type": "31"
                    },
                    "1706212867": {
                        "en": "Qipchoq",
                        "uz": "Qipchoq",
                        "ru": "Кипчак",
                        "type": "31"
                    },
                    "1706212877": {
                        "en": "Exson",
                        "uz": "Exson",
                        "ru": "Эхсон",
                        "type": "31"
                    },
                    "1706212887": {
                        "en": "Yangikent",
                        "uz": "Yangikent",
                        "ru": "Янгикент",
                        "type": "31"
                    }
                }
            },
            "1706215": {
                "en": "G'ijduvon district",
                "uz": "G'ijduvon tumani",
                "ru": "Гиждуванский район",
                "type": "20",
                "settlements": {
                    "1706215501": {
                        "en": "G'ijduvon",
                        "uz": "G'ijduvon",
                        "ru": "Гиждуван",
                        "type": "23"
                    },
                    "1706215556": {
                        "en": "Abadi",
                        "uz": "Abadi",
                        "ru": "Абади",
                        "type": "24"
                    },
                    "1706215559": {
                        "en": "Beshtuvo",
                        "uz": "Beshtuvo",
                        "ru": "Бештуво",
                        "type": "24"
                    },
                    "1706215561": {
                        "en": "Gajdumak",
                        "uz": "Gajdumak",
                        "ru": "Гаждумак",
                        "type": "24"
                    },
                    "1706215562": {
                        "en": "Jovgari",
                        "uz": "Jovgari",
                        "ru": "Джовгари",
                        "type": "24"
                    },
                    "1706215563": {
                        "en": "Ko'lijabbor",
                        "uz": "Ko'lijabbor",
                        "ru": "Кулижаббор",
                        "type": "24"
                    },
                    "1706215564": {
                        "en": "Mazragan",
                        "uz": "Mazragan",
                        "ru": "Мазраган",
                        "type": "24"
                    },
                    "1706215565": {
                        "en": "Yuqori Rostgo'y",
                        "uz": "Yuqori Rostgo'y",
                        "ru": "Юкори Ростгуй",
                        "type": "24"
                    },
                    "1706215566": {
                        "en": "O'zanon",
                        "uz": "O'zanon",
                        "ru": "Узанон",
                        "type": "24"
                    },
                    "1706215568": {
                        "en": "Xatcha",
                        "uz": "Xatcha",
                        "ru": "Хатча",
                        "type": "24"
                    },
                    "1706215569": {
                        "en": "Chag'dari",
                        "uz": "Chag'dari",
                        "ru": "Чагдари",
                        "type": "24"
                    },
                    "1706215574": {
                        "en": "Dodarak",
                        "uz": "Dodarak",
                        "ru": "Додарак",
                        "type": "24"
                    },
                    "1706215576": {
                        "en": "Namatgaron",
                        "uz": "Namatgaron",
                        "ru": "Наматгарон",
                        "type": "24"
                    },
                    "1706215578": {
                        "en": "Yuqori Qumoq",
                        "uz": "Yuqori Qumoq",
                        "ru": "Юкори Кумок",
                        "type": "24"
                    },
                    "1706215803": {
                        "en": "Armechan",
                        "uz": "Armechan",
                        "ru": "Армечан",
                        "type": "31"
                    },
                    "1706215805": {
                        "en": "Buktaroy",
                        "uz": "Buktaroy",
                        "ru": "Буктарай",
                        "type": "31"
                    },
                    "1706215810": {
                        "en": "G'ovshun",
                        "uz": "G'ovshun",
                        "ru": "Гавшун",
                        "type": "31"
                    },
                    "1706215820": {
                        "en": "Zarangari",
                        "uz": "Zarangari",
                        "ru": "Зарангаpи",
                        "type": "31"
                    },
                    "1706215827": {
                        "en": "Qaraxoni",
                        "uz": "Qaraxoni",
                        "ru": "Карахани",
                        "type": "31"
                    },
                    "1706215831": {
                        "en": "Ko'kcha",
                        "uz": "Ko'kcha",
                        "ru": "Кукча",
                        "type": "31"
                    },
                    "1706215836": {
                        "en": "Pozagari",
                        "uz": "Pozagari",
                        "ru": "Позагари",
                        "type": "31"
                    },
                    "1706215840": {
                        "en": "Paxtaobod",
                        "uz": "Paxtaobod",
                        "ru": "Пахтаобод",
                        "type": "31"
                    },
                    "1706215848": {
                        "en": "Soktari",
                        "uz": "Soktari",
                        "ru": "Соктари",
                        "type": "31"
                    },
                    "1706215849": {
                        "en": "Sarvari",
                        "uz": "Sarvari",
                        "ru": "Сарвари",
                        "type": "31"
                    },
                    "1706215850": {
                        "en": "Sarmijon",
                        "uz": "Sarmijon",
                        "ru": "Сармиджан",
                        "type": "31"
                    },
                    "1706215860": {
                        "en": "Ulfatbibi",
                        "uz": "Ulfatbibi",
                        "ru": "Ульфатбиби",
                        "type": "31"
                    },
                    "1706215870": {
                        "en": "G.Yunusov nomli",
                        "uz": "G.Yunusov nomli",
                        "ru": "им.Ф. Юнусова",
                        "type": "31"
                    },
                    "1706215880": {
                        "en": "Firishkent",
                        "uz": "Firishkent",
                        "ru": "Фиришкент",
                        "type": "31"
                    }
                }
            },
            "1706219": {
                "en": "Kogon district",
                "uz": "Kogon tumani",
                "ru": "Каганский район",
                "type": "20",
                "settlements": {
                    "1706219557": {
                        "en": "Sarayonobod",
                        "uz": "Sarayonobod",
                        "ru": "Сараенобод",
                        "type": "24"
                    },
                    "1706219559": {
                        "en": "Tutikunda",
                        "uz": "Tutikunda",
                        "ru": "Тутикунда",
                        "type": "24"
                    },
                    "1706219811": {
                        "en": "Kogon",
                        "uz": "Kogon",
                        "ru": "Каган",
                        "type": "31"
                    },
                    "1706219814": {
                        "en": "Xo'ja Yakshaba",
                        "uz": "Xo'ja Yakshaba",
                        "ru": "Хужа Якшаба",
                        "type": "31"
                    },
                    "1706219816": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистон",
                        "type": "31"
                    },
                    "1706219818": {
                        "en": "Yangi xayot",
                        "uz": "Yangi xayot",
                        "ru": "Янги хает",
                        "type": "31"
                    },
                    "1706219822": {
                        "en": "Nurafshon",
                        "uz": "Nurafshon",
                        "ru": "Нурафшон",
                        "type": "31"
                    },
                    "1706219824": {
                        "en": "Beklar",
                        "uz": "Beklar",
                        "ru": "Беклаp",
                        "type": "31"
                    },
                    "1706219833": {
                        "en": "Niyozhoji",
                        "uz": "Niyozhoji",
                        "ru": "Ниёзхожи",
                        "type": "31"
                    },
                    "1706219836": {
                        "en": "Sarayon",
                        "uz": "Sarayon",
                        "ru": "Саpаен",
                        "type": "31"
                    },
                    "1706219844": {
                        "en": "B.Naqshband",
                        "uz": "B.Naqshband",
                        "ru": "Накшбанди",
                        "type": "31"
                    }
                }
            },
            "1706230": {
                "en": "Qorako'l district",
                "uz": "Qorako'l tumani",
                "ru": "Каракульский район",
                "type": "20",
                "settlements": {
                    "1706230501": {
                        "en": "Qorako'l",
                        "uz": "Qorako'l",
                        "ru": "Каракуль",
                        "type": "23"
                    },
                    "1706230552": {
                        "en": "Bandboshi",
                        "uz": "Bandboshi",
                        "ru": "Бандбоши",
                        "type": "24"
                    },
                    "1706230553": {
                        "en": "Darg'abog'i",
                        "uz": "Darg'abog'i",
                        "ru": "Даргабоги",
                        "type": "24"
                    },
                    "1706230554": {
                        "en": "Jig'achi",
                        "uz": "Jig'achi",
                        "ru": "Джигачи",
                        "type": "24"
                    },
                    "1706230555": {
                        "en": "Qorahoji",
                        "uz": "Qorahoji",
                        "ru": "Корахожи",
                        "type": "24"
                    },
                    "1706230556": {
                        "en": "Quvvacha",
                        "uz": "Quvvacha",
                        "ru": "Куввача",
                        "type": "24"
                    },
                    "1706230557": {
                        "en": "Mirzaqal'a",
                        "uz": "Mirzaqal'a",
                        "ru": "Мирзакалъа",
                        "type": "24"
                    },
                    "1706230558": {
                        "en": "Sayyod",
                        "uz": "Sayyod",
                        "ru": "Сайед",
                        "type": "24"
                    },
                    "1706230559": {
                        "en": "Solur",
                        "uz": "Solur",
                        "ru": "Солур",
                        "type": "24"
                    },
                    "1706230561": {
                        "en": "Chandirobod",
                        "uz": "Chandirobod",
                        "ru": "Чандирабад",
                        "type": "24"
                    },
                    "1706230562": {
                        "en": "Sho'rabot",
                        "uz": "Sho'rabot",
                        "ru": "Шуррабад",
                        "type": "24"
                    },
                    "1706230563": {
                        "en": "Yakka A'lam",
                        "uz": "Yakka A'lam",
                        "ru": "Якка Аълам",
                        "type": "24"
                    },
                    "1706230564": {
                        "en": "Yangiqal'a",
                        "uz": "Yangiqal'a",
                        "ru": "Янгикалъа",
                        "type": "24"
                    },
                    "1706230806": {
                        "en": "Darg'ali",
                        "uz": "Darg'ali",
                        "ru": "Даргали",
                        "type": "31"
                    },
                    "1706230809": {
                        "en": "Bandboshi",
                        "uz": "Bandboshi",
                        "ru": "Бандбаши",
                        "type": "31"
                    },
                    "1706230813": {
                        "en": "Jig'achi",
                        "uz": "Jig'achi",
                        "ru": "Джигачи",
                        "type": "31"
                    },
                    "1706230815": {
                        "en": "Sho'rrabot",
                        "uz": "Sho'rrabot",
                        "ru": "Шуppабот",
                        "type": "31"
                    },
                    "1706230825": {
                        "en": "Ziyorat",
                        "uz": "Ziyorat",
                        "ru": "Зиярат",
                        "type": "31"
                    },
                    "1706230827": {
                        "en": "Kulonchi",
                        "uz": "Kulonchi",
                        "ru": "Кулончи",
                        "type": "31"
                    },
                    "1706230832": {
                        "en": "Qozon",
                        "uz": "Qozon",
                        "ru": "Казан",
                        "type": "31"
                    },
                    "1706230834": {
                        "en": "Quvvacha",
                        "uz": "Quvvacha",
                        "ru": "Куввача",
                        "type": "31"
                    },
                    "1706230847": {
                        "en": "Qoraun",
                        "uz": "Qoraun",
                        "ru": "Караун",
                        "type": "31"
                    },
                    "1706230850": {
                        "en": "Qorako'l",
                        "uz": "Qorako'l",
                        "ru": "Каракуль",
                        "type": "31"
                    },
                    "1706230854": {
                        "en": "Chandir",
                        "uz": "Chandir",
                        "ru": "Чандиp",
                        "type": "31"
                    },
                    "1706230859": {
                        "en": "Sayyot",
                        "uz": "Sayyot",
                        "ru": "Саят",
                        "type": "31"
                    },
                    "1706230862": {
                        "en": "Mallaishayx",
                        "uz": "Mallaishayx",
                        "ru": "Маллаишайх",
                        "type": "31"
                    },
                    "1706230875": {
                        "en": "Quyi Yangibozor",
                        "uz": "Quyi Yangibozor",
                        "ru": "Куйи Янгибазар",
                        "type": "31"
                    },
                    "1706230880": {
                        "en": "Qorahoji",
                        "uz": "Qorahoji",
                        "ru": "Каpаходжи",
                        "type": "31"
                    },
                    "1706230885": {
                        "en": "Chovli",
                        "uz": "Chovli",
                        "ru": "Човли",
                        "type": "31"
                    }
                }
            },
            "1706232": {
                "en": "Qorovulbozor district",
                "uz": "Qorovulbozor tumani",
                "ru": "Караулбазарский район",
                "type": "20",
                "settlements": {
                    "1706232501": {
                        "en": "Qorovulbozor",
                        "uz": "Qorovulbozor",
                        "ru": "Караулбазар",
                        "type": "23"
                    },
                    "1706232803": {
                        "en": "Navbahor",
                        "uz": "Navbahor",
                        "ru": "Навбахор",
                        "type": "31"
                    },
                    "1706232807": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустон",
                        "type": "31"
                    },
                    "1706232810": {
                        "en": "Buzachi",
                        "uz": "Buzachi",
                        "ru": "Бузачи",
                        "type": "31"
                    },
                    "1706232815": {
                        "en": "Jarqoq",
                        "uz": "Jarqoq",
                        "ru": "Жаркок",
                        "type": "31"
                    }
                }
            },
            "1706240": {
                "en": "Peshku district",
                "uz": "Peshku tumani",
                "ru": "Пешкунский район",
                "type": "20",
                "settlements": {
                    "1706240551": {
                        "en": "Yangibozor",
                        "uz": "Yangibozor",
                        "ru": "Янгибозор",
                        "type": "24"
                    },
                    "1706240553": {
                        "en": "Peshku",
                        "uz": "Peshku",
                        "ru": "Пешку",
                        "type": "24"
                    },
                    "1706240555": {
                        "en": "Shavgon",
                        "uz": "Shavgon",
                        "ru": "Шавгон",
                        "type": "24"
                    },
                    "1706240557": {
                        "en": "Mahallai-Mirishkor",
                        "uz": "Mahallai-Mirishkor",
                        "ru": "Махаллаи-Миришкор",
                        "type": "24"
                    },
                    "1706240802": {
                        "en": "Ibn Sino nomli",
                        "uz": "Ibn Sino nomli",
                        "ru": "им. Абу-Али-Ибн-Сино",
                        "type": "31"
                    },
                    "1706240805": {
                        "en": "Varaxsho",
                        "uz": "Varaxsho",
                        "ru": "Варахша",
                        "type": "31"
                    },
                    "1706240807": {
                        "en": "Jonkeldi",
                        "uz": "Jonkeldi",
                        "ru": "Джангельды",
                        "type": "31"
                    },
                    "1706240810": {
                        "en": "Zandani",
                        "uz": "Zandani",
                        "ru": "Зандани",
                        "type": "31"
                    },
                    "1706240821": {
                        "en": "Qal'ai Mirishkor",
                        "uz": "Qal'ai Mirishkor",
                        "ru": "Калаймиришкар",
                        "type": "31"
                    },
                    "1706240832": {
                        "en": "Peshku",
                        "uz": "Peshku",
                        "ru": "Пешку",
                        "type": "31"
                    },
                    "1706240854": {
                        "en": "Yangibozor",
                        "uz": "Yangibozor",
                        "ru": "Янгибазар",
                        "type": "31"
                    },
                    "1706240860": {
                        "en": "Bog'imuso",
                        "uz": "Bog'imuso",
                        "ru": "Богимуссо",
                        "type": "31"
                    },
                    "1706240865": {
                        "en": "Qoraqalpoq",
                        "uz": "Qoraqalpoq",
                        "ru": "Каpакалпак",
                        "type": "31"
                    },
                    "1706240870": {
                        "en": "Chibog'oni",
                        "uz": "Chibog'oni",
                        "ru": "Чибогони",
                        "type": "31"
                    }
                }
            },
            "1706242": {
                "en": "Romitan district",
                "uz": "Romitan tumani",
                "ru": "Ромитанский район",
                "type": "20",
                "settlements": {
                    "1706242501": {
                        "en": "Romitan",
                        "uz": "Romitan",
                        "ru": "Ромитан",
                        "type": "23"
                    },
                    "1706242505": {
                        "en": "Gazli",
                        "uz": "Gazli",
                        "ru": "Газли",
                        "type": "23"
                    },
                    "1706242552": {
                        "en": "Qoqishtuvon",
                        "uz": "Qoqishtuvon",
                        "ru": "Кокиштувон",
                        "type": "24"
                    },
                    "1706242554": {
                        "en": "Xosa",
                        "uz": "Xosa",
                        "ru": "Хоса",
                        "type": "24"
                    },
                    "1706242556": {
                        "en": "Yuqori G'azberon",
                        "uz": "Yuqori G'azberon",
                        "ru": "Юкори Газберон",
                        "type": "24"
                    },
                    "1706242825": {
                        "en": "Qizil Ravot",
                        "uz": "Qizil Ravot",
                        "ru": "Кызылрават",
                        "type": "31"
                    },
                    "1706242834": {
                        "en": "Romitan",
                        "uz": "Romitan",
                        "ru": "Ромитан",
                        "type": "31"
                    },
                    "1706242864": {
                        "en": "Bog'iturkon",
                        "uz": "Bog'iturkon",
                        "ru": "Богитуркон",
                        "type": "31"
                    },
                    "1706242867": {
                        "en": "Chelong'u",
                        "uz": "Chelong'u",
                        "ru": "Чилангу",
                        "type": "31"
                    },
                    "1706242872": {
                        "en": "Sho'rcha",
                        "uz": "Sho'rcha",
                        "ru": "Шурча",
                        "type": "31"
                    },
                    "1706242875": {
                        "en": "Qo'rg'on",
                        "uz": "Qo'rg'on",
                        "ru": "Курган",
                        "type": "31"
                    }
                }
            },
            "1706246": {
                "en": "Jondor district",
                "uz": "Jondor tumani",
                "ru": "Жондоpский район",
                "type": "20",
                "settlements": {
                    "1706246551": {
                        "en": "Jondor",
                        "uz": "Jondor",
                        "ru": "Жондор",
                        "type": "24"
                    },
                    "1706246552": {
                        "en": "Paxlavon",
                        "uz": "Paxlavon",
                        "ru": "Пахлавон",
                        "type": "24"
                    },
                    "1706246553": {
                        "en": "Dalmun",
                        "uz": "Dalmun",
                        "ru": "Далмун",
                        "type": "24"
                    },
                    "1706246554": {
                        "en": "Ko'liyon",
                        "uz": "Ko'liyon",
                        "ru": "Кулиен",
                        "type": "24"
                    },
                    "1706246555": {
                        "en": "Samonchuq",
                        "uz": "Samonchuq",
                        "ru": "Самончук",
                        "type": "24"
                    },
                    "1706246556": {
                        "en": "Tobagar",
                        "uz": "Tobagar",
                        "ru": "Тобагар",
                        "type": "24"
                    },
                    "1706246557": {
                        "en": "Ushot",
                        "uz": "Ushot",
                        "ru": "Ушот",
                        "type": "24"
                    },
                    "1706246558": {
                        "en": "Xazorman",
                        "uz": "Xazorman",
                        "ru": "Хазорман",
                        "type": "24"
                    },
                    "1706246559": {
                        "en": "Chorzona",
                        "uz": "Chorzona",
                        "ru": "Чорзона",
                        "type": "24"
                    },
                    "1706246811": {
                        "en": "Dalmun",
                        "uz": "Dalmun",
                        "ru": "Дальмун",
                        "type": "31"
                    },
                    "1706246822": {
                        "en": "Qaroli",
                        "uz": "Qaroli",
                        "ru": "Каpоли",
                        "type": "31"
                    },
                    "1706246825": {
                        "en": "Lolo",
                        "uz": "Lolo",
                        "ru": "Лола",
                        "type": "31"
                    },
                    "1706246831": {
                        "en": "Romish",
                        "uz": "Romish",
                        "ru": "Ромиш",
                        "type": "31"
                    },
                    "1706246833": {
                        "en": "Zarafshon",
                        "uz": "Zarafshon",
                        "ru": "Зарафшон",
                        "type": "31"
                    },
                    "1706246844": {
                        "en": "Oxshix",
                        "uz": "Oxshix",
                        "ru": "Охших",
                        "type": "31"
                    },
                    "1706246855": {
                        "en": "Xumdonak",
                        "uz": "Xumdonak",
                        "ru": "Хумданак",
                        "type": "31"
                    },
                    "1706246866": {
                        "en": "Xumini bolo",
                        "uz": "Xumini bolo",
                        "ru": "Хумин",
                        "type": "31"
                    },
                    "1706246870": {
                        "en": "Mustaqillik",
                        "uz": "Mustaqillik",
                        "ru": "Мустакиллик",
                        "type": "31"
                    },
                    "1706246875": {
                        "en": "Po'loti",
                        "uz": "Po'loti",
                        "ru": "Пулоти",
                        "type": "31"
                    },
                    "1706246880": {
                        "en": "Samonchuq",
                        "uz": "Samonchuq",
                        "ru": "Самончук",
                        "type": "31"
                    },
                    "1706246885": {
                        "en": "Aleli",
                        "uz": "Aleli",
                        "ru": "Алели",
                        "type": "31"
                    },
                    "1706246890": {
                        "en": "Mirzayon",
                        "uz": "Mirzayon",
                        "ru": "Миpзоен",
                        "type": "31"
                    }
                }
            },
            "1706258": {
                "en": "Shofirkon district",
                "uz": "Shofirkon tumani",
                "ru": "Шафирканский район",
                "type": "20",
                "settlements": {
                    "1706258501": {
                        "en": "Shofirkon",
                        "uz": "Shofirkon",
                        "ru": "Шафиркан",
                        "type": "23"
                    },
                    "1706258552": {
                        "en": "Jo'yrabot",
                        "uz": "Jo'yrabot",
                        "ru": "Жуйрабад",
                        "type": "24"
                    },
                    "1706258553": {
                        "en": "Iskogare",
                        "uz": "Iskogare",
                        "ru": "Искогаре",
                        "type": "24"
                    },
                    "1706258554": {
                        "en": "Quyi Chuqurak",
                        "uz": "Quyi Chuqurak",
                        "ru": "Куйи Чукурак",
                        "type": "24"
                    },
                    "1706258555": {
                        "en": "Mirzoqul",
                        "uz": "Mirzoqul",
                        "ru": "Мирзокул",
                        "type": "24"
                    },
                    "1706258556": {
                        "en": "Talisafed",
                        "uz": "Talisafed",
                        "ru": "Талисафед",
                        "type": "24"
                    },
                    "1706258557": {
                        "en": "Undare",
                        "uz": "Undare",
                        "ru": "Ундаре",
                        "type": "24"
                    },
                    "1706258558": {
                        "en": "Chandir",
                        "uz": "Chandir",
                        "ru": "Чандир",
                        "type": "24"
                    },
                    "1706258561": {
                        "en": "G'ulomte",
                        "uz": "G'ulomte",
                        "ru": "Гуломте",
                        "type": "24"
                    },
                    "1706258805": {
                        "en": "Vargonze",
                        "uz": "Vargonze",
                        "ru": "Варданзе",
                        "type": "31"
                    },
                    "1706258811": {
                        "en": "Denov",
                        "uz": "Denov",
                        "ru": "Денау",
                        "type": "31"
                    },
                    "1706258822": {
                        "en": "Jo'ynav",
                        "uz": "Jo'ynav",
                        "ru": "Жуйнау",
                        "type": "31"
                    },
                    "1706258828": {
                        "en": "Jo'yrabot",
                        "uz": "Jo'yrabot",
                        "ru": "Жуйработ",
                        "type": "31"
                    },
                    "1706258833": {
                        "en": "Do'rmon",
                        "uz": "Do'rmon",
                        "ru": "Дурмен",
                        "type": "31"
                    },
                    "1706258844": {
                        "en": "Savrak",
                        "uz": "Savrak",
                        "ru": "Саврак",
                        "type": "31"
                    },
                    "1706258855": {
                        "en": "Sulton Jo'ra",
                        "uz": "Sulton Jo'ra",
                        "ru": "им. С. Джури",
                        "type": "31"
                    },
                    "1706258866": {
                        "en": "Tezguzar",
                        "uz": "Tezguzar",
                        "ru": "Тезгузар",
                        "type": "31"
                    },
                    "1706258877": {
                        "en": "Mazlaxon chandir",
                        "uz": "Mazlaxon chandir",
                        "ru": "Мазлахон Чандир",
                        "type": "31"
                    },
                    "1706258880": {
                        "en": "Sh.Hamroyev nomli",
                        "uz": "Sh.Hamroyev nomli",
                        "ru": "им. Ш. Хамраева",
                        "type": "31"
                    },
                    "1706258885": {
                        "en": "Iskogare",
                        "uz": "Iskogare",
                        "ru": "Искогаpе",
                        "type": "31"
                    },
                    "1706258890": {
                        "en": "Bog'iafzal",
                        "uz": "Bog'iafzal",
                        "ru": "Богиафзал",
                        "type": "31"
                    }
                }
            },
            "1706401": {
                "en": "Buxoro",
                "uz": "Buxoro",
                "ru": "Бухара",
                "type": "21",
                "settlements": {
                    "1706401803": {
                        "en": "Otbozor",
                        "uz": "Otbozor",
                        "ru": "Атбазар",
                        "type": "31"
                    },
                    "1706401805": {
                        "en": "Shirbuddin",
                        "uz": "Shirbuddin",
                        "ru": "Шербуддин",
                        "type": "31"
                    }
                }
            },
            "1706403": {
                "en": "Kogon",
                "uz": "Kogon",
                "ru": "Каган",
                "type": "21"
            }
        }
    },
    "1708": {
        "en": "Jizzakh region",
        "uz": "Jizzax viloyati",
        "ru": "Джизакская область",
        "districts": {
            "1708201": {
                "en": "Arnasoy district",
                "uz": "Arnasoy tumani",
                "ru": "Арнасайский район",
                "type": "20",
                "settlements": {
                    "1708201551": {
                        "en": "G'oliblar",
                        "uz": "G'oliblar",
                        "ru": "Голиблар",
                        "type": "24"
                    },
                    "1708201556": {
                        "en": "Gulbahor",
                        "uz": "Gulbahor",
                        "ru": "Гулбахор",
                        "type": "24"
                    },
                    "1708201802": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустон",
                        "type": "31"
                    },
                    "1708201803": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "31"
                    },
                    "1708201804": {
                        "en": "Zarafshon",
                        "uz": "Zarafshon",
                        "ru": "Зарафшан",
                        "type": "31"
                    },
                    "1708201806": {
                        "en": "Oltin vodiy",
                        "uz": "Oltin vodiy",
                        "ru": "Олтин водий",
                        "type": "31"
                    },
                    "1708201807": {
                        "en": "Cho'lquvar",
                        "uz": "Cho'lquvar",
                        "ru": "Чулкувар",
                        "type": "31"
                    },
                    "1708201813": {
                        "en": "Yangibo'ston",
                        "uz": "Yangibo'ston",
                        "ru": "Янгибустан",
                        "type": "31"
                    }
                }
            },
            "1708204": {
                "en": "Baxmal district",
                "uz": "Baxmal tumani",
                "ru": "Бахмальский район",
                "type": "20",
                "settlements": {
                    "1708204551": {
                        "en": "O'smat",
                        "uz": "O'smat",
                        "ru": "Усмат",
                        "type": "24"
                    },
                    "1708204552": {
                        "en": "Oqtosh",
                        "uz": "Oqtosh",
                        "ru": "Акташ",
                        "type": "24"
                    },
                    "1708204553": {
                        "en": "Mo'g'ol",
                        "uz": "Mo'g'ol",
                        "ru": "Мугол",
                        "type": "24"
                    },
                    "1708204554": {
                        "en": "Novqa",
                        "uz": "Novqa",
                        "ru": "Новка",
                        "type": "24"
                    },
                    "1708204555": {
                        "en": "Alamli",
                        "uz": "Alamli",
                        "ru": "Аламли",
                        "type": "24"
                    },
                    "1708204556": {
                        "en": "Tongotar",
                        "uz": "Tongotar",
                        "ru": "Тонготар",
                        "type": "24"
                    },
                    "1708204558": {
                        "en": "Baxmal",
                        "uz": "Baxmal",
                        "ru": "Бахмал",
                        "type": "24"
                    },
                    "1708204802": {
                        "en": "Oyqor",
                        "uz": "Oyqor",
                        "ru": "Айкар",
                        "type": "31"
                    },
                    "1708204804": {
                        "en": "Oqtosh",
                        "uz": "Oqtosh",
                        "ru": "Акташ",
                        "type": "31"
                    },
                    "1708204808": {
                        "en": "Bog'ishamol",
                        "uz": "Bog'ishamol",
                        "ru": "Багишамал",
                        "type": "31"
                    },
                    "1708204810": {
                        "en": "Barlos",
                        "uz": "Barlos",
                        "ru": "Барлас",
                        "type": "31"
                    },
                    "1708204812": {
                        "en": "Baxmal",
                        "uz": "Baxmal",
                        "ru": "Бахмал",
                        "type": "31"
                    },
                    "1708204817": {
                        "en": "Gulbuloq",
                        "uz": "Gulbuloq",
                        "ru": "Гульбулак",
                        "type": "31"
                    },
                    "1708204830": {
                        "en": "Mo'g'ol",
                        "uz": "Mo'g'ol",
                        "ru": "Мугал",
                        "type": "31"
                    },
                    "1708204835": {
                        "en": "Sangzor",
                        "uz": "Sangzor",
                        "ru": "Сангзар",
                        "type": "31"
                    },
                    "1708204840": {
                        "en": "Tongotar",
                        "uz": "Tongotar",
                        "ru": "Тонготар",
                        "type": "31"
                    },
                    "1708204845": {
                        "en": "Uzunbuloq",
                        "uz": "Uzunbuloq",
                        "ru": "Узунбулак",
                        "type": "31"
                    }
                }
            },
            "1708209": {
                "en": "G'allaorol district",
                "uz": "G'allaorol tumani",
                "ru": "Галляаральский район",
                "type": "20",
                "settlements": {
                    "1708209501": {
                        "en": "G'allaorol",
                        "uz": "G'allaorol",
                        "ru": "Галляарал",
                        "type": "23"
                    },
                    "1708209554": {
                        "en": "Qo'ytosh",
                        "uz": "Qo'ytosh",
                        "ru": "Кайташ",
                        "type": "24"
                    },
                    "1708209557": {
                        "en": "Marjonbuloq",
                        "uz": "Marjonbuloq",
                        "ru": "Марджанбулак",
                        "type": "24"
                    },
                    "1708209559": {
                        "en": "Lalmikor",
                        "uz": "Lalmikor",
                        "ru": "Лалмикор",
                        "type": "24"
                    },
                    "1708209561": {
                        "en": "Qangliobod",
                        "uz": "Qangliobod",
                        "ru": "Канглиобод",
                        "type": "24"
                    },
                    "1708209565": {
                        "en": "Abdukarim",
                        "uz": "Abdukarim",
                        "ru": "Абдукарим",
                        "type": "24"
                    },
                    "1708209567": {
                        "en": "Chuvilloq",
                        "uz": "Chuvilloq",
                        "ru": "Чувиллок",
                        "type": "24"
                    },
                    "1708209823": {
                        "en": "G'ubdin",
                        "uz": "G'ubdin",
                        "ru": "Губдин",
                        "type": "31"
                    },
                    "1708209825": {
                        "en": "Xonimqo'rg'on",
                        "uz": "Xonimqo'rg'on",
                        "ru": "Хонимкуpган",
                        "type": "31"
                    },
                    "1708209834": {
                        "en": "Ittifoq",
                        "uz": "Ittifoq",
                        "ru": "Иттифак",
                        "type": "31"
                    },
                    "1708209836": {
                        "en": "Gulchambar",
                        "uz": "Gulchambar",
                        "ru": "Гулчамбар",
                        "type": "31"
                    },
                    "1708209838": {
                        "en": "Qipchoqsuv",
                        "uz": "Qipchoqsuv",
                        "ru": "Кипчоксув",
                        "type": "31"
                    },
                    "1708209848": {
                        "en": "Ko'kbuloq",
                        "uz": "Ko'kbuloq",
                        "ru": "Кокбулак",
                        "type": "31"
                    },
                    "1708209853": {
                        "en": "Korizquduq",
                        "uz": "Korizquduq",
                        "ru": "Коризкудук",
                        "type": "31"
                    },
                    "1708209857": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистан",
                        "type": "31"
                    },
                    "1708209860": {
                        "en": "Buloqboshi",
                        "uz": "Buloqboshi",
                        "ru": "Булакбаши",
                        "type": "31"
                    },
                    "1708209865": {
                        "en": "Madaniyat",
                        "uz": "Madaniyat",
                        "ru": "Маданият",
                        "type": "31"
                    },
                    "1708209868": {
                        "en": "Mirzabuloq",
                        "uz": "Mirzabuloq",
                        "ru": "Мирзабулак",
                        "type": "31"
                    },
                    "1708209870": {
                        "en": "Moltob",
                        "uz": "Moltob",
                        "ru": "Молтаб",
                        "type": "31"
                    },
                    "1708209875": {
                        "en": "Tozaurug'",
                        "uz": "Tozaurug'",
                        "ru": "Тозауpуг",
                        "type": "31"
                    },
                    "1708209880": {
                        "en": "Mulkush",
                        "uz": "Mulkush",
                        "ru": "Мулкуш",
                        "type": "31"
                    }
                }
            },
            "1708212": {
                "en": "Sharof Rashidov district",
                "uz": "Sharof Rashidov tumani",
                "ru": "Шароф Рашидовский район",
                "type": "20",
                "settlements": {
                    "1708212551": {
                        "en": "Uch-tepa",
                        "uz": "Uch-tepa",
                        "ru": "Уч-тепа",
                        "type": "24"
                    },
                    "1708212552": {
                        "en": "Gandumtosh",
                        "uz": "Gandumtosh",
                        "ru": "Гандумтош",
                        "type": "24"
                    },
                    "1708212553": {
                        "en": "Qorayantoq",
                        "uz": "Qorayantoq",
                        "ru": "Караянтак",
                        "type": "24"
                    },
                    "1708212554": {
                        "en": "Qang'li",
                        "uz": "Qang'li",
                        "ru": "Кангли",
                        "type": "24"
                    },
                    "1708212555": {
                        "en": "Toqchiliq",
                        "uz": "Toqchiliq",
                        "ru": "Токчилик",
                        "type": "24"
                    },
                    "1708212557": {
                        "en": "Mulkanlik",
                        "uz": "Mulkanlik",
                        "ru": "Мулканлик",
                        "type": "24"
                    },
                    "1708212559": {
                        "en": "Jizzaxlik",
                        "uz": "Jizzaxlik",
                        "ru": "Жиззахлик",
                        "type": "24"
                    },
                    "1708212807": {
                        "en": "Oq oltin",
                        "uz": "Oq oltin",
                        "ru": "Акалтын",
                        "type": "31"
                    },
                    "1708212810": {
                        "en": "Ziyokor",
                        "uz": "Ziyokor",
                        "ru": "Зиекор",
                        "type": "31"
                    },
                    "1708212816": {
                        "en": "Qang'li",
                        "uz": "Qang'li",
                        "ru": "Кангли",
                        "type": "31"
                    },
                    "1708212820": {
                        "en": "Rovat",
                        "uz": "Rovat",
                        "ru": "Рават",
                        "type": "31"
                    },
                    "1708212832": {
                        "en": "Qo'shbarmoq",
                        "uz": "Qo'shbarmoq",
                        "ru": "Кушбаpмок",
                        "type": "31"
                    },
                    "1708212835": {
                        "en": "Paxtaobod",
                        "uz": "Paxtaobod",
                        "ru": "Пахтаабад",
                        "type": "31"
                    },
                    "1708212837": {
                        "en": "Qulama",
                        "uz": "Qulama",
                        "ru": "Кулама",
                        "type": "31"
                    },
                    "1708212854": {
                        "en": "Xayrobod",
                        "uz": "Xayrobod",
                        "ru": "Хайрабад",
                        "type": "31"
                    },
                    "1708212860": {
                        "en": "Fayzobod",
                        "uz": "Fayzobod",
                        "ru": "Файзобод",
                        "type": "31"
                    },
                    "1708212865": {
                        "en": "Kuyovboshi",
                        "uz": "Kuyovboshi",
                        "ru": "Куёвбоши",
                        "type": "31"
                    },
                    "1708212870": {
                        "en": "Samarqand quduq",
                        "uz": "Samarqand quduq",
                        "ru": "Самаpканд - кудук",
                        "type": "31"
                    },
                    "1708212875": {
                        "en": "Uchtepa",
                        "uz": "Uchtepa",
                        "ru": "Учтепа",
                        "type": "31"
                    }
                }
            },
            "1708215": {
                "en": "Do'stlik district",
                "uz": "Do'stlik tumani",
                "ru": "Дустликский район",
                "type": "20",
                "settlements": {
                    "1708215501": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "23"
                    },
                    "1708215553": {
                        "en": "Navro'z",
                        "uz": "Navro'z",
                        "ru": "Навруз",
                        "type": "24"
                    },
                    "1708215803": {
                        "en": "Bog'zor",
                        "uz": "Bog'zor",
                        "ru": "Багзар",
                        "type": "31"
                    },
                    "1708215805": {
                        "en": "Bunyodkor",
                        "uz": "Bunyodkor",
                        "ru": "Бунедкор",
                        "type": "31"
                    },
                    "1708215812": {
                        "en": "Qahramon",
                        "uz": "Qahramon",
                        "ru": "Кахрамон",
                        "type": "31"
                    },
                    "1708215823": {
                        "en": "Manas",
                        "uz": "Manas",
                        "ru": "Манас",
                        "type": "31"
                    },
                    "1708215830": {
                        "en": "Saritepa",
                        "uz": "Saritepa",
                        "ru": "Саритепа",
                        "type": "31"
                    },
                    "1708215840": {
                        "en": "Oltin vodiy",
                        "uz": "Oltin vodiy",
                        "ru": "Олтин водий",
                        "type": "31"
                    },
                    "1708215845": {
                        "en": "Mevazor",
                        "uz": "Mevazor",
                        "ru": "Мевазоp",
                        "type": "31"
                    }
                }
            },
            "1708218": {
                "en": "Zomin district",
                "uz": "Zomin tumani",
                "ru": "Зааминский район",
                "type": "20",
                "settlements": {
                    "1708218503": {
                        "en": "Dashtobod",
                        "uz": "Dashtobod",
                        "ru": "Даштобод",
                        "type": "23"
                    },
                    "1708218551": {
                        "en": "Zomin",
                        "uz": "Zomin",
                        "ru": "Заамин",
                        "type": "24"
                    },
                    "1708218553": {
                        "en": "Yom",
                        "uz": "Yom",
                        "ru": "Ем",
                        "type": "24"
                    },
                    "1708218555": {
                        "en": "Sirg'ali",
                        "uz": "Sirg'ali",
                        "ru": "Сиргали",
                        "type": "24"
                    },
                    "1708218557": {
                        "en": "Pshag'or",
                        "uz": "Pshag'or",
                        "ru": "Пшагор",
                        "type": "24"
                    },
                    "1708218811": {
                        "en": "G'allakor",
                        "uz": "G'allakor",
                        "ru": "Галлякор",
                        "type": "31"
                    },
                    "1708218813": {
                        "en": "Gulshan",
                        "uz": "Gulshan",
                        "ru": "Гульшан",
                        "type": "31"
                    },
                    "1708218817": {
                        "en": "Duoba",
                        "uz": "Duoba",
                        "ru": "Дуоба",
                        "type": "31"
                    },
                    "1708218834": {
                        "en": "A.Navoiy",
                        "uz": "A.Navoiy",
                        "ru": "им. Навои",
                        "type": "31"
                    },
                    "1708218838": {
                        "en": "Obi hayot",
                        "uz": "Obi hayot",
                        "ru": "Обихаят",
                        "type": "31"
                    },
                    "1708218857": {
                        "en": "Chorvador",
                        "uz": "Chorvador",
                        "ru": "Чарвадар",
                        "type": "31"
                    },
                    "1708218858": {
                        "en": "Istiqlol",
                        "uz": "Istiqlol",
                        "ru": "Истиклол",
                        "type": "31"
                    },
                    "1708218860": {
                        "en": "Beshkubi",
                        "uz": "Beshkubi",
                        "ru": "Бешкуби",
                        "type": "31"
                    },
                    "1708218870": {
                        "en": "Shirin",
                        "uz": "Shirin",
                        "ru": "Шиpин",
                        "type": "31"
                    }
                }
            },
            "1708220": {
                "en": "Zarbdor district",
                "uz": "Zarbdor tumani",
                "ru": "Зарбдарский район",
                "type": "20",
                "settlements": {
                    "1708220551": {
                        "en": "Zarbdor",
                        "uz": "Zarbdor",
                        "ru": "Зарбдар",
                        "type": "24"
                    },
                    "1708220553": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустан",
                        "type": "24"
                    },
                    "1708220555": {
                        "en": "Fayzobod",
                        "uz": "Fayzobod",
                        "ru": "Файзобод",
                        "type": "24"
                    },
                    "1708220557": {
                        "en": "Sharq yulduzi",
                        "uz": "Sharq yulduzi",
                        "ru": "Шарк Юлдузи",
                        "type": "24"
                    },
                    "1708220827": {
                        "en": "Sharq yulduzi",
                        "uz": "Sharq yulduzi",
                        "ru": "Шаpк Юлдузи",
                        "type": "31"
                    },
                    "1708220831": {
                        "en": "Toshkesgan",
                        "uz": "Toshkesgan",
                        "ru": "Ташкесган",
                        "type": "31"
                    },
                    "1708220835": {
                        "en": "Tinchlik",
                        "uz": "Tinchlik",
                        "ru": "Тинчлик",
                        "type": "31"
                    },
                    "1708220843": {
                        "en": "Oqar",
                        "uz": "Oqar",
                        "ru": "Окар",
                        "type": "31"
                    },
                    "1708220850": {
                        "en": "Lalmikor",
                        "uz": "Lalmikor",
                        "ru": "Лалмикоp",
                        "type": "31"
                    },
                    "1708220863": {
                        "en": "Yangikent",
                        "uz": "Yangikent",
                        "ru": "Янгикент",
                        "type": "31"
                    },
                    "1708220865": {
                        "en": "Andijon",
                        "uz": "Andijon",
                        "ru": "Андижан",
                        "type": "31"
                    },
                    "1708220870": {
                        "en": "Adirobod",
                        "uz": "Adirobod",
                        "ru": "Адиpабад",
                        "type": "31"
                    }
                }
            },
            "1708223": {
                "en": "Mirzacho'l district",
                "uz": "Mirzacho'l tumani",
                "ru": "Мирзачульский район",
                "type": "20",
                "settlements": {
                    "1708223501": {
                        "en": "Gagarin",
                        "uz": "Gagarin",
                        "ru": "Гагарин",
                        "type": "23"
                    },
                    "1708223553": {
                        "en": "Paxtazor",
                        "uz": "Paxtazor",
                        "ru": "Пахтазор",
                        "type": "24"
                    },
                    "1708223555": {
                        "en": "Mirzadala",
                        "uz": "Mirzadala",
                        "ru": "Мирзадала",
                        "type": "24"
                    },
                    "1708223803": {
                        "en": "Bog'bon",
                        "uz": "Bog'bon",
                        "ru": "Багбан",
                        "type": "31"
                    },
                    "1708223815": {
                        "en": "Jibek-jo'li",
                        "uz": "Jibek-jo'li",
                        "ru": "Жибек- жолы",
                        "type": "31"
                    },
                    "1708223830": {
                        "en": "Toshkent",
                        "uz": "Toshkent",
                        "ru": "Ташкент",
                        "type": "31"
                    },
                    "1708223833": {
                        "en": "O'zbekiston",
                        "uz": "O'zbekiston",
                        "ru": "Узбекистан",
                        "type": "31"
                    },
                    "1708223840": {
                        "en": "Yangidala",
                        "uz": "Yangidala",
                        "ru": "Янгидала",
                        "type": "31"
                    },
                    "1708223850": {
                        "en": "Gulzor",
                        "uz": "Gulzor",
                        "ru": "Гульзар",
                        "type": "31"
                    }
                }
            },
            "1708225": {
                "en": "Zafarobod district",
                "uz": "Zafarobod tumani",
                "ru": "Зафарабадский район",
                "type": "20",
                "settlements": {
                    "1708225551": {
                        "en": "Zafarobod",
                        "uz": "Zafarobod",
                        "ru": "Зафарабад",
                        "type": "24"
                    },
                    "1708225553": {
                        "en": "Yorqin",
                        "uz": "Yorqin",
                        "ru": "Яркин",
                        "type": "24"
                    },
                    "1708225555": {
                        "en": "Pistalikent",
                        "uz": "Pistalikent",
                        "ru": "Писталикент",
                        "type": "24"
                    },
                    "1708225557": {
                        "en": "Nurafshon",
                        "uz": "Nurafshon",
                        "ru": "Нурафшон",
                        "type": "24"
                    },
                    "1708225802": {
                        "en": "Birlik",
                        "uz": "Birlik",
                        "ru": "Бирлик",
                        "type": "31"
                    },
                    "1708225807": {
                        "en": "Yorqin",
                        "uz": "Yorqin",
                        "ru": "Еркин",
                        "type": "31"
                    },
                    "1708225812": {
                        "en": "Lolazor",
                        "uz": "Lolazor",
                        "ru": "Лолазор",
                        "type": "31"
                    },
                    "1708225828": {
                        "en": "Uzun",
                        "uz": "Uzun",
                        "ru": "Узун",
                        "type": "31"
                    },
                    "1708225832": {
                        "en": "Xulkar",
                        "uz": "Xulkar",
                        "ru": "Хулкар",
                        "type": "31"
                    },
                    "1708225848": {
                        "en": "Chimqo'rg'on",
                        "uz": "Chimqo'rg'on",
                        "ru": "Чимкурган",
                        "type": "31"
                    }
                }
            },
            "1708228": {
                "en": "Paxtakor district",
                "uz": "Paxtakor tumani",
                "ru": "Пахтакорский район",
                "type": "20",
                "settlements": {
                    "1708228501": {
                        "en": "Paxtakor",
                        "uz": "Paxtakor",
                        "ru": "Пахтакор",
                        "type": "23"
                    },
                    "1708228553": {
                        "en": "Gulzor",
                        "uz": "Gulzor",
                        "ru": "Гулзор",
                        "type": "24"
                    },
                    "1708228805": {
                        "en": "Buyuk Ipak yo'li",
                        "uz": "Buyuk Ipak yo'li",
                        "ru": "Буюк Ипак йули",
                        "type": "31"
                    },
                    "1708228807": {
                        "en": "Olmazor",
                        "uz": "Olmazor",
                        "ru": "Алмазар",
                        "type": "31"
                    },
                    "1708228819": {
                        "en": "Mingchinor",
                        "uz": "Mingchinor",
                        "ru": "Мингчинар",
                        "type": "31"
                    },
                    "1708228822": {
                        "en": "Paxtakor",
                        "uz": "Paxtakor",
                        "ru": "Пахтакор",
                        "type": "31"
                    },
                    "1708228828": {
                        "en": "Bog'ishamol",
                        "uz": "Bog'ishamol",
                        "ru": "Богишамол",
                        "type": "31"
                    },
                    "1708228835": {
                        "en": "Chamanzor",
                        "uz": "Chamanzor",
                        "ru": "Чаманзар",
                        "type": "31"
                    },
                    "1708228840": {
                        "en": "Oq buloq",
                        "uz": "Oq buloq",
                        "ru": "Акбулак",
                        "type": "31"
                    }
                }
            },
            "1708235": {
                "en": "Forish district",
                "uz": "Forish tumani",
                "ru": "Фаришский район",
                "type": "20",
                "settlements": {
                    "1708235551": {
                        "en": "Bog'don",
                        "uz": "Bog'don",
                        "ru": "Богдон",
                        "type": "24"
                    },
                    "1708235560": {
                        "en": "Uchquloch",
                        "uz": "Uchquloch",
                        "ru": "Учкулач",
                        "type": "24"
                    },
                    "1708235805": {
                        "en": "Omonkeldi",
                        "uz": "Omonkeldi",
                        "ru": "Амангельды",
                        "type": "31"
                    },
                    "1708235813": {
                        "en": "Darvoza",
                        "uz": "Darvoza",
                        "ru": "Дарваза",
                        "type": "31"
                    },
                    "1708235824": {
                        "en": "Arnasoy",
                        "uz": "Arnasoy",
                        "ru": "Аpнасай",
                        "type": "31"
                    },
                    "1708235828": {
                        "en": "Qoraabdol",
                        "uz": "Qoraabdol",
                        "ru": "Караабдал",
                        "type": "31"
                    },
                    "1708235835": {
                        "en": "Egizbuloq",
                        "uz": "Egizbuloq",
                        "ru": "Эгизбулак",
                        "type": "31"
                    },
                    "1708235846": {
                        "en": "Qizilqum",
                        "uz": "Qizilqum",
                        "ru": "Кызылкум",
                        "type": "31"
                    },
                    "1708235868": {
                        "en": "Forish",
                        "uz": "Forish",
                        "ru": "Фариш",
                        "type": "31"
                    },
                    "1708235885": {
                        "en": "Uxum",
                        "uz": "Uxum",
                        "ru": "Ухум",
                        "type": "31"
                    },
                    "1708235890": {
                        "en": "Garasha",
                        "uz": "Garasha",
                        "ru": "Гараша",
                        "type": "31"
                    },
                    "1708235895": {
                        "en": "Osmonsoy",
                        "uz": "Osmonsoy",
                        "ru": "Османсай",
                        "type": "31"
                    }
                }
            },
            "1708237": {
                "en": "Yangiobod district",
                "uz": "Yangiobod tumani",
                "ru": "Янгиободский район",
                "type": "20",
                "settlements": {
                    "1708237552": {
                        "en": "Yangiobod",
                        "uz": "Yangiobod",
                        "ru": "Янгиабад",
                        "type": "24"
                    },
                    "1708237554": {
                        "en": "Savot",
                        "uz": "Savot",
                        "ru": "Савот",
                        "type": "24"
                    },
                    "1708237804": {
                        "en": "Sarmich",
                        "uz": "Sarmich",
                        "ru": "Сармич",
                        "type": "31"
                    },
                    "1708237813": {
                        "en": "Xo'jamushkent",
                        "uz": "Xo'jamushkent",
                        "ru": "Ходжамушкент",
                        "type": "31"
                    },
                    "1708237822": {
                        "en": "Savot",
                        "uz": "Savot",
                        "ru": "Сават",
                        "type": "31"
                    },
                    "1708237831": {
                        "en": "Havotog'",
                        "uz": "Havotog'",
                        "ru": "Ховотог",
                        "type": "31"
                    },
                    "1708237840": {
                        "en": "Xovos",
                        "uz": "Xovos",
                        "ru": "Хавас",
                        "type": "31"
                    }
                }
            },
            "1708401": {
                "en": "Jizzax",
                "uz": "Jizzax",
                "ru": "Джизак",
                "type": "21"
            }
        }
    },
    "1710": {
        "en": "Kashkadarya region",
        "uz": "Qashqadaryo viloyati",
        "ru": "Кашкадарьинская область",
        "districts": {
            "1710207": {
                "en": "G'uzor district",
                "uz": "G'uzor tumani",
                "ru": "Гузарский район",
                "type": "20",
                "settlements": {
                    "1710207501": {
                        "en": "G'uzor",
                        "uz": "G'uzor",
                        "ru": "Гузар",
                        "type": "23"
                    },
                    "1710207552": {
                        "en": "Jarariq",
                        "uz": "Jarariq",
                        "ru": "Жарарик",
                        "type": "24"
                    },
                    "1710207554": {
                        "en": "Obihayot",
                        "uz": "Obihayot",
                        "ru": "Обихает",
                        "type": "24"
                    },
                    "1710207556": {
                        "en": "Yangikent",
                        "uz": "Yangikent",
                        "ru": "Янгикент",
                        "type": "24"
                    },
                    "1710207558": {
                        "en": "Sherali",
                        "uz": "Sherali",
                        "ru": "Шерали",
                        "type": "24"
                    },
                    "1710207562": {
                        "en": "Mash'al",
                        "uz": "Mash'al",
                        "ru": "Машъал",
                        "type": "24"
                    },
                    "1710207810": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустан",
                        "type": "31"
                    },
                    "1710207823": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистан",
                        "type": "31"
                    },
                    "1710207834": {
                        "en": "Gulshan",
                        "uz": "Gulshan",
                        "ru": "Гульшан",
                        "type": "31"
                    },
                    "1710207842": {
                        "en": "Zarbdor",
                        "uz": "Zarbdor",
                        "ru": "Зарбдар",
                        "type": "31"
                    },
                    "1710207844": {
                        "en": "Qorako'l",
                        "uz": "Qorako'l",
                        "ru": "Каракуль",
                        "type": "31"
                    },
                    "1710207846": {
                        "en": "Shakarbuloq",
                        "uz": "Shakarbuloq",
                        "ru": "Шакарбулак",
                        "type": "31"
                    },
                    "1710207857": {
                        "en": "Mehnatobod",
                        "uz": "Mehnatobod",
                        "ru": "Мехнатабад",
                        "type": "31"
                    },
                    "1710207860": {
                        "en": "Qo'shtepa",
                        "uz": "Qo'shtepa",
                        "ru": "Куштепа",
                        "type": "31"
                    },
                    "1710207870": {
                        "en": "Pachkamar",
                        "uz": "Pachkamar",
                        "ru": "Пачкамар",
                        "type": "31"
                    },
                    "1710207875": {
                        "en": "Xalqabod",
                        "uz": "Xalqabod",
                        "ru": "Халкабад",
                        "type": "31"
                    },
                    "1710207880": {
                        "en": "Batosh",
                        "uz": "Batosh",
                        "ru": "Батош",
                        "type": "31"
                    },
                    "1710207885": {
                        "en": "Sherali",
                        "uz": "Sherali",
                        "ru": "Шеpали",
                        "type": "31"
                    }
                }
            },
            "1710212": {
                "en": "Dehqonobod district",
                "uz": "Dehqonobod tumani",
                "ru": "Дехканабадский район",
                "type": "20",
                "settlements": {
                    "1710212551": {
                        "en": "Karashina",
                        "uz": "Karashina",
                        "ru": "Корашина",
                        "type": "24"
                    },
                    "1710212553": {
                        "en": "Dehqonobod",
                        "uz": "Dehqonobod",
                        "ru": "Дехканабад",
                        "type": "24"
                    },
                    "1710212558": {
                        "en": "Beshbuloq",
                        "uz": "Beshbuloq",
                        "ru": "Бешбулок",
                        "type": "24"
                    },
                    "1710212804": {
                        "en": "Obiravon",
                        "uz": "Obiravon",
                        "ru": "Обиравон",
                        "type": "31"
                    },
                    "1710212809": {
                        "en": "Oqqishloq",
                        "uz": "Oqqishloq",
                        "ru": "Аккишлак",
                        "type": "31"
                    },
                    "1710212810": {
                        "en": "O'zbekiston",
                        "uz": "O'zbekiston",
                        "ru": "Узбекистан",
                        "type": "31"
                    },
                    "1710212811": {
                        "en": "Oqtosh",
                        "uz": "Oqtosh",
                        "ru": "Акташ",
                        "type": "31"
                    },
                    "1710212814": {
                        "en": "Boshchorbog'",
                        "uz": "Boshchorbog'",
                        "ru": "Бошчорбог",
                        "type": "31"
                    },
                    "1710212816": {
                        "en": "Beshqo'ton",
                        "uz": "Beshqo'ton",
                        "ru": "Бешкутан",
                        "type": "31"
                    },
                    "1710212822": {
                        "en": "Bibiqorasoch",
                        "uz": "Bibiqorasoch",
                        "ru": "Бибикарасоч",
                        "type": "31"
                    },
                    "1710212827": {
                        "en": "Duob",
                        "uz": "Duob",
                        "ru": "Дуаб",
                        "type": "31"
                    },
                    "1710212832": {
                        "en": "Qo'rg'ontosh",
                        "uz": "Qo'rg'ontosh",
                        "ru": "Курганташ",
                        "type": "31"
                    },
                    "1710212833": {
                        "en": "Qizilcha",
                        "uz": "Qizilcha",
                        "ru": "Кизилча",
                        "type": "31"
                    },
                    "1710212836": {
                        "en": "Oqirtma",
                        "uz": "Oqirtma",
                        "ru": "Окиpтма",
                        "type": "31"
                    },
                    "1710212839": {
                        "en": "Bozortepa",
                        "uz": "Bozortepa",
                        "ru": "Базаpтепа",
                        "type": "31"
                    },
                    "1710212845": {
                        "en": "Qirqquloch",
                        "uz": "Qirqquloch",
                        "ru": "Киpккулач",
                        "type": "31"
                    },
                    "1710212850": {
                        "en": "Oqrabod",
                        "uz": "Oqrabod",
                        "ru": "Окpабод",
                        "type": "31"
                    }
                }
            },
            "1710220": {
                "en": "Qamashi district",
                "uz": "Qamashi tumani",
                "ru": "Камашинский район",
                "type": "20",
                "settlements": {
                    "1710220501": {
                        "en": "Qamashi",
                        "uz": "Qamashi",
                        "ru": "Камаши",
                        "type": "23"
                    },
                    "1710220552": {
                        "en": "Balandchayla",
                        "uz": "Balandchayla",
                        "ru": "Баландчайла",
                        "type": "24"
                    },
                    "1710220554": {
                        "en": "Qoratepa",
                        "uz": "Qoratepa",
                        "ru": "Коратепа",
                        "type": "24"
                    },
                    "1710220556": {
                        "en": "Qiziltepa",
                        "uz": "Qiziltepa",
                        "ru": "Кызилтепа",
                        "type": "24"
                    },
                    "1710220558": {
                        "en": "Sarbozor",
                        "uz": "Sarbozor",
                        "ru": "Сарбозор",
                        "type": "24"
                    },
                    "1710220562": {
                        "en": "Badahshon",
                        "uz": "Badahshon",
                        "ru": "Бадахшон",
                        "type": "24"
                    },
                    "1710220833": {
                        "en": "Qorabog'",
                        "uz": "Qorabog'",
                        "ru": "Карабаг",
                        "type": "31"
                    },
                    "1710220835": {
                        "en": "Qoratepa",
                        "uz": "Qoratepa",
                        "ru": "Каратепа",
                        "type": "31"
                    },
                    "1710220844": {
                        "en": "Ko'kbuloq",
                        "uz": "Ko'kbuloq",
                        "ru": "Кокбулак",
                        "type": "31"
                    },
                    "1710220845": {
                        "en": "Qiziltepa",
                        "uz": "Qiziltepa",
                        "ru": "Кизилтепа",
                        "type": "31"
                    },
                    "1710220847": {
                        "en": "Rabod",
                        "uz": "Rabod",
                        "ru": "Равот",
                        "type": "31"
                    },
                    "1710220855": {
                        "en": "To'qboy",
                        "uz": "To'qboy",
                        "ru": "Тукбай",
                        "type": "31"
                    },
                    "1710220866": {
                        "en": "Chim",
                        "uz": "Chim",
                        "ru": "Чим",
                        "type": "31"
                    },
                    "1710220870": {
                        "en": "Qamay",
                        "uz": "Qamay",
                        "ru": "Камай",
                        "type": "31"
                    },
                    "1710220875": {
                        "en": "Jonbo'zsoy",
                        "uz": "Jonbo'zsoy",
                        "ru": "Жонбузсой",
                        "type": "31"
                    },
                    "1710220880": {
                        "en": "Loyqasoy",
                        "uz": "Loyqasoy",
                        "ru": "Лойкасой",
                        "type": "31"
                    },
                    "1710220885": {
                        "en": "Yortepa",
                        "uz": "Yortepa",
                        "ru": "Еpтепа",
                        "type": "31"
                    }
                }
            },
            "1710224": {
                "en": "Qarshi district",
                "uz": "Qarshi tumani",
                "ru": "Каршинский район",
                "type": "20",
                "settlements": {
                    "1710224501": {
                        "en": "Beshkent",
                        "uz": "Beshkent",
                        "ru": "Бешкент",
                        "type": "23"
                    },
                    "1710224553": {
                        "en": "Fayzobod",
                        "uz": "Fayzobod",
                        "ru": "Файзиабад",
                        "type": "24"
                    },
                    "1710224556": {
                        "en": "Saroy",
                        "uz": "Saroy",
                        "ru": "Сарай",
                        "type": "24"
                    },
                    "1710224559": {
                        "en": "G'ubdin",
                        "uz": "G'ubdin",
                        "ru": "Губдин",
                        "type": "24"
                    },
                    "1710224563": {
                        "en": "Lag'mon",
                        "uz": "Lag'mon",
                        "ru": "Лагмон",
                        "type": "24"
                    },
                    "1710224566": {
                        "en": "Kuchkak",
                        "uz": "Kuchkak",
                        "ru": "Кучкак",
                        "type": "24"
                    },
                    "1710224569": {
                        "en": "Xonobod",
                        "uz": "Xonobod",
                        "ru": "Хонабад",
                        "type": "24"
                    },
                    "1710224573": {
                        "en": "Shilvi",
                        "uz": "Shilvi",
                        "ru": "Шилви",
                        "type": "24"
                    },
                    "1710224576": {
                        "en": "Qovchin",
                        "uz": "Qovchin",
                        "ru": "Ковчин",
                        "type": "24"
                    },
                    "1710224579": {
                        "en": "Nuqrabod",
                        "uz": "Nuqrabod",
                        "ru": "Нукрабад",
                        "type": "24"
                    },
                    "1710224583": {
                        "en": "Yertepa",
                        "uz": "Yertepa",
                        "ru": "Ертепа",
                        "type": "24"
                    },
                    "1710224586": {
                        "en": "Navro'z",
                        "uz": "Navro'z",
                        "ru": "Навруз",
                        "type": "24"
                    },
                    "1710224589": {
                        "en": "Jumabozor",
                        "uz": "Jumabozor",
                        "ru": "Жумабозор",
                        "type": "24"
                    },
                    "1710224593": {
                        "en": "Mustaqillik",
                        "uz": "Mustaqillik",
                        "ru": "Мустакиллик",
                        "type": "24"
                    },
                    "1710224596": {
                        "en": "Mirmiron",
                        "uz": "Mirmiron",
                        "ru": "Мирмирон",
                        "type": "24"
                    },
                    "1710224599": {
                        "en": "Yangi xayot",
                        "uz": "Yangi xayot",
                        "ru": "Янгихает",
                        "type": "24"
                    },
                    "1710224808": {
                        "en": "Bog'obod",
                        "uz": "Bog'obod",
                        "ru": "Багабад",
                        "type": "31"
                    },
                    "1710224812": {
                        "en": "Charag'il",
                        "uz": "Charag'il",
                        "ru": "Чарогил",
                        "type": "31"
                    },
                    "1710224822": {
                        "en": "Dasht",
                        "uz": "Dasht",
                        "ru": "Дашт",
                        "type": "31"
                    },
                    "1710224833": {
                        "en": "Yertepa",
                        "uz": "Yertepa",
                        "ru": "Ертепа",
                        "type": "31"
                    },
                    "1710224840": {
                        "en": "Navbahor",
                        "uz": "Navbahor",
                        "ru": "Навбахор",
                        "type": "31"
                    },
                    "1710224842": {
                        "en": "Qoratepa",
                        "uz": "Qoratepa",
                        "ru": "Каратепа",
                        "type": "31"
                    },
                    "1710224843": {
                        "en": "Cho'libo'ston",
                        "uz": "Cho'libo'ston",
                        "ru": "Чулибустан",
                        "type": "31"
                    },
                    "1710224844": {
                        "en": "Kat",
                        "uz": "Kat",
                        "ru": "Кат",
                        "type": "31"
                    },
                    "1710224847": {
                        "en": "Qovchin",
                        "uz": "Qovchin",
                        "ru": "Ковчин",
                        "type": "31"
                    },
                    "1710224855": {
                        "en": "Chaman",
                        "uz": "Chaman",
                        "ru": "Чаман",
                        "type": "31"
                    },
                    "1710224877": {
                        "en": "O'zbekiston mustaqilligi",
                        "uz": "O'zbekiston mustaqilligi",
                        "ru": "Узбекистон мустакиллиги",
                        "type": "31"
                    },
                    "1710224880": {
                        "en": "Paxtakor",
                        "uz": "Paxtakor",
                        "ru": "Пахтакор",
                        "type": "31"
                    },
                    "1710224884": {
                        "en": "Poshton",
                        "uz": "Poshton",
                        "ru": "Поштон",
                        "type": "31"
                    },
                    "1710224888": {
                        "en": "Tallikuron",
                        "uz": "Tallikuron",
                        "ru": "Талликурган",
                        "type": "31"
                    },
                    "1710224895": {
                        "en": "Hilol",
                        "uz": "Hilol",
                        "ru": "Хилал",
                        "type": "31"
                    }
                }
            },
            "1710229": {
                "en": "Koson district",
                "uz": "Koson tumani",
                "ru": "Касанский район",
                "type": "20",
                "settlements": {
                    "1710229501": {
                        "en": "Koson",
                        "uz": "Koson",
                        "ru": "Касан",
                        "type": "23"
                    },
                    "1710229552": {
                        "en": "Boyg'undi",
                        "uz": "Boyg'undi",
                        "ru": "Бойгунди",
                        "type": "24"
                    },
                    "1710229554": {
                        "en": "Boyterak",
                        "uz": "Boyterak",
                        "ru": "Бойтерак",
                        "type": "24"
                    },
                    "1710229556": {
                        "en": "Guvalak",
                        "uz": "Guvalak",
                        "ru": "Гувалак",
                        "type": "24"
                    },
                    "1710229558": {
                        "en": "Istiqlol",
                        "uz": "Istiqlol",
                        "ru": "Истиклол",
                        "type": "24"
                    },
                    "1710229560": {
                        "en": "Qo'yi Obron",
                        "uz": "Qo'yi Obron",
                        "ru": "Куйи Оброн",
                        "type": "24"
                    },
                    "1710229562": {
                        "en": "Mudin",
                        "uz": "Mudin",
                        "ru": "Мудин",
                        "type": "24"
                    },
                    "1710229564": {
                        "en": "Oqtepa",
                        "uz": "Oqtepa",
                        "ru": "Октепа",
                        "type": "24"
                    },
                    "1710229566": {
                        "en": "Obod",
                        "uz": "Obod",
                        "ru": "Абад",
                        "type": "24"
                    },
                    "1710229568": {
                        "en": "Pudina",
                        "uz": "Pudina",
                        "ru": "Пудина",
                        "type": "24"
                    },
                    "1710229570": {
                        "en": "Po'lati",
                        "uz": "Po'lati",
                        "ru": "Пулоти",
                        "type": "24"
                    },
                    "1710229572": {
                        "en": "Rahimso'fi",
                        "uz": "Rahimso'fi",
                        "ru": "Рахимсуфи",
                        "type": "24"
                    },
                    "1710229574": {
                        "en": "Surhon",
                        "uz": "Surhon",
                        "ru": "Сурхон",
                        "type": "24"
                    },
                    "1710229576": {
                        "en": "To'lg'a",
                        "uz": "To'lg'a",
                        "ru": "Тулга",
                        "type": "24"
                    },
                    "1710229578": {
                        "en": "Esaboy",
                        "uz": "Esaboy",
                        "ru": "Эсабой",
                        "type": "24"
                    },
                    "1710229807": {
                        "en": "Alachabob",
                        "uz": "Alachabob",
                        "ru": "Алачабаб",
                        "type": "31"
                    },
                    "1710229812": {
                        "en": "Rudaksoy",
                        "uz": "Rudaksoy",
                        "ru": "Рудаксой",
                        "type": "31"
                    },
                    "1710229815": {
                        "en": "Gulbog'",
                        "uz": "Gulbog'",
                        "ru": "Гульбаг",
                        "type": "31"
                    },
                    "1710229823": {
                        "en": "Koson",
                        "uz": "Koson",
                        "ru": "Касан",
                        "type": "31"
                    },
                    "1710229835": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "31"
                    },
                    "1710229846": {
                        "en": "Qo'ng'irtog'",
                        "uz": "Qo'ng'irtog'",
                        "ru": "Кунгиртог",
                        "type": "31"
                    },
                    "1710229860": {
                        "en": "Gulobod",
                        "uz": "Gulobod",
                        "ru": "Гулобод",
                        "type": "31"
                    },
                    "1710229868": {
                        "en": "Istiqlol",
                        "uz": "Istiqlol",
                        "ru": "Истиклол",
                        "type": "31"
                    },
                    "1710229871": {
                        "en": "Tinchlik",
                        "uz": "Tinchlik",
                        "ru": "Тинчлик",
                        "type": "31"
                    }
                }
            },
            "1710232": {
                "en": "Kitob district",
                "uz": "Kitob tumani",
                "ru": "Китабский район",
                "type": "20",
                "settlements": {
                    "1710232501": {
                        "en": "Kitob",
                        "uz": "Kitob",
                        "ru": "Китаб",
                        "type": "23"
                    },
                    "1710232553": {
                        "en": "Alaqo'yliq",
                        "uz": "Alaqo'yliq",
                        "ru": "Алакуйлик",
                        "type": "24"
                    },
                    "1710232556": {
                        "en": "Bektemir",
                        "uz": "Bektemir",
                        "ru": "Бектемир",
                        "type": "24"
                    },
                    "1710232559": {
                        "en": "Rus qishloq",
                        "uz": "Rus qishloq",
                        "ru": "Рус",
                        "type": "24"
                    },
                    "1710232563": {
                        "en": "Baxtdarvozasi",
                        "uz": "Baxtdarvozasi",
                        "ru": "Бахтдарвозаси",
                        "type": "24"
                    },
                    "1710232566": {
                        "en": "Beshterak",
                        "uz": "Beshterak",
                        "ru": "Бештерак",
                        "type": "24"
                    },
                    "1710232569": {
                        "en": "Varganza",
                        "uz": "Varganza",
                        "ru": "Варганза",
                        "type": "24"
                    },
                    "1710232573": {
                        "en": "Obikanda",
                        "uz": "Obikanda",
                        "ru": "Обиканда",
                        "type": "24"
                    },
                    "1710232576": {
                        "en": "Panji",
                        "uz": "Panji",
                        "ru": "Панжи",
                        "type": "24"
                    },
                    "1710232579": {
                        "en": "Sariosiyo",
                        "uz": "Sariosiyo",
                        "ru": "Сариосие",
                        "type": "24"
                    },
                    "1710232583": {
                        "en": "Sevaz",
                        "uz": "Sevaz",
                        "ru": "Севаз",
                        "type": "24"
                    },
                    "1710232586": {
                        "en": "Xoji",
                        "uz": "Xoji",
                        "ru": "Хожи",
                        "type": "24"
                    },
                    "1710232589": {
                        "en": "Yakkatut",
                        "uz": "Yakkatut",
                        "ru": "Яккатут",
                        "type": "24"
                    },
                    "1710232593": {
                        "en": "Yangiobod",
                        "uz": "Yangiobod",
                        "ru": "Янгиабад",
                        "type": "24"
                    },
                    "1710232803": {
                        "en": "Bektemir",
                        "uz": "Bektemir",
                        "ru": "Бектемир",
                        "type": "31"
                    },
                    "1710232808": {
                        "en": "Qatorbog'",
                        "uz": "Qatorbog'",
                        "ru": "Катарбаг",
                        "type": "31"
                    },
                    "1710232809": {
                        "en": "Qaynarbuloq",
                        "uz": "Qaynarbuloq",
                        "ru": "Кайнарбулак",
                        "type": "31"
                    },
                    "1710232811": {
                        "en": "Qo'yioqboy",
                        "uz": "Qo'yioqboy",
                        "ru": "Куйнакбай",
                        "type": "31"
                    },
                    "1710232833": {
                        "en": "Makrid",
                        "uz": "Makrid",
                        "ru": "Макрид",
                        "type": "31"
                    },
                    "1710232855": {
                        "en": "Tagob",
                        "uz": "Tagob",
                        "ru": "Тагоб",
                        "type": "31"
                    },
                    "1710232866": {
                        "en": "Paxtaobod",
                        "uz": "Paxtaobod",
                        "ru": "Пахтаабад",
                        "type": "31"
                    },
                    "1710232877": {
                        "en": "Sevaz",
                        "uz": "Sevaz",
                        "ru": "Сиваз",
                        "type": "31"
                    },
                    "1710232880": {
                        "en": "Tupchoq",
                        "uz": "Tupchoq",
                        "ru": "Тупчак",
                        "type": "31"
                    },
                    "1710232885": {
                        "en": "Bog'bon",
                        "uz": "Bog'bon",
                        "ru": "Багбан",
                        "type": "31"
                    },
                    "1710232890": {
                        "en": "Beshterak",
                        "uz": "Beshterak",
                        "ru": "Бештеpак",
                        "type": "31"
                    },
                    "1710232895": {
                        "en": "Jilisuv",
                        "uz": "Jilisuv",
                        "ru": "Жилисув",
                        "type": "31"
                    }
                }
            },
            "1710233": {
                "en": "Mirishkor district",
                "uz": "Mirishkor tumani",
                "ru": "Миришкорский район",
                "type": "20",
                "settlements": {
                    "1710233551": {
                        "en": "Yangi Mirishkor",
                        "uz": "Yangi Mirishkor",
                        "ru": "Янги Миришкор",
                        "type": "24"
                    },
                    "1710233555": {
                        "en": "Jeynov",
                        "uz": "Jeynov",
                        "ru": "Жейнов",
                        "type": "24"
                    },
                    "1710233558": {
                        "en": "Pomuq",
                        "uz": "Pomuq",
                        "ru": "Помук",
                        "type": "24"
                    },
                    "1710233808": {
                        "en": "Obod",
                        "uz": "Obod",
                        "ru": "Абад",
                        "type": "31"
                    },
                    "1710233812": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустон",
                        "type": "31"
                    },
                    "1710233823": {
                        "en": "Vori",
                        "uz": "Vori",
                        "ru": "Вори",
                        "type": "31"
                    },
                    "1710233828": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистан",
                        "type": "31"
                    },
                    "1710233832": {
                        "en": "Gulshanbog'",
                        "uz": "Gulshanbog'",
                        "ru": "Гулшан баг",
                        "type": "31"
                    },
                    "1710233836": {
                        "en": "Jeynov",
                        "uz": "Jeynov",
                        "ru": "Джейнау",
                        "type": "31"
                    },
                    "1710233842": {
                        "en": "Mirishkor",
                        "uz": "Mirishkor",
                        "ru": "Миришкор",
                        "type": "31"
                    },
                    "1710233848": {
                        "en": "Navbahor",
                        "uz": "Navbahor",
                        "ru": "Навбахор",
                        "type": "31"
                    },
                    "1710233855": {
                        "en": "Pomuq",
                        "uz": "Pomuq",
                        "ru": "Помук",
                        "type": "31"
                    },
                    "1710233862": {
                        "en": "Chamanzor",
                        "uz": "Chamanzor",
                        "ru": "Чаманзар",
                        "type": "31"
                    },
                    "1710233865": {
                        "en": "Chandir",
                        "uz": "Chandir",
                        "ru": "Чандиp",
                        "type": "31"
                    },
                    "1710233869": {
                        "en": "Yangiobod",
                        "uz": "Yangiobod",
                        "ru": "Янгиабад",
                        "type": "31"
                    }
                }
            },
            "1710234": {
                "en": "Muborak district",
                "uz": "Muborak tumani",
                "ru": "Мубарекский район",
                "type": "20",
                "settlements": {
                    "1710234501": {
                        "en": "Muborak",
                        "uz": "Muborak",
                        "ru": "Мубаpек",
                        "type": "23"
                    },
                    "1710234552": {
                        "en": "Qarliq",
                        "uz": "Qarliq",
                        "ru": "Карлик",
                        "type": "24"
                    },
                    "1710234554": {
                        "en": "Baxt",
                        "uz": "Baxt",
                        "ru": "Бахт",
                        "type": "24"
                    },
                    "1710234556": {
                        "en": "Qoraqum",
                        "uz": "Qoraqum",
                        "ru": "Каракум",
                        "type": "24"
                    },
                    "1710234558": {
                        "en": "Diyonat",
                        "uz": "Diyonat",
                        "ru": "Диёнат",
                        "type": "24"
                    },
                    "1710234562": {
                        "en": "Shayx",
                        "uz": "Shayx",
                        "ru": "Шайх",
                        "type": "24"
                    },
                    "1710234835": {
                        "en": "Qoraqum",
                        "uz": "Qoraqum",
                        "ru": "Каракум",
                        "type": "31"
                    },
                    "1710234845": {
                        "en": "Muborak",
                        "uz": "Muborak",
                        "ru": "Муборак",
                        "type": "31"
                    },
                    "1710234878": {
                        "en": "Qarliq",
                        "uz": "Qarliq",
                        "ru": "Карлик",
                        "type": "31"
                    },
                    "1710234882": {
                        "en": "Sariq",
                        "uz": "Sariq",
                        "ru": "Саpик",
                        "type": "31"
                    }
                }
            },
            "1710235": {
                "en": "Nishon district",
                "uz": "Nishon tumani",
                "ru": "Нишанский район",
                "type": "20",
                "settlements": {
                    "1710235501": {
                        "en": "Yangi Nishon",
                        "uz": "Yangi Nishon",
                        "ru": "Янги-Нишан",
                        "type": "23"
                    },
                    "1710235505": {
                        "en": "Talimarjon",
                        "uz": "Talimarjon",
                        "ru": "Талимарджан",
                        "type": "23"
                    },
                    "1710235553": {
                        "en": "Nuriston",
                        "uz": "Nuriston",
                        "ru": "Нуристон",
                        "type": "24"
                    },
                    "1710235555": {
                        "en": "Nishon",
                        "uz": "Nishon",
                        "ru": "Нишон",
                        "type": "24"
                    },
                    "1710235557": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистан",
                        "type": "24"
                    },
                    "1710235559": {
                        "en": "Oq oltin",
                        "uz": "Oq oltin",
                        "ru": "Ак алтин",
                        "type": "24"
                    },
                    "1710235561": {
                        "en": "Sardoba",
                        "uz": "Sardoba",
                        "ru": "Сардоба",
                        "type": "24"
                    },
                    "1710235565": {
                        "en": "Paxtachi",
                        "uz": "Paxtachi",
                        "ru": "Пахтачи",
                        "type": "24"
                    },
                    "1710235567": {
                        "en": "Oydin",
                        "uz": "Oydin",
                        "ru": "Ойдин",
                        "type": "24"
                    },
                    "1710235569": {
                        "en": "Samarqand",
                        "uz": "Samarqand",
                        "ru": "Самарканд",
                        "type": "24"
                    },
                    "1710235571": {
                        "en": "Paxtaobod",
                        "uz": "Paxtaobod",
                        "ru": "Пахтаабад",
                        "type": "24"
                    },
                    "1710235804": {
                        "en": "Oydinlik",
                        "uz": "Oydinlik",
                        "ru": "Ойдинлик",
                        "type": "31"
                    },
                    "1710235807": {
                        "en": "Oq oltin",
                        "uz": "Oq oltin",
                        "ru": "Акалтын",
                        "type": "31"
                    },
                    "1710235826": {
                        "en": "Qirqquloch",
                        "uz": "Qirqquloch",
                        "ru": "Кирккулоч",
                        "type": "31"
                    },
                    "1710235848": {
                        "en": "Navro'z",
                        "uz": "Navro'z",
                        "ru": "Навруз",
                        "type": "31"
                    },
                    "1710235850": {
                        "en": "Nishon",
                        "uz": "Nishon",
                        "ru": "Нишан",
                        "type": "31"
                    },
                    "1710235860": {
                        "en": "Paxtazor",
                        "uz": "Paxtazor",
                        "ru": "Пахтазар",
                        "type": "31"
                    },
                    "1710235874": {
                        "en": "Shirinobod",
                        "uz": "Shirinobod",
                        "ru": "Ширинабад",
                        "type": "31"
                    },
                    "1710235880": {
                        "en": "Balxiyak",
                        "uz": "Balxiyak",
                        "ru": "Балхияк",
                        "type": "31"
                    }
                }
            },
            "1710237": {
                "en": "Kasbi district",
                "uz": "Kasbi tumani",
                "ru": "Касбинский район",
                "type": "20",
                "settlements": {
                    "1710237551": {
                        "en": "Mug'lon",
                        "uz": "Mug'lon",
                        "ru": "Муглон",
                        "type": "24"
                    },
                    "1710237554": {
                        "en": "Denov",
                        "uz": "Denov",
                        "ru": "Денов",
                        "type": "24"
                    },
                    "1710237556": {
                        "en": "Kasbi",
                        "uz": "Kasbi",
                        "ru": "Касби",
                        "type": "24"
                    },
                    "1710237558": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "24"
                    },
                    "1710237562": {
                        "en": "Yangi qishloq",
                        "uz": "Yangi qishloq",
                        "ru": "Янги кишлок",
                        "type": "24"
                    },
                    "1710237564": {
                        "en": "Xo'jakasbi",
                        "uz": "Xo'jakasbi",
                        "ru": "Хужа Касби",
                        "type": "24"
                    },
                    "1710237566": {
                        "en": "Fazli",
                        "uz": "Fazli",
                        "ru": "Фазли",
                        "type": "24"
                    },
                    "1710237568": {
                        "en": "Maymanoq",
                        "uz": "Maymanoq",
                        "ru": "Майманок",
                        "type": "24"
                    },
                    "1710237572": {
                        "en": "Qatag'an",
                        "uz": "Qatag'an",
                        "ru": "Катаган",
                        "type": "24"
                    },
                    "1710237822": {
                        "en": "Qamashi",
                        "uz": "Qamashi",
                        "ru": "Камаши",
                        "type": "31"
                    },
                    "1710237825": {
                        "en": "Komilon",
                        "uz": "Komilon",
                        "ru": "Камилан",
                        "type": "31"
                    },
                    "1710237833": {
                        "en": "Qatag'on",
                        "uz": "Qatag'on",
                        "ru": "Катаган",
                        "type": "31"
                    },
                    "1710237840": {
                        "en": "Cho'lquvar",
                        "uz": "Cho'lquvar",
                        "ru": "Чулкувар",
                        "type": "31"
                    },
                    "1710237855": {
                        "en": "Mug'lon",
                        "uz": "Mug'lon",
                        "ru": "Муглон",
                        "type": "31"
                    },
                    "1710237866": {
                        "en": "Denov",
                        "uz": "Denov",
                        "ru": "Денау",
                        "type": "31"
                    },
                    "1710237877": {
                        "en": "Qoraqo'ng'irot",
                        "uz": "Qoraqo'ng'irot",
                        "ru": "Коракунгирот",
                        "type": "31"
                    },
                    "1710237882": {
                        "en": "Yuksalish",
                        "uz": "Yuksalish",
                        "ru": "Юксалиш",
                        "type": "31"
                    },
                    "1710237886": {
                        "en": "Paxtakor",
                        "uz": "Paxtakor",
                        "ru": "Пахтакор",
                        "type": "31"
                    },
                    "1710237890": {
                        "en": "G'alaba",
                        "uz": "G'alaba",
                        "ru": "Галаба",
                        "type": "31"
                    }
                }
            },
            "1710242": {
                "en": "Chiroqchi district",
                "uz": "Chiroqchi tumani",
                "ru": "Чиракчинский район",
                "type": "20",
                "settlements": {
                    "1710242501": {
                        "en": "Chiroqchi",
                        "uz": "Chiroqchi",
                        "ru": "Чиракчи",
                        "type": "23"
                    },
                    "1710242553": {
                        "en": "Jar",
                        "uz": "Jar",
                        "ru": "Джар",
                        "type": "24"
                    },
                    "1710242556": {
                        "en": "O'ymovut",
                        "uz": "O'ymovut",
                        "ru": "Уймовут",
                        "type": "24"
                    },
                    "1710242559": {
                        "en": "Dam",
                        "uz": "Dam",
                        "ru": "Дам",
                        "type": "24"
                    },
                    "1710242563": {
                        "en": "Pakandi",
                        "uz": "Pakandi",
                        "ru": "Паканди",
                        "type": "24"
                    },
                    "1710242566": {
                        "en": "Paxtaobod",
                        "uz": "Paxtaobod",
                        "ru": "Пахтаобод",
                        "type": "24"
                    },
                    "1710242569": {
                        "en": "Chiyal",
                        "uz": "Chiyal",
                        "ru": "Чиял",
                        "type": "24"
                    },
                    "1710242573": {
                        "en": "Ko'kdala",
                        "uz": "Ko'kdala",
                        "ru": "Кукдала",
                        "type": "24"
                    },
                    "1710242576": {
                        "en": "Ayritom",
                        "uz": "Ayritom",
                        "ru": "Айритом",
                        "type": "24"
                    },
                    "1710242811": {
                        "en": "Olmazor",
                        "uz": "Olmazor",
                        "ru": "Олмазор",
                        "type": "31"
                    },
                    "1710242822": {
                        "en": "Qalqama",
                        "uz": "Qalqama",
                        "ru": "Калкама",
                        "type": "31"
                    },
                    "1710242824": {
                        "en": "Ko'kdala",
                        "uz": "Ko'kdala",
                        "ru": "Кокдала",
                        "type": "31"
                    },
                    "1710242826": {
                        "en": "Xumo",
                        "uz": "Xumo",
                        "ru": "Хумо",
                        "type": "31"
                    },
                    "1710242840": {
                        "en": "Langar",
                        "uz": "Langar",
                        "ru": "Лангар",
                        "type": "31"
                    },
                    "1710242844": {
                        "en": "Jar",
                        "uz": "Jar",
                        "ru": "Джар",
                        "type": "31"
                    },
                    "1710242856": {
                        "en": "Taraqqiyot",
                        "uz": "Taraqqiyot",
                        "ru": "Тараккиёт",
                        "type": "31"
                    },
                    "1710242872": {
                        "en": "Uyshun",
                        "uz": "Uyshun",
                        "ru": "Уйшун",
                        "type": "31"
                    },
                    "1710242874": {
                        "en": "Nurafshon",
                        "uz": "Nurafshon",
                        "ru": "Нурафшон",
                        "type": "31"
                    },
                    "1710242876": {
                        "en": "Chiyal",
                        "uz": "Chiyal",
                        "ru": "Чиел",
                        "type": "31"
                    },
                    "1710242877": {
                        "en": "Qumdaryo",
                        "uz": "Qumdaryo",
                        "ru": "Кумдаре",
                        "type": "31"
                    },
                    "1710242878": {
                        "en": "Sho'rquduq",
                        "uz": "Sho'rquduq",
                        "ru": "Шуркудук",
                        "type": "31"
                    },
                    "1710242880": {
                        "en": "Eski Anxor",
                        "uz": "Eski Anxor",
                        "ru": "Эски Ангор",
                        "type": "31"
                    },
                    "1710242884": {
                        "en": "Yangihayot",
                        "uz": "Yangihayot",
                        "ru": "Янгихает",
                        "type": "31"
                    },
                    "1710242886": {
                        "en": "Paxtaobod",
                        "uz": "Paxtaobod",
                        "ru": "Пахтаабад",
                        "type": "31"
                    },
                    "1710242888": {
                        "en": "Dodiq",
                        "uz": "Dodiq",
                        "ru": "Додик",
                        "type": "31"
                    },
                    "1710242890": {
                        "en": "Qahramon",
                        "uz": "Qahramon",
                        "ru": "Кахpамон",
                        "type": "31"
                    },
                    "1710242892": {
                        "en": "Uymovut",
                        "uz": "Uymovut",
                        "ru": "Уймавут",
                        "type": "31"
                    },
                    "1710242894": {
                        "en": "Mirzato'p",
                        "uz": "Mirzato'p",
                        "ru": "Миpзатуп",
                        "type": "31"
                    },
                    "1710242896": {
                        "en": "Torjilg'a",
                        "uz": "Torjilg'a",
                        "ru": "Тоpжилга",
                        "type": "31"
                    }
                }
            },
            "1710245": {
                "en": "Shahrisabz district",
                "uz": "Shahrisabz tumani",
                "ru": "Шахрисабзский район",
                "type": "20",
                "settlements": {
                    "1710245553": {
                        "en": "Miraki",
                        "uz": "Miraki",
                        "ru": "Мираки",
                        "type": "24"
                    },
                    "1710245555": {
                        "en": "Qumqishloq",
                        "uz": "Qumqishloq",
                        "ru": "Кумкишлок",
                        "type": "24"
                    },
                    "1710245557": {
                        "en": "O'rtaqo'rg'on",
                        "uz": "O'rtaqo'rg'on",
                        "ru": "Уртакургон",
                        "type": "24"
                    },
                    "1710245561": {
                        "en": "Chorshanbe",
                        "uz": "Chorshanbe",
                        "ru": "Чоршанбе",
                        "type": "24"
                    },
                    "1710245563": {
                        "en": "Temirchi",
                        "uz": "Temirchi",
                        "ru": "Темирчи",
                        "type": "24"
                    },
                    "1710245565": {
                        "en": "Yangiqishloq",
                        "uz": "Yangiqishloq",
                        "ru": "Янгикишлок",
                        "type": "24"
                    },
                    "1710245567": {
                        "en": "Qutchi",
                        "uz": "Qutchi",
                        "ru": "Кутчи",
                        "type": "24"
                    },
                    "1710245569": {
                        "en": "Shamaton",
                        "uz": "Shamaton",
                        "ru": "Шаматон",
                        "type": "24"
                    },
                    "1710245571": {
                        "en": "Ammog'on-1",
                        "uz": "Ammog'on-1",
                        "ru": "Аммогон-1",
                        "type": "24"
                    },
                    "1710245573": {
                        "en": "Qo'shqanot",
                        "uz": "Qo'shqanot",
                        "ru": "Кушканот",
                        "type": "24"
                    },
                    "1710245575": {
                        "en": "Anday",
                        "uz": "Anday",
                        "ru": "Андай",
                        "type": "24"
                    },
                    "1710245583": {
                        "en": "Xo'jaxuroson",
                        "uz": "Xo'jaxuroson",
                        "ru": "Хужахуросон",
                        "type": "24"
                    },
                    "1710245585": {
                        "en": "Keldihayot",
                        "uz": "Keldihayot",
                        "ru": "Келдихает",
                        "type": "24"
                    },
                    "1710245802": {
                        "en": "Oq suv",
                        "uz": "Oq suv",
                        "ru": "Аксу",
                        "type": "31"
                    },
                    "1710245811": {
                        "en": "Do'xchi",
                        "uz": "Do'xchi",
                        "ru": "Дукчи",
                        "type": "31"
                    },
                    "1710245818": {
                        "en": "Kunchiqar",
                        "uz": "Kunchiqar",
                        "ru": "Кунчикар",
                        "type": "31"
                    },
                    "1710245823": {
                        "en": "Qutchi",
                        "uz": "Qutchi",
                        "ru": "Кутчи",
                        "type": "31"
                    },
                    "1710245835": {
                        "en": "Mo'minobod",
                        "uz": "Mo'minobod",
                        "ru": "Муминабад",
                        "type": "31"
                    },
                    "1710245840": {
                        "en": "Namaton",
                        "uz": "Namaton",
                        "ru": "Наматан",
                        "type": "31"
                    },
                    "1710245851": {
                        "en": "To'damaydon",
                        "uz": "To'damaydon",
                        "ru": "Тудамайдон",
                        "type": "31"
                    },
                    "1710245860": {
                        "en": "O'zbekiston",
                        "uz": "O'zbekiston",
                        "ru": "Узбекистан",
                        "type": "31"
                    },
                    "1710245869": {
                        "en": "Hisorak",
                        "uz": "Hisorak",
                        "ru": "Хисарак",
                        "type": "31"
                    },
                    "1710245872": {
                        "en": "Xitoy",
                        "uz": "Xitoy",
                        "ru": "Хитай",
                        "type": "31"
                    },
                    "1710245881": {
                        "en": "Shakarteri",
                        "uz": "Shakarteri",
                        "ru": "Шакартери",
                        "type": "31"
                    },
                    "1710245892": {
                        "en": "Shamaton",
                        "uz": "Shamaton",
                        "ru": "Шаматан",
                        "type": "31"
                    }
                }
            },
            "1710250": {
                "en": "Yakkabog' district",
                "uz": "Yakkabog' tumani",
                "ru": "Яккабагский район",
                "type": "20",
                "settlements": {
                    "1710250501": {
                        "en": "Yakkabog'",
                        "uz": "Yakkabog'",
                        "ru": "Яккабаг",
                        "type": "23"
                    },
                    "1710250555": {
                        "en": "Eski Yakkabog'",
                        "uz": "Eski Yakkabog'",
                        "ru": "Эски Яккабаг",
                        "type": "24"
                    },
                    "1710250557": {
                        "en": "Alaqarg'a",
                        "uz": "Alaqarg'a",
                        "ru": "Алакарга",
                        "type": "24"
                    },
                    "1710250558": {
                        "en": "Alako'ylak",
                        "uz": "Alako'ylak",
                        "ru": "Алакуйлак",
                        "type": "24"
                    },
                    "1710250559": {
                        "en": "Jarqirg'iz",
                        "uz": "Jarqirg'iz",
                        "ru": "Жаркиргиз",
                        "type": "24"
                    },
                    "1710250561": {
                        "en": "Qayrag'och",
                        "uz": "Qayrag'och",
                        "ru": "Кайрагач",
                        "type": "24"
                    },
                    "1710250563": {
                        "en": "Qatag'on",
                        "uz": "Qatag'on",
                        "ru": "Катагон",
                        "type": "24"
                    },
                    "1710250565": {
                        "en": "Kattabog'",
                        "uz": "Kattabog'",
                        "ru": "Каттабог",
                        "type": "24"
                    },
                    "1710250567": {
                        "en": "Madaniyat",
                        "uz": "Madaniyat",
                        "ru": "Маданият",
                        "type": "24"
                    },
                    "1710250569": {
                        "en": "Mevazor",
                        "uz": "Mevazor",
                        "ru": "Мевазор",
                        "type": "24"
                    },
                    "1710250571": {
                        "en": "Samoq",
                        "uz": "Samoq",
                        "ru": "Самок",
                        "type": "24"
                    },
                    "1710250573": {
                        "en": "Turon",
                        "uz": "Turon",
                        "ru": "Турон",
                        "type": "24"
                    },
                    "1710250575": {
                        "en": "O'z",
                        "uz": "O'z",
                        "ru": "Уз",
                        "type": "24"
                    },
                    "1710250577": {
                        "en": "Chubron",
                        "uz": "Chubron",
                        "ru": "Чуброн",
                        "type": "24"
                    },
                    "1710250579": {
                        "en": "Edilbek",
                        "uz": "Edilbek",
                        "ru": "Эдилбек",
                        "type": "24"
                    },
                    "1710250811": {
                        "en": "Qayrag'och",
                        "uz": "Qayrag'och",
                        "ru": "Кайрагач",
                        "type": "31"
                    },
                    "1710250822": {
                        "en": "Esat",
                        "uz": "Esat",
                        "ru": "Эсат",
                        "type": "31"
                    },
                    "1710250825": {
                        "en": "Qo'shchinor",
                        "uz": "Qo'shchinor",
                        "ru": "Кошчинар",
                        "type": "31"
                    },
                    "1710250833": {
                        "en": "Qishliq",
                        "uz": "Qishliq",
                        "ru": "Кишлик",
                        "type": "31"
                    },
                    "1710250844": {
                        "en": "Samoq",
                        "uz": "Samoq",
                        "ru": "Самак",
                        "type": "31"
                    },
                    "1710250855": {
                        "en": "Sandal",
                        "uz": "Sandal",
                        "ru": "Сандал",
                        "type": "31"
                    },
                    "1710250858": {
                        "en": "O'rta",
                        "uz": "O'rta",
                        "ru": "Урта",
                        "type": "31"
                    },
                    "1710250861": {
                        "en": "Chaydori",
                        "uz": "Chaydori",
                        "ru": "Чайдари",
                        "type": "31"
                    },
                    "1710250866": {
                        "en": "Hiyobon",
                        "uz": "Hiyobon",
                        "ru": "Хиябан",
                        "type": "31"
                    }
                }
            },
            "1710401": {
                "en": "Qarshi",
                "uz": "Qarshi",
                "ru": "Карши",
                "type": "21",
                "settlements": {
                    "1710401555": {
                        "en": "Qashqadaryo",
                        "uz": "Qashqadaryo",
                        "ru": "Кашкадарья",
                        "type": "24"
                    }
                }
            },
            "1710405": {
                "en": "Shahrisabz",
                "uz": "Shahrisabz",
                "ru": "Шахрисабз",
                "type": "21"
            }
        }
    },
    "1712": {
        "en": "Navoi region",
        "uz": "Navoiy viloyati",
        "ru": "Навоийская область",
        "districts": {
            "1712211": {
                "en": "Konimex district",
                "uz": "Konimex tumani",
                "ru": "Канимехский район",
                "type": "20",
                "settlements": {
                    "1712211551": {
                        "en": "Konimex",
                        "uz": "Konimex",
                        "ru": "Канимех",
                        "type": "24"
                    },
                    "1712211552": {
                        "en": "Balaqaraq",
                        "uz": "Balaqaraq",
                        "ru": "Балакарак",
                        "type": "24"
                    },
                    "1712211554": {
                        "en": "Mamiqchi",
                        "uz": "Mamiqchi",
                        "ru": "Мамикчи",
                        "type": "24"
                    },
                    "1712211556": {
                        "en": "Sho'rtepa",
                        "uz": "Sho'rtepa",
                        "ru": "Шуртепа",
                        "type": "24"
                    },
                    "1712211558": {
                        "en": "Zafarobod",
                        "uz": "Zafarobod",
                        "ru": "Зафарабад",
                        "type": "24"
                    },
                    "1712211811": {
                        "en": "Yangig'ozg'on",
                        "uz": "Yangig'ozg'on",
                        "ru": "Янгиказган",
                        "type": "31"
                    },
                    "1712211818": {
                        "en": "Sarajal",
                        "uz": "Sarajal",
                        "ru": "Саржал",
                        "type": "31"
                    },
                    "1712211822": {
                        "en": "Chordara",
                        "uz": "Chordara",
                        "ru": "Чардара",
                        "type": "31"
                    },
                    "1712211826": {
                        "en": "Karakata",
                        "uz": "Karakata",
                        "ru": "Караката",
                        "type": "31"
                    },
                    "1712211835": {
                        "en": "Uchtobe",
                        "uz": "Uchtobe",
                        "ru": "Учтобе",
                        "type": "31"
                    },
                    "1712211840": {
                        "en": "Boymurot",
                        "uz": "Boymurot",
                        "ru": "Баймуpат",
                        "type": "31"
                    },
                    "1712211845": {
                        "en": "Yangiobod",
                        "uz": "Yangiobod",
                        "ru": "Янгиабад",
                        "type": "31"
                    }
                }
            },
            "1712216": {
                "en": "Qiziltepa district",
                "uz": "Qiziltepa tumani",
                "ru": "Кызылтепинский район",
                "type": "20",
                "settlements": {
                    "1712216501": {
                        "en": "Qiziltepa",
                        "uz": "Qiziltepa",
                        "ru": "Кызылтепа",
                        "type": "23"
                    },
                    "1712216552": {
                        "en": "Husbuddin",
                        "uz": "Husbuddin",
                        "ru": "Хусбуддин",
                        "type": "24"
                    },
                    "1712216554": {
                        "en": "Qalayn-Azizon",
                        "uz": "Qalayn-Azizon",
                        "ru": "Калъайи Азизон",
                        "type": "24"
                    },
                    "1712216556": {
                        "en": "Baland G'ardiyon",
                        "uz": "Baland G'ardiyon",
                        "ru": "Баланд гардиен",
                        "type": "24"
                    },
                    "1712216558": {
                        "en": "G'oyibon",
                        "uz": "G'oyibon",
                        "ru": "Гойибон",
                        "type": "24"
                    },
                    "1712216560": {
                        "en": "Oq soch",
                        "uz": "Oq soch",
                        "ru": "Оксоч",
                        "type": "24"
                    },
                    "1712216562": {
                        "en": "Vang'ozi",
                        "uz": "Vang'ozi",
                        "ru": "Вангози",
                        "type": "24"
                    },
                    "1712216564": {
                        "en": "Oqmachit",
                        "uz": "Oqmachit",
                        "ru": "Окмачит",
                        "type": "24"
                    },
                    "1712216566": {
                        "en": "Zarmetan",
                        "uz": "Zarmetan",
                        "ru": "Зарметан",
                        "type": "24"
                    },
                    "1712216568": {
                        "en": "G'amxo'r",
                        "uz": "G'amxo'r",
                        "ru": "Гамхур",
                        "type": "24"
                    },
                    "1712216572": {
                        "en": "Uzilishkent",
                        "uz": "Uzilishkent",
                        "ru": "Узилишкент",
                        "type": "24"
                    },
                    "1712216574": {
                        "en": "O'rtaqo'rg'on",
                        "uz": "O'rtaqo'rg'on",
                        "ru": "Уртакургон",
                        "type": "24"
                    },
                    "1712216576": {
                        "en": "Xo'jaqo'rg'on",
                        "uz": "Xo'jaqo'rg'on",
                        "ru": "Хужакургон",
                        "type": "24"
                    },
                    "1712216803": {
                        "en": "Oq oltin",
                        "uz": "Oq oltin",
                        "ru": "Акалтын",
                        "type": "31"
                    },
                    "1712216805": {
                        "en": "Arabon",
                        "uz": "Arabon",
                        "ru": "Арабон",
                        "type": "31"
                    },
                    "1712216808": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустан",
                        "type": "31"
                    },
                    "1712216812": {
                        "en": "Vang'ozi",
                        "uz": "Vang'ozi",
                        "ru": "Вангази",
                        "type": "31"
                    },
                    "1712216819": {
                        "en": "G'ardiyon",
                        "uz": "G'ardiyon",
                        "ru": "Гардиян",
                        "type": "31"
                    },
                    "1712216825": {
                        "en": "Zarmitan",
                        "uz": "Zarmitan",
                        "ru": "Зармитан",
                        "type": "31"
                    },
                    "1712216840": {
                        "en": "Xo'ja-Hasan",
                        "uz": "Xo'ja-Hasan",
                        "ru": "Ходжахасан",
                        "type": "31"
                    },
                    "1712216850": {
                        "en": "Yangi hayot",
                        "uz": "Yangi hayot",
                        "ru": "Янгихаят",
                        "type": "31"
                    }
                }
            },
            "1712230": {
                "en": "Navbahor district",
                "uz": "Navbahor tumani",
                "ru": "Навбахорский район",
                "type": "20",
                "settlements": {
                    "1712230552": {
                        "en": "Kalkonota",
                        "uz": "Kalkonota",
                        "ru": "Калконота",
                        "type": "24"
                    },
                    "1712230553": {
                        "en": "Saroy",
                        "uz": "Saroy",
                        "ru": "Сарой",
                        "type": "24"
                    },
                    "1712230555": {
                        "en": "Quyi Beshrabot",
                        "uz": "Quyi Beshrabot",
                        "ru": "Куйи Бешработ",
                        "type": "24"
                    },
                    "1712230557": {
                        "en": "Keskanterak",
                        "uz": "Keskanterak",
                        "ru": "Кескантерак",
                        "type": "24"
                    },
                    "1712230559": {
                        "en": "Ijant",
                        "uz": "Ijant",
                        "ru": "Ижант",
                        "type": "24"
                    },
                    "1712230805": {
                        "en": "Olchin",
                        "uz": "Olchin",
                        "ru": "Алчин",
                        "type": "31"
                    },
                    "1712230808": {
                        "en": "Arabsaroy",
                        "uz": "Arabsaroy",
                        "ru": "Арабсарай",
                        "type": "31"
                    },
                    "1712230815": {
                        "en": "Keskanterak",
                        "uz": "Keskanterak",
                        "ru": "Кескантерак",
                        "type": "31"
                    },
                    "1712230838": {
                        "en": "Yangi-yo'l",
                        "uz": "Yangi-yo'l",
                        "ru": "Янгиюль",
                        "type": "31"
                    },
                    "1712230855": {
                        "en": "Turkiston",
                        "uz": "Turkiston",
                        "ru": "Туркестан",
                        "type": "31"
                    },
                    "1712230880": {
                        "en": "Yangiqo'rg'on",
                        "uz": "Yangiqo'rg'on",
                        "ru": "Янгикурган",
                        "type": "31"
                    },
                    "1712230882": {
                        "en": "Beshrabot",
                        "uz": "Beshrabot",
                        "ru": "Бешpабот",
                        "type": "31"
                    }
                }
            },
            "1712234": {
                "en": "Karmana district",
                "uz": "Karmana tumani",
                "ru": "Карманинский район",
                "type": "20",
                "settlements": {
                    "1712234551": {
                        "en": "Karmana",
                        "uz": "Karmana",
                        "ru": "Кармана",
                        "type": "24"
                    },
                    "1712234557": {
                        "en": "Malikrabot",
                        "uz": "Malikrabot",
                        "ru": "Маликработ",
                        "type": "24"
                    },
                    "1712234559": {
                        "en": "Paxtaobod",
                        "uz": "Paxtaobod",
                        "ru": "Пахтаабад",
                        "type": "24"
                    },
                    "1712234561": {
                        "en": "Podkoron",
                        "uz": "Podkoron",
                        "ru": "Подкорон",
                        "type": "24"
                    },
                    "1712234563": {
                        "en": "Kamolot",
                        "uz": "Kamolot",
                        "ru": "Камолот",
                        "type": "24"
                    },
                    "1712234565": {
                        "en": "Yoshlik",
                        "uz": "Yoshlik",
                        "ru": "Ешлик",
                        "type": "24"
                    },
                    "1712234802": {
                        "en": "Uyrot",
                        "uz": "Uyrot",
                        "ru": "Уйрат",
                        "type": "31"
                    },
                    "1712234823": {
                        "en": "Do'rmon",
                        "uz": "Do'rmon",
                        "ru": "Дорман",
                        "type": "31"
                    },
                    "1712234845": {
                        "en": "Narpay",
                        "uz": "Narpay",
                        "ru": "Нарпай",
                        "type": "31"
                    },
                    "1712234867": {
                        "en": "Xazora",
                        "uz": "Xazora",
                        "ru": "Хазара",
                        "type": "31"
                    },
                    "1712234878": {
                        "en": "Yangiariq",
                        "uz": "Yangiariq",
                        "ru": "Янгиарык",
                        "type": "31"
                    },
                    "1712234882": {
                        "en": "Jaloyir",
                        "uz": "Jaloyir",
                        "ru": "Джалаиp",
                        "type": "31"
                    }
                }
            },
            "1712238": {
                "en": "Nurota district",
                "uz": "Nurota tumani",
                "ru": "Нуратинский район",
                "type": "20",
                "settlements": {
                    "1712238501": {
                        "en": "Nurota",
                        "uz": "Nurota",
                        "ru": "Нурата",
                        "type": "23"
                    },
                    "1712238555": {
                        "en": "Qizilcha",
                        "uz": "Qizilcha",
                        "ru": "Кизилча",
                        "type": "24"
                    },
                    "1712238557": {
                        "en": "Temurqovuq",
                        "uz": "Temurqovuq",
                        "ru": "Темирковук",
                        "type": "24"
                    },
                    "1712238558": {
                        "en": "Chuya",
                        "uz": "Chuya",
                        "ru": "Чуя",
                        "type": "24"
                    },
                    "1712238559": {
                        "en": "Yangibino",
                        "uz": "Yangibino",
                        "ru": "Янгибино",
                        "type": "24"
                    },
                    "1712238820": {
                        "en": "Dehibaland",
                        "uz": "Dehibaland",
                        "ru": "Дебаланд",
                        "type": "31"
                    },
                    "1712238825": {
                        "en": "Gum",
                        "uz": "Gum",
                        "ru": "Гум",
                        "type": "31"
                    },
                    "1712238835": {
                        "en": "G'ozg'on",
                        "uz": "G'ozg'on",
                        "ru": "Гозгон",
                        "type": "31"
                    },
                    "1712238840": {
                        "en": "Qizilcha",
                        "uz": "Qizilcha",
                        "ru": "Кызылча",
                        "type": "31"
                    },
                    "1712238860": {
                        "en": "Nurota",
                        "uz": "Nurota",
                        "ru": "Нурата",
                        "type": "31"
                    },
                    "1712238877": {
                        "en": "Sentob",
                        "uz": "Sentob",
                        "ru": "Сентяб",
                        "type": "31"
                    },
                    "1712238890": {
                        "en": "Chuya",
                        "uz": "Chuya",
                        "ru": "Чуя",
                        "type": "31"
                    }
                }
            },
            "1712244": {
                "en": "Tomdi district",
                "uz": "Tomdi tumani",
                "ru": "Тамдынский район",
                "type": "20",
                "settlements": {
                    "1712244551": {
                        "en": "Tomdibuloq",
                        "uz": "Tomdibuloq",
                        "ru": "Томдибулок",
                        "type": "24"
                    },
                    "1712244808": {
                        "en": "Oktau",
                        "uz": "Oktau",
                        "ru": "Актау",
                        "type": "31"
                    },
                    "1712244812": {
                        "en": "Ayaqquduq",
                        "uz": "Ayaqquduq",
                        "ru": "Аякудук",
                        "type": "31"
                    },
                    "1712244830": {
                        "en": "Suketti",
                        "uz": "Suketti",
                        "ru": "Сукитти",
                        "type": "31"
                    },
                    "1712244835": {
                        "en": "Keregetau",
                        "uz": "Keregetau",
                        "ru": "Керегетау",
                        "type": "31"
                    },
                    "1712244837": {
                        "en": "Keriz",
                        "uz": "Keriz",
                        "ru": "Кериз",
                        "type": "31"
                    },
                    "1712244840": {
                        "en": "Tomdibuloq",
                        "uz": "Tomdibuloq",
                        "ru": "Тамдыбулак",
                        "type": "31"
                    },
                    "1712244850": {
                        "en": "Shiyeli",
                        "uz": "Shiyeli",
                        "ru": "Шиели",
                        "type": "31"
                    }
                }
            },
            "1712248": {
                "en": "Uchquduq district",
                "uz": "Uchquduq tumani",
                "ru": "Учкудукский район",
                "type": "20",
                "settlements": {
                    "1712248501": {
                        "en": "Uchquduq",
                        "uz": "Uchquduq",
                        "ru": "Учкудук",
                        "type": "23"
                    },
                    "1712248555": {
                        "en": "Shalxar",
                        "uz": "Shalxar",
                        "ru": "Шалкар",
                        "type": "24"
                    },
                    "1712248805": {
                        "en": "Ko'kayaz",
                        "uz": "Ko'kayaz",
                        "ru": "Кукаяз",
                        "type": "31"
                    },
                    "1712248808": {
                        "en": "Altintov",
                        "uz": "Altintov",
                        "ru": "Алтинтов",
                        "type": "31"
                    },
                    "1712248813": {
                        "en": "Bozdun",
                        "uz": "Bozdun",
                        "ru": "Буздун",
                        "type": "31"
                    },
                    "1712248826": {
                        "en": "Mingbuloq",
                        "uz": "Mingbuloq",
                        "ru": "Мингбулак",
                        "type": "31"
                    },
                    "1712248844": {
                        "en": "Uzunquduq",
                        "uz": "Uzunquduq",
                        "ru": "Узункудук",
                        "type": "31"
                    }
                }
            },
            "1712251": {
                "en": "Xatirchi district",
                "uz": "Xatirchi tumani",
                "ru": "Хатырчинский район",
                "type": "20",
                "settlements": {
                    "1712251501": {
                        "en": "Yangirabod",
                        "uz": "Yangirabod",
                        "ru": "Янгиpабод",
                        "type": "23"
                    },
                    "1712251558": {
                        "en": "Langar",
                        "uz": "Langar",
                        "ru": "Лянгар",
                        "type": "24"
                    },
                    "1712251562": {
                        "en": "Jaloyir",
                        "uz": "Jaloyir",
                        "ru": "Джалойир",
                        "type": "24"
                    },
                    "1712251564": {
                        "en": "Qo'shchinor",
                        "uz": "Qo'shchinor",
                        "ru": "Кушчинор",
                        "type": "24"
                    },
                    "1712251566": {
                        "en": "Polvontepa",
                        "uz": "Polvontepa",
                        "ru": "Полвонтепа",
                        "type": "24"
                    },
                    "1712251568": {
                        "en": "Qo'rg'on",
                        "uz": "Qo'rg'on",
                        "ru": "Кургон",
                        "type": "24"
                    },
                    "1712251570": {
                        "en": "Tasmachi",
                        "uz": "Tasmachi",
                        "ru": "Тасмачи",
                        "type": "24"
                    },
                    "1712251573": {
                        "en": "Bog'ishamol",
                        "uz": "Bog'ishamol",
                        "ru": "Богишамол",
                        "type": "24"
                    },
                    "1712251575": {
                        "en": "G'alabek",
                        "uz": "G'alabek",
                        "ru": "Галабек",
                        "type": "24"
                    },
                    "1712251577": {
                        "en": "Paxtakor",
                        "uz": "Paxtakor",
                        "ru": "Пахтакор",
                        "type": "24"
                    },
                    "1712251579": {
                        "en": "Turkman",
                        "uz": "Turkman",
                        "ru": "Туркман",
                        "type": "24"
                    },
                    "1712251581": {
                        "en": "Yangi qurilish",
                        "uz": "Yangi qurilish",
                        "ru": "Янги курилиш",
                        "type": "24"
                    },
                    "1712251807": {
                        "en": "Sahovat",
                        "uz": "Sahovat",
                        "ru": "Саховат",
                        "type": "31"
                    },
                    "1712251812": {
                        "en": "Olchinobod",
                        "uz": "Olchinobod",
                        "ru": "Алчинабад",
                        "type": "31"
                    },
                    "1712251819": {
                        "en": "O'zbekiston",
                        "uz": "O'zbekiston",
                        "ru": "Узбекистон",
                        "type": "31"
                    },
                    "1712251824": {
                        "en": "Bog'chakalon",
                        "uz": "Bog'chakalon",
                        "ru": "Бахчакалан",
                        "type": "31"
                    },
                    "1712251835": {
                        "en": "Xonaqa",
                        "uz": "Xonaqa",
                        "ru": "Ханака",
                        "type": "31"
                    },
                    "1712251840": {
                        "en": "Qoracha",
                        "uz": "Qoracha",
                        "ru": "Каpача",
                        "type": "31"
                    },
                    "1712251851": {
                        "en": "Pulkan shoir",
                        "uz": "Pulkan shoir",
                        "ru": "им. Пулкан шаира",
                        "type": "31"
                    },
                    "1712251865": {
                        "en": "Yangirabod",
                        "uz": "Yangirabod",
                        "ru": "Янгирабод",
                        "type": "31"
                    },
                    "1712251878": {
                        "en": "Ko'ksaroy",
                        "uz": "Ko'ksaroy",
                        "ru": "Куксарой",
                        "type": "31"
                    }
                }
            },
            "1712401": {
                "en": "Navoiy",
                "uz": "Navoiy",
                "ru": "Навои",
                "type": "21",
                "settlements": {
                    "1712401564": {
                        "en": "Tinchlik",
                        "uz": "Tinchlik",
                        "ru": "Тинчлик",
                        "type": "24"
                    }
                }
            },
            "1712408": {
                "en": "Zarafshon",
                "uz": "Zarafshon",
                "ru": "Заpафшан",
                "type": "21",
                "settlements": {
                    "1712408556": {
                        "en": "Muruntau",
                        "uz": "Muruntau",
                        "ru": "Мурунтау",
                        "type": "24"
                    }
                }
            },
            "1712412": {
                "en": "G'ozg'on",
                "uz": "G'ozg'on",
                "ru": "Газган",
                "type": "21"
            }
        }
    },
    "1714": {
        "en": "Namangan region",
        "uz": "Namangan viloyati",
        "ru": "Наманганская область",
        "districts": {
            "1714204": {
                "en": "Mingbuloq district",
                "uz": "Mingbuloq tumani",
                "ru": "Мингбулакский pайон",
                "type": "20",
                "settlements": {
                    "1714204551": {
                        "en": "Jo'masho'y",
                        "uz": "Jo'masho'y",
                        "ru": "Джумашуй",
                        "type": "24"
                    },
                    "1714204552": {
                        "en": "Go'rtepa",
                        "uz": "Go'rtepa",
                        "ru": "Гуртепа",
                        "type": "24"
                    },
                    "1714204553": {
                        "en": "Dovduq",
                        "uz": "Dovduq",
                        "ru": "Довдук",
                        "type": "24"
                    },
                    "1714204555": {
                        "en": "O'zgarish",
                        "uz": "O'zgarish",
                        "ru": "Узгариш",
                        "type": "24"
                    },
                    "1714204556": {
                        "en": "Mehnatobod",
                        "uz": "Mehnatobod",
                        "ru": "Мехнатабад",
                        "type": "24"
                    },
                    "1714204557": {
                        "en": "Madyarovul",
                        "uz": "Madyarovul",
                        "ru": "Мадяровул",
                        "type": "24"
                    },
                    "1714204559": {
                        "en": "Kugolikul",
                        "uz": "Kugolikul",
                        "ru": "Куголикул",
                        "type": "24"
                    },
                    "1714204805": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустан",
                        "type": "31"
                    },
                    "1714204810": {
                        "en": "Gulbog'",
                        "uz": "Gulbog'",
                        "ru": "Гульбаг",
                        "type": "31"
                    },
                    "1714204820": {
                        "en": "Go'rtepa",
                        "uz": "Go'rtepa",
                        "ru": "Гуртепа",
                        "type": "31"
                    },
                    "1714204822": {
                        "en": "Dovduq",
                        "uz": "Dovduq",
                        "ru": "Довдук",
                        "type": "31"
                    },
                    "1714204828": {
                        "en": "Oltinko'l",
                        "uz": "Oltinko'l",
                        "ru": "Алтынкуль",
                        "type": "31"
                    },
                    "1714204830": {
                        "en": "Mehnatobod",
                        "uz": "Mehnatobod",
                        "ru": "Мехнатабад",
                        "type": "31"
                    },
                    "1714204840": {
                        "en": "Momoxon",
                        "uz": "Momoxon",
                        "ru": "Момохан",
                        "type": "31"
                    }
                }
            },
            "1714207": {
                "en": "Kosonsoy district",
                "uz": "Kosonsoy tumani",
                "ru": "Касансайский район",
                "type": "20",
                "settlements": {
                    "1714207501": {
                        "en": "Kosonsoy",
                        "uz": "Kosonsoy",
                        "ru": "Касансай",
                        "type": "23"
                    },
                    "1714207552": {
                        "en": "Bog'ishamol",
                        "uz": "Bog'ishamol",
                        "ru": "Богишамол",
                        "type": "24"
                    },
                    "1714207554": {
                        "en": "Istiqlol",
                        "uz": "Istiqlol",
                        "ru": "Истиклол",
                        "type": "24"
                    },
                    "1714207556": {
                        "en": "Koson",
                        "uz": "Koson",
                        "ru": "Косон",
                        "type": "24"
                    },
                    "1714207558": {
                        "en": "Ququmboy",
                        "uz": "Ququmboy",
                        "ru": "Кукумбой",
                        "type": "24"
                    },
                    "1714207561": {
                        "en": "Ozod",
                        "uz": "Ozod",
                        "ru": "Озод",
                        "type": "24"
                    },
                    "1714207562": {
                        "en": "Tergachi",
                        "uz": "Tergachi",
                        "ru": "Тергачи",
                        "type": "24"
                    },
                    "1714207564": {
                        "en": "Chindavul",
                        "uz": "Chindavul",
                        "ru": "Чиндовул",
                        "type": "24"
                    },
                    "1714207566": {
                        "en": "Chust ko'cha",
                        "uz": "Chust ko'cha",
                        "ru": "Чуст куча",
                        "type": "24"
                    },
                    "1714207568": {
                        "en": "Yangiyo'l",
                        "uz": "Yangiyo'l",
                        "ru": "Янгийул",
                        "type": "24"
                    },
                    "1714207569": {
                        "en": "Yangi shahar",
                        "uz": "Yangi shahar",
                        "ru": "Янгишахар",
                        "type": "24"
                    },
                    "1714207806": {
                        "en": "Qorasuv",
                        "uz": "Qorasuv",
                        "ru": "Карасув",
                        "type": "31"
                    },
                    "1714207808": {
                        "en": "Shirin",
                        "uz": "Shirin",
                        "ru": "Шиpин",
                        "type": "31"
                    },
                    "1714207810": {
                        "en": "Ququmboy",
                        "uz": "Ququmboy",
                        "ru": "Кукумбай",
                        "type": "31"
                    },
                    "1714207820": {
                        "en": "Koson",
                        "uz": "Koson",
                        "ru": "Касан",
                        "type": "31"
                    },
                    "1714207827": {
                        "en": "Yoshlik",
                        "uz": "Yoshlik",
                        "ru": "Ешлик",
                        "type": "31"
                    },
                    "1714207830": {
                        "en": "Tergachi",
                        "uz": "Tergachi",
                        "ru": "Тергачи",
                        "type": "31"
                    },
                    "1714207837": {
                        "en": "Chindovul",
                        "uz": "Chindovul",
                        "ru": "Чиндавал",
                        "type": "31"
                    }
                }
            },
            "1714212": {
                "en": "Namangan district",
                "uz": "Namangan tumani",
                "ru": "Наманганский район",
                "type": "20",
                "settlements": {
                    "1714212551": {
                        "en": "Toshbuloq",
                        "uz": "Toshbuloq",
                        "ru": "Ташбулак",
                        "type": "24"
                    },
                    "1714212553": {
                        "en": "Navbahor",
                        "uz": "Navbahor",
                        "ru": "Навбахор",
                        "type": "24"
                    },
                    "1714212561": {
                        "en": "Qumqo'rg'on",
                        "uz": "Qumqo'rg'on",
                        "ru": "Кумкургон",
                        "type": "24"
                    },
                    "1714212563": {
                        "en": "Sho'rqo'rg'on",
                        "uz": "Sho'rqo'rg'on",
                        "ru": "Шуркургон",
                        "type": "24"
                    },
                    "1714212565": {
                        "en": "Mirishkor",
                        "uz": "Mirishkor",
                        "ru": "Миришкор",
                        "type": "24"
                    },
                    "1714212811": {
                        "en": "Nurafshon",
                        "uz": "Nurafshon",
                        "ru": "Нурафшон",
                        "type": "31"
                    },
                    "1714212822": {
                        "en": "Istiqlol",
                        "uz": "Istiqlol",
                        "ru": "Истиклол",
                        "type": "31"
                    },
                    "1714212833": {
                        "en": "Navbahor",
                        "uz": "Navbahor",
                        "ru": "Навбахор",
                        "type": "31"
                    },
                    "1714212855": {
                        "en": "Qumqo'rg'on",
                        "uz": "Qumqo'rg'on",
                        "ru": "Кумкурган",
                        "type": "31"
                    },
                    "1714212859": {
                        "en": "Mirishkor",
                        "uz": "Mirishkor",
                        "ru": "Миришкор",
                        "type": "31"
                    },
                    "1714212866": {
                        "en": "Tepaqo'rg'on",
                        "uz": "Tepaqo'rg'on",
                        "ru": "Тепакурган",
                        "type": "31"
                    },
                    "1714212877": {
                        "en": "O'zbekiston",
                        "uz": "O'zbekiston",
                        "ru": "Узбекистан",
                        "type": "31"
                    },
                    "1714212880": {
                        "en": "Xonabod",
                        "uz": "Xonabod",
                        "ru": "Ханабад",
                        "type": "31"
                    },
                    "1714212885": {
                        "en": "Bog'ishamol",
                        "uz": "Bog'ishamol",
                        "ru": "Багишамал",
                        "type": "31"
                    },
                    "1714212890": {
                        "en": "Sho'rqishloq",
                        "uz": "Sho'rqishloq",
                        "ru": "Шуркишлак",
                        "type": "31"
                    }
                }
            },
            "1714216": {
                "en": "Norin district",
                "uz": "Norin tumani",
                "ru": "Нарынский район",
                "type": "20",
                "settlements": {
                    "1714216501": {
                        "en": "Xaqqulobod",
                        "uz": "Xaqqulobod",
                        "ru": "Хаккулабад",
                        "type": "23"
                    },
                    "1714216552": {
                        "en": "Qorateri",
                        "uz": "Qorateri",
                        "ru": "Коратери",
                        "type": "24"
                    },
                    "1714216554": {
                        "en": "Marg'uzar",
                        "uz": "Marg'uzar",
                        "ru": "Маргузар",
                        "type": "24"
                    },
                    "1714216556": {
                        "en": "Norinkapa",
                        "uz": "Norinkapa",
                        "ru": "Норинкапа",
                        "type": "24"
                    },
                    "1714216558": {
                        "en": "Pastki cho'ja",
                        "uz": "Pastki cho'ja",
                        "ru": "Пастки Чужа",
                        "type": "24"
                    },
                    "1714216561": {
                        "en": "Uchtepa",
                        "uz": "Uchtepa",
                        "ru": "Учтепа",
                        "type": "24"
                    },
                    "1714216562": {
                        "en": "Xo'jaobod",
                        "uz": "Xo'jaobod",
                        "ru": "Хужаабад",
                        "type": "24"
                    },
                    "1714216564": {
                        "en": "Chambil",
                        "uz": "Chambil",
                        "ru": "Чамбил",
                        "type": "24"
                    },
                    "1714216566": {
                        "en": "Sho'ra",
                        "uz": "Sho'ra",
                        "ru": "Шуро",
                        "type": "24"
                    },
                    "1714216815": {
                        "en": "Xo'jaobod",
                        "uz": "Xo'jaobod",
                        "ru": "Хужаабад",
                        "type": "31"
                    },
                    "1714216820": {
                        "en": "Marg'izor",
                        "uz": "Marg'izor",
                        "ru": "Маргузаp",
                        "type": "31"
                    },
                    "1714216826": {
                        "en": "Norinkapa",
                        "uz": "Norinkapa",
                        "ru": "Нарынкапа",
                        "type": "31"
                    },
                    "1714216837": {
                        "en": "Paxtaqishloq",
                        "uz": "Paxtaqishloq",
                        "ru": "Пахтакишлак",
                        "type": "31"
                    },
                    "1714216848": {
                        "en": "To'da",
                        "uz": "To'da",
                        "ru": "Туда",
                        "type": "31"
                    },
                    "1714216856": {
                        "en": "Qo'rg'ontepa",
                        "uz": "Qo'rg'ontepa",
                        "ru": "Кургонтепа",
                        "type": "31"
                    },
                    "1714216859": {
                        "en": "Uchtepa",
                        "uz": "Uchtepa",
                        "ru": "Учтепа",
                        "type": "31"
                    },
                    "1714216862": {
                        "en": "Toshloq",
                        "uz": "Toshloq",
                        "ru": "Ташлак",
                        "type": "31"
                    }
                }
            },
            "1714219": {
                "en": "Pop district",
                "uz": "Pop tumani",
                "ru": "Папский район",
                "type": "20",
                "settlements": {
                    "1714219501": {
                        "en": "Pop",
                        "uz": "Pop",
                        "ru": "Пап",
                        "type": "23"
                    },
                    "1714219554": {
                        "en": "Oltinkon",
                        "uz": "Oltinkon",
                        "ru": "Алтынкан",
                        "type": "24"
                    },
                    "1714219555": {
                        "en": "Navbahor",
                        "uz": "Navbahor",
                        "ru": "Навбахор",
                        "type": "24"
                    },
                    "1714219557": {
                        "en": "Uyg'ursoy",
                        "uz": "Uyg'ursoy",
                        "ru": "Уйгурсай",
                        "type": "24"
                    },
                    "1714219560": {
                        "en": "Xalqobod",
                        "uz": "Xalqobod",
                        "ru": "Халкабад",
                        "type": "24"
                    },
                    "1714219565": {
                        "en": "Chorkesar",
                        "uz": "Chorkesar",
                        "ru": "Чаркесар",
                        "type": "24"
                    },
                    "1714219567": {
                        "en": "Uyg'ur",
                        "uz": "Uyg'ur",
                        "ru": "Уйгур",
                        "type": "24"
                    },
                    "1714219569": {
                        "en": "Yangi Xo'jaobod",
                        "uz": "Yangi Xo'jaobod",
                        "ru": "Янги Хужаабад",
                        "type": "24"
                    },
                    "1714219571": {
                        "en": "Sang",
                        "uz": "Sang",
                        "ru": "Санг",
                        "type": "24"
                    },
                    "1714219573": {
                        "en": "G'urumsaroy",
                        "uz": "G'urumsaroy",
                        "ru": "Гурумсарай",
                        "type": "24"
                    },
                    "1714219575": {
                        "en": "Qandig'on",
                        "uz": "Qandig'on",
                        "ru": "Кандигон",
                        "type": "24"
                    },
                    "1714219576": {
                        "en": "Pungon",
                        "uz": "Pungon",
                        "ru": "Пунгон",
                        "type": "24"
                    },
                    "1714219578": {
                        "en": "Chodak",
                        "uz": "Chodak",
                        "ru": "Чодак",
                        "type": "24"
                    },
                    "1714219581": {
                        "en": "Madaniyat",
                        "uz": "Madaniyat",
                        "ru": "Маданият",
                        "type": "24"
                    },
                    "1714219583": {
                        "en": "Qurg'onobod",
                        "uz": "Qurg'onobod",
                        "ru": "Кургонобод",
                        "type": "24"
                    },
                    "1714219585": {
                        "en": "Chorkesar-2",
                        "uz": "Chorkesar-2",
                        "ru": "Чаркесар-2",
                        "type": "24"
                    },
                    "1714219809": {
                        "en": "Madaniyat",
                        "uz": "Madaniyat",
                        "ru": "Маданият",
                        "type": "31"
                    },
                    "1714219811": {
                        "en": "Sirdaryo",
                        "uz": "Sirdaryo",
                        "ru": "Сирдарё",
                        "type": "31"
                    },
                    "1714219822": {
                        "en": "Nayman",
                        "uz": "Nayman",
                        "ru": "Найман",
                        "type": "31"
                    },
                    "1714219833": {
                        "en": "Pop",
                        "uz": "Pop",
                        "ru": "Пап",
                        "type": "31"
                    },
                    "1714219834": {
                        "en": "Paxtaobod",
                        "uz": "Paxtaobod",
                        "ru": "Пахтаабад",
                        "type": "31"
                    },
                    "1714219844": {
                        "en": "Uyg'ur",
                        "uz": "Uyg'ur",
                        "ru": "Уйгур",
                        "type": "31"
                    },
                    "1714219855": {
                        "en": "G'urumsaroy",
                        "uz": "G'urumsaroy",
                        "ru": "Гурумсарой",
                        "type": "31"
                    },
                    "1714219866": {
                        "en": "Chodak",
                        "uz": "Chodak",
                        "ru": "Чадак",
                        "type": "31"
                    },
                    "1714219877": {
                        "en": "Yangi hayot",
                        "uz": "Yangi hayot",
                        "ru": "Янгихаят",
                        "type": "31"
                    },
                    "1714219885": {
                        "en": "Pungon",
                        "uz": "Pungon",
                        "ru": "Пунган",
                        "type": "31"
                    }
                }
            },
            "1714224": {
                "en": "To'raqo'rg'on district",
                "uz": "To'raqo'rg'on tumani",
                "ru": "Туракурганский район",
                "type": "20",
                "settlements": {
                    "1714224501": {
                        "en": "To'raqo'rg'on",
                        "uz": "To'raqo'rg'on",
                        "ru": "Туракурган",
                        "type": "23"
                    },
                    "1714224554": {
                        "en": "Oqtosh",
                        "uz": "Oqtosh",
                        "ru": "Акташ",
                        "type": "24"
                    },
                    "1714224556": {
                        "en": "Yettikon",
                        "uz": "Yettikon",
                        "ru": "Еттикан",
                        "type": "24"
                    },
                    "1714224558": {
                        "en": "Yandama",
                        "uz": "Yandama",
                        "ru": "Яндама",
                        "type": "24"
                    },
                    "1714224561": {
                        "en": "Axsi",
                        "uz": "Axsi",
                        "ru": "Ахси",
                        "type": "24"
                    },
                    "1714224563": {
                        "en": "Kalvak",
                        "uz": "Kalvak",
                        "ru": "Колвак",
                        "type": "24"
                    },
                    "1714224565": {
                        "en": "Mozorko'xna",
                        "uz": "Mozorko'xna",
                        "ru": "Мизаркухна",
                        "type": "24"
                    },
                    "1714224567": {
                        "en": "Buramatut",
                        "uz": "Buramatut",
                        "ru": "Бураматут",
                        "type": "24"
                    },
                    "1714224569": {
                        "en": "Shaxand",
                        "uz": "Shaxand",
                        "ru": "Шахант",
                        "type": "24"
                    },
                    "1714224571": {
                        "en": "Olchin",
                        "uz": "Olchin",
                        "ru": "Олчин",
                        "type": "24"
                    },
                    "1714224575": {
                        "en": "Saroy",
                        "uz": "Saroy",
                        "ru": "Сарой",
                        "type": "24"
                    },
                    "1714224577": {
                        "en": "Katagon",
                        "uz": "Katagon",
                        "ru": "Катагон",
                        "type": "24"
                    },
                    "1714224579": {
                        "en": "Kichikqurama",
                        "uz": "Kichikqurama",
                        "ru": "Кичиккурама",
                        "type": "24"
                    },
                    "1714224581": {
                        "en": "Namdon",
                        "uz": "Namdon",
                        "ru": "Намдон",
                        "type": "24"
                    },
                    "1714224809": {
                        "en": "Axsi",
                        "uz": "Axsi",
                        "ru": "Ахси",
                        "type": "31"
                    },
                    "1714224812": {
                        "en": "Buramatut",
                        "uz": "Buramatut",
                        "ru": "Бураматут",
                        "type": "31"
                    },
                    "1714224824": {
                        "en": "Katagansaroy",
                        "uz": "Katagansaroy",
                        "ru": "Катагансаpай",
                        "type": "31"
                    },
                    "1714224835": {
                        "en": "Sayram",
                        "uz": "Sayram",
                        "ru": "Сайрам",
                        "type": "31"
                    },
                    "1714224846": {
                        "en": "Yandama",
                        "uz": "Yandama",
                        "ru": "Яндама",
                        "type": "31"
                    },
                    "1714224850": {
                        "en": "Xo'jand",
                        "uz": "Xo'jand",
                        "ru": "Ходжанд",
                        "type": "31"
                    },
                    "1714224857": {
                        "en": "Shaxand",
                        "uz": "Shaxand",
                        "ru": "Шаханд",
                        "type": "31"
                    },
                    "1714224864": {
                        "en": "Yortepa",
                        "uz": "Yortepa",
                        "ru": "Яртепа",
                        "type": "31"
                    }
                }
            },
            "1714229": {
                "en": "Uychi district",
                "uz": "Uychi tumani",
                "ru": "Уйчинский район",
                "type": "20",
                "settlements": {
                    "1714229551": {
                        "en": "Uychi",
                        "uz": "Uychi",
                        "ru": "Уйчи",
                        "type": "24"
                    },
                    "1714229555": {
                        "en": "O'nxayat",
                        "uz": "O'nxayat",
                        "ru": "Унхаят",
                        "type": "24"
                    },
                    "1714229557": {
                        "en": "Birlashgan",
                        "uz": "Birlashgan",
                        "ru": "Бирлашган",
                        "type": "24"
                    },
                    "1714229559": {
                        "en": "Fayziobod",
                        "uz": "Fayziobod",
                        "ru": "Файзиобод",
                        "type": "24"
                    },
                    "1714229561": {
                        "en": "Churtuk",
                        "uz": "Churtuk",
                        "ru": "Чуртук",
                        "type": "24"
                    },
                    "1714229563": {
                        "en": "Axsi",
                        "uz": "Axsi",
                        "ru": "Ахси",
                        "type": "24"
                    },
                    "1714229565": {
                        "en": "Jiydakapa",
                        "uz": "Jiydakapa",
                        "ru": "Джийдакапа",
                        "type": "24"
                    },
                    "1714229567": {
                        "en": "Kichik toshloq",
                        "uz": "Kichik toshloq",
                        "ru": "Кичик тошлок",
                        "type": "24"
                    },
                    "1714229569": {
                        "en": "Mashad",
                        "uz": "Mashad",
                        "ru": "Машад",
                        "type": "24"
                    },
                    "1714229573": {
                        "en": "Soku",
                        "uz": "Soku",
                        "ru": "Соку",
                        "type": "24"
                    },
                    "1714229575": {
                        "en": "Boyog'on",
                        "uz": "Boyog'on",
                        "ru": "Буеган",
                        "type": "24"
                    },
                    "1714229577": {
                        "en": "G'ayrat",
                        "uz": "G'ayrat",
                        "ru": "Гайрат",
                        "type": "24"
                    },
                    "1714229579": {
                        "en": "Ziyokor",
                        "uz": "Ziyokor",
                        "ru": "Зиекор",
                        "type": "24"
                    },
                    "1714229808": {
                        "en": "G'ayrat",
                        "uz": "G'ayrat",
                        "ru": "Гайрат",
                        "type": "31"
                    },
                    "1714229811": {
                        "en": "Jiydakapa",
                        "uz": "Jiydakapa",
                        "ru": "Джидакапа",
                        "type": "31"
                    },
                    "1714229815": {
                        "en": "Birlashgan",
                        "uz": "Birlashgan",
                        "ru": "Бирлашган",
                        "type": "31"
                    },
                    "1714229822": {
                        "en": "Teshiktosh",
                        "uz": "Teshiktosh",
                        "ru": "Тешиктош",
                        "type": "31"
                    },
                    "1714229833": {
                        "en": "Uychi",
                        "uz": "Uychi",
                        "ru": "Уйчи",
                        "type": "31"
                    },
                    "1714229844": {
                        "en": "Mashad",
                        "uz": "Mashad",
                        "ru": "Машад",
                        "type": "31"
                    },
                    "1714229855": {
                        "en": "Yorkatay",
                        "uz": "Yorkatay",
                        "ru": "Яркатай",
                        "type": "31"
                    },
                    "1714229866": {
                        "en": "Yorqo'rg'on",
                        "uz": "Yorqo'rg'on",
                        "ru": "Яркурган",
                        "type": "31"
                    }
                }
            },
            "1714234": {
                "en": "Uchqo'rg'on district",
                "uz": "Uchqo'rg'on tumani",
                "ru": "Учкурганский район",
                "type": "20",
                "settlements": {
                    "1714234501": {
                        "en": "Uchqo'rg'on",
                        "uz": "Uchqo'rg'on",
                        "ru": "Учкуpган",
                        "type": "23"
                    },
                    "1714234552": {
                        "en": "Qayqi",
                        "uz": "Qayqi",
                        "ru": "Кайки",
                        "type": "24"
                    },
                    "1714234554": {
                        "en": "Qo'g'ay",
                        "uz": "Qo'g'ay",
                        "ru": "Кугай",
                        "type": "24"
                    },
                    "1714234556": {
                        "en": "Uchyog'och",
                        "uz": "Uchyog'och",
                        "ru": "Учагач",
                        "type": "24"
                    },
                    "1714234558": {
                        "en": "Yangiobod",
                        "uz": "Yangiobod",
                        "ru": "Янгиабад",
                        "type": "24"
                    },
                    "1714234811": {
                        "en": "Qayqi",
                        "uz": "Qayqi",
                        "ru": "Кайки",
                        "type": "31"
                    },
                    "1714234822": {
                        "en": "Baxt",
                        "uz": "Baxt",
                        "ru": "Бахт",
                        "type": "31"
                    },
                    "1714234833": {
                        "en": "Qo'g'ay-o'lmas",
                        "uz": "Qo'g'ay-o'lmas",
                        "ru": "Кугайульмас",
                        "type": "31"
                    },
                    "1714234844": {
                        "en": "Qo'g'ay",
                        "uz": "Qo'g'ay",
                        "ru": "Кугай",
                        "type": "31"
                    },
                    "1714234851": {
                        "en": "O'zbekiston",
                        "uz": "O'zbekiston",
                        "ru": "Узбекистан",
                        "type": "31"
                    },
                    "1714234861": {
                        "en": "Yangiobod",
                        "uz": "Yangiobod",
                        "ru": "Янгиабад",
                        "type": "31"
                    },
                    "1714234863": {
                        "en": "Yangi yor",
                        "uz": "Yangi yor",
                        "ru": "Янгиер",
                        "type": "31"
                    },
                    "1714234870": {
                        "en": "Yashiq",
                        "uz": "Yashiq",
                        "ru": "Яшик",
                        "type": "31"
                    }
                }
            },
            "1714236": {
                "en": "Chortoq district",
                "uz": "Chortoq tumani",
                "ru": "Чартакский район",
                "type": "20",
                "settlements": {
                    "1714236501": {
                        "en": "Chortoq",
                        "uz": "Chortoq",
                        "ru": "Чаpтак",
                        "type": "23"
                    },
                    "1714236552": {
                        "en": "Muchum",
                        "uz": "Muchum",
                        "ru": "Мучум",
                        "type": "24"
                    },
                    "1714236554": {
                        "en": "Koroskon",
                        "uz": "Koroskon",
                        "ru": "Караскан",
                        "type": "24"
                    },
                    "1714236556": {
                        "en": "Ko'shan",
                        "uz": "Ko'shan",
                        "ru": "Кушан",
                        "type": "24"
                    },
                    "1714236558": {
                        "en": "Ayqiron",
                        "uz": "Ayqiron",
                        "ru": "Айкирон",
                        "type": "24"
                    },
                    "1714236560": {
                        "en": "Alixon",
                        "uz": "Alixon",
                        "ru": "Алихон",
                        "type": "24"
                    },
                    "1714236562": {
                        "en": "Pastki Peshqo'rg'on",
                        "uz": "Pastki Peshqo'rg'on",
                        "ru": "Пастки Пешкургон",
                        "type": "24"
                    },
                    "1714236564": {
                        "en": "Yuqori Peshqo'rg'on",
                        "uz": "Yuqori Peshqo'rg'on",
                        "ru": "Юкори Пешкургон",
                        "type": "24"
                    },
                    "1714236566": {
                        "en": "Ora ariq",
                        "uz": "Ora ariq",
                        "ru": "Ораарык",
                        "type": "24"
                    },
                    "1714236568": {
                        "en": "Baliqli ko'l",
                        "uz": "Baliqli ko'l",
                        "ru": "Баликкул",
                        "type": "24"
                    },
                    "1714236572": {
                        "en": "Xazratishox",
                        "uz": "Xazratishox",
                        "ru": "Хазратишох",
                        "type": "24"
                    },
                    "1714236803": {
                        "en": "Ayqiron",
                        "uz": "Ayqiron",
                        "ru": "Айкиран",
                        "type": "31"
                    },
                    "1714236805": {
                        "en": "Alixon",
                        "uz": "Alixon",
                        "ru": "Алихан",
                        "type": "31"
                    },
                    "1714236807": {
                        "en": "Bog'iston",
                        "uz": "Bog'iston",
                        "ru": "Багистан",
                        "type": "31"
                    },
                    "1714236809": {
                        "en": "Tinchlik",
                        "uz": "Tinchlik",
                        "ru": "Тинчлик",
                        "type": "31"
                    },
                    "1714236815": {
                        "en": "Karaskan",
                        "uz": "Karaskan",
                        "ru": "Караскан",
                        "type": "31"
                    },
                    "1714236820": {
                        "en": "Muchum",
                        "uz": "Muchum",
                        "ru": "Мучум",
                        "type": "31"
                    },
                    "1714236826": {
                        "en": "Peshqo'rg'on",
                        "uz": "Peshqo'rg'on",
                        "ru": "Пешкурган",
                        "type": "31"
                    },
                    "1714236853": {
                        "en": "Xazratishox",
                        "uz": "Xazratishox",
                        "ru": "Хазратишо",
                        "type": "31"
                    },
                    "1714236856": {
                        "en": "Saroy",
                        "uz": "Saroy",
                        "ru": "Сарай",
                        "type": "31"
                    }
                }
            },
            "1714237": {
                "en": "Chust district",
                "uz": "Chust tumani",
                "ru": "Чустский район",
                "type": "20",
                "settlements": {
                    "1714237501": {
                        "en": "Chust",
                        "uz": "Chust",
                        "ru": "Чуст",
                        "type": "23"
                    },
                    "1714237552": {
                        "en": "Olmos",
                        "uz": "Olmos",
                        "ru": "Олмос",
                        "type": "24"
                    },
                    "1714237554": {
                        "en": "Axcha",
                        "uz": "Axcha",
                        "ru": "Ахча",
                        "type": "24"
                    },
                    "1714237556": {
                        "en": "Sarimsoqtepa",
                        "uz": "Sarimsoqtepa",
                        "ru": "Саримсоктепа",
                        "type": "24"
                    },
                    "1714237558": {
                        "en": "Varzik",
                        "uz": "Varzik",
                        "ru": "Варзик",
                        "type": "24"
                    },
                    "1714237560": {
                        "en": "Qoraqo'rg'on",
                        "uz": "Qoraqo'rg'on",
                        "ru": "Коракургон",
                        "type": "24"
                    },
                    "1714237562": {
                        "en": "G'ova",
                        "uz": "G'ova",
                        "ru": "Гова",
                        "type": "24"
                    },
                    "1714237564": {
                        "en": "Karkidon",
                        "uz": "Karkidon",
                        "ru": "Каркидон",
                        "type": "24"
                    },
                    "1714237566": {
                        "en": "Karnon",
                        "uz": "Karnon",
                        "ru": "Карнон",
                        "type": "24"
                    },
                    "1714237568": {
                        "en": "Yorqishloq",
                        "uz": "Yorqishloq",
                        "ru": "Еркишлок",
                        "type": "24"
                    },
                    "1714237570": {
                        "en": "Shoyon",
                        "uz": "Shoyon",
                        "ru": "Шаен",
                        "type": "24"
                    },
                    "1714237572": {
                        "en": "Xisorak",
                        "uz": "Xisorak",
                        "ru": "Хисорак",
                        "type": "24"
                    },
                    "1714237803": {
                        "en": "Og'asaray",
                        "uz": "Og'asaray",
                        "ru": "Огасарай",
                        "type": "31"
                    },
                    "1714237805": {
                        "en": "Olmos",
                        "uz": "Olmos",
                        "ru": "Алмас",
                        "type": "31"
                    },
                    "1714237807": {
                        "en": "Axcha",
                        "uz": "Axcha",
                        "ru": "Ахча",
                        "type": "31"
                    },
                    "1714237812": {
                        "en": "Varzik",
                        "uz": "Varzik",
                        "ru": "Варзик",
                        "type": "31"
                    },
                    "1714237823": {
                        "en": "G'ova",
                        "uz": "G'ova",
                        "ru": "Гова",
                        "type": "31"
                    },
                    "1714237834": {
                        "en": "Karkidon",
                        "uz": "Karkidon",
                        "ru": "Каркидон",
                        "type": "31"
                    },
                    "1714237848": {
                        "en": "Xisorak",
                        "uz": "Xisorak",
                        "ru": "Хисарак",
                        "type": "31"
                    },
                    "1714237859": {
                        "en": "Baymoq",
                        "uz": "Baymoq",
                        "ru": "Баймак",
                        "type": "31"
                    },
                    "1714237870": {
                        "en": "Sho'rkent",
                        "uz": "Sho'rkent",
                        "ru": "Шуркент",
                        "type": "31"
                    },
                    "1714237875": {
                        "en": "Karnon",
                        "uz": "Karnon",
                        "ru": "Карнан",
                        "type": "31"
                    },
                    "1714237880": {
                        "en": "Shoyon",
                        "uz": "Shoyon",
                        "ru": "Шаян",
                        "type": "31"
                    }
                }
            },
            "1714242": {
                "en": "Yangiqo'rg'on district",
                "uz": "Yangiqo'rg'on tumani",
                "ru": "Янгикурганский район",
                "type": "20",
                "settlements": {
                    "1714242551": {
                        "en": "Yangiqo'rg'on",
                        "uz": "Yangiqo'rg'on",
                        "ru": "Янгикурган",
                        "type": "24"
                    },
                    "1714242553": {
                        "en": "Bekobod",
                        "uz": "Bekobod",
                        "ru": "Бекобод",
                        "type": "24"
                    },
                    "1714242555": {
                        "en": "G'ovazon",
                        "uz": "G'ovazon",
                        "ru": "Говазон",
                        "type": "24"
                    },
                    "1714242557": {
                        "en": "Zarkent",
                        "uz": "Zarkent",
                        "ru": "Заркент",
                        "type": "24"
                    },
                    "1714242559": {
                        "en": "Iskavot",
                        "uz": "Iskavot",
                        "ru": "Искавот",
                        "type": "24"
                    },
                    "1714242561": {
                        "en": "Kalisho",
                        "uz": "Kalisho",
                        "ru": "Калишох",
                        "type": "24"
                    },
                    "1714242563": {
                        "en": "Qizil qiyoq",
                        "uz": "Qizil qiyoq",
                        "ru": "Кизилкиек",
                        "type": "24"
                    },
                    "1714242565": {
                        "en": "Qorayong'oq",
                        "uz": "Qorayong'oq",
                        "ru": "Кораенгок",
                        "type": "24"
                    },
                    "1714242567": {
                        "en": "Qorapolvon",
                        "uz": "Qorapolvon",
                        "ru": "Кораполвон",
                        "type": "24"
                    },
                    "1714242569": {
                        "en": "Qorachasho'rkent",
                        "uz": "Qorachasho'rkent",
                        "ru": "Корачашуркент",
                        "type": "24"
                    },
                    "1714242571": {
                        "en": "Ko'kyor",
                        "uz": "Ko'kyor",
                        "ru": "Кукер",
                        "type": "24"
                    },
                    "1714242573": {
                        "en": "Navkent",
                        "uz": "Navkent",
                        "ru": "Навкент",
                        "type": "24"
                    },
                    "1714242575": {
                        "en": "Nanay",
                        "uz": "Nanay",
                        "ru": "Нанай",
                        "type": "24"
                    },
                    "1714242577": {
                        "en": "Poromon",
                        "uz": "Poromon",
                        "ru": "Парамон",
                        "type": "24"
                    },
                    "1714242579": {
                        "en": "Rovot",
                        "uz": "Rovot",
                        "ru": "Ровут",
                        "type": "24"
                    },
                    "1714242581": {
                        "en": "Sangiston",
                        "uz": "Sangiston",
                        "ru": "Сангистон",
                        "type": "24"
                    },
                    "1714242583": {
                        "en": "Salmon",
                        "uz": "Salmon",
                        "ru": "Солман",
                        "type": "24"
                    },
                    "1714242585": {
                        "en": "Xo'jasho'rkent",
                        "uz": "Xo'jasho'rkent",
                        "ru": "Хужашуркент",
                        "type": "24"
                    },
                    "1714242587": {
                        "en": "Yumaloqtepa",
                        "uz": "Yumaloqtepa",
                        "ru": "Юмалок тепа",
                        "type": "24"
                    },
                    "1714242810": {
                        "en": "Bekobod",
                        "uz": "Bekobod",
                        "ru": "Бекабад",
                        "type": "31"
                    },
                    "1714242813": {
                        "en": "Birlashkan",
                        "uz": "Birlashkan",
                        "ru": "Бирлашкан",
                        "type": "31"
                    },
                    "1714242824": {
                        "en": "Zarbdor",
                        "uz": "Zarbdor",
                        "ru": "Зарбдор",
                        "type": "31"
                    },
                    "1714242830": {
                        "en": "Zarkent",
                        "uz": "Zarkent",
                        "ru": "Заркент",
                        "type": "31"
                    },
                    "1714242840": {
                        "en": "Qorapolvon",
                        "uz": "Qorapolvon",
                        "ru": "Карапалван",
                        "type": "31"
                    },
                    "1714242846": {
                        "en": "Sharq yulduzi",
                        "uz": "Sharq yulduzi",
                        "ru": "Шарк юлдузи",
                        "type": "31"
                    },
                    "1714242859": {
                        "en": "Nanay",
                        "uz": "Nanay",
                        "ru": "Нанай",
                        "type": "31"
                    },
                    "1714242862": {
                        "en": "Navkent",
                        "uz": "Navkent",
                        "ru": "Новкент",
                        "type": "31"
                    },
                    "1714242865": {
                        "en": "Poromon",
                        "uz": "Poromon",
                        "ru": "Парамон",
                        "type": "31"
                    },
                    "1714242871": {
                        "en": "Istiqlol",
                        "uz": "Istiqlol",
                        "ru": "Истиклол",
                        "type": "31"
                    },
                    "1714242875": {
                        "en": "Navro'zobod",
                        "uz": "Navro'zobod",
                        "ru": "Наврузабад",
                        "type": "31"
                    }
                }
            },
            "1714401": {
                "en": "Namangan",
                "uz": "Namangan",
                "ru": "Наманган",
                "type": "21",
                "settlements": {
                    "1714401365": {
                        "en": "Davlatobod tumani",
                        "uz": "Davlatobod tumani",
                        "ru": "Давлатободский район",
                        "type": "22"
                    },
                    "1714401367": {
                        "en": "Yangi Namangan tumani",
                        "uz": "Yangi Namangan tumani",
                        "ru": "Янги Наманганский район",
                        "type": "22"
                    }
                }
            }
        }
    },
    "1718": {
        "en": "Samarkand region",
        "uz": "Samarqand viloyati",
        "ru": "Самаркандская область",
        "districts": {
            "1718203": {
                "en": "Oqdaryo district",
                "uz": "Oqdaryo tumani",
                "ru": "Акдарьинский район",
                "type": "20",
                "settlements": {
                    "1718203551": {
                        "en": "Loyish",
                        "uz": "Loyish",
                        "ru": "Лаиш",
                        "type": "24"
                    },
                    "1718203555": {
                        "en": "Dahbed",
                        "uz": "Dahbed",
                        "ru": "Дахбед",
                        "type": "24"
                    },
                    "1718203557": {
                        "en": "Avazali",
                        "uz": "Avazali",
                        "ru": "Авазали",
                        "type": "24"
                    },
                    "1718203559": {
                        "en": "Bolta",
                        "uz": "Bolta",
                        "ru": "Болта",
                        "type": "24"
                    },
                    "1718203561": {
                        "en": "Qirqdarxon",
                        "uz": "Qirqdarxon",
                        "ru": "Киркдархон",
                        "type": "24"
                    },
                    "1718203563": {
                        "en": "Kumushkent",
                        "uz": "Kumushkent",
                        "ru": "Кумушкент",
                        "type": "24"
                    },
                    "1718203565": {
                        "en": "Oytamg'ali",
                        "uz": "Oytamg'ali",
                        "ru": "Ойтамгали",
                        "type": "24"
                    },
                    "1718203567": {
                        "en": "Oqdaryo",
                        "uz": "Oqdaryo",
                        "ru": "Окдаре",
                        "type": "24"
                    },
                    "1718203569": {
                        "en": "Yangiqo'rg'on",
                        "uz": "Yangiqo'rg'on",
                        "ru": "Янгикургон",
                        "type": "24"
                    },
                    "1718203571": {
                        "en": "Yangiobod",
                        "uz": "Yangiobod",
                        "ru": "Янгиабад",
                        "type": "24"
                    },
                    "1718203816": {
                        "en": "Zarafshon",
                        "uz": "Zarafshon",
                        "ru": "Зарафшан",
                        "type": "31"
                    },
                    "1718203820": {
                        "en": "Qorateri",
                        "uz": "Qorateri",
                        "ru": "Каратери",
                        "type": "31"
                    },
                    "1718203822": {
                        "en": "A.Navoiy",
                        "uz": "A.Navoiy",
                        "ru": "Навои",
                        "type": "31"
                    },
                    "1718203833": {
                        "en": "Primkent",
                        "uz": "Primkent",
                        "ru": "Примкент",
                        "type": "31"
                    },
                    "1718203844": {
                        "en": "Yangikent",
                        "uz": "Yangikent",
                        "ru": "Янгикент",
                        "type": "31"
                    },
                    "1718203855": {
                        "en": "Yangiqo'rg'on",
                        "uz": "Yangiqo'rg'on",
                        "ru": "Янгикурган",
                        "type": "31"
                    }
                }
            },
            "1718206": {
                "en": "Bulung'ur district",
                "uz": "Bulung'ur tumani",
                "ru": "Булунгурский район",
                "type": "20",
                "settlements": {
                    "1718206501": {
                        "en": "Bulung'ur",
                        "uz": "Bulung'ur",
                        "ru": "Булунгур",
                        "type": "23"
                    },
                    "1718206553": {
                        "en": "Kildon",
                        "uz": "Kildon",
                        "ru": "Килдон",
                        "type": "24"
                    },
                    "1718206556": {
                        "en": "Soxibkor",
                        "uz": "Soxibkor",
                        "ru": "Сохибкор",
                        "type": "24"
                    },
                    "1718206559": {
                        "en": "Bog'bon",
                        "uz": "Bog'bon",
                        "ru": "Богбон",
                        "type": "24"
                    },
                    "1718206811": {
                        "en": "Beshqo'ton",
                        "uz": "Beshqo'ton",
                        "ru": "Бешкутан",
                        "type": "31"
                    },
                    "1718206840": {
                        "en": "Kildon",
                        "uz": "Kildon",
                        "ru": "Кильдан",
                        "type": "31"
                    },
                    "1718206845": {
                        "en": "Kulchabiy",
                        "uz": "Kulchabiy",
                        "ru": "Кулчабий",
                        "type": "31"
                    },
                    "1718206850": {
                        "en": "O'rtabuloq",
                        "uz": "O'rtabuloq",
                        "ru": "Уpтабулак",
                        "type": "31"
                    },
                    "1718206856": {
                        "en": "Navoiy nomli",
                        "uz": "Navoiy nomli",
                        "ru": "им. Навои",
                        "type": "31"
                    },
                    "1718206867": {
                        "en": "Soxibkor",
                        "uz": "Soxibkor",
                        "ru": "Сахибкор",
                        "type": "31"
                    },
                    "1718206878": {
                        "en": "F.Yo'ldoshev nomli",
                        "uz": "F.Yo'ldoshev nomli",
                        "ru": "им. Ф. Юлдашева",
                        "type": "31"
                    }
                }
            },
            "1718209": {
                "en": "Jomboy district",
                "uz": "Jomboy tumani",
                "ru": "Джамбайский район",
                "type": "20",
                "settlements": {
                    "1718209501": {
                        "en": "Jomboy",
                        "uz": "Jomboy",
                        "ru": "Джамбай",
                        "type": "23"
                    },
                    "1718209554": {
                        "en": "Dehqonobod",
                        "uz": "Dehqonobod",
                        "ru": "Дехконабад",
                        "type": "24"
                    },
                    "1718209558": {
                        "en": "Eski Jomboy",
                        "uz": "Eski Jomboy",
                        "ru": "Эски Джомбой",
                        "type": "24"
                    },
                    "1718209564": {
                        "en": "Xo'ja",
                        "uz": "Xo'ja",
                        "ru": "Хужа",
                        "type": "24"
                    },
                    "1718209568": {
                        "en": "G'azira",
                        "uz": "G'azira",
                        "ru": "Газира",
                        "type": "24"
                    },
                    "1718209574": {
                        "en": "Kattaqishloq",
                        "uz": "Kattaqishloq",
                        "ru": "Катта кишлак",
                        "type": "24"
                    },
                    "1718209820": {
                        "en": "Dehqonobod",
                        "uz": "Dehqonobod",
                        "ru": "Дехканабад",
                        "type": "31"
                    },
                    "1718209822": {
                        "en": "Jomboy",
                        "uz": "Jomboy",
                        "ru": "Джамбай",
                        "type": "31"
                    },
                    "1718209833": {
                        "en": "Juriyat",
                        "uz": "Juriyat",
                        "ru": "Джурият",
                        "type": "31"
                    },
                    "1718209844": {
                        "en": "Qangli",
                        "uz": "Qangli",
                        "ru": "Кангли",
                        "type": "31"
                    },
                    "1718209848": {
                        "en": "Qoramuyin",
                        "uz": "Qoramuyin",
                        "ru": "Карамуюн",
                        "type": "31"
                    },
                    "1718209855": {
                        "en": "Qo'ng'irot",
                        "uz": "Qo'ng'irot",
                        "ru": "Кунград",
                        "type": "31"
                    },
                    "1718209866": {
                        "en": "Xolvoyi",
                        "uz": "Xolvoyi",
                        "ru": "Холвай",
                        "type": "31"
                    },
                    "1718209870": {
                        "en": "Sherqo'rg'on",
                        "uz": "Sherqo'rg'on",
                        "ru": "Шеркурган",
                        "type": "31"
                    }
                }
            },
            "1718212": {
                "en": "Ishtixon district",
                "uz": "Ishtixon tumani",
                "ru": "Иштыханский район",
                "type": "20",
                "settlements": {
                    "1718212501": {
                        "en": "Ishtixon",
                        "uz": "Ishtixon",
                        "ru": "Иштыхан",
                        "type": "23"
                    },
                    "1718212555": {
                        "en": "Mitan",
                        "uz": "Mitan",
                        "ru": "Митан",
                        "type": "24"
                    },
                    "1718212557": {
                        "en": "Azamat",
                        "uz": "Azamat",
                        "ru": "Азамат",
                        "type": "24"
                    },
                    "1718212559": {
                        "en": "Damariq",
                        "uz": "Damariq",
                        "ru": "Дамарик",
                        "type": "24"
                    },
                    "1718212561": {
                        "en": "Bahrin",
                        "uz": "Bahrin",
                        "ru": "Бахрин",
                        "type": "24"
                    },
                    "1718212563": {
                        "en": "Qirqyigit",
                        "uz": "Qirqyigit",
                        "ru": "Киркйигит",
                        "type": "24"
                    },
                    "1718212565": {
                        "en": "Odil",
                        "uz": "Odil",
                        "ru": "Одил",
                        "type": "24"
                    },
                    "1718212567": {
                        "en": "Sug'ot",
                        "uz": "Sug'ot",
                        "ru": "Сугот",
                        "type": "24"
                    },
                    "1718212569": {
                        "en": "Xalqobod",
                        "uz": "Xalqobod",
                        "ru": "Халкабад",
                        "type": "24"
                    },
                    "1718212571": {
                        "en": "Shayxislom",
                        "uz": "Shayxislom",
                        "ru": "Шайхислом",
                        "type": "24"
                    },
                    "1718212573": {
                        "en": "Sheyxlar",
                        "uz": "Sheyxlar",
                        "ru": "Шейхлар",
                        "type": "24"
                    },
                    "1718212575": {
                        "en": "Yangikent",
                        "uz": "Yangikent",
                        "ru": "Янгикент",
                        "type": "24"
                    },
                    "1718212577": {
                        "en": "Yangirabot",
                        "uz": "Yangirabot",
                        "ru": "Янгиработ",
                        "type": "24"
                    },
                    "1718212803": {
                        "en": "Azamat",
                        "uz": "Azamat",
                        "ru": "Азамат",
                        "type": "31"
                    },
                    "1718212818": {
                        "en": "Zarband",
                        "uz": "Zarband",
                        "ru": "Зарбанд",
                        "type": "31"
                    },
                    "1718212824": {
                        "en": "Qurli",
                        "uz": "Qurli",
                        "ru": "Курли",
                        "type": "31"
                    },
                    "1718212844": {
                        "en": "Chordara",
                        "uz": "Chordara",
                        "ru": "Чардара",
                        "type": "31"
                    },
                    "1718212855": {
                        "en": "Ravot",
                        "uz": "Ravot",
                        "ru": "Рават",
                        "type": "31"
                    },
                    "1718212866": {
                        "en": "O'rtaqishloq",
                        "uz": "O'rtaqishloq",
                        "ru": "Уртакишлак",
                        "type": "31"
                    },
                    "1718212877": {
                        "en": "Haqiqat",
                        "uz": "Haqiqat",
                        "ru": "Хакикат",
                        "type": "31"
                    },
                    "1718212879": {
                        "en": "Halqabod",
                        "uz": "Halqabod",
                        "ru": "Халкабад",
                        "type": "31"
                    },
                    "1718212888": {
                        "en": "Fayziobod",
                        "uz": "Fayziobod",
                        "ru": "Файзиабад",
                        "type": "31"
                    }
                }
            },
            "1718215": {
                "en": "Kattaqo'rg'on district",
                "uz": "Kattaqo'rg'on tumani",
                "ru": "Каттакурганский район",
                "type": "20",
                "settlements": {
                    "1718215551": {
                        "en": "Payshanba",
                        "uz": "Payshanba",
                        "ru": "Пайшанба",
                        "type": "24"
                    },
                    "1718215554": {
                        "en": "Suv xovuzi",
                        "uz": "Suv xovuzi",
                        "ru": "Сув ховузи",
                        "type": "24"
                    },
                    "1718215558": {
                        "en": "Mundiyon",
                        "uz": "Mundiyon",
                        "ru": "Мундиен",
                        "type": "24"
                    },
                    "1718215564": {
                        "en": "Polvontepa",
                        "uz": "Polvontepa",
                        "ru": "Полвонтепа",
                        "type": "24"
                    },
                    "1718215568": {
                        "en": "Qoradaryo",
                        "uz": "Qoradaryo",
                        "ru": "Карадарья",
                        "type": "24"
                    },
                    "1718215574": {
                        "en": "Vayrat",
                        "uz": "Vayrat",
                        "ru": "Войрот",
                        "type": "24"
                    },
                    "1718215578": {
                        "en": "Yangiqo'rg'oncha",
                        "uz": "Yangiqo'rg'oncha",
                        "ru": "Янгикургонча",
                        "type": "24"
                    },
                    "1718215584": {
                        "en": "Kattaming",
                        "uz": "Kattaming",
                        "ru": "Каттаминг",
                        "type": "24"
                    },
                    "1718215811": {
                        "en": "Girdiqo'rg'on",
                        "uz": "Girdiqo'rg'on",
                        "ru": "Гирдыкурган",
                        "type": "31"
                    },
                    "1718215815": {
                        "en": "Yangiqo'rg'oncha",
                        "uz": "Yangiqo'rg'oncha",
                        "ru": "Янгикуpганча",
                        "type": "31"
                    },
                    "1718215818": {
                        "en": "Omonboy",
                        "uz": "Omonboy",
                        "ru": "Аманбай",
                        "type": "31"
                    },
                    "1718215822": {
                        "en": "Durbesh",
                        "uz": "Durbesh",
                        "ru": "Дурбеш",
                        "type": "31"
                    },
                    "1718215833": {
                        "en": "Kattako'rpa",
                        "uz": "Kattako'rpa",
                        "ru": "Каттакурпа",
                        "type": "31"
                    },
                    "1718215837": {
                        "en": "Kattaming",
                        "uz": "Kattaming",
                        "ru": "Каттаминг",
                        "type": "31"
                    },
                    "1718215845": {
                        "en": "Kichikmundiyon",
                        "uz": "Kichikmundiyon",
                        "ru": "Кичикмундиян",
                        "type": "31"
                    },
                    "1718215850": {
                        "en": "Moybuloq",
                        "uz": "Moybuloq",
                        "ru": "Майбулак",
                        "type": "31"
                    },
                    "1718215867": {
                        "en": "Saroyqo'rg'on",
                        "uz": "Saroyqo'rg'on",
                        "ru": "Сарайкурган",
                        "type": "31"
                    },
                    "1718215889": {
                        "en": "Jumaboy",
                        "uz": "Jumaboy",
                        "ru": "Джумабай",
                        "type": "31"
                    },
                    "1718215895": {
                        "en": "Qo'shtepa",
                        "uz": "Qo'shtepa",
                        "ru": "Куштепа",
                        "type": "31"
                    }
                }
            },
            "1718216": {
                "en": "Qo'shrabot district",
                "uz": "Qo'shrabot tumani",
                "ru": "Кошрабадский район",
                "type": "20",
                "settlements": {
                    "1718216551": {
                        "en": "Qo'shrabot",
                        "uz": "Qo'shrabot",
                        "ru": "Кушрабад",
                        "type": "24"
                    },
                    "1718216555": {
                        "en": "Zarkent",
                        "uz": "Zarkent",
                        "ru": "Заркент",
                        "type": "24"
                    },
                    "1718216802": {
                        "en": "Oqtepa",
                        "uz": "Oqtepa",
                        "ru": "Актепа",
                        "type": "31"
                    },
                    "1718216805": {
                        "en": "Oxunboboyev nomli",
                        "uz": "Oxunboboyev nomli",
                        "ru": "им. Ахунбабаева",
                        "type": "31"
                    },
                    "1718216810": {
                        "en": "Jush",
                        "uz": "Jush",
                        "ru": "Джуш",
                        "type": "31"
                    },
                    "1718216814": {
                        "en": "Zarmitan",
                        "uz": "Zarmitan",
                        "ru": "Зармитан",
                        "type": "31"
                    },
                    "1718216820": {
                        "en": "Qo'shrabot",
                        "uz": "Qo'shrabot",
                        "ru": "Кошрабад",
                        "type": "31"
                    },
                    "1718216825": {
                        "en": "Pichat",
                        "uz": "Pichat",
                        "ru": "Пичат",
                        "type": "31"
                    },
                    "1718216830": {
                        "en": "Urgandji",
                        "uz": "Urgandji",
                        "ru": "Уpганджи",
                        "type": "31"
                    }
                }
            },
            "1718218": {
                "en": "Narpay district",
                "uz": "Narpay tumani",
                "ru": "Нарпайский район",
                "type": "20",
                "settlements": {
                    "1718218501": {
                        "en": "Oqtosh",
                        "uz": "Oqtosh",
                        "ru": "Акташ",
                        "type": "23"
                    },
                    "1718218554": {
                        "en": "Mirbozor",
                        "uz": "Mirbozor",
                        "ru": "Мирбазар",
                        "type": "24"
                    },
                    "1718218558": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистон",
                        "type": "24"
                    },
                    "1718218564": {
                        "en": "Qo'yi Charxin",
                        "uz": "Qo'yi Charxin",
                        "ru": "Куйи Чархин",
                        "type": "24"
                    },
                    "1718218811": {
                        "en": "Oltio'g'il",
                        "uz": "Oltio'g'il",
                        "ru": "Алтыугил",
                        "type": "31"
                    },
                    "1718218819": {
                        "en": "Islom Shoir",
                        "uz": "Islom Shoir",
                        "ru": "им. Ислома Шоира",
                        "type": "31"
                    },
                    "1718218822": {
                        "en": "Qorako'l",
                        "uz": "Qorako'l",
                        "ru": "Каракуль",
                        "type": "31"
                    },
                    "1718218826": {
                        "en": "Kosogoron",
                        "uz": "Kosogoron",
                        "ru": "Косагаpан",
                        "type": "31"
                    },
                    "1718218835": {
                        "en": "Qadim",
                        "uz": "Qadim",
                        "ru": "Кадим",
                        "type": "31"
                    },
                    "1718218846": {
                        "en": "Chaqar",
                        "uz": "Chaqar",
                        "ru": "Чакаp",
                        "type": "31"
                    },
                    "1718218870": {
                        "en": "Balandqo'rg'on",
                        "uz": "Balandqo'rg'on",
                        "ru": "Баландкурган",
                        "type": "31"
                    },
                    "1718218872": {
                        "en": "Yangirabod",
                        "uz": "Yangirabod",
                        "ru": "Янгирабад",
                        "type": "31"
                    },
                    "1718218875": {
                        "en": "Qorasiyrak",
                        "uz": "Qorasiyrak",
                        "ru": "Каpасиpак",
                        "type": "31"
                    }
                }
            },
            "1718224": {
                "en": "Payariq district",
                "uz": "Payariq tumani",
                "ru": "Пайарыкский район",
                "type": "20",
                "settlements": {
                    "1718224501": {
                        "en": "Payariq",
                        "uz": "Payariq",
                        "ru": "Пайаpык",
                        "type": "23"
                    },
                    "1718224502": {
                        "en": "Chelak",
                        "uz": "Chelak",
                        "ru": "Челек",
                        "type": "23"
                    },
                    "1718224552": {
                        "en": "Tomoyrat",
                        "uz": "Tomoyrat",
                        "ru": "Томойрот",
                        "type": "24"
                    },
                    "1718224554": {
                        "en": "Qorasuv",
                        "uz": "Qorasuv",
                        "ru": "Карасув",
                        "type": "24"
                    },
                    "1718224556": {
                        "en": "Ko'ksaroy",
                        "uz": "Ko'ksaroy",
                        "ru": "Куксарой",
                        "type": "24"
                    },
                    "1718224558": {
                        "en": "G'ujumsoy",
                        "uz": "G'ujumsoy",
                        "ru": "Гужумсой",
                        "type": "24"
                    },
                    "1718224562": {
                        "en": "Xo'ja Ismoil",
                        "uz": "Xo'ja Ismoil",
                        "ru": "Хужа Исмоил",
                        "type": "24"
                    },
                    "1718224564": {
                        "en": "Tupolos",
                        "uz": "Tupolos",
                        "ru": "Туполос",
                        "type": "24"
                    },
                    "1718224566": {
                        "en": "Oqqo'rg'on",
                        "uz": "Oqqo'rg'on",
                        "ru": "Оккургон",
                        "type": "24"
                    },
                    "1718224568": {
                        "en": "Do'stlarobod",
                        "uz": "Do'stlarobod",
                        "ru": "Дустларабад",
                        "type": "24"
                    },
                    "1718224572": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "24"
                    },
                    "1718224805": {
                        "en": "Oqqo'rg'on",
                        "uz": "Oqqo'rg'on",
                        "ru": "Аккурган",
                        "type": "31"
                    },
                    "1718224810": {
                        "en": "Oytamg'ali",
                        "uz": "Oytamg'ali",
                        "ru": "Айтамгали",
                        "type": "31"
                    },
                    "1718224815": {
                        "en": "Birlashgan",
                        "uz": "Birlashgan",
                        "ru": "Бирлашган",
                        "type": "31"
                    },
                    "1718224825": {
                        "en": "O'rta saydov",
                        "uz": "O'rta saydov",
                        "ru": "Уртасайдов",
                        "type": "31"
                    },
                    "1718224838": {
                        "en": "Choparoshli",
                        "uz": "Choparoshli",
                        "ru": "Чапарашли",
                        "type": "31"
                    },
                    "1718224845": {
                        "en": "Ko'kdala",
                        "uz": "Ko'kdala",
                        "ru": "Кокдала",
                        "type": "31"
                    },
                    "1718224848": {
                        "en": "Ko'lto'sin",
                        "uz": "Ko'lto'sin",
                        "ru": "Культусин",
                        "type": "31"
                    },
                    "1718224855": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистан",
                        "type": "31"
                    },
                    "1718224866": {
                        "en": "Qorasuv",
                        "uz": "Qorasuv",
                        "ru": "Карасув",
                        "type": "31"
                    },
                    "1718224877": {
                        "en": "Sanoat",
                        "uz": "Sanoat",
                        "ru": "Саноат",
                        "type": "31"
                    },
                    "1718224888": {
                        "en": "Choshtepa",
                        "uz": "Choshtepa",
                        "ru": "Чаштепа",
                        "type": "31"
                    }
                }
            },
            "1718227": {
                "en": "Pastdarg'om district",
                "uz": "Pastdarg'om tumani",
                "ru": "Пастдаргомский район",
                "type": "20",
                "settlements": {
                    "1718227501": {
                        "en": "Juma",
                        "uz": "Juma",
                        "ru": "Джума",
                        "type": "23"
                    },
                    "1718227558": {
                        "en": "Charxin",
                        "uz": "Charxin",
                        "ru": "Чархин",
                        "type": "24"
                    },
                    "1718227562": {
                        "en": "Chortut",
                        "uz": "Chortut",
                        "ru": "Чортут",
                        "type": "24"
                    },
                    "1718227564": {
                        "en": "O'rta Charxin",
                        "uz": "O'rta Charxin",
                        "ru": "Урта Чархин",
                        "type": "24"
                    },
                    "1718227566": {
                        "en": "Balhiyon",
                        "uz": "Balhiyon",
                        "ru": "Балхиен",
                        "type": "24"
                    },
                    "1718227568": {
                        "en": "Go'zalkent",
                        "uz": "Go'zalkent",
                        "ru": "Гузалкент",
                        "type": "24"
                    },
                    "1718227572": {
                        "en": "Nayman",
                        "uz": "Nayman",
                        "ru": "Найман",
                        "type": "24"
                    },
                    "1718227574": {
                        "en": "Jag'alboyli",
                        "uz": "Jag'alboyli",
                        "ru": "Джагалбойли",
                        "type": "24"
                    },
                    "1718227576": {
                        "en": "Mehnat",
                        "uz": "Mehnat",
                        "ru": "Мехнат",
                        "type": "24"
                    },
                    "1718227578": {
                        "en": "Hindiboyi",
                        "uz": "Hindiboyi",
                        "ru": "Хиндибойи",
                        "type": "24"
                    },
                    "1718227582": {
                        "en": "Agron",
                        "uz": "Agron",
                        "ru": "Агрон",
                        "type": "24"
                    },
                    "1718227584": {
                        "en": "Iskandari",
                        "uz": "Iskandari",
                        "ru": "Искандари",
                        "type": "24"
                    },
                    "1718227586": {
                        "en": "Saribosh",
                        "uz": "Saribosh",
                        "ru": "Сарибош",
                        "type": "24"
                    },
                    "1718227807": {
                        "en": "Arabxona",
                        "uz": "Arabxona",
                        "ru": "Арабхана",
                        "type": "31"
                    },
                    "1718227812": {
                        "en": "Bolatosh",
                        "uz": "Bolatosh",
                        "ru": "Балаташ",
                        "type": "31"
                    },
                    "1718227817": {
                        "en": "Go'zalkent",
                        "uz": "Go'zalkent",
                        "ru": "Гузалкент",
                        "type": "31"
                    },
                    "1718227840": {
                        "en": "Anxor",
                        "uz": "Anxor",
                        "ru": "Анхоp",
                        "type": "31"
                    },
                    "1718227842": {
                        "en": "Besh qahramon",
                        "uz": "Besh qahramon",
                        "ru": "Бешкахрамон",
                        "type": "31"
                    },
                    "1718227845": {
                        "en": "Saribosh",
                        "uz": "Saribosh",
                        "ru": "Саpибаш",
                        "type": "31"
                    },
                    "1718227848": {
                        "en": "Po'latchi",
                        "uz": "Po'latchi",
                        "ru": "Пулатчи",
                        "type": "31"
                    },
                    "1718227850": {
                        "en": "Namuna",
                        "uz": "Namuna",
                        "ru": "Намуна",
                        "type": "31"
                    },
                    "1718227860": {
                        "en": "Sanchikul",
                        "uz": "Sanchikul",
                        "ru": "Санчикуль",
                        "type": "31"
                    },
                    "1718227867": {
                        "en": "Torariq",
                        "uz": "Torariq",
                        "ru": "Тоpаpык",
                        "type": "31"
                    },
                    "1718227875": {
                        "en": "Do'rmontepa",
                        "uz": "Do'rmontepa",
                        "ru": "Дурмонтепа",
                        "type": "31"
                    },
                    "1718227880": {
                        "en": "Dimishkibolo",
                        "uz": "Dimishkibolo",
                        "ru": "Димишкиболо",
                        "type": "31"
                    },
                    "1718227890": {
                        "en": "Chimboy",
                        "uz": "Chimboy",
                        "ru": "Чимбай",
                        "type": "31"
                    }
                }
            },
            "1718230": {
                "en": "Paxtachi district",
                "uz": "Paxtachi tumani",
                "ru": "Пахтачийский район",
                "type": "20",
                "settlements": {
                    "1718230551": {
                        "en": "Ziyovuddin",
                        "uz": "Ziyovuddin",
                        "ru": "Зиатдин",
                        "type": "24"
                    },
                    "1718230553": {
                        "en": "Qodirist",
                        "uz": "Qodirist",
                        "ru": "Кадирист",
                        "type": "24"
                    },
                    "1718230555": {
                        "en": "Past Burkut",
                        "uz": "Past Burkut",
                        "ru": "Паст Буркут",
                        "type": "24"
                    },
                    "1718230557": {
                        "en": "Sanchiqul",
                        "uz": "Sanchiqul",
                        "ru": "Санчикул",
                        "type": "24"
                    },
                    "1718230559": {
                        "en": "Suluvqo'rg'on",
                        "uz": "Suluvqo'rg'on",
                        "ru": "Сулувкургон",
                        "type": "24"
                    },
                    "1718230561": {
                        "en": "Urgich",
                        "uz": "Urgich",
                        "ru": "Ургич",
                        "type": "24"
                    },
                    "1718230563": {
                        "en": "Xumor",
                        "uz": "Xumor",
                        "ru": "Хумор",
                        "type": "24"
                    },
                    "1718230804": {
                        "en": "Do'stobod",
                        "uz": "Do'stobod",
                        "ru": "Дустобод",
                        "type": "31"
                    },
                    "1718230813": {
                        "en": "Xayrobod",
                        "uz": "Xayrobod",
                        "ru": "Хайpабад",
                        "type": "31"
                    },
                    "1718230827": {
                        "en": "Misit",
                        "uz": "Misit",
                        "ru": "Мисит",
                        "type": "31"
                    },
                    "1718230839": {
                        "en": "Sultonobod",
                        "uz": "Sultonobod",
                        "ru": "Султанабад",
                        "type": "31"
                    },
                    "1718230850": {
                        "en": "Yuqori Po'latchi",
                        "uz": "Yuqori Po'latchi",
                        "ru": "Юкори Пулатчи",
                        "type": "31"
                    },
                    "1718230861": {
                        "en": "Quyiboq",
                        "uz": "Quyiboq",
                        "ru": "Куйбок",
                        "type": "31"
                    },
                    "1718230870": {
                        "en": "Xumor",
                        "uz": "Xumor",
                        "ru": "Хумар",
                        "type": "31"
                    },
                    "1718230875": {
                        "en": "Karnab",
                        "uz": "Karnab",
                        "ru": "Карнаб",
                        "type": "31"
                    }
                }
            },
            "1718233": {
                "en": "Samarqand district",
                "uz": "Samarqand tumani",
                "ru": "Самаркандский район",
                "type": "20",
                "settlements": {
                    "1718233551": {
                        "en": "Gulobod",
                        "uz": "Gulobod",
                        "ru": "Гулабад",
                        "type": "24"
                    },
                    "1718233555": {
                        "en": "Xo'ja Ahrori Vali",
                        "uz": "Xo'ja Ahrori Vali",
                        "ru": "Хужа Ахрори Вали",
                        "type": "24"
                    },
                    "1718233806": {
                        "en": "Ohalik",
                        "uz": "Ohalik",
                        "ru": "Агалик",
                        "type": "31"
                    },
                    "1718233812": {
                        "en": "Qo'shtamg'ali",
                        "uz": "Qo'shtamg'ali",
                        "ru": "Куштамгали",
                        "type": "31"
                    },
                    "1718233819": {
                        "en": "Bog'ibaland",
                        "uz": "Bog'ibaland",
                        "ru": "Багибаланд",
                        "type": "31"
                    },
                    "1718233830": {
                        "en": "Dashtakibolo",
                        "uz": "Dashtakibolo",
                        "ru": "Даштакиболо",
                        "type": "31"
                    },
                    "1718233850": {
                        "en": "Kattaqo'rg'onariq",
                        "uz": "Kattaqo'rg'onariq",
                        "ru": "Каттакурганарык",
                        "type": "31"
                    },
                    "1718233856": {
                        "en": "Kulbaipoyon",
                        "uz": "Kulbaipoyon",
                        "ru": "Кульбапоян",
                        "type": "31"
                    },
                    "1718233880": {
                        "en": "Ulug'bek",
                        "uz": "Ulug'bek",
                        "ru": "Улугбек",
                        "type": "31"
                    },
                    "1718233893": {
                        "en": "Qaynama",
                        "uz": "Qaynama",
                        "ru": "Кайнама",
                        "type": "31"
                    }
                }
            },
            "1718235": {
                "en": "Nurobod district",
                "uz": "Nurobod tumani",
                "ru": "Нурабадский район",
                "type": "20",
                "settlements": {
                    "1718235501": {
                        "en": "Nurobod",
                        "uz": "Nurobod",
                        "ru": "Нурабад",
                        "type": "23"
                    },
                    "1718235556": {
                        "en": "Nurbuloq",
                        "uz": "Nurbuloq",
                        "ru": "Нурбулок",
                        "type": "24"
                    },
                    "1718235817": {
                        "en": "Jom",
                        "uz": "Jom",
                        "ru": "Джам",
                        "type": "31"
                    },
                    "1718235820": {
                        "en": "Jarquduq",
                        "uz": "Jarquduq",
                        "ru": "Джаркудук",
                        "type": "31"
                    },
                    "1718235833": {
                        "en": "Nurbuloq",
                        "uz": "Nurbuloq",
                        "ru": "Нуpбулак",
                        "type": "31"
                    },
                    "1718235840": {
                        "en": "Tim",
                        "uz": "Tim",
                        "ru": "Тим",
                        "type": "31"
                    },
                    "1718235843": {
                        "en": "Sazog'on",
                        "uz": "Sazog'on",
                        "ru": "Сазогон",
                        "type": "31"
                    },
                    "1718235846": {
                        "en": "Ulus",
                        "uz": "Ulus",
                        "ru": "Улус",
                        "type": "31"
                    },
                    "1718235850": {
                        "en": "Tutli",
                        "uz": "Tutli",
                        "ru": "Тутли",
                        "type": "31"
                    }
                }
            },
            "1718236": {
                "en": "Urgut district",
                "uz": "Urgut tumani",
                "ru": "Ургутский район",
                "type": "20",
                "settlements": {
                    "1718236501": {
                        "en": "Urgut",
                        "uz": "Urgut",
                        "ru": "Ургут",
                        "type": "23"
                    },
                    "1718236553": {
                        "en": "Jartepa",
                        "uz": "Jartepa",
                        "ru": "Джартепа",
                        "type": "24"
                    },
                    "1718236556": {
                        "en": "Kamangaron",
                        "uz": "Kamangaron",
                        "ru": "Камангарон",
                        "type": "24"
                    },
                    "1718236559": {
                        "en": "G'o's",
                        "uz": "G'o's",
                        "ru": "Гус",
                        "type": "24"
                    },
                    "1718236563": {
                        "en": "Pochvon",
                        "uz": "Pochvon",
                        "ru": "Почвон",
                        "type": "24"
                    },
                    "1718236566": {
                        "en": "Ispanza",
                        "uz": "Ispanza",
                        "ru": "Испанза",
                        "type": "24"
                    },
                    "1718236569": {
                        "en": "Uramas",
                        "uz": "Uramas",
                        "ru": "Урамас",
                        "type": "24"
                    },
                    "1718236573": {
                        "en": "Kenagas",
                        "uz": "Kenagas",
                        "ru": "Кенагас",
                        "type": "24"
                    },
                    "1718236806": {
                        "en": "Beshbuloq",
                        "uz": "Beshbuloq",
                        "ru": "Бешбулак",
                        "type": "31"
                    },
                    "1718236811": {
                        "en": "Ispanza",
                        "uz": "Ispanza",
                        "ru": "Испанза",
                        "type": "31"
                    },
                    "1718236814": {
                        "en": "G'o's",
                        "uz": "G'o's",
                        "ru": "Гус",
                        "type": "31"
                    },
                    "1718236823": {
                        "en": "Ilonli",
                        "uz": "Ilonli",
                        "ru": "Иланли",
                        "type": "31"
                    },
                    "1718236834": {
                        "en": "Qoratepa",
                        "uz": "Qoratepa",
                        "ru": "Каратепа",
                        "type": "31"
                    },
                    "1718236839": {
                        "en": "Baxrin",
                        "uz": "Baxrin",
                        "ru": "Бахpин",
                        "type": "31"
                    },
                    "1718236846": {
                        "en": "Jartepa",
                        "uz": "Jartepa",
                        "ru": "Джаpтепа",
                        "type": "31"
                    },
                    "1718236852": {
                        "en": "Uramas",
                        "uz": "Uramas",
                        "ru": "Уpамас",
                        "type": "31"
                    },
                    "1718236858": {
                        "en": "Mirzaqishloq",
                        "uz": "Mirzaqishloq",
                        "ru": "Мирзакишлак",
                        "type": "31"
                    },
                    "1718236869": {
                        "en": "Pochvon",
                        "uz": "Pochvon",
                        "ru": "Почван",
                        "type": "31"
                    },
                    "1718236880": {
                        "en": "Buloqboshi",
                        "uz": "Buloqboshi",
                        "ru": "Булокбоши",
                        "type": "31"
                    },
                    "1718236891": {
                        "en": "Yangiariq",
                        "uz": "Yangiariq",
                        "ru": "Янгиарык",
                        "type": "31"
                    }
                }
            },
            "1718238": {
                "en": "Tayloq district",
                "uz": "Tayloq tumani",
                "ru": "Тайлякский район",
                "type": "20",
                "settlements": {
                    "1718238551": {
                        "en": "Toyloq",
                        "uz": "Toyloq",
                        "ru": "Тайлок",
                        "type": "24"
                    },
                    "1718238554": {
                        "en": "Adas",
                        "uz": "Adas",
                        "ru": "Адас",
                        "type": "24"
                    },
                    "1718238558": {
                        "en": "Bog'izag'on",
                        "uz": "Bog'izag'on",
                        "ru": "Богизагон",
                        "type": "24"
                    },
                    "1718238805": {
                        "en": "Adas",
                        "uz": "Adas",
                        "ru": "Адас",
                        "type": "31"
                    },
                    "1718238815": {
                        "en": "Bog'izag'on",
                        "uz": "Bog'izag'on",
                        "ru": "Багизаган",
                        "type": "31"
                    },
                    "1718238820": {
                        "en": "Jumabozor",
                        "uz": "Jumabozor",
                        "ru": "Джумабазар",
                        "type": "31"
                    },
                    "1718238830": {
                        "en": "G'o'lba",
                        "uz": "G'o'lba",
                        "ru": "Гулба",
                        "type": "31"
                    },
                    "1718238840": {
                        "en": "Madaniyat",
                        "uz": "Madaniyat",
                        "ru": "Маданият",
                        "type": "31"
                    },
                    "1718238845": {
                        "en": "Sochakibolo",
                        "uz": "Sochakibolo",
                        "ru": "Сочакиболо",
                        "type": "31"
                    },
                    "1718238850": {
                        "en": "Tepaqishloq",
                        "uz": "Tepaqishloq",
                        "ru": "Тепакишлак",
                        "type": "31"
                    },
                    "1718238855": {
                        "en": "Toyloq",
                        "uz": "Toyloq",
                        "ru": "Тайляк",
                        "type": "31"
                    },
                    "1718238860": {
                        "en": "Qo'rg'oncha",
                        "uz": "Qo'rg'oncha",
                        "ru": "Курганча",
                        "type": "31"
                    }
                }
            },
            "1718401": {
                "en": "Samarqand",
                "uz": "Samarqand",
                "ru": "Самарканд",
                "type": "21",
                "settlements": {
                    "1718401554": {
                        "en": "Kimyogarlar",
                        "uz": "Kimyogarlar",
                        "ru": "Кимегаpлаp",
                        "type": "24"
                    },
                    "1718401556": {
                        "en": "Farxod",
                        "uz": "Farxod",
                        "ru": "Фархад",
                        "type": "24"
                    },
                    "1718401558": {
                        "en": "Xishrav",
                        "uz": "Xishrav",
                        "ru": "Хишрау",
                        "type": "24"
                    }
                }
            },
            "1718406": {
                "en": "Kattaqo'rg'on",
                "uz": "Kattaqo'rg'on",
                "ru": "Каттакурган",
                "type": "21",
                "settlements": {
                    "1718406554": {
                        "en": "Ingichka",
                        "uz": "Ingichka",
                        "ru": "Ингичка",
                        "type": "24"
                    }
                }
            }
        }
    },
    "1722": {
        "en": "Surkhandarya region",
        "uz": "Surxondaryo viloyati",
        "ru": "Сурхандарьинская область",
        "districts": {
            "1722201": {
                "en": "Oltinsoy district",
                "uz": "Oltinsoy tumani",
                "ru": "Алтынсайский район",
                "type": "20",
                "settlements": {
                    "1722201551": {
                        "en": "Qorliq",
                        "uz": "Qorliq",
                        "ru": "Корлик",
                        "type": "24"
                    },
                    "1722201553": {
                        "en": "Botosh",
                        "uz": "Botosh",
                        "ru": "Ботош",
                        "type": "24"
                    },
                    "1722201555": {
                        "en": "Jobu",
                        "uz": "Jobu",
                        "ru": "Джобу",
                        "type": "24"
                    },
                    "1722201557": {
                        "en": "Ipoq",
                        "uz": "Ipoq",
                        "ru": "Ипок",
                        "type": "24"
                    },
                    "1722201559": {
                        "en": "Qurama",
                        "uz": "Qurama",
                        "ru": "Курама",
                        "type": "24"
                    },
                    "1722201561": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустон",
                        "type": "24"
                    },
                    "1722201563": {
                        "en": "Mormin",
                        "uz": "Mormin",
                        "ru": "Мармин",
                        "type": "24"
                    },
                    "1722201565": {
                        "en": "Xayrandara",
                        "uz": "Xayrandara",
                        "ru": "Хайрандора",
                        "type": "24"
                    },
                    "1722201567": {
                        "en": "Xo'jasoat",
                        "uz": "Xo'jasoat",
                        "ru": "Хужасоат",
                        "type": "24"
                    },
                    "1722201569": {
                        "en": "Chep",
                        "uz": "Chep",
                        "ru": "Чен",
                        "type": "24"
                    },
                    "1722201571": {
                        "en": "Shakarqamish",
                        "uz": "Shakarqamish",
                        "ru": "Шакаркамиш",
                        "type": "24"
                    },
                    "1722201573": {
                        "en": "Ekraz",
                        "uz": "Ekraz",
                        "ru": "Экраз",
                        "type": "24"
                    },
                    "1722201575": {
                        "en": "Yangiqurilish",
                        "uz": "Yangiqurilish",
                        "ru": "Янгикурилиш",
                        "type": "24"
                    },
                    "1722201577": {
                        "en": "Gulobod",
                        "uz": "Gulobod",
                        "ru": "Гулобод",
                        "type": "24"
                    },
                    "1722201801": {
                        "en": "Oq oltin",
                        "uz": "Oq oltin",
                        "ru": "Акалтын",
                        "type": "31"
                    },
                    "1722201802": {
                        "en": "Oqarbuloq",
                        "uz": "Oqarbuloq",
                        "ru": "Акарбулак",
                        "type": "31"
                    },
                    "1722201803": {
                        "en": "Oltinsoy",
                        "uz": "Oltinsoy",
                        "ru": "Алтынсай",
                        "type": "31"
                    },
                    "1722201804": {
                        "en": "Vaxshivor",
                        "uz": "Vaxshivor",
                        "ru": "Вахшивар",
                        "type": "31"
                    },
                    "1722201807": {
                        "en": "Dug'oba",
                        "uz": "Dug'oba",
                        "ru": "Дугаба",
                        "type": "31"
                    },
                    "1722201813": {
                        "en": "Qorliq",
                        "uz": "Qorliq",
                        "ru": "Карлук",
                        "type": "31"
                    },
                    "1722201816": {
                        "en": "Mirshodi",
                        "uz": "Mirshodi",
                        "ru": "Миршаде",
                        "type": "31"
                    },
                    "1722201820": {
                        "en": "Uzumzor",
                        "uz": "Uzumzor",
                        "ru": "Узумзор",
                        "type": "31"
                    },
                    "1722201823": {
                        "en": "Lutfiy",
                        "uz": "Lutfiy",
                        "ru": "Лутфий",
                        "type": "31"
                    }
                }
            },
            "1722202": {
                "en": "Angor district",
                "uz": "Angor tumani",
                "ru": "Ангорский район",
                "type": "20",
                "settlements": {
                    "1722202551": {
                        "en": "Angor ( mavjud)",
                        "uz": "Angor ( mavjud)",
                        "ru": "Ангор",
                        "type": "24"
                    },
                    "1722202553": {
                        "en": "Tallimaron",
                        "uz": "Tallimaron",
                        "ru": "Таллимарон",
                        "type": "24"
                    },
                    "1722202556": {
                        "en": "Xomkon",
                        "uz": "Xomkon",
                        "ru": "Хамкан",
                        "type": "24"
                    },
                    "1722202559": {
                        "en": "Qorasuv",
                        "uz": "Qorasuv",
                        "ru": "Карасу",
                        "type": "24"
                    },
                    "1722202561": {
                        "en": "Yangiobod",
                        "uz": "Yangiobod",
                        "ru": "Янгиабад",
                        "type": "24"
                    },
                    "1722202563": {
                        "en": "Talloshqon",
                        "uz": "Talloshqon",
                        "ru": "Таллошкан",
                        "type": "24"
                    },
                    "1722202566": {
                        "en": "Gilambob",
                        "uz": "Gilambob",
                        "ru": "Гиламбоб",
                        "type": "24"
                    },
                    "1722202569": {
                        "en": "Zartepa",
                        "uz": "Zartepa",
                        "ru": "Зартепа",
                        "type": "24"
                    },
                    "1722202571": {
                        "en": "Yangi turmush",
                        "uz": "Yangi turmush",
                        "ru": "Янги турмуш",
                        "type": "24"
                    },
                    "1722202573": {
                        "en": "Angor ( yangi)",
                        "uz": "Angor ( yangi)",
                        "ru": "Ангор",
                        "type": "24"
                    },
                    "1722202576": {
                        "en": "Kayran",
                        "uz": "Kayran",
                        "ru": "Кайран",
                        "type": "24"
                    },
                    "1722202579": {
                        "en": "Novshahar",
                        "uz": "Novshahar",
                        "ru": "Новшахар",
                        "type": "24"
                    },
                    "1722202815": {
                        "en": "Navoiy",
                        "uz": "Navoiy",
                        "ru": "им. Навои",
                        "type": "31"
                    },
                    "1722202825": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "31"
                    },
                    "1722202829": {
                        "en": "Tallimaron",
                        "uz": "Tallimaron",
                        "ru": "Талимаран",
                        "type": "31"
                    },
                    "1722202838": {
                        "en": "Qorasuv",
                        "uz": "Qorasuv",
                        "ru": "Корасув",
                        "type": "31"
                    },
                    "1722202840": {
                        "en": "Istiqlol",
                        "uz": "Istiqlol",
                        "ru": "Истиклол",
                        "type": "31"
                    },
                    "1722202843": {
                        "en": "Zang",
                        "uz": "Zang",
                        "ru": "Занг",
                        "type": "31"
                    },
                    "1722202846": {
                        "en": "Kayran",
                        "uz": "Kayran",
                        "ru": "Кайран",
                        "type": "31"
                    }
                }
            },
            "1722203": {
                "en": "Bandixon district",
                "uz": "Bandixon tumani",
                "ru": "Бандихонский район",
                "type": "20",
                "settlements": {
                    "1722203551": {
                        "en": "Bandixon",
                        "uz": "Bandixon",
                        "ru": "Бандихон",
                        "type": "24"
                    }
                }
            },
            "1722204": {
                "en": "Boysun district",
                "uz": "Boysun tumani",
                "ru": "Байсунский район",
                "type": "20",
                "settlements": {
                    "1722204501": {
                        "en": "Boysun",
                        "uz": "Boysun",
                        "ru": "Байсун",
                        "type": "23"
                    },
                    "1722204552": {
                        "en": "Kofrun",
                        "uz": "Kofrun",
                        "ru": "Кофрун",
                        "type": "24"
                    },
                    "1722204554": {
                        "en": "Tangimush",
                        "uz": "Tangimush",
                        "ru": "Тангимуш",
                        "type": "24"
                    },
                    "1722204556": {
                        "en": "Pasurxi",
                        "uz": "Pasurxi",
                        "ru": "Пасурхи",
                        "type": "24"
                    },
                    "1722204558": {
                        "en": "Qorabo'yin",
                        "uz": "Qorabo'yin",
                        "ru": "Корабуйин",
                        "type": "24"
                    },
                    "1722204562": {
                        "en": "Rabot",
                        "uz": "Rabot",
                        "ru": "Рабат",
                        "type": "24"
                    },
                    "1722204811": {
                        "en": "Qo'ng'irot",
                        "uz": "Qo'ng'irot",
                        "ru": "Кунгирот",
                        "type": "31"
                    },
                    "1722204825": {
                        "en": "Temir darvoza",
                        "uz": "Temir darvoza",
                        "ru": "Темир дарвоза",
                        "type": "31"
                    },
                    "1722204828": {
                        "en": "Qo'rg'oncha",
                        "uz": "Qo'rg'oncha",
                        "ru": "Курганча",
                        "type": "31"
                    },
                    "1722204830": {
                        "en": "Machay",
                        "uz": "Machay",
                        "ru": "Мачай",
                        "type": "31"
                    },
                    "1722204832": {
                        "en": "Poyonqo'rg'on",
                        "uz": "Poyonqo'rg'on",
                        "ru": "Поенкургон",
                        "type": "31"
                    },
                    "1722204843": {
                        "en": "Chinorli",
                        "uz": "Chinorli",
                        "ru": "Чинорли",
                        "type": "31"
                    },
                    "1722204846": {
                        "en": "Ketmonchi",
                        "uz": "Ketmonchi",
                        "ru": "Кетмончи",
                        "type": "31"
                    }
                }
            },
            "1722207": {
                "en": "Muzrabot district",
                "uz": "Muzrabot tumani",
                "ru": "Музрабадский район",
                "type": "20",
                "settlements": {
                    "1722207551": {
                        "en": "Xalqobod",
                        "uz": "Xalqobod",
                        "ru": "Халкабад",
                        "type": "24"
                    },
                    "1722207553": {
                        "en": "Baxt",
                        "uz": "Baxt",
                        "ru": "Бахт",
                        "type": "24"
                    },
                    "1722207555": {
                        "en": "Baynalmilal",
                        "uz": "Baynalmilal",
                        "ru": "Байналмилал",
                        "type": "24"
                    },
                    "1722207557": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистан",
                        "type": "24"
                    },
                    "1722207559": {
                        "en": "Iftixor",
                        "uz": "Iftixor",
                        "ru": "Ифтихор",
                        "type": "24"
                    },
                    "1722207561": {
                        "en": "Qozoyoqli",
                        "uz": "Qozoyoqli",
                        "ru": "Казоекли",
                        "type": "24"
                    },
                    "1722207563": {
                        "en": "Oq oltin",
                        "uz": "Oq oltin",
                        "ru": "Ак алтин",
                        "type": "24"
                    },
                    "1722207565": {
                        "en": "Taskent",
                        "uz": "Taskent",
                        "ru": "Таскент",
                        "type": "24"
                    },
                    "1722207567": {
                        "en": "Ozod Vatan",
                        "uz": "Ozod Vatan",
                        "ru": "Озод Ватан",
                        "type": "24"
                    },
                    "1722207569": {
                        "en": "Chegarachi",
                        "uz": "Chegarachi",
                        "ru": "Чегарачи",
                        "type": "24"
                    },
                    "1722207811": {
                        "en": "Beshqo'ton",
                        "uz": "Beshqo'ton",
                        "ru": "Бешкутан",
                        "type": "31"
                    },
                    "1722207815": {
                        "en": "Boldir",
                        "uz": "Boldir",
                        "ru": "Больдыр",
                        "type": "31"
                    },
                    "1722207822": {
                        "en": "Sarhad",
                        "uz": "Sarhad",
                        "ru": "Сархад",
                        "type": "31"
                    },
                    "1722207830": {
                        "en": "Qorakamar",
                        "uz": "Qorakamar",
                        "ru": "Каракамар",
                        "type": "31"
                    },
                    "1722207833": {
                        "en": "Sharq yulduzi",
                        "uz": "Sharq yulduzi",
                        "ru": "Шарк юлдузи",
                        "type": "31"
                    },
                    "1722207844": {
                        "en": "Muzrabot",
                        "uz": "Muzrabot",
                        "ru": "Музрабад",
                        "type": "31"
                    },
                    "1722207847": {
                        "en": "Navbahor",
                        "uz": "Navbahor",
                        "ru": "Навбахор",
                        "type": "31"
                    },
                    "1722207849": {
                        "en": "Obodon",
                        "uz": "Obodon",
                        "ru": "Абадан",
                        "type": "31"
                    },
                    "1722207863": {
                        "en": "Sho'rob",
                        "uz": "Sho'rob",
                        "ru": "Шураб",
                        "type": "31"
                    }
                }
            },
            "1722210": {
                "en": "Denov district",
                "uz": "Denov tumani",
                "ru": "Денауский район",
                "type": "20",
                "settlements": {
                    "1722210501": {
                        "en": "Denov",
                        "uz": "Denov",
                        "ru": "Денау",
                        "type": "23"
                    },
                    "1722210554": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "24"
                    },
                    "1722210556": {
                        "en": "Yurchi",
                        "uz": "Yurchi",
                        "ru": "Юрчи",
                        "type": "24"
                    },
                    "1722210558": {
                        "en": "Qiziljar",
                        "uz": "Qiziljar",
                        "ru": "Кизилжар",
                        "type": "24"
                    },
                    "1722210562": {
                        "en": "Xolchayon",
                        "uz": "Xolchayon",
                        "ru": "Холчаен",
                        "type": "24"
                    },
                    "1722210564": {
                        "en": "Xitoyan",
                        "uz": "Xitoyan",
                        "ru": "Китоян",
                        "type": "24"
                    },
                    "1722210566": {
                        "en": "Paxtakurash",
                        "uz": "Paxtakurash",
                        "ru": "Пахтакураш",
                        "type": "24"
                    },
                    "1722210568": {
                        "en": "Namozgoh",
                        "uz": "Namozgoh",
                        "ru": "Намазгах",
                        "type": "24"
                    },
                    "1722210572": {
                        "en": "Jamatak",
                        "uz": "Jamatak",
                        "ru": "Джаматак",
                        "type": "24"
                    },
                    "1722210574": {
                        "en": "Yangi Hazorbog'",
                        "uz": "Yangi Hazorbog'",
                        "ru": "Янги Хазарбаг",
                        "type": "24"
                    },
                    "1722210576": {
                        "en": "Yangibog'",
                        "uz": "Yangibog'",
                        "ru": "Янгибаг",
                        "type": "24"
                    },
                    "1722210578": {
                        "en": "Dahana",
                        "uz": "Dahana",
                        "ru": "Дахана",
                        "type": "24"
                    },
                    "1722210582": {
                        "en": "Yangiobod",
                        "uz": "Yangiobod",
                        "ru": "Янгиабад",
                        "type": "24"
                    },
                    "1722210806": {
                        "en": "Anbarsoy",
                        "uz": "Anbarsoy",
                        "ru": "Анбарсай",
                        "type": "31"
                    },
                    "1722210823": {
                        "en": "Denov",
                        "uz": "Denov",
                        "ru": "Денау",
                        "type": "31"
                    },
                    "1722210830": {
                        "en": "Kenagas",
                        "uz": "Kenagas",
                        "ru": "Кенагас",
                        "type": "31"
                    },
                    "1722210834": {
                        "en": "Qiziljar",
                        "uz": "Qiziljar",
                        "ru": "Кызылжаp",
                        "type": "31"
                    },
                    "1722210838": {
                        "en": "Farg'ona",
                        "uz": "Farg'ona",
                        "ru": "Фергана",
                        "type": "31"
                    },
                    "1722210840": {
                        "en": "Tortuvli",
                        "uz": "Tortuvli",
                        "ru": "Тоpтувли",
                        "type": "31"
                    },
                    "1722210845": {
                        "en": "Pistamozor",
                        "uz": "Pistamozor",
                        "ru": "Пистамазар",
                        "type": "31"
                    },
                    "1722210850": {
                        "en": "Sina",
                        "uz": "Sina",
                        "ru": "Сина",
                        "type": "31"
                    },
                    "1722210864": {
                        "en": "Xayrabot",
                        "uz": "Xayrabot",
                        "ru": "Хайрабад",
                        "type": "31"
                    },
                    "1722210868": {
                        "en": "Hazarbog'",
                        "uz": "Hazarbog'",
                        "ru": "Хазарбаг",
                        "type": "31"
                    },
                    "1722210870": {
                        "en": "Xolchayon",
                        "uz": "Xolchayon",
                        "ru": "Халчиян",
                        "type": "31"
                    },
                    "1722210873": {
                        "en": "Yangibog'",
                        "uz": "Yangibog'",
                        "ru": "Янгибаг",
                        "type": "31"
                    },
                    "1722210875": {
                        "en": "Yangizamon",
                        "uz": "Yangizamon",
                        "ru": "Янгизамон",
                        "type": "31"
                    },
                    "1722210879": {
                        "en": "Yurchi",
                        "uz": "Yurchi",
                        "ru": "Юрчи",
                        "type": "31"
                    },
                    "1722210881": {
                        "en": "Yangiobod",
                        "uz": "Yangiobod",
                        "ru": "Янгиабад",
                        "type": "31"
                    },
                    "1722210883": {
                        "en": "Binokor",
                        "uz": "Binokor",
                        "ru": "Бинокоp",
                        "type": "31"
                    },
                    "1722210885": {
                        "en": "Dahana",
                        "uz": "Dahana",
                        "ru": "Дахана",
                        "type": "31"
                    }
                }
            },
            "1722212": {
                "en": "Jarqo'rg'on district",
                "uz": "Jarqo'rg'on tumani",
                "ru": "Джаркурганский район",
                "type": "20",
                "settlements": {
                    "1722212501": {
                        "en": "Jarqo'rg'on",
                        "uz": "Jarqo'rg'on",
                        "ru": "Джаркурган",
                        "type": "23"
                    },
                    "1722212554": {
                        "en": "Kakaydi",
                        "uz": "Kakaydi",
                        "ru": "Какайды",
                        "type": "24"
                    },
                    "1722212558": {
                        "en": "Minor",
                        "uz": "Minor",
                        "ru": "Минор",
                        "type": "24"
                    },
                    "1722212564": {
                        "en": "Qoraqursoq",
                        "uz": "Qoraqursoq",
                        "ru": "Каракурсак",
                        "type": "24"
                    },
                    "1722212568": {
                        "en": "Markaziy Surxon",
                        "uz": "Markaziy Surxon",
                        "ru": "Марказий Сурхан",
                        "type": "24"
                    },
                    "1722212574": {
                        "en": "Kafrun",
                        "uz": "Kafrun",
                        "ru": "Кофрун",
                        "type": "24"
                    },
                    "1722212811": {
                        "en": "Oqqo'rg'on",
                        "uz": "Oqqo'rg'on",
                        "ru": "Аккурган",
                        "type": "31"
                    },
                    "1722212833": {
                        "en": "Jarqo'rg'on",
                        "uz": "Jarqo'rg'on",
                        "ru": "Джаркурган",
                        "type": "31"
                    },
                    "1722212855": {
                        "en": "Dehqonobod",
                        "uz": "Dehqonobod",
                        "ru": "Дехканабад",
                        "type": "31"
                    },
                    "1722212866": {
                        "en": "Minor",
                        "uz": "Minor",
                        "ru": "Минор",
                        "type": "31"
                    },
                    "1722212877": {
                        "en": "Surxon",
                        "uz": "Surxon",
                        "ru": "Сурхан",
                        "type": "31"
                    },
                    "1722212880": {
                        "en": "Chorjo'y",
                        "uz": "Chorjo'y",
                        "ru": "Чаpджуй",
                        "type": "31"
                    },
                    "1722212889": {
                        "en": "Sharq Yulduzi",
                        "uz": "Sharq Yulduzi",
                        "ru": "Шарк-Юлдузи",
                        "type": "31"
                    }
                }
            },
            "1722214": {
                "en": "Qumqo'rg'on district",
                "uz": "Qumqo'rg'on tumani",
                "ru": "Кумкурганский район",
                "type": "20",
                "settlements": {
                    "1722214501": {
                        "en": "Qumqo'rg'on",
                        "uz": "Qumqo'rg'on",
                        "ru": "Кумкурган",
                        "type": "23"
                    },
                    "1722214570": {
                        "en": "Hurriyat",
                        "uz": "Hurriyat",
                        "ru": "Хуppият",
                        "type": "24"
                    },
                    "1722214572": {
                        "en": "Elbayon",
                        "uz": "Elbayon",
                        "ru": "Элбаен",
                        "type": "24"
                    },
                    "1722214574": {
                        "en": "Elobod",
                        "uz": "Elobod",
                        "ru": "Элобод",
                        "type": "24"
                    },
                    "1722214576": {
                        "en": "Azlarsoy",
                        "uz": "Azlarsoy",
                        "ru": "Азларсай",
                        "type": "24"
                    },
                    "1722214578": {
                        "en": "Bog'ora",
                        "uz": "Bog'ora",
                        "ru": "Богара",
                        "type": "24"
                    },
                    "1722214582": {
                        "en": "Oqsoy",
                        "uz": "Oqsoy",
                        "ru": "Аксай",
                        "type": "24"
                    },
                    "1722214584": {
                        "en": "Jiydali",
                        "uz": "Jiydali",
                        "ru": "Джийдали",
                        "type": "24"
                    },
                    "1722214586": {
                        "en": "Navbahor",
                        "uz": "Navbahor",
                        "ru": "Навбахор",
                        "type": "24"
                    },
                    "1722214588": {
                        "en": "Qarsoqli",
                        "uz": "Qarsoqli",
                        "ru": "Карсакли",
                        "type": "24"
                    },
                    "1722214592": {
                        "en": "Yangiyer",
                        "uz": "Yangiyer",
                        "ru": "Янгиер",
                        "type": "24"
                    },
                    "1722214594": {
                        "en": "Jaloir",
                        "uz": "Jaloir",
                        "ru": "Джалойир",
                        "type": "24"
                    },
                    "1722214803": {
                        "en": "Oqqapchig'ay",
                        "uz": "Oqqapchig'ay",
                        "ru": "Аккапчигай",
                        "type": "31"
                    },
                    "1722214810": {
                        "en": "Jaloir Qo'rg'oni",
                        "uz": "Jaloir Qo'rg'oni",
                        "ru": "Жалоир Кургони",
                        "type": "31"
                    },
                    "1722214815": {
                        "en": "Sheroziy",
                        "uz": "Sheroziy",
                        "ru": "Шерозий",
                        "type": "31"
                    },
                    "1722214818": {
                        "en": "Oqjar",
                        "uz": "Oqjar",
                        "ru": "Акжаp",
                        "type": "31"
                    },
                    "1722214820": {
                        "en": "Qumqo'rg'on",
                        "uz": "Qumqo'rg'on",
                        "ru": "Кумкурган",
                        "type": "31"
                    },
                    "1722214830": {
                        "en": "Yuqori Kakaydi",
                        "uz": "Yuqori Kakaydi",
                        "ru": "Юкары-Какайды",
                        "type": "31"
                    },
                    "1722214833": {
                        "en": "Ketmon",
                        "uz": "Ketmon",
                        "ru": "Кетман",
                        "type": "31"
                    },
                    "1722214836": {
                        "en": "Arslonboyli",
                        "uz": "Arslonboyli",
                        "ru": "Аpсланбайли",
                        "type": "31"
                    }
                }
            },
            "1722215": {
                "en": "Qiziriq district",
                "uz": "Qiziriq tumani",
                "ru": "Кизирикский район",
                "type": "20",
                "settlements": {
                    "1722215551": {
                        "en": "Sariq",
                        "uz": "Sariq",
                        "ru": "Сарик",
                        "type": "24"
                    },
                    "1722215553": {
                        "en": "Kunchiqish",
                        "uz": "Kunchiqish",
                        "ru": "Кунчикиш",
                        "type": "24"
                    },
                    "1722215556": {
                        "en": "Yangi hayot",
                        "uz": "Yangi hayot",
                        "ru": "Янги хает",
                        "type": "24"
                    },
                    "1722215559": {
                        "en": "Karmaki",
                        "uz": "Karmaki",
                        "ru": "Кармаки",
                        "type": "24"
                    },
                    "1722215563": {
                        "en": "Istara",
                        "uz": "Istara",
                        "ru": "Истара",
                        "type": "24"
                    },
                    "1722215805": {
                        "en": "Zarkamar",
                        "uz": "Zarkamar",
                        "ru": "Заркамар",
                        "type": "31"
                    },
                    "1722215841": {
                        "en": "Olmazor",
                        "uz": "Olmazor",
                        "ru": "Олмазор",
                        "type": "31"
                    },
                    "1722215843": {
                        "en": "Bandixon",
                        "uz": "Bandixon",
                        "ru": "Бандихон",
                        "type": "31"
                    },
                    "1722215845": {
                        "en": "Qiziriq",
                        "uz": "Qiziriq",
                        "ru": "Кизирик",
                        "type": "31"
                    },
                    "1722215847": {
                        "en": "Kirshak",
                        "uz": "Kirshak",
                        "ru": "Киршак",
                        "type": "31"
                    },
                    "1722215849": {
                        "en": "Chorvador",
                        "uz": "Chorvador",
                        "ru": "Чорвадор",
                        "type": "31"
                    },
                    "1722215860": {
                        "en": "Paxtakor",
                        "uz": "Paxtakor",
                        "ru": "Пахтакор",
                        "type": "31"
                    },
                    "1722215865": {
                        "en": "Sharq Istara",
                        "uz": "Sharq Istara",
                        "ru": "Шарк Истара",
                        "type": "31"
                    },
                    "1722215867": {
                        "en": "Yangi yo'l",
                        "uz": "Yangi yo'l",
                        "ru": "Янгиюль",
                        "type": "31"
                    },
                    "1722215870": {
                        "en": "Mehnatobod",
                        "uz": "Mehnatobod",
                        "ru": "Мехнатабад",
                        "type": "31"
                    }
                }
            },
            "1722217": {
                "en": "Sariosiyo district",
                "uz": "Sariosiyo tumani",
                "ru": "Сариасийский район",
                "type": "20",
                "settlements": {
                    "1722217505": {
                        "en": "Sharg'un",
                        "uz": "Sharg'un",
                        "ru": "Шаргунь",
                        "type": "23"
                    },
                    "1722217551": {
                        "en": "Sariosiyo",
                        "uz": "Sariosiyo",
                        "ru": "Сариасия",
                        "type": "24"
                    },
                    "1722217554": {
                        "en": "Yangihayot",
                        "uz": "Yangihayot",
                        "ru": "Янгихает",
                        "type": "24"
                    },
                    "1722217558": {
                        "en": "Tortuli",
                        "uz": "Tortuli",
                        "ru": "Тартули",
                        "type": "24"
                    },
                    "1722217564": {
                        "en": "Bo'yropo'sht",
                        "uz": "Bo'yropo'sht",
                        "ru": "Буйрапушт",
                        "type": "24"
                    },
                    "1722217812": {
                        "en": "Dashnobod",
                        "uz": "Dashnobod",
                        "ru": "Дашнабад",
                        "type": "31"
                    },
                    "1722217826": {
                        "en": "Navro'z",
                        "uz": "Navro'z",
                        "ru": "Навруз",
                        "type": "31"
                    },
                    "1722217828": {
                        "en": "Buyuk kelajak",
                        "uz": "Buyuk kelajak",
                        "ru": "Буюк келажак",
                        "type": "31"
                    },
                    "1722217832": {
                        "en": "Sangardak",
                        "uz": "Sangardak",
                        "ru": "Сангардак",
                        "type": "31"
                    },
                    "1722217835": {
                        "en": "Bog'i iram",
                        "uz": "Bog'i iram",
                        "ru": "Боги ирам",
                        "type": "31"
                    },
                    "1722217846": {
                        "en": "So'fiyon",
                        "uz": "So'fiyon",
                        "ru": "Суфиян",
                        "type": "31"
                    },
                    "1722217851": {
                        "en": "Toqchiyon",
                        "uz": "Toqchiyon",
                        "ru": "Такчиян",
                        "type": "31"
                    },
                    "1722217862": {
                        "en": "O'zbekiston",
                        "uz": "O'zbekiston",
                        "ru": "Узбекистан",
                        "type": "31"
                    },
                    "1722217880": {
                        "en": "Xufar",
                        "uz": "Xufar",
                        "ru": "Хуфар",
                        "type": "31"
                    }
                }
            },
            "1722220": {
                "en": "Termiz district",
                "uz": "Termiz tumani",
                "ru": "Термезский район",
                "type": "20",
                "settlements": {
                    "1722220551": {
                        "en": "Uchqizil",
                        "uz": "Uchqizil",
                        "ru": "Учкизил",
                        "type": "24"
                    },
                    "1722220553": {
                        "en": "Limonchi",
                        "uz": "Limonchi",
                        "ru": "Лимончи",
                        "type": "24"
                    },
                    "1722220555": {
                        "en": "Tajribakor",
                        "uz": "Tajribakor",
                        "ru": "Тажрибакор",
                        "type": "24"
                    },
                    "1722220557": {
                        "en": "Namuna",
                        "uz": "Namuna",
                        "ru": "Намуна",
                        "type": "24"
                    },
                    "1722220559": {
                        "en": "At-Termiziy",
                        "uz": "At-Termiziy",
                        "ru": "Ат-Термизий",
                        "type": "24"
                    },
                    "1722220561": {
                        "en": "Mustaqillik",
                        "uz": "Mustaqillik",
                        "ru": "Мустакиллик",
                        "type": "24"
                    },
                    "1722220563": {
                        "en": "Pattakesar",
                        "uz": "Pattakesar",
                        "ru": "Паттакесар",
                        "type": "24"
                    },
                    "1722220565": {
                        "en": "Chegarachi",
                        "uz": "Chegarachi",
                        "ru": "Чегарачи",
                        "type": "24"
                    },
                    "1722220567": {
                        "en": "Qizilboy",
                        "uz": "Qizilboy",
                        "ru": "Кизилбай",
                        "type": "24"
                    },
                    "1722220844": {
                        "en": "Mehnatobod",
                        "uz": "Mehnatobod",
                        "ru": "Мехнатобод",
                        "type": "31"
                    },
                    "1722220855": {
                        "en": "Paxtaobod",
                        "uz": "Paxtaobod",
                        "ru": "Пахтаабад",
                        "type": "31"
                    },
                    "1722220870": {
                        "en": "Uchqizil",
                        "uz": "Uchqizil",
                        "ru": "Учкизил",
                        "type": "31"
                    },
                    "1722220888": {
                        "en": "Yangiariq",
                        "uz": "Yangiariq",
                        "ru": "Янгиарык",
                        "type": "31"
                    },
                    "1722220895": {
                        "en": "Kokildorota",
                        "uz": "Kokildorota",
                        "ru": "Кокилдорота",
                        "type": "31"
                    }
                }
            },
            "1722221": {
                "en": "Uzun district",
                "uz": "Uzun tumani",
                "ru": "Узунский район",
                "type": "20",
                "settlements": {
                    "1722221551": {
                        "en": "Uzun",
                        "uz": "Uzun",
                        "ru": "Узун",
                        "type": "24"
                    },
                    "1722221553": {
                        "en": "Chinor",
                        "uz": "Chinor",
                        "ru": "Чинар",
                        "type": "24"
                    },
                    "1722221556": {
                        "en": "Ulanqul",
                        "uz": "Ulanqul",
                        "ru": "Уланкул",
                        "type": "24"
                    },
                    "1722221559": {
                        "en": "Qarashiq",
                        "uz": "Qarashiq",
                        "ru": "Карашик",
                        "type": "24"
                    },
                    "1722221563": {
                        "en": "Yangi kuch",
                        "uz": "Yangi kuch",
                        "ru": "Янги куч",
                        "type": "24"
                    },
                    "1722221566": {
                        "en": "Jonchekka",
                        "uz": "Jonchekka",
                        "ru": "Джанчекка",
                        "type": "24"
                    },
                    "1722221569": {
                        "en": "Malandiyon",
                        "uz": "Malandiyon",
                        "ru": "Маландиян",
                        "type": "24"
                    },
                    "1722221573": {
                        "en": "Mehnat",
                        "uz": "Mehnat",
                        "ru": "Мехнат",
                        "type": "24"
                    },
                    "1722221576": {
                        "en": "Yangi ro'zg'or",
                        "uz": "Yangi ro'zg'or",
                        "ru": "Янги рузгор",
                        "type": "24"
                    },
                    "1722221806": {
                        "en": "Bobotog'",
                        "uz": "Bobotog'",
                        "ru": "Бабатаг",
                        "type": "31"
                    },
                    "1722221816": {
                        "en": "Jonchekka",
                        "uz": "Jonchekka",
                        "ru": "Джанчека",
                        "type": "31"
                    },
                    "1722221824": {
                        "en": "Fayzova",
                        "uz": "Fayzova",
                        "ru": "им. Файзова",
                        "type": "31"
                    },
                    "1722221856": {
                        "en": "Telpakchinor",
                        "uz": "Telpakchinor",
                        "ru": "Тельпакчинар",
                        "type": "31"
                    },
                    "1722221868": {
                        "en": "Uzun",
                        "uz": "Uzun",
                        "ru": "Узун",
                        "type": "31"
                    },
                    "1722221875": {
                        "en": "Oq Ostona",
                        "uz": "Oq Ostona",
                        "ru": "Акастана",
                        "type": "31"
                    },
                    "1722221880": {
                        "en": "Xonjiza",
                        "uz": "Xonjiza",
                        "ru": "Хондиза",
                        "type": "31"
                    }
                }
            },
            "1722223": {
                "en": "Sherobod district",
                "uz": "Sherobod tumani",
                "ru": "Шерабадский район",
                "type": "20",
                "settlements": {
                    "1722223501": {
                        "en": "Sherobod",
                        "uz": "Sherobod",
                        "ru": "Шерабад",
                        "type": "23"
                    },
                    "1722223552": {
                        "en": "Zarabog'",
                        "uz": "Zarabog'",
                        "ru": "Зарабаг",
                        "type": "24"
                    },
                    "1722223554": {
                        "en": "Kilkon",
                        "uz": "Kilkon",
                        "ru": "Килкон",
                        "type": "24"
                    },
                    "1722223556": {
                        "en": "Navbog'",
                        "uz": "Navbog'",
                        "ru": "Навбаг",
                        "type": "24"
                    },
                    "1722223558": {
                        "en": "Paxtaobod",
                        "uz": "Paxtaobod",
                        "ru": "Пахтаабад",
                        "type": "24"
                    },
                    "1722223562": {
                        "en": "Sariqamish",
                        "uz": "Sariqamish",
                        "ru": "Сарикамиш",
                        "type": "24"
                    },
                    "1722223564": {
                        "en": "Cho'yinchi",
                        "uz": "Cho'yinchi",
                        "ru": "Чуйинчи",
                        "type": "24"
                    },
                    "1722223566": {
                        "en": "Yangiariq",
                        "uz": "Yangiariq",
                        "ru": "Янги арик",
                        "type": "24"
                    },
                    "1722223810": {
                        "en": "Oqqo'rg'on",
                        "uz": "Oqqo'rg'on",
                        "ru": "Аккурган",
                        "type": "31"
                    },
                    "1722223822": {
                        "en": "Ko'hitang",
                        "uz": "Ko'hitang",
                        "ru": "Кухитанг",
                        "type": "31"
                    },
                    "1722223833": {
                        "en": "Sariqamish",
                        "uz": "Sariqamish",
                        "ru": "Саpикамиш",
                        "type": "31"
                    },
                    "1722223854": {
                        "en": "Seplon",
                        "uz": "Seplon",
                        "ru": "Сеплан",
                        "type": "31"
                    },
                    "1722223856": {
                        "en": "Talloshqon",
                        "uz": "Talloshqon",
                        "ru": "Талашкан",
                        "type": "31"
                    },
                    "1722223858": {
                        "en": "Rabatak",
                        "uz": "Rabatak",
                        "ru": "Рабатаг",
                        "type": "31"
                    },
                    "1722223865": {
                        "en": "Yangiturmush",
                        "uz": "Yangiturmush",
                        "ru": "Янгитурмуш",
                        "type": "31"
                    },
                    "1722223867": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустансай",
                        "type": "31"
                    },
                    "1722223870": {
                        "en": "Chinobod",
                        "uz": "Chinobod",
                        "ru": "Чинабад",
                        "type": "31"
                    }
                }
            },
            "1722226": {
                "en": "Sho'rchi district",
                "uz": "Sho'rchi tumani",
                "ru": "Шурчинский район",
                "type": "20",
                "settlements": {
                    "1722226501": {
                        "en": "Sho'rchi",
                        "uz": "Sho'rchi",
                        "ru": "Шурчи",
                        "type": "23"
                    },
                    "1722226554": {
                        "en": "Elbayon",
                        "uz": "Elbayon",
                        "ru": "Элбаен",
                        "type": "24"
                    },
                    "1722226558": {
                        "en": "To'la",
                        "uz": "To'la",
                        "ru": "Тула",
                        "type": "24"
                    },
                    "1722226562": {
                        "en": "Yalti",
                        "uz": "Yalti",
                        "ru": "Ялти",
                        "type": "24"
                    },
                    "1722226564": {
                        "en": "Xushchekka",
                        "uz": "Xushchekka",
                        "ru": "Хушчека",
                        "type": "24"
                    },
                    "1722226566": {
                        "en": "Qo'shtegirmon",
                        "uz": "Qo'shtegirmon",
                        "ru": "Куштегирмон",
                        "type": "24"
                    },
                    "1722226568": {
                        "en": "Kattasovur",
                        "uz": "Kattasovur",
                        "ru": "Катта совур",
                        "type": "24"
                    },
                    "1722226572": {
                        "en": "Karvon",
                        "uz": "Karvon",
                        "ru": "Карвон",
                        "type": "24"
                    },
                    "1722226574": {
                        "en": "G'armaqo'rg'on",
                        "uz": "G'armaqo'rg'on",
                        "ru": "Гармакурган",
                        "type": "24"
                    },
                    "1722226576": {
                        "en": "Jarqishloq",
                        "uz": "Jarqishloq",
                        "ru": "Джаркишлок",
                        "type": "24"
                    },
                    "1722226578": {
                        "en": "Joyilma",
                        "uz": "Joyilma",
                        "ru": "Джайилма",
                        "type": "24"
                    },
                    "1722226816": {
                        "en": "Qo'ldosh",
                        "uz": "Qo'ldosh",
                        "ru": "Кулдош",
                        "type": "31"
                    },
                    "1722226820": {
                        "en": "Alpomish",
                        "uz": "Alpomish",
                        "ru": "Алпомиш",
                        "type": "31"
                    },
                    "1722226824": {
                        "en": "Baxtlitepa",
                        "uz": "Baxtlitepa",
                        "ru": "Бахтлитепа",
                        "type": "31"
                    },
                    "1722226844": {
                        "en": "Savur",
                        "uz": "Savur",
                        "ru": "Совур",
                        "type": "31"
                    },
                    "1722226852": {
                        "en": "Elobod",
                        "uz": "Elobod",
                        "ru": "Элабад",
                        "type": "31"
                    },
                    "1722226863": {
                        "en": "Sohibkor",
                        "uz": "Sohibkor",
                        "ru": "Сахибкор",
                        "type": "31"
                    },
                    "1722226866": {
                        "en": "Dalvarzin",
                        "uz": "Dalvarzin",
                        "ru": "Дальверзин",
                        "type": "31"
                    },
                    "1722226869": {
                        "en": "Jaloir",
                        "uz": "Jaloir",
                        "ru": "Джалаир",
                        "type": "31"
                    },
                    "1722226872": {
                        "en": "Sho'rchi",
                        "uz": "Sho'rchi",
                        "ru": "Шурчи",
                        "type": "31"
                    },
                    "1722226882": {
                        "en": "Yangibozor",
                        "uz": "Yangibozor",
                        "ru": "Янгибазар",
                        "type": "31"
                    }
                }
            },
            "1722401": {
                "en": "Termiz",
                "uz": "Termiz",
                "ru": "Термез",
                "type": "21"
            }
        }
    },
    "1724": {
        "en": "Syrdarya region",
        "uz": "Sirdaryo viloyati",
        "ru": "Сырдарьинская область",
        "districts": {
            "1724206": {
                "en": "Oqoltin district",
                "uz": "Oqoltin tumani",
                "ru": "Акалтынский район",
                "type": "20",
                "settlements": {
                    "1724206551": {
                        "en": "Sardoba",
                        "uz": "Sardoba",
                        "ru": "Сардоба",
                        "type": "24"
                    },
                    "1724206552": {
                        "en": "Farg'ona",
                        "uz": "Farg'ona",
                        "ru": "Фергана",
                        "type": "24"
                    },
                    "1724206554": {
                        "en": "Andijon",
                        "uz": "Andijon",
                        "ru": "Андижон",
                        "type": "24"
                    },
                    "1724206814": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустан",
                        "type": "31"
                    },
                    "1724206824": {
                        "en": "Ahillik",
                        "uz": "Ahillik",
                        "ru": "Ахиллик",
                        "type": "31"
                    },
                    "1724206850": {
                        "en": "Shodlik",
                        "uz": "Shodlik",
                        "ru": "Шадлик",
                        "type": "31"
                    }
                }
            },
            "1724212": {
                "en": "Boyovut district",
                "uz": "Boyovut tumani",
                "ru": "Баяутский район",
                "type": "20",
                "settlements": {
                    "1724212551": {
                        "en": "Boyovut",
                        "uz": "Boyovut",
                        "ru": "Баяут",
                        "type": "24"
                    },
                    "1724212552": {
                        "en": "Markaz",
                        "uz": "Markaz",
                        "ru": "Марказ",
                        "type": "24"
                    },
                    "1724212553": {
                        "en": "Bekat",
                        "uz": "Bekat",
                        "ru": "Бекат",
                        "type": "24"
                    },
                    "1724212554": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "24"
                    },
                    "1724212811": {
                        "en": "Boyovut",
                        "uz": "Boyovut",
                        "ru": "Баяут",
                        "type": "31"
                    },
                    "1724212818": {
                        "en": "G'allakor",
                        "uz": "G'allakor",
                        "ru": "Галлакор",
                        "type": "31"
                    },
                    "1724212830": {
                        "en": "Darvazakir",
                        "uz": "Darvazakir",
                        "ru": "Дарбазакыр",
                        "type": "31"
                    },
                    "1724212834": {
                        "en": "Dehqonobod",
                        "uz": "Dehqonobod",
                        "ru": "Дехканабад",
                        "type": "31"
                    },
                    "1724212847": {
                        "en": "Olmazor",
                        "uz": "Olmazor",
                        "ru": "Алмазар",
                        "type": "31"
                    },
                    "1724212850": {
                        "en": "Mingchinor",
                        "uz": "Mingchinor",
                        "ru": "Мингчинар",
                        "type": "31"
                    },
                    "1724212855": {
                        "en": "Buyuk yurt",
                        "uz": "Buyuk yurt",
                        "ru": "Буюк юрт",
                        "type": "31"
                    },
                    "1724212861": {
                        "en": "Tabarruk",
                        "uz": "Tabarruk",
                        "ru": "Табаррук",
                        "type": "31"
                    },
                    "1724212865": {
                        "en": "Madaniyat",
                        "uz": "Madaniyat",
                        "ru": "Маданият",
                        "type": "31"
                    },
                    "1724212868": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "31"
                    },
                    "1724212875": {
                        "en": "Laylakko'l",
                        "uz": "Laylakko'l",
                        "ru": "Лайлакуль",
                        "type": "31"
                    },
                    "1724212880": {
                        "en": "Tinchlik",
                        "uz": "Tinchlik",
                        "ru": "Тинчлик",
                        "type": "31"
                    }
                }
            },
            "1724216": {
                "en": "Sayxunobod district",
                "uz": "Sayxunobod tumani",
                "ru": "Сайхунабадский район",
                "type": "20",
                "settlements": {
                    "1724216551": {
                        "en": "Sayxun",
                        "uz": "Sayxun",
                        "ru": "Сайхун",
                        "type": "24"
                    },
                    "1724216553": {
                        "en": "Sohil",
                        "uz": "Sohil",
                        "ru": "Сохил",
                        "type": "24"
                    },
                    "1724216555": {
                        "en": "Sho'ro'zak",
                        "uz": "Sho'ro'zak",
                        "ru": "Шурузак",
                        "type": "24"
                    },
                    "1724216557": {
                        "en": "Paxtakon",
                        "uz": "Paxtakon",
                        "ru": "Пахтакон",
                        "type": "24"
                    },
                    "1724216811": {
                        "en": "Ittifak",
                        "uz": "Ittifak",
                        "ru": "Иттифак",
                        "type": "31"
                    },
                    "1724216822": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистан",
                        "type": "31"
                    },
                    "1724216827": {
                        "en": "Nurota",
                        "uz": "Nurota",
                        "ru": "Нурата",
                        "type": "31"
                    },
                    "1724216830": {
                        "en": "O'zbekiston",
                        "uz": "O'zbekiston",
                        "ru": "Узбекистон",
                        "type": "31"
                    },
                    "1724216833": {
                        "en": "Istiqlol",
                        "uz": "Istiqlol",
                        "ru": "Истиклол",
                        "type": "31"
                    },
                    "1724216844": {
                        "en": "Sho'ro'zak",
                        "uz": "Sho'ro'zak",
                        "ru": "Шурузяк",
                        "type": "31"
                    },
                    "1724216855": {
                        "en": "Yangi hayot",
                        "uz": "Yangi hayot",
                        "ru": "Янгихаят",
                        "type": "31"
                    }
                }
            },
            "1724220": {
                "en": "Guliston district",
                "uz": "Guliston tumani",
                "ru": "Гулистанский район",
                "type": "20",
                "settlements": {
                    "1724220551": {
                        "en": "Dehqonobod",
                        "uz": "Dehqonobod",
                        "ru": "Дехканабад",
                        "type": "24"
                    },
                    "1724220552": {
                        "en": "Hulkar",
                        "uz": "Hulkar",
                        "ru": "Хулкар",
                        "type": "24"
                    },
                    "1724220553": {
                        "en": "Beshbuloq",
                        "uz": "Beshbuloq",
                        "ru": "Бешбулак",
                        "type": "24"
                    },
                    "1724220554": {
                        "en": "Ulug'bek",
                        "uz": "Ulug'bek",
                        "ru": "Улугбек",
                        "type": "24"
                    },
                    "1724220556": {
                        "en": "Xalqako'l",
                        "uz": "Xalqako'l",
                        "ru": "Халкакул",
                        "type": "24"
                    },
                    "1724220805": {
                        "en": "Oltintepa",
                        "uz": "Oltintepa",
                        "ru": "Алтынтепа",
                        "type": "31"
                    },
                    "1724220816": {
                        "en": "Soyibobod",
                        "uz": "Soyibobod",
                        "ru": "Саибобод",
                        "type": "31"
                    },
                    "1724220820": {
                        "en": "Xumo",
                        "uz": "Xumo",
                        "ru": "Хумо",
                        "type": "31"
                    },
                    "1724220823": {
                        "en": "Kunchi",
                        "uz": "Kunchi",
                        "ru": "Кунчи",
                        "type": "31"
                    },
                    "1724220827": {
                        "en": "Beshbuloq",
                        "uz": "Beshbuloq",
                        "ru": "Бешбулак",
                        "type": "31"
                    },
                    "1724220835": {
                        "en": "Chortoq",
                        "uz": "Chortoq",
                        "ru": "Чоpток",
                        "type": "31"
                    },
                    "1724220846": {
                        "en": "Oltin O'rda",
                        "uz": "Oltin O'rda",
                        "ru": "Олтин Уpда",
                        "type": "31"
                    },
                    "1724220879": {
                        "en": "Zarbdor",
                        "uz": "Zarbdor",
                        "ru": "Зарбдар",
                        "type": "31"
                    },
                    "1724220882": {
                        "en": "Soxilobod",
                        "uz": "Soxilobod",
                        "ru": "Сахилабад",
                        "type": "31"
                    }
                }
            },
            "1724226": {
                "en": "Sardoba district",
                "uz": "Sardoba tumani",
                "ru": "Сардобский район",
                "type": "20",
                "settlements": {
                    "1724226551": {
                        "en": "Paxtaobod",
                        "uz": "Paxtaobod",
                        "ru": "Пахтаабад",
                        "type": "24"
                    },
                    "1724226811": {
                        "en": "Cho'lquvar",
                        "uz": "Cho'lquvar",
                        "ru": "Чулкуваp",
                        "type": "31"
                    },
                    "1724226822": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистон",
                        "type": "31"
                    },
                    "1724226833": {
                        "en": "Yangiqishloq",
                        "uz": "Yangiqishloq",
                        "ru": "Янгикишлак",
                        "type": "31"
                    },
                    "1724226844": {
                        "en": "Gulzor",
                        "uz": "Gulzor",
                        "ru": "Гульзар",
                        "type": "31"
                    },
                    "1724226855": {
                        "en": "Yangiobod",
                        "uz": "Yangiobod",
                        "ru": "Янгиабад",
                        "type": "31"
                    },
                    "1724226865": {
                        "en": "Qo'rg'ontepa",
                        "uz": "Qo'rg'ontepa",
                        "ru": "Куpгантепа",
                        "type": "31"
                    }
                }
            },
            "1724228": {
                "en": "Mirzaobod district",
                "uz": "Mirzaobod tumani",
                "ru": "Мирзаабадский район",
                "type": "20",
                "settlements": {
                    "1724228551": {
                        "en": "Navro'z",
                        "uz": "Navro'z",
                        "ru": "Навруз",
                        "type": "24"
                    },
                    "1724228552": {
                        "en": "Oqoltin",
                        "uz": "Oqoltin",
                        "ru": "Акалтин",
                        "type": "24"
                    },
                    "1724228805": {
                        "en": "Bahoriston",
                        "uz": "Bahoriston",
                        "ru": "Бахористан",
                        "type": "31"
                    },
                    "1724228818": {
                        "en": "Oqoltin",
                        "uz": "Oqoltin",
                        "ru": "Акалтын",
                        "type": "31"
                    },
                    "1724228830": {
                        "en": "Mehnatobod",
                        "uz": "Mehnatobod",
                        "ru": "Мехнатабад",
                        "type": "31"
                    },
                    "1724228832": {
                        "en": "Mirzacho'l",
                        "uz": "Mirzacho'l",
                        "ru": "Мирзачуль",
                        "type": "31"
                    },
                    "1724228835": {
                        "en": "Navbahor",
                        "uz": "Navbahor",
                        "ru": "Навбахор",
                        "type": "31"
                    },
                    "1724228838": {
                        "en": "Toshkent",
                        "uz": "Toshkent",
                        "ru": "Ташкент",
                        "type": "31"
                    },
                    "1724228845": {
                        "en": "Birlashgan",
                        "uz": "Birlashgan",
                        "ru": "Биpлашган",
                        "type": "31"
                    },
                    "1724228860": {
                        "en": "Nurafshon",
                        "uz": "Nurafshon",
                        "ru": "Нуpафшан",
                        "type": "31"
                    },
                    "1724228869": {
                        "en": "Yo'ldoshobod",
                        "uz": "Yo'ldoshobod",
                        "ru": "Юлдашабад",
                        "type": "31"
                    }
                }
            },
            "1724231": {
                "en": "Sirdaryo district",
                "uz": "Sirdaryo tumani",
                "ru": "Сырдарьинский район",
                "type": "20",
                "settlements": {
                    "1724231501": {
                        "en": "Sirdaryo",
                        "uz": "Sirdaryo",
                        "ru": "Сыpдаpья",
                        "type": "23"
                    },
                    "1724231503": {
                        "en": "Baxt",
                        "uz": "Baxt",
                        "ru": "Бахт",
                        "type": "23"
                    },
                    "1724231552": {
                        "en": "Quyosh",
                        "uz": "Quyosh",
                        "ru": "Куеш",
                        "type": "24"
                    },
                    "1724231553": {
                        "en": "Malik",
                        "uz": "Malik",
                        "ru": "Малек",
                        "type": "24"
                    },
                    "1724231554": {
                        "en": "Ziyokor",
                        "uz": "Ziyokor",
                        "ru": "Зиекор",
                        "type": "24"
                    },
                    "1724231555": {
                        "en": "J.Mamanov",
                        "uz": "J.Mamanov",
                        "ru": "Дж.Маманов",
                        "type": "24"
                    },
                    "1724231811": {
                        "en": "Xaqiqat",
                        "uz": "Xaqiqat",
                        "ru": "Хакикат",
                        "type": "31"
                    },
                    "1724231822": {
                        "en": "Turon",
                        "uz": "Turon",
                        "ru": "Туpон",
                        "type": "31"
                    },
                    "1724231827": {
                        "en": "Xalqobod",
                        "uz": "Xalqobod",
                        "ru": "Халкабад",
                        "type": "31"
                    },
                    "1724231833": {
                        "en": "Malik",
                        "uz": "Malik",
                        "ru": "Малик",
                        "type": "31"
                    },
                    "1724231844": {
                        "en": "Oydin",
                        "uz": "Oydin",
                        "ru": "Ойдин",
                        "type": "31"
                    },
                    "1724231848": {
                        "en": "Paxtazor",
                        "uz": "Paxtazor",
                        "ru": "Пахтазор",
                        "type": "31"
                    },
                    "1724231855": {
                        "en": "Sirdaryo",
                        "uz": "Sirdaryo",
                        "ru": "Сырдарья",
                        "type": "31"
                    },
                    "1724231866": {
                        "en": "Cho'lto'qay",
                        "uz": "Cho'lto'qay",
                        "ru": "Чултукай",
                        "type": "31"
                    },
                    "1724231870": {
                        "en": "Sholikor",
                        "uz": "Sholikor",
                        "ru": "Шаликор",
                        "type": "31"
                    }
                }
            },
            "1724235": {
                "en": "Xovos district",
                "uz": "Xovos tumani",
                "ru": "Хавасский район",
                "type": "20",
                "settlements": {
                    "1724235551": {
                        "en": "Xovos",
                        "uz": "Xovos",
                        "ru": "Хавас",
                        "type": "24"
                    },
                    "1724235553": {
                        "en": "Gulbahor",
                        "uz": "Gulbahor",
                        "ru": "Гулбахор",
                        "type": "24"
                    },
                    "1724235805": {
                        "en": "Binokor",
                        "uz": "Binokor",
                        "ru": "Бинокор",
                        "type": "31"
                    },
                    "1724235808": {
                        "en": "Gulbahor",
                        "uz": "Gulbahor",
                        "ru": "Гульбахор",
                        "type": "31"
                    },
                    "1724235813": {
                        "en": "Zafarobod",
                        "uz": "Zafarobod",
                        "ru": "Зафарабад",
                        "type": "31"
                    },
                    "1724235817": {
                        "en": "Paxtakor",
                        "uz": "Paxtakor",
                        "ru": "Пахтакор",
                        "type": "31"
                    },
                    "1724235820": {
                        "en": "Soxibkor",
                        "uz": "Soxibkor",
                        "ru": "Сахибкор",
                        "type": "31"
                    },
                    "1724235821": {
                        "en": "Turkiston",
                        "uz": "Turkiston",
                        "ru": "Туpкистан",
                        "type": "31"
                    },
                    "1724235822": {
                        "en": "Farxod",
                        "uz": "Farxod",
                        "ru": "Фархад",
                        "type": "31"
                    },
                    "1724235835": {
                        "en": "Xovotog'",
                        "uz": "Xovotog'",
                        "ru": "Хаватаг",
                        "type": "31"
                    },
                    "1724235837": {
                        "en": "Xusnobod",
                        "uz": "Xusnobod",
                        "ru": "Хуснабад",
                        "type": "31"
                    },
                    "1724235839": {
                        "en": "Chamanzor",
                        "uz": "Chamanzor",
                        "ru": "Чаманзар",
                        "type": "31"
                    },
                    "1724235843": {
                        "en": "Qahramon",
                        "uz": "Qahramon",
                        "ru": "Кахрамон",
                        "type": "31"
                    }
                }
            },
            "1724401": {
                "en": "Guliston",
                "uz": "Guliston",
                "ru": "Гулистан",
                "type": "21",
                "settlements": {
                    "1724401807": {
                        "en": "Ulug'obod",
                        "uz": "Ulug'obod",
                        "ru": "Улугабад",
                        "type": "31"
                    },
                    "1724401810": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "31"
                    },
                    "1724401815": {
                        "en": "Bahor",
                        "uz": "Bahor",
                        "ru": "Бахор",
                        "type": "31"
                    }
                }
            },
            "1724410": {
                "en": "Shirin",
                "uz": "Shirin",
                "ru": "Шиpин",
                "type": "21"
            },
            "1724413": {
                "en": "Yangiyer",
                "uz": "Yangiyer",
                "ru": "Янгиеp",
                "type": "21"
            }
        }
    },
    "1726": {
        "en": "Tashkent city",
        "uz": "Toshkent shahri",
        "ru": "город Ташкент",
        "districts": {
            "1726262": {
                "en": "Uchtepa district",
                "uz": "Uchtepa tumani",
                "ru": "Учтепинский район",
                "type": "22"
            },
            "1726264": {
                "en": "Bektemir district",
                "uz": "Bektemir tumani",
                "ru": "Бектемирский район",
                "type": "22"
            },
            "1726266": {
                "en": "Yunusobod district",
                "uz": "Yunusobod tumani",
                "ru": "Юнусабадский район",
                "type": "22"
            },
            "1726269": {
                "en": "Mirzo Ulug'bek district",
                "uz": "Mirzo Ulug'bek tumani",
                "ru": "Мирзо-Улугбекский район",
                "type": "22",
                "settlements": {
                    "1726269558": {
                        "en": "Ulug'bek",
                        "uz": "Ulug'bek",
                        "ru": "Улугбек",
                        "type": "24"
                    }
                }
            },
            "1726273": {
                "en": "Mirobod district",
                "uz": "Mirobod tumani",
                "ru": "Мирабадский район",
                "type": "22"
            },
            "1726277": {
                "en": "Shayxontoxur district",
                "uz": "Shayxontoxur tumani",
                "ru": "Шайхантахурский район",
                "type": "22"
            },
            "1726280": {
                "en": "Olmazor district",
                "uz": "Olmazor tumani",
                "ru": "Алмазарский район",
                "type": "22"
            },
            "1726283": {
                "en": "Sirg'ali district",
                "uz": "Sirg'ali tumani",
                "ru": "Сергелийский район",
                "type": "22"
            },
            "1726287": {
                "en": "Yakkasaroy district",
                "uz": "Yakkasaroy tumani",
                "ru": "Яккасарайский район",
                "type": "22"
            },
            "1726290": {
                "en": "Yashnobod district",
                "uz": "Yashnobod tumani",
                "ru": "Яшнободский район",
                "type": "22"
            },
            "1726292": {
                "en": "Yangihayot district",
                "uz": "Yangihayot tumani",
                "ru": "Янгихаётский район",
                "type": "22"
            },
            "1726294": {
                "en": "Chilonzor district",
                "uz": "Chilonzor tumani",
                "ru": "Чиланзарский район",
                "type": "22"
            }
        }
    },
    "1727": {
        "en": "Tashkent region",
        "uz": "Toshkent viloyati",
        "ru": "Ташкентская область",
        "districts": {
            "1727206": {
                "en": "Oqqo'rg'on district",
                "uz": "Oqqo'rg'on tumani",
                "ru": "Аккурганский район",
                "type": "20",
                "settlements": {
                    "1727206501": {
                        "en": "Oqqo'rg'on",
                        "uz": "Oqqo'rg'on",
                        "ru": "Аккурган",
                        "type": "23"
                    },
                    "1727206554": {
                        "en": "Olimkent",
                        "uz": "Olimkent",
                        "ru": "Алимкент",
                        "type": "24"
                    },
                    "1727206558": {
                        "en": "Hamzaobod",
                        "uz": "Hamzaobod",
                        "ru": "Хамзаабад",
                        "type": "24"
                    },
                    "1727206804": {
                        "en": "Oytamg'ali",
                        "uz": "Oytamg'ali",
                        "ru": "Айтамгали",
                        "type": "31"
                    },
                    "1727206806": {
                        "en": "Oqqo'rg'on",
                        "uz": "Oqqo'rg'on",
                        "ru": "Аккурган",
                        "type": "31"
                    },
                    "1727206808": {
                        "en": "Achchi",
                        "uz": "Achchi",
                        "ru": "Аччи",
                        "type": "31"
                    },
                    "1727206820": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "31"
                    },
                    "1727206822": {
                        "en": "Zarbdor",
                        "uz": "Zarbdor",
                        "ru": "Зарбдар",
                        "type": "31"
                    },
                    "1727206824": {
                        "en": "Shoxruxiya",
                        "uz": "Shoxruxiya",
                        "ru": "Шохрухия",
                        "type": "31"
                    },
                    "1727206838": {
                        "en": "Erkinlik",
                        "uz": "Erkinlik",
                        "ru": "Эpкинлик",
                        "type": "31"
                    },
                    "1727206846": {
                        "en": "Zafar",
                        "uz": "Zafar",
                        "ru": "Зафар",
                        "type": "31"
                    },
                    "1727206854": {
                        "en": "Toshto'g'on",
                        "uz": "Toshto'g'on",
                        "ru": "Таштуган",
                        "type": "31"
                    },
                    "1727206865": {
                        "en": "Eltamg'ali",
                        "uz": "Eltamg'ali",
                        "ru": "Элтамгалы",
                        "type": "31"
                    }
                }
            },
            "1727212": {
                "en": "Ohangaron district",
                "uz": "Ohangaron tumani",
                "ru": "Ахангаранский район",
                "type": "20",
                "settlements": {
                    "1727212552": {
                        "en": "Yon-ariq",
                        "uz": "Yon-ariq",
                        "ru": "Ен-арик",
                        "type": "24"
                    },
                    "1727212554": {
                        "en": "Qora Xitoy",
                        "uz": "Qora Xitoy",
                        "ru": "Каракитай",
                        "type": "24"
                    },
                    "1727212556": {
                        "en": "Telov",
                        "uz": "Telov",
                        "ru": "Телов",
                        "type": "24"
                    },
                    "1727212558": {
                        "en": "Eyvalek",
                        "uz": "Eyvalek",
                        "ru": "Эйвалек",
                        "type": "24"
                    },
                    "1727212811": {
                        "en": "Uvaq",
                        "uz": "Uvaq",
                        "ru": "Увак",
                        "type": "31"
                    },
                    "1727212814": {
                        "en": "Birlik",
                        "uz": "Birlik",
                        "ru": "Бирлик",
                        "type": "31"
                    },
                    "1727212820": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "31"
                    },
                    "1727212822": {
                        "en": "Qurama",
                        "uz": "Qurama",
                        "ru": "Курама",
                        "type": "31"
                    },
                    "1727212833": {
                        "en": "Qora xitoy",
                        "uz": "Qora xitoy",
                        "ru": "Карахтай",
                        "type": "31"
                    },
                    "1727212846": {
                        "en": "Ozodlik",
                        "uz": "Ozodlik",
                        "ru": "Озодлик",
                        "type": "31"
                    },
                    "1727212854": {
                        "en": "Susam",
                        "uz": "Susam",
                        "ru": "Сусам",
                        "type": "31"
                    },
                    "1727212865": {
                        "en": "Telov",
                        "uz": "Telov",
                        "ru": "Телав",
                        "type": "31"
                    }
                }
            },
            "1727220": {
                "en": "Bekobod district",
                "uz": "Bekobod tumani",
                "ru": "Бекабадский район",
                "type": "20",
                "settlements": {
                    "1727220551": {
                        "en": "Zafar",
                        "uz": "Zafar",
                        "ru": "Зафар",
                        "type": "24"
                    },
                    "1727220553": {
                        "en": "Bobur",
                        "uz": "Bobur",
                        "ru": "Бобур",
                        "type": "24"
                    },
                    "1727220557": {
                        "en": "Ko'rkam",
                        "uz": "Ko'rkam",
                        "ru": "Куркам",
                        "type": "24"
                    },
                    "1727220559": {
                        "en": "Xos",
                        "uz": "Xos",
                        "ru": "Хос",
                        "type": "24"
                    },
                    "1727220561": {
                        "en": "Gulzor",
                        "uz": "Gulzor",
                        "ru": "Гулзор",
                        "type": "24"
                    },
                    "1727220804": {
                        "en": "Mo'yinqum",
                        "uz": "Mo'yinqum",
                        "ru": "Муйинкум",
                        "type": "31"
                    },
                    "1727220808": {
                        "en": "Bahoriston",
                        "uz": "Bahoriston",
                        "ru": "Бахористан",
                        "type": "31"
                    },
                    "1727220811": {
                        "en": "Bekobod",
                        "uz": "Bekobod",
                        "ru": "Бекабад",
                        "type": "31"
                    },
                    "1727220822": {
                        "en": "Dalvarzin",
                        "uz": "Dalvarzin",
                        "ru": "Дальверзин",
                        "type": "31"
                    },
                    "1727220825": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистан",
                        "type": "31"
                    },
                    "1727220827": {
                        "en": "Madaniyat",
                        "uz": "Madaniyat",
                        "ru": "Маданият",
                        "type": "31"
                    },
                    "1727220835": {
                        "en": "Jumabozor",
                        "uz": "Jumabozor",
                        "ru": "Джумабазар",
                        "type": "31"
                    },
                    "1727220846": {
                        "en": "Qiyot",
                        "uz": "Qiyot",
                        "ru": "Кият",
                        "type": "31"
                    },
                    "1727220857": {
                        "en": "Mehnatobod",
                        "uz": "Mehnatobod",
                        "ru": "Мехнатабад",
                        "type": "31"
                    },
                    "1727220868": {
                        "en": "Yangiqo'rg'on",
                        "uz": "Yangiqo'rg'on",
                        "ru": "Янгикургон",
                        "type": "31"
                    },
                    "1727220879": {
                        "en": "Chanoq",
                        "uz": "Chanoq",
                        "ru": "Чанак",
                        "type": "31"
                    },
                    "1727220890": {
                        "en": "Yangi hayot",
                        "uz": "Yangi hayot",
                        "ru": "Янгихаят",
                        "type": "31"
                    }
                }
            },
            "1727224": {
                "en": "Bo'stonliq district",
                "uz": "Bo'stonliq tumani",
                "ru": "Бостанлыкский район",
                "type": "20",
                "settlements": {
                    "1727224501": {
                        "en": "G'azalkent",
                        "uz": "G'azalkent",
                        "ru": "Газалкент",
                        "type": "23"
                    },
                    "1727224554": {
                        "en": "Iskandar",
                        "uz": "Iskandar",
                        "ru": "Искандар",
                        "type": "24"
                    },
                    "1727224558": {
                        "en": "Chorvoq",
                        "uz": "Chorvoq",
                        "ru": "Чарвак",
                        "type": "24"
                    },
                    "1727224560": {
                        "en": "Burchmullo",
                        "uz": "Burchmullo",
                        "ru": "Бурчмулло",
                        "type": "24"
                    },
                    "1727224562": {
                        "en": "Pargos",
                        "uz": "Pargos",
                        "ru": "Паргос",
                        "type": "24"
                    },
                    "1727224564": {
                        "en": "Sari qanli",
                        "uz": "Sari qanli",
                        "ru": "Сари Канли",
                        "type": "24"
                    },
                    "1727224566": {
                        "en": "Sobir Raximov",
                        "uz": "Sobir Raximov",
                        "ru": "Собир Рахимов",
                        "type": "24"
                    },
                    "1727224568": {
                        "en": "Soyliq",
                        "uz": "Soyliq",
                        "ru": "Сойлик",
                        "type": "24"
                    },
                    "1727224572": {
                        "en": "Talpin",
                        "uz": "Talpin",
                        "ru": "Талпин",
                        "type": "24"
                    },
                    "1727224574": {
                        "en": "Tulabe",
                        "uz": "Tulabe",
                        "ru": "Тулабе",
                        "type": "24"
                    },
                    "1727224576": {
                        "en": "Uyenqulsoy",
                        "uz": "Uyenqulsoy",
                        "ru": "Уенкулсай",
                        "type": "24"
                    },
                    "1727224578": {
                        "en": "Xumsan",
                        "uz": "Xumsan",
                        "ru": "Хумсон",
                        "type": "24"
                    },
                    "1727224582": {
                        "en": "Ho'ja",
                        "uz": "Ho'ja",
                        "ru": "Хужа",
                        "type": "24"
                    },
                    "1727224584": {
                        "en": "Xo'jakent",
                        "uz": "Xo'jakent",
                        "ru": "Хужакент",
                        "type": "24"
                    },
                    "1727224586": {
                        "en": "Chinor",
                        "uz": "Chinor",
                        "ru": "Чинор",
                        "type": "24"
                    },
                    "1727224588": {
                        "en": "Qoronqul",
                        "uz": "Qoronqul",
                        "ru": "Коронкул",
                        "type": "24"
                    },
                    "1727224592": {
                        "en": "Qurbonov nomli",
                        "uz": "Qurbonov nomli",
                        "ru": "Курбонов",
                        "type": "24"
                    },
                    "1727224594": {
                        "en": "Qo'shqo'rg'on",
                        "uz": "Qo'shqo'rg'on",
                        "ru": "Кушкурган",
                        "type": "24"
                    },
                    "1727224810": {
                        "en": "Bo'stonliq",
                        "uz": "Bo'stonliq",
                        "ru": "Бостанлык",
                        "type": "31"
                    },
                    "1727224815": {
                        "en": "Chimgan",
                        "uz": "Chimgan",
                        "ru": "Чимган",
                        "type": "31"
                    },
                    "1727224822": {
                        "en": "G'azalkent",
                        "uz": "G'azalkent",
                        "ru": "Газалкент",
                        "type": "31"
                    },
                    "1727224827": {
                        "en": "Xumsan",
                        "uz": "Xumsan",
                        "ru": "Хумсан",
                        "type": "31"
                    },
                    "1727224833": {
                        "en": "Dumaloq",
                        "uz": "Dumaloq",
                        "ru": "Думалак",
                        "type": "31"
                    },
                    "1727224835": {
                        "en": "Nanay",
                        "uz": "Nanay",
                        "ru": "Нанай",
                        "type": "31"
                    },
                    "1727224838": {
                        "en": "Qoramanas",
                        "uz": "Qoramanas",
                        "ru": "Караманас",
                        "type": "31"
                    },
                    "1727224845": {
                        "en": "Qo'shqo'rg'on",
                        "uz": "Qo'shqo'rg'on",
                        "ru": "Кошкурган",
                        "type": "31"
                    },
                    "1727224850": {
                        "en": "Chimboyliq",
                        "uz": "Chimboyliq",
                        "ru": "Чимбайлык",
                        "type": "31"
                    },
                    "1727224856": {
                        "en": "Soyliq",
                        "uz": "Soyliq",
                        "ru": "Сайлык",
                        "type": "31"
                    },
                    "1727224860": {
                        "en": "Sijjak",
                        "uz": "Sijjak",
                        "ru": "Сиджак",
                        "type": "31"
                    },
                    "1727224865": {
                        "en": "Pargos",
                        "uz": "Pargos",
                        "ru": "Паpгос",
                        "type": "31"
                    },
                    "1727224867": {
                        "en": "Pskom",
                        "uz": "Pskom",
                        "ru": "Пском",
                        "type": "31"
                    },
                    "1727224878": {
                        "en": "Xo'jakent",
                        "uz": "Xo'jakent",
                        "ru": "Хужакент",
                        "type": "31"
                    },
                    "1727224889": {
                        "en": "Xondoyliq",
                        "uz": "Xondoyliq",
                        "ru": "Хандайлык",
                        "type": "31"
                    },
                    "1727224893": {
                        "en": "Yangi ovul",
                        "uz": "Yangi ovul",
                        "ru": "Янгиаул",
                        "type": "31"
                    },
                    "1727224895": {
                        "en": "Azadbash",
                        "uz": "Azadbash",
                        "ru": "Азадбаш",
                        "type": "31"
                    },
                    "1727224897": {
                        "en": "Bog'iston",
                        "uz": "Bog'iston",
                        "ru": "Богустан",
                        "type": "31"
                    }
                }
            },
            "1727228": {
                "en": "Bo'ka district",
                "uz": "Bo'ka tumani",
                "ru": "Букинский район",
                "type": "20",
                "settlements": {
                    "1727228501": {
                        "en": "Bo'ka",
                        "uz": "Bo'ka",
                        "ru": "Бука",
                        "type": "23"
                    },
                    "1727228803": {
                        "en": "Iftixor",
                        "uz": "Iftixor",
                        "ru": "Ифтихор",
                        "type": "31"
                    },
                    "1727228811": {
                        "en": "Qoraqo'yli",
                        "uz": "Qoraqo'yli",
                        "ru": "Каракуйли",
                        "type": "31"
                    },
                    "1727228822": {
                        "en": "Turon",
                        "uz": "Turon",
                        "ru": "Туpон",
                        "type": "31"
                    },
                    "1727228833": {
                        "en": "Ko'korol",
                        "uz": "Ko'korol",
                        "ru": "Кокарал",
                        "type": "31"
                    },
                    "1727228835": {
                        "en": "Qo'shtepa",
                        "uz": "Qo'shtepa",
                        "ru": "Коштепа",
                        "type": "31"
                    },
                    "1727228844": {
                        "en": "Namuna",
                        "uz": "Namuna",
                        "ru": "Намуна",
                        "type": "31"
                    },
                    "1727228855": {
                        "en": "Rovot",
                        "uz": "Rovot",
                        "ru": "Рават",
                        "type": "31"
                    },
                    "1727228866": {
                        "en": "Chig'atoy",
                        "uz": "Chig'atoy",
                        "ru": "Чигатай",
                        "type": "31"
                    }
                }
            },
            "1727233": {
                "en": "Quyichirchiq district",
                "uz": "Quyichirchiq tumani",
                "ru": "Куйичирчикский район",
                "type": "20",
                "settlements": {
                    "1727233501": {
                        "en": "Do'stobod",
                        "uz": "Do'stobod",
                        "ru": "Дустобод",
                        "type": "23"
                    },
                    "1727233552": {
                        "en": "Qo'rg'oncha",
                        "uz": "Qo'rg'oncha",
                        "ru": "Курганча",
                        "type": "24"
                    },
                    "1727233554": {
                        "en": "Paxtazor",
                        "uz": "Paxtazor",
                        "ru": "Пахтазор",
                        "type": "24"
                    },
                    "1727233804": {
                        "en": "Gul",
                        "uz": "Gul",
                        "ru": "Гуль",
                        "type": "31"
                    },
                    "1727233810": {
                        "en": "Ketmontepa",
                        "uz": "Ketmontepa",
                        "ru": "Кетментепа",
                        "type": "31"
                    },
                    "1727233815": {
                        "en": "Maydontol",
                        "uz": "Maydontol",
                        "ru": "Майдантал",
                        "type": "31"
                    },
                    "1727233830": {
                        "en": "Qo'rg'oncha",
                        "uz": "Qo'rg'oncha",
                        "ru": "Курганча",
                        "type": "31"
                    },
                    "1727233840": {
                        "en": "Ma'naviyat",
                        "uz": "Ma'naviyat",
                        "ru": "Маънавият",
                        "type": "31"
                    },
                    "1727233850": {
                        "en": "Ma'rifat",
                        "uz": "Ma'rifat",
                        "ru": "Маърифат",
                        "type": "31"
                    },
                    "1727233860": {
                        "en": "O'zbekiston",
                        "uz": "O'zbekiston",
                        "ru": "Узбекистан",
                        "type": "31"
                    },
                    "1727233870": {
                        "en": "Toshovul",
                        "uz": "Toshovul",
                        "ru": "Ташаул",
                        "type": "31"
                    },
                    "1727233872": {
                        "en": "Toshloq",
                        "uz": "Toshloq",
                        "ru": "Ташлак",
                        "type": "31"
                    }
                }
            },
            "1727237": {
                "en": "Zangiota district",
                "uz": "Zangiota tumani",
                "ru": "Зангиатинский район",
                "type": "20",
                "settlements": {
                    "1727237552": {
                        "en": "Eshonguzar",
                        "uz": "Eshonguzar",
                        "ru": "Эшангузар",
                        "type": "24"
                    },
                    "1727237558": {
                        "en": "O'rtaovul",
                        "uz": "O'rtaovul",
                        "ru": "Уртааул",
                        "type": "24"
                    },
                    "1727237562": {
                        "en": "Xonabod",
                        "uz": "Xonabod",
                        "ru": "Ханабад",
                        "type": "24"
                    },
                    "1727237564": {
                        "en": "Erkin",
                        "uz": "Erkin",
                        "ru": "Эркин",
                        "type": "24"
                    },
                    "1727237566": {
                        "en": "Quyoshli",
                        "uz": "Quyoshli",
                        "ru": "Куешли",
                        "type": "24"
                    },
                    "1727237568": {
                        "en": "Daliguzar",
                        "uz": "Daliguzar",
                        "ru": "Далигузар",
                        "type": "24"
                    },
                    "1727237571": {
                        "en": "Pastdarxon",
                        "uz": "Pastdarxon",
                        "ru": "Пасдархон",
                        "type": "24"
                    },
                    "1727237572": {
                        "en": "Tarnov",
                        "uz": "Tarnov",
                        "ru": "Тарнов",
                        "type": "24"
                    },
                    "1727237574": {
                        "en": "Zangiota",
                        "uz": "Zangiota",
                        "ru": "Зангиата",
                        "type": "24"
                    },
                    "1727237576": {
                        "en": "Nazarbek",
                        "uz": "Nazarbek",
                        "ru": "Назарбек",
                        "type": "24"
                    },
                    "1727237578": {
                        "en": "Axmad Yassaviy",
                        "uz": "Axmad Yassaviy",
                        "ru": "Ахмад Яссавий",
                        "type": "24"
                    },
                    "1727237582": {
                        "en": "Ulug'bek",
                        "uz": "Ulug'bek",
                        "ru": "Улугбек",
                        "type": "24"
                    },
                    "1727237809": {
                        "en": "Turkiston",
                        "uz": "Turkiston",
                        "ru": "Туркистон",
                        "type": "31"
                    },
                    "1727237818": {
                        "en": "Qatortol",
                        "uz": "Qatortol",
                        "ru": "Катартал",
                        "type": "31"
                    },
                    "1727237832": {
                        "en": "Chig'atoy-Oqtepa",
                        "uz": "Chig'atoy-Oqtepa",
                        "ru": "Чигатай-Актепа",
                        "type": "31"
                    },
                    "1727237836": {
                        "en": "Nazarbek",
                        "uz": "Nazarbek",
                        "ru": "Назарбек",
                        "type": "31"
                    },
                    "1727237840": {
                        "en": "Zangiota",
                        "uz": "Zangiota",
                        "ru": "Зангиата",
                        "type": "31"
                    },
                    "1727237852": {
                        "en": "O'zgarish",
                        "uz": "O'zgarish",
                        "ru": "Узгариш",
                        "type": "31"
                    },
                    "1727237859": {
                        "en": "Boz-su",
                        "uz": "Boz-su",
                        "ru": "Боз-су",
                        "type": "31"
                    },
                    "1727237870": {
                        "en": "Honobod",
                        "uz": "Honobod",
                        "ru": "Ханабад",
                        "type": "31"
                    },
                    "1727237875": {
                        "en": "Erkin",
                        "uz": "Erkin",
                        "ru": "Эркин",
                        "type": "31"
                    }
                }
            },
            "1727239": {
                "en": "Yuqorichirchiq district",
                "uz": "Yuqorichirchiq tumani",
                "ru": "Юкоричирчикский район",
                "type": "20",
                "settlements": {
                    "1727239551": {
                        "en": "Yangibozor",
                        "uz": "Yangibozor",
                        "ru": "Янгибазар",
                        "type": "24"
                    },
                    "1727239553": {
                        "en": "Mirobod",
                        "uz": "Mirobod",
                        "ru": "Мирабад",
                        "type": "24"
                    },
                    "1727239555": {
                        "en": "Xitoy Tepa",
                        "uz": "Xitoy Tepa",
                        "ru": "Китай тепа",
                        "type": "24"
                    },
                    "1727239806": {
                        "en": "Oqovul",
                        "uz": "Oqovul",
                        "ru": "Акаоул",
                        "type": "31"
                    },
                    "1727239812": {
                        "en": "Arganchi",
                        "uz": "Arganchi",
                        "ru": "Арганчи",
                        "type": "31"
                    },
                    "1727239823": {
                        "en": "Bordonko'l",
                        "uz": "Bordonko'l",
                        "ru": "Барданкуль",
                        "type": "31"
                    },
                    "1727239830": {
                        "en": "Jambul",
                        "uz": "Jambul",
                        "ru": "Джамбул",
                        "type": "31"
                    },
                    "1727239835": {
                        "en": "Sakson ota",
                        "uz": "Sakson ota",
                        "ru": "Саксан-ата",
                        "type": "31"
                    },
                    "1727239840": {
                        "en": "Navro'z",
                        "uz": "Navro'z",
                        "ru": "Навруз",
                        "type": "31"
                    },
                    "1727239867": {
                        "en": "Istiqlol",
                        "uz": "Istiqlol",
                        "ru": "Истиклол",
                        "type": "31"
                    },
                    "1727239882": {
                        "en": "Surnkent",
                        "uz": "Surnkent",
                        "ru": "Суранкент",
                        "type": "31"
                    },
                    "1727239885": {
                        "en": "Tinchlik",
                        "uz": "Tinchlik",
                        "ru": "Тинчлик",
                        "type": "31"
                    }
                }
            },
            "1727248": {
                "en": "Qibray district",
                "uz": "Qibray tumani",
                "ru": "Кибрайский район",
                "type": "20",
                "settlements": {
                    "1727248551": {
                        "en": "Qibray",
                        "uz": "Qibray",
                        "ru": "Кибрай",
                        "type": "24"
                    },
                    "1727248556": {
                        "en": "Salar",
                        "uz": "Salar",
                        "ru": "Салар",
                        "type": "24"
                    },
                    "1727248558": {
                        "en": "Argin",
                        "uz": "Argin",
                        "ru": "Аргин",
                        "type": "24"
                    },
                    "1727248559": {
                        "en": "Taraqqiyot",
                        "uz": "Taraqqiyot",
                        "ru": "Тараккиет",
                        "type": "24"
                    },
                    "1727248561": {
                        "en": "Alisherobod",
                        "uz": "Alisherobod",
                        "ru": "Алишерабад",
                        "type": "24"
                    },
                    "1727248563": {
                        "en": "Geofizika",
                        "uz": "Geofizika",
                        "ru": "Геофизика",
                        "type": "24"
                    },
                    "1727248565": {
                        "en": "Do'rmon",
                        "uz": "Do'rmon",
                        "ru": "Дурмон",
                        "type": "24"
                    },
                    "1727248567": {
                        "en": "Yoshlik",
                        "uz": "Yoshlik",
                        "ru": "Ешлик",
                        "type": "24"
                    },
                    "1727248569": {
                        "en": "Ko'prik boshi",
                        "uz": "Ko'prik boshi",
                        "ru": "Куприк боши",
                        "type": "24"
                    },
                    "1727248571": {
                        "en": "Madaniyat",
                        "uz": "Madaniyat",
                        "ru": "Маданият",
                        "type": "24"
                    },
                    "1727248573": {
                        "en": "Mustaqillik",
                        "uz": "Mustaqillik",
                        "ru": "Мустакиллик",
                        "type": "24"
                    },
                    "1727248575": {
                        "en": "Nurafshon",
                        "uz": "Nurafshon",
                        "ru": "Нурафшон",
                        "type": "24"
                    },
                    "1727248577": {
                        "en": "Uymaut",
                        "uz": "Uymaut",
                        "ru": "Уймамут",
                        "type": "24"
                    },
                    "1727248579": {
                        "en": "Unqo'rg'on-1",
                        "uz": "Unqo'rg'on-1",
                        "ru": "Ункургон-1",
                        "type": "24"
                    },
                    "1727248581": {
                        "en": "O'tkir",
                        "uz": "O'tkir",
                        "ru": "Уткир",
                        "type": "24"
                    },
                    "1727248583": {
                        "en": "X.Amirov",
                        "uz": "X.Amirov",
                        "ru": "Х.Амиров",
                        "type": "24"
                    },
                    "1727248811": {
                        "en": "Baytqo'rg'on",
                        "uz": "Baytqo'rg'on",
                        "ru": "Байткурган",
                        "type": "31"
                    },
                    "1727248820": {
                        "en": "Yangiobod",
                        "uz": "Yangiobod",
                        "ru": "Янгиабад",
                        "type": "31"
                    },
                    "1727248844": {
                        "en": "Unqo'rg'on",
                        "uz": "Unqo'rg'on",
                        "ru": "Ункурган",
                        "type": "31"
                    },
                    "1727248848": {
                        "en": "Qipchoq",
                        "uz": "Qipchoq",
                        "ru": "Кипчак",
                        "type": "31"
                    },
                    "1727248855": {
                        "en": "Zafarobod",
                        "uz": "Zafarobod",
                        "ru": "Зафаробод",
                        "type": "31"
                    },
                    "1727248860": {
                        "en": "Oq-qovoq",
                        "uz": "Oq-qovoq",
                        "ru": "Окковок",
                        "type": "31"
                    },
                    "1727248866": {
                        "en": "Do'rmon",
                        "uz": "Do'rmon",
                        "ru": "Дурмон",
                        "type": "31"
                    },
                    "1727248877": {
                        "en": "Tuzel",
                        "uz": "Tuzel",
                        "ru": "Тузель",
                        "type": "31"
                    },
                    "1727248888": {
                        "en": "Chinobod",
                        "uz": "Chinobod",
                        "ru": "Чинабад",
                        "type": "31"
                    },
                    "1727248895": {
                        "en": "Yon-ariq",
                        "uz": "Yon-ariq",
                        "ru": "Енарык",
                        "type": "31"
                    }
                }
            },
            "1727249": {
                "en": "Parkent district",
                "uz": "Parkent tumani",
                "ru": "Паркентский район",
                "type": "20",
                "settlements": {
                    "1727249501": {
                        "en": "Parkent",
                        "uz": "Parkent",
                        "ru": "Паркент",
                        "type": "23"
                    },
                    "1727249553": {
                        "en": "Quyosh",
                        "uz": "Quyosh",
                        "ru": "Куеш",
                        "type": "24"
                    },
                    "1727249555": {
                        "en": "Qo'rg'ontepa",
                        "uz": "Qo'rg'ontepa",
                        "ru": "Кургантепа",
                        "type": "24"
                    },
                    "1727249557": {
                        "en": "Chinorli",
                        "uz": "Chinorli",
                        "ru": "Чинорли",
                        "type": "24"
                    },
                    "1727249811": {
                        "en": "Zarkent",
                        "uz": "Zarkent",
                        "ru": "Заркент",
                        "type": "31"
                    },
                    "1727249815": {
                        "en": "Qoraqalpoq",
                        "uz": "Qoraqalpoq",
                        "ru": "Каракалпак",
                        "type": "31"
                    },
                    "1727249817": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустан",
                        "type": "31"
                    },
                    "1727249825": {
                        "en": "Nomdanak",
                        "uz": "Nomdanak",
                        "ru": "Намданак",
                        "type": "31"
                    },
                    "1727249830": {
                        "en": "Parkent",
                        "uz": "Parkent",
                        "ru": "Паркент",
                        "type": "31"
                    },
                    "1727249836": {
                        "en": "So'qoq",
                        "uz": "So'qoq",
                        "ru": "Сукок",
                        "type": "31"
                    },
                    "1727249850": {
                        "en": "Xisarak",
                        "uz": "Xisarak",
                        "ru": "Хисарак",
                        "type": "31"
                    },
                    "1727249855": {
                        "en": "Boshqizilsoy",
                        "uz": "Boshqizilsoy",
                        "ru": "Бошкизилсой",
                        "type": "31"
                    },
                    "1727249860": {
                        "en": "Changi",
                        "uz": "Changi",
                        "ru": "Чанги",
                        "type": "31"
                    }
                }
            },
            "1727250": {
                "en": "Pskent district",
                "uz": "Pskent tumani",
                "ru": "Пскентский район",
                "type": "20",
                "settlements": {
                    "1727250501": {
                        "en": "Pskent",
                        "uz": "Pskent",
                        "ru": "Пскент",
                        "type": "23"
                    },
                    "1727250554": {
                        "en": "Muratali",
                        "uz": "Muratali",
                        "ru": "Муротали",
                        "type": "24"
                    },
                    "1727250558": {
                        "en": "Said",
                        "uz": "Said",
                        "ru": "Саид",
                        "type": "24"
                    },
                    "1727250811": {
                        "en": "Oq tepa",
                        "uz": "Oq tepa",
                        "ru": "Актепа",
                        "type": "31"
                    },
                    "1727250822": {
                        "en": "Dungqo'rg'on",
                        "uz": "Dungqo'rg'on",
                        "ru": "Дунгкурган",
                        "type": "31"
                    },
                    "1727250833": {
                        "en": "Kelovchi",
                        "uz": "Kelovchi",
                        "ru": "Керавчи",
                        "type": "31"
                    },
                    "1727250844": {
                        "en": "Murotali",
                        "uz": "Murotali",
                        "ru": "Муратали",
                        "type": "31"
                    },
                    "1727250855": {
                        "en": "Koriz",
                        "uz": "Koriz",
                        "ru": "Кариз",
                        "type": "31"
                    },
                    "1727250860": {
                        "en": "Said",
                        "uz": "Said",
                        "ru": "Саид",
                        "type": "31"
                    }
                }
            },
            "1727253": {
                "en": "O'rtachirchiq district",
                "uz": "O'rtachirchiq tumani",
                "ru": "Уртачирчикский район",
                "type": "20",
                "settlements": {
                    "1727253555": {
                        "en": "Tuyabo'g'iz",
                        "uz": "Tuyabo'g'iz",
                        "ru": "Туябугуз",
                        "type": "24"
                    },
                    "1727253561": {
                        "en": "Kuchluk",
                        "uz": "Kuchluk",
                        "ru": "Кучлик",
                        "type": "24"
                    },
                    "1727253565": {
                        "en": "Qorasuv",
                        "uz": "Qorasuv",
                        "ru": "Корасув",
                        "type": "24"
                    },
                    "1727253569": {
                        "en": "Sholikor",
                        "uz": "Sholikor",
                        "ru": "Шоликор",
                        "type": "24"
                    },
                    "1727253808": {
                        "en": "Angor",
                        "uz": "Angor",
                        "ru": "Ангар",
                        "type": "31"
                    },
                    "1727253813": {
                        "en": "Qumovul",
                        "uz": "Qumovul",
                        "ru": "Кумовул",
                        "type": "31"
                    },
                    "1727253820": {
                        "en": "Qorasuv",
                        "uz": "Qorasuv",
                        "ru": "Карасу",
                        "type": "31"
                    },
                    "1727253832": {
                        "en": "Oq ota",
                        "uz": "Oq ota",
                        "ru": "Ок- ота",
                        "type": "31"
                    },
                    "1727253834": {
                        "en": "Haqiqat",
                        "uz": "Haqiqat",
                        "ru": "Хакикат",
                        "type": "31"
                    },
                    "1727253841": {
                        "en": "Navoiy nomli",
                        "uz": "Navoiy nomli",
                        "ru": "им. Навои",
                        "type": "31"
                    },
                    "1727253849": {
                        "en": "Yo'ng'ichqala",
                        "uz": "Yo'ng'ichqala",
                        "ru": "Юнучкала",
                        "type": "31"
                    },
                    "1727253860": {
                        "en": "Paxtaobod",
                        "uz": "Paxtaobod",
                        "ru": "Пахтаабад",
                        "type": "31"
                    },
                    "1727253863": {
                        "en": "Paxtakor",
                        "uz": "Paxtakor",
                        "ru": "Пахтакор",
                        "type": "31"
                    },
                    "1727253865": {
                        "en": "O'rtasaroy",
                        "uz": "O'rtasaroy",
                        "ru": "Урта-Сарай",
                        "type": "31"
                    },
                    "1727253871": {
                        "en": "Istiqbol",
                        "uz": "Istiqbol",
                        "ru": "Истикбол",
                        "type": "31"
                    },
                    "1727253875": {
                        "en": "Yangi turmush",
                        "uz": "Yangi turmush",
                        "ru": "Янгитурмуш",
                        "type": "31"
                    },
                    "1727253880": {
                        "en": "Uyshun",
                        "uz": "Uyshun",
                        "ru": "Уйшун",
                        "type": "31"
                    }
                }
            },
            "1727256": {
                "en": "Chinoz district",
                "uz": "Chinoz tumani",
                "ru": "Чиназский район",
                "type": "20",
                "settlements": {
                    "1727256501": {
                        "en": "Chinoz",
                        "uz": "Chinoz",
                        "ru": "Чиназ",
                        "type": "23"
                    },
                    "1727256553": {
                        "en": "Olmazor",
                        "uz": "Olmazor",
                        "ru": "Алмазар",
                        "type": "24"
                    },
                    "1727256555": {
                        "en": "Yangi Chinoz",
                        "uz": "Yangi Chinoz",
                        "ru": "Янги Чиназ",
                        "type": "24"
                    },
                    "1727256557": {
                        "en": "Gulzorobod",
                        "uz": "Gulzorobod",
                        "ru": "Гулзорабад",
                        "type": "24"
                    },
                    "1727256559": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "24"
                    },
                    "1727256561": {
                        "en": "Paxta",
                        "uz": "Paxta",
                        "ru": "Пахта",
                        "type": "24"
                    },
                    "1727256563": {
                        "en": "A.Temur",
                        "uz": "A.Temur",
                        "ru": "А.Темур",
                        "type": "24"
                    },
                    "1727256565": {
                        "en": "Birlik",
                        "uz": "Birlik",
                        "ru": "Бирлик",
                        "type": "24"
                    },
                    "1727256567": {
                        "en": "Chorvador",
                        "uz": "Chorvador",
                        "ru": "Чорвадор",
                        "type": "24"
                    },
                    "1727256569": {
                        "en": "Kir",
                        "uz": "Kir",
                        "ru": "Кир",
                        "type": "24"
                    },
                    "1727256813": {
                        "en": "Isloxat",
                        "uz": "Isloxat",
                        "ru": "Ислохат",
                        "type": "31"
                    },
                    "1727256815": {
                        "en": "Eshonobod",
                        "uz": "Eshonobod",
                        "ru": "Эшонобод",
                        "type": "31"
                    },
                    "1727256826": {
                        "en": "Turkiston",
                        "uz": "Turkiston",
                        "ru": "Туpкистан",
                        "type": "31"
                    },
                    "1727256836": {
                        "en": "O'zbekiston",
                        "uz": "O'zbekiston",
                        "ru": "Узбекистан",
                        "type": "31"
                    },
                    "1727256840": {
                        "en": "Chinoz",
                        "uz": "Chinoz",
                        "ru": "Чиназ",
                        "type": "31"
                    },
                    "1727256853": {
                        "en": "Eski Toshkent",
                        "uz": "Eski Toshkent",
                        "ru": "Эски-Ташкент",
                        "type": "31"
                    },
                    "1727256860": {
                        "en": "Ko'tarma",
                        "uz": "Ko'tarma",
                        "ru": "Кутарма",
                        "type": "31"
                    },
                    "1727256864": {
                        "en": "Yollama",
                        "uz": "Yollama",
                        "ru": "Яллама",
                        "type": "31"
                    }
                }
            },
            "1727259": {
                "en": "Yangiyo'l district",
                "uz": "Yangiyo'l tumani",
                "ru": "Янгиюльский район",
                "type": "20",
                "settlements": {
                    "1727259553": {
                        "en": "Gulbahor",
                        "uz": "Gulbahor",
                        "ru": "Гульбахор",
                        "type": "24"
                    },
                    "1727259555": {
                        "en": "Bozsu",
                        "uz": "Bozsu",
                        "ru": "Бозсу",
                        "type": "24"
                    },
                    "1727259557": {
                        "en": "Nov",
                        "uz": "Nov",
                        "ru": "Нов",
                        "type": "24"
                    },
                    "1727259559": {
                        "en": "Kirsadoq",
                        "uz": "Kirsadoq",
                        "ru": "Кирсадок",
                        "type": "24"
                    },
                    "1727259563": {
                        "en": "Qovunchi",
                        "uz": "Qovunchi",
                        "ru": "Ковунчи",
                        "type": "24"
                    },
                    "1727259804": {
                        "en": "Yo'g'ontepa",
                        "uz": "Yo'g'ontepa",
                        "ru": "Йугонтепа",
                        "type": "31"
                    },
                    "1727259814": {
                        "en": "Halqobod",
                        "uz": "Halqobod",
                        "ru": "Халкабад",
                        "type": "31"
                    },
                    "1727259825": {
                        "en": "Xonqo'rg'on",
                        "uz": "Xonqo'rg'on",
                        "ru": "Хонкургон",
                        "type": "31"
                    },
                    "1727259834": {
                        "en": "Navbahor",
                        "uz": "Navbahor",
                        "ru": "Навбахор",
                        "type": "31"
                    },
                    "1727259837": {
                        "en": "Niyozbosh",
                        "uz": "Niyozbosh",
                        "ru": "Ниязбаш",
                        "type": "31"
                    },
                    "1727259848": {
                        "en": "Qo'sh yog'och",
                        "uz": "Qo'sh yog'och",
                        "ru": "Кушегоч",
                        "type": "31"
                    },
                    "1727259871": {
                        "en": "Sho'ralisoy",
                        "uz": "Sho'ralisoy",
                        "ru": "Шуралисай",
                        "type": "31"
                    },
                    "1727259882": {
                        "en": "Eski Qovunchi",
                        "uz": "Eski Qovunchi",
                        "ru": "Эски-Каунчи",
                        "type": "31"
                    }
                }
            },
            "1727265": {
                "en": "Toshkent district",
                "uz": "Toshkent tumani",
                "ru": "Ташкентский район",
                "type": "20",
                "settlements": {
                    "1727265501": {
                        "en": "Keles",
                        "uz": "Keles",
                        "ru": "Келес",
                        "type": "23"
                    },
                    "1727265553": {
                        "en": "Z.Jalilov",
                        "uz": "Z.Jalilov",
                        "ru": "З.Жалилов",
                        "type": "24"
                    },
                    "1727265555": {
                        "en": "Ko'k saroy",
                        "uz": "Ko'k saroy",
                        "ru": "Куксарай",
                        "type": "24"
                    },
                    "1727265557": {
                        "en": "Kensoy",
                        "uz": "Kensoy",
                        "ru": "Кенсай",
                        "type": "24"
                    },
                    "1727265559": {
                        "en": "Sabzavot",
                        "uz": "Sabzavot",
                        "ru": "Сабзавот",
                        "type": "24"
                    },
                    "1727265563": {
                        "en": "M.Fozilov",
                        "uz": "M.Fozilov",
                        "ru": "М.Фозилов",
                        "type": "24"
                    },
                    "1727265565": {
                        "en": "Shamsiobod",
                        "uz": "Shamsiobod",
                        "ru": "Шамсиабад",
                        "type": "24"
                    },
                    "1727265567": {
                        "en": "Chig'atoy",
                        "uz": "Chig'atoy",
                        "ru": "Чигатай",
                        "type": "24"
                    },
                    "1727265569": {
                        "en": "Hasanboy",
                        "uz": "Hasanboy",
                        "ru": "Хасанбой",
                        "type": "24"
                    },
                    "1727265573": {
                        "en": "Qashqarlik",
                        "uz": "Qashqarlik",
                        "ru": "Кашкарлик",
                        "type": "24"
                    },
                    "1727265811": {
                        "en": "Ko'k-terak",
                        "uz": "Ko'k-terak",
                        "ru": "Кук-Терак",
                        "type": "31"
                    },
                    "1727265813": {
                        "en": "Chuvalachi",
                        "uz": "Chuvalachi",
                        "ru": "Чувалачи",
                        "type": "31"
                    },
                    "1727265816": {
                        "en": "Masalboy",
                        "uz": "Masalboy",
                        "ru": "Масалбай",
                        "type": "31"
                    },
                    "1727265819": {
                        "en": "Qizg'aldoq",
                        "uz": "Qizg'aldoq",
                        "ru": "Кизгалдак",
                        "type": "31"
                    },
                    "1727265825": {
                        "en": "Ko'k Saroy",
                        "uz": "Ko'k Saroy",
                        "ru": "Куксарай",
                        "type": "31"
                    },
                    "1727265828": {
                        "en": "Hasanboy",
                        "uz": "Hasanboy",
                        "ru": "Хасанбай",
                        "type": "31"
                    },
                    "1727265833": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистан",
                        "type": "31"
                    },
                    "1727265836": {
                        "en": "Yunusobod",
                        "uz": "Yunusobod",
                        "ru": "Юнусабад",
                        "type": "31"
                    },
                    "1727265839": {
                        "en": "Choshtepa",
                        "uz": "Choshtepa",
                        "ru": "Чаштепа",
                        "type": "31"
                    }
                }
            },
            "1727401": {
                "en": "Nurafshon",
                "uz": "Nurafshon",
                "ru": "Нурафшон",
                "type": "21"
            },
            "1727404": {
                "en": "Olmaliq",
                "uz": "Olmaliq",
                "ru": "Алмалык",
                "type": "21"
            },
            "1727407": {
                "en": "Angren",
                "uz": "Angren",
                "ru": "Ангрен",
                "type": "21",
                "settlements": {
                    "1727407505": {
                        "en": "Yangiobod",
                        "uz": "Yangiobod",
                        "ru": "Янгиабад",
                        "type": "23"
                    },
                    "1727407554": {
                        "en": "Krasnogorsk",
                        "uz": "Krasnogorsk",
                        "ru": "Красногорск",
                        "type": "24"
                    },
                    "1727407558": {
                        "en": "Nurobod",
                        "uz": "Nurobod",
                        "ru": "Нурабад",
                        "type": "24"
                    }
                }
            },
            "1727413": {
                "en": "Bekobod",
                "uz": "Bekobod",
                "ru": "Бекабад",
                "type": "21"
            },
            "1727415": {
                "en": "Ohangaron",
                "uz": "Ohangaron",
                "ru": "Ахангаран",
                "type": "21"
            },
            "1727419": {
                "en": "Chirchiq",
                "uz": "Chirchiq",
                "ru": "Чиpчик",
                "type": "21"
            },
            "1727424": {
                "en": "Yangiyo'l",
                "uz": "Yangiyo'l",
                "ru": "Янгиюль",
                "type": "21"
            }
        }
    },
    "1730": {
        "en": "Fergana region",
        "uz": "Farg'ona viloyati",
        "ru": "Ферганская область",
        "districts": {
            "1730203": {
                "en": "Oltiariq district",
                "uz": "Oltiariq tumani",
                "ru": "Алтыарыкский район",
                "type": "20",
                "settlements": {
                    "1730203508": {
                        "en": "Tinchlik",
                        "uz": "Tinchlik",
                        "ru": "Тинчлик",
                        "type": "23"
                    },
                    "1730203551": {
                        "en": "Oltiariq",
                        "uz": "Oltiariq",
                        "ru": "Алтыарык",
                        "type": "24"
                    },
                    "1730203552": {
                        "en": "Chinor",
                        "uz": "Chinor",
                        "ru": "Чинор",
                        "type": "24"
                    },
                    "1730203554": {
                        "en": "Azimobod",
                        "uz": "Azimobod",
                        "ru": "Азимабад",
                        "type": "24"
                    },
                    "1730203556": {
                        "en": "Bo'rbaliq",
                        "uz": "Bo'rbaliq",
                        "ru": "Бурбалик",
                        "type": "24"
                    },
                    "1730203558": {
                        "en": "Djurek",
                        "uz": "Djurek",
                        "ru": "Джурек",
                        "type": "24"
                    },
                    "1730203562": {
                        "en": "Zilxa",
                        "uz": "Zilxa",
                        "ru": "Зилха",
                        "type": "24"
                    },
                    "1730203564": {
                        "en": "Katput",
                        "uz": "Katput",
                        "ru": "Катпут",
                        "type": "24"
                    },
                    "1730203566": {
                        "en": "Oqbo'yra",
                        "uz": "Oqbo'yra",
                        "ru": "Окбуйра",
                        "type": "24"
                    },
                    "1730203568": {
                        "en": "Povulg'on",
                        "uz": "Povulg'on",
                        "ru": "Повулган",
                        "type": "24"
                    },
                    "1730203570": {
                        "en": "Poloson",
                        "uz": "Poloson",
                        "ru": "Паласан",
                        "type": "24"
                    },
                    "1730203572": {
                        "en": "Chordara",
                        "uz": "Chordara",
                        "ru": "Чордара",
                        "type": "24"
                    },
                    "1730203574": {
                        "en": "Eskiarab",
                        "uz": "Eskiarab",
                        "ru": "Эскиараб",
                        "type": "24"
                    },
                    "1730203576": {
                        "en": "Yangiarab",
                        "uz": "Yangiarab",
                        "ru": "Янгиараб",
                        "type": "24"
                    },
                    "1730203578": {
                        "en": "Yangiqo'rg'on",
                        "uz": "Yangiqo'rg'on",
                        "ru": "Янгикурган",
                        "type": "24"
                    },
                    "1730203804": {
                        "en": "Oqbo'yra",
                        "uz": "Oqbo'yra",
                        "ru": "Акбуйра",
                        "type": "31"
                    },
                    "1730203806": {
                        "en": "Oltiariq",
                        "uz": "Oltiariq",
                        "ru": "Алтыарык",
                        "type": "31"
                    },
                    "1730203810": {
                        "en": "Yangiarab",
                        "uz": "Yangiarab",
                        "ru": "Янгиараб",
                        "type": "31"
                    },
                    "1730203812": {
                        "en": "Bo'rbaliq",
                        "uz": "Bo'rbaliq",
                        "ru": "Бурбалык",
                        "type": "31"
                    },
                    "1730203820": {
                        "en": "G'ayrat",
                        "uz": "G'ayrat",
                        "ru": "Гайрат",
                        "type": "31"
                    },
                    "1730203824": {
                        "en": "Djurek",
                        "uz": "Djurek",
                        "ru": "Джурек",
                        "type": "31"
                    },
                    "1730203840": {
                        "en": "Qiziltepa",
                        "uz": "Qiziltepa",
                        "ru": "Кызылтепа",
                        "type": "31"
                    },
                    "1730203842": {
                        "en": "Poloson",
                        "uz": "Poloson",
                        "ru": "Паласан",
                        "type": "31"
                    },
                    "1730203848": {
                        "en": "Fayziobod",
                        "uz": "Fayziobod",
                        "ru": "Файзиабад",
                        "type": "31"
                    },
                    "1730203870": {
                        "en": "Toshqo'rg'on",
                        "uz": "Toshqo'rg'on",
                        "ru": "Тошкургон",
                        "type": "31"
                    },
                    "1730203875": {
                        "en": "Kapchugay",
                        "uz": "Kapchugay",
                        "ru": "Капчугай",
                        "type": "31"
                    },
                    "1730203881": {
                        "en": "Povulg'on",
                        "uz": "Povulg'on",
                        "ru": "Павулган",
                        "type": "31"
                    },
                    "1730203885": {
                        "en": "Katput",
                        "uz": "Katput",
                        "ru": "Катпут",
                        "type": "31"
                    },
                    "1730203890": {
                        "en": "Zilxa",
                        "uz": "Zilxa",
                        "ru": "Зилха",
                        "type": "31"
                    },
                    "1730203895": {
                        "en": "Azimobod",
                        "uz": "Azimobod",
                        "ru": "Азимабад",
                        "type": "31"
                    }
                }
            },
            "1730206": {
                "en": "Qo'shtepa district",
                "uz": "Qo'shtepa tumani",
                "ru": "Куштепинский район",
                "type": "20",
                "settlements": {
                    "1730206553": {
                        "en": "Boltako'l",
                        "uz": "Boltako'l",
                        "ru": "Болтакул",
                        "type": "24"
                    },
                    "1730206555": {
                        "en": "Gishtmon",
                        "uz": "Gishtmon",
                        "ru": "Гиштмон",
                        "type": "24"
                    },
                    "1730206557": {
                        "en": "Do'rmon",
                        "uz": "Do'rmon",
                        "ru": "Дурмон",
                        "type": "24"
                    },
                    "1730206559": {
                        "en": "Katta Beshkapa",
                        "uz": "Katta Beshkapa",
                        "ru": "Катта бешкапа",
                        "type": "24"
                    },
                    "1730206561": {
                        "en": "Qizil ariq",
                        "uz": "Qizil ariq",
                        "ru": "Кизиларик",
                        "type": "24"
                    },
                    "1730206563": {
                        "en": "Qorajiyda",
                        "uz": "Qorajiyda",
                        "ru": "Каражийда",
                        "type": "24"
                    },
                    "1730206565": {
                        "en": "Qorakaltak",
                        "uz": "Qorakaltak",
                        "ru": "Каракалтак",
                        "type": "24"
                    },
                    "1730206567": {
                        "en": "Qumtepa",
                        "uz": "Qumtepa",
                        "ru": "Кумтепа",
                        "type": "24"
                    },
                    "1730206569": {
                        "en": "Quyi Oqtepa",
                        "uz": "Quyi Oqtepa",
                        "ru": "Куйи Октепа",
                        "type": "24"
                    },
                    "1730206571": {
                        "en": "Sarmozor",
                        "uz": "Sarmozor",
                        "ru": "Сармозор",
                        "type": "24"
                    },
                    "1730206573": {
                        "en": "Xotinariq",
                        "uz": "Xotinariq",
                        "ru": "Хотинарык",
                        "type": "24"
                    },
                    "1730206575": {
                        "en": "Shahartepa",
                        "uz": "Shahartepa",
                        "ru": "Шахартепа",
                        "type": "24"
                    },
                    "1730206577": {
                        "en": "Eshonguzar",
                        "uz": "Eshonguzar",
                        "ru": "Эшонгузар",
                        "type": "24"
                    },
                    "1730206579": {
                        "en": "Yangiariq",
                        "uz": "Yangiariq",
                        "ru": "Янгиарык",
                        "type": "24"
                    },
                    "1730206806": {
                        "en": "Fayz",
                        "uz": "Fayz",
                        "ru": "Файз",
                        "type": "31"
                    },
                    "1730206815": {
                        "en": "Do'rmon",
                        "uz": "Do'rmon",
                        "ru": "Дуpман",
                        "type": "31"
                    },
                    "1730206822": {
                        "en": "Qoraqo'shchi",
                        "uz": "Qoraqo'shchi",
                        "ru": "Каракушчи",
                        "type": "31"
                    },
                    "1730206825": {
                        "en": "Qumtepa",
                        "uz": "Qumtepa",
                        "ru": "Кумтепа",
                        "type": "31"
                    },
                    "1730206827": {
                        "en": "Sarmozor",
                        "uz": "Sarmozor",
                        "ru": "Саримазар",
                        "type": "31"
                    },
                    "1730206830": {
                        "en": "Solijonobod",
                        "uz": "Solijonobod",
                        "ru": "Салиджанабад",
                        "type": "31"
                    },
                    "1730206834": {
                        "en": "Langar",
                        "uz": "Langar",
                        "ru": "Лянгар",
                        "type": "31"
                    },
                    "1730206841": {
                        "en": "Paxtakor",
                        "uz": "Paxtakor",
                        "ru": "Пахтакор",
                        "type": "31"
                    },
                    "1730206854": {
                        "en": "O'qchi",
                        "uz": "O'qchi",
                        "ru": "Укчи",
                        "type": "31"
                    },
                    "1730206862": {
                        "en": "Xalqabod",
                        "uz": "Xalqabod",
                        "ru": "Халкабад",
                        "type": "31"
                    },
                    "1730206876": {
                        "en": "Shahartepa",
                        "uz": "Shahartepa",
                        "ru": "Шахартепа",
                        "type": "31"
                    },
                    "1730206885": {
                        "en": "Yo'ldoshobod",
                        "uz": "Yo'ldoshobod",
                        "ru": "Юлдашабад",
                        "type": "31"
                    },
                    "1730206890": {
                        "en": "Loyson",
                        "uz": "Loyson",
                        "ru": "Лайсан",
                        "type": "31"
                    },
                    "1730206895": {
                        "en": "Boltako'l",
                        "uz": "Boltako'l",
                        "ru": "Балтакуль",
                        "type": "31"
                    },
                    "1730206898": {
                        "en": "G'ishtmon",
                        "uz": "G'ishtmon",
                        "ru": "Гиштман",
                        "type": "31"
                    }
                }
            },
            "1730209": {
                "en": "Bog'dod district",
                "uz": "Bog'dod tumani",
                "ru": "Багдадский район",
                "type": "20",
                "settlements": {
                    "1730209551": {
                        "en": "Bog'dod",
                        "uz": "Bog'dod",
                        "ru": "Багдад",
                        "type": "24"
                    },
                    "1730209553": {
                        "en": "Amirobod",
                        "uz": "Amirobod",
                        "ru": "Амиробод",
                        "type": "24"
                    },
                    "1730209555": {
                        "en": "Maylavoy",
                        "uz": "Maylavoy",
                        "ru": "Майлавой",
                        "type": "24"
                    },
                    "1730209557": {
                        "en": "Oltin vodiy",
                        "uz": "Oltin vodiy",
                        "ru": "Олтин водий",
                        "type": "24"
                    },
                    "1730209559": {
                        "en": "Bog'ishamol",
                        "uz": "Bog'ishamol",
                        "ru": "Богишамол",
                        "type": "24"
                    },
                    "1730209561": {
                        "en": "Bordon",
                        "uz": "Bordon",
                        "ru": "Бордон",
                        "type": "24"
                    },
                    "1730209563": {
                        "en": "Do'rmoncha",
                        "uz": "Do'rmoncha",
                        "ru": "Дурманча",
                        "type": "24"
                    },
                    "1730209565": {
                        "en": "Irgali",
                        "uz": "Irgali",
                        "ru": "Иргали",
                        "type": "24"
                    },
                    "1730209567": {
                        "en": "Qaroqchitol",
                        "uz": "Qaroqchitol",
                        "ru": "Каракчитол",
                        "type": "24"
                    },
                    "1730209569": {
                        "en": "Kaxat",
                        "uz": "Kaxat",
                        "ru": "Кахат",
                        "type": "24"
                    },
                    "1730209571": {
                        "en": "Qirqboldi",
                        "uz": "Qirqboldi",
                        "ru": "Киркболды",
                        "type": "24"
                    },
                    "1730209573": {
                        "en": "Konizar",
                        "uz": "Konizar",
                        "ru": "Конизар",
                        "type": "24"
                    },
                    "1730209575": {
                        "en": "Qo'shtegirmon",
                        "uz": "Qo'shtegirmon",
                        "ru": "Куштегирмон",
                        "type": "24"
                    },
                    "1730209577": {
                        "en": "Matqulobod",
                        "uz": "Matqulobod",
                        "ru": "Маткулабад",
                        "type": "24"
                    },
                    "1730209579": {
                        "en": "Mirzaobod",
                        "uz": "Mirzaobod",
                        "ru": "Мирзаабад",
                        "type": "24"
                    },
                    "1730209581": {
                        "en": "Samandarak",
                        "uz": "Samandarak",
                        "ru": "Самандарак",
                        "type": "24"
                    },
                    "1730209583": {
                        "en": "Samarqand",
                        "uz": "Samarqand",
                        "ru": "Самарканд",
                        "type": "24"
                    },
                    "1730209585": {
                        "en": "O'ltarma",
                        "uz": "O'ltarma",
                        "ru": "Ултарма",
                        "type": "24"
                    },
                    "1730209587": {
                        "en": "Xusnobod",
                        "uz": "Xusnobod",
                        "ru": "Хуснабад",
                        "type": "24"
                    },
                    "1730209589": {
                        "en": "Chekmirzaobod",
                        "uz": "Chekmirzaobod",
                        "ru": "Чекмирзаабад",
                        "type": "24"
                    },
                    "1730209591": {
                        "en": "Churindi",
                        "uz": "Churindi",
                        "ru": "Чуринди",
                        "type": "24"
                    },
                    "1730209810": {
                        "en": "Zafarobod",
                        "uz": "Zafarobod",
                        "ru": "Зафарабад",
                        "type": "31"
                    },
                    "1730209820": {
                        "en": "Amirobod",
                        "uz": "Amirobod",
                        "ru": "Амирабад",
                        "type": "31"
                    },
                    "1730209823": {
                        "en": "Qaroqchitol",
                        "uz": "Qaroqchitol",
                        "ru": "Каракчитал",
                        "type": "31"
                    },
                    "1730209824": {
                        "en": "Matqulobod",
                        "uz": "Matqulobod",
                        "ru": "Маткулабад",
                        "type": "31"
                    },
                    "1730209826": {
                        "en": "Tinchlik",
                        "uz": "Tinchlik",
                        "ru": "Тинчлик",
                        "type": "31"
                    },
                    "1730209834": {
                        "en": "Paxtaobod",
                        "uz": "Paxtaobod",
                        "ru": "Пахтаабад",
                        "type": "31"
                    },
                    "1730209845": {
                        "en": "O'ltarma",
                        "uz": "O'ltarma",
                        "ru": "Ультарма",
                        "type": "31"
                    },
                    "1730209856": {
                        "en": "Chuvalanchi",
                        "uz": "Chuvalanchi",
                        "ru": "Чуваланчи",
                        "type": "31"
                    },
                    "1730209860": {
                        "en": "Do'rmancha",
                        "uz": "Do'rmancha",
                        "ru": "Дорманча",
                        "type": "31"
                    },
                    "1730209865": {
                        "en": "Samarqand",
                        "uz": "Samarqand",
                        "ru": "Самарканд",
                        "type": "31"
                    }
                }
            },
            "1730212": {
                "en": "Buvayda district",
                "uz": "Buvayda tumani",
                "ru": "Бувайдинский район",
                "type": "20",
                "settlements": {
                    "1730212551": {
                        "en": "Ibrat",
                        "uz": "Ibrat",
                        "ru": "Ибрат",
                        "type": "24"
                    },
                    "1730212553": {
                        "en": "Yuqori Bachqir",
                        "uz": "Yuqori Bachqir",
                        "ru": "Юкори Бачкир",
                        "type": "24"
                    },
                    "1730212555": {
                        "en": "Quyi Bachqir",
                        "uz": "Quyi Bachqir",
                        "ru": "Куйи Бачкир",
                        "type": "24"
                    },
                    "1730212557": {
                        "en": "Chinobod",
                        "uz": "Chinobod",
                        "ru": "Чинабад",
                        "type": "24"
                    },
                    "1730212559": {
                        "en": "Buvayda",
                        "uz": "Buvayda",
                        "ru": "Бувайда",
                        "type": "24"
                    },
                    "1730212561": {
                        "en": "Zarbuloq",
                        "uz": "Zarbuloq",
                        "ru": "Зарбулок",
                        "type": "24"
                    },
                    "1730212563": {
                        "en": "Qum",
                        "uz": "Qum",
                        "ru": "Кум",
                        "type": "24"
                    },
                    "1730212565": {
                        "en": "Yuqori Nayman",
                        "uz": "Yuqori Nayman",
                        "ru": "Юкори Найман",
                        "type": "24"
                    },
                    "1730212567": {
                        "en": "Oqqo'rg'on",
                        "uz": "Oqqo'rg'on",
                        "ru": "Аккурган",
                        "type": "24"
                    },
                    "1730212569": {
                        "en": "Quyi Urganji",
                        "uz": "Quyi Urganji",
                        "ru": "Куйи Урганжи",
                        "type": "24"
                    },
                    "1730212806": {
                        "en": "Oqqo'rg'on",
                        "uz": "Oqqo'rg'on",
                        "ru": "Аккурган",
                        "type": "31"
                    },
                    "1730212810": {
                        "en": "Alqor",
                        "uz": "Alqor",
                        "ru": "Алкар",
                        "type": "31"
                    },
                    "1730212820": {
                        "en": "Begobod",
                        "uz": "Begobod",
                        "ru": "Бекабад",
                        "type": "31"
                    },
                    "1730212830": {
                        "en": "Beshterak",
                        "uz": "Beshterak",
                        "ru": "Бештерак",
                        "type": "31"
                    },
                    "1730212840": {
                        "en": "Buvayda",
                        "uz": "Buvayda",
                        "ru": "Бувайда",
                        "type": "31"
                    },
                    "1730212850": {
                        "en": "Jalayer",
                        "uz": "Jalayer",
                        "ru": "Джалаер",
                        "type": "31"
                    },
                    "1730212860": {
                        "en": "Qo'ng'irot",
                        "uz": "Qo'ng'irot",
                        "ru": "Кунград",
                        "type": "31"
                    },
                    "1730212862": {
                        "en": "Qo'rg'onobod",
                        "uz": "Qo'rg'onobod",
                        "ru": "Курганабад",
                        "type": "31"
                    },
                    "1730212866": {
                        "en": "Uzumzor",
                        "uz": "Uzumzor",
                        "ru": "Узумзар",
                        "type": "31"
                    },
                    "1730212869": {
                        "en": "Yangiqadam",
                        "uz": "Yangiqadam",
                        "ru": "Янгикадам",
                        "type": "31"
                    },
                    "1730212870": {
                        "en": "Yangiqo'rg'on",
                        "uz": "Yangiqo'rg'on",
                        "ru": "Янгикурган",
                        "type": "31"
                    }
                }
            },
            "1730215": {
                "en": "Beshariq district",
                "uz": "Beshariq tumani",
                "ru": "Бешарыкский район",
                "type": "20",
                "settlements": {
                    "1730215501": {
                        "en": "Beshariq",
                        "uz": "Beshariq",
                        "ru": "Бешарык",
                        "type": "23"
                    },
                    "1730215553": {
                        "en": "Nafosat",
                        "uz": "Nafosat",
                        "ru": "Нафосат",
                        "type": "24"
                    },
                    "1730215556": {
                        "en": "Zarqaynar",
                        "uz": "Zarqaynar",
                        "ru": "Заркайнар",
                        "type": "24"
                    },
                    "1730215559": {
                        "en": "Kapayangi",
                        "uz": "Kapayangi",
                        "ru": "Капаянги",
                        "type": "24"
                    },
                    "1730215563": {
                        "en": "Qumqishloq",
                        "uz": "Qumqishloq",
                        "ru": "Кумкишлак",
                        "type": "24"
                    },
                    "1730215566": {
                        "en": "Oqtovuq",
                        "uz": "Oqtovuq",
                        "ru": "Актовук",
                        "type": "24"
                    },
                    "1730215569": {
                        "en": "Rapqon",
                        "uz": "Rapqon",
                        "ru": "Рапкан",
                        "type": "24"
                    },
                    "1730215573": {
                        "en": "Tovul",
                        "uz": "Tovul",
                        "ru": "Товул",
                        "type": "24"
                    },
                    "1730215576": {
                        "en": "Uzun",
                        "uz": "Uzun",
                        "ru": "Узун",
                        "type": "24"
                    },
                    "1730215579": {
                        "en": "Chimboy",
                        "uz": "Chimboy",
                        "ru": "Чимбай",
                        "type": "24"
                    },
                    "1730215583": {
                        "en": "Manguobod",
                        "uz": "Manguobod",
                        "ru": "Мангуобод",
                        "type": "24"
                    },
                    "1730215804": {
                        "en": "Andarxon",
                        "uz": "Andarxon",
                        "ru": "Андархан",
                        "type": "31"
                    },
                    "1730215811": {
                        "en": "Beshariq",
                        "uz": "Beshariq",
                        "ru": "Бешарык",
                        "type": "31"
                    },
                    "1730215815": {
                        "en": "Vatan",
                        "uz": "Vatan",
                        "ru": "Ватан",
                        "type": "31"
                    },
                    "1730215826": {
                        "en": "Qorajiyda",
                        "uz": "Qorajiyda",
                        "ru": "Каражийда",
                        "type": "31"
                    },
                    "1730215828": {
                        "en": "Qashqar",
                        "uz": "Qashqar",
                        "ru": "Кашкар",
                        "type": "31"
                    },
                    "1730215839": {
                        "en": "Beshsari",
                        "uz": "Beshsari",
                        "ru": "Бешсари",
                        "type": "31"
                    },
                    "1730215844": {
                        "en": "Rapqon",
                        "uz": "Rapqon",
                        "ru": "Рапкан",
                        "type": "31"
                    },
                    "1730215848": {
                        "en": "Tovul",
                        "uz": "Tovul",
                        "ru": "Тавул",
                        "type": "31"
                    },
                    "1730215855": {
                        "en": "Yakkatut",
                        "uz": "Yakkatut",
                        "ru": "Яккатут",
                        "type": "31"
                    }
                }
            },
            "1730218": {
                "en": "Quva district",
                "uz": "Quva tumani",
                "ru": "Кувинский район",
                "type": "20",
                "settlements": {
                    "1730218501": {
                        "en": "Quva",
                        "uz": "Quva",
                        "ru": "Кува",
                        "type": "23"
                    },
                    "1730218552": {
                        "en": "Sanoatchilar",
                        "uz": "Sanoatchilar",
                        "ru": "Саноатчилар",
                        "type": "24"
                    },
                    "1730218553": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистон",
                        "type": "24"
                    },
                    "1730218554": {
                        "en": "Damariq",
                        "uz": "Damariq",
                        "ru": "Дамарик",
                        "type": "24"
                    },
                    "1730218555": {
                        "en": "Jalayer",
                        "uz": "Jalayer",
                        "ru": "Джалаер",
                        "type": "24"
                    },
                    "1730218556": {
                        "en": "Qayirma",
                        "uz": "Qayirma",
                        "ru": "Кайирма",
                        "type": "24"
                    },
                    "1730218557": {
                        "en": "Qaqir",
                        "uz": "Qaqir",
                        "ru": "Какир",
                        "type": "24"
                    },
                    "1730218558": {
                        "en": "Qandabuloq",
                        "uz": "Qandabuloq",
                        "ru": "Кандабулок",
                        "type": "24"
                    },
                    "1730218559": {
                        "en": "Qorashox",
                        "uz": "Qorashox",
                        "ru": "Карашох",
                        "type": "24"
                    },
                    "1730218561": {
                        "en": "Mustaqillik",
                        "uz": "Mustaqillik",
                        "ru": "Мустакиллик",
                        "type": "24"
                    },
                    "1730218562": {
                        "en": "Oltinariq",
                        "uz": "Oltinariq",
                        "ru": "Олтинарик",
                        "type": "24"
                    },
                    "1730218563": {
                        "en": "Pastki Xo'ja Xasan",
                        "uz": "Pastki Xo'ja Xasan",
                        "ru": "Пастки Хужа Хасан",
                        "type": "24"
                    },
                    "1730218564": {
                        "en": "Tolmozor",
                        "uz": "Tolmozor",
                        "ru": "Толмазор",
                        "type": "24"
                    },
                    "1730218565": {
                        "en": "Turk",
                        "uz": "Turk",
                        "ru": "Турк",
                        "type": "24"
                    },
                    "1730218567": {
                        "en": "O'zbek",
                        "uz": "O'zbek",
                        "ru": "Узбек",
                        "type": "24"
                    },
                    "1730218569": {
                        "en": "Yuziya",
                        "uz": "Yuziya",
                        "ru": "Юзия",
                        "type": "24"
                    },
                    "1730218804": {
                        "en": "Akbarabad",
                        "uz": "Akbarabad",
                        "ru": "Акбарабад",
                        "type": "31"
                    },
                    "1730218813": {
                        "en": "Baynalminal",
                        "uz": "Baynalminal",
                        "ru": "Байналминал",
                        "type": "31"
                    },
                    "1730218826": {
                        "en": "Dehqonobod",
                        "uz": "Dehqonobod",
                        "ru": "Дехканабад",
                        "type": "31"
                    },
                    "1730218829": {
                        "en": "Ittifoq",
                        "uz": "Ittifoq",
                        "ru": "Иттифок",
                        "type": "31"
                    },
                    "1730218837": {
                        "en": "Madaniyat",
                        "uz": "Madaniyat",
                        "ru": "Маданият",
                        "type": "31"
                    },
                    "1730218842": {
                        "en": "Iftixor",
                        "uz": "Iftixor",
                        "ru": "Ифтихор",
                        "type": "31"
                    },
                    "1730218851": {
                        "en": "Namuna",
                        "uz": "Namuna",
                        "ru": "Намуна",
                        "type": "31"
                    },
                    "1730218862": {
                        "en": "Bahor",
                        "uz": "Bahor",
                        "ru": "Бахор",
                        "type": "31"
                    },
                    "1730218871": {
                        "en": "Turkrovot",
                        "uz": "Turkrovot",
                        "ru": "Туркрават",
                        "type": "31"
                    },
                    "1730218884": {
                        "en": "Soyguzar",
                        "uz": "Soyguzar",
                        "ru": "Сойгузар",
                        "type": "31"
                    },
                    "1730218886": {
                        "en": "Yangihayot",
                        "uz": "Yangihayot",
                        "ru": "Янгихаят",
                        "type": "31"
                    }
                }
            },
            "1730221": {
                "en": "Uchko'prik district",
                "uz": "Uchko'prik tumani",
                "ru": "Учкуприкский район",
                "type": "20",
                "settlements": {
                    "1730221551": {
                        "en": "Uchko'prik",
                        "uz": "Uchko'prik",
                        "ru": "Учкуприк",
                        "type": "24"
                    },
                    "1730221553": {
                        "en": "Begobod",
                        "uz": "Begobod",
                        "ru": "Бегабад",
                        "type": "24"
                    },
                    "1730221555": {
                        "en": "G'ijdan",
                        "uz": "G'ijdan",
                        "ru": "Гиждан",
                        "type": "24"
                    },
                    "1730221557": {
                        "en": "Katta Qashqar",
                        "uz": "Katta Qashqar",
                        "ru": "Катта кашкар",
                        "type": "24"
                    },
                    "1730221559": {
                        "en": "Qumariqobod",
                        "uz": "Qumariqobod",
                        "ru": "Кумарикобод",
                        "type": "24"
                    },
                    "1730221561": {
                        "en": "Bog'ibo'ston",
                        "uz": "Bog'ibo'ston",
                        "ru": "Богибустон",
                        "type": "24"
                    },
                    "1730221563": {
                        "en": "Mirzaxo'ja",
                        "uz": "Mirzaxo'ja",
                        "ru": "Мирзахужа",
                        "type": "24"
                    },
                    "1730221565": {
                        "en": "Palaxon",
                        "uz": "Palaxon",
                        "ru": "Палахон",
                        "type": "24"
                    },
                    "1730221567": {
                        "en": "Sobirjon",
                        "uz": "Sobirjon",
                        "ru": "Собиржан",
                        "type": "24"
                    },
                    "1730221569": {
                        "en": "Turg'oq",
                        "uz": "Turg'oq",
                        "ru": "Тургок",
                        "type": "24"
                    },
                    "1730221571": {
                        "en": "Yangiqishloq",
                        "uz": "Yangiqishloq",
                        "ru": "Янгикишлок",
                        "type": "24"
                    },
                    "1730221816": {
                        "en": "G'ijdon",
                        "uz": "G'ijdon",
                        "ru": "Гиждан",
                        "type": "31"
                    },
                    "1730221828": {
                        "en": "Kenagas",
                        "uz": "Kenagas",
                        "ru": "Кенагас",
                        "type": "31"
                    },
                    "1730221839": {
                        "en": "Navro'z",
                        "uz": "Navro'z",
                        "ru": "Навруз",
                        "type": "31"
                    },
                    "1730221851": {
                        "en": "Chorbog'",
                        "uz": "Chorbog'",
                        "ru": "Чарбог",
                        "type": "31"
                    },
                    "1730221856": {
                        "en": "Palaxon",
                        "uz": "Palaxon",
                        "ru": "Палахан",
                        "type": "31"
                    },
                    "1730221859": {
                        "en": "Sariqo'rg'on",
                        "uz": "Sariqo'rg'on",
                        "ru": "Сарыкурган",
                        "type": "31"
                    },
                    "1730221862": {
                        "en": "Uchko'prik",
                        "uz": "Uchko'prik",
                        "ru": "Учкуприк",
                        "type": "31"
                    },
                    "1730221873": {
                        "en": "Yangiqishloq",
                        "uz": "Yangiqishloq",
                        "ru": "Янгикишлак",
                        "type": "31"
                    },
                    "1730221876": {
                        "en": "Obod diyor",
                        "uz": "Obod diyor",
                        "ru": "Обод диер",
                        "type": "31"
                    }
                }
            },
            "1730224": {
                "en": "Rishton district",
                "uz": "Rishton tumani",
                "ru": "Риштанский район",
                "type": "20",
                "settlements": {
                    "1730224501": {
                        "en": "Rishton",
                        "uz": "Rishton",
                        "ru": "Риштан",
                        "type": "23"
                    },
                    "1730224552": {
                        "en": "Avazboy",
                        "uz": "Avazboy",
                        "ru": "Авазбай",
                        "type": "24"
                    },
                    "1730224554": {
                        "en": "Beshkapa",
                        "uz": "Beshkapa",
                        "ru": "Бешкапа",
                        "type": "24"
                    },
                    "1730224556": {
                        "en": "Bujay",
                        "uz": "Bujay",
                        "ru": "Бужай",
                        "type": "24"
                    },
                    "1730224558": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустан",
                        "type": "24"
                    },
                    "1730224562": {
                        "en": "Do'tir",
                        "uz": "Do'tir",
                        "ru": "Дутир",
                        "type": "24"
                    },
                    "1730224564": {
                        "en": "Saxovat",
                        "uz": "Saxovat",
                        "ru": "Саховат",
                        "type": "24"
                    },
                    "1730224566": {
                        "en": "Zoxidon",
                        "uz": "Zoxidon",
                        "ru": "Зохидан",
                        "type": "24"
                    },
                    "1730224568": {
                        "en": "Qayrag'och",
                        "uz": "Qayrag'och",
                        "ru": "Кайрагач",
                        "type": "24"
                    },
                    "1730224572": {
                        "en": "Oq-yer",
                        "uz": "Oq-yer",
                        "ru": "Ак-ер",
                        "type": "24"
                    },
                    "1730224574": {
                        "en": "Pandigon",
                        "uz": "Pandigon",
                        "ru": "Пандиган",
                        "type": "24"
                    },
                    "1730224576": {
                        "en": "To'da",
                        "uz": "To'da",
                        "ru": "Туда",
                        "type": "24"
                    },
                    "1730224578": {
                        "en": "O'yrat",
                        "uz": "O'yrat",
                        "ru": "Уйрат",
                        "type": "24"
                    },
                    "1730224582": {
                        "en": "Xurramobod",
                        "uz": "Xurramobod",
                        "ru": "Хуррамабад",
                        "type": "24"
                    },
                    "1730224804": {
                        "en": "Oq-oltin",
                        "uz": "Oq-oltin",
                        "ru": "Акалтын",
                        "type": "31"
                    },
                    "1730224806": {
                        "en": "Oq-yer",
                        "uz": "Oq-yer",
                        "ru": "Акъер",
                        "type": "31"
                    },
                    "1730224823": {
                        "en": "Beshkapa",
                        "uz": "Beshkapa",
                        "ru": "Бешкапа",
                        "type": "31"
                    },
                    "1730224829": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустан",
                        "type": "31"
                    },
                    "1730224835": {
                        "en": "Mehnatobod",
                        "uz": "Mehnatobod",
                        "ru": "Мехнатабад",
                        "type": "31"
                    },
                    "1730224846": {
                        "en": "Rishton",
                        "uz": "Rishton",
                        "ru": "Риштан",
                        "type": "31"
                    },
                    "1730224868": {
                        "en": "Zoxidon",
                        "uz": "Zoxidon",
                        "ru": "Зохидон",
                        "type": "31"
                    },
                    "1730224879": {
                        "en": "To'da",
                        "uz": "To'da",
                        "ru": "Туда",
                        "type": "31"
                    },
                    "1730224890": {
                        "en": "O'smonxo'jayev",
                        "uz": "O'smonxo'jayev",
                        "ru": "им. Б. Усманходжаева",
                        "type": "31"
                    },
                    "1730224895": {
                        "en": "Yoyilma",
                        "uz": "Yoyilma",
                        "ru": "Яйилма",
                        "type": "31"
                    },
                    "1730224897": {
                        "en": "Qayrag'och",
                        "uz": "Qayrag'och",
                        "ru": "Кайрагач",
                        "type": "31"
                    }
                }
            },
            "1730226": {
                "en": "So'x district",
                "uz": "So'x tumani",
                "ru": "Сохский район",
                "type": "20",
                "settlements": {
                    "1730226551": {
                        "en": "Ravon",
                        "uz": "Ravon",
                        "ru": "Равон",
                        "type": "24"
                    },
                    "1730226554": {
                        "en": "Qal'a",
                        "uz": "Qal'a",
                        "ru": "Калъа",
                        "type": "24"
                    },
                    "1730226557": {
                        "en": "Sarikanda",
                        "uz": "Sarikanda",
                        "ru": "Сариканда",
                        "type": "24"
                    },
                    "1730226561": {
                        "en": "So'x",
                        "uz": "So'x",
                        "ru": "Сох",
                        "type": "24"
                    },
                    "1730226564": {
                        "en": "Tul",
                        "uz": "Tul",
                        "ru": "Тул",
                        "type": "24"
                    },
                    "1730226567": {
                        "en": "Hushyor",
                        "uz": "Hushyor",
                        "ru": "Хушер",
                        "type": "24"
                    },
                    "1730226571": {
                        "en": "Tarovatli",
                        "uz": "Tarovatli",
                        "ru": "Тароватли",
                        "type": "24"
                    },
                    "1730226812": {
                        "en": "Sohibkor",
                        "uz": "Sohibkor",
                        "ru": "Сохибкор",
                        "type": "31"
                    },
                    "1730226840": {
                        "en": "Ravon",
                        "uz": "Ravon",
                        "ru": "Раван",
                        "type": "31"
                    },
                    "1730226857": {
                        "en": "So'x",
                        "uz": "So'x",
                        "ru": "Сох",
                        "type": "31"
                    },
                    "1730226893": {
                        "en": "Hushyor",
                        "uz": "Hushyor",
                        "ru": "Хушъяр",
                        "type": "31"
                    }
                }
            },
            "1730227": {
                "en": "Toshloq district",
                "uz": "Toshloq tumani",
                "ru": "Ташлакский район",
                "type": "20",
                "settlements": {
                    "1730227551": {
                        "en": "Toshloq",
                        "uz": "Toshloq",
                        "ru": "Ташлак",
                        "type": "24"
                    },
                    "1730227553": {
                        "en": "Arabmozor",
                        "uz": "Arabmozor",
                        "ru": "Арабмозор",
                        "type": "24"
                    },
                    "1730227555": {
                        "en": "Axshak",
                        "uz": "Axshak",
                        "ru": "Ахшак",
                        "type": "24"
                    },
                    "1730227557": {
                        "en": "Varzak",
                        "uz": "Varzak",
                        "ru": "Варзак",
                        "type": "24"
                    },
                    "1730227559": {
                        "en": "Zarkent",
                        "uz": "Zarkent",
                        "ru": "Заркент",
                        "type": "24"
                    },
                    "1730227561": {
                        "en": "Qumariq",
                        "uz": "Qumariq",
                        "ru": "Кумарик",
                        "type": "24"
                    },
                    "1730227563": {
                        "en": "Quyi Nayman",
                        "uz": "Quyi Nayman",
                        "ru": "Куйи Найман",
                        "type": "24"
                    },
                    "1730227565": {
                        "en": "Sadda",
                        "uz": "Sadda",
                        "ru": "Садда",
                        "type": "24"
                    },
                    "1730227567": {
                        "en": "Turvat",
                        "uz": "Turvat",
                        "ru": "Турват",
                        "type": "24"
                    },
                    "1730227569": {
                        "en": "Yakkatut",
                        "uz": "Yakkatut",
                        "ru": "Яккатут",
                        "type": "24"
                    },
                    "1730227810": {
                        "en": "Axshak",
                        "uz": "Axshak",
                        "ru": "Ахшак",
                        "type": "31"
                    },
                    "1730227815": {
                        "en": "Quyi Yakkatut",
                        "uz": "Quyi Yakkatut",
                        "ru": "Куйи Яккатут",
                        "type": "31"
                    },
                    "1730227823": {
                        "en": "Varzak",
                        "uz": "Varzak",
                        "ru": "Варзак",
                        "type": "31"
                    },
                    "1730227836": {
                        "en": "Arabmozor",
                        "uz": "Arabmozor",
                        "ru": "Арабмазар",
                        "type": "31"
                    },
                    "1730227849": {
                        "en": "Qumariq",
                        "uz": "Qumariq",
                        "ru": "Кумарык",
                        "type": "31"
                    },
                    "1730227853": {
                        "en": "Nayman",
                        "uz": "Nayman",
                        "ru": "Найман",
                        "type": "31"
                    },
                    "1730227855": {
                        "en": "Naymanbo'ston",
                        "uz": "Naymanbo'ston",
                        "ru": "Найманбустан",
                        "type": "31"
                    },
                    "1730227872": {
                        "en": "Sadda",
                        "uz": "Sadda",
                        "ru": "Садда",
                        "type": "31"
                    },
                    "1730227882": {
                        "en": "Zarkent",
                        "uz": "Zarkent",
                        "ru": "Заркент",
                        "type": "31"
                    },
                    "1730227885": {
                        "en": "Qo'rg'oncha",
                        "uz": "Qo'rg'oncha",
                        "ru": "Курганча",
                        "type": "31"
                    }
                }
            },
            "1730230": {
                "en": "O'zbekiston district",
                "uz": "O'zbekiston tumani",
                "ru": "Узбекистанский район",
                "type": "20",
                "settlements": {
                    "1730230501": {
                        "en": "Yaypan",
                        "uz": "Yaypan",
                        "ru": "Яйпан",
                        "type": "23"
                    },
                    "1730230556": {
                        "en": "Sho'rsuv",
                        "uz": "Sho'rsuv",
                        "ru": "Шорсу",
                        "type": "24"
                    },
                    "1730230558": {
                        "en": "Avg'on",
                        "uz": "Avg'on",
                        "ru": "Авгон",
                        "type": "24"
                    },
                    "1730230562": {
                        "en": "Dahana Qaqir",
                        "uz": "Dahana Qaqir",
                        "ru": "Дахана какир",
                        "type": "24"
                    },
                    "1730230564": {
                        "en": "Islom",
                        "uz": "Islom",
                        "ru": "Ислам",
                        "type": "24"
                    },
                    "1730230566": {
                        "en": "Katta Tagob",
                        "uz": "Katta Tagob",
                        "ru": "Катта Тагаб",
                        "type": "24"
                    },
                    "1730230568": {
                        "en": "Qizil Qaqir",
                        "uz": "Qizil Qaqir",
                        "ru": "Кизил какир",
                        "type": "24"
                    },
                    "1730230570": {
                        "en": "Kichik Tagob",
                        "uz": "Kichik Tagob",
                        "ru": "Кичик Тагаб",
                        "type": "24"
                    },
                    "1730230572": {
                        "en": "Sardoba",
                        "uz": "Sardoba",
                        "ru": "Сардоба",
                        "type": "24"
                    },
                    "1730230574": {
                        "en": "Kudash",
                        "uz": "Kudash",
                        "ru": "Кудаш",
                        "type": "24"
                    },
                    "1730230576": {
                        "en": "Kul elash",
                        "uz": "Kul elash",
                        "ru": "Кул элаш",
                        "type": "24"
                    },
                    "1730230577": {
                        "en": "Qulibek",
                        "uz": "Qulibek",
                        "ru": "Кулибек",
                        "type": "24"
                    },
                    "1730230578": {
                        "en": "Qumbosti",
                        "uz": "Qumbosti",
                        "ru": "Кумбосди",
                        "type": "24"
                    },
                    "1730230580": {
                        "en": "Qo'shqo'noq",
                        "uz": "Qo'shqo'noq",
                        "ru": "Кушкунак",
                        "type": "24"
                    },
                    "1730230582": {
                        "en": "Qo'rg'oncha",
                        "uz": "Qo'rg'oncha",
                        "ru": "Курганча",
                        "type": "24"
                    },
                    "1730230584": {
                        "en": "Nursux",
                        "uz": "Nursux",
                        "ru": "Нурсух",
                        "type": "24"
                    },
                    "1730230586": {
                        "en": "Ovchi",
                        "uz": "Ovchi",
                        "ru": "Овчи",
                        "type": "24"
                    },
                    "1730230588": {
                        "en": "Oyimcha Qaqir",
                        "uz": "Oyimcha Qaqir",
                        "ru": "Айимча какир",
                        "type": "24"
                    },
                    "1730230590": {
                        "en": "Oqmachit",
                        "uz": "Oqmachit",
                        "ru": "Акмачит",
                        "type": "24"
                    },
                    "1730230592": {
                        "en": "Oxta Tagob",
                        "uz": "Oxta Tagob",
                        "ru": "Ахта Тагаб",
                        "type": "24"
                    },
                    "1730230594": {
                        "en": "O'qchi Dasht",
                        "uz": "O'qchi Dasht",
                        "ru": "Укчи Дашт",
                        "type": "24"
                    },
                    "1730230596": {
                        "en": "O'qchi Rajabgardi",
                        "uz": "O'qchi Rajabgardi",
                        "ru": "Укчи Ражабгарди",
                        "type": "24"
                    },
                    "1730230598": {
                        "en": "Iftixor",
                        "uz": "Iftixor",
                        "ru": "Ифтихор",
                        "type": "24"
                    },
                    "1730230807": {
                        "en": "Ovchi",
                        "uz": "Ovchi",
                        "ru": "Авчи",
                        "type": "31"
                    },
                    "1730230811": {
                        "en": "Qorayozbobo",
                        "uz": "Qorayozbobo",
                        "ru": "Кораезбобо",
                        "type": "31"
                    },
                    "1730230822": {
                        "en": "G'aniobod",
                        "uz": "G'aniobod",
                        "ru": "Ганиабад",
                        "type": "31"
                    },
                    "1730230838": {
                        "en": "Konizar",
                        "uz": "Konizar",
                        "ru": "Конизор",
                        "type": "31"
                    },
                    "1730230844": {
                        "en": "Qaynar",
                        "uz": "Qaynar",
                        "ru": "Кайнар",
                        "type": "31"
                    },
                    "1730230855": {
                        "en": "Mingtut",
                        "uz": "Mingtut",
                        "ru": "Мингтут",
                        "type": "31"
                    },
                    "1730230866": {
                        "en": "Nursux",
                        "uz": "Nursux",
                        "ru": "Нурсук",
                        "type": "31"
                    },
                    "1730230869": {
                        "en": "Rajabgardi",
                        "uz": "Rajabgardi",
                        "ru": "Раджабгарди",
                        "type": "31"
                    },
                    "1730230873": {
                        "en": "Qizil Qaqir",
                        "uz": "Qizil Qaqir",
                        "ru": "Кызыл какир",
                        "type": "31"
                    },
                    "1730230875": {
                        "en": "Tagob",
                        "uz": "Tagob",
                        "ru": "Тагаб",
                        "type": "31"
                    }
                }
            },
            "1730233": {
                "en": "Farg'ona district",
                "uz": "Farg'ona tumani",
                "ru": "Ферганский район",
                "type": "20",
                "settlements": {
                    "1730233555": {
                        "en": "Chimyon ( mavjud)",
                        "uz": "Chimyon ( mavjud)",
                        "ru": "Чимион",
                        "type": "24"
                    },
                    "1730233557": {
                        "en": "Avval",
                        "uz": "Avval",
                        "ru": "Аввал",
                        "type": "24"
                    },
                    "1730233559": {
                        "en": "Archa",
                        "uz": "Archa",
                        "ru": "Арча",
                        "type": "24"
                    },
                    "1730233561": {
                        "en": "Vodil",
                        "uz": "Vodil",
                        "ru": "Водил",
                        "type": "24"
                    },
                    "1730233563": {
                        "en": "Yuqori Vodil",
                        "uz": "Yuqori Vodil",
                        "ru": "Юкори Водил",
                        "type": "24"
                    },
                    "1730233565": {
                        "en": "Damko'l",
                        "uz": "Damko'l",
                        "ru": "Дамкул",
                        "type": "24"
                    },
                    "1730233567": {
                        "en": "Yoshlarobod",
                        "uz": "Yoshlarobod",
                        "ru": "Ешларабад",
                        "type": "24"
                    },
                    "1730233569": {
                        "en": "Qo'rg'ontepa",
                        "uz": "Qo'rg'ontepa",
                        "ru": "Кургонтепа",
                        "type": "24"
                    },
                    "1730233571": {
                        "en": "Langar",
                        "uz": "Langar",
                        "ru": "Лангар",
                        "type": "24"
                    },
                    "1730233573": {
                        "en": "Log'on",
                        "uz": "Log'on",
                        "ru": "Лаган",
                        "type": "24"
                    },
                    "1730233575": {
                        "en": "Mindon",
                        "uz": "Mindon",
                        "ru": "Миндон",
                        "type": "24"
                    },
                    "1730233577": {
                        "en": "Novkent",
                        "uz": "Novkent",
                        "ru": "Новкент",
                        "type": "24"
                    },
                    "1730233579": {
                        "en": "Yuqori Oqtepa",
                        "uz": "Yuqori Oqtepa",
                        "ru": "Юкори Октепа",
                        "type": "24"
                    },
                    "1730233581": {
                        "en": "Parvoz",
                        "uz": "Parvoz",
                        "ru": "Парвоз",
                        "type": "24"
                    },
                    "1730233583": {
                        "en": "Yuqori Soybo'yi",
                        "uz": "Yuqori Soybo'yi",
                        "ru": "Юкори Сойбуйи",
                        "type": "24"
                    },
                    "1730233585": {
                        "en": "Bahor",
                        "uz": "Bahor",
                        "ru": "Бахор",
                        "type": "24"
                    },
                    "1730233587": {
                        "en": "Xonqiz",
                        "uz": "Xonqiz",
                        "ru": "Хонкиз",
                        "type": "24"
                    },
                    "1730233589": {
                        "en": "Xo'roba",
                        "uz": "Xo'roba",
                        "ru": "Хуроба",
                        "type": "24"
                    },
                    "1730233591": {
                        "en": "Neftchilar",
                        "uz": "Neftchilar",
                        "ru": "Нефтчилар",
                        "type": "24"
                    },
                    "1730233593": {
                        "en": "Shoximardonobod",
                        "uz": "Shoximardonobod",
                        "ru": "Шохимардонабад",
                        "type": "24"
                    },
                    "1730233595": {
                        "en": "Yuqori Mindon",
                        "uz": "Yuqori Mindon",
                        "ru": "Юкори миндан",
                        "type": "24"
                    },
                    "1730233804": {
                        "en": "Avval",
                        "uz": "Avval",
                        "ru": "Ауваль",
                        "type": "31"
                    },
                    "1730233816": {
                        "en": "Gulshan",
                        "uz": "Gulshan",
                        "ru": "Гульшан",
                        "type": "31"
                    },
                    "1730233821": {
                        "en": "Qo'rg'ontepa",
                        "uz": "Qo'rg'ontepa",
                        "ru": "Кургантепа",
                        "type": "31"
                    },
                    "1730233826": {
                        "en": "Soy bo'yi",
                        "uz": "Soy bo'yi",
                        "ru": "Сайбуйи",
                        "type": "31"
                    },
                    "1730233830": {
                        "en": "Log'on",
                        "uz": "Log'on",
                        "ru": "Лаган",
                        "type": "31"
                    },
                    "1730233836": {
                        "en": "Mindon",
                        "uz": "Mindon",
                        "ru": "Миндан",
                        "type": "31"
                    },
                    "1730233839": {
                        "en": "Navkat",
                        "uz": "Navkat",
                        "ru": "Навкат",
                        "type": "31"
                    },
                    "1730233847": {
                        "en": "Qaptarxona",
                        "uz": "Qaptarxona",
                        "ru": "Каптаpхона",
                        "type": "31"
                    },
                    "1730233864": {
                        "en": "Shoximardon",
                        "uz": "Shoximardon",
                        "ru": "Шахимаpдан",
                        "type": "31"
                    },
                    "1730233870": {
                        "en": "Parvoz",
                        "uz": "Parvoz",
                        "ru": "Парвоз",
                        "type": "31"
                    },
                    "1730233876": {
                        "en": "Chimyon",
                        "uz": "Chimyon",
                        "ru": "Чимион",
                        "type": "31"
                    },
                    "1730233880": {
                        "en": "Damko'l",
                        "uz": "Damko'l",
                        "ru": "Дамкуль",
                        "type": "31"
                    },
                    "1730233885": {
                        "en": "Xonqiz",
                        "uz": "Xonqiz",
                        "ru": "Ханкыз",
                        "type": "31"
                    },
                    "1730233890": {
                        "en": "Oqbilol",
                        "uz": "Oqbilol",
                        "ru": "Акбилал",
                        "type": "31"
                    },
                    "1730233895": {
                        "en": "Yuqori Vodil",
                        "uz": "Yuqori Vodil",
                        "ru": "Юкоpи Вуадыл",
                        "type": "31"
                    },
                    "1730233898": {
                        "en": "Vodil",
                        "uz": "Vodil",
                        "ru": "Вуадыл",
                        "type": "31"
                    }
                }
            },
            "1730236": {
                "en": "Dang'ara district",
                "uz": "Dang'ara tumani",
                "ru": "Дангаринский район",
                "type": "20",
                "settlements": {
                    "1730236551": {
                        "en": "Dang'ara",
                        "uz": "Dang'ara",
                        "ru": "Дангара",
                        "type": "24"
                    },
                    "1730236554": {
                        "en": "Doimobod",
                        "uz": "Doimobod",
                        "ru": "Доимабад",
                        "type": "24"
                    },
                    "1730236557": {
                        "en": "Katta Ganjiravon",
                        "uz": "Katta Ganjiravon",
                        "ru": "Катта ганжиравон",
                        "type": "24"
                    },
                    "1730236561": {
                        "en": "Katta Turk",
                        "uz": "Katta Turk",
                        "ru": "Катта турк",
                        "type": "24"
                    },
                    "1730236564": {
                        "en": "Qum Qiyali",
                        "uz": "Qum Qiyali",
                        "ru": "Кум кияли",
                        "type": "24"
                    },
                    "1730236567": {
                        "en": "Toptiqsaroy",
                        "uz": "Toptiqsaroy",
                        "ru": "Топтиксарай",
                        "type": "24"
                    },
                    "1730236571": {
                        "en": "Tumor",
                        "uz": "Tumor",
                        "ru": "Тумор",
                        "type": "24"
                    },
                    "1730236574": {
                        "en": "Yuqori Urganji",
                        "uz": "Yuqori Urganji",
                        "ru": "Юкори Урганжи",
                        "type": "24"
                    },
                    "1730236577": {
                        "en": "Yangi zamon",
                        "uz": "Yangi zamon",
                        "ru": "Янги замон",
                        "type": "24"
                    },
                    "1730236803": {
                        "en": "Oqdjar",
                        "uz": "Oqdjar",
                        "ru": "Акджар",
                        "type": "31"
                    },
                    "1730236808": {
                        "en": "Sohil",
                        "uz": "Sohil",
                        "ru": "Сохил",
                        "type": "31"
                    },
                    "1730236822": {
                        "en": "Naymancha",
                        "uz": "Naymancha",
                        "ru": "Найманча",
                        "type": "31"
                    },
                    "1730236830": {
                        "en": "Qiyali",
                        "uz": "Qiyali",
                        "ru": "Кияли",
                        "type": "31"
                    },
                    "1730236833": {
                        "en": "Mulkobod",
                        "uz": "Mulkobod",
                        "ru": "Мулкабад",
                        "type": "31"
                    },
                    "1730236841": {
                        "en": "Sanam",
                        "uz": "Sanam",
                        "ru": "Санам",
                        "type": "31"
                    },
                    "1730236844": {
                        "en": "Chinobod",
                        "uz": "Chinobod",
                        "ru": "Чинабад",
                        "type": "31"
                    },
                    "1730236855": {
                        "en": "Taypoq",
                        "uz": "Taypoq",
                        "ru": "Тайпак",
                        "type": "31"
                    }
                }
            },
            "1730238": {
                "en": "Furqat district",
                "uz": "Furqat tumani",
                "ru": "Фуркатский район",
                "type": "20",
                "settlements": {
                    "1730238551": {
                        "en": "Navbahor",
                        "uz": "Navbahor",
                        "ru": "Навбахор",
                        "type": "24"
                    },
                    "1730238553": {
                        "en": "Kaldo'shan",
                        "uz": "Kaldo'shan",
                        "ru": "Калдушан",
                        "type": "24"
                    },
                    "1730238555": {
                        "en": "Qo'qonboy",
                        "uz": "Qo'qonboy",
                        "ru": "Куконбай",
                        "type": "24"
                    },
                    "1730238557": {
                        "en": "Tomosha",
                        "uz": "Tomosha",
                        "ru": "Томоша",
                        "type": "24"
                    },
                    "1730238559": {
                        "en": "Chek chuvaldak",
                        "uz": "Chek chuvaldak",
                        "ru": "Чек чувалдак",
                        "type": "24"
                    },
                    "1730238561": {
                        "en": "Shoyinbek",
                        "uz": "Shoyinbek",
                        "ru": "Шойинбек",
                        "type": "24"
                    },
                    "1730238563": {
                        "en": "Eski",
                        "uz": "Eski",
                        "ru": "Эски",
                        "type": "24"
                    },
                    "1730238565": {
                        "en": "Eshon",
                        "uz": "Eshon",
                        "ru": "Эшон",
                        "type": "24"
                    },
                    "1730238810": {
                        "en": "G'allakor",
                        "uz": "G'allakor",
                        "ru": "Галлакор",
                        "type": "31"
                    },
                    "1730238830": {
                        "en": "Qo'qon",
                        "uz": "Qo'qon",
                        "ru": "Коканд",
                        "type": "31"
                    },
                    "1730238835": {
                        "en": "Navbahor",
                        "uz": "Navbahor",
                        "ru": "Навбахор",
                        "type": "31"
                    },
                    "1730238840": {
                        "en": "Tomosha",
                        "uz": "Tomosha",
                        "ru": "Тамаша",
                        "type": "31"
                    },
                    "1730238850": {
                        "en": "Shunkor",
                        "uz": "Shunkor",
                        "ru": "Шункар",
                        "type": "31"
                    },
                    "1730238855": {
                        "en": "G'uncha",
                        "uz": "G'uncha",
                        "ru": "Гунча",
                        "type": "31"
                    }
                }
            },
            "1730242": {
                "en": "Yozyovon district",
                "uz": "Yozyovon tumani",
                "ru": "Язъяванский район",
                "type": "20",
                "settlements": {
                    "1730242551": {
                        "en": "Yozyovon",
                        "uz": "Yozyovon",
                        "ru": "Язъяван",
                        "type": "24"
                    },
                    "1730242554": {
                        "en": "Yozyovon chek",
                        "uz": "Yozyovon chek",
                        "ru": "Езевон чек",
                        "type": "24"
                    },
                    "1730242557": {
                        "en": "Yo'ldoshobod",
                        "uz": "Yo'ldoshobod",
                        "ru": "Йулдошабад",
                        "type": "24"
                    },
                    "1730242561": {
                        "en": "Qorasoqol",
                        "uz": "Qorasoqol",
                        "ru": "Карасакал",
                        "type": "24"
                    },
                    "1730242564": {
                        "en": "Qoratepa",
                        "uz": "Qoratepa",
                        "ru": "Коратепа",
                        "type": "24"
                    },
                    "1730242567": {
                        "en": "Kelajak",
                        "uz": "Kelajak",
                        "ru": "Келажак",
                        "type": "24"
                    },
                    "1730242571": {
                        "en": "Quyi Soybo'yi",
                        "uz": "Quyi Soybo'yi",
                        "ru": "Куйи Сойбуйи",
                        "type": "24"
                    },
                    "1730242574": {
                        "en": "Toshxovuz",
                        "uz": "Toshxovuz",
                        "ru": "Тошховуз",
                        "type": "24"
                    },
                    "1730242577": {
                        "en": "Xonobod",
                        "uz": "Xonobod",
                        "ru": "Хонабад",
                        "type": "24"
                    },
                    "1730242806": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистан",
                        "type": "31"
                    },
                    "1730242810": {
                        "en": "Qatortol",
                        "uz": "Qatortol",
                        "ru": "Катартал",
                        "type": "31"
                    },
                    "1730242817": {
                        "en": "Karatepa",
                        "uz": "Karatepa",
                        "ru": "Каpатепа",
                        "type": "31"
                    },
                    "1730242830": {
                        "en": "Xonobod",
                        "uz": "Xonobod",
                        "ru": "Ханабад",
                        "type": "31"
                    },
                    "1730242832": {
                        "en": "Istiqlol",
                        "uz": "Istiqlol",
                        "ru": "Истиклол",
                        "type": "31"
                    },
                    "1730242848": {
                        "en": "Yozyovon",
                        "uz": "Yozyovon",
                        "ru": "Язъяван",
                        "type": "31"
                    },
                    "1730242852": {
                        "en": "Yangiobod",
                        "uz": "Yangiobod",
                        "ru": "Янгиабад",
                        "type": "31"
                    },
                    "1730242855": {
                        "en": "Ishtirxon",
                        "uz": "Ishtirxon",
                        "ru": "Иштиpхон",
                        "type": "31"
                    },
                    "1730242860": {
                        "en": "Qorasoqol",
                        "uz": "Qorasoqol",
                        "ru": "Карасакал",
                        "type": "31"
                    },
                    "1730242865": {
                        "en": "Yangibo'ston",
                        "uz": "Yangibo'ston",
                        "ru": "Янгибустан",
                        "type": "31"
                    }
                }
            },
            "1730401": {
                "en": "Farg'ona",
                "uz": "Farg'ona",
                "ru": "Фергана",
                "type": "21"
            },
            "1730405": {
                "en": "Qo'qon",
                "uz": "Qo'qon",
                "ru": "Коканд",
                "type": "21",
                "settlements": {
                    "1730405555": {
                        "en": "Muqimiy",
                        "uz": "Muqimiy",
                        "ru": "Мукими",
                        "type": "24"
                    }
                }
            },
            "1730408": {
                "en": "Quvasoy",
                "uz": "Quvasoy",
                "ru": "Кувасай",
                "type": "21",
                "settlements": {
                    "1730408555": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "24"
                    },
                    "1730408811": {
                        "en": "Arsif",
                        "uz": "Arsif",
                        "ru": "Арсив",
                        "type": "31"
                    },
                    "1730408822": {
                        "en": "Valik",
                        "uz": "Valik",
                        "ru": "Валик",
                        "type": "31"
                    },
                    "1730408829": {
                        "en": "Qo'chqorchi",
                        "uz": "Qo'chqorchi",
                        "ru": "Кучкаpчи",
                        "type": "31"
                    },
                    "1730408833": {
                        "en": "Muyon",
                        "uz": "Muyon",
                        "ru": "Муян",
                        "type": "31"
                    },
                    "1730408841": {
                        "en": "Isfayramsoy",
                        "uz": "Isfayramsoy",
                        "ru": "Исфайрамсой",
                        "type": "31"
                    },
                    "1730408845": {
                        "en": "So'fon",
                        "uz": "So'fon",
                        "ru": "Суфан",
                        "type": "31"
                    }
                }
            },
            "1730412": {
                "en": "Marg'ilon",
                "uz": "Marg'ilon",
                "ru": "Маpгилан",
                "type": "21",
                "settlements": {
                    "1730412557": {
                        "en": "Yangi Marg'ilon",
                        "uz": "Yangi Marg'ilon",
                        "ru": "Янги Маpгилан",
                        "type": "24"
                    }
                }
            }
        }
    },
    "1733": {
        "en": "Khorezm region",
        "uz": "Xorazm viloyati",
        "ru": "Хорезмская область",
        "districts": {
            "1733204": {
                "en": "Bog'ot district",
                "uz": "Bog'ot tumani",
                "ru": "Багатский район",
                "type": "20",
                "settlements": {
                    "1733204551": {
                        "en": "Bog'ot",
                        "uz": "Bog'ot",
                        "ru": "Багат",
                        "type": "24"
                    },
                    "1733204553": {
                        "en": "Nurafshon",
                        "uz": "Nurafshon",
                        "ru": "Нурафшон",
                        "type": "24"
                    },
                    "1733204555": {
                        "en": "Oltinqum",
                        "uz": "Oltinqum",
                        "ru": "Олтинкум",
                        "type": "24"
                    },
                    "1733204557": {
                        "en": "Uzumzor",
                        "uz": "Uzumzor",
                        "ru": "Узумзор",
                        "type": "24"
                    },
                    "1733204559": {
                        "en": "Yangiqadam",
                        "uz": "Yangiqadam",
                        "ru": "Янгикадам",
                        "type": "24"
                    },
                    "1733204805": {
                        "en": "Qorayong'oq",
                        "uz": "Qorayong'oq",
                        "ru": "Караянтак",
                        "type": "31"
                    },
                    "1733204813": {
                        "en": "Beshariq",
                        "uz": "Beshariq",
                        "ru": "Бешарык",
                        "type": "31"
                    },
                    "1733204822": {
                        "en": "Dehqonbozor",
                        "uz": "Dehqonbozor",
                        "ru": "Дехканбазар",
                        "type": "31"
                    },
                    "1733204833": {
                        "en": "Qulonqorabog'",
                        "uz": "Qulonqorabog'",
                        "ru": "Куланкарабаг",
                        "type": "31"
                    },
                    "1733204844": {
                        "en": "O'g'uzrabot",
                        "uz": "O'g'uzrabot",
                        "ru": "Угузработ",
                        "type": "31"
                    },
                    "1733204849": {
                        "en": "Madaniyat",
                        "uz": "Madaniyat",
                        "ru": "Маданият",
                        "type": "31"
                    },
                    "1733204855": {
                        "en": "Nayman",
                        "uz": "Nayman",
                        "ru": "Найман",
                        "type": "31"
                    },
                    "1733204866": {
                        "en": "Mirishkor",
                        "uz": "Mirishkor",
                        "ru": "Миришкор",
                        "type": "31"
                    },
                    "1733204870": {
                        "en": "Xo'jalik",
                        "uz": "Xo'jalik",
                        "ru": "Хужалик",
                        "type": "31"
                    },
                    "1733204875": {
                        "en": "Qipchoq",
                        "uz": "Qipchoq",
                        "ru": "Кипчак",
                        "type": "31"
                    }
                }
            },
            "1733208": {
                "en": "Gurlan district",
                "uz": "Gurlan tumani",
                "ru": "Гурленский район",
                "type": "20",
                "settlements": {
                    "1733208551": {
                        "en": "Gurlan",
                        "uz": "Gurlan",
                        "ru": "Гурлен",
                        "type": "24"
                    },
                    "1733208554": {
                        "en": "Chakkalar",
                        "uz": "Chakkalar",
                        "ru": "Чаккалар",
                        "type": "24"
                    },
                    "1733208557": {
                        "en": "Bo'zqal'a",
                        "uz": "Bo'zqal'a",
                        "ru": "Бузкалъа",
                        "type": "24"
                    },
                    "1733208561": {
                        "en": "Nurzamin",
                        "uz": "Nurzamin",
                        "ru": "Нурзамин",
                        "type": "24"
                    },
                    "1733208564": {
                        "en": "Nukus yop",
                        "uz": "Nukus yop",
                        "ru": "Нукус еп",
                        "type": "24"
                    },
                    "1733208567": {
                        "en": "Markaziy Guliston",
                        "uz": "Markaziy Guliston",
                        "ru": "Марказий Гулистан",
                        "type": "24"
                    },
                    "1733208571": {
                        "en": "Do'simbiy",
                        "uz": "Do'simbiy",
                        "ru": "Дусимбий",
                        "type": "24"
                    },
                    "1733208574": {
                        "en": "Taxtako'pir",
                        "uz": "Taxtako'pir",
                        "ru": "Тахтакупир",
                        "type": "24"
                    },
                    "1733208577": {
                        "en": "Yormish",
                        "uz": "Yormish",
                        "ru": "Ермиш",
                        "type": "24"
                    },
                    "1733208803": {
                        "en": "Olg'a",
                        "uz": "Olg'a",
                        "ru": "Алга",
                        "type": "31"
                    },
                    "1733208820": {
                        "en": "Vazir",
                        "uz": "Vazir",
                        "ru": "Вазир",
                        "type": "31"
                    },
                    "1733208825": {
                        "en": "Guliston",
                        "uz": "Guliston",
                        "ru": "Гулистан",
                        "type": "31"
                    },
                    "1733208826": {
                        "en": "Xizireli",
                        "uz": "Xizireli",
                        "ru": "Хизирэли",
                        "type": "31"
                    },
                    "1733208835": {
                        "en": "Birlashgan",
                        "uz": "Birlashgan",
                        "ru": "Бирлашган",
                        "type": "31"
                    },
                    "1733208855": {
                        "en": "Saxtiyon",
                        "uz": "Saxtiyon",
                        "ru": "Сахтиян",
                        "type": "31"
                    },
                    "1733208857": {
                        "en": "Do'simbiy",
                        "uz": "Do'simbiy",
                        "ru": "Досимбий",
                        "type": "31"
                    },
                    "1733208874": {
                        "en": "Sholikor",
                        "uz": "Sholikor",
                        "ru": "Шаликор",
                        "type": "31"
                    },
                    "1733208881": {
                        "en": "Eshimjiron",
                        "uz": "Eshimjiron",
                        "ru": "Эшимжиран",
                        "type": "31"
                    }
                }
            },
            "1733212": {
                "en": "Qo'shko'pir district",
                "uz": "Qo'shko'pir tumani",
                "ru": "Кошкупырский район",
                "type": "20",
                "settlements": {
                    "1733212551": {
                        "en": "Qo'shko'pir",
                        "uz": "Qo'shko'pir",
                        "ru": "Кошкупыр",
                        "type": "24"
                    },
                    "1733212553": {
                        "en": "Qoromon",
                        "uz": "Qoromon",
                        "ru": "Караман",
                        "type": "24"
                    },
                    "1733212555": {
                        "en": "O'rta qishloq",
                        "uz": "O'rta qishloq",
                        "ru": "Урта кишлак",
                        "type": "24"
                    },
                    "1733212557": {
                        "en": "Xonbod",
                        "uz": "Xonbod",
                        "ru": "Хонабад",
                        "type": "24"
                    },
                    "1733212559": {
                        "en": "Shixmashhad",
                        "uz": "Shixmashhad",
                        "ru": "Шихмашхад",
                        "type": "24"
                    },
                    "1733212561": {
                        "en": "Sherobod",
                        "uz": "Sherobod",
                        "ru": "Шерабад",
                        "type": "24"
                    },
                    "1733212811": {
                        "en": "Shix",
                        "uz": "Shix",
                        "ru": "Ших",
                        "type": "31"
                    },
                    "1733212822": {
                        "en": "G'ozovot",
                        "uz": "G'ozovot",
                        "ru": "Газават",
                        "type": "31"
                    },
                    "1733212827": {
                        "en": "Oqdarband",
                        "uz": "Oqdarband",
                        "ru": "Акдарбанд",
                        "type": "31"
                    },
                    "1733212833": {
                        "en": "Qotog'on",
                        "uz": "Qotog'on",
                        "ru": "Котогон",
                        "type": "31"
                    },
                    "1733212840": {
                        "en": "Kenagas",
                        "uz": "Kenagas",
                        "ru": "Кенегес",
                        "type": "31"
                    },
                    "1733212856": {
                        "en": "O'zbekyap",
                        "uz": "O'zbekyap",
                        "ru": "Узбекяб",
                        "type": "31"
                    },
                    "1733212867": {
                        "en": "O'rtayap",
                        "uz": "O'rtayap",
                        "ru": "Уртаяп",
                        "type": "31"
                    },
                    "1733212878": {
                        "en": "Xadra",
                        "uz": "Xadra",
                        "ru": "Хадра",
                        "type": "31"
                    },
                    "1733212889": {
                        "en": "Xonobod",
                        "uz": "Xonobod",
                        "ru": "Ханабад",
                        "type": "31"
                    },
                    "1733212891": {
                        "en": "Xosiyon",
                        "uz": "Xosiyon",
                        "ru": "Хасиян",
                        "type": "31"
                    },
                    "1733212893": {
                        "en": "Xayrobod",
                        "uz": "Xayrobod",
                        "ru": "Хайрабад",
                        "type": "31"
                    },
                    "1733212895": {
                        "en": "Yangilik",
                        "uz": "Yangilik",
                        "ru": "Янгилик",
                        "type": "31"
                    }
                }
            },
            "1733217": {
                "en": "Urganch district",
                "uz": "Urganch tumani",
                "ru": "Ургенчский район",
                "type": "20",
                "settlements": {
                    "1733217554": {
                        "en": "Cholish",
                        "uz": "Cholish",
                        "ru": "Чалыш",
                        "type": "24"
                    },
                    "1733217558": {
                        "en": "Oq oltin",
                        "uz": "Oq oltin",
                        "ru": "Ак алтин",
                        "type": "24"
                    },
                    "1733217562": {
                        "en": "Chandir",
                        "uz": "Chandir",
                        "ru": "Чондир",
                        "type": "24"
                    },
                    "1733217566": {
                        "en": "Ko'palik",
                        "uz": "Ko'palik",
                        "ru": "Купалик",
                        "type": "24"
                    },
                    "1733217572": {
                        "en": "Gardonlar",
                        "uz": "Gardonlar",
                        "ru": "Гардонлар",
                        "type": "24"
                    },
                    "1733217822": {
                        "en": "Bekobod",
                        "uz": "Bekobod",
                        "ru": "Бекабад",
                        "type": "31"
                    },
                    "1733217833": {
                        "en": "G'aybu",
                        "uz": "G'aybu",
                        "ru": "Гайбу",
                        "type": "31"
                    },
                    "1733217844": {
                        "en": "Qoromon",
                        "uz": "Qoromon",
                        "ru": "Караман",
                        "type": "31"
                    },
                    "1733217855": {
                        "en": "Qoroul",
                        "uz": "Qoroul",
                        "ru": "Караул",
                        "type": "31"
                    },
                    "1733217863": {
                        "en": "Chatko'pir",
                        "uz": "Chatko'pir",
                        "ru": "Чаткупыр",
                        "type": "31"
                    },
                    "1733217869": {
                        "en": "Chakkasholikor",
                        "uz": "Chakkasholikor",
                        "ru": "Чаккашаликар",
                        "type": "31"
                    },
                    "1733217872": {
                        "en": "Chandirkiyat",
                        "uz": "Chandirkiyat",
                        "ru": "Чандиркият",
                        "type": "31"
                    },
                    "1733217882": {
                        "en": "Yuqori bog'",
                        "uz": "Yuqori bog'",
                        "ru": "Юкарибаг",
                        "type": "31"
                    },
                    "1733217890": {
                        "en": "Yuqori do'rman",
                        "uz": "Yuqori do'rman",
                        "ru": "Юкары-Дорман",
                        "type": "31"
                    },
                    "1733217895": {
                        "en": "G'alaba",
                        "uz": "G'alaba",
                        "ru": "Галаба",
                        "type": "31"
                    }
                }
            },
            "1733220": {
                "en": "Xazorasp district",
                "uz": "Xazorasp tumani",
                "ru": "Хазараспский район",
                "type": "20",
                "settlements": {
                    "1733220551": {
                        "en": "Xazorasp",
                        "uz": "Xazorasp",
                        "ru": "Хазарасп",
                        "type": "24"
                    },
                    "1733220553": {
                        "en": "Oq yop",
                        "uz": "Oq yop",
                        "ru": "Ак еп",
                        "type": "24"
                    },
                    "1733220555": {
                        "en": "Oyok ovvo",
                        "uz": "Oyok ovvo",
                        "ru": "Аек-авва",
                        "type": "24"
                    },
                    "1733220557": {
                        "en": "Nurxayot",
                        "uz": "Nurxayot",
                        "ru": "Нурхаёт",
                        "type": "24"
                    },
                    "1733220803": {
                        "en": "Ovshar",
                        "uz": "Ovshar",
                        "ru": "Авшар",
                        "type": "31"
                    },
                    "1733220806": {
                        "en": "Karvak",
                        "uz": "Karvak",
                        "ru": "Карвак",
                        "type": "31"
                    },
                    "1733220812": {
                        "en": "Beshta",
                        "uz": "Beshta",
                        "ru": "Бешта",
                        "type": "31"
                    },
                    "1733220814": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустан",
                        "type": "31"
                    },
                    "1733220822": {
                        "en": "Pitnak",
                        "uz": "Pitnak",
                        "ru": "Питнак",
                        "type": "31"
                    },
                    "1733220830": {
                        "en": "Pichoqchi",
                        "uz": "Pichoqchi",
                        "ru": "Пичакчи",
                        "type": "31"
                    },
                    "1733220845": {
                        "en": "Sanoat",
                        "uz": "Sanoat",
                        "ru": "Саноат",
                        "type": "31"
                    },
                    "1733220852": {
                        "en": "Sarimoy",
                        "uz": "Sarimoy",
                        "ru": "Саримай",
                        "type": "31"
                    },
                    "1733220862": {
                        "en": "Tuproqqal'a",
                        "uz": "Tuproqqal'a",
                        "ru": "Тупраккала",
                        "type": "31"
                    },
                    "1733220868": {
                        "en": "Muxomon",
                        "uz": "Muxomon",
                        "ru": "Мухаман",
                        "type": "31"
                    },
                    "1733220879": {
                        "en": "Yangibozor",
                        "uz": "Yangibozor",
                        "ru": "Янгибазар",
                        "type": "31"
                    }
                }
            },
            "1733221": {
                "en": "Tuproqqal'a district",
                "uz": "Tuproqqal'a tumani",
                "ru": "Тупроккалинский район",
                "type": "20",
                "settlements": {
                    "1733221501": {
                        "en": "Pitnak",
                        "uz": "Pitnak",
                        "ru": "Питнак",
                        "type": "23"
                    }
                }
            },
            "1733223": {
                "en": "Xonqa district",
                "uz": "Xonqa tumani",
                "ru": "Ханкинский район",
                "type": "20",
                "settlements": {
                    "1733223551": {
                        "en": "Xonqa",
                        "uz": "Xonqa",
                        "ru": "Ханка",
                        "type": "24"
                    },
                    "1733223553": {
                        "en": "Istiqlol",
                        "uz": "Istiqlol",
                        "ru": "Истиклол",
                        "type": "24"
                    },
                    "1733223555": {
                        "en": "Madaniy yer",
                        "uz": "Madaniy yer",
                        "ru": "Маданий ер",
                        "type": "24"
                    },
                    "1733223557": {
                        "en": "Birlashgan",
                        "uz": "Birlashgan",
                        "ru": "Бирлашган",
                        "type": "24"
                    },
                    "1733223559": {
                        "en": "Yosh kuch",
                        "uz": "Yosh kuch",
                        "ru": "Еш куч",
                        "type": "24"
                    },
                    "1733223803": {
                        "en": "Amudaryo",
                        "uz": "Amudaryo",
                        "ru": "Амударья",
                        "type": "31"
                    },
                    "1733223810": {
                        "en": "Qoraqosh",
                        "uz": "Qoraqosh",
                        "ru": "Каракош",
                        "type": "31"
                    },
                    "1733223812": {
                        "en": "Katta Jirmiz",
                        "uz": "Katta Jirmiz",
                        "ru": "Катта Жирмиз",
                        "type": "31"
                    },
                    "1733223820": {
                        "en": "Madir",
                        "uz": "Madir",
                        "ru": "Мадир",
                        "type": "31"
                    },
                    "1733223830": {
                        "en": "Qirq-yop",
                        "uz": "Qirq-yop",
                        "ru": "Кыркяп",
                        "type": "31"
                    },
                    "1733223835": {
                        "en": "Navxos",
                        "uz": "Navxos",
                        "ru": "Навхас",
                        "type": "31"
                    },
                    "1733223840": {
                        "en": "Namuna",
                        "uz": "Namuna",
                        "ru": "Намуна",
                        "type": "31"
                    },
                    "1733223860": {
                        "en": "Sarapoyon",
                        "uz": "Sarapoyon",
                        "ru": "Сарыпаян",
                        "type": "31"
                    },
                    "1733223870": {
                        "en": "Tomadurgadik",
                        "uz": "Tomadurgadik",
                        "ru": "Тамадургадык",
                        "type": "31"
                    },
                    "1733223890": {
                        "en": "Olaja",
                        "uz": "Olaja",
                        "ru": "Аладжа",
                        "type": "31"
                    }
                }
            },
            "1733226": {
                "en": "Xiva district",
                "uz": "Xiva tumani",
                "ru": "Хивинский район",
                "type": "20",
                "settlements": {
                    "1733226552": {
                        "en": "Gullanbog'",
                        "uz": "Gullanbog'",
                        "ru": "Гулланбаг",
                        "type": "24"
                    },
                    "1733226554": {
                        "en": "Parchanxos",
                        "uz": "Parchanxos",
                        "ru": "Парчанхас",
                        "type": "24"
                    },
                    "1733226562": {
                        "en": "Iftixor",
                        "uz": "Iftixor",
                        "ru": "Ифтихор",
                        "type": "24"
                    },
                    "1733226564": {
                        "en": "Sho'r-Qal'a",
                        "uz": "Sho'r-Qal'a",
                        "ru": "Шуркалъа",
                        "type": "24"
                    },
                    "1733226566": {
                        "en": "Yuqori qo'm",
                        "uz": "Yuqori qo'm",
                        "ru": "Юкориком",
                        "type": "24"
                    },
                    "1733226568": {
                        "en": "Hamkor",
                        "uz": "Hamkor",
                        "ru": "Хамкор",
                        "type": "24"
                    },
                    "1733226805": {
                        "en": "Oq-yop",
                        "uz": "Oq-yop",
                        "ru": "Акяп",
                        "type": "31"
                    },
                    "1733226810": {
                        "en": "Gandimyon",
                        "uz": "Gandimyon",
                        "ru": "Гандимян",
                        "type": "31"
                    },
                    "1733226820": {
                        "en": "Dashyoq",
                        "uz": "Dashyoq",
                        "ru": "Дашьяк",
                        "type": "31"
                    },
                    "1733226826": {
                        "en": "Juryon",
                        "uz": "Juryon",
                        "ru": "Журян",
                        "type": "31"
                    },
                    "1733226834": {
                        "en": "Irdinzon",
                        "uz": "Irdinzon",
                        "ru": "Ирдимзан",
                        "type": "31"
                    },
                    "1733226845": {
                        "en": "Eski-Qiyot",
                        "uz": "Eski-Qiyot",
                        "ru": "Эски кият",
                        "type": "31"
                    },
                    "1733226856": {
                        "en": "Sayot",
                        "uz": "Sayot",
                        "ru": "Саят",
                        "type": "31"
                    },
                    "1733226867": {
                        "en": "Shomoxulum",
                        "uz": "Shomoxulum",
                        "ru": "Шамахулум",
                        "type": "31"
                    },
                    "1733226878": {
                        "en": "Chinobod",
                        "uz": "Chinobod",
                        "ru": "Чинабад",
                        "type": "31"
                    }
                }
            },
            "1733230": {
                "en": "Shovot district",
                "uz": "Shovot tumani",
                "ru": "Шаватский район",
                "type": "20",
                "settlements": {
                    "1733230551": {
                        "en": "Shovot",
                        "uz": "Shovot",
                        "ru": "Шават",
                        "type": "24"
                    },
                    "1733230554": {
                        "en": "Bo'yrochi",
                        "uz": "Bo'yrochi",
                        "ru": "Буйрачи",
                        "type": "24"
                    },
                    "1733230557": {
                        "en": "Ipakchi",
                        "uz": "Ipakchi",
                        "ru": "Ипакчи",
                        "type": "24"
                    },
                    "1733230561": {
                        "en": "Kangli",
                        "uz": "Kangli",
                        "ru": "Кангли",
                        "type": "24"
                    },
                    "1733230564": {
                        "en": "Qat-qal'a",
                        "uz": "Qat-qal'a",
                        "ru": "Кат-калъа",
                        "type": "24"
                    },
                    "1733230567": {
                        "en": "Monoq",
                        "uz": "Monoq",
                        "ru": "Монак",
                        "type": "24"
                    },
                    "1733230571": {
                        "en": "Chig'atoy",
                        "uz": "Chig'atoy",
                        "ru": "Чигатай",
                        "type": "24"
                    },
                    "1733230811": {
                        "en": "Qat-qal'a",
                        "uz": "Qat-qal'a",
                        "ru": "Каткала",
                        "type": "31"
                    },
                    "1733230822": {
                        "en": "Hurriyat",
                        "uz": "Hurriyat",
                        "ru": "Хуррият",
                        "type": "31"
                    },
                    "1733230825": {
                        "en": "Bo'yroqchi",
                        "uz": "Bo'yroqchi",
                        "ru": "Буйрачи",
                        "type": "31"
                    },
                    "1733230830": {
                        "en": "Beshmergan",
                        "uz": "Beshmergan",
                        "ru": "Бешмерган",
                        "type": "31"
                    },
                    "1733230833": {
                        "en": "Ijtimoyat",
                        "uz": "Ijtimoyat",
                        "ru": "Ижтимаят",
                        "type": "31"
                    },
                    "1733230839": {
                        "en": "Kangli",
                        "uz": "Kangli",
                        "ru": "Кангли",
                        "type": "31"
                    },
                    "1733230844": {
                        "en": "Qiyot",
                        "uz": "Qiyot",
                        "ru": "Кият",
                        "type": "31"
                    },
                    "1733230855": {
                        "en": "Chig'atoyqal'a",
                        "uz": "Chig'atoyqal'a",
                        "ru": "Чигатай кала",
                        "type": "31"
                    },
                    "1733230866": {
                        "en": "O'zbekiston",
                        "uz": "O'zbekiston",
                        "ru": "Узбекистан",
                        "type": "31"
                    },
                    "1733230877": {
                        "en": "Cho'qli",
                        "uz": "Cho'qli",
                        "ru": "Чоклы",
                        "type": "31"
                    },
                    "1733230888": {
                        "en": "Shovotqal'a",
                        "uz": "Shovotqal'a",
                        "ru": "Шават кала",
                        "type": "31"
                    }
                }
            },
            "1733233": {
                "en": "Yangiariq district",
                "uz": "Yangiariq tumani",
                "ru": "Янгиарыкский район",
                "type": "20",
                "settlements": {
                    "1733233551": {
                        "en": "Yangiariq",
                        "uz": "Yangiariq",
                        "ru": "Янгиарык",
                        "type": "24"
                    },
                    "1733233553": {
                        "en": "Gulbog'",
                        "uz": "Gulbog'",
                        "ru": "Гулбог",
                        "type": "24"
                    },
                    "1733233555": {
                        "en": "Soburzon",
                        "uz": "Soburzon",
                        "ru": "Собурзан",
                        "type": "24"
                    },
                    "1733233557": {
                        "en": "Suvgan",
                        "uz": "Suvgan",
                        "ru": "Сувган",
                        "type": "24"
                    },
                    "1733233561": {
                        "en": "Tagan",
                        "uz": "Tagan",
                        "ru": "Таган",
                        "type": "24"
                    },
                    "1733233563": {
                        "en": "Qo'shloq",
                        "uz": "Qo'shloq",
                        "ru": "Кушлок",
                        "type": "24"
                    },
                    "1733233811": {
                        "en": "Qarmish",
                        "uz": "Qarmish",
                        "ru": "Кармиш",
                        "type": "31"
                    },
                    "1733233822": {
                        "en": "Ostona",
                        "uz": "Ostona",
                        "ru": "Астана",
                        "type": "31"
                    },
                    "1733233833": {
                        "en": "Kattabog'",
                        "uz": "Kattabog'",
                        "ru": "Каттабаг",
                        "type": "31"
                    },
                    "1733233844": {
                        "en": "Gulobod",
                        "uz": "Gulobod",
                        "ru": "Гулобод",
                        "type": "31"
                    },
                    "1733233855": {
                        "en": "Gullanbog'",
                        "uz": "Gullanbog'",
                        "ru": "Гулланбаг",
                        "type": "31"
                    },
                    "1733233872": {
                        "en": "Tagan",
                        "uz": "Tagan",
                        "ru": "Таган",
                        "type": "31"
                    },
                    "1733233884": {
                        "en": "Qo'riqtom",
                        "uz": "Qo'riqtom",
                        "ru": "Куриктам",
                        "type": "31"
                    },
                    "1733233897": {
                        "en": "Chiriqchi",
                        "uz": "Chiriqchi",
                        "ru": "Чикирчи",
                        "type": "31"
                    }
                }
            },
            "1733236": {
                "en": "Yangibozor district",
                "uz": "Yangibozor tumani",
                "ru": "Янгибазарский район",
                "type": "20",
                "settlements": {
                    "1733236551": {
                        "en": "Yangibozor",
                        "uz": "Yangibozor",
                        "ru": "Янгибазар",
                        "type": "24"
                    },
                    "1733236554": {
                        "en": "Yangi yop",
                        "uz": "Yangi yop",
                        "ru": "Янги-еп",
                        "type": "24"
                    },
                    "1733236558": {
                        "en": "Mangitlar",
                        "uz": "Mangitlar",
                        "ru": "Мангитлар",
                        "type": "24"
                    },
                    "1733236803": {
                        "en": "Oyoqdo'rman",
                        "uz": "Oyoqdo'rman",
                        "ru": "Аякдорман",
                        "type": "31"
                    },
                    "1733236805": {
                        "en": "Bog'olon",
                        "uz": "Bog'olon",
                        "ru": "Багалан",
                        "type": "31"
                    },
                    "1733236806": {
                        "en": "Boshkirshix",
                        "uz": "Boshkirshix",
                        "ru": "Башкирших",
                        "type": "31"
                    },
                    "1733236808": {
                        "en": "Bo'zqal'a",
                        "uz": "Bo'zqal'a",
                        "ru": "Бозкала",
                        "type": "31"
                    },
                    "1733236812": {
                        "en": "Qalandardo'rman",
                        "uz": "Qalandardo'rman",
                        "ru": "Каландардорман",
                        "type": "31"
                    },
                    "1733236830": {
                        "en": "Uyg'ur",
                        "uz": "Uyg'ur",
                        "ru": "Уйгур",
                        "type": "31"
                    },
                    "1733236834": {
                        "en": "Cho'bolonchi",
                        "uz": "Cho'bolonchi",
                        "ru": "Чубаланчи",
                        "type": "31"
                    },
                    "1733236836": {
                        "en": "Shirinqo'ng'irot",
                        "uz": "Shirinqo'ng'irot",
                        "ru": "Ширинкунград",
                        "type": "31"
                    }
                }
            },
            "1733401": {
                "en": "Urganch",
                "uz": "Urganch",
                "ru": "Ургенч",
                "type": "21"
            },
            "1733406": {
                "en": "Xiva",
                "uz": "Xiva",
                "ru": "Хива",
                "type": "21"
            }
        }
    },
    "1735": {
        "en": "Republic of Karakalpakstan",
        "uz": "Qoraqalpog'iston Respublikasi",
        "ru": "Республика Каракалпакстан",
        "districts": {
            "1735204": {
                "en": "Amudaryo district",
                "uz": "Amudaryo tumani",
                "ru": "Амударьинский район",
                "type": "20",
                "settlements": {
                    "1735204501": {
                        "en": "Mang'it",
                        "uz": "Mang'it",
                        "ru": "Мангит",
                        "type": "23"
                    },
                    "1735204554": {
                        "en": "Jumurtov",
                        "uz": "Jumurtov",
                        "ru": "Джумуртау",
                        "type": "24"
                    },
                    "1735204555": {
                        "en": "Kipshak",
                        "uz": "Kipshak",
                        "ru": "Кипчок",
                        "type": "24"
                    },
                    "1735204556": {
                        "en": "Kilichboy",
                        "uz": "Kilichboy",
                        "ru": "Киличбай",
                        "type": "24"
                    },
                    "1735204557": {
                        "en": "Xitoy",
                        "uz": "Xitoy",
                        "ru": "Китай",
                        "type": "24"
                    },
                    "1735204805": {
                        "en": "Nazarxon",
                        "uz": "Nazarxon",
                        "ru": "Назаpхан",
                        "type": "31"
                    },
                    "1735204811": {
                        "en": "O'rta-qala",
                        "uz": "O'rta-qala",
                        "ru": "Оpта - кала",
                        "type": "31"
                    },
                    "1735204822": {
                        "en": "Qipchaq",
                        "uz": "Qipchaq",
                        "ru": "Кипчак",
                        "type": "31"
                    },
                    "1735204833": {
                        "en": "Quyuq-kupir",
                        "uz": "Quyuq-kupir",
                        "ru": "Куюк- Купиp",
                        "type": "31"
                    },
                    "1735204844": {
                        "en": "Xitay",
                        "uz": "Xitay",
                        "ru": "Ктай",
                        "type": "31"
                    },
                    "1735204848": {
                        "en": "Oq oltin",
                        "uz": "Oq oltin",
                        "ru": "Ок олтин",
                        "type": "31"
                    },
                    "1735204855": {
                        "en": "Chaykul",
                        "uz": "Chaykul",
                        "ru": "Чайкол",
                        "type": "31"
                    },
                    "1735204866": {
                        "en": "Qlichboy",
                        "uz": "Qlichboy",
                        "ru": "Кличбай",
                        "type": "31"
                    },
                    "1735204870": {
                        "en": "Kangli",
                        "uz": "Kangli",
                        "ru": "Канлы",
                        "type": "31"
                    },
                    "1735204874": {
                        "en": "Amir Temur",
                        "uz": "Amir Temur",
                        "ru": "Амир Темур",
                        "type": "31"
                    },
                    "1735204875": {
                        "en": "Durman",
                        "uz": "Durman",
                        "ru": "Дурман",
                        "type": "31"
                    },
                    "1735204880": {
                        "en": "Bobur nomli",
                        "uz": "Bobur nomli",
                        "ru": "им. Бабура",
                        "type": "31"
                    },
                    "1735204883": {
                        "en": "Buzyop",
                        "uz": "Buzyop",
                        "ru": "Бузяп",
                        "type": "31"
                    },
                    "1735204887": {
                        "en": "To'lqin",
                        "uz": "To'lqin",
                        "ru": "Тулкин",
                        "type": "31"
                    },
                    "1735204889": {
                        "en": "Tashyop",
                        "uz": "Tashyop",
                        "ru": "Ташеп",
                        "type": "31"
                    },
                    "1735204892": {
                        "en": "Xolimbeg",
                        "uz": "Xolimbeg",
                        "ru": "Холимбег",
                        "type": "31"
                    }
                }
            },
            "1735207": {
                "en": "Beruniy district",
                "uz": "Beruniy tumani",
                "ru": "Берунийский район",
                "type": "20",
                "settlements": {
                    "1735207501": {
                        "en": "Beruniy",
                        "uz": "Beruniy",
                        "ru": "Беруни",
                        "type": "23"
                    },
                    "1735207552": {
                        "en": "Bulish",
                        "uz": "Bulish",
                        "ru": "Булиш",
                        "type": "24"
                    },
                    "1735207807": {
                        "en": "Abay",
                        "uz": "Abay",
                        "ru": "Абай",
                        "type": "31"
                    },
                    "1735207811": {
                        "en": "Ozod",
                        "uz": "Ozod",
                        "ru": "Азад",
                        "type": "31"
                    },
                    "1735207814": {
                        "en": "Sarkop",
                        "uz": "Sarkop",
                        "ru": "Саpкоп",
                        "type": "31"
                    },
                    "1735207816": {
                        "en": "Navoiy",
                        "uz": "Navoiy",
                        "ru": "Навои",
                        "type": "31"
                    },
                    "1735207818": {
                        "en": "Beruniy",
                        "uz": "Beruniy",
                        "ru": "Беpуни",
                        "type": "31"
                    },
                    "1735207822": {
                        "en": "Maxtumquli",
                        "uz": "Maxtumquli",
                        "ru": "Махтумкули",
                        "type": "31"
                    },
                    "1735207827": {
                        "en": "Biybazar",
                        "uz": "Biybazar",
                        "ru": "Бийбазар",
                        "type": "31"
                    },
                    "1735207829": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "31"
                    },
                    "1735207832": {
                        "en": "Altinsay",
                        "uz": "Altinsay",
                        "ru": "Алтынсай",
                        "type": "31"
                    },
                    "1735207843": {
                        "en": "Qizilqal'a",
                        "uz": "Qizilqal'a",
                        "ru": "Кызылкала",
                        "type": "31"
                    },
                    "1735207865": {
                        "en": "Shabaz",
                        "uz": "Shabaz",
                        "ru": "Шабаз",
                        "type": "31"
                    },
                    "1735207876": {
                        "en": "Shimam",
                        "uz": "Shimam",
                        "ru": "Шимам",
                        "type": "31"
                    },
                    "1735207880": {
                        "en": "Tinchlik",
                        "uz": "Tinchlik",
                        "ru": "Тинчлик",
                        "type": "31"
                    }
                }
            },
            "1735209": {
                "en": "Bo'zatov district",
                "uz": "Bo'zatov tumani",
                "ru": "Бозатауский район",
                "type": "20",
                "settlements": {
                    "1735209551": {
                        "en": "Bo'zatov",
                        "uz": "Bo'zatov",
                        "ru": "Бозатау",
                        "type": "24"
                    },
                    "1735209804": {
                        "en": "Aspantay",
                        "uz": "Aspantay",
                        "ru": "Аспантай",
                        "type": "31"
                    },
                    "1735209808": {
                        "en": "Yerkindarya",
                        "uz": "Yerkindarya",
                        "ru": "Еркиндарья",
                        "type": "31"
                    },
                    "1735209812": {
                        "en": "Ko'k-suv",
                        "uz": "Ko'k-suv",
                        "ru": "Кук-су",
                        "type": "31"
                    },
                    "1735209818": {
                        "en": "Qusqanatov",
                        "uz": "Qusqanatov",
                        "ru": "Кусканатау",
                        "type": "31"
                    }
                }
            },
            "1735211": {
                "en": "Qorao'zak district",
                "uz": "Qorao'zak tumani",
                "ru": "Караузякский район",
                "type": "20",
                "settlements": {
                    "1735211551": {
                        "en": "Qorao'zak",
                        "uz": "Qorao'zak",
                        "ru": "Караузяк",
                        "type": "24"
                    },
                    "1735211803": {
                        "en": "Olgabas",
                        "uz": "Olgabas",
                        "ru": "Алгабас",
                        "type": "31"
                    },
                    "1735211815": {
                        "en": "Yesimuzak",
                        "uz": "Yesimuzak",
                        "ru": "Есимозек",
                        "type": "31"
                    },
                    "1735211823": {
                        "en": "Qarakul",
                        "uz": "Qarakul",
                        "ru": "Каpакуль",
                        "type": "31"
                    },
                    "1735211826": {
                        "en": "Qarabug'a",
                        "uz": "Qarabug'a",
                        "ru": "Карабуга",
                        "type": "31"
                    },
                    "1735211828": {
                        "en": "Qorauzek",
                        "uz": "Qorauzek",
                        "ru": "Караузяк",
                        "type": "31"
                    },
                    "1735211830": {
                        "en": "Qoyboq",
                        "uz": "Qoyboq",
                        "ru": "Койбак",
                        "type": "31"
                    },
                    "1735211835": {
                        "en": "Madeniyat",
                        "uz": "Madeniyat",
                        "ru": "Маденият",
                        "type": "31"
                    },
                    "1735211837": {
                        "en": "Berdax",
                        "uz": "Berdax",
                        "ru": "им. Бердах",
                        "type": "31"
                    }
                }
            },
            "1735212": {
                "en": "Kegeyli district",
                "uz": "Kegeyli tumani",
                "ru": "Кегейлийский район",
                "type": "20",
                "settlements": {
                    "1735212505": {
                        "en": "Xalqobod",
                        "uz": "Xalqobod",
                        "ru": "Халкабад",
                        "type": "23"
                    },
                    "1735212551": {
                        "en": "Kegeyli",
                        "uz": "Kegeyli",
                        "ru": "Кегейли",
                        "type": "24"
                    },
                    "1735212806": {
                        "en": "Aktuba",
                        "uz": "Aktuba",
                        "ru": "Актуба",
                        "type": "31"
                    },
                    "1735212815": {
                        "en": "Janabazar",
                        "uz": "Janabazar",
                        "ru": "Жанабазар",
                        "type": "31"
                    },
                    "1735212833": {
                        "en": "Jalpak jap",
                        "uz": "Jalpak jap",
                        "ru": "Жалпакжап",
                        "type": "31"
                    },
                    "1735212834": {
                        "en": "Кок Озек",
                        "uz": "Кок Озек",
                        "ru": "Кок Озек",
                        "type": "31"
                    },
                    "1735212835": {
                        "en": "Kumshunkul",
                        "uz": "Kumshunkul",
                        "ru": "Кумшункуль",
                        "type": "31"
                    },
                    "1735212839": {
                        "en": "Juzim bag'",
                        "uz": "Juzim bag'",
                        "ru": "Жузим баг",
                        "type": "31"
                    },
                    "1735212841": {
                        "en": "Ийшан кала",
                        "uz": "Ийшан кала",
                        "ru": "Ийшан кала",
                        "type": "31"
                    },
                    "1735212855": {
                        "en": "Obad",
                        "uz": "Obad",
                        "ru": "Абад",
                        "type": "31"
                    }
                }
            },
            "1735215": {
                "en": "Qo'ng'irot district",
                "uz": "Qo'ng'irot tumani",
                "ru": "Кунградский район",
                "type": "20",
                "settlements": {
                    "1735215501": {
                        "en": "Qo'ng'irot",
                        "uz": "Qo'ng'irot",
                        "ru": "Кунград",
                        "type": "23"
                    },
                    "1735215552": {
                        "en": "Jasliq",
                        "uz": "Jasliq",
                        "ru": "Жаслык",
                        "type": "24"
                    },
                    "1735215554": {
                        "en": "Qaraqalpaqstan",
                        "uz": "Qaraqalpaqstan",
                        "ru": "Каракалпакстан",
                        "type": "24"
                    },
                    "1735215560": {
                        "en": "Qiriqqiz",
                        "uz": "Qiriqqiz",
                        "ru": "Кырыккыз",
                        "type": "24"
                    },
                    "1735215562": {
                        "en": "Oltinko'l",
                        "uz": "Oltinko'l",
                        "ru": "Алтынкуль",
                        "type": "24"
                    },
                    "1735215567": {
                        "en": "Yelabad",
                        "uz": "Yelabad",
                        "ru": "Елабад",
                        "type": "24"
                    },
                    "1735215806": {
                        "en": "Adebiyat",
                        "uz": "Adebiyat",
                        "ru": "Адебият",
                        "type": "31"
                    },
                    "1735215809": {
                        "en": "Ajaniyaz-ata nomli",
                        "uz": "Ajaniyaz-ata nomli",
                        "ru": "им.Ажинияза",
                        "type": "31"
                    },
                    "1735215811": {
                        "en": "Qo'ng'irot",
                        "uz": "Qo'ng'irot",
                        "ru": "Кунгpад",
                        "type": "31"
                    },
                    "1735215814": {
                        "en": "Kanli",
                        "uz": "Kanli",
                        "ru": "Канлы",
                        "type": "31"
                    },
                    "1735215818": {
                        "en": "Urnek",
                        "uz": "Urnek",
                        "ru": "Орнек",
                        "type": "31"
                    },
                    "1735215822": {
                        "en": "Raushan",
                        "uz": "Raushan",
                        "ru": "Раушан",
                        "type": "31"
                    },
                    "1735215826": {
                        "en": "Suuyenli",
                        "uz": "Suuyenli",
                        "ru": "Сууенли",
                        "type": "31"
                    },
                    "1735215830": {
                        "en": "Ustyurt",
                        "uz": "Ustyurt",
                        "ru": "Устирт",
                        "type": "31"
                    },
                    "1735215834": {
                        "en": "Xorezm",
                        "uz": "Xorezm",
                        "ru": "Хорезм",
                        "type": "31"
                    },
                    "1735215841": {
                        "en": "Kokdarya",
                        "uz": "Kokdarya",
                        "ru": "Кокдарья",
                        "type": "31"
                    },
                    "1735215845": {
                        "en": "Miynetabad",
                        "uz": "Miynetabad",
                        "ru": "Мийнетабад",
                        "type": "31"
                    },
                    "1735215847": {
                        "en": "Qipshaq",
                        "uz": "Qipshaq",
                        "ru": "Кыпшак",
                        "type": "31"
                    }
                }
            },
            "1735218": {
                "en": "Qanliko'l district",
                "uz": "Qanliko'l tumani",
                "ru": "Канлыкульский район",
                "type": "20",
                "settlements": {
                    "1735218551": {
                        "en": "Qanliko'l",
                        "uz": "Qanliko'l",
                        "ru": "Канлыкуль",
                        "type": "24"
                    },
                    "1735218805": {
                        "en": "Arzimbet qum",
                        "uz": "Arzimbet qum",
                        "ru": "Арзымбет кум",
                        "type": "31"
                    },
                    "1735218808": {
                        "en": "Bustan",
                        "uz": "Bustan",
                        "ru": "Бостон",
                        "type": "31"
                    },
                    "1735218816": {
                        "en": "Qanliko'l",
                        "uz": "Qanliko'l",
                        "ru": "Канлыкуль",
                        "type": "31"
                    },
                    "1735218817": {
                        "en": "Kosjap",
                        "uz": "Kosjap",
                        "ru": "Косжап",
                        "type": "31"
                    },
                    "1735218819": {
                        "en": "Beskupir",
                        "uz": "Beskupir",
                        "ru": "Бескопыр",
                        "type": "31"
                    },
                    "1735218821": {
                        "en": "Navriz",
                        "uz": "Navriz",
                        "ru": "Наурыз",
                        "type": "31"
                    },
                    "1735218823": {
                        "en": "Jana qal'a",
                        "uz": "Jana qal'a",
                        "ru": "Жана кала",
                        "type": "31"
                    }
                }
            },
            "1735222": {
                "en": "Mo'ynoq district",
                "uz": "Mo'ynoq tumani",
                "ru": "Муйнакский район",
                "type": "20",
                "settlements": {
                    "1735222501": {
                        "en": "Mo'ynoq",
                        "uz": "Mo'ynoq",
                        "ru": "Муйнак",
                        "type": "23"
                    },
                    "1735222811": {
                        "en": "Bozatau",
                        "uz": "Bozatau",
                        "ru": "Бозатау",
                        "type": "31"
                    },
                    "1735222822": {
                        "en": "Kazax-darya",
                        "uz": "Kazax-darya",
                        "ru": "Казахдарья",
                        "type": "31"
                    },
                    "1735222833": {
                        "en": "Madeli",
                        "uz": "Madeli",
                        "ru": "Мадели",
                        "type": "31"
                    },
                    "1735222844": {
                        "en": "Tik-uzyak",
                        "uz": "Tik-uzyak",
                        "ru": "Тикузяк",
                        "type": "31"
                    },
                    "1735222855": {
                        "en": "Uchsay",
                        "uz": "Uchsay",
                        "ru": "Учсай",
                        "type": "31"
                    },
                    "1735222866": {
                        "en": "Xakim-ata",
                        "uz": "Xakim-ata",
                        "ru": "Хаким-ата",
                        "type": "31"
                    },
                    "1735222877": {
                        "en": "Qizil jar",
                        "uz": "Qizil jar",
                        "ru": "Кизил жар",
                        "type": "31"
                    }
                }
            },
            "1735225": {
                "en": "Nukus district",
                "uz": "Nukus tumani",
                "ru": "Нукусский район",
                "type": "20",
                "settlements": {
                    "1735225551": {
                        "en": "Oqmang'it",
                        "uz": "Oqmang'it",
                        "ru": "Акмангит",
                        "type": "24"
                    },
                    "1735225822": {
                        "en": "Bakanshakli",
                        "uz": "Bakanshakli",
                        "ru": "Баканшаклы",
                        "type": "31"
                    },
                    "1735225835": {
                        "en": "Krantau",
                        "uz": "Krantau",
                        "ru": "Крантау",
                        "type": "31"
                    },
                    "1735225843": {
                        "en": "Takirkul",
                        "uz": "Takirkul",
                        "ru": "Такыркол",
                        "type": "31"
                    },
                    "1735225846": {
                        "en": "Samanbay",
                        "uz": "Samanbay",
                        "ru": "Саманбай",
                        "type": "31"
                    },
                    "1735225854": {
                        "en": "Arbashi",
                        "uz": "Arbashi",
                        "ru": "Арбаши",
                        "type": "31"
                    },
                    "1735225858": {
                        "en": "Kerder",
                        "uz": "Kerder",
                        "ru": "Кеpдеp",
                        "type": "31"
                    }
                }
            },
            "1735228": {
                "en": "Taxiatosh district",
                "uz": "Taxiatosh tumani",
                "ru": "Тахиаташский район",
                "type": "20",
                "settlements": {
                    "1735228501": {
                        "en": "Taxiatosh",
                        "uz": "Taxiatosh",
                        "ru": "Тахиаташ",
                        "type": "23"
                    },
                    "1735228553": {
                        "en": "Naymanko'l",
                        "uz": "Naymanko'l",
                        "ru": "Найманкул",
                        "type": "24"
                    },
                    "1735228806": {
                        "en": "Kenеgеs",
                        "uz": "Kenеgеs",
                        "ru": "Кенегес",
                        "type": "31"
                    },
                    "1735228809": {
                        "en": "Naymanko'l",
                        "uz": "Naymanko'l",
                        "ru": "Найманкул",
                        "type": "31"
                    },
                    "1735228812": {
                        "en": "Sarаyko'l",
                        "uz": "Sarаyko'l",
                        "ru": "Сарайкул",
                        "type": "31"
                    }
                }
            },
            "1735230": {
                "en": "Taxtako'pir district",
                "uz": "Taxtako'pir tumani",
                "ru": "Тахтакупырский район",
                "type": "20",
                "settlements": {
                    "1735230551": {
                        "en": "Taxtako'pir",
                        "uz": "Taxtako'pir",
                        "ru": "Тахтакупыр",
                        "type": "24"
                    },
                    "1735230803": {
                        "en": "Atakul",
                        "uz": "Atakul",
                        "ru": "Атакуль",
                        "type": "31"
                    },
                    "1735230820": {
                        "en": "Qara-oy",
                        "uz": "Qara-oy",
                        "ru": "Караой",
                        "type": "31"
                    },
                    "1735230833": {
                        "en": "Mulik",
                        "uz": "Mulik",
                        "ru": "Мулик",
                        "type": "31"
                    },
                    "1735230835": {
                        "en": "Qungrat kul",
                        "uz": "Qungrat kul",
                        "ru": "Коныраткол",
                        "type": "31"
                    },
                    "1735230837": {
                        "en": "Janadarya",
                        "uz": "Janadarya",
                        "ru": "Жанадаpья",
                        "type": "31"
                    },
                    "1735230840": {
                        "en": "Beltau",
                        "uz": "Beltau",
                        "ru": "Белтау",
                        "type": "31"
                    },
                    "1735230844": {
                        "en": "Qarateren",
                        "uz": "Qarateren",
                        "ru": "Каратерен",
                        "type": "31"
                    },
                    "1735230877": {
                        "en": "Taxtako'pir",
                        "uz": "Taxtako'pir",
                        "ru": "Тахтакупыр",
                        "type": "31"
                    }
                }
            },
            "1735233": {
                "en": "To'rtko'l district",
                "uz": "To'rtko'l tumani",
                "ru": "Турткульский район",
                "type": "20",
                "settlements": {
                    "1735233501": {
                        "en": "To'rtko'l",
                        "uz": "To'rtko'l",
                        "ru": "Турткуль",
                        "type": "23"
                    },
                    "1735233552": {
                        "en": "Miskin",
                        "uz": "Miskin",
                        "ru": "Мискин",
                        "type": "24"
                    },
                    "1735233554": {
                        "en": "Turkmankuli",
                        "uz": "Turkmankuli",
                        "ru": "Туркманкули",
                        "type": "24"
                    },
                    "1735233556": {
                        "en": "Tozabog'",
                        "uz": "Tozabog'",
                        "ru": "Тозабог",
                        "type": "24"
                    },
                    "1735233558": {
                        "en": "Nurli yo'l",
                        "uz": "Nurli yo'l",
                        "ru": "Нурли-йул",
                        "type": "24"
                    },
                    "1735233560": {
                        "en": "Amirobod",
                        "uz": "Amirobod",
                        "ru": "Амирабад",
                        "type": "24"
                    },
                    "1735233804": {
                        "en": "Aqboshli",
                        "uz": "Aqboshli",
                        "ru": "Акбашлы",
                        "type": "31"
                    },
                    "1735233806": {
                        "en": "Aqqamish",
                        "uz": "Aqqamish",
                        "ru": "Аккамыш",
                        "type": "31"
                    },
                    "1735233808": {
                        "en": "Paxtaabad",
                        "uz": "Paxtaabad",
                        "ru": "Пахтаабад",
                        "type": "31"
                    },
                    "1735233812": {
                        "en": "Ata uba",
                        "uz": "Ata uba",
                        "ru": "Атауба",
                        "type": "31"
                    },
                    "1735233816": {
                        "en": "Kana Turtkul",
                        "uz": "Kana Turtkul",
                        "ru": "Кана Турткул",
                        "type": "31"
                    },
                    "1735233828": {
                        "en": "Yonboshqal'a",
                        "uz": "Yonboshqal'a",
                        "ru": "Джамбаскала",
                        "type": "31"
                    },
                    "1735233830": {
                        "en": "A.Durdiyeva",
                        "uz": "A.Durdiyeva",
                        "ru": "им. Дурдыева",
                        "type": "31"
                    },
                    "1735233840": {
                        "en": "Kelteminar",
                        "uz": "Kelteminar",
                        "ru": "Кельтеминар",
                        "type": "31"
                    },
                    "1735233842": {
                        "en": "Kukcha",
                        "uz": "Kukcha",
                        "ru": "Кокча",
                        "type": "31"
                    },
                    "1735233844": {
                        "en": "Qumbaskan",
                        "uz": "Qumbaskan",
                        "ru": "Кумбаскан",
                        "type": "31"
                    },
                    "1735233878": {
                        "en": "O'zbekiston",
                        "uz": "O'zbekiston",
                        "ru": "Узбекистон",
                        "type": "31"
                    },
                    "1735233880": {
                        "en": "Paxtachi",
                        "uz": "Paxtachi",
                        "ru": "Пахтачи",
                        "type": "31"
                    },
                    "1735233881": {
                        "en": "Tazabogyap",
                        "uz": "Tazabogyap",
                        "ru": "Тазабагяб",
                        "type": "31"
                    },
                    "1735233892": {
                        "en": "Ullubog'",
                        "uz": "Ullubog'",
                        "ru": "Уллубаг",
                        "type": "31"
                    },
                    "1735233896": {
                        "en": "Shuraxan",
                        "uz": "Shuraxan",
                        "ru": "Шурахан",
                        "type": "31"
                    }
                }
            },
            "1735236": {
                "en": "Xo'jayli district",
                "uz": "Xo'jayli tumani",
                "ru": "Ходжейлийский район",
                "type": "20",
                "settlements": {
                    "1735236501": {
                        "en": "Xo'jayli",
                        "uz": "Xo'jayli",
                        "ru": "Ходжейли",
                        "type": "23"
                    },
                    "1735236553": {
                        "en": "Vodnik",
                        "uz": "Vodnik",
                        "ru": "Водник",
                        "type": "24"
                    },
                    "1735236811": {
                        "en": "Amudarya",
                        "uz": "Amudarya",
                        "ru": "Амударья",
                        "type": "31"
                    },
                    "1735236819": {
                        "en": "Janajap",
                        "uz": "Janajap",
                        "ru": "Жанажап",
                        "type": "31"
                    },
                    "1735236833": {
                        "en": "Kulyab",
                        "uz": "Kulyab",
                        "ru": "Куляб",
                        "type": "31"
                    },
                    "1735236839": {
                        "en": "Mustaqillik",
                        "uz": "Mustaqillik",
                        "ru": "Мустакиллик",
                        "type": "31"
                    },
                    "1735236855": {
                        "en": "Samankol",
                        "uz": "Samankol",
                        "ru": "Саманкуль",
                        "type": "31"
                    },
                    "1735236877": {
                        "en": "Sarishunkul",
                        "uz": "Sarishunkul",
                        "ru": "Сарычункуль",
                        "type": "31"
                    },
                    "1735236888": {
                        "en": "Qumjiqqin",
                        "uz": "Qumjiqqin",
                        "ru": "Кумжиккин",
                        "type": "31"
                    }
                }
            },
            "1735240": {
                "en": "Chimboy district",
                "uz": "Chimboy tumani",
                "ru": "Чимбайский район",
                "type": "20",
                "settlements": {
                    "1735240501": {
                        "en": "Chimboy",
                        "uz": "Chimboy",
                        "ru": "Чимбай",
                        "type": "23"
                    },
                    "1735240553": {
                        "en": "Ayteke",
                        "uz": "Ayteke",
                        "ru": "Айтеке",
                        "type": "24"
                    },
                    "1735240802": {
                        "en": "Kizil uzek",
                        "uz": "Kizil uzek",
                        "ru": "Кызыл Озек",
                        "type": "31"
                    },
                    "1735240812": {
                        "en": "Kamisarik",
                        "uz": "Kamisarik",
                        "ru": "Камыс арык",
                        "type": "31"
                    },
                    "1735240822": {
                        "en": "Baxitli",
                        "uz": "Baxitli",
                        "ru": "Бахытлы",
                        "type": "31"
                    },
                    "1735240833": {
                        "en": "Kenes",
                        "uz": "Kenes",
                        "ru": "Кенес",
                        "type": "31"
                    },
                    "1735240844": {
                        "en": "Mayjap",
                        "uz": "Mayjap",
                        "ru": "Майжап",
                        "type": "31"
                    },
                    "1735240848": {
                        "en": "Pashen tov",
                        "uz": "Pashen tov",
                        "ru": "Пашент тау",
                        "type": "31"
                    },
                    "1735240855": {
                        "en": "Tazgara",
                        "uz": "Tazgara",
                        "ru": "Тазгаpа",
                        "type": "31"
                    },
                    "1735240862": {
                        "en": "Tagjap",
                        "uz": "Tagjap",
                        "ru": "Тагжап",
                        "type": "31"
                    },
                    "1735240866": {
                        "en": "Tazajol",
                        "uz": "Tazajol",
                        "ru": "Тазажол",
                        "type": "31"
                    },
                    "1735240870": {
                        "en": "Kosterek",
                        "uz": "Kosterek",
                        "ru": "Костеpек",
                        "type": "31"
                    }
                }
            },
            "1735243": {
                "en": "Shumanay district",
                "uz": "Shumanay tumani",
                "ru": "Шуманайский район",
                "type": "20",
                "settlements": {
                    "1735243501": {
                        "en": "Shumanay",
                        "uz": "Shumanay",
                        "ru": "Шуманай",
                        "type": "23"
                    },
                    "1735243805": {
                        "en": "Birleshik",
                        "uz": "Birleshik",
                        "ru": "Бирлешик",
                        "type": "31"
                    },
                    "1735243809": {
                        "en": "Begjap",
                        "uz": "Begjap",
                        "ru": "Бегжап",
                        "type": "31"
                    },
                    "1735243812": {
                        "en": "Diyxanabad",
                        "uz": "Diyxanabad",
                        "ru": "Дийханабад",
                        "type": "31"
                    },
                    "1735243818": {
                        "en": "Mamiy",
                        "uz": "Mamiy",
                        "ru": "Мамый",
                        "type": "31"
                    },
                    "1735243821": {
                        "en": "Sarmanbaykol",
                        "uz": "Sarmanbaykol",
                        "ru": "Сарманбайкол",
                        "type": "31"
                    },
                    "1735243825": {
                        "en": "Ak jap",
                        "uz": "Ak jap",
                        "ru": "Акжап",
                        "type": "31"
                    },
                    "1735243830": {
                        "en": "Ketenler",
                        "uz": "Ketenler",
                        "ru": "Кетенлер",
                        "type": "31"
                    }
                }
            },
            "1735250": {
                "en": "Ellikkala district",
                "uz": "Ellikkala tumani",
                "ru": "Элликкалинский район",
                "type": "20",
                "settlements": {
                    "1735250501": {
                        "en": "Bo'ston",
                        "uz": "Bo'ston",
                        "ru": "Бустан",
                        "type": "23"
                    },
                    "1735250555": {
                        "en": "Saxtiyon",
                        "uz": "Saxtiyon",
                        "ru": "Сахтиен",
                        "type": "24"
                    },
                    "1735250803": {
                        "en": "Aqchakul",
                        "uz": "Aqchakul",
                        "ru": "Акчакуль",
                        "type": "31"
                    },
                    "1735250807": {
                        "en": "Gulistan",
                        "uz": "Gulistan",
                        "ru": "Гулистан",
                        "type": "31"
                    },
                    "1735250808": {
                        "en": "Guldursun",
                        "uz": "Guldursun",
                        "ru": "Гульдирсин",
                        "type": "31"
                    },
                    "1735250812": {
                        "en": "Taza bog'",
                        "uz": "Taza bog'",
                        "ru": "Тазабог",
                        "type": "31"
                    },
                    "1735250815": {
                        "en": "Sarabiy",
                        "uz": "Sarabiy",
                        "ru": "Саpабий",
                        "type": "31"
                    },
                    "1735250820": {
                        "en": "Qizil qum",
                        "uz": "Qizil qum",
                        "ru": "Кызылкум",
                        "type": "31"
                    },
                    "1735250823": {
                        "en": "Qirqqiz",
                        "uz": "Qirqqiz",
                        "ru": "Кырккыз",
                        "type": "31"
                    },
                    "1735250827": {
                        "en": "Navoiy nomli",
                        "uz": "Navoiy nomli",
                        "ru": "им. Навои",
                        "type": "31"
                    },
                    "1735250830": {
                        "en": "Qilchinok",
                        "uz": "Qilchinok",
                        "ru": "Килчинак",
                        "type": "31"
                    },
                    "1735250835": {
                        "en": "Amirabad",
                        "uz": "Amirabad",
                        "ru": "Амирабад",
                        "type": "31"
                    },
                    "1735250850": {
                        "en": "Sharq Yulduzi",
                        "uz": "Sharq Yulduzi",
                        "ru": "Шарк-Юлдузи",
                        "type": "31"
                    },
                    "1735250855": {
                        "en": "Ellikkala",
                        "uz": "Ellikkala",
                        "ru": "Элликкала",
                        "type": "31"
                    },
                    "1735250860": {
                        "en": "Do'stlik",
                        "uz": "Do'stlik",
                        "ru": "Дустлик",
                        "type": "31"
                    }
                }
            },
            "1735401": {
                "en": "Nukus",
                "uz": "Nukus",
                "ru": null,
                "type": "21",
                "settlements": {
                    "1735401554": {
                        "en": "Karatau",
                        "uz": "Karatau",
                        "ru": "Каратау",
                        "type": "24"
                    }
                }
            }
        }
    }
}