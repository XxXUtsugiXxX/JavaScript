const USERS = [
    {id : 1, name: "ADMIN", email: "admin@poke.com", role: "admin"},
    {id : 2, name: "Ash", email: "ash@poke.com", role: "trainer"},
    {id : 3, name: "Misty", email: "misty@poke.com", role: "trainer"}
];

export function login(email){
    const user = USERS.find(u => u.email === email);
    if (!user) throw new ERROR("Credenciales inválidas");

    localStorage.setItem("user", JSON.stringify(user));
    return user
}

export function getCurrentUser(){
    return JSON.parse(localStorage.getItem("user"));
}

export function logout(){
    localStorage.removeItem("user")
}