

const load_products = [
    {"name":"Convers Breakpoint", "price": 100.50, "priceDown": 245.00, "boxSale": "", "sex": "man", "imgEl": "shoe_item_1.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [39, 41]},
    {"name":"Converse All Star II", "price": 180.50, "priceDown": " " , "boxSale": "", "sex": "man", "imgEl": "shoe_item_2.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [38, 41, 42]},
    {"name":"Adidas Pure Chill", "price": 150.50, "priceDown": 378.50, "boxSale": 20, "sex": "man", "imgEl": "shoe_item_3.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [39, 41]},
    {"name":"Puma Duplex W", "price": 100.50, "priceDown": " ", "boxSale": "", "sex": "man", "imgEl": "shoe_item_4.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [43, 45]},
    {"name":"Convers Breakpoint", "price": 180.50, "priceDown": 425.00, "boxSale": 15, "sex": "children", "imgEl": "shoe_item_5.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [33, 34]},
    {"name":"Adidas Originals", "price": 150.50, "priceDown": " ", "boxSale": "", "sex": "man", "imgEl": "shoe_item_6.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [39, 41]},
    {"name":"Adidas Alphabounce", "price": 577.50, "priceDown": 615.00, "boxSale": 25, "sex": "children", "imgEl": "shoe_item_7.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [33]},
    {"name":"Adidas Climacool I", "price": 180.50, "priceDown": 225.00, "boxSale": 15, "sex": "man", "imgEl": "shoe_item_8.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [38, 41, 42]},
    {"name":"Adidas Originals II", "price": 180.50, "priceDown": " ", "boxSale": "", "sex": "woman", "imgEl": "shoe_item_4.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [43, 45]},
    {"name":"Adidas Originals IV", "price": 180.50, "priceDown": 325.00, "boxSale": 15, "sex": "woman", "imgEl": "shoe_item_5.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [39, 41]},
    {"name":"Asics Breakpoint I", "price": 150.50, "priceDown": 175.00, "boxSale": 20, "sex": "woman", "imgEl": "shoe_item_6.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [38, 41, 42]},
    {"name":"Nike Alphabounce", "price": 115.50, "priceDown": 145.00, "boxSale": 25, "sex": "woman", "imgEl": "shoe_item_7.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [43, 45]},
    {"name":"Reebok Star", "price": 180.50, "priceDown": 225.00, "boxSale": 15, "sex": "woman", "imgEl": "shoe_item_8.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [39, 41]},
    {"name":"Adidas poster III", "price": 180.50, "priceDown": " ", "boxSale": "", "sex": "woman", "imgEl": "shoe_item_1.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [38, 41, 42]},
    {"name":"Converse All Star II", "price": 100.50, "priceDown": 145.50, "boxSale": 25, "sex": "woman", "imgEl": "shoe_item_2.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [43, 45]},
    {"name":"Nike Skyline I", "price": 123.50, "priceDown": 175.00, "boxSale": 25, "sex": "woman", "imgEl": "shoe_item_3.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [39, 41]},
    {"name":"Nike Skyline I", "price": 33.50, "priceDown": " ", "boxSale": "", "sex": "children", "imgEl": "shoe_item_4.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [31, 32, 33]},
    {"name":"Puma Duplex W", "price": 234.50, "priceDown": 255.00, "boxSale": 25, "sex": "woman", "imgEl": "shoe_item_6.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [39, 41]},
    {"name":"Nike Sky", "price": 345.50, "priceDown": " ", "boxSale": "", "sex": "woman", "imgEl": "shoe_item_5.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [43, 45]},
    {"name":"Puma Duplex Split", "price": 57.50, "priceDown": 145.00, "boxSale": 25, "sex": "woman", "imgEl": "shoe_item_7.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [38, 41, 42]},
    {"name":"Nike Skyline II", "price": 33.50, "priceDown": " ", "boxSale": "", "sex": "children", "imgEl": "shoe_item_4.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [31, 32, 33]},
    {"name":"Nike Nexus", "price": 67.50, "priceDown": 87.50, "boxSale": 25, "sex": "woman", "imgEl": "shoe_item_8.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [43, 45]},
    {"name":"Reebok Star", "price": 180.50, "priceDown": 225.00, "boxSale": 15, "sex": "woman", "imgEl": "shoe_item_8.png", "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquid autem nesciunt officiis quam tenetur ullam? Asperiores, ex explicabo iure magnam molestias mollitia nostrum odio quam, quas similique tenetur.", "size": [39, 41]}


];


let products = [];

export class Data {
    static loadProducts() {
        for(let i = 0; i < load_products.length; i++){
            load_products[i].nameData = i
        }
       return products = load_products;
    }

    static getProducts() {
        return products;
    }
}

