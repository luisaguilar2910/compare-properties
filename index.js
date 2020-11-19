var propertiesReader = require('properties-reader');

var myArgs = process.argv.slice(2);

const source = myArgs[0]
const dest = myArgs[1]


const getPropertiesMap = filename => {
  var properties = propertiesReader(filename);

  const map = {}
  
  properties.each((key, value) => {
    map[key] = value
  });

  return map
}

const original = getPropertiesMap(source)
const comp = getPropertiesMap(dest)

Object.keys(original).forEach( key => {
  if(!comp.hasOwnProperty(key)){
    console.log('missing: ' + key)
  } else if (original[key] !== comp[key]) {
    console.log(`diff on key ${key}: original: ${original[key]} - comp: ${comp[key]}`)
  }
})

console.log('done')