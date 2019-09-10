import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
// -> Proptypes
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
