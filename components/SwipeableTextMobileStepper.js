import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import {
    Box,
    MobileStepper,
    Button,} from '@material-ui/core';

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useStyles } from '../utils/styles';
import Image from 'next/image';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper(props) {
  const theme = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.product.assets.length;
  const images = props.product.assets

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleStepChange}>
      {images.map((step, index) => (
  <div key={step.label}>
    {Math.abs(activeStep - index) <= 1 ? (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '600px',
        }}
      >
        <img
          style={{
            width: '500px',
            height: '600px',
            objectFit: 'contain',
          }}
          src={step.url}
          alt={step.id}
        />
      </Box>
    ) : null}
  </div>
))}

      </AutoPlaySwipeableViews>
      <MobileStepper
      style={{color: "white"}}
        steps={maxSteps}
        position="static"
        variant='text'
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            style={{color: "white"}}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button 
          size="small" 
          onClick={handleBack} 
          disabled={activeStep === 0}
          style={{color: "white"}}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
