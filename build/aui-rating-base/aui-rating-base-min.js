YUI.add("aui-rating-base",function(e,t){var n=e.Lang,r=n.isBoolean,i=n.isNumber,s=n.isString,o=13,u=e.getClassName,a=u("glyphicon"),f=u("glyphicon","star"),l=u("glyphicon","star","empty"),c=u("rating","label"),h='<a class="{cssClasses}" tabindex="{tabindex}"></a>',p='<span class="'+c+'"></span>',d=e.Component.create({NAME:"rating",ATTRS:{disabled:{value:!1,validator:r},canReset:{value:!0,validator:r},cssClasses:{value:{element:[a,l].join(" "),hover:[a,f].join(" "),off:[a,l].join(" "),on:[a,f].join(" ")}},defaultSelected:{value:0,writeOnce:!0,validator:i},elements:{validator:e.Lang.isNodeList},hiddenInput:{validator:e.Lang.isNode},inputName:{value:"",validator:s},label:{value:"",validator:s},labelNode:{valueFn:function(){return e.Node.create(p)},validator:e.Lang.isNode},selectedIndex:{value:-1,validator:i},showTitle:{value:!0,validator:r},size:{value:5,validator:function(e){return i(e)&&e>0}},title:null,value:null},HTML_PARSER:{elements:function(e){return e.all("a")},label:function(e){var t=e.one("."+c);if(t)return t.html()},labelNode:"."+c},prototype:{BOUNDING_TEMPLATE:"<span></span>",CONTENT_TEMPLATE:"<span></span>",initializer:function(){var e=this;e.inputElementsData={},e.after("labelChange",this._afterSetLabel)},renderUI:function(){var e=this;e._parseInputElements(),e._renderLabel(),e._renderElements()},bindUI:function(){var e=this;e._createEvents(),e.on({click:e._handleClickEvent,keypress:e._handleKeyPressEvent,mouseover:e._handleMouseOverEvent,mouseout:e._handleMouseOutEvent})},syncUI:function(){var e=this;e._syncElements(),e._syncLabelUI()},clearSelection:function(){var e=this,t=e.get("cssClasses");e.get("elements").each(function(e){e.removeClass(t.on),e.removeClass(t.hover),e.addClass(t.element)})},select:function(e){var t=this,n=t.get("selectedIndex"),r=t.get("canReset");r&&n===e&&(e=-1),t.set("selectedIndex",e);var i=t.get("selectedIndex"),s=t._getInputData(i),o="title"in s?s.title:"",u="value"in s?s.value:i;t.fillTo(i),t.set("title",o),t.set("value",u);var a=t.get("hiddenInput");a.setAttribute("title",o),a.setAttribute("value",u)},fillTo:function(e,t){var n=this,r=n.get("cssClasses");n.clearSelection(),e>=0&&n.get("elements").some(function(n,i){return n.addClass(t||r.on),n.removeClass(r.element),i===Math.round(e)})},indexOf:function(e){var t=this;return t.get("elements").indexOf(e)},_canFireCustomEvent:function(e){var t=this,n=e.domEvent.target;return!t.get("disabled")&&n.test("a")},_createElements:function(){var t=this,r=t.get("cssClasses"),i,s=[],o=this.get("size");i=t.get("disabled");for(var u=0;u<o;u++)s.push(n.sub(h,{cssClasses:r.element,tabindex:i?-1:0}));return e.NodeList.create(s.join(""))},_createEvents:function(){var e=this,t=function(t,n){e.publish(t,{defaultFn:n,queuable:!1,emitFacade:!0,bubbles:!0})};t("itemClick",this._defRatingItemClickFn),t("itemSelect",this._defRatingItemSelectFn),t("itemOver",this._defRatingItemOverFn),t("itemOut",this._defRatingItemOutFn)},_defRatingItemClickFn:function(e){var t=this,n=e.domEvent;t.fire("itemSelect",{delegateEvent:e,domEvent:n,ratingItem:n.target})},_defRatingItemSelectFn:function(e){var t=this,n=e.domEvent.target;t.select(t.indexOf(n))},_defRatingItemOutFn:function(){var e=this;e.fillTo(e.get("selectedIndex"))},_defRatingItemOverFn:function(e){var t=this,n=t.get("cssClasses"),r=t.indexOf(e.domEvent.target);t.fillTo(r,n.hover)},_handleKeyPressEvent:function(e){var t=this,n;n=e.domEvent,n.charCode===o&&t._handleClickEvent(e)},_parseInputElements:function(){var t=this,n=t.get("boundingBox"),r=n.all("input"),i=r.size(),s=t.get("inputName"),o=e.Node.create('<input type="hidden" />');if(i>0){s=s||r.item(0).getAttribute("name"),t.set("size",i);var u=n.getElementsByTagName("label");r.each(function(e,n){var r=e.get("id"),i="";if(r){var s=u.filter('[for="'+r+'"]');s.size()&&(i=s.item(0).html())}t.inputElementsData[n]={content:i,value:e.getAttribute("value")||n,title:e.getAttribute("title")}}),u.remove(!0),r.remove(!0)}s&&(o.setAttribute("name",s),n.appendChild(o)),t.set("hiddenInput",o)},_renderLabel:function(){var e=this;e.get("contentBox").setContent(e.get("labelNode"))},_renderElements:function(){var e=this,t=e.get("contentBox"),n=e.get("elements");if(!n||!n.size())n=e._createElements(),e.set("elements",n);n.each(function(t,n){var r=e._getInputData(n),i=r.content,s=r.title||e.get("title")||i;s&&e.get("showTitle")&&t.setAttribute("title",s),!t.attr("href")&&t.get("nodeName").toLowerCase()==="a"&&t.setAttribute("onclick","return false;")}),t.append(n.getDOM())},_syncElements:function(){var e=this,t=e.get("defaultSelected")-1;e.set("selectedIndex",t),e.select()},_syncLabelUI:function(){var e=this,t=e.get("label");e.get("labelNode").html(t)},_getInputData:function(e){var t=this;return t.inputElementsData[e]||{}},_handleClickEvent:function(e){var t=this,n=e.domEvent;t._canFireCustomEvent(e)?t.fire("itemClick",{delegateEvent:e,domEvent:n}):n.preventDefault()},_handleMouseOutEvent:function(e){var t=this;t._canFireCustomEvent(e)&&t.fire("itemOut",{delegateEvent:e,domEvent:e.domEvent})},_handleMouseOverEvent:function(e){var t=this;t._canFireCustomEvent(e)&&t.fire("itemOver",{delegateEvent:e,domEvent:e.domEvent})},_afterSetLabel:function(){this._syncLabelUI()}}});e.Rating=d,e.StarRating=d},"3.0.3-deprecated.22",{requires:["aui-component","aui-node-base","widget-htmlparser","widget-uievents"],skinnable:!0});
