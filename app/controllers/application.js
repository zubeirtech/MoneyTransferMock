import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    toastr: service('toast'),

    actions: {
        clear() {
            localStorage.clear();
            this.toastr.success("Demo Storage is cleared", "Done");
            setTimeout(() => {
                document.location.reload();
            }, 500);
        }
    }

});
