import chai from 'chai'
// import dirtyChai from 'dirty-chai'
// import checkChai from 'check-chai'
chai.config.includeStack = true
chai.config.showDiff = true
// chai.use(dirtyChai)
// chai.use(checkChai)
global.chai = chai
global.expect = chai.expect
global.should = chai.should
