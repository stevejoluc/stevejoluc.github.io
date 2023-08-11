// Force external links to open in new tab by default
var links = document.links;

for (const el in links) {
    const link = links[el]
    if (link.hostname != window.location.hostname) {
        link.target = '_blank';
    }
}
