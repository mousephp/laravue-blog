// /*===========Admins==============*/
// //news
import CommentNewsList from '../views/admins/blog/comment/Index.vue';

// //Discussion
import CommentDiscussionList from '../views/admins/discussion/comment/Index.vue';
import DiscussionStaring from '../views/admins/discussion/rating/Index.vue';


//------------MANAGER-------------------
//Profile 
import AdminProfile from '../views/admins/profile/AdminProfile.vue';

// //User
import UserCreate from '../views/admins/user/Create.vue';
import UserEdit from '../views/admins/user/Edit.vue';
import UserList from '../views/admins/user/List.vue';
// import UserSetting from '../views/admins/manager/user/setting.vue';

import UpdatePasswordUser from '../views/admins/profile/UpdatePasswordUser.vue';

// Roles
import RoleCreate from '../views/admins/role/Create.vue';
import RoleEdit from '../views/admins/role/Edit.vue';
import RoleList from '../views/admins/role/List.vue';
import RoleView from '../views/admins/role/Show.vue';

// Permission
import PermissionCreate from '../views/admins/permission/Create.vue';
import PermissionEdit from '../views/admins/permission/Edit.vue';
import PermissionList from '../views/admins/permission/List.vue';
import PermissionView from '../views/admins/permission/Show.vue';

//Main
import AdminComponent from '../views/admins/layouts/TheMaster.vue';
import DashboardComponent from '../views/admins/Dashboard.vue';

//AdminLogin
import AdminLogin from '../views/admins/login/index.vue';

//PrivateLayout
import PrivateLayout from '../views/admins/layouts/ThePrivateLogin.vue';


