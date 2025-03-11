const result = (
function(){
    let cart = [];
    return {
        addToCart:(item)=>{
            cart.push(item);
            console.log(`${item} added to cart`);
        },
        getCart: ()=>   cart,

    }
}
)();

result.addToCart("apple");
console.log(result.getCart())