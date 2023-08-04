import makeNetworkCall from "./api-client.js";
import product from"../models/product.js";

const product_operation={
    productss:[],
    search_product(pizza_id){
        const p=this.productss.find(currPro=>currPro.id==pizza_id);
        console.log(p);
          p.IsAddedInCart=true;
    },
    get_product(){
        const pr_in_cart=this.productss.filter(pr=>pr.IsAddedInCart===true);                                                                                                                   
        console.log(pr_in_cart);
        return pr_in_cart;
    },
    async load_product(){
        const pizza= await makeNetworkCall();
        const pizzaArray=pizza['Vegetarian'];
        const productsArray=pizzaArray.map(pizza=>{
            const currPizza=new product(pizza.id,pizza.name,pizza.menu_description,pizza.prize,pizza.assets.product_details_page[0].url);
            return currPizza;
        })
        this.productss=pizzaArray;
       // console.log(product,"hiiiii");
        return productsArray;
    },
    sort_product(){} 
    
}
export default product_operation;