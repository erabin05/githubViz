export const errorMessageFor = (err) => {
    if (err === 404) {
        return"Can't find it"
    } else if (err === 403){
        return "Too much request, try again in an hour"
    } else {
        return "Don't know what this error is"
    }
}