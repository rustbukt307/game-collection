import React from "react"
import { storiesOf } from "@storybook/react"
import Home from "./Home"
import {BrowserRouter as Router} from "react-router-dom"

storiesOf("home", module)
.add("homeComp", () => <Router><Home/></Router>)