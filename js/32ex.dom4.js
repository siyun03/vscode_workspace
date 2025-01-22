function attachEventListeners() {
    document.querySelectorAll('#fileList button').forEach(btn => {
        btn.onclick = e => {
            const btnType = e.target.dataset.btnType;

            if (btnType === '+') {
                addFileSelector();
            } else if (btnType === '-') {
                removeFileSelector(e.target);
            }
        };
    });
    document.querySelectorAll('#fileList input[type="file"]').forEach(input => {
        input.onchange = e => {
            displaySelectedFile(e.target.files[0]);
        };
    });
}
function addFileSelector() {
    const fileListDiv = document.getElementById('fileList');
    const newDiv = document.createElement('div');
    newDiv.style.marginTop = '10px';
    newDiv.innerHTML = `
        <input type="file">
        <button data-btn-type="+">+</button>
        <button data-btn-type="-">-</button>
    `;
    fileListDiv.appendChild(newDiv);
    attachEventListeners();
}
function removeFileSelector(button) {
    const fileSelectorDiv = button.parentElement;
    fileSelectorDiv.remove();
}
function displaySelectedFile(file) {
    if (file) {
        const nameList = document.querySelector('#nameList');

        if (!nameList) {
            console.error('nameList 요소를 찾을 수 없습니다.');
            return;
        }
        const li = document.createElement('li');
        li.textContent = file.name;
        nameList.appendChild(li);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    attachEventListeners();
});
