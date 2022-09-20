export const gradesAverage = async () => {
  const res = await fetch(
    "https://6329979bd2c97d8c526b0aca.mockapi.io/api/gradesAverage"
  );
  const data = await res.json();
  return data;
};

export const gradesRule = async () => {
  const res = await fetch(
    "https://6329979bd2c97d8c526b0aca.mockapi.io/api/gradesRule"
  );
  const data = await res.json();
  return data;
};
