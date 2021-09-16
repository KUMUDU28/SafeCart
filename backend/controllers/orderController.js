import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
import Order from '../models/orderModel.js'

// @desc create new order
// @route POST/api/Orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
   const {orderItems, shippingAddress, paymentMethod, itemsPrice, shippingPrice, totalPrice} = req.body

   if(orderItems && orderItems.length === 0){
       res.status(400)
       throw new Error ('NO order items')
       return
   } else {
       const order = new Order({orderItems, user: req.user._id,shippingAddress, paymentMethod, itemsPrice, shippingPrice, totalPrice})

       const createdOrder = await order.save() 

       res.status(201).json(createdOrder)
   }

})

// @desc Get order by ID
// @route GET/api/Orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
   const Order= await Order.findById(req.params.id).populate('user', 'name email')

   if (order){
       res.json(order)   
   }else{
       res.status(400)
       throw new Error('order not Found')
   }
})

export { addOrderItems,getOrderById }