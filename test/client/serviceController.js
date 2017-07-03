/* global describe, it */
describe('bookingsController', ()=>{
  beforeEach(module('bookingbug'))

  let $rootScope;
  let $controller;
  let $httpBackend;
  let bookingbugService;

  beforeEach(inject((_$rootScope_, _$controller_, _$httpBackend_, _bookingbugService_) => {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    bookingbugService = _bookingbugService_;
  }));

  describe('returns all the bookings', ()=>{
    let $scope, vm;

    beforeEach(()=>{
      $httpBackend.when('GET', 'js/views/home.html').respond(200);
      $httpBackend.when('GET', 'https://uk.bookingbug.com/api/v1/41285/services')
        .respond(200, {
          total_entries: 1,
          _embedded: {
            services: [{
      				"id": 65607,
      				"name": "Club Fitting",
      				"description": "Improve your fairway and approach play with a custom set of club by incorporating our driver fitting technology and extensive knowledge of our staff.\r\n",
      				"durations": [
      					60
      				],
      				"prices": [
      					5000
      				],
      				"detail_group_id": 23040,
      				"listed_durations": [],
      				"extra": {
      					"image_url": "http://images.bookingbug.com/bb/driver.jpg"
      				},
      				"booking_time_step": 60,
      				"is_event_group": false,
      				"type": "service",
      				"deleted": false,
      				"queuing_disabled": true,
      				"company_id": 41285,
      				"duration_unit": "minute",
      				"min_advance_period": 86400,
      				"max_advance_period": 62208000,
      				"min_cancel_period": 86400,
      				"booking_type_public": "reservation",
      				"booking_type_member": "reservation",
      				"min_bookings": 1,
      				"max_bookings": 1,
      				"groups": [],
      				"spaces": 2,
      				"order": 65607,
      				"child_level_service": true,
      				"_links": {
      					"self": {
      						"href": "https://uk.bookingbug.com/api/v1/41285/services/65607"
      					},
      					"items": {
      						"href": "https://uk.bookingbug.com/api/v1/41285/items?service_id=65607"
      					},
      					"questions": {
      						"href": "https://uk.bookingbug.com/api/v1/41285/questions?detail_group_id=23040"
      					},
      					"days": {
      						"href": "https://uk.bookingbug.com/api/v1/41285/day_data?service_id=65607{&month,week,date,edate,location,event_id,person_id,resource_id,people_ids,resource_ids,person_group_id}",
      						"templated": true
      					},
      					"times": {
      						"href": "https://uk.bookingbug.com/api/v1/41285/time_data?service_id=65607{&event_id,date,end_date,location,person_id,resource_id,duration,single,num_resources,group_id,resource_ids,time_zone,ignore_booking,person_group_id}",
      						"templated": true
      					},
      					"book": {
      						"href": "https://uk.bookingbug.com/api/v1/41285/basket/add_item?service_id=65607{&event_id,member_id,event_chain_id,product_id,attachment_id,deal_id,package_id,bulk_purchase_id}",
      						"templated": true
      					},
      					"all_children": {
      						"href": "https://uk.bookingbug.com/api/v1/41285/services/65607/all_children"
      					},
      					"company": {
      						"href": "https://uk.bookingbug.com/api/v1/company/41285"
      					}
      				}
      			}]
          }
        });
    });

    it('should display all the bookings', (done) => {
      $scope = $rootScope.$new();
      vm = $controller('BookingsShowCtrl', {
        $scope,
        $stateParams: { id: 41285, name: 'Gstar' },
        bookingbugService
      });
      $httpBackend.flush();
      setTimeout(() => {

        // This console.log should be logging 1 but I can't figure out why its not retrieving the elements from the DOM! 
        console.log(angular.element(document.querySelectorAll('li')).length);

        expect(vm.services).to.be.an('array');
        expect(vm.services.length).to.eq(1); // retuns one service
        expect(vm.services[0].name).to.eq('Club Fitting');
        expect(vm.services[0].description).to.eq("Improve your fairway and approach play with a custom set of club by incorporating our driver fitting technology and extensive knowledge of our staff.\r\n");
        expect(vm.services[0].prices).to.be.an('array');
        expect(vm.totalServices).to.eq(1);
        done();
      }, 250);
    });
  });
});
