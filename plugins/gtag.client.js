import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  ;(function (window, document, dataLayer, id) {
    const _dataLayer = (window[dataLayer] = window[dataLayer] || [])
    _dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
    const _script = document.getElementsByTagName('script')[0]
    const _newScript = document.createElement('script')
    const dl = dataLayer !== 'dataLayer' ? `&l=${dataLayer}` : ``
    _newScript.async = true
    _newScript.src = `https://www.googletagmanager.com/gtm.js?id=${id}${dl}`
    _script.parentNode.insertBefore(_newScript, _script)
  })(window, document, 'dataLayer', 'GTM-NH59KVL')

  const el = document.createElement('noscript')
  el.innerHTML =
    '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NH59KVL" height="0" width="0" style="display:none;visibility:hidden"></iframe>'

  document.body.insertBefore(el, document.body.firstChild)
})
