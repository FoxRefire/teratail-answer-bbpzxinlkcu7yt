let tabId = await chrome.tabs.query({active:true, currentWindow:true}).then(t => t[0].id)
let seconds = Number(document.getElementById("reloadInv").value)
document.getElementById("tabId").innerText = tabId

document.getElementById("start").addEventListener("click", () => {
    chrome.runtime.sendMessage({
        type: "start",
        tabId: tabId,
        seconds: seconds
    })
})

document.getElementById("stop").addEventListener("click", () => {
    chrome.runtime.sendMessage({
        type: "stop",
        tabId: tabId
    })
})

document.getElementById("stopAll").addEventListener("click", () => {
    chrome.runtime.sendMessage({
        type: "stopAll"
    })
})