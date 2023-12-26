import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native'; // yoğun veri gösterimi için cihazı yormadan kullanılan modül
import NewsCard from './components/NewsCard';

import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

function App() {
  // bu sayede arrow function bir kez çağrıldı ama yüzlerce işlemde kullanıldı
  const renderNews = ({item}) => <NewsCard news={item} />;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>News</Text>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {news_banner_data.map(bannerNews => (
                <Image
                  style={styles.banner_image}
                  source={{uri: bannerNews.imageUrl}}
                />
              ))}
            </ScrollView>
          )}
          keyExtractor={item => item.u_id.toString()} //amacı flatlist görünmediğinde ekrandan siler. kaldırılacakların ayırt edilmesi için key_exractor kullanılıyor.
          data={news_data}
          renderItem={renderNews} //callback function verimli kullanmak için arrow function kullanışlı değil
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').height / 2,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    textAlign: 'center',
  },
});

export default App;
