if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-datepicker-popover/aui-datepicker-popover.js']) {
   __coverage__['build/aui-datepicker-popover/aui-datepicker-popover.js'] = {"path":"build/aui-datepicker-popover/aui-datepicker-popover.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":53}}},"2":{"name":"DatePickerPopover","line":23,"loc":{"start":{"line":23,"column":0},"end":{"line":23,"column":29}}},"3":{"name":"(anonymous_3)","line":82,"loc":{"start":{"line":82,"column":13},"end":{"line":82,"column":28}}},"4":{"name":"(anonymous_4)","line":96,"loc":{"start":{"line":96,"column":16},"end":{"line":96,"column":27}}},"5":{"name":"(anonymous_5)","line":120,"loc":{"start":{"line":120,"column":10},"end":{"line":120,"column":21}}},"6":{"name":"(anonymous_6)","line":131,"loc":{"start":{"line":131,"column":10},"end":{"line":131,"column":21}}},"7":{"name":"(anonymous_7)","line":142,"loc":{"start":{"line":142,"column":21},"end":{"line":142,"column":37}}},"8":{"name":"(anonymous_8)","line":159,"loc":{"start":{"line":159,"column":27},"end":{"line":159,"column":38}}},"9":{"name":"(anonymous_9)","line":173,"loc":{"start":{"line":173,"column":28},"end":{"line":173,"column":44}}},"10":{"name":"(anonymous_10)","line":190,"loc":{"start":{"line":190,"column":17},"end":{"line":190,"column":31}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":216,"column":81}},"2":{"start":{"line":10,"column":0},"end":{"line":12,"column":36}},"3":{"start":{"line":23,"column":0},"end":{"line":23,"column":31}},"4":{"start":{"line":33,"column":0},"end":{"line":71,"column":2}},"5":{"start":{"line":73,"column":0},"end":{"line":211,"column":9}},"6":{"start":{"line":83,"column":8},"end":{"line":84,"column":44}},"7":{"start":{"line":86,"column":8},"end":{"line":86,"column":40}},"8":{"start":{"line":97,"column":8},"end":{"line":98,"column":39}},"9":{"start":{"line":100,"column":8},"end":{"line":110,"column":9}},"10":{"start":{"line":101,"column":12},"end":{"line":101,"column":61}},"11":{"start":{"line":103,"column":12},"end":{"line":104,"column":75}},"12":{"start":{"line":106,"column":12},"end":{"line":107,"column":63}},"13":{"start":{"line":109,"column":12},"end":{"line":109,"column":39}},"14":{"start":{"line":112,"column":8},"end":{"line":112,"column":23}},"15":{"start":{"line":121,"column":8},"end":{"line":121,"column":28}},"16":{"start":{"line":123,"column":8},"end":{"line":123,"column":37}},"17":{"start":{"line":132,"column":8},"end":{"line":132,"column":28}},"18":{"start":{"line":134,"column":8},"end":{"line":134,"column":37}},"19":{"start":{"line":143,"column":8},"end":{"line":143,"column":28}},"20":{"start":{"line":145,"column":8},"end":{"line":149,"column":9}},"21":{"start":{"line":146,"column":12},"end":{"line":146,"column":36}},"22":{"start":{"line":148,"column":12},"end":{"line":148,"column":28}},"23":{"start":{"line":160,"column":8},"end":{"line":161,"column":54}},"24":{"start":{"line":163,"column":8},"end":{"line":163,"column":64}},"25":{"start":{"line":174,"column":8},"end":{"line":176,"column":54}},"26":{"start":{"line":178,"column":8},"end":{"line":180,"column":9}},"27":{"start":{"line":179,"column":12},"end":{"line":179,"column":28}},"28":{"start":{"line":191,"column":8},"end":{"line":191,"column":28}},"29":{"start":{"line":193,"column":8},"end":{"line":209,"column":16}},"30":{"start":{"line":213,"column":0},"end":{"line":213,"column":40}}},"branchMap":{"1":{"line":100,"type":"if","locations":[{"start":{"line":100,"column":8},"end":{"line":100,"column":8}},{"start":{"line":100,"column":8},"end":{"line":100,"column":8}}]},"2":{"line":145,"type":"if","locations":[{"start":{"line":145,"column":8},"end":{"line":145,"column":8}},{"start":{"line":145,"column":8},"end":{"line":145,"column":8}}]},"3":{"line":178,"type":"if","locations":[{"start":{"line":178,"column":8},"end":{"line":178,"column":8}},{"start":{"line":178,"column":8},"end":{"line":178,"column":8}}]},"4":{"line":178,"type":"binary-expr","locations":[{"start":{"line":178,"column":12},"end":{"line":178,"column":23}},{"start":{"line":178,"column":28},"end":{"line":178,"column":61}},{"start":{"line":178,"column":65},"end":{"line":178,"column":94}}]}},"code":["(function () { YUI.add('aui-datepicker-popover', function (A, NAME) {","","/**"," * The DatePicker Component"," *"," * @module aui-datepicker"," * @submodule aui-datepicker-popover"," */","","var Lang = A.Lang,","","    _DOCUMENT = A.one(A.config.doc);","","/**"," * A base class for `DatePickerPopover`."," *"," * @class A.DatePickerPopover"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","","function DatePickerPopover() {}","","/**"," * Static property used to define the default attribute configuration for the"," * `DatePickerPopover`."," *"," * @property ATTRS"," * @type {Object}"," * @static"," */","DatePickerPopover.ATTRS = {","","    /**","     * Sets the initial visibility.","     *","     * @attribute autoHide","     * @default true","     * @type {Boolean}","     */","    autoHide: {","        validator: Lang.isBoolean,","        value: true","    },","","    /**","     * Stores the configuration of the `Popover` instance.","     *","     * @attribute popover","     * @default {}","     * @writeOnce","     */","    popover: {","        setter: '_setPopover',","        value: {},","        writeOnce: true","    },","","    /**","     * Defines the CSS classname of the `Popover`.","     *","     * @attribute popoverCssClass","     * @default A.getClassName('datepicker-popover')","     * @type {String}","     */","    popoverCssClass: {","        validator: Lang.isString,","        value: A.getClassName('datepicker-popover')","    }","};","","A.mix(DatePickerPopover.prototype, {","    popover: null,","","    /**","     * Sets the `Popover` alignment.","     *","     * @method alignTo","     * @param node","     */","    alignTo: function(node) {","        var instance = this,","            popover = instance.getPopover();","","        popover.set('align.node', node);","    },","","    /**","     * Returns an existent `Popover` instance or creates a new one if it","     * doesn't exists.","     *","     * @method getPopover","     * @return {Popover}","     */","    getPopover: function() {","        var instance = this,","            popover = instance.popover;","","        if (!popover) {","            popover = new A.Popover(instance.get('popover'));","","            popover.get('boundingBox').on(","                'clickoutside', instance._onPopoverClickOutside, instance);","","            popover.get('boundingBox').on(","                'keydown', instance._handleKeyEvent, instance);","","            instance.popover = popover;","        }","","        return popover;","    },","","    /**","     * Hides the `Popover`.","     *","     * @method hide","     */","    hide: function() {","        var instance = this;","","        instance.getPopover().hide();","    },","","    /**","     * Shows the `Popover`.","     *","     * @method show","     */","    show: function() {","        var instance = this;","","        instance.getPopover().show();","    },","","    /**","     * Sets the `popover` value by merging its object with another properties.","     *","     * @method _handleKeyEvent","     */","    _handleKeyEvent: function(event) {","        var instance = this;","","        if (event.isKey('esc')) {","            event.stopPropagation();","","            instance.hide();","        }","    },","","    /**","     * Checks if the active input is focused.","     *","     * @method _isActiveInputFocused","     * @protected","     * @return {Boolean}","     */","    _isActiveInputFocused: function() {","        var instance = this,","            activeInput = instance.get('activeInput');","","        return (activeInput === _DOCUMENT.get('activeElement'));","    },","","    /**","     * Fires when there's a click outside of the `Popover`.","     *","     * @method _onPopoverClickOutside","     * @param event","     * @protected","     */","    _onPopoverClickOutside: function(event) {","        var instance = this,","            target = event.target,","            activeInput = instance.get('activeInput');","","        if (activeInput && (!instance._isActiveInputFocused() && !activeInput.contains(target))) {","            instance.hide();","        }","    },","","    /**","     * TODO. Wanna help? Please send a Pull Request.","     *","     * @method _setPopover","     * @param val","     * @protected","     */","    _setPopover: function(val) {","        var instance = this;","","        return A.merge({","            bodyContent: '',","            cssClass: instance.get('popoverCssClass'),","            constrain: true,","            hideOn: [","                {","                    node: _DOCUMENT,","                    eventName: 'key',","                    keyCode: 'esc'","                }","            ],","            position: 'bottom',","            render: true,","            triggerShowEvent: 'click',","            triggerToggleEvent: null,","            visible: false","        }, val);","    }","}, true);","","A.DatePickerPopover = DatePickerPopover;","","","}, '3.1.0-deprecated.49', {\"requires\": [\"aui-classnamemanager\", \"aui-popover\"]});","","}());"]};
}
var __cov_wT3VWaBADzm5ohDHYWNkCg = __coverage__['build/aui-datepicker-popover/aui-datepicker-popover.js'];
__cov_wT3VWaBADzm5ohDHYWNkCg.s['1']++;YUI.add('aui-datepicker-popover',function(A,NAME){__cov_wT3VWaBADzm5ohDHYWNkCg.f['1']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['2']++;var Lang=A.Lang,_DOCUMENT=A.one(A.config.doc);__cov_wT3VWaBADzm5ohDHYWNkCg.s['3']++;function DatePickerPopover(){__cov_wT3VWaBADzm5ohDHYWNkCg.f['2']++;}__cov_wT3VWaBADzm5ohDHYWNkCg.s['4']++;DatePickerPopover.ATTRS={autoHide:{validator:Lang.isBoolean,value:true},popover:{setter:'_setPopover',value:{},writeOnce:true},popoverCssClass:{validator:Lang.isString,value:A.getClassName('datepicker-popover')}};__cov_wT3VWaBADzm5ohDHYWNkCg.s['5']++;A.mix(DatePickerPopover.prototype,{popover:null,alignTo:function(node){__cov_wT3VWaBADzm5ohDHYWNkCg.f['3']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['6']++;var instance=this,popover=instance.getPopover();__cov_wT3VWaBADzm5ohDHYWNkCg.s['7']++;popover.set('align.node',node);},getPopover:function(){__cov_wT3VWaBADzm5ohDHYWNkCg.f['4']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['8']++;var instance=this,popover=instance.popover;__cov_wT3VWaBADzm5ohDHYWNkCg.s['9']++;if(!popover){__cov_wT3VWaBADzm5ohDHYWNkCg.b['1'][0]++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['10']++;popover=new A.Popover(instance.get('popover'));__cov_wT3VWaBADzm5ohDHYWNkCg.s['11']++;popover.get('boundingBox').on('clickoutside',instance._onPopoverClickOutside,instance);__cov_wT3VWaBADzm5ohDHYWNkCg.s['12']++;popover.get('boundingBox').on('keydown',instance._handleKeyEvent,instance);__cov_wT3VWaBADzm5ohDHYWNkCg.s['13']++;instance.popover=popover;}else{__cov_wT3VWaBADzm5ohDHYWNkCg.b['1'][1]++;}__cov_wT3VWaBADzm5ohDHYWNkCg.s['14']++;return popover;},hide:function(){__cov_wT3VWaBADzm5ohDHYWNkCg.f['5']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['15']++;var instance=this;__cov_wT3VWaBADzm5ohDHYWNkCg.s['16']++;instance.getPopover().hide();},show:function(){__cov_wT3VWaBADzm5ohDHYWNkCg.f['6']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['17']++;var instance=this;__cov_wT3VWaBADzm5ohDHYWNkCg.s['18']++;instance.getPopover().show();},_handleKeyEvent:function(event){__cov_wT3VWaBADzm5ohDHYWNkCg.f['7']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['19']++;var instance=this;__cov_wT3VWaBADzm5ohDHYWNkCg.s['20']++;if(event.isKey('esc')){__cov_wT3VWaBADzm5ohDHYWNkCg.b['2'][0]++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['21']++;event.stopPropagation();__cov_wT3VWaBADzm5ohDHYWNkCg.s['22']++;instance.hide();}else{__cov_wT3VWaBADzm5ohDHYWNkCg.b['2'][1]++;}},_isActiveInputFocused:function(){__cov_wT3VWaBADzm5ohDHYWNkCg.f['8']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['23']++;var instance=this,activeInput=instance.get('activeInput');__cov_wT3VWaBADzm5ohDHYWNkCg.s['24']++;return activeInput===_DOCUMENT.get('activeElement');},_onPopoverClickOutside:function(event){__cov_wT3VWaBADzm5ohDHYWNkCg.f['9']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['25']++;var instance=this,target=event.target,activeInput=instance.get('activeInput');__cov_wT3VWaBADzm5ohDHYWNkCg.s['26']++;if((__cov_wT3VWaBADzm5ohDHYWNkCg.b['4'][0]++,activeInput)&&((__cov_wT3VWaBADzm5ohDHYWNkCg.b['4'][1]++,!instance._isActiveInputFocused())&&(__cov_wT3VWaBADzm5ohDHYWNkCg.b['4'][2]++,!activeInput.contains(target)))){__cov_wT3VWaBADzm5ohDHYWNkCg.b['3'][0]++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['27']++;instance.hide();}else{__cov_wT3VWaBADzm5ohDHYWNkCg.b['3'][1]++;}},_setPopover:function(val){__cov_wT3VWaBADzm5ohDHYWNkCg.f['10']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['28']++;var instance=this;__cov_wT3VWaBADzm5ohDHYWNkCg.s['29']++;return A.merge({bodyContent:'',cssClass:instance.get('popoverCssClass'),constrain:true,hideOn:[{node:_DOCUMENT,eventName:'key',keyCode:'esc'}],position:'bottom',render:true,triggerShowEvent:'click',triggerToggleEvent:null,visible:false},val);}},true);__cov_wT3VWaBADzm5ohDHYWNkCg.s['30']++;A.DatePickerPopover=DatePickerPopover;},'3.1.0-deprecated.49',{'requires':['aui-classnamemanager','aui-popover']});
