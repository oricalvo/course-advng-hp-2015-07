var MyApp = MyApp || {};

MyApp.Network = (function () {
    var lastActivity;
    var counter;

    function httpGet() {
        console.log("GET");
    }

    function httpPost() {
        console.log("POST");
    }

    return {
        httpGet: httpGet,
        httpPost: httpPost,
    };
})();
