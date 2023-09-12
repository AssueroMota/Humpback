import React, { useState, useLayoutEffect } from 'react';
import Avatar from './Avatar';
import Backdrop from './Backdrop';
import Close from './Close';
import closeIcon from '../../assets/icons/close.svg';
import Loading from './Loading';

const Lightbox = (props) => {
    const [ photos, setPhotos ] = useState(null);
    const [ showLightBox, setShowLightBox ] = useState(false);
    const [ photoIdLightBox, setPhotoIdLightBox ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useLayoutEffect(() => {
        setLoading(true);
        fetch(props.url)
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                setPhotos(data);
                setLoading(false);
            }) 
    },[])
    
    const showPhotoLightbox = (event,photoId) => {
        photos?.map(photo => {
            if(photo.id == photoId){
                event.currentTarget.classList.remove('avatar-image');
                event.currentTarget.classList.add('avatar');
                setShowLightBox(true);
                setPhotoIdLightBox(photoId);
            }
        })
    }

    const closeLightboxHandler = (event) => {
        setShowLightBox(false);
        photos?.map(photo => {
            if(photo.id == photoIdLightBox){
                const image = document.getElementById(`${photo.id}`);
                image.classList.remove('avatar');
                image.classList.add('avatar-image');
            }
        })
    }

    return(
        <React.Fragment>
            { showLightBox && <Backdrop className="backdrop" /> }
            { showLightBox && <Close className='close' src={closeIcon}  alt='Close the lightbox Option' onClick={closeLightboxHandler} />}
            {
                loading ? 
                    <Loading />
                :
                    photos?.map(photo => {
                        return <Avatar key={photo.id} id={photo.id} className='avatar-image' src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="Random Image" onClick={(event) => {showPhotoLightbox(event, photo.id)}}/>
                    })
            }
        </React.Fragment>
    );
}

export default Lightbox;