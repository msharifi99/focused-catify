document.addEventListener("load", () => {
  chrome.tabs.create({ url: $(this).attr("href") });
});
