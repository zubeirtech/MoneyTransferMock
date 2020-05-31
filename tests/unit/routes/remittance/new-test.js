import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | remittance/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:remittance/new');
    assert.ok(route);
  });
});
