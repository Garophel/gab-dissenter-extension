module.exports = manifest = {
    "manifest_version": 2,
    "name": "Dissenter Extension",
    "short_name": "Dissenter",
    "description": "Dissenter is the comment section of the Internet.",
    "homepage_url": "https://dissenter.com",
    "icons": {
        "16": "assets/images/logo/icon-16.png",
        "48": "assets/images/logo/icon-48.png",
        "128": "assets/images/logo/icon-128.png"
    },
    "permissions": [
        "activeTab",
        "tabs",
        "https://*.dissenter.com/*",
    ],
    "sidebar_action": {
      "default_title": "Dissenter Bar",
      "default_panel": "sidebar/sidebar.html",
      "default_icon": "assets/images/logo/icon-128.png"
    },
    "browser_action": {
        "default_icon": "assets/images/logo/icon-128.png",
        "default_popup": "popup/popup.html"
    },
    "commands": {
        "_execute_browser_action": {
            "suggested_key": {
                "default": "Alt+Shift+D",
                "mac": "Alt+Shift+D"
            }
        }
    },
    "background": {
        "scripts": [
            "background/background.js",
            "background/manager.js"
        ]
    },
    "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self' https://*.dissenter.com/*"
};
