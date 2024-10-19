// Utility function to decode the y-values
function decodeValue(base, value) {
  return parseInt(value, base);
}

// Utility function to calculate the Lagrange interpolation for constant term 'c'
function lagrangeInterpolation(points) {
  let c = 0;

  for (let i = 0; i < points.length; i++) {
    let [xi, yi] = points[i];
    let term = yi;

    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        let [xj] = points[j];
        term *= xj / (xj - xi);
      }
    }

    c += term;
  }

  return Math.round(c);
}

module.exports = {
  decodeValue,
  lagrangeInterpolation,
};
