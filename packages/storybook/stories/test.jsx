import React from "react";
import { storiesOf } from "@storybook/react";
import usage from "@lernaexample/usage";

storiesOf("Test", module).add("standard", () => <div>{usage}</div>);
