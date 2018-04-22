import {message} from "antd";

export default class Util {
    static success(msg) {
        return message.success(msg);
    }

    static warning(msg) {
        return message.warning(msg);
    }

    static error(msg) {
        return message.error(msg);
    }
}
