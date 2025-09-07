// Simple To-Do List persisted in localStorage
// Keys
const STORAGE_KEY = 'todo-items-v1';

// State
let items = [];

// DOM refs
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const clearAllBtn = document.getElementById('clear-all');
const emptyState = document.getElementById('empty-state');

// Utils
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
// Load items from localStorage
function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    items = raw ? JSON.parse(raw) : [];
  } catch (e) {
    items = [];
  }
}

function createItem(text) {
  return { id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()), text, done: false, createdAt: Date.now() };
}

function render() {
  list.innerHTML = '';
  if (!items.length) {
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;

  for (const item of items) {
    const li = document.createElement('li');
    if (item.done) li.classList.add('done');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.done;
    checkbox.setAttribute('aria-label', 'Mark task complete');
    checkbox.addEventListener('change', () => {
      item.done = checkbox.checked;
      save();
      render();
    });

    const span = document.createElement('span');
    span.textContent = item.text;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove';
    removeBtn.addEventListener('click', () => {
      items = items.filter(x => x.id !== item.id);
      save();
      render();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeBtn);
    list.appendChild(li);
  }
}

// Event bindings
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  items.push(createItem(text));
  input.value = '';
  save();
  render();
});

clearAllBtn?.addEventListener('click', () => {
  if (!items.length) return;
  if (!confirm('Clear all tasks?')) return;
  items = [];
  save();
  render();
});

// Init
load();
render();
