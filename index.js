var to = require('to')
  , is = require('is')

module.exports = function args(indices) {
  return function (fn) {
    return function(){
      var i = is.arr(indices) ? indices : [indices]
        , a = to.arr(arguments)
                .filter(function(d,x){ return is.in(i)(x) })

      return i.length == 1 ? fn(a[0]) : fn.apply(this, a)
    }
  }
}