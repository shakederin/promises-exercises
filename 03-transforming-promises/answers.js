/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    promise
      .then((value) => {transformer(value)})
      .then(value => resolve(value))
      .catch(error => reject(error));
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then((result)=>{
      if(!isNaN(result)){
        return result*result;
      } else{
        throw "Cannot convert " + result + "to a number!"
      }
    })
    // .catch((result)=>{
    //   if(isNaN(result)){
        
    //   }
      
    // });
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(()=>{return new Promise((resolve)=>{
      resolve(0);
    })});
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise
  .then((value)=>{throw value;}, (error)=> error);
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};