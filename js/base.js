$.extend({
	getParameter: function(){
		var href = window.location.href;
		var parameter_str = href.split('?')[1];
		var parameter_obj = {};
		if(!parameter_str){
			return parameter_obj;
		}
		var parameter_arr = parameter_str.split("&");
		parameter_arr.map(function(parameter){
			parameter_obj[parameter.split('=')[0]] = parameter.split('=')[1];
		})
		return parameter_obj;
	}
});