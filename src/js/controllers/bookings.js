angular
  .module('bookingbug')
  .controller('BookingsHomeCtrl', BookingsHomeCtrl)
  .controller('BookingsIndexCtrl', BookingsIndexCtrl)
  .controller('BookingsShowCtrl', BookingsShowCtrl);

// letcompanies =  null;

BookingsHomeCtrl.$inject = [];
function BookingsHomeCtrl() {
  const vm = this;
}

BookingsIndexCtrl.$inject = [];
function BookingsIndexCtrl() {
  const vm = this;
  vm.companies = {
    'Golf Services Company': 41285,
    'Beauty Company': 44481,
    'Car Hire Company': 41265
  };
}

// let stateparamsTesting =

BookingsShowCtrl.$inject = ['bookingbugService', '$stateParams'];
function BookingsShowCtrl(bookingbugService, $stateParams) {
  const vm = this;
  vm.companyName = $stateParams.name;
  vm.services = {};


  bookingbugService.getBookings($stateParams.id)
  .then((response) => {
    vm.totalServices = response.data.total_entries;
    vm.services = response.data._embedded.services;
  });

}
