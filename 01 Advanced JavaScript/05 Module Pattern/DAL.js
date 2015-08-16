var MyApp = MyApp || {};

MyApp.DAL = (function (Network) {

    function getAllContacts() {
        Network.httpGet("/api/contact");
    }

    return {
        getAllContacts: getAllContacts,
    };

})(MyApp.Network);
