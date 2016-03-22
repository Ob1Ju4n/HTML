'use strict';

angular.module('confusionApp')
.constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$http', 'baseURL', function($http,baseURL) {
    
           
        
    
                this.getDishes = function(){
                                        return $http.get(baseURL+"dishes");
                                    };
                    this.getDish = function (index) {
                                        return $http.get(baseURL+"dishes/"+index);

                };
    
	        this.getPromotion = function (index) {                    
					return $http.get(baseURL+"promotions/"+index);
                };
               
    
                        
        }])

        		
	 .service('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {
    
            var corpfac = {};  		
			
			corpfac.getLeaders = function(){
            return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }});
                                    };     
              return		corpfac;							
    
        }])
		
		.service('feedbackFactory',['$resource','baseURL',function($resource,baseURL){		
                                   
									
									this.feedback = function(){
                                        return $resource(baseURL+"feedback/:id",null,  {'update':{method:'PUT' }});
                                    };
			
		}])

;




