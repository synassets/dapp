let contarct_data = null
let is_privacy_mode = false
try {
  localStorage.getItem('config')
}catch(e) {
  is_privacy_mode = true
}

if (!is_privacy_mode && localStorage.getItem('config') != null) {
  contarct_data = JSON.parse(localStorage.getItem('config'))
} else {
contarct_data =  require('./mainnet.json')
}
export const CONTARCT_DATA = contarct_data
