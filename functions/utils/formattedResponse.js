exports.formattedResponse = (body, statusCode = 200) => ({
  statusCode,
  body: JSON.stringify(body),
});
