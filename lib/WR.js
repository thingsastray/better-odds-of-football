//global weights
var targetsWeight = 0.20;
var ppgWeight = 0.20;
var avgTWeight = 0.15;
var qbQWeight = 0.10;
var piWeight = 0.15;
var sosWeight = 0.20;

//global values
var ppgRank;
var targetRank;
var avgTRank;
var qbQRank;
var piRank;
var sosRank;
var price;
var composite;
var boof;

//superclass of widereceiver
function WideReceiver (name, targets, ppg, avgT, qbQ, pi, sos, price) {
  this.name = name;
  this.targets = targets;
  this.ppg = ppg;
  this.avgT = avgT;
  this.qbQ = qbQ;
  this.pi = pi;
  this.sos = sos;
  this.price = price;
}

//get targets rank
WideReceiver.prototype.findTargetRank = function (targets) {
  if (this.targets > 170) {
    targetRank = 5;
  } else if (this.targets > 140) {
    targetRank = 4;
  } else if (this.targets > 110) {
    targetRank = 3;
  } else if (this.targets > 90) {
    targetRank = 2;
  } else {
    targetRank = 1;
  }
  return targetRank;
};

//get  points per touch rank
WideReceiver.prototype.findPointsPerGameRank = function (ppg) {
  if (this.ppg > 2.5) {
    ppgRank = 5;
  } else if (this.ppg > 2) {
    ppgRank = 4;
  } else if (this.ppg > 1.5) {
    ppgRank = 3;
  } else if (this.ppg > 0.75) {
    ppgRank = 2;
  } else {
    ppgRank = 1;
  }
  return ppgRank;
};

//New WideReceiver named "BeeRock"....need to create a function that creates new receiver from json
var Brock = new WideReceiver('BeeRock',169,2.1);

//Primary module for calculating receiver's BOOF score
var calcReceiverRating = function () {

//get composite score using BOOF algorithm
  function compositeScore () {
    Brock.findTargetRank();
    Brock.findPointsPerGameRank();
    composite = ((targetRank * avgTWeight) + (ppgRank * ppgWeight)) / 2;
    return composite;
  }

//BOOF score calculation
  return {
    boofScore : function () {
      compositeScore();
      boof = composite * 40;
      return boof;
    }
  };
};

// var test = calcReceiverRating();
// console.log(Brock.name);
// console.log(test.boofScore());