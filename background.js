let intervals = {}
chrome.runtime.onMessage.addListener(request => {
    request.type == "start" && start(request.tabId, request.seconds)
    request.type == "stop" && stop(request.tabId)
    request.type == "stopAll" && stopAll()
})

function start(tabId, seconds){
    intervals[tabId] = setInterval(() => {
        chrome.tabs.reload(tabId)
        console.log(`Tab ${tabId} reloaded`)
    }, seconds*1000)
}

function stop(tabId){
    clearInterval(intervals[tabId])
    delete intervals[tabId]
}

function stopAll(){
    Object.values(intervals).forEach(inv => clearInterval(inv))
    intervals = {}
}