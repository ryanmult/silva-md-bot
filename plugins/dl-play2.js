const _0x535d47 = _0x31a0
;(function (_0x1af114, _0xaa2a6d) {
  const _0x131e20 = _0x31a0,
    _0x160c1b = _0x1af114()
  while (!![]) {
    try {
      const _0x4aaa52 =
        -parseInt(_0x131e20(0x1ab)) / 0x1 +
        parseInt(_0x131e20(0x1d2)) / 0x2 +
        -parseInt(_0x131e20(0x1d9)) / 0x3 +
        -parseInt(_0x131e20(0x1aa)) / 0x4 +
        (parseInt(_0x131e20(0x1cf)) / 0x5) * (-parseInt(_0x131e20(0x1be)) / 0x6) +
        (-parseInt(_0x131e20(0x1d7)) / 0x7) * (-parseInt(_0x131e20(0x1d3)) / 0x8) +
        (-parseInt(_0x131e20(0x1ad)) / 0x9) * (-parseInt(_0x131e20(0x1db)) / 0xa)
      if (_0x4aaa52 === _0xaa2a6d) break
      else _0x160c1b['push'](_0x160c1b['shift']())
    } catch (_0x1fad3d) {
      _0x160c1b['push'](_0x160c1b['shift']())
    }
  }
})(_0x2138, 0x4ea6a)
import _0x13a052 from 'node-fetch'
import _0x3a08bf from 'yt-search'
import _0x2aa4cb from 'ytdl-core'
function _0x31a0(_0x5ee4e3, _0x2c0804) {
  const _0x2138c4 = _0x2138()
  return (
    (_0x31a0 = function (_0x31a07a, _0x244a55) {
      _0x31a07a = _0x31a07a - 0x1a0
      let _0x50b676 = _0x2138c4[_0x31a07a]
      return _0x50b676
    }),
    _0x31a0(_0x5ee4e3, _0x2c0804)
  )
}
import _0x1fb66b from 'axios'
let handler = async (_0x4e07eb, { command: _0x65cea5, conn: _0x1c49ef, text: _0x55e557 }) => {
  const _0x49a280 = _0x31a0
  if (!_0x55e557) throw _0x49a280(0x1d0)
  try {
    if (_0x65cea5 === _0x49a280(0x1af)) {
      _0x1c49ef[_0x49a280(0x1a1)](_0x4e07eb['chat'], '*_sending\x20your\x20audio..._*', _0x4e07eb)
      try {
        let _0x92eb01 = await _0x13a052(
            _0x49a280(0x1a8) + lolkeysapi + _0x49a280(0x1d5) + _0x55e557
          ),
          _0x5f16fe = await _0x92eb01[_0x49a280(0x1a5)](),
          _0x5394aa = await _0x1c49ef[_0x49a280(0x1cd)](
            _0x4e07eb[_0x49a280(0x1b6)],
            {
              audio: { url: _0x5f16fe[_0x49a280(0x1b5)][_0x49a280(0x1bf)] },
              fileName: _0x49a280(0x1a6),
              mimetype: _0x49a280(0x1ce),
            },
            { quoted: _0x4e07eb }
          )
        if (!_0x5394aa)
          return await _0x1c49ef[_0x49a280(0x1b3)](
            _0x4e07eb[_0x49a280(0x1b6)],
            _0x5f16fe[_0x49a280(0x1b5)][_0x49a280(0x1bf)],
            _0x49a280(0x1a6),
            null,
            _0x4e07eb,
            ![],
            { mimetype: _0x49a280(0x1ce) }
          )
      } catch {
        let _0x4f6b15 = await ytPlay(_0x55e557),
          _0x4db2eb =
            _0x4f6b15[_0x49a280(0x1c5)][0x0][_0x49a280(0x1bf)] ||
            _0x4f6b15['result2'][0x1][_0x49a280(0x1bf)] ||
            _0x4f6b15[_0x49a280(0x1c5)][0x2][_0x49a280(0x1bf)] ||
            _0x4f6b15[_0x49a280(0x1c5)]
        _0x1c49ef[_0x49a280(0x1cd)](
          _0x4e07eb[_0x49a280(0x1b6)],
          { audio: { url: _0x4db2eb }, fileName: _0x49a280(0x1a6), mimetype: _0x49a280(0x1ce) },
          { quoted: _0x4e07eb }
        )
      }
    }
    if (_0x65cea5 === _0x49a280(0x1d6)) {
      _0x1c49ef[_0x49a280(0x1a1)](
        _0x4e07eb[_0x49a280(0x1b6)],
        '*_⏳Processing\x20your\x20video...⏳_*',
        _0x4e07eb
      )
      try {
        let _0x1c3220 = await ytPlayVid(_0x55e557)
        await _0x1c49ef[_0x49a280(0x1cd)](
          _0x4e07eb[_0x49a280(0x1b6)],
          {
            video: { url: _0x1c3220[_0x49a280(0x1b5)] },
            fileName: 'error.mp4',
            caption: _0x49a280(0x1a4),
            thumbnail: _0x1c3220[_0x49a280(0x1a7)],
            mimetype: _0x49a280(0x1ca),
          },
          { quoted: _0x4e07eb }
        )
      } catch {
        let _0x442e2b = await _0x13a052(
            _0x49a280(0x1a8) + lolkeysapi + _0x49a280(0x1d5) + _0x55e557
          ),
          _0x290c76 = await _0x442e2b['json']()
        await _0x1c49ef[_0x49a280(0x1b3)](
          _0x4e07eb['chat'],
          _0x290c76[_0x49a280(0x1b5)][_0x49a280(0x1c7)],
          _0x49a280(0x1c8),
          _0x49a280(0x1a4),
          _0x4e07eb
        )
      }
    }
  } catch (_0x4c92b9) {
    _0x4e07eb['reply']('*Error\x20occurred,\x20please\x20try\x20again\x20later.*')
  }
}
;(handler['help'] = [_0x535d47(0x1af), _0x535d47(0x1d6)][_0x535d47(0x1a9)](
  _0x216473 => _0x216473 + _0x535d47(0x1b0)
)),
  (handler['tags'] = [_0x535d47(0x1c4)]),
  (handler[_0x535d47(0x1cc)] = [_0x535d47(0x1af), 'playvid'])
