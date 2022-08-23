const findClosest = (target, array) => {
  const size = 2;
  return array
    .sort((a, b) => {
      const distanceA = Math.abs(+a[1] - target);
      const distanceB = Math.abs(+b[1] - target);
      if (distanceA === distanceB) {
        return a - b;
      }
      return distanceA - distanceB;
    })
    .slice(0, size)
    .sort((a, b) => a - b);
};

export default findClosest;
