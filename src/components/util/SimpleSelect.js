import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect(props) {
    const classes = useStyles();
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
        props.setCategoryName(event.target.value)
    };

    return (
        <>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">CATEGORY</InputLabel>
                <Select

                    id="demo-simple-select"
                    name="category"
                    value={category}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='java'>JAVA</MenuItem>
                    <MenuItem value='spring'>SRPING</MenuItem>
                    <MenuItem value='database'>DATABASE</MenuItem>
                </Select>
            </FormControl>

        </>
    );
}
