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

async function processing() {
    let downloadData = await fetchData("www.google.com");
    console.log("Downloaded data is ", downloadData);
    let writeFileData = await writeFile(downloadData);
    console.log("Written on file ", writeFileData);
    let uploadFileData = await uploadData(writeFileData, "www.drive.google.com");
    console.log("Uploaded data on url ", uploadFileData);
} 

processing();

