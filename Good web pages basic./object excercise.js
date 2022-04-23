//Excercise using js
// itemName
//price
//discount
//itemcode

const product = {
    itemName: 'Flower',
    price:50,
    discount:20,
    itemCode : 'F40'

}

//Factory Function

function createProduct(name, price, discount, itemCode) {
    return{
        itemName : name,
        price: price,
        discount : discount,
        itemCode : itemCode,
    }
}

const football = createProduct( 'football' , 400 , 30,  'F30');


//Constructor function
function Product(name, price ,  discount , itemCode){
    this.itemName = name;
    this.price = price;
    this.discount = discount;
    this.itemCode = itemCoe;
    this.discountValue = function(){
        return price * discount/100;
    }
}

const mobile = new Product('oneplus', 40000 , 4 , 'OP40')

