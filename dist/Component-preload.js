//@ui5-bundle sap/ui/demo/walkthrough/Component-preload.js
sap.ui.require.preload({
	"sap/ui/demo/walkthrough/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(o,e){"use strict";return o.extend("sap.ui.demo.walkthrough.controller.App",{onShowHello:function(){e.show("Hello World")}})});
},
	"sap/ui/demo/walkthrough/index.js":function(){
sap.ui.define(["sap/ui/core/mvc/XMLView"],function(e){"use strict";e.create({viewName:"sap.ui.demo.walkthrough.view.App"}).then(function(e){e.placeAt("content")})});
},
	"sap/ui/demo/walkthrough/manifest.json":'{"sap.app":{"id":"sap.ui.demo.walkthrough","type":"application"}}',
	"sap/ui/demo/walkthrough/view/App.view.xml":'<mvc:View\n\tcontrollerName="sap.ui.demo.walkthrough.controller.App"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"><Button\n\t\ttext="Say Hello"\n\t\tpress=".onShowHello"/></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
