/**
 * Created with WebStorm.
 * User: zqbright
 * Date: 2014/7/28 0028
 * Time: 16:49
 * To change this template use File | Settings | File Templates.
 */
(function() {
    var initializing = false;
    Class = function() { };
    Class.extend = function(prop) {
        var baseClass = null;
        if (this !== Class) {
            baseClass = this;
        }
        function F() {
            if (!initializing) {
                if (baseClass) {
                    this._superprototype = baseClass.prototype;
                }
                this.init.apply(this, arguments);
            }
        }
        if (baseClass) {
            initializing = true;
            F.prototype = new baseClass();
            F.prototype.constructor = F;
            initializing = false;
        }
        F.extend = arguments.callee;

        for (var name in prop) {
            if (prop.hasOwnProperty(name)) {
                if (baseClass &&
                    typeof (prop[name]) === "function" &&
                    typeof (F.prototype[name]) === "function" &&
                    /\b_super\b/.test(prop[name])) {

                    F.prototype[name] = (function(name, fn) {
                        return function() {
                            this._super = baseClass.prototype[name];
                            return fn.apply(this, arguments);
                        };
                    })(name, prop[name]);
                } else {
                    F.prototype[name] = prop[name];
                }
            }
        }
        return F;
    };
})();