import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({

    model() {
        return {
            client: {
                admin: true
            }
        }
    }
});
