// struct of pizza obj
class product{
    constructor(id,name,desc,price,url){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.price=price;
        this.url=url;
        this.IsAddedInCart=false;
    }

}
export default product;