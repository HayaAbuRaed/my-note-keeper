const BASE_URL = "https://notes-keeper-do4x.onrender.com";

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }

  return response.json();
};

export const apiRequest = async (
  endpoint,
  method = "GET",
  body = null,
  headers = {}
) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
  };

  console.log("URL", BASE_URL);

  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  return handleResponse(response);
};
