import { IconButton, InputAdornment, makeStyles } from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';
import React from 'react';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    fill:{
        fill:"#B9B9B9"
    },
    noBorder: {
        border: "none"
    }
}));

const Search = () => {
    const classes = useStyles();

    return (
        <TextField
            variant="outlined"
            classes={{ notchedOutline: classes.input }}
            onChange={()=>console.log("onChange")}
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
    );
}

export default Search;
