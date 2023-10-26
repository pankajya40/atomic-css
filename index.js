$("input").hover(function() {
  $("button").addClass('bg-primary-light');
},
function() {
  $("button").removeClass('bg-primary-light');
} 
);

$("i").hover(function() {
  $("button").addClass('bg-primary-light');
},
function() {
  $("button").removeClass('bg-primary-light');
} 
);

$('input').focus( function(){
    $('button').addClass('bg-primary-dark');  
  }
);

$('input').blur( function(){
  $('button').removeClass('bg-primary-dark');  
  $('button').html("Submit");
}
);

const btn = document.querySelector("button");
const inputfield = document.querySelector("input");

inputfield.addEventListener("keyup", function(e) {
  const val = e.target.value;
  if (val === "") {
    btn.innerHTML = "Submit";
  } else {
    btn.innerHTML = "Typing";
    btn.classList.remove('bg-graylight', 'color-gray', 'b-gray');
    btn.classList.add('color-white');
  }
})


$('button').click(()=> {
  loading();
  setTimeout( ()=> {
    $('button').addClass('bg-graylight color-gray b-gray');
    $('button').removeClass('color-white');
    $('button').html('disabled')

  }, 2000)
})

function loading () {
  $('button').html(`<svg width="15" viewBox="0 0 24 24" fill="none">
  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#fff" stroke-width="2.4"/>
  </svg> Loading`)
}



