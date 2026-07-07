const queryString = require('querystring');

function userDataSubmit(req, res) {
  let dataBody = [];
  req.on("data", (chunk) => {
    dataBody.push(chunk);
  });

  req.on("end", () => {
    const rowData = Buffer.concat(dataBody).toString();
    const readableData = queryString.parse(rowData);

    console.log(readableData);

    let dataString =
      "My name is " +
      readableData.name +
      " and my email id is " +
      readableData.email;
    console.log(dataString);
  });

  res.write(`<h1>You can get data from user form here..</h1>`);
}

module.exports = userDataSubmit;
