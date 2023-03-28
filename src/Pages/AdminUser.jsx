import React,{useEffect, useState} from 'react';
import {storage, db} from '../config/firebase'
import {  getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import { v4 } from 'uuid';
import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore';
function AdminUser() {
    const [image,setImage] = useState(null)
  const [tag,setTag] = useState("")
  const [imageUrl,setImageUrl] = useState("")
   const [imageList,setImageList] = useState([]);
  const imageCollectionRef = collection(db,'mywork')
  const storeImage =  async () => {
    try{
      const fileName = `${tag}-${v4()}`
      const storageRef = ref(storage,'pictures/' + fileName)
      uploadBytes(storageRef,image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
            setImageUrl(url)
        } )
      })
    }
    catch(error){
      alert(`${error.message}`)
    }
  }

const uploadFiles =  async (e) => {
  e.preventDefault();
  try{
    storeImage(); 
    await addDoc(imageCollectionRef,{
        tag:tag,
        imageURL:imageUrl
      })
    }
    catch(error){
      console.log(error);
    }
}
  useEffect(() => {
    const getImageList =  async () => {
      try{
        const data = await getDocs(imageCollectionRef);
        const imageData = data.docs.map((doc) => ({
          ...doc.data(),
          id:doc.id,
        }))
        setImageList(imageData);
      }catch(error){
        console.log(error)
      }
    };
    getImageList();
  }, [imageCollectionRef]);
  const deleteImage = async (id) => {
    const imageDoc = doc(db,'mywork',id);
    await deleteDoc(imageDoc);
  } 
return (
<>
<div className="h-140 bg-third p-5 ">
    <h1 className='text-center text-lg text-first'>Upload Image and label </h1>
<form  className='flex flex-col justify-center items-center'>
  
<input type="file" onChange={(e) => setImage(e.target.files[0])}
className='p-5 rounded w-80 text-first' placeholder='Choose Image'/>
<input type="text" placeholder='Enter your tag' onChange={(e) => setTag(e.target.value)}
className='p-2 mb-2 text-third w-80 rounded'/>
<button onClick={uploadFiles} className='bg-second p-3 rounded text-third text-lg'>Upload</button>    
</form >
</div>
<div>
  <h1 className='text-4xl text-center'>Images for portfolio</h1>
<div className='flex flex-row flex-wrap  gap-6 mt-4 ml-10'>
{imageList.map((data) => (
  <div key={data.id} >
      <img src={data.imageURL} alt="" width="200"/>
      <button  className='bg-third p-2 text-first mt-2 mb-2 rounded 
    justify-self-center	'onClick={() => deleteImage(data.id)}>Delete</button>
     </div>
))}
</div>
</div>
</>
  )
}

export default AdminUser