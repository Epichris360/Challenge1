const { expect, test } = require('@jest/globals');
const { handler } = require('../index');

// copy of a shopify request
const context = { "version": "2.0", "routeKey": "POST /", "rawPath": "/", "rawQueryString": "", "headers": { "accept": "*/*", "accept-encoding": "gzip;q=1.0,deflate;q=0.6,identity;q=0.3", "content-length": "4966", "content-type": "application/json", "host": "g6tp9sztc9.execute-api.us-east-1.amazonaws.com", "user-agent": "Shopify-Captain-Hook", "x-amzn-trace-id": "Root=1-654d08b6-3c5a492e4fc59b226b8c90ca", "x-forwarded-for": "34.75.156.62", "x-forwarded-port": "443", "x-forwarded-proto": "https", "x-shopify-api-version": "2023-10", "x-shopify-hmac-sha256": "InQjGXkrWwQDTo+TJAP7OeXA0LTYpB4YcWYwb9ef3pA=", "x-shopify-order-id": "5236620492969", "x-shopify-shop-domain": "quickstart-897c9052.myshopify.com", "x-shopify-test": "false", "x-shopify-topic": "orders/create", "x-shopify-triggered-at": "2023-11-09T16:28:37.556612022Z", "x-shopify-webhook-id": "ca813a36-7682-41c2-bc03-0692584899ee" }, "requestContext": { "accountId": "004002418345", "apiId": "g6tp9sztc9", "domainName": "g6tp9sztc9.execute-api.us-east-1.amazonaws.com", "domainPrefix": "g6tp9sztc9", "http": { "method": "POST", "path": "/", "protocol": "HTTP/1.1", "sourceIp": "34.75.156.62", "userAgent": "Shopify-Captain-Hook" }, "requestId": "OI5MoikroAMEJSw=", "routeKey": "POST /", "stage": "$default", "time": "09/Nov/2023:16:28:38 +0000", "timeEpoch": 1699547318943 }, "body": "{\"id\":5236620492969,\"admin_graphql_api_id\":\"gid:\\/\\/shopify\\/Order\\/5236620492969\",\"app_id\":1354745,\"browser_ip\":\"24.152.42.239\",\"buyer_accepts_marketing\":false,\"cancel_reason\":null,\"cancelled_at\":null,\"cart_token\":null,\"checkout_id\":25767350403241,\"checkout_token\":\"ee02d9eb31dc602b514097ab4dc1843b\",\"client_details\":{\"accept_language\":null,\"browser_height\":null,\"browser_ip\":\"24.152.42.239\",\"browser_width\":null,\"session_hash\":null,\"user_agent\":\"Mozilla\\/5.0 (X11; Linux x86_64) AppleWebKit\\/537.36 (KHTML, like Gecko) Chrome\\/118.0.0.0 Safari\\/537.36\"},\"closed_at\":null,\"company\":null,\"confirmation_number\":\"8DXP5TJCY\",\"confirmed\":true,\"contact_email\":null,\"created_at\":\"2023-11-09T11:28:36-05:00\",\"currency\":\"PYG\",\"current_subtotal_price\":\"630\",\"current_subtotal_price_set\":{\"shop_money\":{\"amount\":\"630\",\"currency_code\":\"PYG\"},\"presentment_money\":{\"amount\":\"630\",\"currency_code\":\"PYG\"}},\"current_total_additional_fees_set\":null,\"current_total_discounts\":\"0\",\"current_total_discounts_set\":{\"shop_money\":{\"amount\":\"0\",\"currency_code\":\"PYG\"},\"presentment_money\":{\"amount\":\"0\",\"currency_code\":\"PYG\"}},\"current_total_duties_set\":null,\"current_total_price\":\"693\",\"current_total_price_set\":{\"shop_money\":{\"amount\":\"693\",\"currency_code\":\"PYG\"},\"presentment_money\":{\"amount\":\"693\",\"currency_code\":\"PYG\"}},\"current_total_tax\":\"63\",\"current_total_tax_set\":{\"shop_money\":{\"amount\":\"63\",\"currency_code\":\"PYG\"},\"presentment_money\":{\"amount\":\"63\",\"currency_code\":\"PYG\"}},\"customer_locale\":\"en\",\"device_id\":null,\"discount_codes\":[],\"email\":\"\",\"estimated_taxes\":false,\"financial_status\":\"paid\",\"fulfillment_status\":null,\"landing_site\":null,\"landing_site_ref\":null,\"location_id\":69096669353,\"merchant_of_record_app_id\":null,\"name\":\"#1016\",\"note\":null,\"note_attributes\":[],\"number\":16,\"order_number\":1016,\"order_status_url\":\"https:\\/\\/quickstart-897c9052.myshopify.com\\/63592071337\\/orders\\/f0950c48306eb12c83974d5af03a04ee\\/authenticate?key=d72a4490da039786c845c4911bad15cd\",\"original_total_additional_fees_set\":null,\"original_total_duties_set\":null,\"payment_gateway_names\":[\"manual\"],\"phone\":null,\"po_number\":null,\"presentment_currency\":\"PYG\",\"processed_at\":\"2023-11-09T11:28:36-05:00\",\"reference\":\"4b69205a5f3e5ef19bad62f62e1b608f\",\"referring_site\":null,\"source_identifier\":\"4b69205a5f3e5ef19bad62f62e1b608f\",\"source_name\":\"shopify_draft_order\",\"source_url\":null,\"subtotal_price\":\"630\",\"subtotal_price_set\":{\"shop_money\":{\"amount\":\"630\",\"currency_code\":\"PYG\"},\"presentment_money\":{\"amount\":\"630\",\"currency_code\":\"PYG\"}},\"tags\":\"\",\"tax_exempt\":false,\"tax_lines\":[{\"price\":\"63\",\"rate\":0.1,\"title\":\"IVA\",\"price_set\":{\"shop_money\":{\"amount\":\"63\",\"currency_code\":\"PYG\"},\"presentment_money\":{\"amount\":\"63\",\"currency_code\":\"PYG\"}},\"channel_liable\":false}],\"taxes_included\":false,\"test\":false,\"token\":\"f0950c48306eb12c83974d5af03a04ee\",\"total_discounts\":\"0\",\"total_discounts_set\":{\"shop_money\":{\"amount\":\"0\",\"currency_code\":\"PYG\"},\"presentment_money\":{\"amount\":\"0\",\"currency_code\":\"PYG\"}},\"total_line_items_price\":\"630\",\"total_line_items_price_set\":{\"shop_money\":{\"amount\":\"630\",\"currency_code\":\"PYG\"},\"presentment_money\":{\"amount\":\"630\",\"currency_code\":\"PYG\"}},\"total_outstanding\":\"0\",\"total_price\":\"693\",\"total_price_set\":{\"shop_money\":{\"amount\":\"693\",\"currency_code\":\"PYG\"},\"presentment_money\":{\"amount\":\"693\",\"currency_code\":\"PYG\"}},\"total_shipping_price_set\":{\"shop_money\":{\"amount\":\"0\",\"currency_code\":\"PYG\"},\"presentment_money\":{\"amount\":\"0\",\"currency_code\":\"PYG\"}},\"total_tax\":\"63\",\"total_tax_set\":{\"shop_money\":{\"amount\":\"63\",\"currency_code\":\"PYG\"},\"presentment_money\":{\"amount\":\"63\",\"currency_code\":\"PYG\"}},\"total_tip_received\":\"0\",\"total_weight\":0,\"updated_at\":\"2023-11-09T11:28:37-05:00\",\"user_id\":83637928105,\"billing_address\":null,\"customer\":null,\"discount_applications\":[],\"fulfillments\":[],\"line_items\":[{\"id\":12773648826537,\"admin_graphql_api_id\":\"gid:\\/\\/shopify\\/LineItem\\/12773648826537\",\"attributed_staffs\":[],\"fulfillable_quantity\":1,\"fulfillment_service\":\"manual\",\"fulfillment_status\":null,\"gift_card\":false,\"grams\":0,\"name\":\"The Multi-managed Snowboard\",\"price\":\"630\",\"price_set\":{\"shop_money\":{\"amount\":\"630\",\"currency_code\":\"PYG\"},\"presentment_money\":{\"amount\":\"630\",\"currency_code\":\"PYG\"}},\"product_exists\":true,\"product_id\":7832172265641,\"properties\":[],\"quantity\":1,\"requires_shipping\":true,\"sku\":\"sku-managed-1\",\"taxable\":true,\"title\":\"The Multi-managed Snowboard\",\"total_discount\":\"0\",\"total_discount_set\":{\"shop_money\":{\"amount\":\"0\",\"currency_code\":\"PYG\"},\"presentment_money\":{\"amount\":\"0\",\"currency_code\":\"PYG\"}},\"variant_id\":43380264566953,\"variant_inventory_management\":\"shopify\",\"variant_title\":null,\"vendor\":\"Multi-managed Vendor\",\"tax_lines\":[{\"channel_liable\":false,\"price\":\"63\",\"price_set\":{\"shop_money\":{\"amount\":\"63\",\"currency_code\":\"PYG\"},\"presentment_money\":{\"amount\":\"63\",\"currency_code\":\"PYG\"}},\"rate\":0.1,\"title\":\"IVA\"}],\"duties\":[],\"discount_allocations\":[]}],\"payment_terms\":null,\"refunds\":[],\"shipping_address\":null,\"shipping_lines\":[]}", "isBase64Encoded": false }

