const allPanelElement = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

allPanelElement.forEach((panel) => panel.addEventListener('click', toggleOpen));

function toggleActive(e) {
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

allPanelElement.forEach((panel) => panel.addEventListener('transitionend', toggleActive));