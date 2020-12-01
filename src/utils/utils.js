export default {
    formateDate(time) {
        if (!time) return '';
        let date = new Date(time);
        return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日${date.getHours()}点${date.getMinutes()}分${date.getSeconds()}秒`
    }
}