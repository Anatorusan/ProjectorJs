'use strict'

import { securedTrigSwitch } from "./trigBox.js";
import { trigCheck } from "./trigBox.js";
import { handlers } from "./handlers.js";
import { lightSwitcher } from "./lightSwitcher.js";
import { textSwitcher } from "./textSwitcher.js";
import { renderDate } from "./dateRenderer.js";
import { startStateRenderer } from "./initialPageRenderer.js";

const startAppFunc = () => {
    console.log ('App started');

    startStateRenderer();
      
    handlers(lightSwitcher.bind(this, trigCheck), textSwitcher.bind(this, trigCheck), securedTrigSwitch, renderDate);
}

document.addEventListener('DOMContentLoaded', startAppFunc);