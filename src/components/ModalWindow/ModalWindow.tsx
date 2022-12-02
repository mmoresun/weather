import * as React from 'react';

import clsx from 'clsx';
import { Box, styled, Theme } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { windDirection } from '../smalls/windDirection/windDirection';

const BackdropUnstyled = React.forwardRef<
    HTMLDivElement,
    { open?: boolean; className: string }
>((props, ref) => {
    const { open, className, ...other } = props;
    return (
        <div
            className={clsx({ 'MuiBackdrop-open': open }, className)}
            ref={ref}
            {...other}
        />
    );
});

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme: Theme) => ({
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    minWidth: 180,
    backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
    border: '2px solid currentColor',
    boxShadow: 24,
    padding: '16px 32px 24px 32px',
});

export default function ModalWindow({ ...props }) {

    return (
        <div>
            <Button size='small' variant="contained" onClick={props.handleOpen}>Details</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
            >
                <Fade in={props.open} timeout={300}>
                
                    <Box sx={style}>                    
                        <h2 id="transition-modal-title">Weather at {props.cardData.name}, {props.cardData.country}</h2>
                        <span id="transition-modal-description" style={{ marginTop: '16px' }}>                            
                            <Typography variant="body2">Temperature: <b>{props.cardData.temp}°C</b></Typography>
                            <Typography variant="body2">Feels like: <b>{props.cardData.feels_like}°C</b></Typography>
                            <Typography variant="body2">Min. temperature: <b>{props.cardData.temp_min}°C</b></Typography>
                            <Typography variant="body2">Max. temperature:: <b>{props.cardData.temp_max}°C</b></Typography>
                            <Typography variant="body2">Wind: <b>{windDirection(props.cardData.wind_deg)}</b></Typography>
                            <Typography variant="body2">Wind speed: <b>{props.cardData.wind} m/s</b></Typography>
                            <Typography variant="body2">Sky: <b>{props.cardData.clouds}</b></Typography>
                            <Typography variant="body2">Pressure: <b>{props.cardData.pressure} HPA</b></Typography>
                            <Typography variant="body2">Humidity: <b>{props.cardData.humidity}%</b></Typography>
                            <Typography variant="body2">Visibility: <b>{props.cardData.visibility} m</b></Typography>
                        </span>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}