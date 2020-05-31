import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | manual-journey', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:manual-journey');
    assert.ok(route);
  });
});
