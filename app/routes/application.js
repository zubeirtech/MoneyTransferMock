import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        if(localStorage.getItem("notifications")) {
            return {
                notifications: JSON.parse(localStorage.getItem("notifications"))
            }
        }
    }
});
