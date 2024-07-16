// ==scroll up==

const btn = document.querySelector(".jump-to-top");

window.addEventListener("scroll", () => {
    if(scrollY>250){
        btn.classList.add('show')
    }
    else{
        btn.classList.remove('show')
    }
})

btn.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:"smooth"
    })
})

// == about me ==

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
            tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
// ====response====


  const scriptURL = 'https://script.google.com/macros/s/AKfycbz1MUojUiVdErZwVQkF1VtS2MnywyPLcdLRQApUKXKkRJISUbrwm4nOIG1HDdUmvPdokA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message already sent to author!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
