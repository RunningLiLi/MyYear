export default function (url, header) {
//   if(!sessionStorage.token){
//     location.href="http://10.20.97.131:8080/myterm/information"
//   }
  return fetch(url, {
    headers: {
      Authorization:sessionStorage.token
    },
  })
    .then((res) => res.json())
    .then(res=>res);
}
