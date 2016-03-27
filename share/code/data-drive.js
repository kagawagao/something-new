// 普通处理

if (msg.type === 'Hello') {
  console.log('hello')
} else if (msg.type === 'world') {
  console.log('world')
} else if (msg.type === 'wow') {
  console.log('wow')
}
........
else {
  console.log('我不知道你在说什么')
}

// 数据驱动

const msgType = {
  hello: 'hello',
  world: 'world',
  'wow': 'wow',
  .......
}

if (msgType.hasOwnProperty(msg.type)) {
  console.log(msg.type)
} else {
  console.log('我不知道你在说什么')
}
