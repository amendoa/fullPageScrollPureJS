/**
 * Full page
 */
(function(){
	'use strict';
	/**
	 * Full scroll main function
	 */
	var fullScroll = function () {
		/**
		 * Main div
		 * @type {Object}
		 */
		var main = document.getElementById('main');
		/**
		 * Sections div
		 * @type {Array}
		 */
		var sections = main.getElementsByTagName('section');
		
		/**
		 * Full page scroll configurations
		 * @type {Object}
		 */
		var defaults = {
			container : main,
		    sections : sections,
		    hasPagination : false,
		    animateTime : 0.6,
		    animateType : 'ease'
		};

		this.defaults = defaults;
		/**
		 * Init build
		 */
		this.init();
	};

	fullScroll.prototype.init = function () {
		this.buildSections(); 
		this.goScroll(this.defaults.container, -10);
	};

	fullScroll.prototype.buildSections = function () {
		var sections = this.defaults.sections;
		for (var i = 0; i < sections.length; i++) {
			sections[i].setAttribute('data-index', i);
		}
		return this;
	};

	fullScroll.prototype.goScroll = function (element, position) {
		var animateTime = this.defaults.animateTime;
        var animateType = this.defaults.animateType;

	    element.style.webkitTransform = 'translateY(' + position + '%)';
	    element.style.mozTransform = 'translateY(' + position + '%)';
	    element.style.msTransform = 'translateY(' + position + '%)';
	    element.style.transform = 'translateY(' + position + '%)';
	    element.style.webkitTransition = 'all ' + animateTime + 's ' + animateType;
	    element.style.mozTransition = 'all ' + animateTime + 's ' + animateType;
	    element.style.msTransition = 'all ' + animateTime + 's ' + animateType;
	    element.style.transition = 'all ' + animateTime + 's ' + animateType;
    
	};
	
	window.fullScroll = fullScroll;

})();
