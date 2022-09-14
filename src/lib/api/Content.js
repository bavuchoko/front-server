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
            url: 'api/content/' + category+'?page='+(currentPage),
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

    addReply(category, id, data){
        return instance({
            url     : 'api/content/'+category+'/'+id+'/reply',
            method  : 'post',
            data    : data
        })
    },
    deleteReply(category, contendId, replyId){
        return instance({
            url     : 'api/content/'+category+'/'+contendId+'/reply/'+replyId,
            method  : 'delete'
        })
    },

}