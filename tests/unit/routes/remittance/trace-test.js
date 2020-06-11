import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | remittance/trace', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:remittance/trace');
    assert.ok(route);
  });
});
