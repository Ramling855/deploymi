import axios from 'axios'
import {  Space, Table, Tag ,Input} from 'antd';
import React,{useEffect,useState} from 'react';
import { Col, Row } from 'antd';
import { Button, Modal } from 'antd';


const Home = () => {
    const [data,setData] = useState([])
    const [state,setState] = useState('');
  
    const [search, setSearch] = useState('')
    
   
    const getData = async ()=>{
        try {
              const headers ={
                 token : JSON.parse(localStorage.getItem('token') )  
            }
            const res = await axios.get(`https://banduraj-app.herokuapp.com/api/show/?name=${search}`,{
               headers:headers
              
            });
            console.log(res)
            if(res.data.msg){
              return   setState(res.data.msg)
            }
             setData(res.data.users)
           
            
        } catch (error) {
           console.log(error)  
        }

    }
  

    useEffect(()=>{
        getData()
    },[search])

  

        const columns = [
          {
            title:'Your Details',
            dataIndex: '_id',
            key:'_id',
            render:(text,row)=><img style={{width:'100px'}} src={row.profilePic}/>
          },
          {
            
            dataIndex: 'email',
            key: '_id',
            render:(text,row)=><>
                 <li>{row.name}</li>
                 <li>{row.mobile}</li>
                 <li>{row.email}</li>

              </>
          },
          
         
      ];
      const columns2 = [
        {
          title:'Educational Details',
          dataIndex: '_id',
          key:'_id',
          render:(text,row)=><>
          <li>SSC: {row.SSC}%</li>
          <li>HSC:{row.HSC}%</li>
          <li>UG:{row.UG}%</li>

       </>
        },
        
        
       
    ];

  
  const changeHandler=(e)=>{
    setSearch(e.target.value)
  }


  return (
         <> 
               
       {state?  <h1 style={{margin:'10px'}}> {state}</h1>:
        <Row style={{marginTop:"20px"}}>
            <Col span={12} offset={6}>
             <input type='text'onChange={changeHandler} placeholder="search 'bk'"/>
            <Table  dataSource={data} columns={columns}
           />
            <Table  dataSource={data} columns={columns2}
           />
             </Col> 
             
            </Row>}
     </>
  )
}

export default Home
