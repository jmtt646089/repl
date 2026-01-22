// usable in all browsers
await scrib.loadScript('https://unpkg.com/simple-statistics@7.8.8/dist/simple-statistics.js');
sumSimple([1,2,3]);

// usable in Google Chrome
var stats = await import('https://cdn.skypack.dev/simple-statistics');
console.log(stats.sumSimple([1, 2, 3]));
