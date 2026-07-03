exports.handler = async (event) => {
  const { cat } = event.queryStringParameters;
  
  const res = await fetch(
    `https://gnews.io/api/v4/search?q=${encodeURIComponent(cat)}&lang=fr&max=8&apikey=${process.env.GNEWS_API_KEY}`
  );
  const data = await res.json();
  
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data),
  };
};