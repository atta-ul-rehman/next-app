const url = process.env.NEXT_PUBLIC_BASE_URL;

export const handleSignUp = async ({ name, email, pass }) => {
  let res = await fetch(`${url}/auth2/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      pass,
    }),
  });
  let response = await res.json();
  return response;
};

export const handleLogin = async ({ email, pass }) => {
  let res = await fetch(`${url}/api/auth2/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      pass,
    }),
  });
  let response = await res.json();
  return response;
};

export const handleLogOut = async () => {
  let res = await fetch(`${url}/auth2/login`);
  let response = await res.json();
  return response;
};
