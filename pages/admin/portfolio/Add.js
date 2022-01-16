import React, {useEffect, useState, useRef} from 'react'
import LoadCss from '../../../components/LoadCss'
import axios from 'axios';
import * as Session from '../../../storage/storage'
import * as Constants from '../../../constants/constants'


function Add() {
    const [thumbnail, setThumbnail] = useState('');
    const [image, setImage] = useState(null)
    const [value, setValue] = useState({title:'',short_description:'',description:'',category:'',url:'',author:''})
    
    useEffect(() => {
       
    },[])

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setThumbnail(e.target.files[0]);
        }
      };

    const handleChange = name =>event =>{
        setValue({...value, [name]:event.target.value})
    }

    const handleSubmit = () => {

        var json ={
            title : value.title,
            short_description : value.short_description,
            description : value.description,
            category : value.category,
            url : value.url,
            author : value.author,
            image : image

        }

        console.log('json', json);
        var data = new FormData();
        data.append('_id', 'HOSP'+new Date().getTime())
        data.append('title', json.title)
        data.append('short_description', json.short_description)
        data.append('description', json.description)
        data.append('category', json.category)
        data.append('url', json.url)
        data.append('author', json.author)
        data.append('image', json.thumbnail_image)

        // axios.post(Constants.addTimelines, data, {
        //     headers: {'content-type': 'multipart/form-data'}
        //   })
        //     .then((response) => {
        //       console.log(response.data);
        //       if (response.status === 200) {
        //         alert('Timeline Saved Successfully');
        //       }
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }


    return (
        <>
        <LoadCss/>
        <div className="container-fluid">
          <h1>Add Portfolio</h1>
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
                <label htmlFor="title">Short Discription </label>
                <input type="text" name="heading" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" onChange={handleChange('short_description')}/>
                <small id="emailHelp" className="form-text text-muted">Title for the Timeline Image</small>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <label htmlFor="title">Discription</label>
                <input type="text" name="heading" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" onChange={handleChange('description')}/>
                <small id="emailHelp" className="form-text text-muted">Title for the Timeline Image</small>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <label htmlFor="title">Category</label>
                <input type="text" name="heading" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" onChange={handleChange('category')}/>
                <small id="emailHelp" className="form-text text-muted">Title for the Timeline Image</small>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <label htmlFor="title">URL</label>
                <input type="text" name="heading" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" onChange={handleChange('url')}/>
                <small id="emailHelp" className="form-text text-muted">Title for the Timeline Image</small>
              </div>
            </div>
            <div className="col-3">
              <div className="form-group">
                <label htmlFor="title">Author</label>
                <input type="text" name="heading" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" onChange={handleChange('author')}/>
                <small id="emailHelp" className="form-text text-muted">Title for the Timeline Image</small>
              </div>
            </div>
            <div className="col-3">
                <div className={`form-group `}>
                    <label htmlFor="password" className={`w-100`}>Image<span className="danger">*</span></label>
                    <input type="file" name="image" onChange={imageChange} accept="image/*"/>
                    <div className="mt-2"> {thumbnail ? <img id="thumbnail" className="" src={URL.createObjectURL(thumbnail)} style={{width : 150, height : 150}}/> : ''}  </div>
				</div>
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
    </>
    )
}

export default Add
