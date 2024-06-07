import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { Dimensions } from 'react-native';
// import Colors from '../Shared/Colors';
import { Button } from 'react-native';
import ProgressBar from '../Components/ProgressBar';
// import Services from '../Shared/Services';
// import GlobalApi from '../Shared/GlobalApi';
import { AuthContext } from '../Context/AuthContext';


export default function CourseChapter() {
    const navigation = useNavigation();
    const param = useRoute().params;
    const [chapter, setChapter] = useState([])
    const [run, setRun] = useState(false);
    const [progress, setProgress] = useState(0);
    const { userData, setUserData } = useContext(AuthContext);
    let chapterRef;

    // useEffect(()=>{

    //     setProgress(0);
    //     setChapter(param.courseContent.Content)

    // },[])
    // const onClickNext=(index)=>{
    //     setRun(false);
    //     setProgress(index+1/chapter.length)
    //     try{
    //         chapterRef.scrollToIndex({animated:true,index:index+1})  
    //     }
    //     catch(e)
    //     {   
    //         let coursePro;
    //         const data={
    //             data:{
    //                 uid:userData.id,
    //                 courseId:param.courseId,
    //                 courseContentId:param.courseContent.id
    //             }
    //         }

    //         GlobalApi.setCourseProgress(data).then(resp=>{
    //             navigation.navigate({
    //               name:'course-detail' ,
    //               params:{courseContentId:param.courseContent.id},
    //               merge:true 
    //             })
    //         })


    //     }
    // }
    return (
        <View>
            <Text>Hello from course chapter</Text>
        </View>
        // <View style={{padding:20,paddingTop:50,flex:1}}>
        //   <TouchableOpacity onPress={()=>navigation.goBack()}>
        //     <Ionicons name="arrow-back-sharp" size={24} color="black" />
        //     </TouchableOpacity>
        //     <ProgressBar progress={progress} />
        //     <FlatList
        //     data={chapter}
        //     horizontal={true}
        //     pagingEnabled
        //     ref={(ref)=>{
        //         chapterRef=ref
        //     }}
        //     renderItem={({item,index})=>(
        //         <View  style={{width:Dimensions.get('screen').width*0.85,
        //         marginRight:15,padding:10}}>
        //             <Text style={{fontSize:18,fontWeight:'bold'}}>{item.name}</Text>
        //             <Text>{item.description}</Text>
        //            {item.input!=''?
        //            <View>
        //            <View  style={{backgroundColor:"#09c",
        //             padding:20,borderRadius:10}}>
        //                 <Text style={{color:"#09c"}}>{item.input}</Text>
        //             </View>
        //             <TouchableOpacity style={{backgroundColor:"#09c",width:60,
        //             padding:5,borderRadius:5,
        //             marginTop:10,display:'flex',flexDirection:'row'
        //             }} onPress={()=>setRun(true)}>
        //                  <Ionicons name="play-circle" size={20}
        //          color={"#fff"} />
        //                         <Text style={{ textAlign: 'center', marginLeft: 5, color: "#fff" }}>Run</Text>
        //             </TouchableOpacity>
        //             </View>:null}
        //            {run? <View style={{marginTop:15}}>
        //                 <Text style={{fontWeight:'bold',}} >Output</Text>
        //                 <View style={{backgroundColor:"#000",
        //             padding:20,borderRadius:10,marginTop:10}}>
        //                 <Text style={{color:"#fff"}}>
        //                     {item.output}</Text>
        //             </View>
        //             </View>:null}
        //            {index+1!=chapter.length? <TouchableOpacity 
        //             onPress={()=>onClickNext(index)} 
        //                 style={{backgroundColor:Colors.primary,
        //             padding:10,borderRadius:7,position:'absolute',bottom:0,
        //             width:'110%'}}>
        //                 <Text style={{ textAlign: 'center', color: "#fff" }}>Next</Text>
        //             </TouchableOpacity>:
        //             <TouchableOpacity 
        //             onPress={()=>onClickNext(index)} 
        //                     style={{
        //                         backgroundColor: "#0e0",
        //             padding:10,borderRadius:7,position:'absolute',bottom:0,
        //             width:'110%'}}>
        //                     <Text style={{textAlign:'center',color:"#fff"}}>Finish</Text>
        //             </TouchableOpacity>}

        //         </View>
        //     )}
        //     />


        // </View>
    )
}