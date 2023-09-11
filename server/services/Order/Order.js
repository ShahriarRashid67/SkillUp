const SSLCommerzPayment = require('sslcommerz-lts');
const store_id = 'skill64cc983b2fa0f';
const store_passwd = 'skill64cc983b2fa0f@ssl';
const is_live = false; //true for live, false for sandbox
module.exports = async (req, res) => {
  const { id, amount } = req.body;
  console.log('Order', req.body);
  const data = {
    total_amount: amount,
    currency: 'BDT',
    tran_id: id, // use unique tran_id for each api call
    success_url: `http://localhost:3001/order/sucess`,
    fail_url: 'http://localhost:5173/',
    cancel_url: 'http://localhost:5173/',
    ipn_url: 'http://localhost:5173/ipn',
    shipping_method: 'Courier',
    product_name: 'Computer.',
    product_category: 'Electronic',
    product_profile: 'general',
    cus_name: 'Customer Name',
    cus_email: 'customer@example.com',
    cus_add1: 'Dhaka',
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: '01711111111',
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1000,
    ship_country: 'Bangladesh',
  };
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((apiResponse) => {
    // Redirect the user to payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    res.send({ url: GatewayPageURL });
    console.log('Redirecting to: ', GatewayPageURL);
  });
};
