

// Creating a promise
// const promise = new Promise((resolve, rejected) => {
//     setTimeout(() => {
//         resolve("Operation succesful");
//         // rejected("Operation failed");
        
//     }, 2000);

    
// });

// // Checking if promise resolved or rejected
// promise.then((result) => {
//     // Executes when promise is resolved
//     console.log(result);
// }).catch((err) => {
//     // Executes when promise is rejected
//     console.log(err);
// });

function fetchData () {
    return fetch('https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg').then((result) => {
        // console.log(result);
        result.json().then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    }).catch((err) => {
        console.log(err);
    });
}

// Clearer structure
async function fetchDataAsync(){
    try {
        const response = await fetch('https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg');
        const json = await response.json();
        console.log(json);
    } catch (err) {
        console.log(err);
    }
}

fetchDataAsync();