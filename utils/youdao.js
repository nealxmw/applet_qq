import CryptoJS from './crypto-js.js'

const appKey = '01e00d0ceb1dad0a' // 应用ID
const appSecret = 'nnkUHsNYCuR7uxpRRXmqF8DQ5v6niY05' // 应用秘钥

export function en2zh (q, from, to) {
  const salt = (new Date).getTime()
  const curtime = Math.round(new Date().getTime() / 1000)
  const signString = appKey + truncate(q) + salt + curtime + appSecret
  const sign = CryptoJS.SHA256(signString).toString(CryptoJS.enc.Hex)
  return {
    q,
    from,
    to,
    appKey,
    salt,
    sign,
    signType: 'v3',
    curtime
  }
}

function truncate (q) {
  var len = q.length;
  if (len <= 20) return q;
  return q.substring(0, 10) + len + q.substring(len - 10, len);
}