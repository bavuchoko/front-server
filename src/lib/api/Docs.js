import instance from "../Validator"

export default {

    getApiDocs(type) {
        return instance({
            url     : 'docs/api.html',
            method  : 'get'
        })
    },
}