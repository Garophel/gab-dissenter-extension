var e={name:"Google Chrome",slug:"chrome",scriptVariableMap:{BROWSER:"chrome",MESSENGER:"extension"},manifestMap:{"background.persistent":!1,incognito:"not_allowed",offline_enabled:!1,version_name:"0.1.1",version:"0.1.1"},version:"0.1.1"},n="chrome",r="firefox",t="edge",o="safari",a="https://dissenter.com/discussion/begin-extension?url=",i=function(e){return!u(e)&&!c(e)&&(null!==e&&"object"==typeof e)},s=function(e){return"string"==typeof e||e instanceof String},c=function(e){return!s(e)&&!u(e)&&null!=e&&null!=e&&(e&&"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e))},u=function(e){return Array.isArray(e)};console.log("manager is running");var l={panelTabCurrent:null,suspectTabCurrent:null};chrome.runtime.onMessage.addListener(function(e,n,r){e.parentPanel&&(l.panelTabCurrent=e.parentPanel,r("recieved",l.panelTabCurrent)),e.parentSuspect&&(l.suspectTabCurrent=e.parentSuspect,r("recieved",l.suspectTabCurrent))}),chrome.browserAction.onClicked.addListener(function(){chrome.tabs.create({url:"index.html"})});