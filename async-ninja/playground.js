const getTodos = callback => {
    const request = new XMLHttpRequest();

    // request.addEventListener('readystatechange', () => {
    //     // console.log(request, request.readyState);
    //     request.readyState === 4 && request.status === 200 ? 
    //         // console.log(request.responseText)
    //         callback(undefined, request.responseText)
    //         : request.readyState === 4 ?
    //             // console.log('Could not fetch data') 
    //             callback('could not fetch data', undefined)
    //             : null;
            
    // });

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data );
        } else if (request.readyState === 4) {
                callback('could not fetch data', undefined);
            }
            
    });
    
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();  
};

console.log('red one');
console.log('green two');

getTodos((err, data) => {
    console.log('callback fired');
    // console.log(err, data);
    err ? console.log(err) 
    : console.log(data);
});

console.log('blue three');
console.log('yellow four');