import React, { useState } from 'react'
import imageCompression from 'browser-image-compression';
import LoadCss from '../components/LoadCss';
import S3 from 'react-aws-s3';



const testImage = () => {

    const config = {
        bucketName: 'houseofsinghimages',
        dirName: 'photos', /* optional */
        region: 'ca-central-1',
        accessKeyId: 'AKIAZ7SQBD2PGSPWHHWD',
        secretAccessKey: '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',
    }

    const [afterCompress, setAfterCompress] = useState(null)
    const [beforeCompress, setBeforeCompress] = useState(null)
    var url = ''

    const ReactS3Client = new S3(config);

    const handleImageUpload = (event) => {

        var imageFile = event.target.files[0];
        console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
        console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
        
        setBeforeCompress(URL.createObjectURL(imageFile));


        var options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 450,
          useWebWorker: true
        }
        imageCompression(imageFile, options)
          .then(function (compressedFile) {
            console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
            console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
            
            setAfterCompress(URL.createObjectURL(compressedFile))
            uploadFile(imageFile)
          })
          .catch(function (error) {
            console.log(error.message);
          });
      }

      const uploadFile = (imageFile) => {
          var fileName = new Date().getTime() + '.jpg'
        ReactS3Client.uploadFile(imageFile, fileName).then((data) => {
            console.log(data.location)
            url = data.location;
        }).catch((error) => {
            console.log('error', error);
        })
      }     

    return (
        <>
        <LoadCss/>
        <div>
            



            <input type="file" accept="image/*" onChange={(event)=>handleImageUpload(event)}/>
            <div className="row">
                <div className="col-6">
                    <label>Before Compress</label>
                    <img src={beforeCompress} className="w-100"/>
                </div>
                <div className="col-6">
                    <label>After Compress</label>
                    <img src={afterCompress} className="w-100"/>

                </div>
            </div>

           
            <br/><br/><br/>
            <div>
                <label>Image location : {url}</label>
            </div>
        </div>
        </>
    )
}

export default testImage
