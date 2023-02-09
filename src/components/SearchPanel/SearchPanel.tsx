
import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
// import { SearchPanelProps } from "../../types/types";

const SearchPanel: React.FC<any> = ({ setCity, inputRef }) => {

    return (
        <div style={{ marginBottom: '30px' }}>
            <Box
                component="form"
                onSubmit={setCity}
                name='searchpanel'
            >
                <TextField
                    size='small'
                    type="text"
                    name='city'
                    placeholder='Enter city'
                    inputRef={inputRef}
                />
                <Button
                    type="submit"
                >
                    Get weather
                </Button>
            </Box>
        </div>
    );
}

export default SearchPanel;

