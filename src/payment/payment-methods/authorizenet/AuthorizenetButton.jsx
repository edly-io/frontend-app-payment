import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';

import AuthorizenetLogo from './assets/authorizenet-logo.png';
import messages from './Authorizenet.messages';

const AuthorizenetButton = ({ intl, isProcessing, ...props }) => (
  <button type="button" {...props}>
    { isProcessing ? <span className="button-spinner-icon text-primary mr-2" /> : null }
    <img
      src={AuthorizenetLogo}
      alt={intl.formatMessage(messages['payment.type.authorizenet'])}
    />
  </button>
);

AuthorizenetButton.propTypes = {
  intl: intlShape.isRequired,
  isProcessing: PropTypes.bool,
};

AuthorizenetButton.defaultProps = {
  isProcessing: false,
};

export default injectIntl(AuthorizenetButton);
