// Would make the get request to the bookingbug API
angular
  .module('bookingbug')
  .service('bookingbugService', BookingbugService);

BookingbugService.$inject = ['$http', 'Credentials'];
function BookingbugService($http, Credentials) {

  this.getBookings = function getBookings(companyId) {
    return $http({
              method: 'GET',
              url: `https://uk.bookingbug.com/api/v1/${companyId}/services`,
              headers: {
                'App-Id': '5a3d8b8d',
                'App-Key':  '738e9aca62e7465446b7be8fe4219ffa'
              }
            }).then((response) => {
          
              // return response.data._embedded.services;
              return response;
          });
  };
}
