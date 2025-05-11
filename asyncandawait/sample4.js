function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from ", url);
        setTimeout(function processDownloading() {
            console.log("Downloaded completed");
            let data = "dummy data";
            resolve(data);
        }, 5000)
    });
}

function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Started writing ", data ," in a file");
        setTimeout(function writingData() {
            console.log("Writing successfull");
            let fileName = "abc.txt";
            resolve(fileName);
        }, 3000)
    });
}

function uploadData(fileName, url) {
    return new Promise(function (resolve, reject) {
        console.log("Uploading the data of file ", fileName, "on url ", url);
        setTimeout(function uploadingFile() {
            console.log("Uploaded successfully on ", url);
            let newUrl = "www.abc.com"
            resolve(newUrl);
        }, 7000)

    });
}

let downloadPromise = fetchData("www.google.com");
downloadPromise.then(function (value) {
    console.log("Dwnloaded promise data is fullfilled");
    console.log(value);
    let writePromises = writeFile(value);
    writePromises.then(function (value) {
        console.log("Writing file promise is fullfilled");
        console.log(value);
        let uploadPromise = uploadData(value, "www.abc.com");
        uploadPromise.then(function (value) {
            console.log("Uploading file promise is fullfilled on the given url");
            console.log(value);
        })
    })
})

async function processing1() {
    let downloadData1 = await fetchData("www.google.com");
    console.log("Downloaded data is ", downloadData1);
    let writeFileData1 = await writeFile(downloadData1);
    console.log("Written on file ", writeFileData1);
    let uploadFileData1 = await uploadData(writeFileData1, "www.drive.google.com");
    console.log("Uploaded data on url ", uploadFileData1);
    return uploadFileData1;
} 

async function processing2() {
    let downloadData2 = await fetchData("www.google.com");
    console.log("Downloaded data is ", downloadData2);
    let writeFileData2 = await writeFile(downloadData2);
    console.log("Written on file ", writeFileData2);
    let uploadFileData2 = await uploadData(writeFileData2, "www.drive.google.com");
    console.log("Uploaded data on url ", uploadFileData2);
    return uploadFileData2;
} 

async function processing3() {
    let downloadData3 = await fetchData("www.google.com");
    console.log("Downloaded data is ", downloadData3);
    let writeFileData3 = await writeFile(downloadData3);
    console.log("Written on file ", writeFileData3);
    let uploadFileData3 = await uploadData(writeFileData3, "www.drive.google.com");
    console.log("Uploaded data on url ", uploadFileData3);
    return uploadFileData3;
} 

console.log("start");
Promise.all([processing1(), processing2(), processing3()]).then(function process (value) {
    console.log(value);
})
console.log("end");

