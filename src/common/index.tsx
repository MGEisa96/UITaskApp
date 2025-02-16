import { Dimensions, I18nManager } from "react-native";

export const COLORS = {
    black: '#000000',
    white: '#ffffff',
    Mercury: '#E1E1E1',
    Silver: '#CCCCCC',
    Scorpion: '#575757',
    Bombay: '#B0B4B7',
    error: '#E07178',
    Sapphire: '#2A3B52',
    Emerald: '#2ECC71',
    Orange: '#E67E22',
    Red: '#E74C3C',
    primary: '#263D94',
    secondry: '#4E8FF6',
  };
  export type IconType =
    | 'Ionicons'
    | 'AntDesign'
    | 'FontAwesome'
    | 'Entypo'
    | 'MaterialIcons'
    | 'FontAwesome5'
    | 'FontAwesome6'
    | 'MaterialCommunityIcons';

  export type IconKeys = keyof typeof ICONS;
  export const Transform = {
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  };
  export const IconsTransform = {
    transform: [{scaleX: !I18nManager.isRTL ? -1 : 1}],
  };
  export const IMAGES_URL  = {
    emptyImage: 'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png',
  }
  export const ICONS = {
    Ionicons: {
      bag: 'bag-outline',
      home: 'home-outline',
      favorite: 'heart-outline',
      notification: 'notifications-outline',
      person: 'person-outline',
      search: 'search',
      briefcase: 'briefcase-outline',
      calendarOutline: 'calendar-outline',
      checkbox: 'checkbox',
      square_outline: 'square-outline',
      searchOutline: 'search-outline',
      calendar: 'calendar-clear-outline',
      document: 'document-outline',
      refresh: 'refresh',
      chatOutline: 'chatbubbles-outline',
      clipboard: 'clipboard-outline',
    },
    Entypo: {
      dots: 'dots-three-horizontal',
    },
    AntDesign: {
      chevronLeft: 'left',
      chevronRight: 'right',
      plus: 'plus',
      checkcircle: 'checkcircle',
      closecircle: 'closecircle',
    },
    FontAwesome: {
      home: 'home',
      circle: 'circle',
      circle_o: 'circle-o',
      dotCircle: 'dot-circle-o',
      angleDown: 'angle-down',
      edit: 'edit',
      user_circle: 'user-circle-o',
      notifications: 'notifications-outline',
    },
    MaterialIcons: {
      close: 'close',
      done: 'done',
      west: 'west',
      radio_button_checked: 'radio-button-checked',
      radio_button_unchecked: 'radio-button-unchecked',
      eyeOff: 'visibility-off',
      eye: 'visibility',
      dropdown: 'expand-more',
      check_box: 'check-box',
      check_box_outline: 'check-box-outline-blank',
      home: 'home',
      favorite: 'favorite',
      account: 'account',
      chevronLeft: 'chevron-left',
      chevronRight: 'chevron-right',
      addShoppingCart: 'add-shopping-cart',
      delete: 'delete',
      cash: 'monetization-on',
    },
    MaterialCommunityIcons:{
      dumbbell: 'dumbbell',
    },
    FontAwesome5:{
      book: 'book',
      book_open:'book-open',
      sliders_h: 'sliders-h',
    },
    FontAwesome6:{
      sliders: 'sliders',
    },
  };
  export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
