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
