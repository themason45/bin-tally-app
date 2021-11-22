import {createContext} from "react";

const PeopleContext = createContext([])

const SliderScaleContext = createContext(0)  // Store the current number of days back

export {PeopleContext, SliderScaleContext}