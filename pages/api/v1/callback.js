import auth0 from "../../../utils/auth0";

export default async function login(req, res) {
  try {
    await auth0.handleCallback(req, res), { redirectTo: "/" };
  } catch (error) {
    console.error(error);
    x;
    res.status(error.status || 400).end(error.message);
  }
}