const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

const baggageAllowanceEntitlement = (tier, fare) => {
  let weight = 23;
  let pieces = 1;
  if (fare === "LT") {
    return "Carry-On Only";
  }
  if (fare === "BU") {
    weight = 32;
    pieces = 2;
  }
  if (tier === "Platinum" || tier === "Beyond") {
    pieces = 3;
  }
  if (tier === "Silver" || tier === "Gold") {
    pieces = 2;
  }
  return `${pieces} x ${weight}kg`;
}

Given('guest is a {string} member', (tier) => {
  this.tier = tier;
});

When('guest has a {string} fare', (fare) => {
  this.fare = fare;
  this.actualAnswer = baggageAllowanceEntitlement(this.tier, fare)
});

Then('guest should be told {string}', (expectedAnswer) => {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});