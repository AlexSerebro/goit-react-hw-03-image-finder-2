import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from "components/Loader";
import fetchSerchQuery from "components/servises/services";
import { Component } from "react";
import s from './ImageGallery.module.css'

export default class ImageGallery extends Component{
  state = {
    images: null,
    status: "idle"
  }

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevProps.searchQuery;
    const nextSearchQuery = this.props.searchQuery;
    
    if (prevSearchQuery !== nextSearchQuery) {
      this.setState({ status: 'pending' });

      fetchSerchQuery(nextSearchQuery).then(data => this.setState({ images: data.hits, status:'resolved' })).catch(error=> this.setState({error, status: 'rejected'}))
      
    }

}

  render() {
    const { images, status, showModal, largeImage, tags, type, error } =
      this.state;
      
    if (status === "idle") {
      return (
        <p className={s.textStatusIdle}>
          please enter the name query
        </p>
      );
    }

    if (status === "pending") {
      return (
        <Loader />
      );
    }

    if (status === "rejected") {
      return (
        <p>{error.message}</p>
      );
    }

      if (status === 'resolved') {
        return <ul className={s.imageGallery}>
          {images.map(image => <ImageGalleryItem
            onImageClick={this.handleGalleryItem}
                key={image.id}
                data={image}/>)}
         
        </ul>
      }
      

  }
}