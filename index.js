
/*
 * @license MIT
 */

module.exports = {
   /*persona*/
   personaApi: require('./lib/personaApi'),

   /*qredit*/
   qreditApi: require('./lib/qreditApi'),
   qslpApi: require('./lib/qslpApi'),
   testnetQreditApi: require('./lib/testnetQreditApi'),

   /*ark*/
   arkApi: require('./lib/arkApi'),
   darkApi: require('./lib/darkApi'),
   aslpApi: require('./lib/aslpApi'),
   dswipeApi: require('./lib/dswipeApi'),

   /*blockpool*/
   blockpoolApi: require('./lib/blockpoolApi'),

   /*radians*/
   radiansApi: require('./lib/radiansApi'),


   /*railsbank*/
   railsbankApi: require('./banking/railsbankApi')
}