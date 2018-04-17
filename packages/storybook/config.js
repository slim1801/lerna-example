import { configure } from "@storybook/react";
function loadStories() {
  require("./stories/test.jsx");
}

configure(loadStories, module);
