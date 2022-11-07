export default function (path, header) {
  const token=window.location.search.replace("?token=","")
  const baseUrl="http://172.20.2.60:80";
  return fetch(baseUrl+path, {
    method:"GET",
    headers: {
      Authorization:token
    },
  })
    .then((res) => res.json())
}
