import { IconButton, InputAdornment, makeStyles } from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';
import React from 'react';
import { TextField } from '@material-ui/core';
import useWindowSize from '../../../../hooks/windowsSizeHook';

const useStyles = makeStyles((theme) => ({
    fill: {
        fill: "#B9B9B9"
    },
    noBorder: {
        border: "none"
    },
    textField: {
        marginTop: "40px",
        width: "100%"
    }
}));

const Search = () => {
    const [width] = useWindowSize();
    const classes = useStyles();

    return (
        <>
            {width < 770 ?
                <TextField
                    variant="outlined"
                    classes={{ root: classes.textField }}
                    onChange={() => console.log("onChange")}
                    placeholder="Search and Find"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => console.log("search")}
                                    edge="end"
                                >
                                    <SearchRounded className={classes.fill}></SearchRounded>
                                </IconButton>
                            </InputAdornment>
                        ),
                        classes: { notchedOutline: classes.noBorder }
                    }}
                /> :
                <TextField
                    variant="outlined"
                    onChange={() => console.log("onChange")}
                    placeholder="Search and Find"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => console.log("search")}
                                    edge="end"
                                >
                                    <SearchRounded className={classes.fill}></SearchRounded>
                                </IconButton>
                            </InputAdornment>
                        ),
                        classes: { notchedOutline: classes.noBorder }
                    }}
                />
            }
        </>
    );
}

export default Search;
