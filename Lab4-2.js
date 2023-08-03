var lyricElemment = document.getElementById('lyric');
lyrics = [
    'Đoàn quân Việt Nam đi chung lòng cứu quốc, ',
    'bước chân dồn vang trên đường gập ghềnh xa, ',
    'cờ in máu chiến thắng mang hồn nước, ',
    'súng ngoài xa chen khúc quân hành ca, ',
    'đường vinh quang xây xác quân thù, ',
    'hắng gian lao cùng nhau lập chiến khu, ',
    'vì nhân dân chiến đấu không ngừng, ',
    'tiến mau ra sa trường. ',
    'Tiến lên, ',
    'cùng tiến lên, ',
    'nước non Việt Nam ta vững bền.'
]



let i = 0;
var lyric = ''

let time = setInterval(function ABC() {
    lyric = lyric + lyrics[i]

    var lyricsHTML = `<p id="lyric">${lyric}</p>`;
    lyricElemment.innerHTML = lyricsHTML;
    i++
}, 1000)

function clearAlert() {
    clearTimeout(time);
}