import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | remittance/info', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:remittance/info');
    assert.ok(route);
  });
});
