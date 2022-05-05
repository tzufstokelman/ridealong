const GET_USER_ENDPOINT =
  "http://localhost:8085/iob/users/login/2022b.yarden.dahan/test@email.com";

export const fetchData = async () => {
  const data = await fetch(GET_USER_ENDPOINT, {
    method: "GET",
    mode: "cors",
    headers: {
      // "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  }).then((rawData) => rawData.json());
  return data;
};

export const addUser = async (userData) => {
  const d = JSON.stringify({
    email: "12@22.com",
    password: "123123",
    gender: "female",
    dateofbirth: "1111-11-11",
    username: "demo username",
    role: "player",
  });
  console.log(d);
  await fetch("http://localhost:8085/iob/users", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: { d },
  });
};
