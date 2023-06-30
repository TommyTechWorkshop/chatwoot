import { frontendURL } from '../../../../helper/URLHelper';

const douyin = accountId => ({
  parentNav: 'douyin',
  routes: [
    'douyin_index',
    'douyin_search_video',
    'douyin_fans',
    'douyin_comments',
    'douyin_data',
  ],
  menuItems: [
    {
      icon: 'douyin',
      label: '主页',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/douyin`),
      toStateName: 'douyin_index',
    },
    {
      icon: 'douyin',
      label: '关键词视频管理',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/douyin/search_video`),
      toStateName: 'douyin_search_video',
    },
    {
      icon: 'douyin',
      label: '粉丝判断',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/douyin/fans`),
      toStateName: 'douyin_fans',
    },
    {
      icon: 'douyin',
      label: '管理视频评论',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/douyin/comments`),
      toStateName: 'douyin_comments',
    },
    {
      icon: 'douyin',
      label: '数据管理',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/douyin/data`),
      toStateName: 'douyin_data',
    },
  ],
});

export default douyin;
