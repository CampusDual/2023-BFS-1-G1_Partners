import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'users', name: 'USERS', icon: 'people', 
  items: [
    {
      id: 'partners',
      name: 'Partners',
      route: '/main/users/partners',
      icon: 'people',
      image: 'assets/images/ic_clientes.png'
    },
    {
      id: 'admins',
      name: 'Administradores',
      route: '/main/users/admins',
      icon: 'people',
      image: 'assets/images/ic_clientes.png'
    },]
  },
  { id: 'product-home', name: 'PRODUCTS', icon: 'inventory_2', route: '/main/product-home' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' },
];
