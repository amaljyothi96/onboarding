import Welcome from '../Welcome/index';
import Workspace from "../Workspace/index";
import Usage from "../Usage/index";
import Complete from "../Complete/index";
import { Route, Routes } from 'react-router-dom';
import './style.css'
import titleImg from '../../img/eden.jpg'
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from 'react';
import React from 'react';
import { onBoardingContext } from "../../context/index"

const style = {
    width: "25%",
    margin: "40px 0px"
}

function Boarding() {

    const steps = [1, 2, 3, 4];
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <onBoardingContext.Provider
            value={{ setCurrentStep: setCurrentStep, currentStep: currentStep }} >
            <div className='boardingContainer'>
                <img src={titleImg} id='titleIcn'/>
                <Stepper style={style} activeStep={currentStep} alternativeLabel id='stepper'>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel />
                        </Step>
                    ))}
                </Stepper>
                <Routes>
                    <Route exact path="/" element={<Welcome />} />
                    <Route exact path="/workspace" element={<Workspace />} />
                    <Route exact path="/usage" element={<Usage />} />
                    <Route exact path="/complete" element={<Complete />} />
                </Routes>
            </div>
        </onBoardingContext.Provider>
    )
}

export default Boarding;