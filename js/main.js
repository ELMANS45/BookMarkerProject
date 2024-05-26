var namein = document.getElementById('bookmarkName')
var urlin = document.getElementById('bookmarkURL')
var arr=[]
var book = {}
if(localStorage.getItem('item')!=null){
    arr= JSON.parse(localStorage.getItem('item'))
    display()
}
function setValues(){
    book = {
        name : namein.value,
        Url : urlin.value
    }
    arr.push(book)
    display();
    localStorage.setItem('item' , JSON.stringify(arr))
    clearV();
}
function display(){
    let cartona = ""
    for(let i = 0 ; i<arr.length ;i++ ){
        cartona+=`
        <tr>
<td>${i+1}</td>
<td>${arr[i].name}</td>              
<td>
  <a href="${arr[i].Url}" class="btn btn-visit btn-secondary">
    <i class="fa-solid fa-eye pe-2"></i>Visit
  </a>
</td>
<td>
  <button class="btn btn-delete pe-2 btn-success" onclick="deleteI(${i})">
    <i class="fa-solid fa-trash-can"></i>
    Delete
  </button>
</td>
</tr>
        `
    }
    document.getElementById('tableContent').innerHTML=cartona
}
function clearV(){
    namein.value=""
    urlin.value=""
}
function deleteI(index){
    arr.splice(index,1)
    display();
    localStorage.setItem('item' , JSON.stringify(arr))
}
function val(element) {
  var regax = {
      bookmarkName: /^[A-Za-z ][A-Za-z]/,
      bookmarkURL: /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/
  };
      if (regax[element.id].test(element.value)) {
          element.classList.add('is-valid');
          element.classList.remove('is-invalid');
          return true;
      } else {
          element.classList.remove('is-valid');
          element.classList.add('is-invalid');
          return false;
      }
}






































{/* <tr>
<td>1</td>
<td>Name123</td>              
<td>
  <button class="btn btn-visit btn-secondary" data-index="0">
    <i class="fa-solid fa-eye pe-2"></i>Visit
  </button>
</td>
<td>
  <button class="btn btn-delete pe-2 btn-success" data-index="0">
    <i class="fa-solid fa-trash-can"></i>
    Delete
  </button>
</td>
</tr> */}
