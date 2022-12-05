
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

const SearchPanel = ({ getCity }: { getCity: any }) => {
    return (
        // <div style={{ margin: '20px 0 0 0' }}>
        <Box
            component="form"
            onSubmit={() => getCity}
        >
            <TextField
                size='small'
                type="text"
                name='city'
                placeholder='Enter city'
            />
            <Button

                type="submit"
            >
                Get weather
            </Button>
        </Box>
        // </div >
    );
}

export default SearchPanel;

