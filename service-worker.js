"use strict";var precacheConfig=[["/adr-site/index.html","8eda00ccc21e487faa1c61016ed19822"],["/adr-site/static/css/main.b316b481.css","a06c28355228f74dd454aebf2f6c1cb9"],["/adr-site/static/js/main.ec1b2687.js","9b6f854f824be11e578d7806b6f40680"],["/adr-site/static/media/Centipede.6b17e77a.png","6b17e77ab749ec6ac78dbf9182b8a361"],["/adr-site/static/media/DarkSunset.9c3d7fff.png","9c3d7fff1e1022222f6c3c3b3133500c"],["/adr-site/static/media/FlyingTrain.1bf54842.png","1bf5484274719763c946f342c3a8ab11"],["/adr-site/static/media/Gaudi1.396f7a41.png","396f7a419131f4713903f9b7ccbc49ad"],["/adr-site/static/media/Gaudi2.e10a8687.png","e10a86872f647408ecec56cff60fc410"],["/adr-site/static/media/GoldenDawn.83d75627.png","83d7562761ffff3300e3b875f09eef5a"],["/adr-site/static/media/Illimani.79a4d4de.png","79a4d4de72f6bac188d79e2d4d70b4ac"],["/adr-site/static/media/LIOVEHARD-RB.d1361c59.png","d1361c59a720f3183370a99ce7208e52"],["/adr-site/static/media/LIOVEHARD-RG.bde2bfc3.png","bde2bfc3a0f28b89edf24df9d87fd623"],["/adr-site/static/media/LROTUSE-BR.5860171e.png","5860171e0793fa0cd2e7eb86151ae9d9"],["/adr-site/static/media/LROTUSE-PY.edad9796.png","edad979627b45e27eeca2ef28d5fd026"],["/adr-site/static/media/MapBrothers.510368ce.png","510368ce9f458c3e47504f3f37d0b77d"],["/adr-site/static/media/NeedleBoat.7df19f54.png","7df19f54c919481c2874ccbb73221660"],["/adr-site/static/media/OneToOne.cbf09795.png","cbf09795718ec3542489aac2f7102bcf"],["/adr-site/static/media/Oportuna.c4ade4d2.png","c4ade4d298c31f05c209de072eb1c5a5"],["/adr-site/static/media/Opportuna.67949879.png","6794987979dc43ac9c633724b8be6c07"],["/adr-site/static/media/PortfolioSite.f3157de7.png","f3157de7eaecae93cc37830d66f53f88"],["/adr-site/static/media/Profile.8ee11237.JPG","8ee112377f695d57ca7677ad998e89dc"],["/adr-site/static/media/Quicknotes.3557012c.png","3557012c78d8e338d110110826a6d6b0"],["/adr-site/static/media/RHfIT.d9ab4a3c.png","d9ab4a3cb3b57d07357af71566e39524"],["/adr-site/static/media/RealTimeSense.9dd78f08.png","9dd78f08d50629cb3cd42c9dc959803c"],["/adr-site/static/media/RoseArt.5ca9e51c.png","5ca9e51c6c93e00b593aa1a4678cd4bb"],["/adr-site/static/media/SigmaNu.d65f870c.png","d65f870c7c56662756b19eef9f5836b7"],["/adr-site/static/media/Sunset.fcd4829e.png","fcd4829eec35d02f02a391ce97bd84f8"],["/adr-site/static/media/TheKillersBW.d6ed9623.png","d6ed9623c90990afed6f8c8da2f09ef2"],["/adr-site/static/media/TheKillersTextures.7cf6bfe7.png","7cf6bfe78f26d3f006981e72c8e1b04d"],["/adr-site/static/media/TokyoBuildings.6cabf5b4.png","6cabf5b4d51403cd9b7a3850b3bf8e92"],["/adr-site/static/media/TriangleB.4b9bf361.png","4b9bf361a347f3738561d8d5fb7827aa"],["/adr-site/static/media/UmedaSky.5c732c74.png","5c732c746fd833813f38ac54633b7393"],["/adr-site/static/media/WavesW.a0bc5eed.png","a0bc5eed5ac27b17e213fb2b8390f7f0"],["/adr-site/static/media/WipallaMountains.51f22248.png","51f22248832ab83273cd0ff062a943f4"],["/adr-site/static/media/cwc.346e45cc.png","346e45cc0a90551aee498dbab9f04a36"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/adr-site/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});