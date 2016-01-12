/* 
 * Copyright 2014 Yannick Roffin.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/* Controllers */

angular.module('MarkdownApp.config',[])
     .config(function($mdIconProvider) {
	  // Configure URLs for icons specified by [set:]id.
	})
    .config(function($mdThemingProvider){
        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('default')
            .primaryPalette('orange')
            .accentPalette('deep-orange');
    })

angular.module('MarkdownApp.controller',[])
    /**
     * main controller
     */
    .controller('MarkdownAppCtrl',
    	function($scope, markdownService){
    	
    	$scope.load = function() {
    	}
    })
    /**
     * main controller
     */
    .controller('MarkdownHomeCtrl',
    	function($scope, $rootScope, $log, markdownService){
    	
    	$scope.load = function() {
    		$scope.text = $('#text-sample').text();
    		$log.debug('loading ...', $scope.text);
    	}
    	
    	$scope.transform = function() {
    		$log.debug('transform ...',$scope.text);
    		$('#markdown-sample').html(markdownService.html($scope.text));
    	}
    })
