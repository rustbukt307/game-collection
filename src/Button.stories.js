import React from "react"
import { storiesOf } from "@storybook/react"
import Button from "./Button"

storiesOf("button", module)
.add("addToList", () => <Button/>)