const routes = [
    /*===========Admin==============*/
    {
        name: 'AdminLogin',
        path: '/admin/login',
        component: PrivateLayout,
        children: [
            {
              path: "",
              component: AdminLogin
            }
        ],
        meta: { requiresAuth: false },
    }, 
    {
        path: '/admin',
        component: AdminComponent,
        meta: { requiresAuth: true },
        children: [
            {
                name: 'DashboardComponent',
                path: '',
                component: DashboardComponent,
                meta: { requiresAuth: true }
            },
            //Blog - Category
            {
                name: 'CategoryCreate',
                path: '/admin/category/create',
                component: () => import('../views/admins/blog/category/Create.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'CategoryEdit',
                path: '/admin/category/edit/:id',
                component: () => import('../views/admins/blog/category/Edit.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'CategoryList',
                path: '/admin/category/list',
                component: () => import('../views/admins/blog/category/List.vue'),
                meta: { requiresAuth: true }
            },
            //Blog -Tags
            {
                name: 'TagCreate',
                path: '/admin/tag/create',
                component: () => import('../views/admins/blog/tag/Create.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'TagEdit',
                path: '/admin/tag/edit/:id',
                component: () => import('../views/admins/blog/tag/Edit.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'TagList',
                path: '/admin/tag/list',
                component: () => import('../views/admins/blog/tag/List.vue'),
                meta: { requiresAuth: true }
            },
            //Blog-News
            {
            	name: 'NewsEdit',
            	path: '/admin/news/edit/:id',
            	component: () => import ('../views/admins/blog/news/Edit.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'NewsList',
                path: '/admin/news/list',
                component: () => import ('../views/admins/blog/news/List.vue'),
                meta: { requiresAuth: true }
            },
            {
            	name: 'NewsCreate',
            	path: '/admin/news/create',
            	component: () => import ('../views/admins/blog/news/Create.vue'),
                meta: { requiresAuth: true }
            },
            // {
            //     name: 'CommentNewsList',
            //     path: '/admin/news/comment',
            //     component: CommentNewsList,
            //     meta: { requiresAuth: true }
            // },


            //Discussion Types
            {
                name: 'DiscussionTypeCreate',
                path: '/admin/discussion-type/create',
                component: () => import ('../views/admins/discussion/discussionType/Create.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'DiscussionTypeEdit',
                path: '/admin/discussion-type/edit/:id',
                component: () => import ('../views/admins/discussion/discussionType/Edit.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'DiscussionTypeList',
                path: '/admin/discussion-type/list',
                component: () => import ('../views/admins/discussion/discussionType/List.vue'),
                meta: { requiresAuth: true }
            },
            //Tpack
            {
                name: 'TpackCreate',
                path: '/admin/tpack/create',
                component: () => import ('../views/admins/tpack/Create.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'TpackEdit',
                path: '/admin/tpack/edit/:id',
                component: () => import ('../views/admins/tpack/Edit.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'TpackList',
                path: '/admin/tpack/list',
                component: () => import ('../views/admins/tpack/List.vue'),
                meta: { requiresAuth: true }
            },

            //Rule
            {
                name: 'RuleCreate',
                path: '/admin/rule/create',
                component: () => import ('../views/admins/rule/Create.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'RuleEdit',
                path: '/admin/rule/edit/:id',
                component: () => import ('../views/admins/rule/Edit.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'RuleList',
                path: '/admin/rule/list',
                component: () => import ('../views/admins/rule/List.vue'),
                meta: { requiresAuth: true }
            },
            //User Manual
            {
                name: 'UserManualCreate',
                path: '/admin/user-manual/create',
                component: () => import ('../views/admins/userManual/Create.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'UserManualEdit',
                path: '/admin/user-manual/edit/:id',
                component: () => import ('../views/admins/userManual/Edit.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'UserManualList',
                path: '/admin/user-manual/list',
                component: () => import ('../views/admins/userManual/List.vue'),
                meta: { requiresAuth: true }
            },

            //Discussion
            {
                name: 'DiscussionCreate',
                path: '/admin/discussion/create',
                component: () => import ('../views/admins/discussion/discussion/Create.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'DiscussionEdit',
                path: '/admin/discussion/edit/:id',
                component: () => import ('../views/admins/discussion/discussion/Edit.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'DiscussionList',
                path: '/admin/discussion/list',
                component: () => import ('../views/admins/discussion/discussion/List.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'CommentDiscussionList',
                path: '/admin/discussion/comment',
                component: CommentDiscussionList,
                meta: { requiresAuth: true }
            },
            {
                name: 'DiscussionStaring',
                path: '/admin/discussion/rating',
                component: DiscussionStaring,
                meta: { requiresAuth: true }
            },
            
            
            //Library Type
            {
                name: 'LibraryTypeCreate',
                path: '/admin/library-type/create',
                component: () => import ('../views/admins/library/libraryType/Create.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'LibraryTypeEdit',
                path: '/admin/library-type/edit/:id',
                component: () => import ('../views/admins/library/libraryType/Edit.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'LibraryTypeList',
                path: '/admin/library-type/list',
                component: () => import ('../views/admins/library/libraryType/List.vue'),
                meta: { requiresAuth: true }
            },
            //Library
            {
            	name: 'LibraryCreate',
            	path: '/admin/library/create',
            	component: () => import ('../views/admins/library/library/Create.vue'),
                meta: { requiresAuth: true }
            },
            {
            	name: 'LibraryEdit',
            	path: '/admin/library/edit/:id',
            	component: () => import ('../views/admins/library/library/Edit.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'LibraryList',
                path: '/admin/library',
                component: () => import ('../views/admins/library/library/List.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'LibraryType',
                path: '/admin/library/type',
                component: () => import ('../views/admins/library/library/Index.vue'),
                meta: { requiresAuth: true }
            },
            //About
            {
                name: 'About',
                path: '/admin/about',
                component: () => import ('../views/admins/about/About.vue'),
                meta: { requiresAuth: true }
            },
            {
                name: 'AboutEdit',
                path: '/admin/about/edit/:id',
                component: () => import ('../views/admins/about/AboutEdit.vue'),
                meta: { requiresAuth: true }
            },
            //Contact
            {
                name: 'ContactList',
                path: '/admin/contact',
                component: () => import ('../views/admins/contact/Contact.vue'),
                meta: { requiresAuth: true }
            },
            //Link
            {
                name: 'LinkList',
                path: '/admin/link',
                component: () => import ('../views/admins/link/Link.vue'),
                meta: { requiresAuth: true }
            },

            //SettingComponent
            {
                name: 'SettingComponent',
                path: '/admin/setting',
                component: () => import('../views/admins/setting/setting.vue'),
                meta: { requiresAuth: true }
            },
            //User
            {
                name: 'UserList',
                path: '/admin/user/list',
                component: UserList,
                meta: { requiresAuth: true }
            },
            {
                name: 'UserCreate',
                path: '/admin/user/create',
                component: UserCreate,
                meta: { requiresAuth: true }
            },
            {
                name: 'UserEdit',
                path: '/admin/user/edit/:id',
                component: UserEdit,
                meta: { requiresAuth: true }
            },

            //Admin - roles
            {
                path : '/admin/roles',
                component : RoleList,
                name : 'RoleList',  
                meta: { requiresAuth: true }
            },
            {
                path : '/admin/roles/create',
                component : RoleCreate,
                name : 'RoleCreate',
                meta: { requiresAuth: true }                        
            },
            {
                path : '/admin/roles/:id',
                component : RoleView,
                name : 'RoleView',
                meta: { requiresAuth: true }
            },      
            {
                path : '/admin/roles/:id/edit',
                component : RoleEdit,
                name : 'RoleEdit',
                meta: { requiresAuth: true }
            },
        
            //Admin - permissions
            {
                path : '/admin/permissions',
                component : PermissionList,
                name : 'PermissionList',
                meta: { requiresAuth: true }         
            },
            {
                path : '/admin/permissions/create',
                component : PermissionCreate,
                name : 'PermissionCreate',
                meta: { requiresAuth: true }       
            },       
            {
                path : '/admin/permissions/:id',
                component : PermissionView,
                name : 'PermissionView',
                meta: { requiresAuth: true }
            },        
            {
                path : '/admin/permissions/:id/edit',
                component : PermissionEdit,
                name : 'PermissionEdit',
                meta: { requiresAuth: true }
            },

            //Admin - Profile
            {
                name: 'AdminProfile',
                path: 'profile',
                component: AdminProfile
            },
            {
                name: 'UpdatePasswordUser',
                path: 'admins/user/change-password',
                component: UpdatePasswordUser
            },

        ]
    },
];


// export default routes

export default routes.map(route => {
    return {
        ...route
    }
})
