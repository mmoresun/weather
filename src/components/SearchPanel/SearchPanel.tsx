
import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
// import { SearchPanelProps } from "../../types/types";

const SearchPanel: React.FC<any> = ({ getCity, inputRef }) => {    

    return (
        <div style={{ marginBottom: '30px' }}>
            <Box
                component="form"
                onSubmit={getCity}
                name='searchpanel'
            >
                <TextField                    
                    size='small'
                    type="text"
                    name='city'
                    placeholder='Enter city'
                    inputRef={inputRef}
                    
                // onChange={(e) => setMyCity(e.target.value)}
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

