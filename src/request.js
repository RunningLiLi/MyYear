export default function (path, header) {
  const token=window.location.search.replace("?token=","")
  const baseUrl="http://localhost:8080";
  return fetch(baseUrl+path, {
    method:"GET",
    headers: {
      Authorization:token
    },
  })
    .then((res) => res.json())
}
