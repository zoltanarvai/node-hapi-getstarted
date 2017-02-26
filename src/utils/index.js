const asPromise = (error, result) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        }, 1);
    });
};

module.exports = {
    asPromise
};