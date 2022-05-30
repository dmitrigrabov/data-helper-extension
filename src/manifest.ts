import { ManifestV3 } from 'rollup-plugin-chrome-extension'

const manifest: ManifestV3 = {
  name: 'Data Helper',
  manifest_version: 3,
  background: {
    service_worker: 'background/background.ts'
  },
  content_scripts: [
    {
      js: ['content/index.ts'],
      matches: ['https://*/*', 'http://*/*']
    }
  ],
  permissions: ['storage', 'activeTab', 'scripting'],
  action: {
    default_popup: 'popup.html',
    default_icon: {
      '16': '/images/get_started16.png',
      '32': '/images/get_started32.png',
      '48': '/images/get_started48.png',
      '128': '/images/get_started128.png'
    }
  },
  icons: {
    '16': '/images/get_started16.png',
    '32': '/images/get_started32.png',
    '48': '/images/get_started48.png',
    '128': '/images/get_started128.png'
  }

  // browser_action: {
  //   default_popup: 'pages/popup/index.html'
  // }
}

export default manifest
