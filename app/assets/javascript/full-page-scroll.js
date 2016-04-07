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

	/**
	 * Init plugin
	 */
	fullScroll.prototype.init = function () {
		this.buildSections()
			.buildDots()
			.addEvents();

		this.currentPosition = 0;
	};

	/**
	 * Build sections
	 * @return {Object} this(fullScroll)
	 */
	fullScroll.prototype.buildSections = function () {
		var sections = this.defaults.sections;
		for (var i = 0; i < sections.length; i++) {
			sections[i].setAttribute('data-index', i);
		}
		return this;
	};

	/**
	 * Build dots navigation
	 * @return {Object} this (fullScroll)
	 */
	fullScroll.prototype.buildDots = function () {
		var _self = this;
		var sections = this.defaults.sections;
		var ul = document.createElement('ul');
		ul.classList.add('dots');

		var dotsClick = function() {
			var dataIndex = this.getAttribute('data-index');
 			_self.moveScroll(2, null, dataIndex);
		};

		for (var i = 0; i < sections.length; i++) {
			var li = document.createElement('li');
			var a = document.createElement('a');
			
			a.addEventListener('click', dotsClick);
			
			a.setAttribute('href', '#');
			a.setAttribute('data-index', i);
			
			li.appendChild(a);
			ul.appendChild(li);
		}

		document.body.appendChild(ul);

		return this;
	};

	/**
	 * Add Events
	 * @return {Object} this(fullScroll)
	 */
	fullScroll.prototype.addEvents = function () {
		var _self = this;
		
		function mousewheel(event){
			var direction = event.deltaY > 0 ? 1 : 0;
 			_self.moveScroll(1, direction, null);			
		}
		
		if (document.addEventListener) {
			document.addEventListener('mousewheel', mousewheel);
		} else {
			document.attachEvent('mousewheel', mousewheel);
		}
		return this;
	};

	/**
	 * Move scroll
	 * @param  {Object} Element  Root element
	 * @param  {Integer} Direction 1 == 'down' 0 == 'top'
	 * @param  {Integer} Type 1 == 'Top or down' 0 == 'With index'
	 */
	fullScroll.prototype.moveScroll = function (type, direction, index) {
		var _self = this;
		_self.changePosition(type, direction, index);
		_self.animateScroll();
	};	

	/**
	 * Move scroll with animation
	 */
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

   	/**
   	 * Change position of dots, menu and currentPosition variable
   	 * @param  {[type]} type      [description]
   	 * @param  {[type]} direction [description]
   	 * @param  {[type]} dataIndex [description]
   	 * @return {[type]}           [description]
   	 */
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
