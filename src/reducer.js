import { NEXT_IMAGE, PREV_IMAGE } from "./actions";

const initialState = {
  currentIndex: 0,
  images: [
    "https://c.pxhere.com/photos/f2/e5/orchestra_piano_violin_guitar_balalaika_harp_grand_piano_bow-656063.jpg!d",
    "https://www.thoughtco.com/thmb/VEIvog8ZWDAmkp_FrTIivJuWEE0=/2000x1500/filters:fill(auto,1)/GettyImages-675801180-5a7096961d64040037179114.jpg",
    "https://getwallpapers.com/wallpaper/full/a/6/d/778980-music-instruments-wallpaper-2560x1600-1080p.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.tPyvZYJ2wuD7qigtvHYySQHaE5&pid=Api&P=0&h=220",
    "https://wtop.com/wp-content/uploads/2018/09/musical-instruments-getty.jpg",
  ],
};
const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_IMAGE:
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.images.length,
      };
    case PREV_IMAGE:
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.images.length,
      };
    default:
      return state;
  }
};

export default imageReducer;
