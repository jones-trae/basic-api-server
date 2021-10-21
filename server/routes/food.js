'use strict';
const { db, food } = require('../../models');

async function getFood(request, response) {
  const id = request.params.id;
  const foundfood = await food.findById(id);
  response.send(foundFood);
}

function createFood() {


}