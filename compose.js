const compose1 = function (...funcs) {
return function (initialArg) {
funcs.reduceRight(function (acc, func) {
return func(acc)
}, initialArg)
}
};
// or with arrow function:

const compose2 = (...funcs) =>
	initialArg => funcs.reduceRight((acc, func) => func(acc), initialArg);