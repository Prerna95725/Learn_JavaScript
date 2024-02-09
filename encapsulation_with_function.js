let user =function(){
	let name="abc";
	return{
		setName:function(value){
			name=value;
		},
		getName:function(){
			return name;
		}
	};
}();