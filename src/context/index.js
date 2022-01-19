import React from "react";

export const onBoardingContext = React.createContext({});

export const useOnBoardingContext = () => React.useContext(onBoardingContext);