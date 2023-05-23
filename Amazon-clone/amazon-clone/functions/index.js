const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MtyKgFw6rB7weuMZCRGprZ6gWDCU7UVYb7ksSHbL3aDqfxCh193bTFnnH8XQ2FWHrY16KPMwX8E5XET0Dp4Ow7Z00CTBndS5o");

// - App config
const app = express();

// - Middlewares
app.use(cors({origin:true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({clientSecret: paymentIntent.client_secret,});

    
});

// - Listen command
exports.api = functions.https.onRequest(app);

// (http://127.0.0.1:5001/aug-28c0f/us-central1/api)

//  http://127.0.0.1:4000/functions


