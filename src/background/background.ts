import { urlToAction } from '../lib/urlToAction'

chrome.tabs.onUpdated.addListener(async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  console.log({ tab })
  const action = urlToAction(tab.url)

  console.log(action)
})

chrome.webRequest.onCompleted.addListener(
  (stuff) => {
    console.log(stuff)
  },
  {
    urls: ['<all_urls>']
  }
)
