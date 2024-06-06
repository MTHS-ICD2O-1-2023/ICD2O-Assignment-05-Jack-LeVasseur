// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  // Input
  let numberRepeat = parseInt(document.getElementById("number-repeat").value)

  // Process
  let numerator = 4
  let denominator = 1
  let counter = 0
  let result = 4

  while (counter < numberRepeat - 1) {
    denominator += 2
    numerator = numerator * -1  // Alternate sign of numerator
    result = result + (numerator / denominator)
    counter += 1
  }

  // Output
  document.getElementById("answer").innerHTML = "The number is ≈ " + result.toFixed(4)
}
