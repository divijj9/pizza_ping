//http https call
import URL from '../utils/constant.js'
//  function makeNetworkCall(){
//     const promise= fetch(URL);
//     promise.then(response=>{
//         const promise2=response.json();
//         promise2.then(data=>console.log(data)).catch(e=>console.log(e));
//     }).catch(err=>{
//         console.log(err);   (((problem of this code is """CALL BACK HELL""")))
//     })
    
// }
 async function makeNetworkCall(){
    try{
    const response=await fetch(URL);///Synchronize code by await
    const data=await response.json();
    return data;
    }
    catch(err){
        console.log('Some problem',err);
        throw err;
    }
}
// async makes a new thread where await blocks it (ie await blocks the func thread other remains working)
export default makeNetworkCall;