// apiService.js

const BASE_URL = process.env.REACT_APP_API_URL;
let Token = null;
try {
  const storedData = localStorage.getItem("userData");
  console.log(storedData, "stored in localStorage");
  if (storedData) {
    const userData = JSON.parse(storedData);
    Token = userData.access_token;

    console.log(Token, "token in common");
  }
} catch (error) {
  console.log(error);
}
const CommonService = {
  async findAll(apiPath) {
    // Constructing the URL with query parameters
    // const url = "http://localhost:4858/api/admissionRequest?skip=0&limit=100";
    const response = await fetch(`${BASE_URL}/api/${apiPath}`, {
      headers: {
        Authorization: `Bearer ${Token}`, // Include token in headers
      },
    });
    return response.json();
  },

  async findById(apiPath, id) {
    const response = await fetch(`${BASE_URL}/api/${apiPath}/${id}`, {
      headers: {
        Authorization: `Bearer ${Token}`, // Include token in headers
      },
    });
    return response.json();
  },

  async find(apiPath, BodyData) {
    const response = await fetch(`${BASE_URL}/api/${apiPath}`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(BodyData),
    });
    return response.json();
  },

  async findByTokenDetails(apiPath) {
    const response = await fetch(`${BASE_URL}/api/${apiPath}/self`, {
      headers: {
        Authorization: `Bearer ${Token}`, // Include token in headers
      },
    });
    return response.json();
  },

  async create(apiPath, newData) {
    try {
      const response = await fetch(`${BASE_URL}/api/${apiPath}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`, // Make sure Token is defined
        },
        body: JSON.stringify(newData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error("Error during API request:", error);
      throw error; // Rethrow the error to be caught by the caller
    }
  },
  async update(apiPath, id, updatedData) {
    const response = await fetch(`${BASE_URL}/api/${apiPath}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
      body: JSON.stringify(updatedData),
    });
    return response.json();
  },

  async delete(apiPath, id) {
    const response = await fetch(`${BASE_URL}/api/${apiPath}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    });
    return response.json();
  },

  async tokenDetails() {
    const claims = atob(Token.split(".")[1]);
    return JSON.parse(claims);
  },

  authToken() {
    return Token;
  },
};

export default CommonService;
