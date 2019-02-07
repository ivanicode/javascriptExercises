function writeCookie(name, value, days) {
  // Domyœlnie nie ma daty wygaœniêcia, wiêc ciasteczko bêdzie tymczasowe
  var expires = "";

  // Okreœlenie iloœci dni (daty wygaœniêcia) zapewnia ciasteczku trwa³oœæ
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }

  // Zapisuje ciasteczko o podanej nazwie, wartoœci i dacie wygaœniêcia
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  // Odnajduje okreœlone ciasteczko i zwraca jego wartoœæ
  var searchName = name + "=";
  var cookies = document.cookie.split(';');
  for(var i=0; i < cookies.length; i++) {
    var c = cookies[i];
    while (c.charAt(0) == ' ')
      c = c.substring(1, c.length);
    if (c.indexOf(searchName) == 0)
      return c.substring(searchName.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  // Usuwa ciasteczko o podanej nazwie
  writeCookie(name, "", -1);
}
