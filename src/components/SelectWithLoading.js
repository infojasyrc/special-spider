import React, {Component} from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  withStyles
} from '@material-ui/core';

import LoadingWrapper from './Loading/LoadingWrapper';
import {baseStyles} from '../styles/Base';

const styles = theme => ({
  textField: baseStyles(theme).textField,
  wideInput: baseStyles(theme).wideInput
});

class SelectWithLoading extends Component {
  render() {
    const {
      classes,
      selectedValue,
      values,
      selectName,
      selectLabel,
      required,
      error,
      errorMessage,
      onChange,
      onBlur
    } = this.props;

    if (!values) {
      return (
        <LoadingWrapper
          isLoading={true}
          middlePosition={{
          top: '30px',
          left: '190px'
        }}>
          <FormControl className={[classes.textField, classes.wideInput].join(' ')}>
            <InputLabel htmlFor={selectName}>{selectLabel}</InputLabel>
            <Select
              disabled
              value={''}
              inputProps={{
              name: selectName,
              id: selectName
            }}
              onChange={onChange}></Select>
          </FormControl>
        </LoadingWrapper>
      );
    }

    const items = values.map(item => {
      return (
        <MenuItem key={item.name} value={item.id}>{item.name}</MenuItem>
      );
    });

    if (error) {
      return (
        <FormControl className={[classes.textField, classes.wideInput].join(' ')}>
          <InputLabel error={true} required={required} htmlFor={selectName}>{selectLabel}</InputLabel>
          <Select
            required={required}
            value={selectedValue}
            inputProps={{
            name: selectName,
            id: selectName
          }}
            onChange={onChange}
            onBlur={onBlur}>
            {items}
          </Select>
          <FormHelperText error>{errorMessage}</FormHelperText>
        </FormControl>
      );
    }

    return (
      <FormControl className={[classes.textField, classes.wideInput].join(' ')}>
        <InputLabel required={required} htmlFor={selectName}>{selectLabel}</InputLabel>
        <Select
          required={required}
          value={selectedValue}
          inputProps={{
          name: selectName,
          id: selectName
        }}
          onChange={onChange}
          onBlur={onBlur}>
          {items}
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(SelectWithLoading);
