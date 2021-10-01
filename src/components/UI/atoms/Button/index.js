import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const ButtonComponent = (props) =>{
    return (
        <Button
        variant="contained"
        color="primary"
        disabled={props.disabled}
        onClick={props.onClick}
        className={props.className}
        size="medium">
            {props.title}
        </Button>
    );
}

ButtonComponent.propTypes ={
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
};

ButtonComponent.defaultProps = {
    disabled:false
};

export default ButtonComponent;