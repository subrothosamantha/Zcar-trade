
//using jQuery
$(document).ready(function () {
   $('.wellcome-message').slideToggle(10000);

   $('#ele-text').hide(function () {
      $('#ele-text').show(5000);
   });

   fetchingHetchback();
   fetchingBrands1();
  
});

$('#hatchback-tab').click(function () {
   fetchingHetchback();
});

$('#suv-tab').click(function(){
   fetchingSUV();
});

//using javaScript new version

document.getElementById('sedan-tab').addEventListener('click',fetchingSedan);
document.getElementById('muv-tab').addEventListener('click',fetchingMUV);
document.getElementById('luxury-tab').addEventListener('click',fetchingLuxury);





function fetchingHetchback() {

   const xhr = new XMLHttpRequest();

   xhr.open('GET', '..//json/hatchback.json', false);

   xhr.onload = function () {
      const value = JSON.parse(xhr.responseText);
      let html = '';
      value.forEach(data => {
         html = html + `
        
         <div class="col-4">
        <div class="card"  style="width: 18rem;">
        <img src="${data.image}" class="card-img-top">
        <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <p class="card-text">${data.description}</p>
  </div>
  </div>
  </div>
    `
      });

      const container = document.getElementById('lappy');
      container.innerHTML = html;
   }

   xhr.send();
}


function fetchingSedan() {

   fetch('..//json/sedan.json').then(function (response) {
      return response.json();
   }).then(function (value) {
      let html = '';
      value.forEach(data => {
         html = html + `
        
         <div class="col-4">
        <div class="card"  style="width: 18rem;">
        <img src="${data.image}" class="card-img-top">
        <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <p class="card-text">${data.description}</p>
  </div>
  </div>
  </div>
    `
      });
      const container = document.getElementById('saden-lappy');
      container.innerHTML = html;
   });
}

function fetchingSUV(){
   fetch('..//json/suv.json').then(function (response) {
      return response.json();
   }).then(function (value) {
      let html = '';
      value.forEach(data => {
         html = html + `
        
         <div class="col-4">
        <div class="card"  style="width: 18rem;">
        <img src="${data.image}" class="card-img-top">
        <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <p class="card-text">${data.description}</p>
  </div>
  </div>
  </div>
    `
      });
      const container = document.getElementById('suv-lappy');
      container.innerHTML = html;
   });

}

function fetchingMUV(){
   fetch('..//json/muv.json').then(function (response) {
      return response.json();
   }).then(function (value) {
      let html = '';
      value.forEach(data => {
         html = html + `
        
         <div class="col-4">
        <div class="card"  style="width: 18rem;">
        <img src="${data.image}" class="card-img-top">
        <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <p class="card-text">${data.description}</p>
  </div>
  </div>
  </div>
    `
      });
      const container = document.getElementById('muv-lappy');
      container.innerHTML = html;
   });

}

function fetchingLuxury(){
   fetch('..//json/luxury.json').then(function (response) {
      return response.json();
   }).then(function (value) {
      let html = '';
      value.forEach(data => {
         html = html + `
        
         <div class="col-4">
        <div class="card"  style="width: 18rem;">
        <img src="${data.image}" class="card-img-top">
        <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <p class="card-text">${data.description}</p>
  </div>
  </div>
  </div>
    `
      });
      const container = document.getElementById('luxury-lappy');
      container.innerHTML = html;
   });

}

function fetchingBrands1(){
   
   fetch('..//json/brand-items-1.json').then(response => {
      return response.json();
   }).then(value =>{
      let html = '';
      value.forEach(data=>{
         html += `
         <div class="col-md-3 mb-3">
            <div class="card">
                <img class="img-fluid" alt="100%x280"
                    src="${data.image}">
            </div>
        </div>
         `
      });
      const container = document.getElementById('brand-items-1');
      container.innerHTML = html;
   });
   fetchingBrands2();
  
}

function fetchingBrands2(){
   
   fetch('..//json/brand-items-2.json').then(response => {
      return response.json();
   }).then(value =>{
      let html = '';
      value.forEach(data=>{
         html += `
         <div class="col-md-3 mb-3">
            <div class="card">
                <img class="img-fluid" alt="100%x280"
                    src="${data.image}">
            </div>
        </div>
         `
      });
      const container = document.getElementById('brand-items-2');
      container.innerHTML = html;
   });
   fetchingBrands3()
}

function fetchingBrands3(){
   
   fetch('..//json/brand-items-3.json').then(response => {
      return response.json();
   }).then(value =>{
      let html = '';
      value.forEach(data=>{
         html += `
         <div class="col-md-3 mb-3">
            <div class="card">
                <img class="img-fluid" alt="100%x280"
                    src="${data.image}">
            </div>
        </div>
         `
      });
      const container = document.getElementById('brand-items-3');
      container.innerHTML = html;
   });
}