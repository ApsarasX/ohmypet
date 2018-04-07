export default function(url, method, data) {
    return new Promise((resolve, reject) => {
        wx.request({
            url,
            method,
            data,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest'
            },
            success(res) {
                if (res.statusCode === 200) {
                    resolve(res);
                } else {
                    reject(
                        new Error(
                            `the response status code is ${res.statusCode}`
                        )
                    );
                }
            },
            fail() {
                reject(new Error('request fail'));
            }
        });
    });
}
