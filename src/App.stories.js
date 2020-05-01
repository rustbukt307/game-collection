import React from "react"
import { storiesOf } from "@storybook/react"
import App from "./App"
import {BrowserRouter as Router} from "react-router-dom"

storiesOf("app", module)
.add("appMain", () => <Router><App/></Router>)