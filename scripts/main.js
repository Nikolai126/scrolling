document.addEventListener('click', function(event) {
    if(event.target.dataset.section == 'one') {
        let element = document.getElementById('one').offsetTop;
        window.scrollTo({
            top: element - 63,
            behavior: "smooth"
          });
    }
    else if (event.target.dataset.section == 'two') {
        let element = document.getElementById('two').offsetTop;
        window.scrollTo({
            top: element - 63,
            behavior: "smooth"
          });
    }
    else if (event.target.dataset.section == 'three') {
        let element = document.getElementById('three').offsetTop;
        window.scrollTo({
            top: element - 63,
            behavior: "smooth"
          });
    }
    else if (event.target.dataset.section == 'four') {
        let element = document.getElementById('four').offsetTop;
        window.scrollTo({
            top: element - 63,
            behavior: "smooth"
          });
    }
    else if (event.target.dataset.section == 'five') {
        document.getElementById('five').scrollIntoView({block: "start", behavior: "smooth"});
    }
});

window.onscroll = function() {
  var scrolled = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrolled > 270) {
        document.getElementById('scroll-top').style.visibility = 'visible';
        document.getElementById('scroll-top').onclick = function () {
            window.scrollTo({
            top:0,
            behavior: "smooth"
          });
        }
  } 
  else {
        document.getElementById('scroll-top').style.visibility = 'hidden';
  }
}