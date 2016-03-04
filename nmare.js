module.exports = function nmare() {

var fs = require('fs');
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare

    .viewport(768, 1024)
    .goto('http://www.hockey-reference.com/play-index/psl_finder.cgi?request=1&match=single&year_min=2016&year_max=2016&season_start=1&season_end=-1&rookie=N&age_min=0&age_max=99&birth_country=&birthyear_min=&birthyear_max=&franch_id=&is_active=&is_hof=&pos=S&handed=&is_playoffs=N&c1stat=goals_per_game&c1comp=gt&c1val=&c2stat=assists_per_game&c2comp=gt&c2val=&c3stat=time_on_ice&c3comp=gt&c3val=&c4stat=shots_per_game&c4comp=gt&c4val=&threshhold=5&order_by=points#stats')
    .wait()
    .evaluate(function () {
      
      return document.querySelector('#stats').innerHTML
    
    })
    .end()
     .then(function (stats) {
        fs.writeFile('./public/views/scraped.html', stats, function(err){
        if (err) {
          console.log('Error appending!');
        }
        else { 
          console.log('who saw that?');

        } 

    })
    })
  };

