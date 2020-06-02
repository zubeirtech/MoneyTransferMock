import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('remittance', function() {
    this.route('new');
    this.route('info', {path: ':id'}, function() {
      this.route('approve');
    });
  });
  this.route('user', function() {
    this.route('new');
    this.route('info', {path: ':id'});
  });
  this.route('branch');
  this.route('customer');
  this.route('settlement');
  this.route('report');
  this.route('deposit');
  this.route('manual-journey');
  this.route('downloads');
  this.route('online-remittances');
  this.route('dashboard');
});

export default Router;
