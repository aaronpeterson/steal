/*
 * Steal.js attaches itself to the `global` when we require it.
 * We'll put it on module.exports.
 */
global.steal = {
	types: require("./types")
};

require("../steal");
require("./opts");
require("./file");
module.exports = global.steal;
module.exports.config({
	moduleRoot: require("./root").moduleRoot
});