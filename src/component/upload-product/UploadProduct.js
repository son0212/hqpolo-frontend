import axios from 'axios';
import { useContext } from 'react';
import { Product } from '../../context/ProductContext';
import 'bootstrap/dist/css/bootstrap.min.css';

import "../../Css/upload-product/UploadProduct.css";

const UploadProduct = ()=>{
  const state = useContext(Product);
  const onChangeValue = (e)=>{
    state.setInforProductBasic({...state.inforProductBasic,[e.target.name]: e.target.value});
  }
  const onChangeImg = (evt)=>{
    const formData = new FormData();
    formData.append('file',evt.target.files[0]);
		
		axios.post('http://localhost:4000/api/uploadfile',formData,{
			headers:{'content-type': "multipart/form-data"}
		}).then((res)=>{
		
      if(state.imgReplace){
        editPathFileUploaded(state.imgReplace,res.data.pathFileUploaded);
        state.setImgReplace(null);
      }else{
        	state.setPathFileUploaded([...state.pathFileUploaded,res.data.pathFileUploaded]);
      }
      if(state.pathFileUploaded.length === 9){
        alert("Mày đã chọn lượng ảnh tối đa(10)");
      }
		}).catch((err)=>{
			console.log(err.response.data.message);
		});
	}
  const removeImg = (e)=>{
    editPathFileUploaded(e.target.id);
  }
  const editPathFileUploaded = (id,replacement) =>{
    let listProduct = [...state.pathFileUploaded];
     axios.post("http://localhost:4000/api/remove-file",{
      removePath: listProduct[id]
    }).then((res)=>{
      console.log('success');
    }).catch((err)=>{
			console.log(err.response.data.message);
		});
    if(replacement){
      listProduct.splice(id,1,replacement);
    }else{
      listProduct.splice(id,1);
    }    
    state.setPathFileUploaded(listProduct);
  }
  const ChangeElseImg = (e)=>{
    state.setImgReplace(e.target.id);
  }

  const onSubmit = (e)=>{
    axios.post('http://localhost:4000/api/upload-product',{
      name:state.inforProductBasic.name,
      price:state.inforProductBasic.price,
      priceNew:state.inforProductBasic.newPrice,
      dateUse:state.inforProductBasic.dateUse,
      linkVideoDemo:state.inforProductBasic.link,
      imgDemo:state.pathFileUploaded,
      moreInfor: "etc",
      mainInforProduct:"etc",
      descript: "etc",
      tutorialProtect:"etc"
    }).then((res)=>{
      window.location.reload(false)
		}).catch((err)=>{
			console.log(err.response.data.message);
		});
    e.preventDefault();
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 name">
          <label className="label-of-upload-product" for="name">Name:</label>
          <input id="name" onChange={onChangeValue} type="text" name="name"  placeholder="Name Product"></input>
        </div>
        
        <div className='col-sm-12 price-and-date-use'>
          <div>
            <label className="label-of-upload-product" for="price">Price:</label>
            <input type="text" onChange={onChangeValue} name="price" id="price" ></input>
          </div>
          <div>
            <label className="label-of-upload-product" for="new-price">New Price:</label>
            <input type="text" onChange={onChangeValue} name="newPrice" id="new-price" ></input>
          </div>
          <div>
            <label className="label-of-upload-product" for="date-use">Date Use:</label>
            <input type="text" onChange={onChangeValue} id="date-use" name="dateUse" ></input>
          </div>
          
          
        </div>
        <input type="file" id="upload-img" className="col-sm-2" name="img" alt="upload-img" accept="image/*" onChange={onChangeImg} ></input>
        <div className="show-img col-sm-10">
          <div className="box-img">
              {
            state.pathFileUploaded[0]?
            <div className="img-upload" style={{backgroundImage:`url('${state.pathFileUploaded[0]}')`}}>
              <div onClick={removeImg} id="0" className="icon-delete" alt="remove image"></div>
              <label for="upload-img">
                <div id="0" className="change-img" onClick={ChangeElseImg} alt="choose else image" title='choose else image'></div>
              </label>
            </div>
            :null}</div>
          <div className="box-img">
            {state.pathFileUploaded[1]?
             <div className="img-upload" style={{backgroundImage:`url('${state.pathFileUploaded[1]}')`}}>
               <div onClick={removeImg} id="1" className="icon-delete" title="remove image"></div>
               <label for="upload-img">
                 <div id="1" alt="choose else image" title="choose else image" className="change-img" onClick={ChangeElseImg}></div>
                 </label>
              </div>
            :null}</div>
          <div className="box-img">{state.pathFileUploaded[2]? <div className="img-upload" style={{backgroundImage:`url('${state.pathFileUploaded[2]}')`}}><div onClick={removeImg} id="2" className="icon-delete" title="remove image"></div><label for="upload-img"><div id="2" alt="choose else image" title="choose else image" className="change-img" onClick={ChangeElseImg}></div></label></div>:null}</div>
          <div className="box-img">{state.pathFileUploaded[3]? <div className="img-upload" style={{backgroundImage:`url('${state.pathFileUploaded[3]}')`}}><div onClick={removeImg} id="3" className="icon-delete" title="remove image"></div><label for="upload-img"><div id="3" alt="choose else image" title="choose else image" className="change-img" onClick={ChangeElseImg}></div></label></div>:null}</div>
          <div className="box-img">{state.pathFileUploaded[4]? <div className="img-upload" style={{backgroundImage:`url('${state.pathFileUploaded[4]}')`}}><div onClick={removeImg} id="4" className="icon-delete" title="remove image"></div><label for="upload-img"><div id="4" alt="choose else image" title="choose else image" className="change-img" onClick={ChangeElseImg}></div></label></div>:null}</div>
          <div className="box-img">{state.pathFileUploaded[5]? <div className="img-upload" style={{backgroundImage:`url('${state.pathFileUploaded[5]}')`}}><div onClick={removeImg} id="5" className="icon-delete" title="remove image"></div><label for="upload-img"><div id="5" alt="choose else image" title="choose else image" className="change-img" onClick={ChangeElseImg}></div></label></div>:null}</div>
          <div className="box-img">
            {state.pathFileUploaded[6]? 
            <div className="img-upload" style={{backgroundImage:`url('${state.pathFileUploaded[6]}')`}}>
              <div onClick={removeImg} id="6" className="icon-delete" title="remove image"></div>
              <label for="upload-img">
                <div id="6" alt="choose else image" title="choose else image" className="change-img" onClick={ChangeElseImg}></div>
              </label>
            </div>:null}</div>
          <div className="box-img">{state.pathFileUploaded[7]? <div className="img-upload" style={{backgroundImage:`url('${state.pathFileUploaded[7]}')`}}><div onClick={removeImg} id="7" className="icon-delete" title="remove image"></div><label for="upload-img"><div id="7" alt="choose else image" title="choose else image" className="change-img" onClick={ChangeElseImg}></div></label></div>:null}</div>
          <div className="box-img">{state.pathFileUploaded[8]? <div className="img-upload" style={{backgroundImage:`url('${state.pathFileUploaded[8]}')`}}><div onClick={removeImg} id="8" className="icon-delete" title="remove image"></div><label for="upload-img"><div id="8" alt="choose else image" title="choose else image" className="change-img" onClick={ChangeElseImg}></div></label></div>:null}</div>
          <div className="box-img">{state.pathFileUploaded[9]? <div className="img-upload" style={{backgroundImage:`url('${state.pathFileUploaded[9]}')`}}><div onClick={removeImg} id="9" className="icon-delete" title="remove image"></div><label for="upload-img"><div id="9" alt="choose else image" title="choose else image" className="change-img" onClick={ChangeElseImg}></div></label></div>:null}</div>
        </div>
        <div className="col-sm-12 vd-demo">
          <div className="upload">
            <label className="label-of-upload-product" for="upload-vd">Upload:</label>
            <input type="file" accept='video/*' id="upload-vd" name="upload-vd" placeholder="linkVideoDemo(upload)"></input>
          </div>
          <div className="link">
            <label className="label-of-upload-product" for="link">Link Video:</label>
            <input onChange={onChangeValue} id="link" name="link" placeholder='Paste Your Link To This Box'></input>
          </div>
          
        </div>
        
        <textarea rows="5" cols="70" className="col-sm-6" placeholder="moreInfor"></textarea>
        <textarea rows="5" cols="70" className="col-sm-6" placeholder="descript"></textarea>
        <textarea rows="5" cols="70" className="col-sm-12" placeholder="tutorialProtect"></textarea>
        <div className="btn-submit">
          <button onClick={onSubmit} className="btn-primary" type="button">Create!!!</button>
        </div>
        
      </div>
    </div>
  )
}


export default UploadProduct;