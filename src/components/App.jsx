import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';
// import PropTypes from 'prop-types';
import Searchbar from './Searchbar/Serchbar';


export default class App extends Component{
  state = {
  searchQuery: '',
  }
  
  handleFormSubmit = searchQuery => {
  this.setState({searchQuery})
}

  render() {
    return (
      <div>
        
        <ToastContainer autoClose={2000} />
        <Searchbar onSubmit={ this.handleFormSubmit}/>
        <ImageGallery searchQuery={ this.state.searchQuery}/>

      </div>
    )
  }
};