export default handler
function bytesToSize(_0x5d0ed1) {
  return new Promise((_0x4a5d71, _0x5d15b2) => {
    const _0x1410fa = _0x31a0,
      _0x532408 = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (_0x5d0ed1 === 0x0) return 'n/a'
    const _0x7a9eec = parseInt(
      Math[_0x1410fa(0x1a3)](Math[_0x1410fa(0x1a2)](_0x5d0ed1) / Math[_0x1410fa(0x1a2)](0x400)),
      0xa
    )
    if (_0x7a9eec === 0x0) _0x4a5d71(_0x5d0ed1 + '\x20' + _0x532408[_0x7a9eec])
    _0x4a5d71(
      (_0x5d0ed1 / 0x400 ** _0x7a9eec)[_0x1410fa(0x1bd)](0x1) + '\x20' + _0x532408[_0x7a9eec]
    )
  })
}
async function ytMp3(_0x904bcc) {
  return new Promise((_0x425196, _0x5a183d) => {
    const _0x1d14e9 = _0x31a0
    _0x2aa4cb['getInfo'](_0x904bcc)
      [_0x1d14e9(0x1a0)](async _0x3176ce => {
        const _0x5e7d34 = _0x1d14e9
        let _0x2de57e = []
        for (let _0xc30f62 = 0x0; _0xc30f62 < _0x3176ce['formats'][_0x5e7d34(0x1dd)]; _0xc30f62++) {
          let _0x55bbd0 = _0x3176ce[_0x5e7d34(0x1c0)][_0xc30f62]
          if (_0x55bbd0[_0x5e7d34(0x1ac)] === _0x5e7d34(0x1d8)) {
            let { contentLength: _0x549698 } = _0x55bbd0,
              _0x165332 = await bytesToSize(_0x549698)
            _0x2de57e[_0xc30f62] = { audio: _0x55bbd0[_0x5e7d34(0x1cb)], size: _0x165332 }
          }
        }
        let _0x4676f1 = _0x2de57e['filter'](
            _0x27a1a5 =>
              _0x27a1a5[_0x5e7d34(0x1bf)] !== undefined && _0x27a1a5['size'] !== undefined
          ),
          _0x2ff9b7 = await _0x1fb66b[_0x5e7d34(0x1ae)](
            'https://tinyurl.com/api-create.php?url=' + _0x4676f1[0x0][_0x5e7d34(0x1bf)]
          ),
          _0x565ab5 = _0x2ff9b7[_0x5e7d34(0x1d1)],
          _0x47309c = _0x3176ce[_0x5e7d34(0x1dc)][_0x5e7d34(0x1c6)],
          _0x2170cc =
            _0x3176ce[_0x5e7d34(0x1c3)][_0x5e7d34(0x1da)][_0x5e7d34(0x1c1)]['thumbnail'][
              _0x5e7d34(0x1c2)
            ][0x0]['url']
        _0x425196({ title: _0x47309c, result: _0x565ab5, result2: _0x4676f1, thumb: _0x2170cc })
      })
      [_0x1d14e9(0x1b2)](_0x5a183d)
  })
}
function _0x2138() {
  const _0x540e33 = [
    'downloader',
    'result2',
    'title',
    'video',
    'error.mp4',
    'container',
    'video/mp4',
    'url',
    'command',
    'sendMessage',
    'audio/mp4',
    '35ZSbUGZ',
    'No\x20text\x20to\x20search,\x20please\x20enter\x20the\x20name\x20of\x20the\x20song\x20you\x20want\x20to\x20play.\x0a\x0a*EXAMPLE:\x0a#play2\x20\x20-\x20Hope\x20xxxtentacion*',
    'data',
    '273574GnjUPa',
    '8BKdupn',
    'size',
    '&query=',
    'playvid',
    '1524292lkQCBp',
    'audio/webm;\x20codecs=\x22opus\x22',
    '1917840YAEpUq',
    'microformat',
    '10317710brWhPh',
    'videoDetails',
    'length',
    'then',
    'reply',
    'log',
    'floor',
    '_𝑇𝛨𝛯\x20𝐒𝐈𝐋𝐕𝐀\x20𝐵𝛩𝑇_',
    'json',
    'error.mp3',
    'thumb',
    'https://api.lolhuman.xyz/api/ytplay2?apikey=',
    'map',
    '1405484gMPNaL',
    '466677VfxugO',
    'mimeType',
    '18CjNDQj',
    'get',
    'play2',
    '\x20<text>',
    'videos',
    'catch',
    'sendFile',
    'getInfo',
    'result',
    'chat',
    'quality',
    'push',
    'thumbnail',
    'mp4',
    'hasVideo',
    'slice',
    'toFixed',
    '547374mhmgDH',
    'audio',
    'formats',
    'playerMicroformatRenderer',
    'thumbnails',
    'player_response',
  ]
  _0x2138 = function () {
    return _0x540e33
  }
  return _0x2138()
}
async function ytMp4(_0x453da5) {
  return new Promise(async (_0x232ab3, _0x34c604) => {
    const _0x5eea84 = _0x31a0
    _0x2aa4cb[_0x5eea84(0x1b4)](_0x453da5)
      [_0x5eea84(0x1a0)](async _0x10b367 => {
        const _0x4347e4 = _0x5eea84
        let _0x376fb6 = []
        for (let _0xb2a5ef = 0x0; _0xb2a5ef < _0x10b367[_0x4347e4(0x1c0)]['length']; _0xb2a5ef++) {
          let _0x1acb02 = _0x10b367['formats'][_0xb2a5ef]
          if (
            _0x1acb02[_0x4347e4(0x1c9)] === _0x4347e4(0x1ba) &&
            _0x1acb02[_0x4347e4(0x1bb)] === !![] &&
            _0x1acb02['hasAudio'] === !![]
          ) {
            let { qualityLabel: _0x65ebba, contentLength: _0x5ad987 } = _0x1acb02,
              _0x1f5669 = await bytesToSize(_0x5ad987)
            _0x376fb6[_0xb2a5ef] = {
              video: _0x1acb02[_0x4347e4(0x1cb)],
              quality: _0x65ebba,
              size: _0x1f5669,
            }
          }
        }
        let _0x5f47d9 = _0x376fb6['filter'](
            _0x68260 =>
              _0x68260[_0x4347e4(0x1c7)] !== undefined &&
              _0x68260[_0x4347e4(0x1d4)] !== undefined &&
              _0x68260[_0x4347e4(0x1b7)] !== undefined
          ),
          _0x187b56 = await _0x1fb66b['get'](
            'https://tinyurl.com/api-create.php?url=' + _0x5f47d9[0x0]['video']
          ),
          _0x51c6d0 = _0x187b56[_0x4347e4(0x1d1)],
          _0x1d2200 = _0x10b367[_0x4347e4(0x1dc)][_0x4347e4(0x1c6)],
          _0x1de4d0 =
            _0x10b367['player_response']['microformat']['playerMicroformatRenderer'][
              _0x4347e4(0x1b9)
            ][_0x4347e4(0x1c2)][0x0][_0x4347e4(0x1cb)]
        _0x232ab3({
          title: _0x1d2200,
          result: _0x51c6d0,
          rersult2: _0x5f47d9[0x0]['video'],
          thumb: _0x1de4d0,
        })
      })
      ['catch'](_0x34c604)
  })
}
async function ytPlay(_0x59f37b) {
  return new Promise((_0x3e3e35, _0x14e4e0) => {
    const _0xd709cc = _0x31a0
    _0x3a08bf(_0x59f37b)
      [_0xd709cc(0x1a0)](async _0x333de7 => {
        const _0x15e4f1 = _0xd709cc
        let _0x258876 = _0x333de7[_0x15e4f1(0x1b1)][_0x15e4f1(0x1bc)](0x0, 0x5),
          _0x1cacf4 = []
        for (let _0x1ef4d7 = 0x0; _0x1ef4d7 < _0x258876[_0x15e4f1(0x1dd)]; _0x1ef4d7++) {
          _0x1cacf4['push'](_0x258876[_0x1ef4d7][_0x15e4f1(0x1cb)])
        }
        let _0x47db9a = _0x1cacf4[0x0],
          _0x24972d = await ytMp3(_0x47db9a)
        _0x3e3e35(_0x24972d)
      })
      [_0xd709cc(0x1b2)](_0x14e4e0)
  })
}
async function ytPlayVid(_0x42b669) {
  return new Promise((_0x24ed78, _0x4c3fcb) => {
    const _0x1d4574 = _0x31a0
    _0x3a08bf(_0x42b669)
      [_0x1d4574(0x1a0)](async _0x1c378c => {
        const _0x233984 = _0x1d4574
        let _0x8f8674 = _0x1c378c[_0x233984(0x1b1)]['slice'](0x0, 0x5),
          _0x15db92 = []
        for (let _0x57fec6 = 0x0; _0x57fec6 < _0x8f8674['length']; _0x57fec6++) {
          _0x15db92[_0x233984(0x1b8)](_0x8f8674[_0x57fec6][_0x233984(0x1cb)])
        }
        let _0x73ca6 = _0x15db92[0x0],
          _0x3dd3e9 = await ytMp4(_0x73ca6)
        _0x24ed78(_0x3dd3e9)
      })
      ['catch'](_0x4c3fcb)
  })
}