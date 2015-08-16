function BaseCtrl() {
    this.$injector = angular.element(document.getElementsByTagName("html")).injector();
}

Object.defineProperty(BaseCtrl.prototype, "$location", {
    get: function () {
        if (!this.$loc) {
            this.$loc = this.$injector.get("$location");
        }

        return this.$loc;
    }
});
