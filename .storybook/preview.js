import { addDecorator } from "@storybook/react"
import { withNextRouter } from "storybook-addon-next-router"

import "bootstrap/dist/css/bootstrap.min.css"
import "../src/App.css"

addDecorator(withNextRouter({}))
