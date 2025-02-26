// poem
var words = [
    '快乐常伴',
    '眼里有光',
    '光芒万丈',
    '优雅自信',
    '心中有爱',
    '脚下有路',
    '未来可期',
    '诗和远方',
    '不被岁月定义',
    '不被世俗框限',
    '愿你被世界温柔以待',
    '美好永远眷顾你',
    '我见青山多妩媚',
    '料青山见我也应如是',
    '曾经沧海难为水',
    '半缘修道半缘君',
    '人生若只如初见',
    '若有知音见采',
    '不辞唱遍阳春',
    '和光同尘',
    '杳霭流玉',
    '月落星沉',
    '霞姿月韵',
    '喜上眉梢',
    '落花人独立',
    '微雨燕双飞',
    '掬水月在手',
    '弄花香满衣',
    '垆边人似月',
    '皓腕凝霜雪',
    '愿你明媚如春，璀璨如夏，丰盈如秋，温暖如冬',
    '沉鱼落雁鸟惊喧',
    '羞花闭月花愁颤',
    '心有繁花，四季皆春',
    '笑靥如霞，温暖如初',
    '愿你独立自信，闪耀如光',
    '愿你脚踏星辰，奔赴远方',
    '愿你不惧岁月，优雅如故',
    '金风玉露一相逢',
    '请歌诗雅祝遐龄，永如松柏如山阜',
    '鹏北海，凤朝阳',
    '明年此日青云去',
    '春风得意马蹄疾',
    '一日看尽长安花',
    '桃花直透三层浪',
    '大鹏一日同风起',
    '扶摇直上几万里',
    '沉香亭北倚阑干'
];
function randomNum(min, max) {
    var num = (Math.random() * (max - min + 1) + min).toFixed(2);
    return num;
}
function init() {
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w => {
        let word_box = document.createElement('div');
        let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top", randomNum(-40, 20) + 'vh');
        word_box.style.setProperty("--margin-left", randomNum(6, 35) + 'vw');
        word_box.style.setProperty("--animation-duration", randomNum(8, 20) + 's');
        word_box.style.setProperty("--animation-delay", randomNum(-20, 0) + 's');

        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load', init);
let textone = document.querySelector('.textone').querySelector('h1');
let texttwo = document.querySelector('.texttwo').querySelector('h1');
let textthree = document.querySelector('.textthree').querySelector('h1');

setTimeout(function () {
    textone.innerHTML = 'The whole starry sky shines for you alone';
    textone.style.color = '#E8F9FD';
    textone.style.fontFamily = '楷体'
    texttwo.style.color = '#E8F9FD';
    texttwo.style.fontFamily = '楷体'
    textthree.style.color = '#E8F9FD';
    textthree.style.fontFamily = '楷体'
    texttwo.innerHTML = '';
}, 28000)
setTimeout(function () {
    textone.innerHTML = '平安快乐';
    texttwo.innerHTML = '万事如意';
    textthree.innerHTML = '考试顺利';
}, 112500)

document.addEventListener('click', function () {
    let audio = document.querySelector('audio');
    if (audio.paused) {
        audio.play();
    }
});
