import OrderBusiness from "./business/orderBusiness.js";
import Order from "./entities/order.js";

const order = new Order({
    customerId: 2,
    amount: 200,
    products: [{ description: 'golzinho 2002' }]
});

const orderBusiness = new OrderBusiness()
console.info('orderCreated',orderBusiness.create(order))