import { createClient } from 'pexels';
import {getRandomInt} from "../utils/common";
import {MAX_COUNT_PAGE} from "../utils/constants/constants";
import * as axios from 'axios'

// export const client = createClient('563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf');
const client = createClient('563492ad6f91700001000001c520042dfd994ae28a5bada18107e6fe');

export const photoAPI = {
    getCategoryPhotos(query, page) {
        return client.photos.search({ query, per_page: 10, page }).then(photos => photos);
    },
    getHeaderPhoto() {
        const page = getRandomInt(MAX_COUNT_PAGE);
        return client.photos.search({ query: 'City', per_page: page }).then(photos => photos);
    },
}
