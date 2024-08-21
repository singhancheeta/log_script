function logScript(element,start){
    element.addEventListener('load', () => {
        const end = performance.now();
        const load = end - start;
        console.log(`Script ${element.src} loaded in ${load.toFixed(2)} ms`);
        loadedCount++;
        allLoaded();
    });
}
function allLoaded(){
    if (loadedCount === totalScript) {
        console.log("All scripts are loaded");
    }
}
let loadedCount = 0;
let totalScript = 0;
window.addEventListener('DOMContentLoaded', () => {
    const scripts = document.querySelectorAll('script');
    totalScript = scripts.length - 1; 
    for (let script of scripts) {
        if (script.src && !script.src.includes('log.js')) {
            const start = performance.now();
            script.dataset.start = start;
            logScript(script, start);
        }
    }
});