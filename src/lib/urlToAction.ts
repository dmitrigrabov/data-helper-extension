import { pathToRegexp } from 'path-to-regexp'

type Action = 'TWITTER_POST'

type UrlActionConfig = Record<string, Record<string, Action>>

const urlActionConfig: UrlActionConfig = {
  'twitter.com': {
    '/:username/status/:statusId': 'TWITTER_POST'
  }
}

type UrlToAction = (str: string | undefined) => Action | undefined

export const urlToAction: UrlToAction = (str) => {
  if (!str) {
    console.log('no str')
    return
  }

  const url = new URL(str)

  if (!url) {
    console.log('no url')
    return
  }

  const pathToAction = urlActionConfig[url.pathname]

  if (!pathToAction) {
    console.log('no pathToAction')
    return
  }

  const matchingConfig = Object.keys(pathToAction).find((config) => {
    const regexp = pathToRegexp(config)
    return regexp.test(url.pathname)
  })

  if (!matchingConfig) {
    console.log('no matchingConfig')
    return
  }

  return urlActionConfig[url.pathname][matchingConfig]
}
