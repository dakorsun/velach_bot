const Route = require('../../../../infrastructure/Route');
const BikecheckHandler = require('./BikecheckHandler');
const DataSaverMiddleware = require('../../../../common/middlewares/MessageDataSaverMiddleware');
const MessageAgeCheckMiddleware = require('../../../../common/middlewares/MessageAgeCheckMiddleware');


class BikecheckRoute extends Route {
  static get middlewareClsList() {
    return [
      DataSaverMiddleware,
      MessageAgeCheckMiddleware,
    ];
  }

  static get HandlerCls() {
    return BikecheckHandler;
  }

  isMatching(message) {
    if (!message.text) {
      return false;
    }

    return (message.text === `/bikecheck@${this.bot.info.username}`)
      || (message.text === '/bikecheck');
  }
}


module.exports = BikecheckRoute;
