$(document).ready(function() {
	var timeout, manualMode = false,
	
		$slideshow = $('#slideshow').prependTo('#main'),
	
		$counter = $('<div/>').insertAfter($slideshow),
		
		$controls = $('<div/>').insertAfter($slideshow),
		
		$prevBtn = $('<input/>', {
			type : 'button',
			value : 'previous'
		}).appendTo($controls),
		
		$nextBtn = $('<input/>', {
			type : 'button',
			value : 'next'
		}).appendTo($controls),
		
		$items = $slideshow.find('li').hide(),
		
		total = $items.length, 
		updateCounter = function(num) {
			$counter.text(num + ' of ' + total);
		},
		
		getItem = function($item, trav) {
			var $returnItem = $item[trav]();
			return $returnItem.length ? 
				$returnItem : 
				$items[(trav == 'next') ? 'first' : 'last']();
		},
		
		showItem = function($currentItem, $itemToShow) {
			var $itemToShow = 
				$itemToShow || getItem($currentItem,'next');
			
			$currentItem.fadeOut(500, function() {
				$itemToShow.fadeIn(500, fadeCallback);
			});
		},
		
		fadeCallback = function() {
			if (manualMode) { return; }

			var $this = $(this),
				$next = getItem($this, 'next'),
				num = $this.prevAll().length + 1;
			
			updateCounter(num);
						
			timeout = setTimeout(function() {
				showItem($this, $next);
			}, 500);
		},
		
		handleBtnClick = function(e) {
			clearTimeout(timeout);

			manualMode = true;
			
			var $currentItem = $items.filter(':visible'),
				$itemToShow = getItem($currentItem, e.data.direction);
					
			showItem($currentItem, $itemToShow);
		};
		
	$prevBtn.bind('click', { direction : 'prev' }, handleBtnClick);
	$nextBtn.bind('click', { direction : 'next' }, handleBtnClick);
	
	$items.eq(0).fadeIn(500, fadeCallback);
});
