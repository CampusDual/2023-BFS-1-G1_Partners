import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'users', name: 'USERS', icon: 'people', 
  items: [
    {
      id: 'partners',
      name: 'Partners',
      route: '/main/users-partner/partners',
      icon: 'account_circle',
    },
    {
      id: 'admins',
      name: 'Administradores',
      route: '/main/users-admin/admins',
      icon: 'account_circle',
    },]
  },
  { id: 'product-home', name: 'PRODUCTS', icon: 'card_travel', route: '/main/product-home' },
  { id: 'personal-area', name: 'PRIVATE AREA', icon: 'description', route: '/main/personal-area' },
  { id: 'profile',name: 'PROFILE',icon: 'face',route: 'main/profile/detail'},

  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' },
 
 

];
