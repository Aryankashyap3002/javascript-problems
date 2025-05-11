function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Starting downloading from ", url);
        setTimeout(function processDownloading() {
            let data = "dummy data";
            console.log("Downloaded completely");
            resolve(data);
        }, 7000);
    });
}

async function processing() {
    console.log("Entering processing");
    let value1 = await fetchData("www.youtube.com");
    console.log("youtube downloading completed");
    let value2 = await fetchData("www.google.com");
    console.log("google downloading completed");
    return value1 + value2;
} 

console.log("Start");
setTimeout(function timer1() {
    console.log("timer 1")
}, 0);
console.log("after setting timer1");
let x = processing();
x.then(function (value) {
    console.log("finally processing promise resolved ", value);
});
setTimeout(function timer2() {console.log("timer 2")}, 1000);
setTimeout(function timer3() {console.log("timer 3")}, 0);
console.log("End");