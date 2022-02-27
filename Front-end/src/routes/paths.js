
const PATH_SETTER = (root, subLink) =>{
    return `${root}${subLink}`
}
const ROOT = '/'
const LOGIN = 'login'
const HOME = 'home'


export const PATH = {
    root : ROOT,
    login : LOGIN,
    home : {
        root : HOME,
        path : PATH_SETTER(ROOT, HOME)
    },
}








