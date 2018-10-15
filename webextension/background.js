browser.contextMenus.create({
	id: "playwithmpv",
	title: "Play with mpv",
	contexts: ["tab"],
	icons: {
		"32": "icons/mpv-32.png"
	}
});

browser.contextMenus.onClicked.addListener((info, tab) => {
	switch (info.menuItemId) {
	case "playwithmpv":
		browser.runtime.sendNativeMessage("playwithmpv", tab.url);
		break;
	}
});

browser.browserAction.onClicked.addListener((tab) => {
	browser.runtime.sendNativeMessage("playwithmpv", tab.url);
});
