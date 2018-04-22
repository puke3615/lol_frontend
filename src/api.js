import {DEFAULT_PAGE_SIZE} from "./config";
import Util from "./util";

const ROOT_URL = 'http://127.0.0.1:8080';
const url = postfix => `${ROOT_URL}${postfix}`;
const MSG_UNKNOWN_ERROR = "服务器异常，请稍后再试~";

function commonHandle(fetch_chain, callback) {
    fetch_chain
        .then(result => {
            if (callback) {
                callback(result);
            } else {
                if (result.success) {
                    Util.success(JSON.stringify(result.data));
                } else {
                    Util.error(result.msg || MSG_UNKNOWN_ERROR);
                }
            }
        })
        .catch(e => Util.error(e || MSG_UNKNOWN_ERROR));

}

export default class Api {

    static getHeroList(page, callback) {
        let request_url = url(`/hero/getList?page=${page}&pageSize=${DEFAULT_PAGE_SIZE}`);
        commonHandle(fetch(request_url)
            .then(response => {
                if (response && response.ok) {
                    return response.json();
                } else {
                    throw response.statusText;
                }
            }), callback);
    }

}