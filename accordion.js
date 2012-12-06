(function($)
{
	var methods = 
	{
		init: function( options )
		{
			return this.each(function(){
				var $this = $(this);
				data = $this.data('myAccordion');

				if ( ! data ) {
					$(this).data('myAccordion', {
						target : $this,
						'problem' : options.problem,
						'editing': false
					});
				}
			});
		},
		
		push: function( name )
		{
			var $this = $(this);
			$this.append(
				'<div id = "funcDiv' + cmdId + '"class="funccall ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" rel="funccall">' +
					'<span class="func-icon ui-icon-minus">&nbsp;&nbsp;&nbsp</span>'+
					'<span class="func-header jstree-draggable" style="width: 95%; display: inline-block" rel="func-header">' + name + '</span>' +
					'<input id = "input' + cmdId + '"/>'  +
					'<div id = "funcDef-' + cmdId + '" style="min-height:200px" class = "jstree-draggable func-body ui-corner-all ui-widget-content" rel="func-body"></div>' +
				'</div>');
			$this.children('div').children('input').hide();
			$this.myAccordion('updateEvents');
			$this.children('div').children('input').unbind('click').bind('click', function(eventObject){
				//eventObject.stopPropagation();
				console.log('accordion');
				//var i = i;
				//$this.children('div').children('input').focus();										
			});
		},
		
		updateEvents: function( )
		{
			var $this = $(this);
			$this.children('div').children('.func-icon').unbind('click').bind('click', function(eventObject)
			{
				$(this).next().next().next().toggle( 'fold', 1000 );
				$(this).toggleClass( 'ui-icon-plus' );
				$(this).toggleClass( 'ui-icon-minus' );
				return false;
			});
			$this.children('div').children('.func-header').unbind('dblclick').bind('dblclick', function(eventObject)
			{
				$(this).next('input').val($(this).html());
				$(this).next('input').toggle();
				$(this).next('input').focus();
				$(this).toggle();
				$this.data('myAccordion').editing = true;
				return false;
			});
			$this.children('div').children('input').unbind('blur').bind('blur', function(eventObject)
			{
				if ( $this.data('myAccordion').editing )
				{
					var oldName = $(this).prev('span').html();
					var newName = $(this).val();
					$(this).prev('.func-header').html($(this).val());
					$(this).prev('.func-header').toggle();
					$(this).toggle();
					$this.data('myAccordion').editing = false;
					$this.data('myAccordion').problem.updateFunctonName( oldName, newName );	
				}
				return false;
			});
		},

		clear: function( )
		{
			$(this).children().detach();
		}
	}

	$.fn.myAccordion = function( method ) 
	{
	    if ( methods[method] )
		{
	    	return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } 
		else if ( typeof method === 'object' || ! method ) 
		{
	      return methods.init.apply( this, arguments );
	    } 
		else 
		{
	      $.error( 'Method ' +  method + ' does not exist on jQuery.myAccordion' );
		}
    }    
  
	
	$.fn.myAccordion.defaults = {
		problem: problems[0]
	};
}
(jQuery));

