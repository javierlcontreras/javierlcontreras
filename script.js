function init(buttonClicked) {
    var buttonClass = "navigation-button";
    var activeButtonClass = "navigation-button-active";

    var buttons = document.getElementsByClassName(buttonClass);
    
    for (let button of buttons) {
        if (button.id == buttonClicked) {
            button.classList.add(activeButtonClass);
        }
        else if (button.classList.contains(activeButtonClass))
            button.classList.remove(activeButtonClass);
    }

}
