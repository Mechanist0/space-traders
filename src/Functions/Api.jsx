const url = "https://api.spacetraders.io/v2";

export const request = async ({ endpoint, accessToken, method, body }) => {
  let options = { headers: {} };
  options.headers["Content-Type"] = "application/json";
  if (accessToken) options.headers.Authorization = `Bearer ${accessToken}`;
  if (method) options.method = method;
  if (body) options.body = JSON.stringify(body);

  return await fetch(url + endpoint, options);
};
