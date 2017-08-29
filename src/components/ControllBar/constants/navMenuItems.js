const NAV_MENU_ITEMS = [
  {
    title: 'Profile',
    children: [
      {
        title: 'Your Progress',
        routeTo: 'app/profile/progress'
      },
      {
        title: 'Account',
        routeTo: 'app/profile/account'
      },
    ]
  },
  {
    title: 'Food',
    children: [
      {
        title: 'Daily Food Contoll',
        routeTo: 'app/food/controll/daily'
      },
      {
        title: 'Food Plans',
        routeTo: 'app/food/food-plans'
      },
    ]
  }
];

export default NAV_MENU_ITEMS;
