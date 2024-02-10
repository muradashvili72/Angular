import { Component, OnInit } from '@angular/core';
import { Icategory, IproductCard } from '../meta-data/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products: IproductCard[] = [
    {
      id: 16,
      title: "Lock and Love men's Removable Hooded Faux Leather Zara Jacket",
      price: 259.95,
      description: "Buy Zara Jackets for Men and get the best deals at the lowest prices on eBay! Great Savings & Free Delivery / Collection on many items.",
      category: "men's clothing",
      image: "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/m/17/411035a2-3d38-4299-90a4-39bf3754c41a.jpg",
      rating: {
          rate: 2.9,
          count: 3340
      },
      inStock: true,
        qty:0,
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 89.00,
      description: "These T-shirts are a fashion basic thanks to the contrast colored Short sleeves. The Henley style round neckline includes a three-button placket. Good quality ...",
      category: "men's clothing",
      image: "https://i.ebayimg.com/images/g/UgMAAOSwOf9hpi1M/s-l1200.webp",
      rating: {
          rate: 4.1,
          count: 2659
      },
      inStock: true,
      qty: 5,
  },
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 509.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg",
      rating: {
          rate: 3.9,
          count: 1720
      },
      inStock: false,
      qty:0,
  },

  
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
        rate: 4.6,
        count: 4809
    },
    inStock: false,
    qty:0,
},
{
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 170,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
        rate: 3.9,
        count: 1370
    },
    inStock: true,
    qty:0,
},
{
  id: 15,
  title: "BIYLACLESEN men's 3-in-1 Snowboard Jacket Winter Coats",
  price: 159.95,
  description: "Note :The   Jackets  is   US standard size, Please choose size as your usual wear Material: Our men's ski and snowboard jackets are available in both regular and long fits. They feature all the waterproofing and insulation you need to confidently come ...",
  category: "men's clothing",
  image: "https://cdn.shopify.com/s/files/1/0046/5492/3889/files/G0652402_GLD_22_large.jpg?v=1694521246",
  rating: {
      rate: 2.6,
      count: 1635
  },
  inStock: true,
    qty:0,
},

{
  id: 19,
  title: "PULL&BEAR men's Short Sleeve Moisture",
  price: 87.95,
  description: " Pull & Bear T Shirt Discover the latest trends in men's fashion and style with ASOS. Shop the new range of men's clothes, accessories, shoes, bags and more. ",
  category: "men's clothing",
  image: "https://ih1.redbubble.net/image.4948804446.1449/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg",
  rating: {
      rate: 4.5,
      count: 1246
  },
  inStock: true,
    qty:0,
},

];
  constructor() {}
  
  ngOnInit(): void {
    console.log(this.products);
  }
getRating(result:number){
  console.log(result);
  

}
}
