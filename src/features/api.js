export const url = "https://backend-server-xfsxk9fo2-ihzhanb.vercel.app/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
