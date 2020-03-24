console.log('=================Controller===================');
console.log("Test Controller");
console.log('=================Controller===================');

function testingController(req, res) {
    res.send("<h1>Testing Server!!<\h1>");
}

export default {
    testingController
}