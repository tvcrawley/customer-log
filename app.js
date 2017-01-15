angular
    .module("customerLog", ["firebase"])
    .controller("CustomerLogController", ["$firebaseArray", CustomerLogFunction]);

function CustomerLogFunction($firebaseArray) {
    var vm = this;
    var ref = firebase.database().ref().child("customers");
    this.customers = $firebaseArray(ref);
    this.newCustomer = {};

    // add new customers to database
    this.addCustomer = function() {
        this.customers.$add(this.newCustomer)
        this.newCustomer = {};
    }
}
