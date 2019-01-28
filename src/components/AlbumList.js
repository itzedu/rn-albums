import React, { Component } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    return (
      <FlatList 
        data={this.state.albums} 
        renderItem={({ item }) => <AlbumDetail key={item.title} album={item} />}
      />
    );
  }
}
