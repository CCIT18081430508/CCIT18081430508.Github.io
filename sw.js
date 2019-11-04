/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/09/11/hello-world/index.html","a18a10d3419648b6b20d2323a0411dc9"],["/2019/09/11/helloccit/index.html","c9c385a700c7d4e1e2d3fc15334afc9c"],["/2019/09/11/helloccithello/index.html","9284cfed1e4b7797682a1eff60abffad"],["/2019/10/17/ccit/index.html","a8fbf4ddb0323ad0b32f1238a2c77014"],["/2019/10/21/STM32-1/index.html","69014c15cb5f6896ef2ce94a6885c172"],["/2019/10/24/jpg/1.jpg","77ef2d8b021a81675a7998eab4987cde"],["/2019/10/24/jpg/1.png","41c50cebf663106ea474751daaa45ddf"],["/2019/10/24/jpg/2.jpg","aea8e040851a282fd8eea3268d669397"],["/2019/10/24/jpg/2.png","a1c2382e742954b9d4b3413e65c38172"],["/2019/10/24/jpg/3.jpg","6b80e63d0cdce758f96147e9ec45162a"],["/2019/10/24/jpg/3.png","649ff720940b97b21971bed992b40b7a"],["/2019/10/24/jpg/4.jpg","18d20819585b5281492ccdad7494043c"],["/2019/10/24/jpg/4.png","ba18a2852b6891f26de9146cac6aa31a"],["/2019/10/24/jpg/5.jpg","0a53813f78114613e89d13896f20b7f5"],["/2019/10/24/jpg/5.png","e67dcab55c3ce6a469a21aa988c58ff7"],["/2019/10/24/jpg/6.jpg","505065b33a3a73bf2e02438e813c75bc"],["/2019/10/24/jpg/6.png","08d714ca6c3f725ee11fc994c34613bd"],["/2019/10/24/jpg/7.jpg","87517a4887b114da0051e2142cfd810d"],["/2019/10/24/jpg/7.png","c1498023cffaaa0f013c984f0329e5b5"],["/2019/10/24/jpg/8.jpg","993a56abff805a8c15935b625e71ee10"],["/2019/10/24/jpg/8.png","bea78b1ba92fedeacc935950d0d4d250"],["/2019/10/24/jpg/index.html","3e5071977239a894d818aca9f3e3acef"],["/2019/10/24/jpg/logo.jpg","c8c0c20b50d0269e0819ba01b5ca2bbd"],["/2019/11/01/搭建个人博客/0.png","539d453056d7a57683886c86e76a404c"],["/2019/11/01/搭建个人博客/1.png","e37fa6acacba9de517e6e1e33b1754f3"],["/2019/11/01/搭建个人博客/10.png","5a6b359fee2ffc6bb6f02d621fc0df0c"],["/2019/11/01/搭建个人博客/11.png","9e90bdeb837ed0e7f3dd662a675232ee"],["/2019/11/01/搭建个人博客/12.png","c2314259e940bb4137d5a3fa4d71c165"],["/2019/11/01/搭建个人博客/13.png","6fb720eec6150830d9cbdd881c02d661"],["/2019/11/01/搭建个人博客/14.png","84012fbc57a59ecbd931012e16d44bbf"],["/2019/11/01/搭建个人博客/15.png","9ad290b517880215828ad2842fbb638b"],["/2019/11/01/搭建个人博客/16.png","432ce11e5cafc3c0c9d5f78ef83b9b89"],["/2019/11/01/搭建个人博客/17.png","9da1651022ed7a5127000df628c87d4b"],["/2019/11/01/搭建个人博客/18.png","e9644822576944dddc3077b9b2aca771"],["/2019/11/01/搭建个人博客/19.png","bcbae8a18cae7395bf0129eea95e59c3"],["/2019/11/01/搭建个人博客/2.png","e299a3bab0837dbf7a9445c98582bcc9"],["/2019/11/01/搭建个人博客/20.png","5a412af7e50a13fb770dc7108aa2153a"],["/2019/11/01/搭建个人博客/21.png","cffd28aa72278736dfce33f507370e4c"],["/2019/11/01/搭建个人博客/22.png","d5fe0587374c194d029cd044662fa900"],["/2019/11/01/搭建个人博客/23.png","2f00f8af5091fd8efc961434f583d191"],["/2019/11/01/搭建个人博客/24.png","d4c077f50b0007a2df7db6bbe6be0d6b"],["/2019/11/01/搭建个人博客/25.png","aa59bceb71d9efb2d167742fb8bc8b71"],["/2019/11/01/搭建个人博客/26.png","eb1f66262a8f2a5567643f0d83a7dfc0"],["/2019/11/01/搭建个人博客/27.png","218bdd416e70265d30e7cbb1ac7feeb8"],["/2019/11/01/搭建个人博客/28.png","6e29dde5e48df5924acdd174f629ac2b"],["/2019/11/01/搭建个人博客/29.png","facf73e69ca99093484143d5c1b5d648"],["/2019/11/01/搭建个人博客/3.png","705e2f408bf05d12d86f5e00911bacf2"],["/2019/11/01/搭建个人博客/30.png","77ad79ab9cb206a581f03df1218e3e1c"],["/2019/11/01/搭建个人博客/3r3.png","1437ab715f39d1deee2e3debfb0de5e5"],["/2019/11/01/搭建个人博客/4.png","4d53bbe14d99739e301966a1c72e6121"],["/2019/11/01/搭建个人博客/5.png","d682ca01f8a942c8f743eaeb296a6137"],["/2019/11/01/搭建个人博客/6.png","ee9e467858cf40d62580340aba52fcd8"],["/2019/11/01/搭建个人博客/7.png","8fcc187110a138dd8c59bf66e3b582b3"],["/2019/11/01/搭建个人博客/8.png","c28696f60e2987f927be1f562b8827e6"],["/2019/11/01/搭建个人博客/9.png","770424a97143f552925b4c63a381efa0"],["/2019/11/01/搭建个人博客/index.html","4983230ed3fd26141daf49fa97dedcf8"],["/2019/11/04/hgj/index.html","7a44eb01de0aa4c2d145a044b76f6828"],["/apple-touch-icon.png","47be9c06745740ba9c1c401e412093a3"],["/archives/2019/09/index.html","ab1be96576e79f7e3d866892ef68f12e"],["/archives/2019/10/index.html","a5ec5b5935e28d79144d9c1982b95ede"],["/archives/2019/11/index.html","98235cfc0dcab4d1e5f8aee45217bede"],["/archives/2019/index.html","5d66380c47e2254cb5deafba44d776b6"],["/archives/index.html","32e91ac4623a537f8c51749325b65f4d"],["/background/backup/bg-1.jpg","5a019ba4a8b8b74c73792e4d08649af4"],["/background/backup/bg-2.jpg","75a93b26b267b972f90b41e2676d6230"],["/background/backup/bg-3.jpg","8ca0ce5599f504053e269d82d235b19d"],["/background/backup/bg-4.jpg","25f6e37cf01a7a4de8c4a3efa6f23908"],["/background/bg-1.jpg","9fc658dbae56a92f503368012e686b5f"],["/background/bg-2.jpg","32ba5bb15fcb90aec56a9fe5f414e673"],["/background/bg-3.jpg","edb62f17233d59e7739aeb3c4185234b"],["/background/bg-4.jpg","f333be592cf3d87bb3440b79cd962623"],["/background/bg-5.jpg","823d7c7300fa8b5865e42ac863d723eb"],["/background/bg-6.jpg","30edf2ae82a6a97dce7daf176a12a8e9"],["/css/style.css","883094c12d17f22b636a8d6ee6196fea"],["/images/1.png","41c50cebf663106ea474751daaa45ddf"],["/images/2.png","a1c2382e742954b9d4b3413e65c38172"],["/images/3.png","649ff720940b97b21971bed992b40b7a"],["/images/4.png","ba18a2852b6891f26de9146cac6aa31a"],["/images/5.png","e67dcab55c3ce6a469a21aa988c58ff7"],["/images/6.png","08d714ca6c3f725ee11fc994c34613bd"],["/images/7.png","c1498023cffaaa0f013c984f0329e5b5"],["/images/8.png","bea78b1ba92fedeacc935950d0d4d250"],["/img/AcFun.png","6c6e9a78ee05efd125d72e7dc70d2574"],["/img/CSDN.png","93ea195b94cd1eec8df2795313cbd5f7"],["/img/Coding.png","47e4d8ab15cd9cda7e1e408b90bbaf82"],["/img/LOFTER.png","ae1a77b32d4f552561315d7eeab29ff4"],["/img/Plunker.png","b594c6b3548dbc2500852d4d591702da"],["/img/Quora.png","d6c24996cd08bf2786d78c4071f0988d"],["/img/SegmentFault.png","34f2c19158f416ec49c6fdcac8465f8f"],["/img/TiddlyWiki.png","31ce52fbcefa8cf0354547ff730838d7"],["/img/V2EX.png","ec857463f2de5edfb45f2088511cfbaa"],["/img/avatar.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/img/bilibili.png","79c63c46c7b875a733dbfb85c4d556e8"],["/img/niconico.png","37ffe1ba3e1590175678bb17dc33fea8"],["/img/scrollbar_arrow.png","c401adb9576ae9492fb0d5a0e18aec3c"],["/img/博客园.png","6f7a6829727bdf4fd85a527353fdb972"],["/img/新浪微博.png","72791796198367ddc5843969a20e19de"],["/img/知乎.png","30d00b6b3710a06a17a13f898264fb81"],["/img/简书.png","493a5cbf0c7bb984dd2aa76963402787"],["/img/网易云音乐.png","6d041725f75308e6637053347bd579c4"],["/img/虾米音乐.png","fa1f51129986ddb4441be2a7609f743d"],["/img/豆瓣.png","465a51ccfda6a57f4ce07520c4f50cb7"],["/index.html","936ac17ec21caec84681b589f2d3eeee"],["/js/GithubRepoWidget.js","9ec1ab0f12430beb879535ab40840235"],["/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/js/main.js","b226902b9aeafd8e883d77f565034f69"],["/js/mobile.js","f99366d60cafcbc5f1df24c256acfe1a"],["/js/pc.js","0246c4aebaf5b03f92f1ac587bd41a4a"],["/js/search.js","1f0b50c5255e7f088c726312dd8d17b0"],["/js/toc.js","6da2835a8ac46c416891c94bc86f0fde"],["/sw-register.js","c1781c19a57030e714df4ce4c1cd604e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
