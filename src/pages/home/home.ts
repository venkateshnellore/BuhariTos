import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { ItemlistPage } from '../itemlist/itemlist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})


export class HomePage {
  @ViewChild('slider') slider: Slides;

  public foodcategory:any=[];  
  public bestsellers: any=[];
  public offers: any = [];
  public menu:any = 
  [
    {
      "Food_Category":
      [
        {
        category: "Soups",
        category_image:"../assets/imgs/main/background-2.jpg",
        items:[
          {
          item_id:"01",
          item_name:"Cream of Tomato Soup",
          item_type:"veg",
          item_category:"Soups",
          item_rate:135,
          item_images:
          [
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"02",
          item_name:"Cream of Mushroom Soup",
          item_type:"veg",
          item_category:"Soups",
          item_rate:135,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"03",
          item_name:"Sweet Corn Veg Soup",
          item_type:"veg",
          item_category:"Soups",
          item_rate:135,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"04",
          item_name:"Cream of Chicken Soup",
          item_type:"non-veg",
          item_category:"Soups",
          item_rate:155,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"05",
          item_name:"Chicken Pepper Soup",
          item_type:"non-veg",
          item_category:"Soups",
          item_rate:155,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"06",
          item_name:"Sweet Corn Chicken Soup",
          item_type:"non-veg",
          item_category:"Soups",
          item_rate:155,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
        ]
        },
        {
        category: "Starters",
        category_image:"../assets/imgs/main/background-3.jpg",
        items:[
          {
          item_id:"01",
          item_name:"Paneer 65",
          item_type:"veg",
          item_category:"Starters",
          item_rate:210,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"02",
          item_name:"Gobi 65",
          item_type:"veg",
          item_category:"Starters",
          item_rate:210,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"03",
          item_name:"Crispy Veg",
          item_type:"veg",
          item_category:"Starters",
          item_rate:245,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"04",
          item_name:"Chicken 90",
          item_type:"non-veg",
          item_category:"Starters",
          item_rate:280,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"05",
          item_name:"Chicken 65",
          item_type:"non-veg",
          item_category:"Starters",
          item_rate:255,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"06",
          item_name:"Ginger Chicken Dry",
          item_type:"non-veg",
          item_category:"Starters",
          item_rate:275,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
        ]
        },
        {
        category: "Main Course",
        category_image:"../assets/imgs/main/background-4.jpg",
        items:[
          {
          item_id:"01",
          item_name:"Vegetable Curry",
          item_type:"veg",
          item_category:"MainCourse",
          item_rate:200,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"02",
          item_name:"Dal Fry",
          item_type:"veg",
          item_category:"MainCourse",
          item_rate:200,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"03",
          item_name:"Mushroom Masala",
          item_type:"veg",
          item_category:"MainCourse",
          item_rate:210,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"04",
          item_name:"Egg Curry",
          item_type:"veg",
          item_category:"MainCourse",
          item_rate:145,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"05",
          item_name:"Chicken 82 Gravy",
          item_type:"non-veg",
          item_category:"MainCourse",
          item_rate:275,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"06",
          item_name:"Chicken Kuruma",
          item_type:"non-veg",
          item_category:"MainCourse",
          item_rate:240,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
        ]
        },
        {
        category: "Breads",
        category_image:"../assets/imgs/main/background-5.jpg",
        items:[
          {
          item_id:"01",
          item_name:"Chapati",
          item_type:"veg",
          item_category:"Breads",
          item_rate:50,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"02",
          item_name:"Wheat Parota",
          item_type:"veg",
          item_category:"Breads",
          item_rate:50,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"03",
          item_name:"Tandoori Parota",
          item_type:"veg",
          item_category:"Breads",
          item_rate:55,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"04",
          item_name:"Ceylon Chicken Parota",
          item_type:"veg",
          item_category:"Breads",
          item_rate:240,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"05",
          item_name:"Mutton Kothu Parota",
          item_type:"non-veg",
          item_category:"Breads",
          item_rate:255,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"06",
          item_name:"Ceylon Mutton Parota",
          item_type:"non-veg",
          item_category:"Breads",
          item_rate:240,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
        ]
        },
        {
        category: "Rice and Biriyani",
        category_image:"../assets/imgs/main/background-1.jpg",
        items:[
          {
          item_id:"01",
          item_name:"Veg Biriyani",
          item_type:"veg",
          item_category:"Rice and Biriyani",
          item_rate:200,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"02",
          item_name:"Ghee Biriyani",
          item_type:"veg",
          item_category:"BRice and Biriyanireads",
          item_rate:190,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"03",
          item_name:"Steamed Rice",
          item_type:"veg",
          item_category:"Rice and Biriyani",
          item_rate:145,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"04",
          item_name:"Chicken Biriyani",
          item_type:"non-veg",
          item_category:"Rice and Biriyani",
          item_rate:250,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"05",
          item_name:"Chicken Biriyani [1 Kg]",
          item_type:"non-veg",
          item_category:"Rice and Biriyani",
          item_rate:2250,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"06",
          item_name:"Chicken Pulao",
          item_type:"non-veg",
          item_category:"Rice and Biriyani",
          item_rate:245,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
        ]
        },
        {
        category: "Fried Rice and Noodles",
        category_image:"../assets/imgs/main/background-2.jpg",
        items:[
          {
          item_id:"01",
          item_name:"Veg Fried Rice",
          item_type:"veg",
          item_category:"Fried Rice",
          item_rate:200,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"02",
          item_name:"Mushroom Fried Rice",
          item_type:"veg",
          item_category:"Fried Rice",
          item_rate:220,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"03",
          item_name:"Schezwan Veg Fried Rice",
          item_type:"veg",
          item_category:"Fried Rice",
          item_rate:220,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"04",
          item_name:"Chicken Fried Rice",
          item_type:"non-veg",
          item_category:"Fried Rice",
          item_rate:245,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"05",
          item_name:"Schezwan Chicken Fried Rice",
          item_type:"non-veg",
          item_category:"Fried Rice",
          item_rate:245,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"07",
          item_name:"Chicken Noodles",
          item_type:"non-veg",
          item_category:"Noodles",
          item_rate:245,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"08",
          item_name:"Veg Noodles",
          item_type:"veg",
          item_category:"Noodles",
          item_rate:200,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
        ]
        },
        {
        category: "Quick Bites",
        category_image:"../assets/imgs/main/background-3.jpg",
        items:[
          {
          item_id:"01",
          item_name:"Boiled Egg",
          item_type:"egg",
          item_category:"Quick Bites",
          item_rate:60,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"02",
          item_name:"Egg Podimas",
          item_type:"veg",
          item_category:"Quick Bites",
          item_rate:80,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"03",
          item_name:"Omelette",
          item_type:"egg",
          item_category:"Quick Bites",
          item_rate:75,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"04",
          item_name:"Tomato Omelette",
          item_type:"non-veg",
          item_category:"Quick Bites",
          item_rate:80,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
        ]
        },
        {
        category: "Desserts and Beverages",
        category_image:"../assets/imgs/main/background-4.jpg",
        items:[
          {
          item_id:"01",
          item_name:"Faluda",
          item_type:"veg",
          item_category:"Desserts",
          item_rate:200,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"02",
          item_name:"Peach Melba",
          item_type:"veg",
          item_category:"Desserts",
          item_rate:190,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"03",
          item_name:"TuttiFruty",
          item_type:"veg",
          item_category:"Desserts",
          item_rate:190,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"04",
          item_name:"Lime Soda",
          item_type:"veg",
          item_category:"Beverages",
          item_rate:90,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"05",
          item_name:"Lime Mint Soda",
          item_type:"veg",
          item_category:"Beverages",
          item_rate:100,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
          {
          item_id:"06",
          item_name:"Sweet Lassi",
          item_type:"veg",
          item_category:"Beverages",
          item_rate:100,
          item_images:[
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"},
            {item_img:"s3 url"}
          ],
          item_description:"bla bla bla"
          },
        ]
        },
      ],
      "Offers":
      [
        {
        item_id:"01",
        item_name:"Gobi 65",
        item_type:"veg",
        item_category:"Starters",
        item_rate:210,
        item_offer:20,
        item_images:[
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"}
        ],
        item_description:"bla bla bla"
        },
        {
        item_id:"02",
        item_name:"Tandoori Chicken",
        item_type:"non-veg",
        item_category:"Starters",
        item_rate:270,
        item_offer:20,
        item_images:[
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"}
        ],
        item_description:"bla bla bla"
        },
        {
        item_id:"03",
        item_name:"Chicken Fried Rice",
        item_type:"non-veg",
        item_category:"Fried Rice and Noodles",
        item_rate:245,
        item_offer:20,
        item_images:[
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"}
        ],
        item_description:"bla bla bla"
        },
        {
        item_id:"04",
        item_name:"Mutton Biriyani [500 Grams]",
        item_type:"non-veg",
        item_category:"Rice and Biriyani",
        item_rate:1450,
        item_offer:20,
        item_images:[
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"}
        ],
        item_description:"bla bla bla"
        },
        {
        item_id:"05",
        item_name:"Mutton Biriyani [1 Kg]",
        item_type:"non-veg",
        item_category:"Rice and Biriyani",
        item_rate:2900,
        item_offer:20,
        item_images:[
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"}
        ],
        item_description:"bla bla bla"
        },
        {
        item_id:"06",
        item_name:"Egg Biriyani",
        item_type:"egg",
        item_category:"Rice and Biriyani",
        item_rate:220,
        item_offer:20,
        item_images:[
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"}
        ],
        item_description:"bla bla bla"
        },
      ],
      "Best_Sellers":
      [
        {
        item_id:"01",
        item_name:"Gobi 65",
        item_type:"veg",
        item_category:"Starters",
        item_rate:210,
        item_images:[
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"}
        ],
        item_description:"bla bla bla"
        },
        {
        item_id:"02",
        item_name:"Tandoori Chicken",
        item_type:"non-veg",
        item_category:"Starters",
        item_rate:270,
        item_images:[
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"}
        ],
        item_description:"bla bla bla"
        },
        {
        item_id:"03",
        item_name:"Chicken Fried Rice",
        item_type:"non-veg",
        item_category:"Fried Rice and Noodles",
        item_rate:245,
        item_images:[
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"}
        ],
        item_description:"bla bla bla"
        },
        {
        item_id:"04",
        item_name:"Mutton Biriyani [500 Grams]",
        item_type:"non-veg",
        item_category:"Rice and Biriyani",
        item_rate:1450,
        item_images:[
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"}
        ],
        item_description:"bla bla bla"
        },
        {
        item_id:"05",
        item_name:"Mutton Biriyani [1 Kg]",
        item_type:"non-veg",
        item_category:"Rice and Biriyani",
        item_rate:2900,
        item_images:[
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"}
        ],
        item_description:"bla bla bla"
        },
        {
        item_id:"06",
        item_name:"Egg Biriyani",
        item_type:"egg",
        item_category:"Rice and Biriyani",
        item_rate:220,
        item_images:[
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"},
          {item_img:"s3 url"}
        ],
        item_description:"bla bla bla"
        },
      ]
    }
  ];
  public buttonClicked: boolean = false;
  public  addbutton:boolean = true;
  constructor(public navCtrl: NavController) {
   
  }
  
  ionViewDidLoad() {
    this.foodcategory = this.menu[0].Food_Category;
    this.bestsellers = this.menu[0].Best_Sellers;
    this.offers = this.menu[0].Offers;
    console.log("Food Category----",JSON.stringify(this.offers));
  }

  ngAfterViewInit() {
    this.slider.freeMode = true;
  }

  navitemlist(param) {
    this.navCtrl.push(ItemlistPage,{"itemlist":param});
  }
  public onButtonClick() {

    this.buttonClicked = !this.buttonClicked;
    this.addbutton = false;
}

// reduce(position,item,array){
//     if(item.count != 1 ){
//       this.items[position].count = item.count-1;
//       this.items[position].itemtotal = item.rate * item.count;
//       this.total = this.total - this.items[position].rate;
//     }
//     else{
//       this.total = this.total - this.items[position].rate;
//       array.splice(position,1);
//     }
//   }
//   add(position,item,array){
//     this.item_price = item.rate;
//     this.items[position].count = item.count +1;
//     this.items[position].itemtotal = item.rate * item.count;
//     this.total = this.total + this.items[position].rate;
//   }
//   placeOrder(){
    
//     for(let i=0;i<this.items.length;i++){
//       this.billing.push(this.items[i])
//     }
//     this.storage.get("Orders").then((val:any)=>{
//       if(val){
        
//       }
//     })
//     this.storage.set("Orders",JSON.stringify(this.billing));
    // this.items.length = 0;
    // console.log("To KOT",JSON.stringify(this.items))
  }

// }
