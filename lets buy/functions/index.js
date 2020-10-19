const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HTQJjCwCvokgQhPrBwqVkllgxPSFUvoIm4kmHIoQ5uHbmcM8l0EKbI8cgTrA5GCcUe47TRHuyXyLRCeZsXaweZj00DmlIWGbS');

//API

// - App Config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get('/', (request, response) => {
    response.status(200).send('hello world');
});

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    //OK created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen Command
exports.api = functions.https.onRequest(app);
