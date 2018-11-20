browser.contextMenus.create({
	id: "playwithmpv",
	title: "Play with mpv",
	contexts: ["link", "tab"],
	icons: {
		"32": "icons/mpv-32.png"
	}
});

browser.contextMenus.onClicked.addListener((info, tab) => {
	switch (info.menuItemId) {
	case "playwithmpv":
		if (info.linkUrl) {
			browser.runtime.sendNativeMessage("playwithmpv", info.linkUrl);
		} else {
			browser.runtime.sendNativeMessage("playwithmpv", tab.url);
		}
		break;
	}
});

browser.browserAction.onClicked.addListener((tab) => {
	browser.runtime.sendNativeMessage("playwithmpv", tab.url);
});
