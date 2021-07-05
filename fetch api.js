// fetch('todos/luigi.json')
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const getTodos = async () => {
    const response = await fetch('todos/luigi.json');
    const data = await response.json();

    return data;
};

getTodos()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })