import instance from "../Validator";

export default{


    imageUpload(blob){
        let formData = new FormData();
        formData.append('file', blob);
        console.log("Aaa")
        return instance('api/content/image',{
            method: 'POST',
            data: formData,
            headers : {
                'Content-type' : 'multipart/form-data',
                'accept-charset' : 'UTF-8'
            }
        })
            .then(
                    res => {
                        return res.data
                        console.log(res)
                        console.log(res.data)
                        console.log(res.data["url"])
                    }
            );
    }


}