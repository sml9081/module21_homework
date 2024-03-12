function promise () {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = Math.ceil(Math.random() * 100)
            if (randomNumber % 2 === 0) {
                resolve(randomNumber)
            } else {
                reject(randomNumber)
            }
        }, 3000)
})

myPromise
    .then((result) => {
        console.log(`Сгенерированное число — ${result}`, )
    })
    .catch((error) => {
        console.log(`Сгенерированное число — ${error}`)
    });
} 

promise();