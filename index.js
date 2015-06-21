function removeDuplicate(arr){
  var itemArrObj = {}
  var delimeter = "*#12jk3kjnd&(*&)&$J"
  var duplicateLess = []
  arr.forEach(function(itemArr){
    itemArrObj[itemArr.join(delimeter)] = false
  })
  for(var key in itemArrObj){
    duplicateLess.push(key.split(delimeter))
  }
  return duplicateLess
}

function getPairs(arr){
  var pairs = []
  for(var i = 0; i < arr.length; i++){
    for(var p = 0; p < arr.length; p++){
      var pair = [
        arr[i],
        arr[p],
      ]
      pair.sort()
      // remove same
      if(pair[0] !== pair[1]) pairs.push(pair)
    }
  }
  return pairs
}

function refineFactories(input){
  // spilit the lines
  var inputLines = input.split("\n")
  // get the first line and parse it
  var N = parseInt(inputLines.shift(), 10)
  // get all pairs
  var allPairs = []
  inputLines.forEach(function(item){
    var factories = item.split(",")
    var pairs = removeDuplicate(getPairs(factories))
    pairs.forEach(function(pair){
      allPairs.push(pair)
    })
  })
  // indexes the pairs to count occurances
  var pairIndex = {}
  allPairs.forEach(function(pair){
    var pairString = pair.join(" : ")
    if(!pairIndex[pairString]) pairIndex[pairString] = []
    pairIndex[pairString].push(pair)
  })
  // loops over pair index
  var pairsOverN = []
  for(var key in pairIndex){
    var value = pairIndex[key]
    if(value.length >= N){
      pairsOverN.push(value[0].join(","))
    }
  }
  pairsOverN.sort()
  return pairsOverN
}

module.exports = refineFactories
