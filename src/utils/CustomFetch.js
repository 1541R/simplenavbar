export const CustomFetch = (data, timeout) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if(data){
                resolve(data)
            }else{
            reject([]);
        }
    }, timeout );
} );
}