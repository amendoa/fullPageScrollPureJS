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
		    animateTime : 0.6,
		    animateType : 'ease',
		    maxPosition: sections.length - 1
		};

		this.defaults = defaults;
		/**
		 * Init build
		 */
		this.init();
	};

	fullScroll.prototype.init = function () {
		this.buildSections()
			.addEvents();

		this.currentPosition = 0;
		//this.goScroll(this.defaults.container, -50);
	};

	fullScroll.prototype.buildSections = function () {
		var sections = this.defaults.sections;
		for (var i = 0; i < sections.length; i++) {
			sections[i].setAttribute('data-index', i);
		}
		return this;
	};

	fullScroll.prototype.addEvents = function () {
		var _self = this;
		
		function mousewheel(event){
			if (event.deltaY > 0) {
 				_self.moveScroll().down();
			} else {
				_self.moveScroll().top();
			}	
		}
		
		if (document.addEventListener) {
			document.addEventListener('mousewheel', mousewheel);
		} else {
			document.attachEvent('mousewheel', mousewheel);
		}
	};

	fullScroll.prototype.moveScroll = function (element, position) {
		var _self = this;
		var publicFunctions = {
			top: top,
			down: down
		};
		
		function down () {
			_self.changePosition(1, 1);
			_self.animateScroll();
		}

		function top () {
			_self.changePosition(1, 0);
			_self.animateScroll();
		}

    	return publicFunctions;
	};	

	fullScroll.prototype.animateScroll = function () {
		var animateTime = this.defaults.animateTime;
        var animateType = this.defaults.animateType;
        var position = this.currentPosition * 100;

	    this.defaults.container.style.webkitTransform = 'translateY(-' + position + '%)';
	    this.defaults.container.style.mozTransform = 'translateY(-' + position + '%)';
	    this.defaults.container.style.msTransform = 'translateY(-' + position + '%)';
	    this.defaults.container.style.transform = 'translateY(-' + position + '%)';
	    this.defaults.container.style.webkitTransition = 'all ' + animateTime + 's ' + animateType;
	    this.defaults.container.style.mozTransition = 'all ' + animateTime + 's ' + animateType;
	    this.defaults.container.style.msTransition = 'all ' + animateTime + 's ' + animateType;
	    this.defaults.container.style.transition = 'all ' + animateTime + 's ' + animateType;
   	};

	fullScroll.prototype.changePosition = function (type, direction, dataIndex) {
		var _self = this;
		if (type == 1) {
			if (direction === 0) {
				if (_self.currentPosition > 0) {
					_self.currentPosition--;
				}
			} else if (direction == 1) {
				if (_self.currentPosition < _self.defaults.maxPosition) {
					_self.currentPosition++;
				}
			}	
		} else if (type == 2) {
			_self.currentPosition = dataIndex;
		}
	};
	/*fullScroll.prototype.getSectionPosition = function (dataIndex) {
		var sections = this.defaults.sections;
		var offsetTop;
		for (var i = 0; i < sections.length; i++) {
			if (sections[i].getAttribute("data-index") == dataIndex) {
				offsetTop = sections[i].offsetTop;
			}
		}

		return offsetTop;
	};*/
	
	window.fullScroll = fullScroll;

})();
