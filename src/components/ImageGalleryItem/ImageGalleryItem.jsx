import s from './ImageGalleryItem.module.css'



function ImageGalleryItem({ data, onImageClick, key }) {

  const {
    webformatURL,
    largeImageURL,
    type,
    tags,
   } = data;

  // const fullImage = () => onImageClick(largeImageURL, tags, type);
  return (
    <li className={s.item} >
      <img src={webformatURL}
        alt={type}
        // onClick={fullImage}
        className={s.image} />
    </li>
  )
}

export default ImageGalleryItem;