
//验证表单的工具函数
var valitade = (function(){
    var messages = {
        isEmpty :'信息不完整',
        isMobile:'手机号输入不正确',
        isCard:'身份证号输入不正确'
    };
    //验证的正则表达
    var Patterns = {
        // 手机
        mobile: /^1\d{10}$/,
        //  身份证
        idCard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
        // 护照
        passport: /^[a-zA-Z0-9]{5,17}$/,
    };
    var valitadeTypes = {
        isEmpty: function (value){
            if(value===null || value.length===0){
                return true;
            }
            return false;
        },
        isMobile: function (value){
            if (Patterns.isMobile.test(value)){
                return true;
            }
            return false;
        },
        idCard: function (value){
            if (Patterns.idCard.test(value)){
                return true;
            }
            return false;
        }
    };
    return function (value, type){
        if (valitadeTypes[type](value)){
            return messages[type];
        }
    }
})();
module.exports = {
    valitade: valitade,
}