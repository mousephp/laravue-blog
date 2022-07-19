import Vue from 'vue'
import Vuex from 'vuex'

import ClientAuth from './modules/auth'
import category from "./modules/category";
import UserManual from './modules/userManual';
import User from './modules/user';
import tag from './modules/tag/index';
import Rule from './modules/rule';
import setting from './modules/setting';
import Tpack from './modules/tpack';
import LibraryType from './modules/libraryType';
import Library from './modules/library';
import DiscussionType from './modules/discussionType';
import Discussion from './modules/discussion';
import News from './modules/news';
import Link from './modules/link';
import Comment from './comments';

import basevuex from './modules/basevuex';
import Role from './modules/role';
import Permission from './modules/permission';
import Notification from './modules/notifications';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Role,
    Permission,
    category,
    tag,
    Rule,
    setting,
    Tpack,
    UserManual,
    LibraryType,
    Library,
    DiscussionType,
    Discussion,
    Link,
    News,
    Comment,
    Notification,
    ClientAuth,
    User,
    basevuex
  }
})