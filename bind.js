Function.prototype.attachContext = function(context) {
	let func = this;
	let previousArgs = [...arguments].slice(1);

	return function(){
		let combinedArgs = [].concat(previousArgs, [...arguments]);
		return func.apply(context, combinedArgs);
	};
};