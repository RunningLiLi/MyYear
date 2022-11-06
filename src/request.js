export default function (path, header) {
//   if(!sessionStorage.token){
//     location.href="http://10.20.97.131:8080/myterm/information"
//   }
  const baseUrl="http://10.20.97.131:8080";
  return fetch(baseUrl+path, {
    headers: {
      Authorization:"eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjQxNzNlZmIxLTBiNTItNGIxNC04MjIzLTk4YzJjMTIxYmFkMSJ9.Ot-a0Mqi2ejfJa-fk-X3UGP5CgWXV61WZKQFMZ8k3IsByyUzvxutM0A2VgYF_4eD2-yY_tbc63nuK54ndZn1ug"
    },
  })
    .then((res) => res.json())
    .then(res=>res);
}
