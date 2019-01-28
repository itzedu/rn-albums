import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  const { title, artist, thumbnail_image, image } = props.album;
  const { 
    artistInfoStyle, 
    thumbnailStyle, 
    imageContainerStyle, 
    albumTitleStyle, 
    imageStyle 
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={imageContainerStyle}>
        <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
        </View>
        <View style={artistInfoStyle}>
          <Text style={albumTitleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardSection>
      
      <CardSection>
        <Button />
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  artistInfoStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  albumTitleStyle: {
    fontSize: 18,
  }
});

export default AlbumDetail;
