'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e27e1788436dd7b3bbf44ce152f2546c",
".git/config": "7f787d4f04cecfe448d71ddcd370a9ff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4cdb1481f9ab5d6dca7f32cb20f1fe15",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a23d69dda306d9469b09cf5e10e6fad1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1d8582d1bc03f46ae03188a8d50b27bc",
".git/logs/refs/heads/main": "b149dc20370d963bb5e5e2af4cf5f51b",
".git/logs/refs/remotes/origin/main": "52531e806b55edff5b0a782f4ab27158",
".git/objects/03/03e24c196d09a5e4f7709160040c487026d7c0": "8bee2e94be39e7a028d5ecd564c2b638",
".git/objects/03/2d15da4f7b8638e73964b213eb831cd40e2748": "0f1fe5b773c4bfbb85c940bd8768ac6a",
".git/objects/05/ea680b84b3dc3bc6000679f8f65c462283f03a": "0d0f9f6d6056b327ab30ce0b7dd4d264",
".git/objects/06/2fae0a68560a52423938f9729529f8faec0648": "6071628a1c11d6d451664f8a17728083",
".git/objects/06/3f3135bb3556db813823a87c407bed206eee4e": "30cb492d3ee399c223163386b5aaf8d0",
".git/objects/06/d4d87f6324f10c2b7732a3d4ceb8eb572c97b1": "5f6f89744a98fa4c247c4886dc9659f4",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/d51ea3dc05b303c657f62122fc54ec335d720c": "74a5aeccdc23c2bfe4c96c4e10787262",
".git/objects/0c/6e2525a1421c51298ec8177349e4c92814a543": "a9f61800e253b2fa46b7c1e064f88259",
".git/objects/0c/7adba5e9242abc323a5e06fac0dd0d6375613a": "397c470ddf0fd06facaa58d99d78d338",
".git/objects/0d/46078954d2d4973450b3c8c72129826130b964": "9c42430ff6b307e32888a4a625f92cab",
".git/objects/0f/529faf11954da9fb4d408b44d338779f0b017c": "6e4776bf383cbdf97c53481a800ff5ed",
".git/objects/11/a8109ec38ae117f2ebf5574fb2227dbddf94be": "30b707db620b3fd4e68ee7bf10c68460",
".git/objects/15/df2f51527bbebb9ece41a4acd736061b1f0254": "046e777552820c4c9b60f12da10e2aad",
".git/objects/16/09aae49b7821e0dd4ae9ba59ec902aee5dd513": "dd05ce7cb6a4cd175560f22a48de2bec",
".git/objects/1b/b0882a5ca87db1a2e906c76abd546aa132a89a": "07350d61755e9bbc207f998310112f5b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2b/a62680d468bc0a67b7ba7080fd4b9f4415fc8f": "8e8f9ec0d47b096cea26823c0a16757a",
".git/objects/2c/9eb94cd569dc73387ffba7c8ee2665d27ddeae": "fdd071e7cb27a6262b1605edf013e688",
".git/objects/2f/7c40a3242c6a29a916565f4d343d0579809713": "ea36b95e7343ef714e700c47e022793c",
".git/objects/31/674e76b7e19dba98d7d5280b9f9a5f428e4467": "19267b849d36f1ec776d688c6f8cce20",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/787735eaf597638301f9c649d90e7cad49acfe": "557a602780220b3ff6b2eeda80f95d33",
".git/objects/37/78c213ab1514692ab34446826c4d6f1b5a98dc": "6448ca52d32efbc2c23428a05dc190e2",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/41/a3aea8c71897dda2d14f241bb1a9a491b94719": "1e472a9ecd5aaf25b61982b2aab13985",
".git/objects/42/28ef290433cfc7e3670f0fb8b1606500d44d3e": "f41efd8fe445244354d3db2758b5e2ff",
".git/objects/42/6b6998617b7d5fdd2d2eb3893646a7e0105ec8": "64cc5f423c815954948c6b13097ce516",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/d3960bffb01520c2f3868a265eed35fe9dbcb3": "4267a679f0995250bef468cd46c21ec6",
".git/objects/46/b9d5f1e5e41ec3986a9791a2b5003c99ab8e0d": "7ddd1df78303dc4910ced10316f63525",
".git/objects/48/647a3cbcd5f773d06b47c6f6eb11d74fe0b613": "9be83cbdeb32c767b5a77ff9db569aa1",
".git/objects/4d/5833ea3ecee6c3c196086ec772ef1d325e435f": "2d26864a214b450f6dba94ec96578e62",
".git/objects/4f/53cfdf8869e0bdbcab346543e1d4bb83947dcf": "1be36eb7bc07dc489fe126634f0ad4d4",
".git/objects/58/8bc317b7f2ccfd78a3cf215f6bbe23eb345d9b": "e62af81890d3d529f6021d1f6e37a6e1",
".git/objects/58/aa1eb74511a61890e380533795d9d921fae50e": "a972c878b9ca839473a9c8992ec6122b",
".git/objects/5e/abee9cd3719fa7da661fff6d3450cb5b24a98a": "471e8f4797f465429f6dc0953c424a8e",
".git/objects/61/9117b9af9c7ea0d9520525a1847801afbde9bd": "d13f777c420794d33ddded940c8588fb",
".git/objects/61/9aedaed791c39dd8ef6b6e9504a1bd13f47eb1": "022cf8a94c67e33d6b5285244b052218",
".git/objects/69/0c106212c8db91e4a2c8613e443829a827b1f9": "7396c1707d80b27013c81ff40cd331c4",
".git/objects/69/c1c8b6ece09d8bdf9988e8495064a582149916": "813937dc7da29e7e14e9a674241dea59",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/a4bb5d78f2bf5e37db0e5ef91d64375c98c87d": "d84307c5501ebb0a0d160db2e5efc52d",
".git/objects/6c/efcc50ab0b5b54198b3663f7362afc38a799ae": "ed0d6ab505aa99d185a4820666c5b839",
".git/objects/71/5e153f5f22aa1e75cc4f6e6ae3dae995763e63": "ace205b95e3cf583e6f2de3e6fe0114e",
".git/objects/76/d6695d6931b2d747a598f91b99c375a0a65be4": "f52fba1d77e85c33fe7b5565cbc0bc02",
".git/objects/7d/9e7145de9af8d2a97f89a46e963a6ab1957c31": "93782b5aa74397364bc8eb5251f0df0e",
".git/objects/7e/185a269338baa490c62e42a2560211176891ab": "607da7b181ba999f2f3eddc4c376f2e8",
".git/objects/7f/60774fc07413c70ddc96a6e1bf57e69b50f170": "22b61cbbaef79554ff8f038e0772fea8",
".git/objects/81/0d93e9b32cb784088f0180b52e9fc45786ee5c": "3f5184fab80168801e5bafe37d3997c2",
".git/objects/82/55ec7a66855c1f711589e21d2e67e5b265c24a": "94f24dda04261605d9a9fc9853f7c664",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/fcdd0e587295d6fa7ace2a8de6e1e06fd516e1": "c1d49e8d5860ed5dd5022b119c6733fb",
".git/objects/85/0f92e84c109a965ac826fbe4879abe7326991d": "b47617031d5ee95388101a909532aea6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/1c8444cd6289e4b8233aedcb0d4ace4d2937db": "3a40d4bf01c3872ad3ab2b9a4086b151",
".git/objects/8b/3d28a81c5551bfe42816421162e01e77781837": "e2025691c5796c69db765643f29a8680",
".git/objects/90/8d411c1c6884da84efb0f6f77a079a9d857c58": "0a3706b6b17228f2df02808685752621",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/43aa70c53cd8b5f47dff99e4638e9dee3d5e31": "9e4c441486f0a52649c8969f6c10f2c9",
".git/objects/91/75b0110e702e2a83bda8e9f826c30127c2d761": "1e1f3d10a3b8d5597de06c2e040e91e4",
".git/objects/97/49f4f20ec99ff62b109b1572b3a222d0ebe190": "d615a7ed2c5ece00d2cc9406a69fc963",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/18535da56c3be9cffea2727f23b228c1bc6813": "ac7669bac2d7f01822d7315455c6b02e",
".git/objects/9a/548563c2e6daff22870e0779ad0bcb14d4cd9d": "2732741f6d307645736524b0f0039f38",
".git/objects/a1/82b71fa3db4f066edd97723a8fa69db83f15f8": "acb1bf60fddb4fe7513d7e252ecaf2e3",
".git/objects/a1/ffd08e201b86be696c7f03c021f89065b83321": "28c03bfe53464168fd5bdaaea632b862",
".git/objects/ac/bcda2e6342aa141241e5a495ac918b04e84063": "7a9b99a49250921a4c60c07369ae8671",
".git/objects/ae/6ceed7055ef7fde306ade0db236eea6fb94232": "d631d6e503618c6360ddec0fabf4afaf",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/94351dedd5dea4d79ca3693903a35dce07f9ca": "e2c5930c390b1f5e1551f822ef0349ad",
".git/objects/b1/b16202f7cb49ed3fbe78f60a7250bec8977991": "825bb8f6b98db621e8edaf686f6b5471",
".git/objects/b3/14e838c9e0fc96ab95c50a47a83e9bd1228d94": "6958eb352b745cbcee4589cb480677fb",
".git/objects/b5/cd8455700eeab0eb2aa89c336ad6894c33fd6c": "25ee2bccdc4f112adc2f76c2ae4d345e",
".git/objects/b7/b69105181dfc7f5e8dabab979547cc8caf1ab5": "3d2dd23e13da0bc1980c7c60bcb799a9",
".git/objects/b7/bb59e2598f60eee0aa294a4adb6c858884eab6": "442f5362c25399844f712dfb9fad9384",
".git/objects/b8/02f9344db96ce39064e0b870a4ecd1a37b507b": "14eaa1033a074827f2da7f8c876f0cbf",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/1bf291ade89bbbe1675eee5cfdced077d45853": "88e3ac98fdcee6c0a36463c2e2ba24be",
".git/objects/bf/08fde8fb8e325f57faf96b6b32d26f6eca3b8b": "47937b233ac516db95b56907707d47b4",
".git/objects/c1/1bcb5228ae0714f050d192722addd3aa087403": "4c8cbe5309afe256cbff54d46cf71620",
".git/objects/c1/417aa33b052c2a053d409f9c6bf843ae5a5e65": "66da86502bccf5c233edb6031ae97031",
".git/objects/c1/df2f43fbea12426fd2de2bc1e8021616ad3cc2": "e35c70133a53192b7375ec3bf0271a1c",
".git/objects/c2/6e2246960c6dbc0e45bf56601ef0cc938ef686": "6701a2bafc5ef0ca9bc16f86e858dcb8",
".git/objects/c3/5ddbb377ff7fee1692eedcbfc6ce41a8d7a57a": "79cd447abc6e044c702f02316dbe2292",
".git/objects/c3/c27c8197d9ccbd737590ee36f12a701922adae": "66f17ba6637a0225f74bfc0de0c90689",
".git/objects/c4/a78bf7c8d87e268b9646b641fe0b3bec5f6205": "b718fe3f2af72f513131dc2f465d1772",
".git/objects/c9/5e133c5e644841619d0dd932bb99bf6eb4d26b": "0b0e671836ee2d55a015be75ba6c6310",
".git/objects/ca/0966a626407617ab660eec4f01ca517c0439da": "01784d10f4b035f689ffc001229a56d8",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cd/3ee2dc6c2061dde70dc4dc894aad67c8a71e44": "405c2c2d715cdd420a66b1c0166cb9f4",
".git/objects/cf/05e609be930f85beb288498546fa958655bce1": "7999a245b498acfedc6979dd5906348e",
".git/objects/cf/7500994d796750ac26f8426d3385f0c6ba540b": "aa352006b8df25a346b51183cebe996b",
".git/objects/cf/bb249a284423648b79cd013efbb45f4c915a56": "051915493d341c515c6eb471eb13365c",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/97ce587352e7b8d1948629a1b8241c59770445": "d9357de19e49d162a41cf34240ddd0e5",
".git/objects/d4/c967c22366c332db93dbae650d12f42c03c631": "cc0fca3c21d9634323b045f6dcc3aa3b",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/344531383f9104ad7a4bec055dbf09fa6a4530": "18f04c20c6e0e1f9f72380e5ba0bc417",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/6a655e0da647779c6bce6d0bf0446b1c6ef441": "187539da38d68d48cd66249730189221",
".git/objects/da/18476dd9c65a09299f011bbc92ddfe0ac746a4": "db59aaa1779b890dcd1f4dc7deb7622a",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/38923c178867ef0e19a4a66a7a65272cb37ffd": "43e242453b64a589472d81f913e90f10",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/e0/6c458c39a80556d5800d3728034370e782c0d6": "bd556a70b469420d73073ea4c5e4b70a",
".git/objects/e1/51636c454258a0c2a7a62d75d6bccfa4bc0db7": "d5c34a34693eb582dc7335aa666b4ba6",
".git/objects/e7/b8fd4a704464774c5c9fde85820c8866ff919b": "8de6db2a054f7564f965f53b62bc4f4b",
".git/objects/e7/bd08382e01ada6b72d582386a4a3b238554eae": "4c2bc907fbd5590fa91ffce57deec7e4",
".git/objects/e8/f34c327ea20aa240193e1273f9851f318bac7a": "c46e0aa29c99280e6ea20704e06f1032",
".git/objects/ea/3888430932dc37c18bc82ca9edd345d3135ffd": "2ac84ebc17db95ed704319d86e233f56",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b6e0a1f3399137a24e0de3e39e9eb31173d4b6": "705495ca37f9bbfa869bd1f9b4904bb9",
".git/objects/eb/fce13eeaeef40ae9187f8727bb3a1dd6c4aa49": "174277b04abaaeb7c1ca2a9546c6c1fa",
".git/objects/ed/4490ae789fb34acea3408920740794a18fa5b2": "62e79b8bcc250dc2cdbc51a0ad3c571a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/100edc71ed14d3c65a757a4280a96398c81a7d": "3498a73cb39d16e0e43a48bcef7fe93a",
".git/objects/f5/0ce1203dc55f9bf57eafcf72958599d9b5a532": "cb5af1888e35dcbd17cf19b6d359892a",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/ORIG_HEAD": "4fff8856b824de0228c0ade1a64a8d69",
".git/refs/heads/main": "1ec09167160e6df8f6c6b5a50af22cb8",
".git/refs/remotes/origin/main": "1ec09167160e6df8f6c6b5a50af22cb8",
"assets/AssetManifest.bin": "c8f755406e7ce63b6287b77f8c3c6c30",
"assets/AssetManifest.bin.json": "32990edc7c20e6d0c11cf6b53d4ee31d",
"assets/AssetManifest.json": "24af927fa4a08d39ba787caa3ae5cd66",
"assets/FontManifest.json": "8e2e4718745c757bbd978fca262044b4",
"assets/fonts/Comfortaa-VariableFont_wght.ttf": "b14da82fd326fb23ada0b4df443cda25",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/images/1.jpeg": "072305e902da0cf0cc398de4f1512373",
"assets/images/10-min.jpg": "6544cffa73908aec57d70f2f09de8d50",
"assets/images/11-min.jpg": "b419058fd2fc81d107087699d4035fa8",
"assets/images/12-min.jpg": "1584e1d522bdbf6b3cc81472819ca754",
"assets/images/13-min.jpg": "eeee6ec92ef472dab60f9241aafdfff2",
"assets/images/14-min.jpg": "ae5ccccb074b6a98a35199b263befff2",
"assets/images/15-min.jpg": "532b98072529117319165f55d9f0aa32",
"assets/images/16-min.jpg": "5fb770f40455b190e195f843535f1124",
"assets/images/17-min.jpg": "09b185af57f8e6b4c6c0ee0a0c986088",
"assets/images/18-min.jpg": "5a3025fbe20458c011d3586ffa63f58a",
"assets/images/19-min.jpg": "0d2dbdbf4d6b9bcc2bcc827f3fbb47d8",
"assets/images/2.jpg": "e960bc9ca8536c26c484f70d6b4b7bc8",
"assets/images/20.jpeg": "5ae9c9aca748d75d32bd1fc507fb2046",
"assets/images/21-min.jpg": "1bcc30fbaab129e4b2ced3751bf2c873",
"assets/images/22-min.jpg": "16f4bdae673a7b615f450b15e8875c5a",
"assets/images/23-min.jpg": "d68fae20dfc6cde142f2ad382ff50a73",
"assets/images/24-min.jpg": "f06d798e58cc86184a07dc7aae2b517d",
"assets/images/25-min.jpg": "0a78be6e0b8bf59a5afd2f796ac56a07",
"assets/images/26.jpg": "5db8e26034206fde2d66f48172c76725",
"assets/images/27.jpg": "71ddbcd1f0dc6ca2b20ba47efa40eb5d",
"assets/images/28.jpg": "b5617d908e227fec279a4ab06e759bcd",
"assets/images/29.jpg": "59fe05e3ee6f565aa83f1f5df47cc03b",
"assets/images/3-min.jpg": "25a1feee3b072b8ad9027ad389a21af9",
"assets/images/30.jpg": "da5832e3ac1fcfca3987f381184bde41",
"assets/images/31.jpg": "630638e477e074c0a8fb50eb6f9b2af5",
"assets/images/32.jpg": "ce7d960cdb2201b9ae4cce1145c2f73d",
"assets/images/33.jpg": "3cd269176b71bbfa665ce827f8b9baed",
"assets/images/34.jpg": "5c424b543a567de7695589097291e351",
"assets/images/35.jpg": "23107306ad8060aac9b0c05ff04978fb",
"assets/images/36.jpg": "4a453db5fc2efca7f137bd2f97f8d171",
"assets/images/37.jpg": "fca972c88e6cd9abce7915f3f02823bd",
"assets/images/38.jpg": "47dfb147465f6ca031d7a646867a2f8e",
"assets/images/39.jpg": "09b62483e2a9cd945faf138773270949",
"assets/images/4-min.jpg": "1427b6d682c62dc5cbb2dad9e15b4ebb",
"assets/images/40.jpg": "e9db7e51767017bec9b84c9d1ac58e92",
"assets/images/5-min.jpg": "e7b2816588a76327c2fd3078623df017",
"assets/images/6-min.jpg": "bcd0f05f7919cbf7abe81997fffcd028",
"assets/images/7-min.jpg": "d312b283e04b57409911928b7d45a318",
"assets/images/8-min.jpg": "aa5ae3cff6c6c2b439ef1e338de9884a",
"assets/images/9-min.jpg": "8c3de1d12e946bfaf113939aba285f88",
"assets/images/bcg1.jpg": "410189d65e18a7aacb480c954800fb2f",
"assets/images/bcg10.jpg": "fc708c639d8ddb10cc701de216ccb30b",
"assets/images/bcg11.jpg": "74674f342cdbf4be3e5d20c4ffde2dcf",
"assets/images/bcg12.jpg": "ccc81c507b3cf6e3a9fb26c0f8482b5d",
"assets/images/bcg13.jpg": "8d92a32219d0c0bcb416d0170f992cb2",
"assets/images/bcg14.jpg": "2f08b626bc5c84bdd001fa1868730db7",
"assets/images/bcg15.jpg": "6da811b6ce6a1d11e3f4693f4c82cf47",
"assets/images/bcg2.jpg": "dfd1eacba95f93cb3b58f1956f38de8b",
"assets/images/bcg3.jpg": "7a560bc19a4068bcc387980d8cda0adc",
"assets/images/bcg4.jpg": "5187f7cd169e08c5ded4c5acfe52d83f",
"assets/images/bcg5.jpg": "97a9bf9cc18058690cc50a5d7b62af23",
"assets/images/bcg6.jpg": "54874bb82df1f1262143a2c52c76a97b",
"assets/images/bcg7.jpg": "833cded9e5dfe39593bbb893af0a09cf",
"assets/images/bcg8.jpg": "20e331b98c295ab604f00aaed72084af",
"assets/images/bcg9.jpg": "5a4c226f80d1d09fabb410963942f743",
"assets/images/gender.jpg": "ac4ce6271a2108d141d2cf6530f8356e",
"assets/images/Logo.jpg": "1d96e218988ef29eb79704de2cd6dab8",
"assets/images/party1.jpg": "55dd4b3fb5ff5587b1dfb9a067a0e484",
"assets/images/party10.jpg": "2874e06ef1cebc5c49ba73514fe0067f",
"assets/images/party11.jpg": "188ef320b08cdbbbad68cd4485310abd",
"assets/images/Party2.jpg": "caf34f30dca743bcd4a5c2a965e4ec0d",
"assets/images/party3.jpg": "a6ca76c47f4ef10ad49d97dedfd3c015",
"assets/images/party4.jpg": "c7ccfbe8eed9ddf440b35ca86fa1acef",
"assets/images/party5.jpg": "ce33b461cdf9948f099cd8be15723ebe",
"assets/images/party6.jpg": "535dcfa6f507c345a2478374ac072199",
"assets/images/party7.jpg": "bc12b9184ba64f3f7c8e99c3205bcd63",
"assets/images/party8.jpg": "799189f33175133011e15c4765c8511c",
"assets/images/party9.jpg": "9837c405c495f73f6c218b0d8d794590",
"assets/NOTICES": "7a1f472d38cdb4e55ea00cafcf535db9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"CNAME": "5cba44a290b5da24833b026a34f027c6",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "756c4fc2eeb9e669f768594f038d9b6c",
"icons/Icon-192.png": "7eddaf2747eaa85c8f9759c8dcbbc5d9",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b275eefe54ea86afa8fab4b784d6fff5",
"/": "b275eefe54ea86afa8fab4b784d6fff5",
"main.dart.js": "481f30df5043307e2a61609c3fe7ab50",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
