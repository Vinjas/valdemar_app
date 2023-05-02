import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({ id, label, required, type }) => (
  <TextField id={ id }
      className="input"
      label={ label }
      required={ required }
      variant="standard"
      type={ type }
      fullWidth />
);

export default Input;

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string
};
