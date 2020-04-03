const compose1 = function (...funcs) {
return function (initialArg) {
funcs.reduce(function (acc, func) {
return func(acc)
}, initialArg)
}
};
// or with arrow function:

const compose2 = (...funcs) =>
	initialArg => funcs.reduce((acc, func) => func(acc), initialArg);