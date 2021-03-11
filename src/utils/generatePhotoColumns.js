
export const generatePhotoColumns = (columns, photos) => {
    let arrColumns = Array(columns).fill(0).map((el, i) => {
        return {
            colIndex: i,
            height: 0,
            photos: []
        }
    });

    for (let i = 0; i < photos.length; i++) {
        const img = new Image();
        img.src = photos[i].src;

        arrColumns = arrColumns.sort((a, b) => a.height - b.height);

        const calcAttitudeImg = img.height / img.width * 100;

        arrColumns[0].height += calcAttitudeImg;
        arrColumns[0].photos.push(i);
    }

    arrColumns = arrColumns.sort((a, b) => a.colIndex - b.colIndex);
    return arrColumns;
}
