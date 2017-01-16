angular
    .module("customerLog", ["firebase"])
    .controller("CustomerLogController", ["$firebaseArray", CustomerLogFunction]);

function CustomerLogFunction($firebaseArray) {
    var vm = this;
    var ref = firebase.database().ref().child("customers");
    this.customers = $firebaseArray(ref);
    this.newCustomer = {};
    this.emailPattern = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

    // add new customers
    this.addCustomer = function() {
        this.customers.$add(this.newCustomer)
        this.newCustomer = {};
    }

    // update customer info
    this.update = function(customer) {
        this.customers.$save(customer);
        console.log(customer)
    }

    // delete customer
    this.delete = function(customer) {
        this.customers.$remove(customer);
    }

}
