// 免密版本 password.js

function isPasswordProtected() {
    return false; // 永远不需要密码
}

function isPasswordRequired() {
    return false; // 永远不要求密码
}

function ensurePasswordProtection() {
    return true; // 直接通过
}

async function verifyPassword(password) {
    return true; // 输入任何都通过
}

function isPasswordVerified() {
    return true; // 永远已验证
}

function showPasswordModal() {
    // 不显示弹窗
}

function hidePasswordModal() {}
function showPasswordError() {}
function hidePasswordError() {}
async function handlePasswordSubmit() {}
function initPasswordProtection() {
    // 不做任何验证
}

// 覆盖全局方法
window.isPasswordProtected = isPasswordProtected;
window.isPasswordRequired = isPasswordRequired;
window.isPasswordVerified = isPasswordVerified;
window.verifyPassword = verifyPassword;
window.ensurePasswordProtection = ensurePasswordProtection;

// 页面加载直接初始化（但什么也不做）
document.addEventListener('DOMContentLoaded', function () {
    initPasswordProtection();
});
