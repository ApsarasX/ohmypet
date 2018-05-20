module.exports = {
    // 微信用户id
    openid: {
        type: String,
        required: true,
        example: 'o04r60HKYOIR7Wzl-Utoaq68OVYk'
    },
    // 微信用户昵称
    nickName: {
        type: String,
        required: true,
        example: '风硕依源'
    },
    // 用户头像
    avatarUrl: {
        type: String,
        required: true,
        exmaple: 'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/pic/item/2f738bd4b31c870' +
                '11dd2ccea2b7f9e2f0708ff52.jpg'
    },
    // 用户的性别，值为1时是男性，值为2时是女性，值为0时是未知
    gender: {
        type: Number,
        required: true,
        example: 0
    },
    mobile: {
        type: String,
        required: true,
        example: '13201685806'
    }
};
