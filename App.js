import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import nativewind from 'nativewind';
export default LoginScreen = () => {
  return (
    <View className='flex items-center justify-center bg-accen w-[300px] bg-card h-fit p-3 rounded-[10px] mt-[50%] ml-[9%]'>
      <Text className='text-center text-[20px] font-extrabold font-serif'>Simple Form</Text>
      <TextInput className='w-[200px] h-[100px]' placeholder='username'/>
      <TextInput placeholder='password' secureTextEntry={true}/>
      <Button title='login' className='bg-slate-900 '/>
      <View className='h-[50px] w-[50px] bg-black opacity-10'>
        <Text className='align-text-bottom'>card</Text>
      </View>
      </View>
    // <View className='flex items-center justify-center bg-accen w-[300px] bg-card h-fit p-3 rounded-md mt-[50%] ml-[9%]'>
      // <Text className='text-center text-xl font-bold mb-5'>
    //     Login Form
    //   </Text>
    //   <TextInput
    //   className='w-full text-gray-700 border border-gray-400 rounded-full py-2 px-4'
    //   placeholder="Username"
    //   />
    //   <TextInput
    //     className='w-full text-gray-700 border border-gray-400 rounded-full py-2 px-4 mt-3'
    //     placeholder="Password"
    //     secureTextEntry={true}
    //   />
    //   <TouchableOpacity className='bg-blue-500 text-white py-4 px-4 rounded-full mt-3 w-full'>
    //     <Text className='text-center'>Login</Text>
    //   </TouchableOpacity>
    // </View>
  );
};

