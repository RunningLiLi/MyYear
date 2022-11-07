export default function (path, header) {
//   if(!sessionStorage.token){
//     location.href="http://10.20.97.131:8080/myterm/information"
//   }
  const token=window.location.search.replace("?token=","")
  // if(!token){
  //   // top.location='https://ids.cqupt.edu.cn/authserver/login?service=http%3A%2F%2F10.20.97.131%3A8080%2Fidslogin'; 
  //   // self.location='https://ids.cqupt.edu.cn/authserver/login?service=http%3A%2F%2F10.20.97.131%3A8080%2Fidslogin'; 
  //   // window.location="https://ids.cqupt.edu.cn/authserver/login?service=http%3A%2F%2F10.20.97.131%3A8080%2Fidslogin";
  //   fetch("/go/authserver/login?service=http%3A%2F%2F10.20.97.131%3A8080%2Fidslogin")
  // }
  const baseUrl="http://localhost:8080";
  return fetch(baseUrl+path, {
    method:"GET",
    headers: {
      Authorization:token
    },
  })
    .then((res) => res.json())
}
