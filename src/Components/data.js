export const menuData = [
    {
      label: 'Home',
      to: '/home',

    },
    {
        label: 'Profile',
        to: '/home/profile',
        children: [
          {
            label: 'Details',
            to: '/home/profile/details',
            
          },
          {
            label: 'Location',
            to: '/home/profile/location',
            children: [
              {
                label: 'City',
                to: '/home/profile/location/city'
              }
            ]
          }
        ]
      },
    {
      label: 'Settings',
      to: '/settings',
      children: [
        {
          label: 'Account',
          to: '/settings/account'
        },
        {
          label: 'Security',
          to: '/settings/security',
          children: [
            {
              label: 'Login',
              to: '/settings/security/login'
            }
          ]
        },
        {
          label: 'Register',
          to: '/settings/register',
          children: [
            {
              label: 'Random Data',
              to: '/settings/register/random-data'
            }
          ]
        }
      ]
    },

  ];