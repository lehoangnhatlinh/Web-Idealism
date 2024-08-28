const PayOS = require("@payos/node");

const payos = new PayOS(
  "d7f2fe24-2406-4f6a-a9ff-5d1031b33d3e",
  "94eee726-f017-4f04-a12d-edec2b14cc23",
  "be45f2fd640a6b30315fde269f1473a8712b34b30217074bf8d7e02f31e7c690"
);

const paymentData = async ("/create-payment-link", async (req, res) => {
  const order = {
    amount: 2000,
    description: "Bia Huda",
    orderCode: 15,
    returnUrl: `${HOST}/success.html`,
    cancelUrl: `${HOST}/cancel.html`,
  };
  const paymentLink = await payos.createPaymentLink(order);
  res.redirect(303, paymentLink.checkoutUrl);
});