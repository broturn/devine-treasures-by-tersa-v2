const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I5IdhL0tof9LDLf2ybGmLhAMV3278iadbPvBO80o5W1JDqAmScSAxz6xKOiBCb8uGi607rozQSHxrTQnfOuwP9X00YDdcMiAg')

//API

//App config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    
    console.log('Payment Request Recieved >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: 'usd',
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// 2:32:00
// firebase emulators:start Code to start backend
// Listen command

exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-42755/us-central1/api