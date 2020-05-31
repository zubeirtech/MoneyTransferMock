import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('remittance');
  this.route('user');
  this.route('branch');
  this.route('customer');
  this.route('settlement');
  this.route('report');
  this.route('deposit');
  this.route('manual-journey');
  this.route('downloads');
  this.route('online-remittances');
});

export default Router;
