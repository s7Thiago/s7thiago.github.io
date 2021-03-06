'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "0f3ff84aa1f89fb4a6dcc95173404e9b",
"/.git/config": "f5f3140307df54130dd3f176f039fb7f",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/FETCH_HEAD": "ae33ae91c2cc014d87727e253f94f1f4",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/index": "e1153a53eaad48364d28448fb2de2b1a",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "b2a5ac9deee3cb6356cd6e4b02dc110f",
"/.git/logs/refs/heads/master": "b2a5ac9deee3cb6356cd6e4b02dc110f",
"/.git/logs/refs/remotes/origin/master": "e37f43fbbd30be61b8cd1203105d70f2",
"/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"/.git/objects/08/32bd57ebc3a45fd96ba7fbcf958e236d09d2aa": "0a46b3d6dfa67e0e28650b87e0662842",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/1a/c94218e72037d02ede49023b204445373b0882": "7dbb18acedcacbda517a1b2e818db1c1",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/28/2b207e0e1f62753c5cd88bcc3a179ea56c603f": "788c94825bd0c3a72c4b898c6dff6aa8",
"/.git/objects/2d/7485c5fbf3c6d893c5a1746cc15fc8df27528d": "3de15efc427533a0203a79aa4ce83f08",
"/.git/objects/38/239c24cbe3a3f6fde1b64cf07a72237c859a92": "ec64f7095db3ac41ab33c10cbdea46d5",
"/.git/objects/41/39ec6bc7ae4bedd7211566c45f03ba93af6780": "fa427a3d41f4b014dff3de674392203b",
"/.git/objects/5a/ffdf90cec1b42b38d2089e8b71ad1cf7014bc5": "06c64bd516bfbee2879e66f90ba30430",
"/.git/objects/68/09bc967044ca7501b0a6324dc8f9ec36c04e35": "8662e4ef4408688604ee10a495ed58a4",
"/.git/objects/6a/6e9c04f93c9dc84fa3f93ee2b66a11e0176eeb": "229f57d230520a695aa746a9dcebaa8d",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/82/5da9a6c7bb573cdec4e959bb3a060505de908f": "df127634e70a9bc9806ec3843c7c3b07",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/8a/8820de343c627b3d4788bfd45a860eb6f5a55c": "0185247a99b4d4d688c6ceb50a1c0a36",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/8e/f70f5647c48723b0516e1c538697f6e49ff8fe": "578dc16a291aa6fd12fe710d5ed527f5",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/95/d1f4e50dff4b03e4da27785249a763bafa1c04": "068bf30ab1ccdbfec095bae5af24cd49",
"/.git/objects/96/9aa1f4f35f0bbaeeba4160209f5db07d69269e": "7a1a071617951718d77a3c099bfbcdd5",
"/.git/objects/96/bdee20cd3d8e35eb1fcb16acc24dd08b8dfee3": "648e1f7412a836b6aa73681177452d06",
"/.git/objects/9d/0763017a9391982b006228e10a735b464a341f": "8f2f37013b95f7348f1e6315b693ceea",
"/.git/objects/9d/9dc43cb81dd034cb684639c480d17f0ec7751f": "719b9627e40f4da8976ca624c7ee2306",
"/.git/objects/a3/15588098668ebeb51db9e506793c3ea0b79944": "349f7e11effa33a29ddbe4f11545c95a",
"/.git/objects/b4/92990e0af348889a08236d8161c407998dda5f": "b2b4d01dd4e8ba4fc5b0b4cfb00286b0",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/c5/88d747170b9625fce840ae74f205f993d36f39": "12272dedd7c1eaaaca47e9ab7ed93d89",
"/.git/objects/d2/61280a3a8a16a85bf2bbb1609a6ef5c4e93f04": "28845304c999a51ccd27118fcaceb5e7",
"/.git/objects/dc/618ea8a0a2d342a842fff3f999dcf0c19d0550": "5735beb2191db4de74b21d5a6d9fd7b5",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/f2/c1c2a9c52aa62a1a6f47b688c7c586add55be6": "374485221134602a51bc730b44393283",
"/.git/objects/f4/4048234cc57b62af513d0a1408534feaf8417a": "80f42d635f6a2bb3c0b2e61071da3d74",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/objects/ff/c6c59b1c23c871a71f85976ad465360c4ceafd": "098b80557c6d24816cf130481e137e56",
"/.git/ORIG_HEAD": "486e9a45c4a9a45708e6ef3cc65df663",
"/.git/refs/heads/master": "c6a6f5702e88ccf6079883d86c7ee7b4",
"/.git/refs/remotes/origin/master": "c6a6f5702e88ccf6079883d86c7ee7b4",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "b013363c368b064db683ea6ad9b8d89d",
"/main.dart.js": "575426657b3009a4ca0dbdf8a4bf93c7",
"/manifest.json": "9192a4741c1a5441e194c674f76c2c28"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
