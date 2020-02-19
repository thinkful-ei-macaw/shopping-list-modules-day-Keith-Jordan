import item from './item.js';

const store = {
  items: [],
  hideCheckedItems: false
};


function findById(id) {
  return store.items.find(item => item.id);
}

function addItem(name) {
  try {
    item.validateName(name);
    store.items.push(item.create(name));
  } catch (error) {
}

function findAndToggleChecked(id) {
  let item = this.findById(id);
  if (item.checked === false) {
    item.checked = true;
  }
  else {
    item.checked = false;
  }
}

function findAndUpdateName(id, newName) {
  let item = this.findById(id);
  try {
    item.validateName(newName);
    store.items.push(item.create(newName));
  } catch (error) {
    console.log(`Cannot update name: ${error.message}`);
}

function findAndDelete(id) {
  this.items = this.items.filter(item => item.id !== id);
}

export default {
items: store.items,
hideCheckedItems: store.hideCheckedItems,
findAndDelete,
findAndUpdateName,
findAndToggleChecked,
addItem,
findById
};