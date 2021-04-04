//BOOK CONSTRCUTION
function Book(title, author, isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}
//UI CONTRUCTOR
function UI(){
UI.prototype.addBookToList=function(book){
    const list=document.getElementById('book-list');
    //CREATE tr element
    const row=document.createElement('tr');
    //INSERT COLS
    row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
`
    list.appendChild(row);
}

}
//SHOW ALERTS
UI.prototype.showAlert=function(message, className){
    //CREATE DIV
    const div= document.createElement('div')
    //CREATE CLASSESS
    div.className=`alert ${className}`;
    div.appendChild(document.createTextNode(message))
    const container=document.querySelector('.container');
    const form= document.querySelector('#book-form')

    container.insertBefore(div,form);

    //TIMEOUT
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000)
}
//CLEAR FIELDS
UI.prototype.clearFields=function(){
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
}
UI.prototype.deleteBook=function(target){
    if(target.className==='delete'){
        target.parentElement.parentElement.remove();
    }
}

//EVENT LISTENER
document.getElementById('book-form').addEventListener('submit', function(e){
    console.log('test');
    //GET FORM VALUE
    const title=document.getElementById('title').value,
        author=document.getElementById('author').value,
        isbn=document.getElementById('isbn').value
console.log(title, author, isbn);

//INSTANTIATING(represent) BOOK
const book=new Book(title, author, isbn);
const ui=new UI();

//VALIDATE
if(title==='' || author==='' || isbn ===''){
    //ERROR ALERT
    ui.showAlert('Please fill in all fileds','error')
}else{
    //add book to list
ui.addBookToList(book)
//SHOW SUCCESS
ui.showAlert('Book Added!','success')
//CLEAR FILED
ui.clearFields();
}
 e.preventDefault();

    
})
//EVENT LISTENER FOR DELETE
document.getElementById('book-list').addEventListener('click',function(e){
    const ui=new UI();
    ui.deleteBook(e.target);

    //Show delete alert
    ui.showAlert('Book remove', 'success')
    e.preventDefault()
})