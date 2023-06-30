/* eslint arrow-body-style: 0 */
import DouyinIndexView from './components/DouyinIndexView.vue';
import DouyinSearchVideoView from './components/DouyinSearchVideoView.vue';
import DouyinFansView from './components/DouyinFansView.vue';
import DouyinCommentsView from './components/DouyinCommentsView.vue';
import DouyinDataView from './components/DouyinDataView.vue';
import { frontendURL } from '../../../helper/URLHelper';
import SettingsWrapper from '../settings/Wrapper';

export const routes = [
  {
    path: frontendURL('accounts/:accountId/douyin'),
    component: SettingsWrapper,
    props: {
      headerTitle: '抖音营销助手',
      icon: 'douyin',
      showNewButton: false,
      showSidemenuIcon: false,
    },
    children: [
      {
        path: '',
        name: 'douyin_index',
        component: DouyinIndexView,
        roles: ['administrator', 'agent'],
      },
      {
        path: 'search_video',
        name: 'douyin_search_video',
        component: DouyinSearchVideoView,
        roles: ['administrator', 'agent'],
      },
      {
        path: 'fans',
        name: 'douyin_fans',
        component: DouyinFansView,
        roles: ['administrator', 'agent'],
      },
      {
        path: 'comments',
        name: 'douyin_comments',
        component: DouyinCommentsView,
        roles: ['administrator', 'agent'],
      },
      {
        path: 'data',
        name: 'douyin_data',
        component: DouyinDataView,
        roles: ['administrator', 'agent'],
      },
    ],
  },
];
