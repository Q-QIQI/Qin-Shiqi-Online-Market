import {Product} from './app/shared/models/Product';
import { Tag } from './app/shared/models/Tag';

export const sample_products:Product[] = [
    {
        id:'1',
        name:'Apple AirPods Pro (2nd Generation) ',
        price:189.00,
        tags:['Electronics'],
        imageUrl:'assets/1.jpg',
        seller:'seller01',
        sold: false, // 添加 sold 属性
    },
    {
        id:'2',
        name:'Lerliuo Record Player Stand',
        price:110.49,
        tags:['Furniture'],
        imageUrl:'assets/2.jpg',
        seller:'seller02',
        sold: false, // 添加 sold 属性
    },
    {
        id:'3',
        name:'SAMSUNG Galaxy Tab A9+ Tablet 11',
        price:159.99,
        tags:['Electronics'],
        imageUrl:'assets/3.jpg',
        seller:'seller03',
        sold: false, // 添加 sold 属性
    },
    {
        id:'4',
        name:'Micro Building Blocks for Adults - Yellow Crane Tower',
        price:30,
        tags:['Toys'],
        imageUrl:'assets/4.jpg',
        seller:'seller04',
        sold: false, // 添加 sold 属性
    },
    {
        id:'5',
        name:'Micro Building Blocks Set Suzhou Garden',
        price:50,
        tags:['Toys'],
        imageUrl:'assets/5.jpg',
        seller:'seller04',
        sold: false, // 添加 sold 属性
    },
    {
        id:'6',
        name:'QLT Cute Panda Mini Building Blocks Sets',
        price:26.99,
        tags:['Toys'],
        imageUrl:'assets/6.jpg',
        seller:'seller05',
        sold: false, // 添加 sold 属性
    },
]

export const sample_tags:Tag[] = [
    {name: 'All',count:6},
    {name: 'Electronics',count:2},
    {name: 'Furniture',count:1},
    {name: 'Toys',count:3},
]
