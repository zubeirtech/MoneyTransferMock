import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | online-remittances', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:online-remittances');
    assert.ok(route);
  });
});
