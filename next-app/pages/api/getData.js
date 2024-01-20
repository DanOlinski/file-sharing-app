
export default async function handler(req, res) {
  // Perform your API request logic here
  const data = await fetchDataSomehow();
  res.status(200).json({ data });
}