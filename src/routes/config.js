import HomePage from '../pages/home';
import UserPage from '../pages/user';
import RepoPage from '../pages/repos';

export default [
    {
        path: '/',
        exact: true,
        component: HomePage,
        key: 'home.index'
    },
    {
        path: '/user/:userName',
        exact: true,
        component: UserPage,
        key: 'user.index'
    },
    {
        path: '/user/:userName/repository/:repoName',
        exact: true,
        component: RepoPage,
        key: 'repos.index'
    }
]
