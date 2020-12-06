// import jsonp from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';

export default class Axios {
    static ajax(options) {
        let loading;
        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        let base = 'http://106.12.220.186:4000/api';
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: base,
                timeout:5000,
                params: (options.data && options.data.params) || '' // 
            }).then((response) => {
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if (response.status === 200) { // http 请求本身的验证
                    let res = response.data;
                    if (res.code === 0) { // API 提供的验证
                        resolve(res);
                    } else {
                        Modal.info({
                            title: '提示',
                            content: res.msg
                        });
                    }
                } else {
                    reject(response.data);
                }
            })
        });
    }
}