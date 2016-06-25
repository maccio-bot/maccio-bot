var haiDettoSpritz = require('haiDettoSpritz')
var expect = require('chai').expect

describe('haiDettoSpritz', () => {
  it('matches "spread"', () => {
    expect(haiDettoSpritz({ text: 'spread' })).to.equal(true)
  })

  it('is not case sensitive', () => {
    expect(haiDettoSpritz({ text: 'sPreAd' })).to.equal(true)
  })

  it('matches also "spred"', () => {
    expect(haiDettoSpritz({ text: 'spred' })).to.equal(true)
  })
})
