import instance from "../Validator"

export default {
    getSingleContent(category, id) {
        return instance({
            url: 'api/content/'+category+"/"+id,
            method: 'get'
        })
    },
    getContentCategory(category, currentPage) {
        return instance({
            url: 'api/content/' + category+'?page='+(currentPage-1),
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
            url     : 'api/content/' + category,
            method  : 'post',
            data    : data
        })
    },
    putContent(data,id) {
        return instance({
            url     : 'api/content/'+data.category+'/'+id,
            method  : 'put',
            data    : data
        })
    },

    deleteContent(category, id) {
        return instance({
            url     : 'api/content/'+category+'/'+id,
            method  : 'delete'
        })
    },
}