/*===========Frontend==============*/
import HomeComponent from '../views/pages/HomeComponent.vue';
import HomeContentComponent from '../views/pages/home/HomeContentComponent.vue';

// /*===========Other==============*/
import Page404Component from '../components/pages/Page404Component.vue';
import SearchComponent from '../components/pages/SearchComponent.vue';

// /*===========Auth==============*/
import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import ForgotPassword from '../views/auth/ForgotPassword.vue';
import ResetPassword from '../views/auth/ResetPassword.vue';

const routes = [
    /*=============================*/
    /*===========Home==============*/
    {
        name: 'Home',
        path: '/',
        redirect: '/',
        component: HomeComponent,
        children: [
            {
                name: 'HomeContentComponent',
                path: '',
                component: HomeContentComponent,
            },
            {
                name: 'AboutComponent',
                path: 'about',
                component: () => import('../views/pages/about/AboutComponent.vue'),
                props: true
            },
            {
                path: 'news',
                // meta: { label: 'Blog' },
                component: {
                    render(c) { return c('router-view') }
                },
                children: [
                    {
                        path: '',
                        component: () => import ('../views/pages/blog/BlogComponent.vue'),  //Lazy load router 
                        name: 'Blog'
                    },
                    {
                        name: 'BlogDetails',
                        path: ':id',
                        component: () => import ('../views/pages/blog/blogDetails/BlogDetailsComponent.vue'),  //Lazy load router 
                        props: true
                    },
                ]
            },
            {
                path: 'library',
                component: {
                    render(c) { return c('router-view') }
                },
                children: [
                    {
                        name: 'Library',
                        path: '',
                        component: () => import ('../views/pages/library/LibraryComponent.vue'), 
                    },
                ]
            },
            {
                meta: { label: 'Discussion' },
                path: 'discussion',
                component: {
                    render(c) { return c('router-view') }
                },
                children: [
                    {
                        name: 'Discussion',
                        path: '',
                        component: () => import ('../views/pages/discussion/DiscussionComponent.vue'),  //Lazy load router 
                    },
                    {
                        name: 'UserDiscussionCreate',
                        path: 'create',
                        component: () => import ('../views/pages/discussion/update/UserDiscussionCreate.vue'),  //Lazy load router 
                        meta: { requiresAuth: true }
                    },
                    {
                        name: 'UserDiscussionEdit',
                        path: 'edit/:id',
                        component: () => import ('../views/pages/discussion/update/UserDiscussionEdit.vue'),  //Lazy load router 
                        meta: { requiresAuth: true }
                    },
                    {
                        name: 'DiscussionTypeComponent',
                        path: ':discussion_type_id', //path cho discussiontype
                        component: () => import ('../views/pages/discussion/discussion/DiscussionTypeComponent.vue'),  //Lazy load router 
                    },
                    {
                        name: 'DiscussionDetailsComponent',
                        path: ':discussion_type_id/:discussion_id',
                        component: () => import ('../views/pages/discussion/DiscussionDetails/DiscussionDetailsComponent.vue'),  //Lazy load router 
                    }
                ]
            },
            {
                path: 'profile',
                component: {
                    render(c) { return c('router-view') }
                },
                children: [
                    {
                        path: '',
                        component: () => import ('../views/pages/profile/ProfileComponent.vue'),  //Lazy load router 
                        name: 'Profile',
                        meta: { requiresAuth: true }
                    },
                    {
                        name: 'ProfileUser',
                        path: 'user/:id',
                        component: () => import ('../views/pages/profile/user/ProfileUserComponent.vue'),  //Lazy load router 

                        meta: { requiresAuth: true }
                    },

                ]
            },
            {
                name: 'Contact',
                path: 'contact',
                component: () => import ('../views/pages/contact/ContactComponent.vue'),  //Lazy load router 
                props: true
            },
            {
                name: 'Login',
                path: '/login',
                component: Login,

                //error he thong la tu dau
                meta: { requiresAuth: false },
            }, 
            {
                name: 'Register',
                path: '/register',
                component: Register,
                meta: { requiresAuth: false }
            },
            {
                path: 'support',
                component: {
                    render(c) { return c('router-view') }
                },
                children: [
                    {
                        path: '',
                        component: () => import ('../views/pages/usermanual/UserManualComponent.vue'),  //Lazy load router 
                        name: 'UserManual'
                    },
                    {
                        path: 'user-detail/:id',
                        component: () => import ('../views/pages/usermanual/usermanualdetail/UserManualDetailComponent.vue'),  //Lazy load router 
                        name: 'UserManualDetail'
                    },
                    {
                        name: 'RuleDetail',
                        path: 'rule/:slug',
                        component: () => import ('../views/pages/usermanual/ruledetail/RuleDetailComponent.vue'),  //Lazy load router 
                    },
                ]
            },
            {
                name: 'ForgotPassword',
                path: 'forgot-password',
                component: ForgotPassword
            },
            {
                name: 'ResetPassword',
                path: '/reset-password/:token' ,//'forgot-password/:email/:token',
                component: ResetPassword
            },



            {
                name: 'Search',
                path: 'serach/:keyword',
                component: SearchComponent
            },
            {
                name: 'MyFavorites',
                path: 'my-favorites',
                component: () => import ('../views/pages/user/my_favorites.vue'),  
            },
            /*===========Page404==============*/
            {
                name: 'Page404',
                path: '*',
                component: Page404Component
            }
        ]
    },
];

export default routes.map(route => {
    return {
        ...route
    }
})

