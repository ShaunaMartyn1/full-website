import bcrypt from 'bcryptjs'
import { User } from './models/userModel'
import { Product } from './models/productModel'

export const sampleProducts: Product[] = [
  {
    name: 'iPhone 14',
    slug: 'iphone-14',
    category: 'Phone',
    image: '../images/img1.jpeg',
    price: 1200,
    countInStock: 10,
    brand: 'Apple',
    rating: 4.5,
    numReviews: 10,
    description: 'Apple iPhone 14 128GB USB fast charging',
  },
  {
    name: 'iPhone 14 Plus',
    slug: 'iphone-14-plus',
    category: 'Phone',
    image: '../images/img2.jpeg',
    price: 1400,
    countInStock: 5,
    brand: 'Apple',
    rating: 4.5,
    numReviews: 6,
    description: ' Apple iPhone 14 Plus 256GB 16.08cm screen size',
  },
  {
    name: 'iPhone 13',
    slug: 'iphone-13',
    category: 'Phone',
    image: '../images/img3.jpeg',
    price: 800,
    countInStock: 17,
    brand: 'Apple',
    rating: 3.5,
    numReviews: 23,
    description: 'Apple iPhone 13 A15 Bionic Chip',
  },
  {
    name: 'iPhone 13 Pro',
    slug: 'iphone-13-pro',
    category: 'Phone',
    image: '../images/img4.jpeg',
    price: 900,
    countInStock: 3,
    brand: 'Apple',
    rating: 5,
    numReviews: 10,
    description: 'Apple iPhone 13 Pro Face ID 4350 mAh battery',
  },
]

export const tomePhoneUsers: User[] = [
  {
    name: 'Joe',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]
