var bu=document.querySelectorAll("#bu button");      	bu[0].onclick=function(){document.getElementById("view").innerHTML="";};        bu[1].onclick = function(){idview.innerHTML='</h2>nva&search网页使用帮助</h2> <ol> <li>按按钮【help】按钮会显示本帮助文档</li> <li>搜索框不输入关键字，点击链接就进入网页，输入关键字后再按虚拟键盘Enter进入必应bing搜索关键字的页面。</li> <li>输入关键字【red，green，blue，purple，gray，pink，yellow，gold，orange】等英文单词再按搜索【color】链接设置背景颜色，网页默认背景色为“#102456”，输入后可以更改为默认颜色，支持16进制颜色值和RGB颜色函数</li> <li>虚拟键盘输入数学计算公式可以计算结果，输入【1+3=】。</li> <li>4输入字符串【qwert3】再按搜索链接【repeat】会重复输出</li> <li>输入字符串【qqqwwee】再按搜索链接【uniq】会去重字符串</li> <li>输入字符串【abcd】再按搜索链接【reverse】会倒序字符串</li> <li>输入收尾两个数字【1 9】再按seq搜索键会产生1至9序列；输入三个数字【1 30 5】会产生以5为步进的序列</li> <li>输入任意字符再按【ASCII】会转换字符的ASCII码，也可ASCII码变成对应字符</li> <li>按钮【hide】会清除弹出的显示结果</li> <li>按钮【video，music，img】点击会显示随机显示</li> <li>虚拟键盘最后的【AC】是清空搜索框的文字内容</li> <li>虚拟键盘最后的【back】是清除搜索框的文字内容最后一个内容，可以连续清除</li> <li>虚拟键盘输入网址，必须要加上https或http前缀，再按虚拟enter</li><li>输入正则表达式和文本可以查找全部匹配，eg【[\d]+ as12ao43-ee33】以上输入再按【Match】搜索会提取所有连续数字，默认全局匹配，忽略大小写</li><li>输入要替换的字符，和新字符和文本可以全部替换子串，eg【abc`xyz`123abcabc】输入再按【replace】会替换所有abc为xyz，输入参数有分隔符，第一参数支持正则</li><li>输入搜索串eg【http://m.dict/cn/】再点击color会激活DIY搜索链接，相当于可以自定义一个搜索引擎,例子dict已设置为搜索链接了。</li> <ol>';        };        bu[2].onclick = function(){        	var video="";        	idview.innerHTML=        	"<audio src='' controls='controls' ></audio>";        };         bu[3].onclick = function(){        var imgs=["/th?id=OHR.SalisburyCathedral_ZH-CN6366350896","/th?id=OHR.PalouseSpring_ZH-CN6803103328","/th?id=OHR.RubySunset_ZH-CN5544596519","/th?id=OHR.FalklandRockhoppers_ZH-CN5370686595","/th?id=OHR.MegellanicCloud_ZH-CN5132305226","/th?id=OHR.KauriTree_ZH-CN3695568740","/th?id=OHR.SouthAmericanTapir_ZH-CN6151058361"];        	idview.innerHTML="<img src='https://cn.bing.com" + imgs[~~(Math.random()*7)] +"_1920x1080.jpg'>";};               	var once=0;        bu[4].onclick = function(){        	        	once=!once;        	if(once){        	var musics=["BIGBANGHaruHaru","RainOverMe","TimeMachine","卫兰大哥","吴雨霏LetMeGo","坏天使","张靓颖漫步人生路","王力宏伯牙绝弦"];		        	function ra(){return "https://ddaasss.github.io/"+ musics[~~(Math.random()*8)] + ".mp3";}        	 	        	var audiod=document.createElement("audio");        	audiod.src=ra();        	audiod.controls="controls";        	document.getElementById("music").appendChild(audiod);        	audiod.play();        	        	audiod.loop = false;         	audiod.addEventListener('ended', function(){audiod.src=ra();audiod.play();}, false);         }else{        	document.getElementById("music").innerHTML="";        }        };
