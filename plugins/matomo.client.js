import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  // ;(function (window, document, dataLayer, url) {
  //   const _dataLayer = (window[dataLayer] = window[dataLayer] || [])
  //   _dataLayer.push(['trackPageView'])
  //   _dataLayer.push(['enableLinkTracking'])
  //   /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  //   _dataLayer.push(['setTrackerUrl', `https://${url}/matomo.php`])
  //   _dataLayer.push(['setSiteId', '1'])
  //   const _script = document.getElementsByTagName('script')[0]
  //   const _newScript = document.createElement('script')
  //   _newScript.async = true
  //   _newScript.src = `https://cdn.matomo.cloud/${url}/matomo.js`
  //   _script.parentNode.insertBefore(_newScript, _script)
  // })(window, document, '_paq', 'credsy.matomo.cloud')
})
