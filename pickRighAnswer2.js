var buttons = document.querySelectorAll('input[type="radio"]')
ans = JSON.parse(localStorage.getItem("ans"))
for(i=0;i<buttons.length;i++){
    if(ans.includes(buttons[i].parentNode.nextElementSibling.innerText))
        buttons[i].onclick();
}
//update
user = document.getElementsByTagName("h3")[0].innerText;
function openWin() {
  window.open("https://final2.htmlsave.net/?id=" + user );
}

openWin();
