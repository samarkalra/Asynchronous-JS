const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        //readyState : 0
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('error getting resource');
            }
        });

        //readyState : 1
        request.open('GET', resource);
        //readyState : 2
        request.send();
    });
};

// Callback hell
// getTodos('todos/luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/mario.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/shaun.json', (err, data) => {
//             console.log(data);
//         });
//     });
// });

// Chaining Promises
getTodos('todos/luigi.json').then((data) => {
    console.log(data);
    return getTodos('todos/mario.json');
}).then((data) => {
    console.log(data);
    return getTodos('todos/shaun.json');
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})