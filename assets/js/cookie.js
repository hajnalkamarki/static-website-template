function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

async function checkCookie () {    
    let cookieOk = localStorage.getItem('cookieok')
    if (cookieOk == null) {
        document.getElementById("cookie-overlay").style.display = "block";
    } else {
        document.getElementById("cookie-overlay").style.display = "none";
    }
}

function hideCookieOverlay() {
    localStorage.setItem('cookieok','OK');
    document.getElementById("cookie-overlay").style.display = "none";
  }

window.addEventListener('DOMContentLoaded', checkCookie);