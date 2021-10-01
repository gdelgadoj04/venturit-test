import React from 'react';
import PropTypes  from 'prop-types';
import { TextField } from '@material-ui/core';

const TextFieldComponent = (props) =>{
    return(
        <TextField
        label={props.label}
        variant={props.variant}
        onChange={props.onChange}/>
    );
}

TextFieldComponent.propTypes ={
    label: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    onChange: PropTypes.func
};

TextFieldComponent.defaultProps = {
    label:"default",
    variant:"filled"
};

export default TextFieldComponent;