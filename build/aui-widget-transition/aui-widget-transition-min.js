YUI.add("aui-widget-transition",function(e,t){function r(){var e=this;e._uiSetVisibleHost=e._uiSetVisible}var n=e.Lang;r.ATTRS={animated:{validator:n.isBoolean,value:!1},delay:{setter:"_setDelay",value:{show:0,hide:0}},duration:{validator:n.isNumber,value:.15},opacity:{validator:n.isNumber,value:1},stickDuration:{lazyAdd:!1,setter:"_setStickDuration",validator:n.isNumber}},r.prototype={_hideTimer:null,destructor:function(){var e=this;e._clearHideTimer()},initializer:function(){var t=this;e.on(t._onUiSetVisibleWidgetTranstion,t,"_uiSetVisible")},_clearHideTimer:function(){var e=this;e._hideTimer&&(e._hideTimer.cancel(),e._hideTimer=null)},_maybeHide:function(){var t=this,n=t.get("delay");t._prepareTransition(!1),t._hideTimer=e.later(n.hide,t,t._transition,!1)},_maybeShow:function(){var t=this,n=t.get("delay");t._prepareTransition(!0),e.later(n.show,t,t._transition,!0)},_setDelay:function(e){return n.isNumber(e)?{show:e,hide:e}:e},_setStickDuration:function(e){var t=this;return t.set("delay.hide",e),e},_onUiSetVisibleWidgetTranstion:function(t){var n=this;if(n.get("animated"))return t?n._maybeShow():n._maybeHide(),new e.Do.Prevent},_prepareTransition:function(e){var t=this,n=t.get("boundingBox");t._clearHideTimer(),e&&(t._uiSetVisibleHost(!0),n.setStyle("opacity",0))},_transition:function(e){var t=this,n=t.get("boundingBox");n.transition({duration:t.get("duration"),opacity:e?t.get("opacity"):0},function(){n.toggleClass("in",e),t._uiSetVisibleHost(e)})}},e.WidgetTransition=r},"3.1.0-deprecated.49",{requires:["transition"]});
