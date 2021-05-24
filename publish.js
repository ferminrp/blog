// token que nos da botfather
const token = '1829060072:AAHAqOibf9uHLq6-eB4lF1gm8TB8vE7a3G8'

// username del bot que creamos
const bot_username = '@que_toca_tomar_bot'

const master_id = 111111111
// tks https://github.com/kokororin/hitokoto

// Array de opciones
let bebidas = ["🍺 Birrita", "🍷 Vino", "🍹 Campari", "🤘 Fernecito", "🥃 Whiskicito "]

// Esta funcion mezcla el array de bebidas para dejarlo en un orden aleatorio
function shuffle(array, seed) {
  let currentIndex = array.length, temporaryValue, randomIndex
  seed = seed || 1
  let random = function () {
    var x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }
  while (0 !== currentIndex) {
    randomIndex = Math.floor(random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

// Definimos un event listener que escuche a nuevas solcitudes del api
addEventListener('fetch', event => {
  // Cuando se de un event, vamos a llamar a la funcion handleRequest pasandole el parametro request del event
  event.respondWith(handleRequest(event.request))
})

// Esta funcion recibe el request y va a devolver la respuesta
async function handleRequest(request) {
  // Manipula las request de tipo post
  if (request.method == 'POST') {
    // Transformo la request en un json
    let data = await request.json()
    // Chequeo si la request trae un mensaje
    if (data.message !== undefined) {
      // Si la request trae un mensaje se lo pasa a la funcin handlemessage
      handlemessage(data.message)
    } else if (data.inline_query !== undefined) {
      // Si la request no trae un mensaje pero trae inline_query se lo pasa a la funcion handleinline
      handleinline(data.inline_query)
    }
  }
  // Devuelvo status ok 200 a la consulta del endpoint
  return new Response('ok', { status: 200 })
}

// Esta funcion recibe el mensaje del request si lo hay
async function handlemessage(d) {
  let chat_id = d.chat.id                                             // id de la conversacion
  let text = d.text || ''                                             // mensaje recibido
  let otext = text.split(' ')                                         // separo el mensaje en palabras
  // Si el mensaje arranca con una "/"
  if (text[0] == '/') {
    // Elimino la barra y el nombre del bot de las palabras del mensaje
    otext[0] = otext[0].replace('/', '').replace(bot_username, '')
    switch (otext[0]) {
      // Si el comando recibido fue "/start" devuelvo la bienvenida
      case 'start':
        await tg(token, 'sendmessage', {
          chat_id: chat_id,
          text: 'Hola, bienvenido al bot que te dice que tomar. Envia "/?" para que te sugiera una bebida.'
        })
        break
      // Si el comando recibido fue "/?" devuelvo lo que traiga la funcion hitoko
      case '?':
        let h = hitokoto()
        await tg(token, 'sendmessage', {
          chat_id: chat_id,
          text: h // + h.source == '' ? '' : ' -- ' + h.source
        })
        break
    }
  }
}
async function handleinline(d) {
  let inline_query_id = d.id
  let query = d.query
  let offset = d.offset.split('|')
  let res_data = []
  if (offset.length < 2) {
    offset = [inline_query_id, 0]
  }
  offset[1] = parseInt(offset[1])
  let hh = shuffle(bebidas, offset[0]) // 随机排序
  if (query !== '')
    hh = hh.filter(h => {
      return h.hitokoto.indexOf(query) > -1 || h.source.indexOf(query) > -1
    })
  for (let i = 0; i < 30; i++) {
    let h = hh[offset[1] * 30 + i]
    if (h !== undefined)
      res_data.push({
        id: (offset[1] * 30 + i).toString(),
        title: h.hitokoto,
        description: h.source == '' ? '无来源' : '来自 ' + h.source,
        type: 'article',
        input_message_content: {
          message_text: h.hitokoto
        }
      })
  }
  offset[1]++
  if (res_data.length < 30) // 一次会返回 30 条 如果结果小于 30 说明翻完了，那么就不用给新的 offset 了
    offset = []
  await tg(token, 'answerInlineQuery', {
    inline_query_id: inline_query_id,
    cache_time: 180,
    results: JSON.stringify(res_data),
    next_offset: offset.join('|')
  })
}

// esta funcion devuelve un item aleatoreo del array de ebidas
function hitokoto() {
  return bebidas[Math.floor(Math.random() * bebidas.length)]
}

// Esta funcion manda un mensaje a traves del bot
async function tg(token, type, data, n = true) {
  try {
    let t = await fetch('https://api.telegram.org/bot' + token + '/' + type, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    let d = await t.json()
    if (!d.ok && n)
      throw d
    else
      return d
  } catch (e) {
    await tg(token, 'sendmessage', {
      chat_id: master_id,
      text: 'Request tg error\n\n' /**+ JSON.stringify(data) + '\n\n' */ + JSON.stringify(e)
    }, false)
    return e
  }
}