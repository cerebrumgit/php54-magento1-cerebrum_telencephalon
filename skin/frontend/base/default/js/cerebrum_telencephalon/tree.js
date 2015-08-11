/**
 * Cerebrum_Telencephalon extension
 * 
 * NOTICE OF LICENSE
 * 
 * This source file is subject to the COMMERCIAL License
 * that is bundled with this package in the file LICENSE_TELENCEPHALON.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.cerebrum.com.br/commercial-license
 * 
 * @category   	Cerebrum
 * @package		Cerebrum_Telencephalon
 * @copyright  	Copyright (c) 2013
 * @license		http://www.cerebrum.com.br/commercial-license
 */
function telencephalonTree(treeId){
	var tree = $(treeId);
	if(tree){
		tree.addClassName('tree');
		tree.select('ul').each(function(list){
			$(list).hide();
		})
		tree.select('li').each(function(item){
			var children = $(item).childElements().grep(new Selector('ul'));
			if (children.length > 0) {
				var span = new Element('span').addClassName('collapsed');
				span.observe('click', function(el){
					if ($(this).hasClassName('collapsed')){
						this.addClassName('expanded');
						this.removeClassName('collapsed');
						$(item).childElements().grep(new Selector('ul')).each(function(list){
							$(list).show();
						});
					}
					else{
						this.removeClassName('expanded');
						this.addClassName('collapsed');
						$(item).childElements().grep(new Selector('ul')).each(function(list){
							$(list).hide();
						});
					}
				});
				$(item).insert({top:span});
			}
		});
	};	
};
