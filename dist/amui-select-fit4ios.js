/**
* 注意：此方法必须引入jQuery！
*
* 解决AmazeUI在IOS下，JS动态给select赋值时出现多选的情况
* 使用方法：
* $q(selector).val(); //selector: jQuery查询条件，例：$("mySelect").val("1");
*/

/**
* Attention: This function is based on jQuery
*
*   To fix the bug that when using JavaScript to set value for <select data-am-selected> of AmazeUI, 
* it will display as multiple select.
* How to use?
* $q(selector).val(); //selector: jQuery selector, eg: $("#mySelect").val("1");
*/
(function (w) {
	var Select = function(selector) {
		this.selector = selector;
		return new Select.prototype.init(selector);
	}
	Select.prototype = {
		constructor : Select,
		init: function(selector) {
			this.$select = $(selector);
		},
		val: function(val) {
			var $select = this.$select;
			$.each($select.siblings().find(".am-selected-list li"), function(i, option) {
				$(option).removeClass("am-checked");
				if(""+$(option).data("value") === ""+val) {
					$select.val(val);
					$(option).addClass("am-checked");
					$select.siblings().find(".am-fl").text($(option).find(".am-selected-text").text());
				}
			});
		}
	}
	Select.prototype.init.prototype = Select.prototype;
	w.$q = Select;
})(window);