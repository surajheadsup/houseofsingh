import React, { useState, useEffect } from "react";
import imageCompression from 'browser-image-compression';
import DatePicker from "react-datepicker";
import Image from 'next/image'
import "react-datepicker/dist/react-datepicker.css";
import LoadCss from '../../../components/LoadCss';
import axios from 'axios';
import * as Session from '../../../storage/storage'
import * as Constants from '../../../constants/constants'


const Addtimeline = () => {
  const [time, onChange] = useState(new Date());
  const [thumbnail, setThumbnail] = useState('');
  const [options, setOptions] = useState({maxSizeMB : 1, maxWidthOrHeight : 450, useWebWorker : true});
  const [name, setName] = useState('')
  const [afterCompress, setAfterCompress] = useState(null)
  const [beforeCompress, setBeforeCompress] = useState(null)
  const [image, setImage] = useState(null)
  const [thumbnailImage, setThumbnailImage] = useState(null)
  const [value, setValue] = useState({title :'', sub_title : ''})
  const [process, setProcess] = useState(0)

  useEffect(() => {

  },[thumbnail, afterCompress, beforeCompress, process])

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setThumbnail(e.target.files[0]);
    }
  };

  const handleChange = name =>event =>{
    setValue({...value, [name]:event.target.value})
  }

  const ImageCompression = () => {
    
    var imageFile = thumbnail;
    if(imageFile){
      setProcess(1)
        setName(imageFile.name)
        setBeforeCompress(URL.createObjectURL(imageFile));

        var thumbnailOption = {
          maxSizeMB: 0.4,
          maxWidthOrHeight: 400,
          useWebWorker: true
        }
        var imageOption = {
          maxSizeMB: 1,
          maxWidthOrHeight: 600,
          useWebWorker: true
        }

        imageCompression(imageFile, thumbnailOption)
          .then(function (thumbnailFile) {
            var convertThumbnailfile = new File([thumbnailFile], imageFile.name,{type: imageFile.type});

            console.log('convertThumbnailfile', convertThumbnailfile);
            
            setAfterCompress(URL.createObjectURL(thumbnailFile))
            setThumbnailImage(convertThumbnailfile)

            imageCompression(imageFile, imageOption).then(function (mainImageFile) {
              var convertMainfile = new File([mainImageFile], imageFile.name, {type: imageFile.type});

              console.log('convertMainfile', convertMainfile);

              setAfterCompress(URL.createObjectURL(mainImageFile))
              setImage(convertMainfile)  
              setProcess(0)

            }).catch(function (error) {
              console.log(error);
            })

          })
          .catch(function (error) {
            console.log(error.message);
          });



        
    }else{
      alert('Select Image First')
    }
  }

  const handleSubmit = () => {
    var filter_date = Session.getMonthYear(time.getTime());
    var json = {
      _id : 'HOST'+new Date().getTime(),
      heading : value.title,
      sub_heading : value.sub_title,
      timeline_date : time.getTime(),
      image : image,
      thumbnail_image : thumbnailImage,
      filter_date : filter_date,
      
      status  : 1
    }
    console.log(json);
    var isValid = validate(json);
    if(isValid===true){

      var data = new FormData();
      data.append('_id', 'HOST'+new Date().getTime())
      data.append('heading', json.heading)
      data.append('sub_heading', json.sub_heading)
      data.append('timeline_date', json.timeline_date)
      data.append('filter_date', json.filter_date)
      data.append('image', json.image)
      data.append('thumbnail_image', json.thumbnail_image)
      data.append('status', json.status)

      axios.post(Constants.addTimelines, data, {
        headers: {'content-type': 'multipart/form-data'}
      })
        .then((response) => {
          console.log(response.data);
          if (response.status === 200) {
            alert('Timeline Saved Successfully');
          }
        })
        .catch((error) => {
            console.error(error);
        });

    }else{
      alert(isValid)
    }
  }
  const validate = (json) => {
    if(json.heading===''){
      return 'Title Cannot be null'
    }else if(json.sub_heading===''){
      return 'Sub Title Cannot be null'
    }else if(json.timeline_date===''){
      return 'Date Cannot be null'
    }else if(json.image===null){
      return 'Image Compression did not, kindly refresh the page and add again'
    }else if(json.thumbnail_image===null){
      return 'Image Compression did not, kindly refresh the page and add again'
    }else{
      return true;
    }

  }
    

    return ( <>
        <LoadCss/>
        <div className="container-fluid">
          <h1>Add Timeline</h1>
          <div className="row">
            <div className="col-3">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="heading" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" onChange={handleChange('title')}/>
                <small id="emailHelp" className="form-text text-muted">Title for the Timeline Image</small>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <label htmlFor="title">Sub Title</label>
                <input type="text" name="sub_heading" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Sub Title"  onChange={handleChange('sub_title')}/>
                <small id="emailHelp" className="form-text text-muted">Sub Title for the Timeline Image</small>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <label htmlFor="title">Select Timeline Date</label>
                <DatePicker name="timeline_date" selected={time } onChange=
                {(date) => onChange(date)} className="form-control" dateFormat="MMM-yyyy" showMonthYearPicker/>
                <small id="emailHelp" className="form-text text-muted">Select Date from calender</small>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className={`form-group `}>
                <label htmlFor="password" className={`w-100`}>Image<span className="danger">*</span></label>
                <input type="file" name="image" onChange={imageChange} accept="image/*"/>
                <div className="mt-2"> {thumbnail ? <img id="thumbnail" className="" src={URL.createObjectURL(thumbnail)} style={{width : 150, height : 150}}/> : ''}  </div>
							</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              
              {
                process === 1 ? 
                  <button className="btn btn-light" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    &nbsp; Image Compression Started, Kindly wait...
                  </button>
                  
                :
                  <div className={`form-group `}>
                    <button type="button" className="btn btn-warning" onClick={() => ImageCompression()}>Compress Image</button>
                  </div>

              }
            </div>
          </div>

          <div className="row">
            <div className="col-6">
                <label className="w-100">Before Compress</label>
                <img src={beforeCompress} className="w-50"/>
            </div>
            <div className="col-6">
                <label className="w-100">After Compress</label>
                <img src={afterCompress} className="w-50"/>
            </div>
          </div>


          <div className="row">
            <div className="col-12">
              <div className={`form-group mt-5`}>
                <button type="button" className="btn btn-success" onClick={() => handleSubmit()}>Save Timeline</button>
							</div>
            </div>
          </div>
        </div>
        
    </> );
}
 
export default Addtimeline;