module.exports = {
    // 商家宠物屋封面
    cover: {
        type: String,
        required: true,
        exmaple: 'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/pic/item/77094b36acaf2ed' +
                'd82ff36e5811001e9390193ab.jpg'
    },
    // 是否信用认证
    certification: {
        type: String,
        required: true,
        exmaple: true
    },
    // 商家宠物屋名字
    name: {
        type: String,
        required: true,
        exmaple: '商家的宠物屋'
    },
    // 商家接单状态
    status: {
        // 状态文本
        text: {
            type: String,
            required: true
        },
        // 状态代码
        code: {
            type: Number,
            required: true
        }
    },
    // 价格
    price: {
        type: Number,
        required: true,
        exmaple: 30
    },
    // 距离
    distance: {
        type: Number,
        required: true,
        exmaple: 15
    },
    // 评分
    rate: {
        type: Number,
        required: true,
        range: [0, 5],
        exmaple: 3.0
    }
};
