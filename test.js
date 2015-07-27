var expect = require('chai').expect
  , args   = require('./')
  , to     = require('utilise.to')

describe('args', function() {

  it('should call function with specified arg', function() {
    var fn = function(){ result = to.arr(arguments) }
      , result

    args(0)(fn)('a','b','c')
    expect(result).to.be.eql(['a'])

    args(1)(fn)('a','b','c')
    expect(result).to.be.eql(['b'])

    args(2)(fn)('a','b','c')
    expect(result).to.be.eql(['c'])
  })

  it('should call function with specified args', function() {
    var fn = function(){ result = to.arr(arguments) }
      , result

    args([1,2])(fn)('a','b','c')
    expect(result).to.be.eql(['b', 'c'])
  })

  it('should call function with specified context', function() {
    var fn = function(){ result = this }
      , o = {}
      , result

    args([1,2])(fn, o)('a','b','c')
    expect(result).to.be.eql(o)
  })

  it('should return result of function', function() {
    expect(args([1,2])(String)('a','b','c')).to.be.eql('b')
  })

  it('should pass no args', function() {
    expect(args()(String)('a','b','c')).to.be.eql('')
  })

})