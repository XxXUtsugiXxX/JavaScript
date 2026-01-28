import { state } from "./state";
import { getCurrentUser } from "./auth";

function hideAllViews(){
    document.querySelectorAll(".view")
    .forEach(v => v.classList.add("hidden"));
}

function render(viewId) {
    hideAllViews();
    document.getElementById(viewId).classList.remove("hidden");
}
function init(){
    const user = getCurrentUser();
    if (!user){
        render("login-view");
        return;
    }

    state.user = user;

    if (user.role === "admin"){
        render("admin-dashboard")
    }else{
        render("trainer-dashboard")
    }
}
init();