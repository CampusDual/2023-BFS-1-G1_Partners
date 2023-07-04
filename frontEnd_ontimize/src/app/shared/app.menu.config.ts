import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'users', name: 'USERS', icon: 'people', 
  items: [
    {
      id: 'partners',
      name: 'Partners',
      route: '/main/users-partner/partners',
      icon: 'people',
      image: 'assets/images/ic_clientes.png'
    },
    {
      id: 'admins',
      name: 'Administradores',
      route: '/main/users-admin/admins',
      icon: 'people',
      image: 'assets/images/ic_clientes.png'
    },]
  },
  { id: 'product-home', name: 'PRODUCTS', icon: 'inventory_2', route: '/main/product-home' },
  { id: 'personal-area', name: 'PERSONAL AREA', icon: 'person', route: '/main/personal-area' },
  { id: 'profile',name: 'PROFILE',icon: 'person',route: 'main/profile/detail'},
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' },
 
 

];
