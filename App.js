import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { styles } from './styles'; 

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('./assets/ceramica.jpeg')} 
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card style={styles.card}>
          <Card.Title 
            title="Punto de Arcilla" 
            titleStyle={styles.mainTitle} 
          />
          <Card.Content>
            <Text style={styles.title}>Visión:</Text>
            <Text style={styles.text}>
              Convertirse en la aplicación móvil líder para la compra y venta de cerámica, ofreciendo una experiencia 
              de compra en línea especializada que combine una amplia gama de productos cerámicos con un 
              sistema de apartados único. La aplicación proporcionará una interfaz intuitiva y eficiente que facilita la 
              adquisición de productos cerámicos de calidad. 
            </Text>
            <Text style={styles.title}>Objetivo:</Text>
            <Text style={styles.text}>
              Desarrollar una aplicación móvil multiplataforma para la compra y venta de cerámica, con un sistema 
              de apartados innovador. La aplicación permitirá a los usuarios asegurar productos cerámicos antes de 
              la compra definitiva, y ofrecerá una experiencia de usuario especializada en el mercado de cerámica. 
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={() => navigation.navigate('Catálogo')}>
              Ir al Catálogo
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </ImageBackground>
  );
}

function CatalogScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de productos</Text>
    </View>
  );
}

function InventoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventario</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificaciones</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = 'home'; 
            } else if (route.name === 'Catálogo') {
              iconName = 'shopping'; 
            } else if (route.name === 'Inventario') {
              iconName = 'clipboard-list'; 
            } else if (route.name === 'Notificaciones') {
              iconName = 'bell'; 
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Catálogo" component={CatalogScreen} />
        <Tab.Screen name="Inventario" component={InventoryScreen} />
        <Tab.Screen name="Notificaciones" component={NotificationsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
