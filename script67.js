document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);

    if (!name || !age) {
        alert('Please fill in all fields');
        return;
    }

    if (age < 18) {
        alert('Sorry! You must be 18 or above to register.');
        return;
    }

    alert(`Welcome aboard! 🎉\n${name} has been successfully registered.\nAge: ${age}`);
    this.reset();
});