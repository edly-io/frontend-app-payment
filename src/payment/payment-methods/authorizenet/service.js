import { ensureConfig, getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { logError } from '@edx/frontend-platform/logging';

import { generateAndSubmitForm } from '../../data/utils';

ensureConfig(['ECOMMERCE_BASE_URL'], 'PayPal API service');

/**
 * Checkout with Authorizenet
 *
 * 1. Send the basket_id and payment_processor to our /api/v2/checkout/
 * 2. Receive a Authorizenet url and Token in Parameter Form Data
 * 3. Generate an submit an Tokenzing form to Authorizenet Url
 */
export default async function checkout(basket) {
  const { basketId } = basket;
  const formData = {
    basket_id: basketId,
    payment_processor: 'authorizenet',
  };
  if (basket.discountJwt) {
    formData.discount_jwt = basket.discountJwt;
  }

  const { data } = await getAuthenticatedHttpClient()
    .post(`${getConfig().ECOMMERCE_BASE_URL}/api/v2/checkout/`, formData)
    .catch((error) => {
      logError(error, {
        messagePrefix: 'Authorizenet Checkout Error',
        paymentMethod: 'Authorizenet',
        paymentErrorType: 'Checkout',
        basketId,
      });

      throw error;
    });

  generateAndSubmitForm(data.payment_page_url, data.payment_form_data);
}
