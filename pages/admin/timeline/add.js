import React, { useEffect, useState } from 'react';
import { useCollection } from "react-firebase-hooks/firestore";
import { setDoc } from 'firebase/firestore';
import DatePicker from "react-datepicker";
import Image from 'next/image'
import "react-datepicker/dist/react-datepicker.css";
import {DefaultFirebase} from "../../../firebase/clientApp";
import storage from '../../../firebase/clientApp';
import LoadCss from '../../../components/LoadCss';



const addtimeline = () => {
    
    const [value, setValue] = useState({name : '', time : ''})
    const [time, onChange] = useState(new Date());
    const [data, setData] = useState(null)
    const [thumbnail, setThumbnail] = useState('');
    var db = DefaultFirebase.db;
    var storage = DefaultFirebase.storage;
    var imageURL = '';
    useEffect(() => {
      loadTimeline()
    },[])

    

    const handleChange = name => event => {
        setValue({ ...value, [name]: event.target.value });
    };

    const handleDelete = async (id) => {
        var timelineRef = db.collection("timeline").where('id','==', id);
        timelineRef.get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            console.log();
            doc.ref.delete().then(()=>{alert('Delete successfully')});
          });
        });
    }

    const loadTimeline = async () => {
      const response = await db.collection("timeline").orderBy('created_at').get();
      const timelineData = response.docs.map(entry => ({
          id: entry.id,
          ...entry.data()
      }));

      setData(timelineData)
  }

    const upload = ()=>{
      var count = 0;
      var name = Date.now();
      const uploadTask = storage.ref(`/images/${name.toString()}`).put(thumbnail)
        uploadTask.on('state_changed', 
        (snapShot) => {
        console.log(snapShot)
        }, (err) => {
        console.log(err)
        }, () => {
        storage.ref('images').child(name.toString()).getDownloadURL()
        .then(fireBaseUrl => {
          if(fireBaseUrl){
            imageURL=fireBaseUrl;
            handleSubmit()
          }
        })
      })
    }

    const imageChange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        setThumbnail(e.target.files[0]);
      }
    };

    const handleSubmit = () => {
      var json = {
        id : 'hos'+new Date().getTime(),
        name : value.name,
        time : time.getTime(),
        image : imageURL,
        status : 'active',
        created_at : new Date().getTime()
      }

      var result = db.collection('timeline').add(json).then(() => {
        alert('Data has been saved');
      });
      
    }
    let timeline;
    if(data!==null){
        timeline = data.map((item, index)=>
            <tr key={index}>
              <td scope="col">{item.id}</td>
              <td scope="col">{item.name}</td>
              <td scope="col">{item.subtitle}</td>
              <td scope="col"><Image src={item.image} layout={'fixed'} width={100} height={100}/></td>
              <td scope="col">
                <label className="hover" onClick={() => handleDelete(item.id)}>Delete</label>
              </td>
            </tr>
        )
    }


    return ( <>
        <LoadCss/>
        <div className="container-fluid">
          <h1>Add Timeline</h1>
          <div>
              <div className={`form-group `}>
                <label htmlFor="name" className={`w-100`}>Title<span className="danger">*</span></label>
                <input type="text" id="name" onChange={handleChange('name')} value={value.name} />
							</div>
              <div className={`form-group `}>
                <label htmlFor="password" className={`w-100`}>Image<span className="danger">*</span></label>
                <input type="file" onChange={imageChange} accept="image/*"/>
                <div className="mt-2"> {thumbnail ? <img id="thumbnail" className="" src={URL.createObjectURL(thumbnail)} style={{width : 100, height : 100}}/> : ''}  </div>
							</div>
              <div className={`form-group `}>
                <label htmlFor="password" className={`w-100`}>Select Date<span className="danger">*</span></label>
                <DatePicker selected={time} onChange=
                {(date) => onChange(date)}  dateFormat="MMM-yyyy" showMonthYearPicker/>
							</div>
              <button onClick={upload}>Add Todo</button>
          </div>
          <hr/>
          <table className="table" style={{width: '100%'}}>
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Subtitle</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
                {timeline}
            </tbody>
          </table>
        </div>
        
    </> );
}
 
export default addtimeline;