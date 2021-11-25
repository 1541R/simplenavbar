/*let is_ok = true;

let production = (timeout, task) => { 
    return new Promise((resolve, reject) => {
        if(is_ok){
            setTimeout( () => {
                resolve(task);
            }, timeout);

        }else{
            reject("Error");
        }
    })
}

production(0, console.log("order recived, starting production"))
    .then( () => production(8000, console.log("Calentar el agua en la pava")))
    .then( () => production(5000, console.log("Vertir la yerva en el mate")))
    .then( () => production(2000, console.log("Tapar el mate con la mano y sacudir")))
    .then( () => production( 3000, console.log("Acomodar la yerba de forma inclinada") ) )
    .then( () => production(2000, console.log("Agregar un poco de agua a temperatura ambiente") ) )
    .then( () => production( 1000, console.log( "Introducir la bombilla tampando la punta" ) ) )
    .then( () => production(4000, console.log("Desechar el primer sorbo de mate")))
    .then( () => production(4000, console.log("Agregar agua caliente")))
    .catch( err => console.log(err) )
    .finally( () => console.log("Day ended. Time to close.") );
 
*/

const products = [
    {
      id: 30,
      name: "Agua Con Gas 1,5 lts",
      stock: 86,
      cost: 45,
    },
    {
      id: 29,
      name: "Agua Sin Gas 1,5 lts",
      stock: 100,
      cost: 45,
    },
    {
      id: 76,
      name: "Alambrado Chardonnay 750 ml",
      stock: 92,
      cost: 575,
    }
]
const estatus = true 
const productos = (products, timeout) => {

    return new Promise( (resolve, reject) => {
        if(estatus){
            setTimeout( () => {
                resolve(products)
            }, timeout )
        }else{
            reject("Error");
        }
    } );
}

productos(products.filter( product => product.cost === 45 )  , 3000)
.then( prods =>  { console.log(prods) }  )
.catch( err => console.log(err) )