export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard/analysis', authority: ['admin', 'user'] },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            name: 'resource-analysis',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitor',
            name: 'waterlevel-monitor',
            component: './Dashboard/Monitor',
          },
          {
            path: '/dashboard/workplace',
            name: 'risk-monitor',
            component: './Dashboard/Workplace',
          },
        ],
      },
      // resource-center
      { path: '/resource-center', redirect: '/dashboard/analysis', authority: ['admin', 'user'] },
      {
        path: '/resource-center',
        name: 'resource-center',
        icon: 'dashboard',
        routes: [
          {
            path: '/resource-center/ecs',
            name: 'ecs',
            component: './Dashboard/Analysis',
          },
          {
            path: '/resource-center/oss',
            name: 'oss',
            component: './Dashboard/Monitor',
          },
          {
            path: '/resource-center/rds',
            name: 'rds',
            component: './Dashboard/Workplace',
          },
        ],
      },
      // resource-manager
      { path: '/resource-manager', redirect: '/dashboard/analysis', authority: ['admin', 'user'] },
      {
        path: '/resource-manager',
        name: 'resource-manager',
        icon: 'dashboard',
        routes: [
          {
            path: '/resource-manager/monitor-manage',
            name: 'monitor-manage',
            component: './Dashboard/Analysis',
          },
          {
            path: '/resource-manager/waterlevel-monitor',
            name: 'waterlevel-monitor',
            component: './Dashboard/Monitor',
          },
          {
            path: '/resource-manager/warning-manage',
            name: 'warning-manage',
            component: './Dashboard/Workplace',
          },
        ],
      },
      // bill-center
      {
        path: '/bill-center',
        icon: 'table',
        name: 'bill-center',
        routes: [
          {
            path: '/bill-center/overview',
            name: 'overview',
            component: './List/TableList',
          },
          {
            path: '/bill-center/resource-bill',
            name: 'resource-bill',
            component: './List/BasicList',
          },
          // {
          //   path: '/bill-center/resource-analysis',
          //   name: 'resource-analysis',
          //   component: './List/CardList',
          // },
          {
            path: '/bill-center/resource-analysis',
            name: 'resource-analysis',
            component: './List/List',
            routes: [
              {
                path: '/bill-center/resource-analysis',
                redirect: '/bill-center/resource-analysis/region',
              },
              {
                path: '/bill-center/resource-analysis/region',
                name: 'region',
                component: './List/Articles',
              },
              {
                path: '/bill-center/resource-analysis/projects',
                name: 'projects',
                component: './List/Projects',
              },
              {
                path: '/bill-center/resource-analysis/departments',
                name: 'departments',
                component: './List/Applications',
              },
              {
                path: '/bill-center/resource-analysis/products',
                name: 'products',
                component: './List/Applications',
              },
            ],
          },
        ],
      },
      // operation-center
      {
        path: '/operation-center',
        icon: 'table',
        name: 'operation-center',
        routes: [
          {
            path: '/operation-center/resource-apply',
            name: 'resource-apply',
            component: './List/TableList',
          },
          {
            path: '/operation-center/operation-order',
            name: 'operation-order',
            component: './List/BasicList',
          },
          // {
          //   path: '/bill-center/resource-analysis',
          //   name: 'resource-analysis',
          //   component: './List/CardList',
          // },
          {
            path: '/operation-center/operation-weekly-report',
            name: 'operation-weekly-report',
            component: './List/List',
            routes: [
              {
                path: '/operation-center/operation-weekly-report',
                redirect: '/operation-center/operation-weekly-report/resources',
              },
              {
                path: '/operation-center/operation-weekly-report/resources',
                name: 'resources',
                component: './List/Articles',
              },
              {
                path: '/operation-center/operation-weekly-report/costs',
                name: 'costs',
                component: './List/Projects',
              },
              {
                path: '/operation-center/operation-weekly-report/risks',
                name: 'risks',
                component: './List/Applications',
              },
            ],
          },
        ],
      },

      // report-center
      {
        path: '/report-center',
        icon: 'table',
        name: 'report-center',
        routes: [
          {
            path: '/report-center/resource',
            name: 'resource',
            component: './List/TableList',
            routes: [
              {
                path: '/report-center/resource',
                redirect: 'report-center/resource/used',
              },
              {
                path: '/report-center/resource/used',
                name: 'used',
                component: './List/Projects',
              },
              {
                path: '/report-center/resource/waterlevel',
                name: 'waterlevel',
                component: './List/Projects',
              },
              {
                path: '/report-center/resource/quota',
                name: 'quota',
                component: './List/Projects',
              },
              {
                path: '/report-center/resource/cost-benifit-analysis',
                name: 'cost-benifit-analysis',
                component: './List/Projects',
              },
              {
                path: '/report-center/resource/used-analysis',
                name: 'used-analysis',
                component: './List/Projects',
              },
              {
                path: '/report-center/resource/phsical-using-analysis',
                name: 'phsical-using-analysis',
                component: './List/Projects',
              },
            ],
          },
          {
            path: '/report-center/operation',
            name: 'operation',
            component: './List/TableList',
            routes: [
              {
                path: '/report-center/operation',
                redirect: 'report-center/operation/alert',
              },
              {
                path: '/report-center/operation/alert',
                name: 'alert',
                component: './List/Projects',
              },
              {
                path: '/report-center/operation/resource-monitor',
                name: 'resource-monitor',
                component: './List/Projects',
              },
            ],
          },
          {
            path: '/report-center/projects',
            name: 'projects',
            component: './List/TableList',
            routes: [
              {
                path: '/report-center/projects',
                redirect: 'report-center/projects/departments',
              },
              {
                path: '/report-center/resource/departments',
                name: 'departments',
                component: './List/Projects',
              },
              {
                path: '/report-center/resource/projects-resources',
                name: 'projects-resources',
                component: './List/Projects',
              },
              {
                path: '/report-center/resource/projects-costs',
                name: 'projects-costs',
                component: './List/Projects',
              },
            ],
          },
          {
            path: '/report-center/resource-sales',
            name: 'resource-sales',
            component: './List/TableList',
            routes: [
              {
                path: '/report-center/resource-sales',
                redirect: 'report-center/resource-sales/sales-analysis',
              },
              {
                path: '/report-center/resource-sales/sales-analysis',
                name: 'sales-analysis',
                component: './List/Projects',
              },
              {
                path: '/report-center/resource-sales/oversold-analysis',
                name: 'oversold-analysis',
                component: './List/Projects',
              },
            ],
          },
        ],
      },

      // basicinfo-manage
      {
        path: '/basicinfo-manage',
        icon: 'table',
        name: 'basicinfo-manage',
        routes: [
          {
            path: '/basicinfo-manage/users',
            name: 'users',
            component: './List/TableList',
          },
          {
            path: '/basicinfo-manage/departments',
            name: 'departments',
            component: './List/BasicList',
          },
          {
            path: '/basicinfo-manage/suppliers',
            name: 'suppliers',
            component: './List/BasicList',
          },
          {
            path: '/basicinfo-manage/projects',
            name: 'projects',
            component: './List/BasicList',
          },

          {
            path: '/basicinfo-maange/services',
            name: 'services',
            component: './List/List',
            routes: [
              {
                path: '/basicinfo-manage/services',
                redirect: '/basicinfo-manage/services/list',
              },
              {
                path: '/basicinfo-manage/services/list',
                name: 'list',
                component: './List/Articles',
              },
              {
                path: '/basicinfo-manage/services/price',
                name: 'price',
                component: './List/Articles',
              },
            ],
          },
        ],
      },

      // forms
      {
        path: '/form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: '/form/basic-form',
            name: 'basicform',
            component: './Forms/BasicForm',
          },
          {
            path: '/form/step-form',
            name: 'stepform',
            component: './Forms/StepForm',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/form/step-form',
                redirect: '/form/step-form/info',
              },
              {
                path: '/form/step-form/info',
                name: 'info',
                component: './Forms/StepForm/Step1',
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: './Forms/StepForm/Step2',
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: './Forms/StepForm/Step3',
              },
            ],
          },
          {
            path: '/form/advanced-form',
            name: 'advancedform',
            authority: ['admin'],
            component: './Forms/AdvancedForm',
          },
        ],
      },
      // list
      {
        path: '/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/list/table-list',
            name: 'searchtable',
            component: './List/TableList',
          },
          {
            path: '/list/basic-list',
            name: 'basiclist',
            component: './List/BasicList',
          },
          {
            path: '/list/card-list',
            name: 'cardlist',
            component: './List/CardList',
          },
          {
            path: '/list/search',
            name: 'searchlist',
            component: './List/List',
            routes: [
              {
                path: '/list/search',
                redirect: '/list/search/articles',
              },
              {
                path: '/list/search/articles',
                name: 'articles',
                component: './List/Articles',
              },
              {
                path: '/list/search/projects',
                name: 'projects',
                component: './List/Projects',
              },
              {
                path: '/list/search/applications',
                name: 'applications',
                component: './List/Applications',
              },
            ],
          },
        ],
      },
      {
        path: '/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          // profile
          {
            path: '/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/basic/:id',
            name: 'basic',
            hideInMenu: true,
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/advanced',
            name: 'advanced',
            authority: ['admin'],
            component: './Profile/AdvancedProfile',
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/result',
        routes: [
          // result
          {
            path: '/result/success',
            name: 'success',
            component: './Result/Success',
          },
          { path: '/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              {
                path: '/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },
      //  editor
      {
        name: 'editor',
        icon: 'highlight',
        path: '/editor',
        routes: [
          {
            path: '/editor/flow',
            name: 'flow',
            component: './Editor/GGEditor/Flow',
          },
          {
            path: '/editor/mind',
            name: 'mind',
            component: './Editor/GGEditor/Mind',
          },
          {
            path: '/editor/koni',
            name: 'koni',
            component: './Editor/GGEditor/Koni',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
