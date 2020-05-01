import React from "react"
import { storiesOf } from "@storybook/react"
import Nav from "./Nav"
import {BrowserRouter as Router} from "react-router-dom"

storiesOf("nav", module)
.add("navBar", () => <Router><Nav/></Router>)