function distanceFromHqInBlocks(streetBlock) {
  return streetBlock > 42 ? streetBlock - 42 : 42 - streetBlock;
}

function distanceFromHqInFeet(streetBlock) {
  const distanceInFeet = distanceFromHqInBlocks(streetBlock) * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet(streetBlockA, streetBlockB) {
  const distance = Math.abs(streetBlockA - streetBlockB);
  return distance * 264;
}

function calculatesFarePrice(streetBlockA, streetBlockB) {
  let feet = distanceTravelledInFeet(streetBlockA, streetBlockB);
  if (feet <= 400) {
    return 0;
  } else if (feet > 400 && feet <= 2000) {
    return (feet - 400) * 0.02;
  } else if (feet > 2000 && feet < 2500) {
    return 25;
  } else {
      return "cannot travel that far";
  }
}
