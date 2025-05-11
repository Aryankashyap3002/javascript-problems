async function fun() {
    console.log("entered");
    let x = await 30;
    console.log("existing");
    return x;
}

console.log("Started");
let val = fun();
val.then(function (value) {
    console.log("value is ", value);
})

console.log("End");