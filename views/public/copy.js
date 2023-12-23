function copy(text, id, retext) {
  navigator.clipboard.writeText(text);
  document.getElementById(id).innerText = "Copied";
  setTimeout(() => {
    document.getElementById(id).innerText = retext;
  }, 2000);
}
