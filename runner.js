const Controller = require("./Controller");
//const Model = require("./Model");
const View = require("./View");
const mockModel = require('./mockModel');

//const model = new Model
const model = new mockModel;
const view = new View
const controller = new Controller(model, view)


controller.run()
