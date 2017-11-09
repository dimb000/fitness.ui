const NAV_MENU_ITEMS = [
  {
    title: 'Profile',
    children: [
      {
        title: 'Your Progress',
        routeTo: 'app/profile/progress',
      },
      {
        title: 'Account',
        routeTo: 'app/profile/account',
      },
    ],
  },
  {
    title: 'Training',
    children: [
      {
        title: 'Start training',
        routeTo: 'app/training',
      },
      {
        title: 'Training Plans',
        routeTo: 'app/training-plans',
      }
    ],
  },
  {
    title: 'Food',
    children: [
      {
        title: 'Daily Food Contoll',
        routeTo: 'app/food/controll/daily',
      },
      {
        title: 'Food Plans',
        routeTo: 'app/food/food-plans',
      },
    ],
  },
  {
    title: 'Manage',
    children: [
      {
        title: 'Users',
        routeTo: 'app/manage/users',
      },
      {
        title: 'Food Plans',
        routeTo: 'app/manage/food-plans',
      },
      {
        title: 'Training Plans',
        routeTo: 'app/manage/training-plans',
      }
    ]
  }
];

export default NAV_MENU_ITEMS;
