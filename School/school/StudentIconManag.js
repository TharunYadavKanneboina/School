import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const StudenticonManage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mobileFrame}>
      {/* Header Section */}
      <View style={[styles.mainHeader, { flexDirection: 'row', justifyContent: 'space-between' }]}>
        <TouchableOpacity onPress={() => navigation.navigate('ManagDashboard')}>
          <Image source={require('./assets/images/slides/logo226.png')} style={styles.logo} />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('ManagDashboard')}>
            <Icon name="home" type="material" size={60} color="#000" />
          </TouchableOpacity>
          
        </View>
      </View>

      <View style={styles.emptyHeader} />

      <View style={styles.studentInfoTab}>
        <Text style={styles.headerText}>Managment Information</Text>
        <Text>
          <Text style={styles.bold}>   Name:</Text> Admin
        </Text>
        
        <Text>
          <Text style={styles.bold}>   Gender:</Text> Female
        </Text>
        <Text>
          <Text style={styles.bold}>   Employee Id:</Text> A123
        </Text>
        <Text>
          <Text style={styles.bold}>   School:</Text> ABC High School
        </Text>
        <Text>
          <Text style={styles.bold}>   Mobile:</Text> 9876543210
        </Text>

      </View>

      <TouchableOpacity
        style={{
          backgroundColor: 'rgb(160, 180, 182)',
          padding: 10,
          borderRadius: 5,
          width: '30%',
          alignSelf: 'center',
          marginTop: 20,
          alignItems:'center'
        }}
        onPress={() => navigation.navigate('ParentLogin')}
      >
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },
  bold: {
    fontWeight: 'bold',
    paddingLeft: 25,
  },
  mobileFrame: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyHeader: {
    height: 30,
    backgroundColor: 'rgb(160, 180, 182)',
    marginTop: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  mainHeader: {
    backgroundColor: 'rgb(160, 180, 182)',
    justifyContent: 'space-between', // Align logo to the left, icon to the right
    alignItems: 'center', // Vertically center the elements
    width: '100%', // Set to full width
    height: 90, // Adjusted height
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 30,
  },
  logo: {
    width: 80,
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  studentInfoTab: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    margin: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
});

export default StudenticonManage;