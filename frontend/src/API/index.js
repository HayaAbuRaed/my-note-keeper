const BASE_URL = process.env.REACT_APP_API_URL || "";

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }

  return response.json();
};

export const apiRequest = async (endpoint, method = 'GET', body = null, headers = {}) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        mode: 'no-cors',
    };
    if (body) {
        options.body = JSON.stringify(body);
    }
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    console.log(response);
    return handleResponse(response);
};

