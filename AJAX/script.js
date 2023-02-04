function sendRequest(method, url, data) {
    const promise =  new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            // handle application error
            if (this.status >= 400) {
                reject(`There was an application error and status code is ${this.status}`)
            }
            else {
                resolve(this.response)
            }
        }

        xhr.onerror = function () {
            reject('There was an error');
        }

        xhr.open(method, url);
        xhr.responseType = 'json';

        xhr.send(data);
    })

    return promise;
}

const postData = JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
})

async function getData() {
    try {
        const data = await sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1')
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
    
}

async function sendData() {
    try {
        const data = await sendRequest('POST', 'https://jsonplaceholder.typicode.com/posts', postData);
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}

const getButton = document.getElementById('get');
const sendButton = document.getElementById('send');

getButton.addEventListener('click', getData);
sendButton.addEventListener('click', sendData);