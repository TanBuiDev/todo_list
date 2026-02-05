const STORAGE_KEY = 'todo_app';

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function load() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}
