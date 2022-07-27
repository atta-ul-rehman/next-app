const url = process.env.BASE_URL;
export const getProducts = async () => {
  const response = await fetch(`http://localhost:3000/api/products/get`);
  const json = await response.json();
  return json;
};
