function solution(dots) {
  const slope = (a, b) => {
    const [x1, y1] = a;
    const [x2, y2] = b;

    return (x2 - x1 === 0)
      ? Infinity
      : (y2 - y1) / (x2 - x1);
  };

  const [A, B, C, D] = dots;

  if (slope(A, B) === slope(C, D)) return 1;
  if (slope(A, C) === slope(B, D)) return 1;
  if (slope(A, D) === slope(B, C)) return 1;

  return 0;
}