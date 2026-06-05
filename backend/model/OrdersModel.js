const mongoose = require("mongoose");
const { OrderSchema } = require("../schemas/OrdersSchema");

const OrdersModel = mongoose.model("order", OrderSchema);

module.exports = OrdersModel;