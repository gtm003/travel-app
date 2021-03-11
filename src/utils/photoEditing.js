import {defaultPhotoParameters} from "./constants/constants";

export function photoEditing(data) {
    const photos = [];

    data?.photos.forEach((photo) => {
        const obj = {
            phLink: photo.photographer_url || defaultPhotoParameters.phLink,
            phNames: photo.photographer || defaultPhotoParameters.phNames,
            src: photo.src.original || defaultPhotoParameters.src,
            phPhotoLink: defaultPhotoParameters.phPhotoLink,
            photoId: photo.id || defaultPhotoParameters.photoId
        }
        photos.push(obj);
    });

    return photos;
}


export function isUniquePhoto(lastPhotoState, lastPhotoNew) {
    return JSON.stringify(lastPhotoNew) !== JSON.stringify(lastPhotoState);
}
