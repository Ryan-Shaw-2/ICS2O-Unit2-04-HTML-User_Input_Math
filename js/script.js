// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function calculateClicked () {
  // this function calculates the Area and Perimeter of a rectangle

  // input
  const length = parseInt(document.getElementById("length").value)
  const width = parseInt(document.getElementById("width").value)

  // process
  const area = length * width
  const perimeter = 2 * (length + width)

  // output
  document.getElementById("area").innerHTML = 'The area is: ' + length + ' x ' + width + ' = ' + area + ' or ' + area + ' cm²'
  document.getElementById("perimeter").innerHTML = 'The perimeter is: 2 x (' + length + ' + ' + width + ') = ' + perimeter + ' or ' + perimeter + ' cm'
}
