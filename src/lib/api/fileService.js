import axios from "axios";
import storage from "../storage";

class fileService{


    imageUpload(blob){
        let formData = new FormData();
        formData.append('file', blob);
        return axios('api/content/image',{
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
                        // console.log(res)
                        // console.log(res.data)
                        // console.log(res.data["url"])
                    }
            );
    }


}
export default new fileService;