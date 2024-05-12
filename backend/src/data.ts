
export const sample_products:any[] = [
    {
        id:'1',
        name:'Apple AirPods Pro (2nd Generation) ',
        price:189.00,
        tags:['Electronics'],
        imageUrl:'assets/1.jpg',
        seller:'seller01',
        sold: false // 新添加的 sold 属性，表示该产品尚未售出
    },
    {
        id:'2',
        name:'Lerliuo Record Player Stand',
        price:110.49,
        tags:['Furniture'],
        imageUrl:'assets/2.jpg',
        seller:'seller02',
        sold: false // 新添加的 sold 属性，表示该产品尚未售出
    },
    {
        id:'3',
        name:'SAMSUNG Galaxy Tab A9+ Tablet 11',
        price:159.99,
        tags:['Electronics'],
        imageUrl:'assets/3.jpg',
        seller:'seller03',
        sold: false 
    },
    {
        id:'4',
        name:'Micro Building Blocks for Adults - Yellow Crane Tower',
        price:30,
        tags:['Toys'],
        imageUrl:'assets/4.jpg',
        seller:'seller04',
        sold: false 
    },
    {
        id:'5',
        name:'Micro Building Blocks Set Suzhou Garden',
        price:50,
        tags:['Toys'],
        imageUrl:'assets/5.jpg',
        seller:'seller04',
        sold: false 
    },
    {
        id:'6',
        name:'QLT Cute Panda Mini Building Blocks Sets',
        price:26.99,
        tags:['Toys'],
        imageUrl:'assets/6.jpg',
        seller:'seller05',
        sold: false 
    },
]

export const sample_tags:any[] = [
    {name: 'All',count:6},
    {name: 'Electronics',count:2},
    {name: 'Furniture',count:1},
    {name: 'Toys',count:3},
]

export const sample_users: any[] = [
    {
        name:"77",
        email:"77@gmail.com",
        password:"12345",
        address:"Chengdu",
        isAdmin:true,
    },
    {
        name:"78",
        email:"78@gmail.com",
        password:"12345",
        address:"Shangehai",
        isAdmin:false,
    }
]

export const sample_sellers: any[] = [
    {
        name:"seller10",
        email:"seller10@gmail.com",
        password:"12345",
        address:"Szeged",
        isAdmin:true,
    }
]