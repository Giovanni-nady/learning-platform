import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../../shared/asyncStorage.js';

const { width, height } = Dimensions.get('window')
export default function OnboardingScreen() {

    const navigation = useNavigation()

    const handleDone = () => {
        setItem('onboarding', '1')
        navigation.navigate('login')
    }

    const doneButton = ({ ...props }) => {
        return (
            <TouchableOpacity onPress={handleDone} style={{ backgroundColor: "#fff", padding: 20, borderTopLeftRadius: 100, borderBottomLeftRadius: 100 }} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        )
    }
    return <>
        <View style={{ flex: 1 }}>
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                DoneButtonComponent={doneButton}
                // bottomBarHighlight={false}
                containerStyles={{ paddingHorizontal: 15 }}
                pages={[
                    {
                        backgroundColor: '#AC87C5',
                        image: <View>
                            <LottieView style={{ width: width * 0.9, height: width }} source={require('./../../../assets/animation/boost.json')} autoPlay loop />
                        </View>,
                        title: 'Boost Productivity',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#377D71',
                        image: <View>
                            <LottieView style={{ width: width * 0.9, height: width }} source={require('./../../../assets/animation/work.json')} autoPlay loop />
                        </View>,
                        title: 'Work Seamlessly',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#DEB6AB',
                        image: <View>
                            <LottieView style={{ width: width * 0.9, height: width }} source={require('./../../../assets/animation/achieve.json')} autoPlay loop />
                        </View>,
                        title: 'Achieve Higher Goals',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
            />
        </View>

    </>
}