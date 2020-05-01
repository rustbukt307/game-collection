import React from "react"
import { storiesOf } from "@storybook/react"
import List from "./List"
import {BrowserRouter as Router} from "react-router-dom"

storiesOf("list", module)
.add("main", () => <Router><List/></Router>)