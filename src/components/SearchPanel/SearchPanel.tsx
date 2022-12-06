
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
// import { SearchPanelProps } from "../../types/types";

const SearchPanel: React.FC<any> = ({ getCity }) => {

    return (
        <Box
            component="form"
            onSubmit={getCity}
            
        >
            <TextField
                size='small'
                type="text"
                name='city'
                placeholder='Enter city'
            // onChange={(e) => setMyCity(e.target.value)}
            />
            <Button

                type="submit"
            >
                Get weather
            </Button>
        </Box>
    );
}

export default SearchPanel;

