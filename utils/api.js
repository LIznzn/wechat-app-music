const baseUrl = "https://neteasemusic.leanapp.cn";
const baseUrl1 = "https://musicapi.leanapp.cn";

const wxRequst = (params, url) => {
  wx.showToast({
    title: '加载中...',
    icon: 'loading'
  });
  wx.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {
      'Content-Type': 'application/json'
    },
    success: (resp) => {
      params.success && params.success(resp)
      wx.hideToast()
    },
    fail: (resp) => {
      params.fail && params.fail(resp)
    },
    complete: (resp) => {
      params.complete && params.complete(resp)
    }
  })
}

// 推荐音乐
const getRecommendMusicList = (parmas) => { wxRequst(parmas, baseUrl + '/personalized') };
// 获取歌单列表
const getMusicList = (parmas) => { wxRequst(parmas, baseUrl1 + '/playlist/detail') };
// 获取精品歌单列表
const getBoutiqueList = (parmas) => { wxRequst(parmas, baseUrl1 +  '/top/playlist/highquality')};
// 获取开始搜索
const searchStart = (parmas) => { wxRequst(parmas, baseUrl + '/search') };
// 获取热门搜索
const getHotSearch = (parmas) => { wxRequst(parmas, baseUrl + '/personalized/newsong') };
// 获取歌曲详情
const getSongDetai = (parmas) => { wxRequst(parmas, baseUrl + '/song/detail') };


module.exports = {
  getRecommendMusicList,
  getMusicList,
  getBoutiqueList,
  searchStart,
  getHotSearch,
  getSongDetai
}