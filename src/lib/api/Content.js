import instance from "../Validator"

export default {
    getSingleContent(category, id) {
        return instance({
            url: 'api/content/'+category+"/"+id,
            method: 'get'
        })
    },
    getContentCategory(category) {
        console.log(category)
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
    postContent(category, data) {
        return instance({
            url: 'api/content/' + category,
            method: 'post',
            data : data
        })
    },
    test() {
        return instance({
            url: 'api/content/sagong',
            method: 'get'
        })
    },
}