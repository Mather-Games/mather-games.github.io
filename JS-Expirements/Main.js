function Change_page() {
  document.body.innerHTML = document.body.innerHTML + "<p> Webpage changed </p> \n <button onclick="Change_page_again()"> Click here to change it again</button>"
  console.log("Web page changed");
}
function Change_page_again() {
  document.body.innerHTML = document.body.innerHTML + "<p> You have once again changed the page </p>"
}