test('Passing correct data', async () => {
  const response = await handler(context)

  expect(response).toEqual({
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json'
    },
    body: '{"message":"success","success":true,"body":{"id":5236620492969}}'
  })
});


test('Passing empty line_items', async () => {
  const newBody = '{"id":5236620492969,"admin_graphql_api_id":"gid://shopify/Order/5236620492969","app_id":1354745,"browser_ip":"24.152.42.239","buyer_accepts_marketing":false,"cancel_reason":null,"cancelled_at":null,"cart_token":null,"checkout_id":25767350403241,"checkout_token":"ee02d9eb31dc602b514097ab4dc1843b","client_details":{"accept_language":null,"browser_height":null,"browser_ip":"24.152.42.239","browser_width":null,"session_hash":null,"user_agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36"},"closed_at":null,"company":null,"confirmation_number":"8DXP5TJCY","confirmed":true,"contact_email":null,"created_at":"2023-11-09T11:28:36-05:00","currency":"PYG","current_subtotal_price":"630","current_subtotal_price_set":{"shop_money":{"amount":"630","currency_code":"PYG"},"presentment_money":{"amount":"630","currency_code":"PYG"}},"current_total_additional_fees_set":null,"current_total_discounts":"0","current_total_discounts_set":{"shop_money":{"amount":"0","currency_code":"PYG"},"presentment_money":{"amount":"0","currency_code":"PYG"}},"current_total_duties_set":null,"current_total_price":"693","current_total_price_set":{"shop_money":{"amount":"693","currency_code":"PYG"},"presentment_money":{"amount":"693","currency_code":"PYG"}},"current_total_tax":"63","current_total_tax_set":{"shop_money":{"amount":"63","currency_code":"PYG"},"presentment_money":{"amount":"63","currency_code":"PYG"}},"customer_locale":"en","device_id":null,"discount_codes":[],"email":"","estimated_taxes":false,"financial_status":"paid","fulfillment_status":null,"landing_site":null,"landing_site_ref":null,"location_id":69096669353,"merchant_of_record_app_id":null,"name":"#1016","note":null,"note_attributes":[],"number":16,"order_number":1016,"order_status_url":"https://quickstart-897c9052.myshopify.com/63592071337/orders/f0950c48306eb12c83974d5af03a04ee/authenticate?key=d72a4490da039786c845c4911bad15cd","original_total_additional_fees_set":null,"original_total_duties_set":null,"payment_gateway_names":["manual"],"phone":null,"po_number":null,"presentment_currency":"PYG","processed_at":"2023-11-09T11:28:36-05:00","reference":"4b69205a5f3e5ef19bad62f62e1b608f","referring_site":null,"source_identifier":"4b69205a5f3e5ef19bad62f62e1b608f","source_name":"shopify_draft_order","source_url":null,"subtotal_price":"630","subtotal_price_set":{"shop_money":{"amount":"630","currency_code":"PYG"},"presentment_money":{"amount":"630","currency_code":"PYG"}},"tags":"","tax_exempt":false,"tax_lines":[{"price":"63","rate":0.1,"title":"IVA","price_set":{"shop_money":{"amount":"63","currency_code":"PYG"},"presentment_money":{"amount":"63","currency_code":"PYG"}},"channel_liable":false}],"taxes_included":false,"test":false,"token":"f0950c48306eb12c83974d5af03a04ee","total_discounts":"0","total_discounts_set":{"shop_money":{"amount":"0","currency_code":"PYG"},"presentment_money":{"amount":"0","currency_code":"PYG"}},"total_line_items_price":"630","total_line_items_price_set":{"shop_money":{"amount":"630","currency_code":"PYG"},"presentment_money":{"amount":"630","currency_code":"PYG"}},"total_outstanding":"0","total_price":"693","total_price_set":{"shop_money":{"amount":"693","currency_code":"PYG"},"presentment_money":{"amount":"693","currency_code":"PYG"}},"total_shipping_price_set":{"shop_money":{"amount":"0","currency_code":"PYG"},"presentment_money":{"amount":"0","currency_code":"PYG"}},"total_tax":"63","total_tax_set":{"shop_money":{"amount":"63","currency_code":"PYG"},"presentment_money":{"amount":"63","currency_code":"PYG"}},"total_tip_received":"0","total_weight":0,"updated_at":"2023-11-09T11:28:37-05:00","user_id":83637928105,"billing_address":null,"customer":null,"discount_applications":[],"fulfillments":[],"line_items":[],"payment_terms":null,"refunds":[],"shipping_address":null,"shipping_lines":[]}'
  const newContext = { ...context, body: newBody }

  const response = await handler(newContext)

  expect(response).toEqual({
    statusCode: 422,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json'
    },
    body: '{"message":"No line items provided in order 5236620492969","success":false}'
  })
});

test('Passing an empty object as context', async () => {
  const response = await handler({})

  expect(response).toEqual({
    statusCode: 422,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json'
    },
    body: '{"message":"Invalid body provided","success":false}'
  })
});

test('Passing an empty string as body', async () => {
  const response = await handler({ body: '' })

  expect(response).toEqual({
    statusCode: 422,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json'
    },
    body: '{"message":"Invalid body provided","success":false}'
  })
});

test('Passing an empty object as body', async () => {
  const response = await handler({
    body: '{"id":"123123","line_items":[]}'
  })

  expect(response).toEqual({
    statusCode: 422,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json'
    },
    body: '{"message":"No line items provided in order 123123","success":false}'
  })
});
