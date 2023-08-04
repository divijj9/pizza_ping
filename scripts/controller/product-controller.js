// connection bw view and model
//data exchange bw view and model
import product_operation from "../services/product_operatin.js";
//  window.addEventListener(
//     'load',bindevents
//  )
// function bindevents(){
//     document.getElementById('clickme').addEventListener(
//         'click',
//         ()=>{
//             alert("hello");
//         }

//     )
// }
// async function loadPizza(){
//     const pizza=await product_operation.load_product();
//     console.log(pizza);
//     const rowdiv=document.getElementById('loaddata');
    
//     let pizzlen=pizza.length;
//     for(let idx=0;idx<pizzlen;idx++){
//         const col=document.createElement('div');
//         col.classList.add('col-4');
//         col.innerHTML=`
//         <div class="card" style="width: 18rem;">
//   <img src="${pizza[idx].url}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${pizza[idx].name}</h5>
//     <p class="card-text">${pizza[idx].desc}"</p>
//     <a class="btn btn-primary">Add to Cart</a>
//   </div>
// </div>
//         `;
//         rowdiv.appendChild(col);
//     }

    
    
// }
async function loading(){
  const pizzas=await product_operation.load_product();
  for(let pizza of pizzas){
    const rowdiv=document.getElementById("loaddata");
    const p=Pizza1(pizza);
    rowdiv.appendChild(p);
  }
}
function addToCart(){
  console.log("add to cart called",this);
  const currBut=this;
  const pizza_id=currBut.getAttribute('product-id');
  console.log("pizza id is",pizza_id);
  product_operation.search_product(pizza_id);
  print_cart();
}
function print_cart(){
  const pr_arr=product_operation.get_product();
  console.log(pr_arr);
  const b=document.getElementById('basket');
  b.innerHTML=``;
  var sum=0;
  for(let pr of pr_arr){
    sum=sum+parseFloat(pr.price);
    const a=document.createElement('li');
    const li=document.createElement('li');
    li.innerText=`${pr.name},${pr.id},${pr.price}`;
    a.appendChild(li);
    b.appendChild(a);
  }
  console.log(sum);
  print_total(sum);

}
function print_total(sum){
  // const a=document.getElementById('total');
  // const h=document.createElement('h3');
  // h.textContent=`the total sum is ${sum}`;
  // a.appendChild(h);
  console.log(sum);
  const h=document.getElementById('total');
  h.textContent=`Total amount before gst ${sum}`;
  print_with_gst(sum);

}
function print_with_gst(sum){
  const a=document.getElementById('tota');
  const sum_2=parseInt(sum);
  console.log(sum_2);
  const ans=(sum_2*0.18)+sum_2;
  console.log(ans);
  a.textContent=`payable bill is ${ans}`;
}



function Pizza1(pizza){
  const top=document.createElement('div');
  top.classList.add('col-4');
  const col=document.createElement('div');
  col.classList.add('card');
  const ig=document.createElement('img');
  ig.src=pizza.url;
  ig.classList.add('card-img-top');
  col.appendChild(ig);
  const a=document.createElement('div');
  a.classList.add('card-body');
  col.appendChild(a);
  const head=document.createElement('h5');
  head.classList.add('card-text');
  head.innerText=pizza.name;
  a.appendChild(head);
  const para=document.createElement('p');
  para.classList.add('card-text');
  para.innerText=pizza.desc;
  a.appendChild(para);
  const b=document.createElement('button');
 b.addEventListener('click',addToCart);///Event bind
  b.setAttribute('product-id',pizza.id);
  b.className='btn btn-primary';
  b.innerText='Add to Cart';

  a.appendChild(b);
  top.appendChild(col);
  return top;
}
loading();
//loadPizza();
//print_cart();
