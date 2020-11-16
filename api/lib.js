function getRandomIndex(countData) {
  const min = 0;
  return Math.floor(Math.random() * (countData - min) + min);
}

module.exports = {
  getRandomIndex
}