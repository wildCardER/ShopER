'use strict';

const glob = require("glob");

glob.sync('./gulp/tasks/*.js').forEach(task => require(task));
