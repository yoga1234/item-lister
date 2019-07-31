var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);

// add item function
function addItem(e){
  e.preventDefault();

  // get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // add class
  li.className = 'list-group-item';
  // add textnode with input value
  li.appendChild(document.createTextNode(newItem));

  // create del button element
  var deleteBtn = document.createElement('button');

  // add class to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // append button to li
  li.appendChild(deleteBtn);

  // append li to list
  itemList.appendChild(li);
}

// remove item function
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if (confirm('Are you sure')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filtering items
function filterItems(e){
  // converting text to lowercase
  var text = e.target.value.toLowerCase();
  // get list
  var items = itemList.getElementsByTagName('li');
  // convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
    });
}
