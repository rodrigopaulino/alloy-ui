YUI.add("aui-form-builder-field-fieldset-deprecated",function(e,t){var n=e.Lang,r=e.Escape,i=e.getClassName,s=i("form-builder-field","label"),o=i("form","builder","drop","zone"),u=i("form-builder-field"),a=i("form-builder-field","node"),f='<fieldset id="{id}" class="'+[a].join(" ")+'"></fieldset>',l='<legend class="'+s+'"></legend>',c=e.Component.create({NAME:"form-builder-fieldset-field",ATTRS:{acceptChildren:{value:!0,readOnly:!0},dataType:{value:undefined},labelNode:{valueFn:function(){return e.Node.create(l)}},template:{valueFn:function(){return f}}},UI_ATTRS:["acceptChildren","label","showLabel"],CSS_PREFIX:u,EXTENDS:e.FormBuilderField,prototype:{CONTENT_TEMPLATE:f,getHTML:function(){var e=this;return n.sub(e.get("template"),{id:r.html(e.get("id"))})},getPropertyModel:function(){var t=this,n=t.getStrings();return[{attributeName:"type",editor:!1,name:n.type},{attributeName:"label",editor:new e.TextCellEditor,name:n.label},{attributeName:"showLabel",editor:new e.RadioCellEditor({options:{"true":n.yes,"false":n.no}}),formatter:e.bind(t._booleanFormatter,t),name:n.showLabel}]},_uiSetAcceptChildren:function(e){var t=this,n=t.get("contentBox"),r=t.get("dropZoneNode"),i=n.one("."+o);e&&!i?n.append(r):!e&&i?i.remove():e&&i&&t.set("dropZoneNode",i),t.get("templateNode").hide()}}});e.FormBuilderFieldsetField=c,e.FormBuilderField.types.fieldset=e.FormBuilderFieldsetField},"3.0.3-deprecated.77",{requires:["aui-form-builder-field-deprecated"]});
