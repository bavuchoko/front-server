import instance from "../Validator"

export default {
    getSingleContent(category, id) {
        return instance({
            url: 'api/content/'+category+"/"+id,
            method: 'get'
        })
    },
    getContentCategory(category) {
        return instance({
            url: 'api/content/' + category,
            method: 'get'
        })
    },
    getContentCategoryRecent(category) {
        return instance({
            url: 'api/content/recent/' + category,
            method: 'get'
        })
    },

    test() {
        return instance({
            url: 'api/content/sagong',
            method: 'get'
        })
    },
}