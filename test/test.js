const test = require('ava')
const data = require('../src')

const allNodes = (obj, key, array) => {
  array = array || []

  if ('object' === typeof obj) {
    for (let k in obj) {
      if (k === key) {
        array.push(obj[k])
      } else {
        allNodes(obj[k], key, array)
      }
    }
  }

  return array
}

test('all rules contain css', t => {
  const cssValues = allNodes(data, 'css').every(item => item.length > 1)

  t.is(cssValues, true)
})

test('all rules contain a description', t => {
  const cssValues = allNodes(data, 'description').every(item => item.length > 1)

  t.is(cssValues, true)
})

test('deprecated rules contain valid timestamp', t => {
  allNodes(data, 'deprecated')
    .forEach(timestamp => t.not(new Date(timestamp), 'Invalid Date'))
})

test('`deprecated` is undefined by default', t => {
  t.is(data.android['4.4'][0].deprecated, undefined)
})

test('`can_inline` is undefined by default', t => {
  t.is(data.android['4.4'][0].can_inline, undefined)
})
