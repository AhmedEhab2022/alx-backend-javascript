export default function handleResponseFromAPI(promise) {
  console.log("Got a response from the API");
  return promise
    .then(() => {
      return { status: 200, body: "success" };
    })
    .catch(() => {
      return new Error();
    });
}