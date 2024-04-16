document.addEventListener('DOMContentLoaded', () => {
    let selectedRoom = null;

    const rooms = document.querySelectorAll('.room');
    rooms.forEach(room => {
        room.addEventListener('click', function() {
            if (selectedRoom) {
                selectedRoom.classList.remove('selected');
            }
            selectedRoom = this;
            selectedRoom.classList.add('selected');
        });
    });

    document.getElementById('increment').addEventListener('click', () => {
        if (selectedRoom) {
            let count = parseInt(selectedRoom.querySelector('.counter').textContent) || 0;
            selectedRoom.querySelector('.counter').textContent = count + 1;
        }
    });

    document.getElementById('decrement').addEventListener('click', () => {
        if (selectedRoom) {
            let count = parseInt(selectedRoom.querySelector('.counter').textContent) || 0;
            if (count > 0) {
                selectedRoom.querySelector('.counter').textContent = count - 1;
            }
        }
    });

    document.getElementById('reset').addEventListener('click', () => {
        if (selectedRoom) {
            selectedRoom.querySelector('.counter').textContent = 0;
        }
    });
});
