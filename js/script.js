document.addEventListener('DOMContentLoaded', function() {
    const yrSpan = document.querySelector('.year');
    const currentYr = new Date().getFullYear();
    yrSpan.textContent = currentYr;
    const lastModDate = document.querySelector('.modified-date');
    const lastModTime = document.querySelector('.modified-time');
    const lastMod = new Date(document.lastModified);
    lastModDate.textContent = lastMod.toLocaleDateString();
    lastModTime.textContent = lastMod.toLocaleTimeString();
})