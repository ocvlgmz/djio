export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('api', msg)
    // app.$api = api
}
const msg = {
    getDate() {
        let hello
        return hello = 'msg injection working!'        
    }
}