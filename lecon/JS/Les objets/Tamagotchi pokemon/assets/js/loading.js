window.onload = function (){
    // modification du css
    let loading_screen = document.getElementById("imgLoad");
    let loading = document.querySelector('.loading');
    let backLoading = document.querySelector('.back_load');
    loading.style.display = 'block';
    backLoading.style.display = 'block';
    loading_screen.style.display = ("block");
    // loading screen
    setTimeout(function () {
        loading.style.display = 'none';
        backLoading.style.display = 'none';
        loading_screen.style.display = "none";
    }, 5000);
}