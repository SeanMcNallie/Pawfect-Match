const getToken = async () => {
  try {
    const response = await fetch("https://api.petfinder.com/v2/oauth2/token/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "client_credentials",
        client_id: process.env.PETFINDER_API,
        client_secret: process.env.PETFINDER_SECRET,
      }),
    });
    if (!response.ok) {
      throw new Error("Could not fetch token from petfinder.");
    }

    const data = await response.json();
    const tokenExpiry = new Date().getTime() + data.expires_in * 1000;

    process.env["petFinderToken"] = JSON.stringify({
      token: data.access_token,
      tokenExpiry: tokenExpiry,
    });

    return data.access_token;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getToken,
};
