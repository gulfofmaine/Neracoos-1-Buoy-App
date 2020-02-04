import { addDecorator } from "@storybook/react"
import StoryRouter from "storybook-react-router"

import "bootstrap/dist/css/bootstrap.min.css"
import "../src/App.css"

addDecorator(StoryRouter())
