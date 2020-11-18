var propertiesReader = require('properties-reader');

const source = './catalina.properties'
const dest = './catalina.1.properties'


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
  }
})

console.log('done')