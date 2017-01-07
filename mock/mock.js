var list = require('./list.json');
var product = require('./product.json');
var product_item = require('./product_item.json');
module.exports = function() {
    return {
        "list": list,
        "product":product,
        "product_item":product_item
    }
}

// restful
