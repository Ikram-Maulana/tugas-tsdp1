export const gradesAverage = async () => {
  const res = await fetch("http://localhost:3000/api/gradesAverage");
  const data = await res.json();
  return data;
}