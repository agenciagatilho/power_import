const id = 'GTM-KK949VC';

// HEAD
(function (w, d, s, l, i) {
  w[l] = w[l] || []; w[l].push({
    'gtm.start':
new Date().getTime(),
    event: 'gtm.js'
  }); const f = d.getElementsByTagName(s)[0]
  const j = d.createElement(s); const dl = l !== 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f)
})(window, document, 'script', 'dataLayer', id)

document.querySelector('body').innerHTML +=
`
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${id}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
`

console.log('GTM.js loaded')
