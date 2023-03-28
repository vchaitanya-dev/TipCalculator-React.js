import { NotificationContainer } from "react-notifications";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {collection,getDocs} from 'firebase/firestore'
import {db}  from './config/firebase'
import { useEffect, useState } from "react";
function App() {
  const [info,setInfo] =  useState([])
  const imageCollectionRef = collection(db,'mywork');
 useEffect(() =>  {
  const getData = async () => {
    try{
      const data = await getDocs(imageCollectionRef);
      const imageInfo = data.docs.map((doc) => ({
          ...doc.data(),
          id:doc.id,
      }))
      setInfo(imageInfo)
    }
    catch(error){
      console.log(error)
    }
  }
  getData();
 },[imageCollectionRef])
 return (
<>
<NotificationContainer />
<Header />
<div className="flex flex-wrap ml-8 mt-10 ">
{info.map((doc) => (
  <div key={doc.id}>
    <img src={doc.imageURL} alt="" className="ml-8 mb-6 mt-2 object-scale-down" width="200"  height="200" />
  </div>
))}
</div>
<Footer />
</>
  );
}

export default App;

