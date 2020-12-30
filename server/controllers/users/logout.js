
module.exports = {
  post: (req, res) => {
    console.log('===========>>>>>>>>',req.headers);//!요청하는쪽에서 headers에 accessToken을 담아줘야 찍힘
    let refreshToken = req.headers.cookie.split('=')[1];
      // console.log('===========>>>>>>>>',refreshToken);
    if(!refreshToken) {
      res.status(400).json({data: null, message: "not authorized"});
    } else {
      delete req.headers.authorization;//! accessToken 삭제
      res.clearCookie('refreshToken');//! express메소드 쿠키삭제
      res.status(200).json({data: null, message: "successfully log out!"})
    }
  }
}
// {
//   "email": "sdfsafd@sdaf.com",
//   "password": "1234"
// }