import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Firebasekeys from "../../config";
import * as firebase from "firebase";
import "firebase/firestore";
import { SvgXml } from 'react-native-svg';
import styles from '../../config/styles';


let firebaseConfig = Firebasekeys;
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App({navigation}) {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('Lectures')
      .onSnapshot(querySnapshot => {
        const users = [];
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setUsers(users);
        setLoading(false);
      });
  
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const img = `<svg id="bd68eab2-97cb-49fc-9871-65ace3a0e319" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="738.41777" height="504.65117" viewBox="0 0 738.41777 504.65117"><path d="M956.00489,656.58984c-5.05211,17.52641-19.80364,29.79509-35.19135,40.21716q-3.22281,2.18327-6.44767,4.266c-.01456.00636-.02957.02-.04431.02649-.10344.06645-.20707.133-.30345.19991-.44371.286-.88758.57222-1.32761.855l.24171.10858s.23734.12621-.02233.02023c-.07729-.03232-.15825-.06135-.23538-.09387-8.93928-3.60535-18.03734-7.47639-24.88795-14.23041-7.10651-7.0136-11.25953-18.01413-7.41142-27.228A17.59237,17.59237,0,0,1,882.28,657.3121c.31213-.44666.64831-.87416.99832-1.29373a18.85591,18.85591,0,0,1,32.3856,5.72979c1.1305-10.52576-7.5488-19.34265-15.90135-25.84822-8.35623-6.50228-17.85126-13.58341-19.46674-24.05074-.90215-5.82388,1.123-11.46778,4.81223-15.99852.11422-.13766.22827-.27514.34591-.409a27.5185,27.5185,0,0,1,17.68718-9.48884c12.81321-1.33167,25.25927,5.4506,34.56778,14.35941C952.69087,614.6459,961.74815,636.66241,956.00489,656.58984Z" transform="translate(-230.79112 -197.67441)" fill="#f2f2f2"/><path d="M931.92069,633.66548a46.78,46.78,0,0,1,5.60443,12.36093,40.61926,40.61926,0,0,1,1.404,11.99679,52.04375,52.04375,0,0,1-6.81623,23.68462A74.90315,74.90315,0,0,1,920.81354,696.807q-3.22281,2.18327-6.44767,4.266c-.01456.00636-.02957.02-.04431.02649-.10344.06645-.20707.133-.30345.19991-.44371.286-.88758.57222-1.32761.855,0,0,.479.23479.21938.12881-.07729-.03232-.15825-.06135-.23538-.09387a41.40477,41.40477,0,0,0-13.249-35.65079A41.75936,41.75936,0,0,0,882.28,657.3121c.31213-.44666.64831-.87416.99832-1.29373a43.29621,43.29621,0,0,1,7.14663,2.70436,42.42388,42.42388,0,0,1,19.1818,18.49347,43.37374,43.37374,0,0,1,4.72252,23.80133c.36729-.33284.735-.67291,1.09168-1.00976,6.79289-6.33309,12.82633-13.60244,16.90958-21.99189a48.41635,48.41635,0,0,0,5.06984-22.90745c-.33324-8.65329-3.781-16.66846-8.77294-23.64614a101.34547,101.34547,0,0,0-19.2105-19.79842,115.15845,115.15845,0,0,0-23.89219-14.75057.828.828,0,0,1-.41668-1.06262.70423.70423,0,0,1,.34591-.409.61309.61309,0,0,1,.53242.02262c1.05391.48518,2.10049.977,3.13868,1.49007A116.46492,116.46492,0,0,1,913.18749,612.827C920.27028,618.86553,926.93832,625.76454,931.92069,633.66548Z" transform="translate(-230.79112 -197.67441)" fill="#fff"/><path d="M846.51084,197.67441h-607a8.72767,8.72767,0,0,0-8.71972,8.72V617.71439a8.72766,8.72766,0,0,0,8.71972,8.72h607a8.71244,8.71244,0,0,0,6.63037-3.06,2.0459,2.0459,0,0,0,.18995-.24,8.1667,8.1667,0,0,0,1.25-2.11005,8.50722,8.50722,0,0,0,.65966-3.31V206.39445A8.72954,8.72954,0,0,0,846.51084,197.67441Zm6.24024,420.04a6.17535,6.17535,0,0,1-1.03028,3.42005,6.44588,6.44588,0,0,1-2.35986,2.12,6.1843,6.1843,0,0,1-2.8501.69h-607a6.23757,6.23757,0,0,1-6.23-6.23V206.39445a6.23757,6.23757,0,0,1,6.23-6.23h607a6.23944,6.23944,0,0,1,6.24024,6.23Z" transform="translate(-230.79112 -197.67441)" fill="#3f3d56"/><rect x="1.24265" y="34.94921" width="621.95676" height="2.49281" fill="#3f3d56"/><circle cx="22.43155" cy="18.6961" r="7.47844" fill="#3f3d56"/><circle cx="43.93206" cy="18.6961" r="7.47844" fill="#3f3d56"/><circle cx="65.43257" cy="18.6961" r="7.47844" fill="#3f3d56"/><path d="M633.60325,373.03509a20.17421,20.17421,0,1,1,20.17421-20.17421A20.197,20.197,0,0,1,633.60325,373.03509Zm0-38.43649a18.26228,18.26228,0,1,0,18.26228,18.26228A18.283,18.283,0,0,0,633.60325,334.5986Z" transform="translate(-230.79112 -197.67441)" fill="#47bd77"/><path id="f1f767dc-4b88-4f47-9e03-7555881e6705" data-name="Path 395" d="M631.69882,360.192a1.9932,1.9932,0,0,1-1.19913-.39852l-.02145-.01609-4.51653-3.455a2.00711,2.00711,0,0,1,2.44234-3.18575l2.92544,2.24336,6.913-9.01874a2.00626,2.00626,0,0,1,2.81288-.37155l.00058.00044-.0429.05957.04407-.05957a2.00868,2.00868,0,0,1,.3711,2.81344L633.297,359.40686a2.00749,2.00749,0,0,1-1.59645.78273Z" transform="translate(-230.79112 -197.67441)" fill="#47bd77"/><path d="M691.328,373.03509a20.17421,20.17421,0,1,1,20.17421-20.17421A20.19676,20.19676,0,0,1,691.328,373.03509Zm0-38.43649a18.26228,18.26228,0,1,0,18.26228,18.26228A18.28279,18.28279,0,0,0,691.328,334.5986Z" transform="translate(-230.79112 -197.67441)" fill="#e6e6e6"/><path d="M698.58987,359.84112a1.2928,1.2928,0,0,1-1.8261,0l-4.841-4.841A.57612.57612,0,0,0,691.10892,355l-4.841,4.841a1.29142,1.29142,0,0,1-1.82635-1.82635l4.841-4.841a.57583.57583,0,0,0,.00012-.81359l-4.84126-4.84127a1.29116,1.29116,0,0,1,1.826-1.826l4.84127,4.84126a.57583.57583,0,0,0,.81359-.00012l4.841-4.841a1.29142,1.29142,0,0,1,1.82634,1.82635l-4.841,4.841a.57612.57612,0,0,0,.00012.81383l4.841,4.841A1.29276,1.29276,0,0,1,698.58987,359.84112Z" transform="translate(-230.79112 -197.67441)" fill="#e6e6e6"/><path d="M633.60325,437.0847a20.17421,20.17421,0,1,1,20.17421-20.17421A20.197,20.197,0,0,1,633.60325,437.0847Zm0-38.43649a18.26228,18.26228,0,1,0,18.26228,18.26228A18.283,18.283,0,0,0,633.60325,398.64821Z" transform="translate(-230.79112 -197.67441)" fill="#47bd77"/><path id="a793c70c-1521-4e6e-9b61-9683a9490971" data-name="Path 395" d="M631.69882,424.24159a1.99333,1.99333,0,0,1-1.19913-.39852l-.02145-.01609-4.51653-3.455a2.00711,2.00711,0,0,1,2.44234-3.18575l2.92544,2.24336,6.913-9.01874a2.00626,2.00626,0,0,1,2.81288-.37155l.00058.00044-.0429.05957.04407-.05957a2.00868,2.00868,0,0,1,.3711,2.81344L633.297,423.45647a2.00747,2.00747,0,0,1-1.59645.78273Z" transform="translate(-230.79112 -197.67441)" fill="#47bd77"/><path d="M691.328,437.0847a20.17421,20.17421,0,1,1,20.17421-20.17421A20.19676,20.19676,0,0,1,691.328,437.0847Zm0-38.43649a18.26228,18.26228,0,1,0,18.26228,18.26228A18.28279,18.28279,0,0,0,691.328,398.64821Z" transform="translate(-230.79112 -197.67441)" fill="#e6e6e6"/><path d="M698.58987,423.89073a1.29279,1.29279,0,0,1-1.8261,0l-4.841-4.841a.57612.57612,0,0,0-.81383-.00012l-4.841,4.841a1.29142,1.29142,0,0,1-1.82635-1.82635l4.841-4.841a.57583.57583,0,0,0,.00012-.81359l-4.84126-4.84126a1.29116,1.29116,0,0,1,1.826-1.826l4.84127,4.84127a.57583.57583,0,0,0,.81359-.00013l4.841-4.841a1.29142,1.29142,0,0,1,1.82634,1.82635l-4.841,4.841a.57614.57614,0,0,0,.00012.81384l4.841,4.841A1.29275,1.29275,0,0,1,698.58987,423.89073Z" transform="translate(-230.79112 -197.67441)" fill="#e6e6e6"/><path d="M633.60325,501.13431a20.17421,20.17421,0,1,1,20.17421-20.17421A20.197,20.197,0,0,1,633.60325,501.13431Zm0-38.43649a18.26228,18.26228,0,1,0,18.26228,18.26228A18.283,18.283,0,0,0,633.60325,462.69782Z" transform="translate(-230.79112 -197.67441)" fill="#e6e6e6"/><path id="b02a55c8-7c5c-410c-bde7-66a7a3b003d7" data-name="Path 395" d="M631.69882,488.2912a1.9932,1.9932,0,0,1-1.19913-.39852l-.02145-.01609-4.51653-3.455a2.00711,2.00711,0,0,1,2.44234-3.18575l2.92544,2.24337,6.913-9.01875a2.00626,2.00626,0,0,1,2.81288-.37154l.00058.00043-.0429.05958.04407-.05958a2.00869,2.00869,0,0,1,.3711,2.81345L633.297,487.50608a2.0075,2.0075,0,0,1-1.59645.78274Z" transform="translate(-230.79112 -197.67441)" fill="#e6e6e6"/><path d="M691.328,501.13431a20.17421,20.17421,0,1,1,20.17421-20.17421A20.19676,20.19676,0,0,1,691.328,501.13431Zm0-38.43649a18.26228,18.26228,0,1,0,18.26228,18.26228A18.28279,18.28279,0,0,0,691.328,462.69782Z" transform="translate(-230.79112 -197.67441)" fill="#e6e6e6"/><path d="M698.58987,487.94034a1.29278,1.29278,0,0,1-1.8261,0l-4.841-4.841a.57612.57612,0,0,0-.81383-.00013l-4.841,4.841a1.29142,1.29142,0,0,1-1.82635-1.82635l4.841-4.841a.57585.57585,0,0,0,.00012-.8136l-4.84126-4.84126a1.29116,1.29116,0,0,1,1.826-1.826l4.84127,4.84127a.57582.57582,0,0,0,.81359-.00013l4.841-4.841a1.29142,1.29142,0,0,1,1.82634,1.82634l-4.841,4.841a.57614.57614,0,0,0,.00012.81384l4.841,4.841A1.29275,1.29275,0,0,1,698.58987,487.94034Z" transform="translate(-230.79112 -197.67441)" fill="#e6e6e6"/><path d="M968.20888,702.0308h-381a1,1,0,0,1,0-2h381a1,1,0,1,1,0,2Z" transform="translate(-230.79112 -197.67441)" fill="#3f3d56"/><path d="M641.45015,429.11615a10.05577,10.05577,0,0,0,14.588-4.99449l35.71507,1.18876-9.70168-15.83386-32.42826,1.29863a10.11027,10.11027,0,0,0-8.17317,18.341Z" transform="translate(-230.79112 -197.67441)" fill="#ffb8b8"/><path d="M842.82394,506.476a10.05577,10.05577,0,0,0-2.36251-15.23727l7.42514-34.95492-17.28821,6.77877-4.40057,32.15452a10.11028,10.11028,0,0,0,16.62615,11.2589Z" transform="translate(-230.79112 -197.67441)" fill="#ffb8b8"/><polygon points="528.369 490.974 516.109 490.973 510.277 443.685 528.371 443.686 528.369 490.974" fill="#ffb8b8"/><path d="M762.28623,700.53238l-39.53051-.00147v-.5a15.38605,15.38605,0,0,1,15.38647-15.38623h.001l24.1438.001Z" transform="translate(-230.79112 -197.67441)" fill="#2f2e41"/><polygon points="588.369 490.974 576.109 490.973 570.277 443.685 588.371 443.686 588.369 490.974" fill="#ffb8b8"/><path d="M822.28623,700.53238l-39.53051-.00147v-.5a15.38605,15.38605,0,0,1,15.38647-15.38623h.001l24.1438.001Z" transform="translate(-230.79112 -197.67441)" fill="#2f2e41"/><path d="M760.43709,663.95608l-17.35474-.69434a4.51413,4.51413,0,0,1-4.31787-4.63379l4.88941-160.3789.31933-.11524c30.41626-11.00293,55.57837-10.17089,76.926,2.54l.23877.14258L824.067,657.01858a4.49958,4.49958,0,0,1-4.49927,4.585h-14.634a4.50994,4.50994,0,0,1-4.41577-3.63184L780.58284,556.56252a1.49976,1.49976,0,0,0-2.96069.10938L765.08406,660.002a4.52553,4.52553,0,0,1-4.46924,3.957C760.556,663.959,760.49642,663.958,760.43709,663.95608Z" transform="translate(-230.79112 -197.67441)" fill="#2f2e41"/><circle cx="546.52944" cy="135.36613" r="24.56103" fill="#ffb8b8"/><path d="M661.85388,423.31234a4.50562,4.50562,0,0,1-.00148-2.68558l2.54474-8.15344a4.51468,4.51468,0,0,1,4.097-3.15453l32.22309-1.42457,52.27834-26.79842a14.49652,14.49652,0,1,1,8.78475,27.63011L729.74227,427.3088a46.37353,46.37353,0,0,1-32.19507,5.3964l-32.26439-6.32137a4.505,4.505,0,0,1-3.00019-2.11226A4.45458,4.45458,0,0,1,661.85388,423.31234Z" transform="translate(-230.79112 -197.67441)" fill="#ccc"/><path d="M841.77523,483.84548a4.50565,4.50565,0,0,1-2.68308.11591l-8.25448-2.195a4.5147,4.5147,0,0,1-3.32625-3.95888l-2.7964-32.13312L795.7132,394.58553a14.49652,14.49652,0,1,1,27.23067-9.95418l19.93125,31.2171a46.37348,46.37348,0,0,1,6.76343,31.93586l-4.94075,32.50446a4.50493,4.50493,0,0,1-1.98249,3.08747A4.45456,4.45456,0,0,1,841.77523,483.84548Z" transform="translate(-230.79112 -197.67441)" fill="#ccc"/><path d="M750.45589,376.6578A41.8225,41.8225,0,0,1,783.993,363.09823q.616.03809,1.227.08594h.00049a41.73426,41.73426,0,0,1,30.15966,16.64648,42.362,42.362,0,0,1,7.52491,34.14453,132.361,132.361,0,0,0,3.49658,67.876l6.58887,20.459a4.49852,4.49852,0,0,1-4.042,5.87207l-33.68505,1.811-8.62012-14.88971v15.35315l-40.94092,2.20111c-.08154.00488-.1626.00684-.24316.00684a4.5,4.5,0,0,1-4.48389-4.86133l4.62744-57.38184-5.8042-38.97265A42.08923,42.08923,0,0,1,750.45589,376.6578Z" transform="translate(-230.79112 -197.67441)" fill="#ccc"/><path d="M794.39039,356.48754c-2.274,1.30843-11.26246,2.176-11.90277-.36826l-.01372-.0559c-.44576-1.86412-.0756-3.81068.05233-5.72308s-.05926-4.01326-1.36175-5.41937c-2.428-2.62114-6.74756-1.23165-10.25844-1.8944a8.66428,8.66428,0,0,1-6.74006-9.25291c.05-.3975.1284-.79545.21633-1.19315a6.67289,6.67289,0,0,0-6.92676-8.0813c-3.5481.20289-7.378,1.2779-10.31357-1.35011-2.2701-2.03224-2.82395-7.32236-1.82653-10.20134,1.67623-4.8383,12.4137-7.37124,17.10185-8.76367a40.62024,40.62024,0,0,1,34.43036,5.64955c2.96119,2.08724,5.72662,4.70983,6.98873,8.10575s.65322,7.6803-2.19277,9.92206a18.332,18.332,0,0,1,4.24618,17.80643C804.48411,350.1973,797.77536,354.53987,794.39039,356.48754Z" transform="translate(-230.79112 -197.67441)" fill="#2f2e41"/><path d="M455.41276,357.74749H298.15187a7.64772,7.64772,0,0,1,0-15.29543H455.41276a7.64772,7.64772,0,0,1,0,15.29543Z" transform="translate(-230.79112 -197.67441)" fill="#47bd77"/><path d="M552.50416,364.26957h-270a1,1,0,0,1,0-2h270a1,1,0,0,1,0,2Z" transform="translate(-230.79112 -197.67441)" fill="#3f3d56"/><path d="M455.41276,421.79711H298.15187a7.64771,7.64771,0,0,1,0-15.29543H455.41276a7.64772,7.64772,0,0,1,0,15.29543Z" transform="translate(-230.79112 -197.67441)" fill="#47bd77"/><path d="M552.50416,428.31937h-270a1,1,0,0,1,0-2h270a1,1,0,0,1,0,2Z" transform="translate(-230.79112 -197.67441)" fill="#3f3d56"/><path d="M455.41276,485.84672H298.15187a7.64771,7.64771,0,0,1,0-15.29543H455.41276a7.64772,7.64772,0,0,1,0,15.29543Z" transform="translate(-230.79112 -197.67441)" fill="#f2f2f2"/><path d="M552.50416,492.36869h-270a1,1,0,1,1,0-2h270a1,1,0,0,1,0,2Z" transform="translate(-230.79112 -197.67441)" fill="#3f3d56"/></svg>`

  const Svg = () => <SvgXml xml={img} width="350" height="290"/>

  return (
    <View style={styless.container}>
      <Text style={styless.title}>Choose an option</Text>
        <Svg />
        <View style={styless.buttonContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('Manual Input')}>
          <View style={styless.options1Container}>
          <Image
          source={require("./../../assets/icons8-keyboard-96.png")}
          style={{bottom: 5,}}
        /> 
            <Text style={styless.option1Text}>Input</Text>
            <Text style={styless.option1Text}>Text</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Problem Results')}>
          <View style={styless.options2Container}>
          <Image
          source={require("./../../assets/icons8-cameras-96.png")}
        /> 
            <Text style={styless.option2Text}>Take a</Text>
            <Text style={styless.option2Text}>Picture</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styless.options3Container}>
          <View style={{top: 5}}>
          <Image
          source={require("./../../assets/icons8-microphone-96.png")}
          style={{ height: 58, width: 50, top: -5}}
        /> 
            <Text style={styless.option3Text}>Record</Text>
            <Text style={styless.option3Text}>Question</Text>
          </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styless.options4Container}>
            <View style={{top: 30}}>
            <Image
            source={require("./../../assets/icons8-book-and-pencil-96.png")}
            style={{ height: 58, width: 50, left: 5, top: -5}}
          /> 
              <Text style={styless.option4Text}>Draw</Text>
              <Text style={styless.option4Text}>Question</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styless.buttonContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('Home Screen')}>
        <Image
          source={require("./../../assets/icons8-back-arrow-100.png")}
          style={{top: 50, width: 55, height: 55}}
        /> 
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    top: 88,
    fontFamily: "Avenir",
    marginBottom: 60,
    color: "#fff"
  },
  subtitle: {
    color: "#A8A8A8",
    fontSize: 25,
    top: 65,
  },
  buttonText: {
    fontFamily: "Avenir",
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  textInput: {
    height: 65,
    width: 313,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 15,
    textAlign: "center",
    color: "#BBBBBB",
    backgroundColor: "#ECECEC",
    fontWeight: "bold",
    top: 55,
  },
  buttonContainer: {
    alignItems: "center",
    flex: 0.3,
    padding: 80,
  },
  svg: {
    top: 65,
  },
  options1Container: {
    padding: 10,
    height: 75,
    width: 180, 
    borderRadius: 10, 
    backgroundColor: "#47BD77",
    right: 90,
    marginRight: 10,
    marginBottom: 40, 
  },
  option1Text: {
    left: 80,
    color: "#fff",
    fontSize: 20,
    bottom: 60,
    fontWeight: "bold",
  },
  options2Container: {
    padding: 10,
    height: 75,
    width: 180, 
    borderRadius: 10, 
    backgroundColor: "#47BD77",
    right: -100,
    bottom: 115,
    marginBottom: 5,
  },
  option2Text: {
    left: 70,
    color: "#fff",
    fontSize: 20,
    bottom: 55,
    fontWeight: "bold",
  },
  options3Container: {
    padding: 10,
    height: 75,
    width: 180, 
    borderRadius: 10, 
    backgroundColor: "#47BD77",
    left: -95,
    bottom: 110,
    marginTop: 35,
    marginTop: 10,
  },
  option3Text: {
    left: 50,
    color: "#fff",
    fontSize: 20,
    bottom: 60,
    fontWeight: "bold",
  },
  options4Container: {
    padding: 10,
    height: 77,
    width: 180, 
    borderRadius: 10, 
    backgroundColor: "#47BD77",
    right: -100,
    bottom: 220,
    marginTop: 35,
    justifyContent: 'center'
  },
  option4Text: {
    left: 65,
    color: "#fff",
    fontSize: 20,
    bottom: 60,
    fontWeight: "bold"
  },
  goBack: {
    top: 2,
    left: 3,
    color: "#fff",
  },
  noteContainer: {
    top: 150,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 50,
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    marginBottom: 20,
    width: 350,
    textAlign: "left"
  },
  trash: {
    right: -30,
    bottom: 20,
    position: "absolute",
    color: "#47BD77",
  },
});
