import React, {Component} from 'react';
import {TextField} from '@material-ui/core';

export default class TextFieldWithValidation extends Component {
  render() {
    const {
      id,
      className,
      variant,
      required,
      label,
      value,
      error,
      errorMessage,
      type,
      InputLabelProps,
      onChange,
      onBlur
    } = this.props;

    const variantToApply = variant
      ? variant
      : 'standard';

    if (error) {
      return (<TextField
        error
        id={id}
        name={id}
        className={className}
        variant={variantToApply}
        required={required}
        label={label}
        value={value}
        helperText={errorMessage}
        margin="dense"
        type={type}
        InputLabelProps={InputLabelProps}
        onChange={onChange}
        onBlur={onBlur}/>);
    }

    return (<TextField
      id={id}
      name={id}
      className={className}
      variant={variantToApply}
      required={required}
      label={label}
      value={value}
      margin="dense"
      type={type}
      InputLabelProps={InputLabelProps}
      onChange={onChange}
      onBlur={onBlur}/>);
  }
}
