const express = require("express");
const Order = require('../models/order');
const Cart = require('../models/cart');
const Auth = require("../middleware/auth");
const Flutterwave = require("flutterwave-node-v3");

const router = new express.Router();
const flw = new Flutterwave(process.env.FLW_PUB, process.env.FLW_SECRET);

// get orders
router.get('/orders', Auth, async (req, res) => {
    const owner = req.user._id;
    try {
        const order = await Order.find({ owner: owner }).sort({
            date: -1
        });
        res.status(200).send(order);
    } catch (err) {
        res.status(500).send(err);
    }
});

// cheecking out items
router.post('/order/checkout', Auth, async(req, res) => {
    try {
        const owner = req.user._id;
        let payload = req.body;

        // get cart and owner
        let cart = await Cart.findOne({ owner });
        let user = req.user;
        if (cart) {
            payload = {...payload, amount: cart.bill, email: user.email};
            const response = await flw.Charge.card(payload);
            if (response.meta.authorization.mode === 'pin') {
                let payloadCpy = payload;
                payloadCpy.authorization = {
                    'mode': 'pin',
                    'fields': ['pin'],
                    'pin': 3310
                };
                const reCallCharge = await flw.Charge.card(payloadCpy);
                const callValidate = await flw.Charge.validate({
                    'otp': '12345',
                    'flw_ref': reCallCharge.data.flw_ref
                });
                if (callValidate.status === 'success') {
                    const order = await Order.create({
                        owner,
                        items: cart.items,
                        bill: cart.bill
                    });
                    // delete cart on transaction sucs=cess validation
                    const data = await Cart.findByIdAndDelete({_id: cart.id});
                    return res.status(201).send({status: 'Payment successful', order});
                } else {
                    res.status(400).send('Payment failed');
                }
            }
            if (response.meta.authorization.mode == 'redirect') {
                let url = response.meta.authorization.redirect;
                open(url);
            }
            res.send('Order Successfuly');
        } else {
            res.status(400).send('No Cart found');
        }
    } catch (err) {
        res.status(400).send(`invalid request ${err.message}`);
    }
});

module.exports = router;