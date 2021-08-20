//#region BUGS: prevent reload when click back chrome button
// window.onpopstate = function(event) {
//     alert("pop");
// };
// // history.pushState(null, null, document.URL);
// //    window.addEventListener('popstate', function () {
// //    history.pushState(null, null, document.URL);
// // });

// history.scrollRestoration;
// history.pushState;
// alert(hello());
//#endregion

//#region TEST: call API
// var len = 0;
// fetch("db.json")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         // len = data.directoryMainItemLinksInfo.length;
//         console.log(data);
//     });
// setTimeout(function () {
//     console.log(len)
// }, 1000)
//#endregion


/* A. WEBSITE WHEN NOT LOGIN (INITIAL STATUS) */

//#region OBJECTS DECLARATION
//#region 1. Best Common
var html = document.querySelector('html');
var body = document.querySelector('body');
var app = document.getElementById('app');
var registerPage = document.getElementById('register-page');
var loginPage = document.getElementById('login-page');
var header = document.getElementById('header');
var container = document.getElementById('container');
var content = document.getElementById('content');
var footerText = document.querySelector('.footer__text');
var footerDirectory = document.querySelector('.footer__directory');
var modal = document.getElementById('modal');
var headerShopeeLogo = document.querySelector('.header__shopee-logo');
//#endregion

//#region 2. Register Page
var headerRegisterBtn = document.querySelector('.header__register__btn');
var registerPageHeader = document.querySelector('.register-page__header');
var registerPageContent = document.querySelector('.register-page__content');
var registerPageHeaderShopeeLink = document.querySelector('.register-page__header-shopee__link');

var registerPageContentFormInput = document.querySelector('.register-page__content-form__input');
var registerPageContentFormInputTextInvalidPhoneNumber = document.querySelector('.register-page__content-form__input-text--invalid-phone-number');
var registerPageContentFormInputIconValidPhoneNumber = document.querySelector('.register-page__content-form__input-icon--valid-phone-number');
var registerPageContentFormNextBtn = document.querySelector('.register-page__content-form__next-btn');
var registerPageContentFormFacebookBtn = document.querySelector('.register-page__content-form__other-ways__facebook');
var registerPageContentFormGoogleBtn = document.querySelector('.register-page__content-form__other-ways__google');
var registerPageContentFormAppleBtn = document.querySelector('.register-page__content-form__other-ways__apple');
var registerPageContentFormAskForLoginBtn = document.querySelector('.register-page__content-form__ask-for-login__login-btn');

var registerPageConfirmation = document.querySelector('.register-page__confirmation');
var registerPageConfirmationFirstForm = document.querySelector('.register-page__confirmation__first-form');
var registerPageConfirmationSecondForm = document.querySelector('.register-page__confirmation__second-form');
var registerPageConfirmationThirdForm = document.querySelector('.register-page__confirmation__third-form');

var registerPageConfirmationFirstFormHeaderText = document.querySelector('.register-page__confirmation__first-form__header__text');
var registerPageConfirmationFirstFormHeaderBackBtn = document.querySelector('.register-page__confirmation__first-form__header__back-btn');
var registerPageConfirmationFirstFormContent = document.querySelector('.register-page__confirmation__first-form__content');
var registerPageConfirmationFirstFormContentUserPhoneNumber = document.querySelector('.register-page__confirmation__first-form__content__user-phone-number');
var registerPageConfirmationFirstFormContentInput = document.querySelector('.register-page__confirmation__first-form__content__input');
var registerPageConfirmationFirstFormContentHelpResendBtn = document.querySelector('.register-page__confirmation__first-form__content__help-resend-btn');
var registerPageConfirmationFirstFormContentHelpOtherWayBtn = document.querySelector('.register-page__confirmation__first-form__content__help-other-way-btn');
var registerPageConfirmationFirstFormContentConfirmBtn = document.querySelector('.register-page__confirmation__first-form__content__confirm-btn');
var registerPageConfirmationFirstFormContentNotifyError = document.querySelector('.register-page__confirmation__first-form__content__notify-error');


var registerPageConfirmationSecondFormContent = document.querySelector('.register-page__confirmation__second-form__content');
var registerPageConfirmationSecondFormHeaderBackBtn = document.querySelector('.register-page__confirmation__second-form__header__back-btn');
var registerPageConfirmationSecondFormContentInput = document.querySelector('.register-page__confirmation__second-form__content__input');
var registerPageConfirmationSecondFormContentInputStatusBtn = document.querySelector('.register-page__confirmation__second-form__content__input-status-btn');
var registerPageConfirmationSecondFormContentInputStatusBtnShowing = document.querySelector('.register-page__confirmation__second-form__content__input-status-btn__showing');
var registerPageConfirmationSecondFormContentInputStatusBtnHiding = document.querySelector('.register-page__confirmation__second-form__content__input-status-btn__hiding');
var registerPageConfirmationSecondFormContentRegisterBtn = document.querySelector('.register-page__confirmation__second-form__content__register-btn');
var registerPageConfirmationSecondFormContentInputPart = document.querySelector('.register-page__confirmation__second-form__content__input-part');

var registerPageConfirmationThirdFormContentFirstNotifyUserPhoneNumber = document.querySelector('.register-page__confirmation__third-form__content-first-notify__user-phone-number');
var registerPageConfirmationThirdFormContentSecondNotifySecondsNumber = document.querySelector('.register-page__confirmation__third-form__content-second-notify__seconds-number');
var registerPageConfirmationThirdFormContentBackToShopeeBtn = document.querySelector('.register-page__confirmation__third-form__content-back-to-shopee-btn');

//#endregion

//#region 3. Login Page
var headerLoginBtn = document.querySelector('.header__login__btn');
var headerNotificationPopupWhenNotLoginLoginBtn = document.querySelector('.header__notification__popup--when-not-login__login-btn');
var headerLogoutBtn = document.querySelector('.header__logout-btn');
var loginPageHeaderShopeeLink = document.querySelector('.login-page__header-shopee__link');

var loginPageContentForm = document.querySelector('.login-page__content-form');
var loginPageContentFormNotifyError = document.querySelector('.login-page__content-form__notify-error');
var loginPageContentFormFirstInput = document.querySelector('.login-page__content-form__first-input');
var loginPageContentFormFirstInputPartInvalid = document.querySelector('.login-page__content-form__first-input-part--invalid');
var loginPageContentFormFirstInputInvalid = document.querySelector('.login-page__content-form__first-input--invalid');


var loginPageContentFormSecondInputMain = document.querySelector('.login-page__content-form__second-input-main');
var loginPageContentFormSecondInput = document.querySelector('.login-page__content-form__second-input');
var loginPageContentFormSecondInputPartInvalid = document.querySelector('.login-page__content-form__second-input-part--invalid');
var loginPageContentFormSecondInputInvalid = document.querySelector('.login-page__content-form__second-input--invalid');
var loginPageContentFormLoginBtn = document.querySelector('.login-page__content-form__login-btn');

var loginPageContentFormSecondInputStatusBtn = document.querySelector('.login-page__content-form__second-input-status-btn');
var loginPageContentFormSecondInputStatusBtnShowing = document.querySelector('.login-page__content-form__second-input-status-btn__showing');
var loginPageContentFormSecondInputStatusBtnHiding = document.querySelector('.login-page__content-form__second-input-status-btn__hiding');

var loginPageContentFormUnderLoginBtnForgetPasswordBtn = document.querySelector('.login-page__content-form__under-login-btn__forget-password-btn');
var loginPageContentFormUnderLoginBtnLoginWithSMS = document.querySelector('.login-page__content-form__under-login-btn__login-with-sms');
var loginPageContentFormOtherWaysFacebook = document.querySelector('.login-page__content-form__other-ways__facebook');
var loginPageContentFormOtherWaysGoogle = document.querySelector('.login-page__content-form__other-ways__google');
var loginPageContentFormOtherWaysApple = document.querySelector('.login-page__content-form__other-ways__apple');
var loginPageContentFormAskForRegisterRegisterBtn = document.querySelector('.login-page__content-form__ask-for-register__register-btn');

//#endregion

//#region 4. Header
var headerLinksBecomeAShopeeSeller = document.querySelector('.header__links-become-a-shopee-seller');

var headerNotificationLink = document.querySelector('.header__notification__link');
var headerNotificationPopupWhenNotLogin = document.querySelector('.header__notification__popup--when-not-login');
var headerNotificationPopupWhenNotLoginRegisterBtn = document.querySelector('.header__notification__popup--when-not-login__register-btn');
var headerNotificationQuantity = document.querySelector('.header__notification__quantity');
var headerNotificationPopupWhenLoggedIn = document.querySelector('.header__notification__popup--when-logged-in');

var headerRegister = document.querySelector('.header__register');
var headerLogin = document.querySelector('.header__login');
var headerUserAccount = document.querySelector('.header__user-account');
//#endregion

//#region 5. Motion Parts
var motionPartSubBanner = document.querySelector('.motion-part__sub-banner');
var giftBanner = document.querySelector('.gift-banner');
var giftBannerPopup = document.querySelector('.gift-banner__popup');
var giftBannerPopupCloseBtn = document.querySelector('.gift-banner__popup__close-btn');
var motionPartChat = document.querySelector('.motion-part__chat');
var pageLoadBanner = document.querySelector('.page-load-banner');
var pageLoadBannerCloseBtn = document.querySelector('.page-load-banner__close-btn');
//#endregion
//#endregion


//#region (f) loadInitialWebsite
function loadInitialWebsite () {
    window.scrollTo(0, 0);
    registerPage.style.display = 'none';
    loginPage.style.display = 'none';
    headerNotificationLink.removeAttribute('href');
    headerNotificationQuantity.style.display = 'none';
    headerNotificationPopupWhenLoggedIn.style.display = 'none';
    headerUserAccount.style.display = 'none';
    motionPartChat.style.display = 'none';
    
    app.style.display = 'block';
    header.style.display = 'block';
    container.style.display = 'block';
    footer.style.display = 'block';
    footerText.style.display = 'block';
    footerDirectory.style.display = 'block';

    modal.style.display = 'block';
    body.style.overflow = 'hidden';
    app.style.position = 'fixed';
    app.style.top = '0';
    app.style.left = '0';
    app.style.right = '0';
    app.style.bottom = '0';

    pageLoadBanner.style.display = 'block';
    giftBannerPopup.style.display = 'none';
}

loadInitialWebsite();
//#endregion

//#region (f) loadInitialWebsiteNoModal
function loadInitialWebsiteNoModal () {
    window.scrollTo(0, 0);
    registerPage.style.display = 'none';
    loginPage.style.display = 'none';
    headerNotificationLink.removeAttribute('href');
    headerNotificationQuantity.style.display = 'none';
    headerNotificationPopupWhenLoggedIn.style.display = 'none';
    headerUserAccount.style.display = 'none';
    motionPartChat.style.display = 'none';
    
    body.style.overflow = 'visible';
    app.style.position = 'absolute';
    content.style.position = 'relative';
    content.style.top = '0';

    app.style.display = 'block';
    header.style.display = 'block';
    container.style.display = 'block';
    footer.style.display = 'block';
    footerText.style.display = 'block';
    footerDirectory.style.display = 'block';
}

// At registerPage/loginPage, click Shopee logo -> back initial page (no modal, no reload)
loginPageHeaderShopeeLink.addEventListener('click', function(e) {
    e.preventDefault();
    setTimeout(function() {
        loadInitialWebsiteNoModal();
    }, 500)
});

registerPageHeaderShopeeLink.addEventListener('click', function(e) {
    e.preventDefault();
    setTimeout(function() {
        loadInitialWebsiteNoModal();
    }, 500)
});

//#endregion 


//#region gift-banner onclick()
giftBanner.addEventListener('click', function() {
    modal.style.display = 'block';
    giftBannerPopup.style.display = 'block';
    // prevent scrolling
    body.style.overflow = 'hidden';
});
//#endregion
  
//#region modal onclick() 
modal.onclick = function (e) {
    setTimeout(function () {
        body.style.overflow = 'visible';
        modal.style.display = 'none';
        app.style.position = 'absolute';
        content.style.position = 'relative';
        content.style.top = '0';

        if(pageLoadBanner.style.display == 'block') {
            pageLoadBanner.style.display = 'none';
        } 
        if(giftBannerPopup.style.display == 'block') {
            giftBannerPopup.style.display = 'none';
        }
    }, 100);
}
//#endregion   

//#region giftBannerPopup, giftBannerPopupCloseBtn onclick()
giftBannerPopup.onclick = function (e) {
    e.stopPropagation();
}

giftBannerPopupCloseBtn.onclick = function (e) {
    e.stopPropagation();
    modal.click();
}
//#endregion


//#region I. REGISTER PAGE 

//#region Click to to REGISTER PAGE
function loadRegisterPage () {
    setTimeout(function () {
        registerPage.style.display = 'block';
        registerPageContent.style.display = 'block';
        registerPageConfirmation.style.display = 'none';

        loginPage.style.display = 'none';
        header.style.display = 'none';
        container.style.display = 'none';
        footerText.style.display = 'none';
        footerDirectory.style.display = 'none';
        motionPartSubBanner.style.display = 'none';
        motionPartChat.style.display = 'none';
        modal.style.display = 'none';
        pageLoadBanner.style.display = 'none';
        giftBannerPopup.style.display = 'none';

        setTimeout(function () {
            window.scrollTo(0, 0);
        },200);
    }, 500);
}

headerRegisterBtn.addEventListener('click', loadRegisterPage);
headerNotificationPopupWhenNotLoginRegisterBtn.addEventListener('click', loadRegisterPage);
//#endregion


//#region ---> CONTENT

//#region (f) set - unset RegisterPageConfirmationStepItemActive
function setRegisterPageConfirmationStepItemActive (nthChild) {
    var registerPageConfirmationStepItem = 
        document.querySelector(`.register-page__confirmation__step-item:nth-child(${nthChild})`);

    // div.register-page__confirmation__step-item-number
    registerPageConfirmationStepItem.children[0].style.backgroundColor = '#6c0';
    registerPageConfirmationStepItem.children[0].style.borderColor = '#6c0';
    registerPageConfirmationStepItem.children[0].style.color = '#fff';
    
    // Special case (the last element): have svg tag
    if (nthChild == 5) {
        registerPageConfirmationStepItem.children[0].children[0].style.fill = '#fff';
    }
    
    // span.register-page__confirmation__step-item-name
    registerPageConfirmationStepItem.children[1].style.color = '#6c0';
}

function unsetRegisterPageConfirmationStepItemActive (nthChild) {
    var registerPageConfirmationStepItem = 
        document.querySelector(`.register-page__confirmation__step-item:nth-child(${nthChild})`);

    // div.register-page__confirmation__step-item-number
    registerPageConfirmationStepItem.children[0].style.backgroundColor = '#fff';
    registerPageConfirmationStepItem.children[0].style.borderColor = 'rgba(0,0,0,.26)';
    registerPageConfirmationStepItem.children[0].style.color = 'rgba(0,0,0,.26)';

    // span.register-page__confirmation__step-item-name
    registerPageConfirmationStepItem.children[1].style.color = 'rgba(0, 0, 0, 0.26)';

    // Special case (the last element): have svg tag
    if (nthChild == 5) {
        registerPageConfirmationStepItem.children[0].children[0].style.fill = 'rgba(0, 0, 0, 0.26)';
    }
}
//#endregion

//#region (f) set - unset RegisterPageConfirmationStepLineActive
function setRegisterPageConfirmationStepLineActive (nthChild) {
    var registerPageConfirmationStepLine = 
        document.querySelector(`.register-page__confirmation__step-line:nth-child(${nthChild})`);
        
    var registerPageConfirmationStepLineLine = document.querySelector(`
        .register-page__confirmation__step-line:nth-child(${nthChild}) > .register-page__confirmation__step-line__line`);
    var registerPageConfirmationStepLineIcon = document.querySelector(`
        .register-page__confirmation__step-line:nth-child(${nthChild}) > .register-page__confirmation__step-line__icon`);

    registerPageConfirmationStepLineLine.style.backgroundColor = "rgb(102, 204, 0)";
    registerPageConfirmationStepLineIcon.style.color = "rgb(102, 204, 0)";
}

function unsetRegisterPageConfirmationStepLineActive (nthChild) {
    var registerPageConfirmationStepLine = 
        document.querySelector(`.register-page__confirmation__step-line:nth-child(${nthChild})`);

    var registerPageConfirmationStepLineLine = document.querySelector(`
        .register-page__confirmation__step-line:nth-child(${nthChild}) > .register-page__confirmation__step-line__line`);
    var registerPageConfirmationStepLineIcon = document.querySelector(`
        .register-page__confirmation__step-line:nth-child(${nthChild}) > .register-page__confirmation__step-line__icon`);

    registerPageConfirmationStepLineLine.style.backgroundColor = "rgba(0,0,0,.26)";
    registerPageConfirmationStepLineIcon.style.color = "rgba(0,0,0,.26)";
}
//#endregion


var confirmationCodes = [
    '871622', '675620', '990873', '022722', '223334', 
    '345722', '454612', '231179', '529960', '104682'
];
var currentConfirmationCode;


var checkValidPhoneNumberRegister = false;

registerPageContentFormInput.addEventListener('keydown', function (e) {
    if (e.code == 'Enter') {
        e.preventDefault();
    }

    setTimeout(function() {
        // If enter other keys except 'Enter'
        if (e.code != 'Enter') {
            if (e.target.value.length == 10) { 
                // 1.check value[0] = 0 && value[1] != 0 ??
                var checkFirstAndSecondLetter = (
                    e.target.value[0].charCodeAt() == 48
                    && e.target.value[1].charCodeAt() >= 49
                    && e.target.value[1].charCodeAt() <= 57
                ); 
    
                // 2.check value[2] -> value[9] all is a integer character in range 0-9 ??
                checkValidPhoneNumberRegister = e.target.value.slice(2).split('').every(function (a) {
                    return (a.match(/[0-9]/g) && a.match(/[0-9]/g).length == 1);
                })

                // 3.checkValidPhoneNumberRegister value
                if (checkFirstAndSecondLetter && checkValidPhoneNumberRegister) {
                    checkValidPhoneNumberRegister = true;

                    // hide error
                    registerPageContentFormInput.classList.remove('register-page__content-form__input--invalid-phone-number');
                    registerPageContentFormInputTextInvalidPhoneNumber.style.display = 'none';
                    registerPageContentFormInputIconValidPhoneNumber.style.display = 'block';

                    // change opacity of button 'Tiếp theo', cursor: pointer
                    registerPageContentFormNextBtn.style.opacity = '1';
                    registerPageContentFormNextBtn.style.cursor = 'pointer'
                } 
                else {
                    checkValidPhoneNumberRegister = false;
                }
            } 
            else {
                checkValidPhoneNumberRegister = false;

                // show error
                registerPageContentFormInput.classList.add('register-page__content-form__input--invalid-phone-number');
                registerPageContentFormInputTextInvalidPhoneNumber.style.display = 'block';
                registerPageContentFormInputIconValidPhoneNumber.style.display = 'none';
    
                // change opacity of button 'Tiếp theo', cursor: not-allowed
                registerPageContentFormNextBtn.style.opacity = '0.7';
                registerPageContentFormNextBtn.style.cursor = 'not-allowed'
            }
        }
        else {
            if (checkValidPhoneNumberRegister == false) {
                // show error
                registerPageContentFormInput.classList.add('register-page__content-form__input--invalid-phone-number');
                registerPageContentFormInputTextInvalidPhoneNumber.style.display = 'block';
                registerPageContentFormInputIconValidPhoneNumber.style.display = 'none';
            } 
            else {
                registerPageContentFormNextBtn.click();
            }
        }
    }, 0);
});


registerPageContentFormNextBtn.addEventListener('mouseover', function (e) {
    if (e.target.style.cursor == 'pointer') {
        e.target.style.opacity = '0.92';
    }
    else {
        e.preventDefault();
    }
});

registerPageContentFormNextBtn.addEventListener('mouseleave', function (e) {
    if (e.target.style.cursor == 'pointer') {
        e.target.style.opacity = '1';
    }
    else {
        e.preventDefault();
    }
});


registerPageContentFormNextBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (checkValidPhoneNumberRegister == true) {
        // Event mousedown 
        var currentInputValue = registerPageContentFormInput.value;
        registerPageContentFormInput.value = `(+84) ${currentInputValue.slice(-9)}`;

        setTimeout(function () {
            registerPageContent.style.display = 'none';
            registerPageConfirmation.style.display = 'flex';

            // set-unset registerPageConfirmationStepItemActive, registerPageConfirmationStepLineActive
            setRegisterPageConfirmationStepItemActive(1);
            unsetRegisterPageConfirmationStepLineActive(2);
            unsetRegisterPageConfirmationStepItemActive(3);
            unsetRegisterPageConfirmationStepLineActive(4);
            unsetRegisterPageConfirmationStepItemActive(5);

            registerPageConfirmationFirstForm.style.height = "49.4rem";
            registerPageConfirmationFirstFormContentNotifyError.style.display = 'none';
            registerPageConfirmationFirstFormContentInput.value = '';
                
            registerPageHeader.style.boxShadow = "0 6px 6px rgb(0 0 0 / 6%)";
            registerPageConfirmationFirstForm.style.height = "49.4rem";
            registerPageConfirmationFirstFormContentUserPhoneNumber.innerHTML = registerPageContentFormInput.value;
            
            registerPageConfirmationFirstForm.style.display = 'block';
            registerPageConfirmationSecondForm.style.display = 'none';
            registerPageConfirmationThirdForm.style.display = 'none';

            registerPageConfirmationFirstFormContentConfirmBtn.style.opacity = '0.7';
            registerPageConfirmationFirstFormContentConfirmBtn.style.cursor = 'not-allowed';

            setTimeout(function () {
                currentConfirmationCode = confirmationCodes[Math.floor(Math.random() * confirmationCodes.length)];
                alert(`Mã xác nhận của bạn là "${currentConfirmationCode}"`);
            }, 800);
        }, 500);


        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 200)
    }
    else {
        e.preventDefault();
    }
});

registerPageContentFormNextBtn.addEventListener('mousedown', function(e) {
    e.preventDefault();
    if (checkValidPhoneNumberRegister == true) {
        var currentInputValue = registerPageContentFormInput.value;
        registerPageContentFormInput.value = `(+84) ${currentInputValue.slice(-9)}`;
    }
});
    
//#region *Not handle these buttons, just preventDefault 
registerPageContentFormFacebookBtn.addEventListener('click', function(e) {
    e.preventDefault();
});
registerPageContentFormGoogleBtn.addEventListener('click', function(e) {
    e.preventDefault();
});
registerPageContentFormAppleBtn.addEventListener('click', function(e) {
    e.preventDefault();
});
registerPageContentFormAskForLoginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    setTimeout(function() {
        loadLoginPage();
        window.scrollTo(0, 0);
    }, 200)
});
registerPageConfirmationFirstFormContentHelpOtherWayBtn.addEventListener('click', function(e) {
    e.preventDefault();
});
registerPageConfirmationFirstFormContentHelpResendBtn.addEventListener('click', function(e) {
    e.preventDefault();
    registerPageConfirmationFirstFormContentInput.value = '';
    setTimeout(function () {
        // random
        currentConfirmationCode = confirmationCodes[Math.floor(Math.random() * confirmationCodes.length)];
        alert(`Mã xác nhận của bạn là "${currentConfirmationCode}"`);
    }, 1000);
});
//#endregion

//#endregion


//#region ---> 1ST CONFIRMATION

registerPageConfirmationFirstFormHeaderBackBtn.addEventListener('click', function (e) {
    e.preventDefault()

    loadRegisterPage();
    registerPageConfirmationFirstFormContentUserPhoneNumber.innerHTML = registerPageContentFormInput.value;

    // set-unset registerPageConfirmationStepItemActive, registerPageConfirmationStepLineActive
    unsetRegisterPageConfirmationStepItemActive(1);
    unsetRegisterPageConfirmationStepLineActive(2);
    unsetRegisterPageConfirmationStepItemActive(3);
    unsetRegisterPageConfirmationStepLineActive(4);
    unsetRegisterPageConfirmationStepItemActive(5);

    setTimeout(function () {
        window.scrollTo(0, 0);
    },200)
});

registerPageConfirmationFirstFormContentInput.addEventListener('keydown', function (e) {
    // if enter 'Enter'
    if (e.keyCode == 13) {
        e.preventDefault();
    }

    setTimeout(function () {
        if (e.target.value.length == 6) {
            // if enter 'Enter'
            if (e.keyCode == 13) {
                registerPageConfirmationFirstFormContentConfirmBtn.click();
            }

            // change opacity of button 'XÁC NHẬN', cursor: pointer
            registerPageConfirmationFirstFormContentConfirmBtn.style.opacity = '1';
            registerPageConfirmationFirstFormContentConfirmBtn.style.cursor = 'pointer';
        }
        else {
            // if enter 'Enter'
            if (e.keyCode == 13) {
                e.preventDefault();
            }

            // change opacity of button 'XÁC NHẬN', cursor: not-allowed
            registerPageConfirmationFirstFormContentConfirmBtn.style.opacity = '0.7';
            registerPageConfirmationFirstFormContentConfirmBtn.style.cursor = 'not-allowed';
        }
    }, 0);
});


//#region Check for next step
registerPageConfirmationFirstFormContentConfirmBtn.addEventListener('click', function(e) {
    e.preventDefault();

    setTimeout(function() {
        if (registerPageConfirmationFirstFormContentInput.value.length == 6) {
            if (registerPageConfirmationFirstFormContentInput.value == currentConfirmationCode) {
                // set-unset registerPageConfirmationStepItemActive, registerPageConfirmationStepLineActive
                setRegisterPageConfirmationStepItemActive(1);
                setRegisterPageConfirmationStepLineActive(2);
                setRegisterPageConfirmationStepItemActive(3);
                unsetRegisterPageConfirmationStepLineActive(4);
                unsetRegisterPageConfirmationStepItemActive(5);

                registerPageConfirmationFirstForm.style.display = 'none';
                registerPageConfirmationSecondForm.style.display = 'block';
                registerPageConfirmationFirstForm.style.height = "49.4rem";
                registerPageConfirmationFirstFormContentNotifyError.style.display = 'none';
                registerPageConfirmationFirstFormContentInput.value = '';
            }
            else {
                // show error
                registerPageConfirmationFirstForm.style.height = "55.3rem";
                registerPageConfirmationFirstFormContentNotifyError.style.display = 'flex';
            }
        }
    }, 500);
});
//#endregion


registerPageConfirmationFirstFormContentConfirmBtn.addEventListener('mouseover', function (e) {
    if (e.target.style.cursor == 'pointer') {
        e.target.style.opacity = '0.92';
    }
    else {
        e.preventDefault();
    }
});

registerPageConfirmationFirstFormContentConfirmBtn.addEventListener('mouseleave', function (e) {
    if (e.target.style.cursor == 'pointer') {
        e.target.style.opacity = '1';
    }
    else {
        e.preventDefault();
    }
});

//#endregion


//#region ---> 2ND CONFIRMATION
// set for mouseover-mouseleave action
registerPageConfirmationSecondFormContentRegisterBtn.style.cursor = 'pointer';

registerPageConfirmationSecondFormContentInputStatusBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (registerPageConfirmationSecondFormContentInput.type == 'text') {
        registerPageConfirmationSecondFormContentInputStatusBtnShowing.style.display = 'none';
        registerPageConfirmationSecondFormContentInputStatusBtnHiding.style.display = 'block';
        registerPageConfirmationSecondFormContentInput.type = 'password';
    } 
    else {
        if (registerPageConfirmationSecondFormContentInput.type == 'password') {
            registerPageConfirmationSecondFormContentInputStatusBtnShowing.style.display = 'block';
            registerPageConfirmationSecondFormContentInputStatusBtnHiding.style.display = 'none';
            registerPageConfirmationSecondFormContentInput.type = 'text';
        }
    }   
});

// Because default value ('Wa.3n.en,mr6@YwT') is true
var checkForRegisterPageConfirmationFormContentThirdStep = true;

registerPageConfirmationSecondFormContentInput.addEventListener('keydown', function (e) {
    var check1 = false, check2 = false, check3 = false;
    
    if (e.code == 'Enter') {
        e.preventDefault();
    }

    setTimeout(function() {
        // If enter 'Enter'
        if (e.code != 'Enter') {
            // 1.Check if each character is 'lowercase character' ?
            check1 = e.target.value.split('').some(function (a) {
                return (a.match(/[a-z]/g) && a.match(/[a-z]/g).length == 1);
            });
    
            // 2.Check if each character is 'uppercase character' ?
            check2 = e.target.value.split('').some(function (a) {
                return (a.match(/[A-Z]/g) && a.match(/[A-Z]/g).length == 1);
            });
            
            // 3.Check if length in range 6-18
            if (e.target.value.length >= 8 && e.target.value.length <= 16) {
                check3 = true;
            }
    
            var checkArray = [check1, check2, check3];
            var registerPageConfirmationSecondFormContentChecksClassName = [
                'register-page__confirmation__second-form__content__check--lowercase',
                'register-page__confirmation__second-form__content__check--uppercase',
                'register-page__confirmation__second-form__content__check--length'
            ];
    
            for (var i = 0; i < checkArray.length; i++) {
                var registerPageConfirmationSecondFormContentCheckText = 
                    document.querySelector(`.${registerPageConfirmationSecondFormContentChecksClassName[i]}
                    > .register-page__confirmation__second-form__content__check-text`);
    
                var registerPageConfirmationSecondFormContentCheckCorrectIcon = 
                    document.querySelector(`.${registerPageConfirmationSecondFormContentChecksClassName[i]}
                    > .register-page__confirmation__second-form__content__check-correct-icon`);
    
                var registerPageConfirmationSecondFormContentCheckWrongIcon = 
                    document.querySelector(`.${registerPageConfirmationSecondFormContentChecksClassName[i]}
                    > .register-page__confirmation__second-form__content__check-wrong-icon`);
    
    
                if (checkArray[i] == true) {
                    registerPageConfirmationSecondFormContentCheckText.style.color = '#6c0';
                    registerPageConfirmationSecondFormContentCheckCorrectIcon.style.display = 'block';
                    registerPageConfirmationSecondFormContentCheckWrongIcon.style.display = 'none';
                }
                else {
                    registerPageConfirmationSecondFormContentCheckText.style.color = '#ff424f';
                    registerPageConfirmationSecondFormContentCheckCorrectIcon.style.display = 'none';
                    registerPageConfirmationSecondFormContentCheckWrongIcon.style.display = 'block';
                }
            }
            
            // If data entry operations is Success or Fail
            if (check1 == true && check2 == true && check3 == true) {
                checkForRegisterPageConfirmationFormContentThirdStep = true;

                registerPageConfirmationSecondFormContentInputPart.classList.remove('register-page__confirmation__second-form__content__input-part--wrong-value');
                registerPageConfirmationSecondFormContentInput.classList.remove('register-page__confirmation__second-form__content__input--invalid');
    
                // change opacity and cursor of 'ĐĂNG KÝ' button
                registerPageConfirmationSecondFormContentRegisterBtn.style.opacity = '1';
                registerPageConfirmationSecondFormContentRegisterBtn.style.cursor = 'pointer';
            } 
            else {
                checkForRegisterPageConfirmationFormContentThirdStep = false;

                registerPageConfirmationSecondFormContentInputPart.classList.add('register-page__confirmation__second-form__content__input-part--wrong-value');
                registerPageConfirmationSecondFormContentInput.classList.add('register-page__confirmation__second-form__content__input--invalid');
                
                // change opacity and cursor of 'ĐĂNG KÝ' button
                registerPageConfirmationSecondFormContentRegisterBtn.style.opacity = '0.7';
                registerPageConfirmationSecondFormContentRegisterBtn.style.cursor = 'not-allowed';
            }
        }
        else {
            registerPageConfirmationSecondFormContentRegisterBtn.click();
        }
    }, 0);
});


registerPageConfirmationSecondFormContentRegisterBtn.addEventListener('mouseover', function (e) {
    if (e.target.style.cursor == 'pointer') {
        e.target.style.opacity = '0.92';
    }
    else {
        e.preventDefault();
    }
});

registerPageConfirmationSecondFormContentRegisterBtn.addEventListener('mouseleave', function (e) {
    if (e.target.style.cursor == 'pointer') {
        e.target.style.opacity = '1';
    }
    else {
        e.preventDefault();
    }
});


registerPageConfirmationSecondFormContentRegisterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    var countdownInterval;

    if (checkForRegisterPageConfirmationFormContentThirdStep == true) {

        registerPageConfirmationThirdFormContentBackToShopeeBtn.addEventListener("click", function(e) {
            e.preventDefault();

            // stop setInterval()
            clearInterval(countdownInterval);

            setTimeout(function() {
                loadInitialWebsite();
                modal.style.display = 'none';
                app.style.position = 'absolute';
                content.style.position = 'relative';
                content.style.top = '0';
                pageLoadBanner.style.display = 'none';
                giftBannerPopup.style.display = 'none';
            }, 1000);
        });

        setTimeout(function () {
            // set-unset registerPageConfirmationStepItemActive, registerPageConfirmationStepLineActive
            setRegisterPageConfirmationStepItemActive(1);
            setRegisterPageConfirmationStepLineActive(2);
            setRegisterPageConfirmationStepItemActive(3);
            setRegisterPageConfirmationStepLineActive(4);
            setRegisterPageConfirmationStepItemActive(5);
            
            registerPageConfirmationSecondForm.style.display = 'none';
            registerPageConfirmationThirdForm.style.display = 'block';

            registerPageConfirmationThirdFormContentFirstNotifyUserPhoneNumber.innerHTML = 
                registerPageContentFormInput.value;

            // Set default second
            var currentSecond = 7;
            registerPageConfirmationThirdFormContentSecondNotifySecondsNumber.innerHTML = currentSecond;

            // Countdown
            countdownInterval = setInterval(function() {
                registerPageConfirmationThirdFormContentSecondNotifySecondsNumber.innerHTML = currentSecond--;

                if (currentSecond == 0) {
                    // --> BUGS
                    loadInitialWebsite();
                    modal.style.display = 'none';
                    app.style.position = 'absolute';
                    content.style.position = 'relative';
                    content.style.top = '0';
                    pageLoadBanner.style.display = 'none';
                    giftBannerPopup.style.display = 'none';

                    // stop setInterval()
                    clearInterval(countdownInterval);
                }
            }, 1000);
        }, 1000);
    }
    else {
        e.preventDefault();
    }
});

registerPageConfirmationSecondFormHeaderBackBtn.addEventListener('click', function (e) {
    e.preventDefault();
    // set-unset registerPageConfirmationStepItemActive, registerPageConfirmationStepLineActive
    setRegisterPageConfirmationStepItemActive(1);
    unsetRegisterPageConfirmationStepLineActive(2);
    unsetRegisterPageConfirmationStepItemActive(3);
    unsetRegisterPageConfirmationStepLineActive(4);
    unsetRegisterPageConfirmationStepItemActive(5);

    registerPageConfirmationSecondForm.style.display = 'none';
    registerPageConfirmationFirstForm.style.display = 'block';
    registerPageConfirmationFirstForm.style.height = "49.4rem";
    registerPageConfirmationFirstFormContentNotifyError.style.display = 'none';
    registerPageConfirmationFirstFormContentInput.value = '';

    registerPageConfirmationFirstFormContentConfirmBtn.style.opacity = '0.7';
    registerPageConfirmationFirstFormContentConfirmBtn.style.cursor = 'not-allowed';
});

// #endregion


//#region ---> 3RD CONFIRMATION
//#endregion

//#endregion I. REGISTER PAGE


//#region II. LOGIN PAGE
function loadLoginPage () {
    setTimeout(function () {
        loginPage.style.display = 'block';
        registerPage.style.display = 'none';

        header.style.display = 'none';
        container.style.display = 'none';
        footerText.style.display = 'none';
        footerDirectory.style.display = 'none';
        motionPartSubBanner.style.display = 'none';
        motionPartChat.style.display = 'none';
        modal.style.display = 'none';
        pageLoadBanner.style.display = 'none';
        giftBannerPopup.style.display = 'none';

        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 200);
    }, 500);
}

function loginSuccess () {
    setTimeout(function () {
        window.scrollTo(0, 0);
    
        // Disabled
        registerPage.style.display = 'none';
        loginPage.style.display = 'none';
        headerLinksBecomeAShopeeSeller.style.display = 'none';
        headerNotificationPopupWhenNotLogin.style.display = 'none';
        headerNotificationLink.href = 'https://shopee.vn/user/notifications/order';
        headerRegister.style.display = 'none';
        headerLogin.style.display = 'none';
        giftBanner.style.display = 'none';
    
        // Visible
        header.style.display = 'block';
        container.style.display = 'block';
        footerText.style.display = 'block';
        footerDirectory.style.display = 'block';
        headerNotificationQuantity.style.display = 'block';
        headerNotificationPopupWhenLoggedIn.style.display = 'block';
        headerUserAccount.style.display = 'block';
        motionPartChat.style.display = 'block';
        motionPartSubBanner.style.display = 'block';

        // modal, body
        body.style.overflow = 'visible';
        app.style.position = 'absolute';
        content.style.position = 'relative';
        content.style.top = '0';

        // if click Shopee logo
        headerShopeeLogo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo(0, 0);
        })
    }, 1000);
} 

//#region click to Login / Logout / Register
headerLogoutBtn.onclick = function () {
    window.location.reload(false);
}

headerLoginBtn.addEventListener('click', loadLoginPage);
headerNotificationPopupWhenNotLoginLoginBtn.addEventListener('click', loadLoginPage);

loginPageContentFormAskForRegisterRegisterBtn.addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(function () {
        loadRegisterPage();
        window.scrollTo(0, 0);
    }, 200);
})
//#endregion click to Login / Logout / Register


//#region *Not handle these buttons, just preventDefault
loginPageContentFormUnderLoginBtnForgetPasswordBtn.addEventListener('click', function(e) {
    e.preventDefault();
});
loginPageContentFormUnderLoginBtnLoginWithSMS.addEventListener('click', function(e) {
    e.preventDefault();
});
loginPageContentFormOtherWaysFacebook.addEventListener('click', function(e) {
    e.preventDefault();
});
loginPageContentFormOtherWaysGoogle.addEventListener('click', function(e) {
    e.preventDefault();
});
loginPageContentFormOtherWaysApple.addEventListener('click', function(e) {
    e.preventDefault();
});
//#endregion


var checkValidPhoneNumberLogin = false;
var checkValidPasswordLogin = true;

loginPageContentFormFirstInput.addEventListener('keydown', function (e) {
    if (e.code == 'Enter') {
        e.preventDefault();
    }

    setTimeout(function () {
        if (e.code != 'Enter') {
            if (e.target.value.length == 10) { 
                // 1.check value[0] = 0 && value[1] != 0 ??
                var checkFirstAndSecondLetter = (
                    e.target.value[0].charCodeAt() == 48
                    && e.target.value[1].charCodeAt() >= 49
                    && e.target.value[1].charCodeAt() <= 57
                ); 
    
                // 2.check value[2] -> value[9] all is a integer character in range 0-9 ??
                checkValidPhoneNumberLogin = e.target.value.slice(2).split('').every(function (a) {
                    return (a.match(/[0-9]/g) && a.match(/[0-9]/g).length == 1);
                })

                // 3.checkValidPhoneNumberLogin value
                if (checkFirstAndSecondLetter && checkValidPhoneNumberLogin) {
                    checkValidPhoneNumberLogin = true;
                    // hide error
                    loginPageContentFormFirstInputPartInvalid.style.display = 'none';
                    loginPageContentFormFirstInput.classList.remove('login-page__content-form__first-input--invalid');
                    if (checkValidPasswordLogin) {
                        // allowed button
                        loginPageContentFormLoginBtn.style.opacity = '1';
                        loginPageContentFormLoginBtn.style.cursor = 'pointer';
                    }
                } 
                else {
                    checkValidPhoneNumberLogin = false;
                    // show error
                    loginPageContentFormFirstInputPartInvalid.style.display = 'block';
                    loginPageContentFormFirstInput.classList.add('login-page__content-form__first-input--invalid');
                    // not-allowed button
                    loginPageContentFormLoginBtn.style.opacity = '0.7';
                    loginPageContentFormLoginBtn.style.cursor = 'not-allowed';
                }
            } 
            else {
                checkValidPhoneNumberLogin = false;
                // show error
                loginPageContentFormFirstInputPartInvalid.style.display = 'block';
                loginPageContentFormFirstInput.classList.add('login-page__content-form__first-input--invalid');
                // not-allowed button
                loginPageContentFormLoginBtn.style.opacity = '0.7';
                loginPageContentFormLoginBtn.style.cursor = 'not-allowed';
            }
        }
        else {
            if (checkValidPhoneNumberLogin == false) {
                e.preventDefault();
                // show error
                loginPageContentFormFirstInputPartInvalid.style.display = 'block';
                loginPageContentFormFirstInput.classList.add('login-page__content-form__first-input--invalid');
                // not-allowed button
                loginPageContentFormLoginBtn.style.opacity = '0.7';
                loginPageContentFormLoginBtn.style.cursor = 'not-allowed';
            }
            else {
                if(checkValidPasswordLogin) {
                    // allowed button
                    loginPageContentFormLoginBtn.style.opacity = '1';
                    loginPageContentFormLoginBtn.style.cursor = 'pointer';

                    console.log('btn click')
                    loginPageContentFormLoginBtn.click();
                }
                else {
                    e.preventDefault();
                    // not-allowed button
                    loginPageContentFormLoginBtn.style.opacity = '0.7';
                    loginPageContentFormLoginBtn.style.cursor = 'not-allowed';
                }
            }
        }
    }, 0);
})

loginPageContentFormSecondInput.addEventListener('keydown', function (e) {
    if (e.code == 'Enter') {
        e.preventDefault();
    }

    setTimeout(function() {
        if (e.code != 'Enter') {
            if (e.target.value.length >= 8 && e.target.value.length <= 16) {
                checkValidPasswordLogin = true;
                //hide error
                loginPageContentFormSecondInputPartInvalid.style.display = 'none';
                loginPageContentFormSecondInput.classList.remove('login-page__content-form__second-input--invalid');
                loginPageContentFormSecondInputMain.classList.remove('login-page__content-form__second-input-main--invalid');
                if (checkValidPhoneNumberLogin) {
                    // allowed button
                    loginPageContentFormLoginBtn.style.opacity = '1';
                    loginPageContentFormLoginBtn.style.cursor = 'pointer';
                }
            }
            else {
                checkValidPasswordLogin = false;
                //show error
                loginPageContentFormSecondInputPartInvalid.style.display = 'block';
                loginPageContentFormSecondInput.classList.add('login-page__content-form__second-input--invalid');
                loginPageContentFormSecondInputMain.classList.add('login-page__content-form__second-input-main--invalid');
                // not-allowed button
                loginPageContentFormLoginBtn.style.opacity = '0.7';
                loginPageContentFormLoginBtn.style.cursor = 'not-allowed';
            }
        }
        else {
            if (checkValidPasswordLogin == false) {
                e.preventDefault();
                //show error
                loginPageContentFormSecondInputPartInvalid.style.display = 'block';
                loginPageContentFormSecondInput.classList.add('login-page__content-form__second-input--invalid');
                loginPageContentFormSecondInputMain.classList.add('login-page__content-form__second-input-main--invalid');
                // not-allowed button
                loginPageContentFormLoginBtn.style.opacity = '0.7';
                loginPageContentFormLoginBtn.style.cursor = 'not-allowed';
            }
            else {
                if (checkValidPhoneNumberLogin) {
                    // allowed button
                    loginPageContentFormLoginBtn.style.opacity = '1';
                    loginPageContentFormLoginBtn.style.cursor = 'pointer';

                    console.log('btn click')    
                    loginPageContentFormLoginBtn.click();
                }
                else {
                    e.preventDefault();
                    // not-allowed button
                    loginPageContentFormLoginBtn.style.opacity = '0.7';
                    loginPageContentFormLoginBtn.style.cursor = 'not-allowed';
                }
            }
        }
    }, 0);
});


loginPageContentFormSecondInputStatusBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (loginPageContentFormSecondInput.type == 'text') {
        loginPageContentFormSecondInputStatusBtnShowing.style.display = 'none';
        loginPageContentFormSecondInputStatusBtnHiding.style.display = 'block';
        loginPageContentFormSecondInput.type = 'password';
    } 
    else {
        if (loginPageContentFormSecondInput.type == 'password') {
            loginPageContentFormSecondInputStatusBtnShowing.style.display = 'block';
            loginPageContentFormSecondInputStatusBtnHiding.style.display = 'none';
            loginPageContentFormSecondInput.type = 'text';
        }
    }   
});


loginPageContentFormLoginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (checkValidPhoneNumberLogin && checkValidPasswordLogin) {
        // Mousedown event
        var currentPhoneNumberInputValue = loginPageContentFormFirstInput.value;
        loginPageContentFormFirstInput.value = `(+84) ${currentPhoneNumberInputValue.slice(-9)}`;

        if (loginPageContentFormFirstInput.value == registerPageContentFormInput.value
            && loginPageContentFormSecondInput.value == registerPageConfirmationSecondFormContentInput.value) {
            
            loginPageContentForm.style.height = '48.2rem';
            loginPageContentFormNotifyError.style.display = 'none';

            setTimeout(function () {
                loginSuccess();
            }, 1000);
        }
        else {
            setTimeout(function () {
                loginPageContentForm.style.height = '55.3rem';
                loginPageContentFormNotifyError.style.display = 'flex';
            }, 500);
        }
    }
    else {
        e.preventDefault();
    }
});


loginPageContentFormLoginBtn.addEventListener('mousedown', function(e) {
    e.preventDefault();
    if (checkValidPhoneNumberLogin && checkValidPasswordLogin) {
        var currentPhoneNumberInputValue = loginPageContentFormFirstInput.value;
        loginPageContentFormFirstInput.value = `(+84) ${currentPhoneNumberInputValue.slice(-9)}`;
    }
});


loginPageContentFormLoginBtn.addEventListener('mouseover', function (e) {
    if (e.target.style.cursor == 'pointer') {
        e.target.style.opacity = '0.92';
    }
    else {
        e.preventDefault();
    }
});

loginPageContentFormLoginBtn.addEventListener('mouseleave', function (e) {
    if (e.target.style.cursor == 'pointer') {
        e.target.style.opacity = '1';
    }
    else {
        e.preventDefault();
    }
});
//#endregion II. LOGIN PAGE




/* B. WEBSITE WHEN LOGGED IN --> UPDATE DATA IN DOM, LISTEN EVENT, ANIMATION, ...*/
// //#region (f) Work with API
// function deleteObj (url, id) {
//     fetch(`${url}/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(function(response) {
//         return response.json();
//     })
//     .catch(function(err) {
//         console.log(err);
//     })
// }

// function createObj (url, data) {
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(function(response) {
//         return response.json();
//     })
//     .catch(function(err) {
//         console.log(err);
//     })
// }
// //#endregion


//#region headerSearchFrameInput, headerSearchHistory
var headerSearchFrameInput = document.querySelector('.header__search-frame__input');
var headerSearchHistory = document.querySelector('.header__search-history');
var headerSearchFrameBtn = document.querySelector('.header__search-frame__btn');
var headerSearchHistoryList = document.querySelector('.header__search-history-list');
var headerSearchHistoryItemIndex = 0;
var headerSearchHistoryItemLinksInfoLength;
//#endregion

// --> OK
//#region updateInDOMHeaderSearchHistoryList
function updateInDOMHeaderSearchHistoryList () {
    fetch("db.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (datas) {
            var liTags = datas.headerSearchHistoryListInfo.map(function (data) {
                return `<li class="header__search-history-item">
                            <a class="header__search-history-item__link" href="${data.href}" target="_blank" rel="noopener noreferrer">${data.innerHTML}</a>
                        </li>`
            });
            headerSearchHistoryList.innerHTML += liTags.join('');
        })
}

updateInDOMHeaderSearchHistoryList();
//#endregion

//--> (1) Cần xử lí (logic -> len) 
//#region 
// var headerSearchHistoryItemLinks = document.querySelectorAll('.header__search-history-item__link');

// // Chưa xử lí
// // // #region (f) removeHeaderSearchHistoryItemInDOM
// // function removeHeaderSearchHistoryItemInDOM () {
// //     var headerSearchHistoryItems = document.querySelectorAll('.header__search-history-item');

// //     for(var i = 1; i < headerSearchHistoryItems.length; i++) {
// //         headerSearchHistoryItems[i].parentNode.removeChild(headerSearchHistoryItems[i]);
// //     }
// // }
// // //#endregion

// // Chưa xử lí
// // //#region (f) updateHeaderSearchHistoryItemLinksInfo
// // function updateHeaderSearchHistoryItemLinksInfo (innerHTML, href) {
// //     var length = headerSearchHistoryItemLinksInfo.length;
// //     if (length == 10) {
// //         //-> insert element at first position of array -> (PUT method)
// //         // headerSearchHistoryItemLinksInfo.unshift({
// //         //     innerHTML, 
// //         //     href
// //         // });

// //         //-> remove last element & remove, updateHeaderSearchHistoryItemInDOM
// //         // headerSearchHistoryItemLinksInfo.pop();
// //         // removeHeaderSearchHistoryItemInDOM();
// //         // updateHeaderSearchHistoryItemInDOM();
// //     } 
// //     else {
// //         //-> insert element at first position of array
// //         // headerSearchHistoryItemLinksInfo.unshift({
// //         //     innerHTML,
// //         //     href
// //         // });
// //     }
// // }
// // //#endregion

// //#region (f) removeHeaderSearchHistoryItemLinksHover
// function removeHeaderSearchHistoryItemLinksHover () {
//     headerSearchHistoryItemLinks.forEach(function (a) {
//         if (a.classList.contains('header__search-history-item__link--hover')) {
//             a.classList.remove('header__search-history-item__link--hover');
//         }
//     });
// }
// //#endregion


// //#region headerSearchFrameInput onclick(), onblur()
// headerSearchFrameInput.onclick = function () {
//     headerSearchHistory.style.display = 'block';
// }

// headerSearchFrameInput.onblur = function () {
//     // return default search option index
//     headerSearchHistoryItemIndex = 0;

//     //-> removeHeaderSearchHistoryItemLinksHover();

//     setTimeout(function() {
//         headerSearchHistory.style.display = 'none';
//     }, 200);
// }
// //#endregion


// //#region headerSearchFrameBtn onclick() 
// headerSearchFrameBtn.addEventListener('click', function(e) {
    
//     if(headerSearchFrameInput.value != '') {
//         var innerHTML = headerSearchFrameInput.value;
//         var href = `https://shopee.vn/search?keyword=` + `${innerHTML}`;

//         // optional
//         headerSearchFrameBtn.href = href;

//         // BUGS...RUN OK BUT NEED JSON JS HANDLE
//         /*
//         updateHeaderSearchHistoryItemLinksInfo(innerHTML, href);
//         removeHeaderSearchHistoryItemInDOM();
//         updateHeaderSearchHistoryItemInDOM();
//         console.log(headerSearchHistoryItemLinksInfo)
//         */
//     }   

//     // setTimeout
// });
// //#endregion


// //#region headerSearchFrameInput onkeydown()
// headerSearchFrameInput.addEventListener('keydown', function(e) {
//     switch (e.keyCode) {
//         // 'Enter'
//         case 13: {
//             e.preventDefault();

//             if (headerSearchFrameInput.value == '') {
//                 //open search page 'with default option' new tab
//                 window.open(
//                     `${headerSearchFrameBtn.href}`,
//                     '_blank'  
//                 );
//             }
//             else {
//                 //open search page 'with keyword' in new tab
//                 window.open(
//                     `https://shopee.vn/search?keyword=` + `${headerSearchFrameInput.value}`,
//                     '_blank'  
//                 );
//             }
//             break;
//         }

//         // 'page up'
//         case 38: {
//             // 1. set next index
//             var headerSearchHistoryItemLength = 
//                 document.querySelectorAll(`.header__search-history-item`).length;

//             // if initial position (in input) or when being active first element
//             if (headerSearchHistoryItemIndex == 0 || headerSearchHistoryItemIndex == 1) {
//                 headerSearchHistoryItemIndex = headerSearchHistoryItemLength;
//             } else {
//                 headerSearchHistoryItemIndex--;
//             }

//             // 2.add class .header__search-history-item__link--hover on next element
//             removeHeaderSearchHistoryItemLinksHover();
//             headerSearchHistoryItemLinks[headerSearchHistoryItemIndex-1].classList.add('header__search-history-item__link--hover');

//             // 3. show current text in headerSearchFrameInput is innerText of headerSearchHistoryItemCurrent
//             var headerSearchHistoryItemCurrent = document.querySelector(`
//                 .header__search-history-item:nth-child(${headerSearchHistoryItemIndex}) > .header__search-history-item__link`);
//             headerSearchFrameInput.value = headerSearchHistoryItemCurrent.innerText.trim();

//             break;
//         }

//         // 'page down'
//         case 40: {
//             // 1. set next index
//             var headerSearchHistoryItemLength = 
//                 document.querySelectorAll(`.header__search-history-item`).length;

//             // when being active last element
//             if (headerSearchHistoryItemIndex == headerSearchHistoryItemLength) {
//                 headerSearchHistoryItemIndex = 1;
//             } else {
//                 headerSearchHistoryItemIndex++;
//             }

//             // 2. add class .header__search-history-item__link--hover on next element
//             removeHeaderSearchHistoryItemLinksHover();
//             headerSearchHistoryItemLinks[headerSearchHistoryItemIndex-1].classList.add('header__search-history-item__link--hover');

//             // 3. show current text in headerSearchFrameInput is innerText of headerSearchHistoryItemCurrent
//             var headerSearchHistoryItemCurrent = document.querySelector(`
//                 .header__search-history-item:nth-child(${headerSearchHistoryItemIndex}) > .header__search-history-item__link`);
//             headerSearchFrameInput.value = headerSearchHistoryItemCurrent.innerText.trim();

//             break;
//         }
//     }
// });
// //#endregion


// //#region headerSearchHistoryItemLink onmouseover(), onmouseout()
// for(var i = 0; i < headerSearchHistoryItemLinks.length; i++) {
//     headerSearchHistoryItemLinks[i].addEventListener('mouseover', function () {
//         // off all
//         removeHeaderSearchHistoryItemLinksHover();
//         // on only it
//         this.classList.add('header__search-history-item__link--hover');
//     });

//     headerSearchHistoryItemLinks[i].addEventListener('mouseleave', function () {
//         // off only it
//         this.classList.remove('header__search-history-item__link--hover');
//     });
// }
// //#endregion
//#endregion


//--> OK
//#region updateInDOMHeaderSearchHistoryKeywordsList
var headerSearchHistoryKeywordsList = document.querySelector('.header__search-history-keywords-list');

function updateInDOMHeaderSearchHistoryKeywordsList () {
    fetch("db.json") 
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) {
            var aTags = datas.headerSearchHistoryKeywordsListInfo.map(function (data) {
                return `<a target="_blank" rel="noopener noreferrer" class="header__search-history-keywords-item" 
                    href="${data.href}">${data.innerHTML}</a>`;
            });
            headerSearchHistoryKeywordsList.innerHTML = aTags.join('');
        })
}

updateInDOMHeaderSearchHistoryKeywordsList ();
//#endregion


//--> OK
//#region updateInDOMHeaderNotificationPopupWhenLoggedInList
var headerNotificationPopupWhenLoggedInList = 
    document.querySelector('.header__notification__popup--when-logged-in__list');

function updateInDOMHeaderNotificationPopupWhenLoggedInList () {
    fetch("db.json") 
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) {
            var liTags = datas.headerNotificationPopupWhenLoggedInListInfo.map(function (data) {
                return `
                    <li class="header__notification__popup--when-logged-in__item">
                        <a target="_blank" rel="noopener noreferrer" href="${data.href}" class="header__notification__popup--when-logged-in__link">
                            <div class="header__notification__popup--when-logged-in__item__img">
                                <img src="${data.itemImage}" alt="">
                            </div>
                            <div class="header__notification__popup--when-logged-in__item__content">
                                <h3 class="header__notification__popup--when-logged-in__item__title">${data.itemTitle}</h3>
                                <p class="header__notification__popup--when-logged-in__item__description">${data.itemDescription}</p>
                            </div>
                        </a>
                    </li>`;
            });
            headerNotificationPopupWhenLoggedInList.innerHTML = liTags.join('');
        })
}

updateInDOMHeaderNotificationPopupWhenLoggedInList();
//#endregion


//#region header__notification, header__notification__quantity onmouseleave()
var headerNotification = document.querySelector('.header__notification');

headerNotification.onmouseleave = function () {
    headerNotificationQuantity.style.display = 'none';
}
//#endregion


//#region slider__main__motion-part (img & queue motion; button onclick())
var sliderMainMotionPart = document.querySelector('.slider__main__motion-part');
var sliderMainMotionPartLink = document.querySelector('.slider__main__motion-part__link');
var sliderMainMotionPartImg = document.querySelector('.slider__main__motion-part__img');
var sliderMainMotionPartQueueItems = document.querySelectorAll('.slider__main__motion-part__queue-item');
var sliderMainMotionPartPreviousBtn = document.querySelector('.slider__main__motion-part__previous-btn');
var sliderMainMotionPartNextBtn = document.querySelector('.slider__main__motion-part__next-btn');
var sliderMainMotionPartQueueItemCurrentIndex = 0;

var sliderMainMotionPartImg__hrefs = [
    'https://shopee.vn/m/freeship-xtra',
    'https://shopee.vn/m/8-8',
    'https://shopee.vn/m/khung-gio-san-sale',
    'https://shopee.vn/provence',
    'https://shopee.vn/uu-dai-aptamil',
    'https://shopee.vn/m/o-nha-khong-kho-co-shopee-lo',
    'https://shopee.vn/m/sieu-sale-nganh-hang',
    'https://shopee.vn/m/sieu-sale-fmcg',
    'https://shopee.vn/m/mkbdaily-fmcg',
    'https://shopee.vn/m/mua-hang-nhan-xu',
    'https://shopee.vn/m/thoi-trang-mang-xa-hoi-2807',
    'https://shopee.vn/m/mum-club'
]; 


if (true) {
    sliderMainMotionPartPreviousBtn.onclick = function () {
        if(sliderMainMotionPartQueueItemCurrentIndex == 0) {   
            sliderMainMotionPartQueueItems[0].classList.remove('slider__main__motion-part__queue-item--current');
            sliderMainMotionPartQueueItems[11].classList.add('slider__main__motion-part__queue-item--current');
            sliderMainMotionPartQueueItemCurrentIndex = 11;
        } else {
            sliderMainMotionPartQueueItems[sliderMainMotionPartQueueItemCurrentIndex].classList.remove('slider__main__motion-part__queue-item--current');
            sliderMainMotionPartQueueItems[sliderMainMotionPartQueueItemCurrentIndex-1].classList.add('slider__main__motion-part__queue-item--current');
            sliderMainMotionPartQueueItemCurrentIndex--;    
        }
        sliderMainMotionPartImg.setAttribute('src', 
        `./assests/img/container/slider/slider__main/motion_${sliderMainMotionPartQueueItemCurrentIndex+1}.png`);
        sliderMainMotionPartLink.setAttribute('href', `${sliderMainMotionPartImg__hrefs[sliderMainMotionPartQueueItemCurrentIndex]}`);
    }

    sliderMainMotionPartNextBtn.onclick = function () {
        if(sliderMainMotionPartQueueItemCurrentIndex == 11) {   
            sliderMainMotionPartQueueItems[11].classList.remove('slider__main__motion-part__queue-item--current');
            sliderMainMotionPartQueueItems[0].classList.add('slider__main__motion-part__queue-item--current');
            sliderMainMotionPartQueueItemCurrentIndex = 0;
        } else {
            sliderMainMotionPartQueueItems[sliderMainMotionPartQueueItemCurrentIndex].classList.remove('slider__main__motion-part__queue-item--current');
            sliderMainMotionPartQueueItems[sliderMainMotionPartQueueItemCurrentIndex+1].classList.add('slider__main__motion-part__queue-item--current');
            sliderMainMotionPartQueueItemCurrentIndex++;   
        }
        sliderMainMotionPartImg.setAttribute('src', 
        `./assests/img/container/slider/slider__main/motion_${sliderMainMotionPartQueueItemCurrentIndex+1}.png`);
        sliderMainMotionPartLink.setAttribute('href', `${sliderMainMotionPartImg__hrefs[sliderMainMotionPartQueueItemCurrentIndex]}`);
    }

    for(var sliderMainMotionPartQueueItem of sliderMainMotionPartQueueItems) {
        sliderMainMotionPartQueueItem.onclick = function () {
            // get parent's queue
            var parent = this.parentNode;
            // get this's index in parent's queue
            var index = Array.prototype.indexOf.call(parent.children, this);

            // remove old, add new
            sliderMainMotionPartQueueItems[sliderMainMotionPartQueueItemCurrentIndex].classList.remove('slider__main__motion-part__queue-item--current');
            sliderMainMotionPartQueueItems[index].classList.add('slider__main__motion-part__queue-item--current');
            
            // update img, href
            sliderMainMotionPartImg.setAttribute('src', 
            `./assests/img/container/slider/slider__main/motion_${index+1}.png`);
            sliderMainMotionPartLink.setAttribute('href', `${sliderMainMotionPartImg__hrefs[index]}`);
            
            // update sliderMainMotionPartQueueItemCurrentIndex
            sliderMainMotionPartQueueItemCurrentIndex = index;
        }
    }

//#region increase index automatically (& change suitable image)
    setInterval (function () {  
        if(sliderMainMotionPartQueueItemCurrentIndex < 11) {
            sliderMainMotionPartQueueItemCurrentIndex++
            sliderMainMotionPartQueueItems[sliderMainMotionPartQueueItemCurrentIndex-1].classList.remove('slider__main__motion-part__queue-item--current');
            sliderMainMotionPartQueueItems[sliderMainMotionPartQueueItemCurrentIndex].classList.add('slider__main__motion-part__queue-item--current');
        } else {
            sliderMainMotionPartQueueItemCurrentIndex = 0;
            sliderMainMotionPartQueueItems[11].classList.remove('slider__main__motion-part__queue-item--current');
            sliderMainMotionPartQueueItems[0].classList.add('slider__main__motion-part__queue-item--current');
        }
        sliderMainMotionPartImg.setAttribute('src', 
        `./assests/img/container/slider/slider__main/motion_${sliderMainMotionPartQueueItemCurrentIndex+1}.png`);
        sliderMainMotionPartLink.setAttribute('href', `${sliderMainMotionPartImg__hrefs[sliderMainMotionPartQueueItemCurrentIndex]}`);
    }, 5000);
    //#endregion
}

//#endregion


//--> OK
//#region updateInDOMSliderFavouriteSelections
var sliderFavouriteSelections = document.querySelector('.slider__favourite-selections');

function updateInDOMSliderFavouriteSelections () {
    fetch("db.json") 
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) {
            var aTags = datas.sliderFavouriteSelectionsInfo.map(function (data) {
                return `
                    <a class="slider__favourite-selections__link" href="${data.href}" target="_blank" rel="noopener noreferrer">
                        <img class="slider__favourite-selections__link-img" src="${data.image}">
                        <h4 class="slider__favourite-selections__link-text">${data.text}</h4>
                    </a>`;
            });
            sliderFavouriteSelections.innerHTML = aTags.join('');
        })
}

updateInDOMSliderFavouriteSelections();
//#endregion

//--> OK
//#region updateInDOMOutstandingHotSellingProducts
var outstandingHotSellingProducts = document.querySelector('.outstanding__hot-selling-products');

function updateInDOMOutstandingHotSellingProducts () {
    fetch("db.json") 
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) { 
            handleUpdateInDOMOutstandingHotSellingProducts(datas);
        })
}

function handleUpdateInDOMOutstandingHotSellingProducts (datas) {
    var firstDivTag = `
        <div class="outstanding__hot-selling-products__info">
            <h4 class="outstanding__hot-selling-products__info__heading">
                ${datas.outstandingHotSellingProductsInfo.outstandingHotSellingProductsInfoInfo.heading}
            </h4>
            <a target="_blank" rel="noopener noreferrer" href="${datas.outstandingHotSellingProductsInfo.outstandingHotSellingProductsInfoInfo.href}" class="outstanding__hot-selling-products__info__view-more-btn">
                Xem thêm <i class="fas fa-chevron-right"></i>
            </a>
        </div>`;

    var aTags = datas.outstandingHotSellingProductsInfo.outstandingHotSellingProductsListInfo.map(function (data) {
        return `<a target="_blank" rel="noopener noreferrer" href="${data.href}" class="outstanding__hot-selling-products__item">
            <img src="${data.image}" alt="" class="outstanding__hot-selling-products__img">
            <span class="outstanding__hot-selling-products__price">${data.price}</span>
            <div class="outstanding__hot-selling-products__sale-off-label">
                <span class="outstanding__hot-selling-products__sale-off-label__percent">${data.percent}</span>
                <span class="outstanding__hot-selling-products__sale-off-label__text">GIẢM</span>                                                                            
            </div>
        </a>`;
    });

    var secondDivTag = `<div class="outstanding__hot-selling-products__list">${aTags.join('')}</div>`;

    outstandingHotSellingProducts.innerHTML = `<div class="outstanding__hot-selling-products">
            ${firstDivTag}
            ${secondDivTag}
        </div>`;
}

updateInDOMOutstandingHotSellingProducts();
//#endregion 

//--> OK
//#region updateInDOMOutstandingHotBrands
var outstandingHotBrands = document.querySelector('.outstanding__hot-brands');

function updateInDOMOutstandingHotBrands () {
    fetch("db.json") 
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) { 
            handleUpdateInDOMOutstandingHotBrands(datas);
        })
}

function handleUpdateInDOMOutstandingHotBrands (datas) {
    var firstDivTag = `
        <div class="outstanding__hot-brands__info">
            <h4 class="outstanding__hot-brands__info__heading">
                ${datas.outstandingHotBrandsInfo.outstandingHotBrandsInfoInfo.heading}
            </h4>
            <a target="_blank" rel="noopener noreferrer" href="${datas.outstandingHotBrandsInfo.outstandingHotBrandsInfoInfo.href}" class="outstanding__hot-brands__info__view-more-btn">
                Xem thêm <i class="fas fa-chevron-right"></i>
            </a>
        </div>`;

    var aTags = datas.outstandingHotBrandsInfo.outstandingHotBrandsListInfo.map(function (data) {
        return `
            <a target="_blank" rel="noopener noreferrer" href="${data.href}" class="outstanding__hot-brands__item">
                <img src="${data.image}" alt="" class="outstanding__hot-brands__img">
                <div class="">
                    <img src="${data.subImage}" alt="" class="outstanding__hot-brands__sub-img">
                </div>
                <span class="outstanding__hot-brands__text">${data.text}</span>
            </a>`;
    });

    var secondDivTag = `<div class="outstanding__hot-brands__list">${aTags.join('')}</div>`;

    outstandingHotBrands.innerHTML = `<div class="outstanding__hot-brands">
            ${firstDivTag}
            ${secondDivTag}
        </div>`;
}

updateInDOMOutstandingHotBrands();
//#endregion

//--> OK
//#region updateInDOMDirectoryMainList
var directoryMainList = document.querySelector('.directory__main__list');

function updateInDOMDirectoryMainList () {
    fetch("db.json") 
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) {
            var liTags = '';
            for(var i = 0; i < datas.directoryMainItemListInfo.length; i+=2) {
                liTags += `
                    <li class="directory__main__item">
                        <a target="_blank" rel="noopener noreferrer" href="${datas.directoryMainItemListInfo[i].href}" class="directory__main__item__link">
                            <img src="${datas.directoryMainItemListInfo[i].itemImage}" alt="" class="directory__main__item__img">
                            <span class="directory__main__item__title">${datas.directoryMainItemListInfo[i].itemTitle}</span>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="${datas.directoryMainItemListInfo[i+1].href}" class="directory__main__item__link">
                            <img src="${datas.directoryMainItemListInfo[i+1].itemImage}" alt="" class="directory__main__item__img">
                            <span class="directory__main__item__title">${datas.directoryMainItemListInfo[i+1].itemTitle}</span>
                        </a>
                    </li>`;
            }
            directoryMainList.innerHTML = liTags;
        })
}

updateInDOMDirectoryMainList();
//#endregion


//#region directory__main__btn onclick() 
var directoryMainList = document.querySelector('.directory__main__list');
var directoryMainNextBtn = document.querySelector('.directory__main__next-btn');
var directoryMainPreviousBtn = document.querySelector('.directory__main__previous-btn');

directoryMainNextBtn.addEventListener('click', function(e) {
    setTimeout(function () {
        directoryMainNextBtn.style.display = 'none';
        directoryMainPreviousBtn.style.display = 'block';

        // animation
        directoryMainList.style.transform = 'translate(-36rem, 0)';   
        directoryMainList.style.transition = 'all 500ms ease 0s';
    }, 0);
});

directoryMainPreviousBtn.addEventListener('click', function(e) {
    setTimeout(function () {
        directoryMainPreviousBtn.style.display = 'none';
        directoryMainNextBtn.style.display = 'block';

        // animation
        directoryMainList.style.transform = 'translate(0, 0)';   
        directoryMainList.style.transition = 'all 500ms ease 0s'; 
    }, 0);
});
//#endregion

//--> OK 
//#region updateInDOMFlashSaleMainList
var flashSaleMainList = document.querySelectorAll('.flash-sale__main__list');

function updateInDOMFlashSaleMainList () {
    fetch("db.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) {
            handleUpdateInDOMFlashSaleMainList(datas.flashSaleMainListInfo);
        })
}

function handleUpdateInDOMFlashSaleMainList(flashSaleMainListInfo) {
    var aTags = '';
    for (var i = 0; i < flashSaleMainListInfo.length; i++) {

        // add this element if conditions matched
        var flashSaleMainPercentBarHot = (flashSaleMainListInfo[i].selledPartWidthPercent >= 70) ?
            '<div class="flash-sale__main__percent-bar--hot"></div>' : '';
        
        aTags += `
        <a target="_blank" rel="noopener noreferrer" href="${flashSaleMainListInfo[i].href}" class="flash-sale__main__link">
            <img src="${flashSaleMainListInfo[i].bubbleImage}" alt="" class="flash-sale__main__bubble-img">
            <img src="${flashSaleMainListInfo[i].frameImage}" alt="" class="flash-sale__main__frame-img">
            <span class="flash-sale__main__price">${flashSaleMainListInfo[i].price}</span>
            <div class="flash-sale__main__percent-bar">
                <div class="flash-sale__main__percent-bar__text">
                    <span class="flash-sale__main__percent-bar__selled-status">${flashSaleMainListInfo[i].selledStatus}</span>
                </div>
                <div class="flash-sale__main__percent-bar__total-part"></div>
                <div class="flash-sale__main__percent-bar__selled-part" style="width: ${flashSaleMainListInfo[i].selledPartWidthPercent}%;"></div>
                ${flashSaleMainPercentBarHot}
            </div>
            <div class="flash-sale__main__sale-off-label">
                <span class="flash-sale__main__sale-off-label__percent">${flashSaleMainListInfo[i].saleOffPercent}</span>
                <span class="flash-sale__main__sale-off-label__text">GIẢM</span>                                                                            
            </div>
        </a>`
    }

    // add innerHTML for this element
    flashSaleMainList.innerHTML = aTags;
}

updateInDOMFlashSaleMainList();
//#endregion


//#region flashSaleMainBtn onclick() 
var flashSaleMainNextBtn = document.querySelector('.flash-sale__main__next-btn');
var flashSaleMainPreviousBtn = document.querySelector('.flash-sale__main__previous-btn');
var flashSaleMainList = document.querySelector('.flash-sale__main__list');
var flashSaleMainListCurrentIndex = 1;   

flashSaleMainNextBtn.addEventListener('click', function(e) {
    // case 1: first list
    if(flashSaleMainListCurrentIndex == 1) {
        flashSaleMainListCurrentIndex = 2;
        flashSaleMainPreviousBtn.style.display = 'block';
        flashSaleMainNextBtn.style.display = 'block';

        // animation
        flashSaleMainList.style.transform = 'translate(-100rem, 0)';   
        flashSaleMainList.style.transition = 'all 500ms ease 0s';
    }
    else {
        // case 2: second list
        if(flashSaleMainListCurrentIndex == 2) {
            flashSaleMainListCurrentIndex = 3;
            flashSaleMainPreviousBtn.style.display = 'block';
            flashSaleMainNextBtn.style.display = 'none';

            // animation
            flashSaleMainList.style.transform = 'translate(-200rem, 0)';   
            flashSaleMainList.style.transition = 'all 500ms ease 0s';
        }
    }
});

flashSaleMainPreviousBtn.addEventListener('click', function(e) {
    // case 1: second list
    if(flashSaleMainListCurrentIndex == 2) {
        flashSaleMainListCurrentIndex = 1;
        flashSaleMainPreviousBtn.style.display = 'none';
        flashSaleMainNextBtn.style.display = 'block';

        // animation
        flashSaleMainList.style.transform = 'translate(0, 0)';   
        flashSaleMainList.style.transition = 'all 500ms ease 0s';
    }
    else {
        // case 2: third list
        if(flashSaleMainListCurrentIndex == 3) {
            flashSaleMainListCurrentIndex = 2;
            flashSaleMainPreviousBtn.style.display = 'block';
            flashSaleMainNextBtn.style.display = 'block';

            // animation
            flashSaleMainList.style.transform = 'translate(-100rem, 0)';   
            flashSaleMainList.style.transition = 'all 500ms ease 0s';
        }
    }
});
//#endregion

// -> OK
//#region updateInDOMFlashSalePart
var underFlashSalePart = document.querySelector('.under-flash-sale__part');

function updateInDOMFlashSalePart () {
    fetch("db.json") 
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) {
            var aTags = datas.underFlashSalePartInfo.map(function(data) {
                return `<a target="_blank" rel="noopener noreferrer" href="${data.href}" class="under-flash-sale__link">
                    <img src="${data.image}" alt="" class="under-flash-sale__img">   
                </a>`;
            });
            
            underFlashSalePart.innerHTML = aTags.join('');
        })
}

updateInDOMFlashSalePart();
//#endregion

//--> (2) Cần xử lí (logic -> len)
//#region shopeeMallMainMotion, shopeeMallMainMotionQueueItems -> motion
var shopeeMallMainMotion = document.querySelector('.shopee-mall__main__motion');
var shopeeMallMainMotionLink = document.querySelector('.shopee-mall__main__motion__link');
var shopeeMallMainMotionImg = document.querySelector('.shopee-mall__main__motion__img');
var shopeeMallMainMotionQueueItems = document.querySelectorAll('.shopee-mall__main__motion__queue-item');

var shopeeMallMainMotionLinkInfo = {
    href: [
        "https://shopee.vn/m/vando-official",
        "https://shopee.vn/m/dettol-official",
        "https://shopee.vn/m/gumacsbd-0821-main",
        "https://shopee.vn/unicharm_officialstore"
    ],
    imgSrc: [
        "https://cf.shopee.vn/file/1b3b999b50c93f0668098d8b9987dd42",
        "https://cf.shopee.vn/file/eb4d0122c34964ff391ec9978507bdca",
        "https://cf.shopee.vn/file/f4624a332a49cbd1f73b04007b77fea8",
        "https://cf.shopee.vn/file/db6395330ffd1cbf1b46f7daf56df2f6"
    ]
}

if (true) {
    var currentIndex = 0;
    var queueLength = shopeeMallMainMotionQueueItems.length;

    for(var shopeeMallMainMotionQueueItem of shopeeMallMainMotionQueueItems) {
        shopeeMallMainMotionQueueItem.onclick = function () {
            // get parent's queue
            var parent = this.parentNode;
            // get this's index in parent's queue
            var index = Array.prototype.indexOf.call(parent.children, this);

            // update shopee-mall__main__motion__queue-item--current
            shopeeMallMainMotionQueueItems[currentIndex].classList.remove('shopee-mall__main__motion__queue-item--current');
            shopeeMallMainMotionQueueItems[index].classList.add('shopee-mall__main__motion__queue-item--current');
            
            // update img, href
            shopeeMallMainMotionLink.href = shopeeMallMainMotionLinkInfo.href[index];
            shopeeMallMainMotionImg.src = shopeeMallMainMotionLinkInfo.imgSrc[index];

            // update currentIndex
            currentIndex = index;
        }
    }

    setInterval (function () {
        if(currentIndex < queueLength-1) {
            shopeeMallMainMotionQueueItems[currentIndex].classList.remove('shopee-mall__main__motion__queue-item--current');
            shopeeMallMainMotionQueueItems[currentIndex+1].classList.add('shopee-mall__main__motion__queue-item--current');
            currentIndex++;
        } else {
            shopeeMallMainMotionQueueItems[queueLength-1].classList.remove('shopee-mall__main__motion__queue-item--current');
            shopeeMallMainMotionQueueItems[0].classList.add('shopee-mall__main__motion__queue-item--current');
            currentIndex = 0;
        }
        
        shopeeMallMainMotionLink.href = shopeeMallMainMotionLinkInfo.href[currentIndex];
        shopeeMallMainMotionImg.src = shopeeMallMainMotionLinkInfo.imgSrc[currentIndex];
    }, 5000);
}
//#endregion


// -> OK
//#region updateInDOMShopeeMallHeadingText
var shopeeMallHeadingText = document.querySelector('.shopee-mall__heading__text');

function updateInDOMShopeeMallHeadingText () {
    fetch("db.json") 
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) {
            var divTags = datas.shopeeMallHeadingTextInfo.map(function(data) {
                return `
                    <div>
                        <img src="${data.image}" class="shopee-mall__heading__text__icon" alt="">
                        <span class="shopee-mall__heading__text__title">${data.title}</span>
                    </div>`
            });
            
            shopeeMallHeadingText.innerHTML = divTags.join('');
        })
}

updateInDOMShopeeMallHeadingText();
//#endregion

// -> OK
//#region updateInDOMShopeeMallMainProductList
var shopeeMallMainProductList = document.querySelector('.shopee-mall__main__product-list');

function updateInDOMShopeeMallMainProductList () {
    fetch("db.json") 
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) {
            handleUpdateInDOMShopeeMallMainProductList(datas.shopeeMallMainProductListInfo);
        })
}

function handleUpdateInDOMShopeeMallMainProductList (shopeeMallMainProductListInfo) {
    var liTags = '', i;
    for (i = 0; i < shopeeMallMainProductListInfo.length - 1; i += 2) {
        liTags += `
            <li class="shopee-mall__main__product-item">
                <a target="_blank" rel="noopener noreferrer" href="${shopeeMallMainProductListInfo[i].href}" class="shopee-mall__main__product-item__link">
                    <img src="${shopeeMallMainProductListInfo[i].image}" alt="" class="shopee-mall__main__product-item__link__img">
                    <span class="shopee-mall__main__product-item__link__text">${shopeeMallMainProductListInfo[i].text}</span>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="${shopeeMallMainProductListInfo[i+1].href}" class="shopee-mall__main__product-item__link">
                    <img src="${shopeeMallMainProductListInfo[i+1].image}" alt="" class="shopee-mall__main__product-item__link__img">
                    <span class="shopee-mall__main__product-item__link__text">${shopeeMallMainProductListInfo[i+1].text}</span>
                </a>
            </li>`
    }

    // special case: the last li element
    liTags += `
        <li class="shopee-mall__main__product-item">
            <a target="_blank" rel="noopener noreferrer" href="${shopeeMallMainProductListInfo[i].href}" class="shopee-mall__main__product-item__link">
                <img src="${shopeeMallMainProductListInfo[i].image}" alt="" class="shopee-mall__main__product-item__link__img">
                <span class="shopee-mall__main__product-item__link__text">${shopeeMallMainProductListInfo[i].text}</span>
            </a>
            <div class="shopee-mall__main__product-item__link__exception">
                <a target="_blank" rel="noopener noreferrer" href="https://shopee.vn/mall" class="shopee-mall__heading__view-all-btn">
                    Xem tất cả
                    <div>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </a>
            </div>
        </li>`

    // add innerHTML for this element
    shopeeMallMainProductList.innerHTML = liTags;
}

updateInDOMShopeeMallMainProductList();
//#endregion


//#region shopeeMallMainProductBtn onclick() 
var shopeeMallMainProductNextBtn = document.querySelector('.shopee-mall__main__product__next-btn');
var shopeeMallMainProductPreviousBtn = document.querySelector('.shopee-mall__main__product__previous-btn');
var shopeeMallMainProductList = document.querySelector('.shopee-mall__main__product-list');
var shopeeMallMainProductListCurrentIndex = 1;   

shopeeMallMainProductNextBtn.addEventListener('click', function(e) {
    // case 1: first list
    if(shopeeMallMainProductListCurrentIndex == 1) {
        shopeeMallMainProductListCurrentIndex = 2;
        shopeeMallMainProductPreviousBtn.style.display = 'block';
        shopeeMallMainProductNextBtn.style.display = 'block';

        // animation
        shopeeMallMainProductList.style.transform = 'translate(-80rem, 0)';   
        shopeeMallMainProductList.style.transition = 'all 500ms ease 0s';
    }
    else {
        // case 2: second list
        if(shopeeMallMainProductListCurrentIndex == 2) {
            shopeeMallMainProductListCurrentIndex = 3;
            shopeeMallMainProductPreviousBtn.style.display = 'block';
            shopeeMallMainProductNextBtn.style.display = 'none';

            // animation
            shopeeMallMainProductList.style.transform = 'translate(-160rem, 0)';   
            shopeeMallMainProductList.style.transition = 'all 500ms ease 0s';
        }
    }
});

shopeeMallMainProductPreviousBtn.addEventListener('click', function(e) {
    // case 1: second list
    if(shopeeMallMainProductListCurrentIndex == 2) {
        shopeeMallMainProductListCurrentIndex = 1;
        shopeeMallMainProductPreviousBtn.style.display = 'none';
        shopeeMallMainProductNextBtn.style.display = 'block';

        // animation
        shopeeMallMainProductList.style.transform = 'translate(0, 0)';   
        shopeeMallMainProductList.style.transition = 'all 500ms ease 0s';
    }
    else {
        // case 2: third list
        if(shopeeMallMainProductListCurrentIndex == 3) {
            shopeeMallMainProductListCurrentIndex = 2;
            shopeeMallMainProductPreviousBtn.style.display = 'block';
            shopeeMallMainProductNextBtn.style.display = 'block';

            // animation
            shopeeMallMainProductList.style.transform = 'translate(-80rem, 0)';   
            shopeeMallMainProductList.style.transition = 'all 500ms ease 0s';
        }
    }
});
//#endregion


// -> OK
//#region updateInDOMSearchTrendingMainList
var searchTrendingMainList = document.querySelector('.search-trending__main__list');

function updateInDOMSearchTrendingMainList (listIndex) {
    fetch("db.json")
        .then(function (response) {
            return response.json();
        })
        .then(function(datas){
            var aTags = datas.searchTrendingMainListInfo[listIndex].map(function (data) {
                return `
                    <a target="_blank" rel="noopener noreferrer" href="${data.href}" class="search-trending__main__item">
                        <div class="search-trending__main__text">
                            <span class="search-trending__main__text__name">${data.productName}</span>
                            <span class="search-trending__main__text__description">${data.productDescription}</span>
                        </div>
                        <img src="${data.image}" alt="" class="search-trending__img">
                    </a>`;
            })
            // add innerHTML for this element
            searchTrendingMainList.innerHTML = aTags.join('');
        })
}

updateInDOMSearchTrendingMainList(0);
//#endregion

// -> OK
//#region searchTrendingHeadingViewMoreBtn onclick() 
var searchTrendingHeadingViewMoreBtn = document.querySelector('.search-trending__heading__view-more-btn');
var searchTrendingListCurrentIndex = 0, searchTrendingNumberList;

fetch("db.json")
    .then(function (response) {
        return response.json();
    })
    .then(function(datas){
        searchTrendingNumberList = datas.searchTrendingMainListInfo.length;
    })


searchTrendingHeadingViewMoreBtn.addEventListener('click', function(e) {
    e.preventDefault();

    setTimeout(function () {
        if(searchTrendingListCurrentIndex == searchTrendingNumberList-1) {
            searchTrendingListCurrentIndex = 0;
            updateInDOMSearchTrendingMainList(0);
        }
        else {
            searchTrendingListCurrentIndex++;
            updateInDOMSearchTrendingMainList(searchTrendingListCurrentIndex);
        }
    }, 100)
})
//#endregion


// -> OK
//#region updateInDOMTopSearchMainList
var topSearchMainList = document.querySelector('.top-search__main__list');

function updateInDOMTopSearchMainList () {
    fetch("db.json")
        .then (function(response) {
            return response.json();
        })
        .then (function(datas) {
            handleUpdateInDOMTopSearchMainList(datas.topSearchMainListInfo);
        })
}

function handleUpdateInDOMTopSearchMainList (topSearchMainListInfo) {
    var aTags = '';
    
    var theFirstATag = `
        <a target="_blank" rel="noopener noreferrer" href="${topSearchMainListInfo[0].href}" class="top-search__main__link">
            <div class="top-search__main__product">
                <img src="${topSearchMainListInfo[0].productImage}" alt="" class="top-search__main__product__img">
                <img src="./assests/img/container/top-search/top-label.png" alt="" class="top-search__main__product__top-label-img">
            </div>
            <div class="top-search__main__footer">
                <span class="top-search__main__footer__text">${topSearchMainListInfo[0].text}</span>
            </div>
        </a>`

    for (var i = 1; i < topSearchMainListInfo.length; i++) {
        aTags += `
            <a target="_blank" rel="noopener noreferrer" href="${topSearchMainListInfo[i].href}" class="top-search__main__link">
                <div class="top-search__main__product">
                    <img src="${topSearchMainListInfo[i].productImage}" alt="" class="top-search__main__product__img">
                    <img src="./assests/img/container/top-search/top-label.png" alt="" class="top-search__main__product__top-label-img">
                    <div class="top-search__main__product__statistic">
                        Bán <span class="top-search__main__product__statistic__price">${topSearchMainListInfo[i].price}</span>k+ / tháng
                    </div>
                </div>
                <div class="top-search__main__footer">
                    <span class="top-search__main__footer__text">${topSearchMainListInfo[i].text}</span>
                </div>
            </a>`
    }

    // add innerHTML for this element
    topSearchMainList.innerHTML = theFirstATag + aTags;
}

updateInDOMTopSearchMainList();
//#endregion


//#region topSearchMainBtns onclick() 
var topSearchMainList = document.querySelector('.top-search__main__list');
var topSearchMainListCurrentIndex = 1;   
var topSearchMainNextBtn = document.querySelector('.top-search__main__next-btn');
var topSearchMainPreviousBtn = document.querySelector('.top-search__main__previous-btn');

topSearchMainNextBtn.onclick = function () {
    if(topSearchMainListCurrentIndex == 1) {
        topSearchMainListCurrentIndex = 2;
        topSearchMainNextBtn.style.display = 'block';
        topSearchMainPreviousBtn.style.display = 'block';
        // animation
        topSearchMainList.style.transform = 'translate(-120rem, 0)';   
        topSearchMainList.style.transition = 'all 500ms ease 0s';
    }
    else {
        if(topSearchMainListCurrentIndex == 2) {
            topSearchMainListCurrentIndex = 3;
            topSearchMainNextBtn.style.display = 'block';
            topSearchMainPreviousBtn.style.display = 'block';
            // animation
            topSearchMainList.style.transform = 'translate(-240rem, 0)';   
            topSearchMainList.style.transition = 'all 500ms ease 0s';
        } 
        else {
            if(topSearchMainListCurrentIndex == 3) {
                topSearchMainListCurrentIndex = 4;
                topSearchMainNextBtn.style.display = 'none';
                topSearchMainPreviousBtn.style.display = 'block';
                // animation
                topSearchMainList.style.transform = 'translate(-360rem, 0)';   
                topSearchMainList.style.transition = 'all 500ms ease 0s';
            } 
        }
    }
}

topSearchMainPreviousBtn.onclick = function () {
    if(topSearchMainListCurrentIndex == 2) {
        topSearchMainListCurrentIndex = 1;
        topSearchMainPreviousBtn.style.display = 'none';
        topSearchMainNextBtn.style.display = 'block';
        // animation
        topSearchMainList.style.transform = 'translate(0, 0)';   
        topSearchMainList.style.transition = 'all 500ms ease 0s';
    }
    else {
        if(topSearchMainListCurrentIndex == 3) {
            topSearchMainListCurrentIndex = 2;
            topSearchMainPreviousBtn.style.display = 'block';
            topSearchMainNextBtn.style.display = 'block';
            // animation
            topSearchMainList.style.transform = 'translate(-120rem, 0)';   
            topSearchMainList.style.transition = 'all 500ms ease 0s';
        }
        else {
            if(topSearchMainListCurrentIndex == 4) {
                topSearchMainListCurrentIndex = 3;
                topSearchMainPreviousBtn.style.display = 'block';
                topSearchMainNextBtn.style.display = 'block';
                // animation
                topSearchMainList.style.transform = 'translate(-240rem, 0)';   
                topSearchMainList.style.transition = 'all 500ms ease 0s';
            }
        }
    }
}
//#endregion


// -> (TODAY) Cần xử lí 
//#region *todaySuggestion

//#region 1.todaySuggestionMainProductsInfo
var todaySuggestionMainProductsInfo = [
    {
        "productLink": "https://shopee.vn/%C3%81o-thun-tay-l%E1%BB%A1-DASN-%C3%81o-ph%C3%B4ng-tay-l%E1%BB%A1-Unisex-form-r%E1%BB%99ng-Oversize-i.409382714.2933520475?adsid=0&campaignid=0&position=0",
        "productImgSrc": "https://cf.shopee.vn/file/7feb34a7716a838a8cc397ba0ef01c9f_tn",
        "name": "Áo thun tay lỡ DASN, Áo phông tay lỡ Unisex form rộng Oversize",
        "price": "₫10.000",
        "selledQuantity": "Đã bán 8,3k",
        "frameImgSrc": "https://cf.shopee.vn/file/f80e7a006b875a0f9d5592295c79c29c",
        "saleOffLabelPercent": "50%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/%C4%90%E1%BA%A7m-Thi%E1%BA%BFt-K%E1%BA%BF-Lo%E1%BA%A1i-1-V%C3%A1y-N%E1%BB%AF-C%E1%BB%95-S%C6%A1-Mi-Tr%E1%BA%AFng-%C4%90en-C%C3%BAc-C%C3%A0i-Tay-L%E1%BB%A1-%C4%90an-Eo-C%C3%A1-T%C3%ADnh-Ch%E1%BA%A5t-Li%E1%BB%87u-%C4%90%C5%A9i-L%E1%BB%A5a-Cao-C%E1%BA%A5p-Haui-Store-i.448080446.11316712750?adsid=0&campaignid=0&position=2",
        "productImgSrc": "https://cf.shopee.vn/file/f8a0351590864a8de9075feb2cec8d31_tn",
        "name": "Đầm Thiết Kế Loại 1, Váy Nữ Cổ Sơ Mi Trắng Đen Cúc Cài, Tay Lỡ Đan Eo Cá Tính, Chất Liệu Đũi Lụa Cao Cấp - Haui Store",
        "price": "₫132.000",
        "selledQuantity": "Đã bán 17",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "Giảm ₫15k",
        "saleOffLabelPercent": "40%",
        "favouriteLabel": "Mall",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/X%E1%BB%8Bt-Th%C6%A1m-To%C3%A0n-Th%C3%A2n-ShiMang-Body-Mist-50ML-H%C3%A0ng-Ch%C3%ADnh-H%C3%A3ng-i.170733238.4968301712?adsid=0&campaignid=0&position=3",
        "productImgSrc": "https://cf.shopee.vn/file/2d59adf3a7da9c9be9d34c84ce764017_tn",
        "name": "Xịt Thơm Toàn Thân ShiMang Body Mist 50ML Hàng Chính Hãng",
        "price": "₫24.000",
        "selledQuantity": "Đã bán 4,4k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffText": "50% Giảm",
        "saleOffLabelPercent": "50%",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-Predator-T%E1%BA%B7ng-t%E1%BA%A5t-Kh%C3%A2u-%C4%91%E1%BA%BF-100--i.93425556.3458989326?adsid=0&campaignid=0&position=4",
        "productImgSrc": "https://cf.shopee.vn/file/085d6867259b9350c891be2d3a68e5fd_tn",
        "name": "Giày đá bóng sân cỏ nhân tạo Predator -Tặng tất -Khâu đế 100%",
        "price": "₫59.000",
        "selledQuantity": "Đã bán 1,1k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffLabelPercent": "50%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/%C3%81o-thun-tay-l%E1%BB%A1-nam-n%E1%BB%AF-form-r%E1%BB%99ng-Oversize-%C3%A1o-ph%C3%B4ng-tay-l%E1%BB%A1-form-r%E1%BB%99ng-Unisex-%C3%A1o-thun-Maroaret-Cam-i.445072864.10109373763?adsid=0&campaignid=0&position=5",
        "productImgSrc": "https://cf.shopee.vn/file/4ca84f06cad5819d9ec92135ddc31724_tn",
        "name": "Áo thun tay lỡ nam nữ form rộng Oversize, áo phông tay lỡ form rộng Unisex, áo thun Maroaret Cam",
        "price": "₫11.000",
        "selledQuantity": "Đã bán 152",
        "saleOffLabelPercent": "45%",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/%C3%81o-ph%C3%B4ng-unisex-nam-n%E1%BB%AF-form-r%E1%BB%99ng-tay-l%E1%BB%A1-m%E1%BA%B7t-c%C6%B0%E1%BB%9Di-%C4%91%E1%BA%B9p-v%E1%BA%A3i-d%C3%A0y-m%E1%BB%8Bn-i.76875639.7790178910?adsid=0&campaignid=0&position=6",
        "productImgSrc": "https://cf.shopee.vn/file/050341b33e811ec904f79c32dc61f2e5_tn",
        "name": "Áo phông unisex nam nữ form rộng tay lỡ mặt cười đẹp vải dày mịn",
        "price": "₫24.900",
        "selledQuantity": "Đã bán 3,8k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/B%C3%B4ng-T%E1%BA%A9y-trang-GI%C3%81-S%E1%BB%88-3-l%E1%BB%9Bp-cotton-T%C3%BAi-222-mi%E1%BA%BFng-d%C3%A0y-d%E1%BA%B7n--i.170733238.3158355904?adsid=0&campaignid=0&position=7",
        "productImgSrc": "https://cf.shopee.vn/file/28042445981b5dddda78ff17bd274a01_tn",
        "name": "Bông Tẩy trang GIÁ SỈ 3 lớp cotton [Túi 222 miếng dày dặn]",
        "price": "₫29.000",
        "selledQuantity": "Đã bán 1,7k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffText": "50% Giảm",
        "saleOffLabelPercent": "17%",
        "favouriteLabel": "Yêu thích+",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/-Video3-Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-nam-Gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-Gi%C3%A0y-%C4%91%C3%A1-banh-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-X20G-Ghosted-2021-May-kh%C3%A2u-full-%C4%91%E1%BA%BF-i.140115397.9010935037?adsid=0&campaignid=0&position=8",
        "productImgSrc": "https://cf.shopee.vn/file/8aef395edbc03b6bc4d0d78d5f77e817_tn",
        "name": "[Video3] - Giày đá bóng nam - Giày bóng đá - Giày đá banh sân cỏ nhân tạo X20G - Ghosted 2021 - May khâu full đế",
        "price": "₫169.900",
        "selledQuantity": "Đã bán 578",
        "saleOffLabelPercent": "39%",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/%C4%90%C3%A8n-ng%E1%BB%A7-h%C3%ACnh-m%E1%BA%B7t-tr%C4%83ng-d%E1%BB%85-th%C6%B0%C6%A1ng-d%C3%A0nh-cho-ph%C3%B2ng-ng%E1%BB%A7-b%C3%A9-g%C3%A1i-i.80205807.9328324276?adsid=0&campaignid=0&position=9",
        "productImgSrc": "https://cf.shopee.vn/file/191f534ec6fe9ecda44b32a31bb22f23_tn",
        "name": "Đèn ngủ hình mặt trăng dễ thương dành cho phòng ngủ bé gái",
        "price": "₫7.500",
        "selledQuantity": "Đã bán 16,5k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffLabelPercent": "50%",
        "favouriteLabel": "Mall",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%90%C3%A1-B%C3%B3ng-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-X20.1-T%E1%BA%B7ng-T%E1%BA%A5t-KH%C3%82U-%C4%90%E1%BA%BE-100-%C4%91%E1%BA%BF-cao-su-si%C3%AAu-b%E1%BB%81n.-gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-%C4%91%C3%A1-banh-i.112712943.8323300352?adsid=0&campaignid=0&position=10",
        "productImgSrc": "https://cf.shopee.vn/file/21aa93bed00fb443662b5bab52cb7898_tn",
        "name": "Giày Đá Bóng sân cỏ nhân tạo X20.1 -Tặng Tất- KHÂU ĐẾ 100% - đế cao su siêu bền. giày đá bóng đá banh",
        "price": "₫155.000",
        "selledQuantity": "Đã bán 305",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "50% Giảm",
        "saleOffLabelPercent": "48%",
        "favouriteLabel": "Yêu thích+",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Apple-iPhone-12-Pro-Max-128GB-i.88201679.6360756336?adsid=0&campaignid=0&position=11",
        "productImgSrc": "https://cf.shopee.vn/file/2dd923298ba0685a2288af4ae443c51c_tn",
        "name": "Apple iPhone 12 Pro Max 128GB",
        "price": "₫28.290.000",
        "selledQuantity": "Đã bán 2,4k",
        "frameImgSrc": "https://cf.shopee.vn/file/abaee40e5f665e96ce5fde166031c095",
        "saleOffLabelPercent": "17%",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/1KG-B%C3%81NH-MIX-TUY%E1%BB%82N-CH%E1%BB%8CN-C%C3%81C-V%E1%BB%8A-i.30030553.1386065822?adsid=0&campaignid=0&position=12",
        "productImgSrc": "https://cf.shopee.vn/file/b9b8fcf30651c4d1295c7937611ca367_tn",
        "name": "1KG BÁNH MIX TUYỂN CHỌN CÁC VỊ",
        "price": "₫85.000",
        "selledQuantity": "Đã bán 3,5k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffLabelPercent": "30%",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/%C3%81o-thun-tay-l%E1%BB%A1-Men-194-Unisex-from-r%E1%BB%99ng-Local-Brand-Ulzzang-v%E1%BA%A3i-coton-cao-c%E1%BA%A5p-d%C3%A0y-d%E1%BA%B7n-co-d%C3%A3n-TR%C6%A0N-i.189967266.3675194051?adsid=0&campaignid=0&position=13",
        "productImgSrc": "https://cf.shopee.vn/file/3ee87bed025978936943958ab7dbdd89_tn",
        "name": "Áo thun tay lỡ Men 194 Unisex from rộng Local Brand Ulzzang vải coton cao cấp dày dặn, co dãn - TRƠN",
        "price": "₫29.000",
        "selledQuantity": "Đã bán 2,8k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffLabelPercent": "50%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/-B1G1-S%E1%BB%AFa-r%E1%BB%ADa-m%E1%BA%B7t-t%E1%BA%A1o-b%E1%BB%8Dt-chi%E1%BA%BFt-xu%E1%BA%A5t-t%C6%A1-t%E1%BA%B1m-tr%E1%BA%AFng-Senka-Perfect-Whip-120g-i.27495213.9972837291?adsid=0&campaignid=0&position=14",
        "productImgSrc": "https://cf.shopee.vn/file/a488d57be9fe4f2e6534b0a6c97a8803_tn",
        "name": "[B1G1] Sữa rửa mặt tạo bọt chiết xuất tơ tằm trắng Senka Perfect Whip 120g",
        "price": "₫99.000",
        "selledQuantity": "Đã bán 463",
        "saleOffText": "5% Giảm",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Qu%E1%BA%A7n-L%C3%B3t-N%E1%BB%AF-L%E1%BB%8Dt-Khe-Sexy-Qu%E1%BA%A7n-L%C3%B3t-Su-Kh%C3%B4ng-Vi%E1%BB%81n-May-M%E1%BA%B7c-%C4%90%E1%BB%93-B%C3%B3-S%C3%A1t-Kh%C3%B4ng-L%E1%BB%99-i.372873321.10808148918?adsid=0&campaignid=0&position=15",
        "productImgSrc": "https://cf.shopee.vn/file/d00564ede169043c51e7f6caab17462d_tn",
        "name": "Quần Lót Nữ Lọt Khe Sexy - Quần Lót Su Không Viền May Mặc Đồ Bó Sát Không Lộ",
        "price": "₫3.600",
        "selledQuantity": "Đã bán 2,6k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffLabelPercent": "40%",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/-Gi%C3%A1-t%E1%BB%91t-Gi%C3%A0y-%C4%90%C3%A1-B%C3%B3ng-Nam-ARAFOOTBALL-C%E1%BB%94-CAO-Kh%C3%A2u-%C4%90%E1%BA%BF-i.140115397.6946449800?adsid=0&campaignid=0&position=16",
        "productImgSrc": "https://cf.shopee.vn/file/a072eb1081669b2f8bca3ed3e5ab618e_tn",
        "name": "[Giá tốt] Giày Đá Bóng Nam  ARAFOOTBALL CỔ CAO - Khâu Đế",
        "price": "₫159.900",
        "selledQuantity": "Đã bán 1k",
        "saleOffLabelPercent": "43%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/-R%E1%BA%BB-V%C3%B4-%C4%90%E1%BB%8Bch-%C3%81o-Ph%C3%B4ng-Tr%C6%A1n-D%C3%A1ng-R%E1%BB%99ng-X%E1%BA%BB-V%E1%BA%A1t-Unisex-_-B%E1%BB%90NG-STORE-i.417241850.7984762843?adsid=0&campaignid=0&position=17",
        "productImgSrc": "https://cf.shopee.vn/file/c02948669a30067a9cb997a1e0e61caa_tn",
        "name": "[Rẻ Vô Địch] Áo Phông Trơn Dáng Rộng Xẻ Vạt Unisex _ BỐNG STORE",
        "price": "₫29.999",
        "selledQuantity": "Đã bán 2,6k",
        "frameImgSrc": "https://cf.shopee.vn/file/f80e7a006b875a0f9d5592295c79c29c",
        "saleOffText": "Hoàn 20% xu",
        "saleOffLabelPercent": "49%",
        "favouriteLabel": "Mall",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/S%E1%BA%A1c-Laptop-ASUS-19V-3-42A-65W-ch%C3%ADnh-h%C3%A3ng-(-Adapter-Asus-19.5V-3.42A-65W)-T%E1%BA%B7ng-K%C3%A8m-D%C3%A2y-Ngu%E1%BB%93n-i.86070782.1615799037?adsid=0&campaignid=0&position=18",
        "productImgSrc": "https://cf.shopee.vn/file/ef2427e9f53719dafacd2bf4ccaa9a5b_tn",
        "name": "Sạc Laptop ASUS 19V - 3,42A - 65W chính hãng ( Adapter Asus 19.5V - 3.42A - 65W) Tặng Kèm Dây Nguồn",
        "price": "₫99.000",
        "selledQuantity": "Đã bán 385",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffLabelPercent": "9%",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/%C3%81o-thun-unisex-tay-l%E1%BB%A1-nam-n%E1%BB%AF-form-r%E1%BB%99ng-%C3%A1o-ph%C3%B4ng-phong-c%C3%A1ch-SUMMER-basic-tee-A105-i.407726036.11803287586?adsid=0&campaignid=0&position=19",
        "productImgSrc": "https://cf.shopee.vn/file/a3c3679dc7c9a797997860a64063d2db_tn",
        "name": "Áo thun unisex tay lỡ nam nữ form rộng ,áo phông phong cách SUMMER basic tee A105",
        "price": "₫12.000",
        "selledQuantity": "Đã bán 13,9k",
        "saleOffLabelPercent": "50%",
        "favouriteLabel": "Yêu thích+",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/C%E1%BB%99t-T%C3%B3c-Scrunchies-V%E1%BA%A3i-K%E1%BA%BB-Caro-Voan-K%C3%ADnh-M%E1%BB%81m-M%E1%BA%A1i(giao-ng%E1%BA%ABu-nhi%C3%AAn)-i.141451946.7845958855?adsid=0&campaignid=0&position=20",
        "productImgSrc": "https://cf.shopee.vn/file/fa9a4fe2e6089ade6ded6bb80fd1cbc1_tn",
        "name": "Cột Tóc Scrunchies Vải Kẻ Caro-Voan Kính Mềm Mại(giao ngẫu nhiên)",
        "price": "₫1.900",
        "selledQuantity": "Đã bán 23,7k",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/%C3%A1o-ph%C3%B4ng-tay-l%E1%BB%A1-unisex-form-r%E1%BB%99ng-oversize-streetwear-i.445072864.10906530200?adsid=0&campaignid=0&position=21",
        "productImgSrc": "https://cf.shopee.vn/file/ecdb93c7573c2fc65e0e13f99968d1f1_tn",
        "name": "áo phông tay lỡ unisex form rộng oversize streetwear",
        "price": "₫10.000",
        "selledQuantity": "Đã bán 20,2k",
        "saleOffLabelPercent": "50%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/TR%C3%80-S%E1%BB%AEA-TR%C3%82N-CH%C3%82U-HILLWAY-H%C6%AF%C6%A0NG-TRUY%E1%BB%80N-TH%E1%BB%90NG-V%C3%80-H%C6%AF%C6%A0NG-XO%C3%80I-(5ly-x-230g)-i.114518898.6732730625?adsid=0&campaignid=0&position=22",
        "productImgSrc": "https://cf.shopee.vn/file/0948b53c295100af548e9946dd3ffe3c_tn",
        "name": "TRÀ SỮA TRÂN CHÂU HILLWAY HƯƠNG TRUYỀN THỐNG VÀ HƯƠNG XOÀI (5ly x 230g)",
        "price": "₫32.000",
        "selledQuantity": "Đã bán 4,3k",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/%C3%81o-Thun-Tay-L%E1%BB%A1-UNDER-H%C3%A0-N%E1%BB%99i-%C3%81o-Ph%C3%B4ng-Cotton-Nam-N%E1%BB%AF-Unisex-In-H%C3%ACnh-Local-Brand-Streetwear-Oversize-Form-R%E1%BB%99ng-i.382882461.11908219440?adsid=0&campaignid=0&position=23",
        "productImgSrc": "https://cf.shopee.vn/file/418856ccc95e6743a5ef757f26dbec69_tn",
        "name": "Áo Thun Tay Lỡ UNDER Hà Nội Áo Phông Cotton Nam Nữ Unisex - In Hình Local Brand Streetwear Oversize Form Rộng",
        "price": "₫179.000",
        "selledQuantity": "Đã bán 15,8k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "Giảm ₫20k",
        "saleOffLabelPercent": "28%",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/H%E1%BB%99p-%C4%90%E1%BB%B1ng-S%E1%BA%A3n-Ph%E1%BA%A9m-Qu%E1%BA%A7n-%C3%81o-Local-Brand-UNDER-Streetwear-T%E1%BA%B7ng-k%C3%A8m-G%C3%B3i-qu%C3%A0-t%E1%BA%B7ng-i.382882461.10011978201?adsid=0&campaignid=0&position=24",
        "productImgSrc": "https://cf.shopee.vn/file/dc4bff9b8519313c0335b285319652b0_tn",
        "name": "Hộp Đựng Sản Phẩm Quần Áo Local Brand UNDER Streetwear - Tặng kèm Gói quà tặng",
        "price": "₫15.000",
        "selledQuantity": "Đã bán 4,4k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "Giảm ₫15k",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/X%E1%BB%91p-d%C3%A1n-t%C6%B0%E1%BB%9Dng-gi%E1%BA%A3-g%E1%BA%A1ch-3D-Kh%E1%BB%95-l%E1%BB%9Bn-70x77cm-i.274028659.7738484257?adsid=0&campaignid=0&position=25",
        "productImgSrc": "https://cf.shopee.vn/file/9d257a4d64bcd4a9569d3e990c946838_tn",
        "name": "Xốp dán tường giả gạch 3D - Khổ lớn 70x77cm",
        "price": "₫1.600",
        "selledQuantity": "Đã bán 594k",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/%C3%81o-thun-Teelab-Premium-Basic-Tee-TS063-i.308542026.6383933390?adsid=0&campaignid=0&position=26",
        "productImgSrc": "https://cf.shopee.vn/file/298835d047abe03d5995edeb73b59a7e_tn",
        "name": "Áo thun Teelab Premium Basic Tee TS063",
        "price": "₫195.000",
        "selledQuantity": "Đã bán 7,6k",
        "frameImgSrc": "https://cf.shopee.vn/file/abaee40e5f665e96ce5fde166031c095",
        "saleOffLabelPercent": "44%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/%C3%81o-thun-nam-n%E1%BB%AF-unisex-tay-l%E1%BB%A1-AD69-Tom-Jerry-%C3%A1o-ph%C3%B4ng-tay-l%E1%BB%A1-unisex-form-r%E1%BB%99ng-oversize-streetwear-i.432363876.6890547841?adsid=0&campaignid=0&position=27",
        "productImgSrc": "https://cf.shopee.vn/file/fed0a9788a96a0c546f84ebc0a8a4549_tn",
        "name": "Áo thun nam nữ unisex tay lỡ AD69 Tom&amp;Jerry, áo phông tay lỡ unisex form rộng oversize streetwear",
        "price": "₫10.000",
        "selledQuantity": "Đã bán 10,4k",
        "saleOffLabelPercent": "50%",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/-Video3-Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-nam-Gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-Gi%C3%A0y-%C4%91%C3%A1-banh-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-X20G-Ghosted-2021-May-kh%C3%A2u-full-%C4%91%E1%BA%BF-i.358296186.7383439650?adsid=0&campaignid=0&position=28",
        "productImgSrc": "https://cf.shopee.vn/file/625ba4cd321b8ffc425f07cd1bd375a8_tn",
        "name": "[Video3] - Giày đá bóng nam - Giày bóng đá - Giày đá banh sân cỏ nhân tạo X20G - Ghosted 2021 - May khâu full đế",
        "price": "₫159.900",
        "selledQuantity": "Đã bán 310",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffLabelPercent": "43%",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/N%E1%BB%93i-chi%C3%AAn-kh%C3%B4ng-d%E1%BA%A7u-dung-t%C3%ADch-5-l%C3%ADt-CAMEL-B%E1%BA%A3o-h%C3%A0nh-6-th%C3%A1ng-i.38308826.7126111008?adsid=0&campaignid=0&position=29",
        "productImgSrc": "https://cf.shopee.vn/file/af85fa38315b9ddd27af8cd5f7f1f135_tn",
        "name": "Nồi chiên không dầu dung tích 5 lít CAMEL Bảo hành 6 tháng",
        "price": "₫600.000",
        "selledQuantity": "Đã bán 18,7k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffLabelPercent": "40%",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/B%E1%BB%99-B%C3%A0n-Ph%C3%ADm-Gaming-c%C3%B3-d%C3%A2y-K%C3%A8m-Chu%E1%BB%99t-M%C3%A1y-T%C3%ADnh-Con-B%C3%A1o-C%C3%B3-LED-7-M%C3%A0u-%E1%BA%A4n-T%C6%B0%E1%BB%A3ng-i.93922606.1546899006?adsid=0&campaignid=0&position=30",
        "productImgSrc": "https://cf.shopee.vn/file/e26394e62abc77979e3870d3e2126a33_tn",
        "name": "Bộ Bàn Phím Gaming có dây Kèm Chuột Máy Tính Con Báo Có LED 7 Màu Ấn Tượng",
        "price": "₫39.500",
        "selledQuantity": "Đã bán 9,6k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffLabelPercent": "29%",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/%C3%81o-thun-tay-l%E1%BB%A1-form-r%E1%BB%99ng-Unisex-Phi-H%C3%A0nh-Gia-%C3%A1o-ph%C3%B4ng-tay-l%E1%BB%A1-Nam-N%E1%BB%AF-AD-67-i.406555736.7591421295?adsid=0&campaignid=0&position=31",
        "productImgSrc": "https://cf.shopee.vn/file/bb990a64e5245765ff9dbaf22d51f488_tn",
        "name": "Áo thun tay lỡ form rộng Unisex Phi Hành Gia, áo phông tay lỡ Nam Nữ AD 67",
        "price": "₫10.000",
        "selledQuantity": "Đã bán 12,2k",
        "saleOffLabelPercent": "50%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/B%C3%A0n-Ch%E1%BA%A3i-%C4%90i%E1%BB%87n-T%E1%BB%B1-%C4%90%E1%BB%99ng-%C4%90%C3%A1nh-R%C4%83ng-5-Ch%E1%BA%BF-%C4%90%E1%BB%99-H%C3%A0ng-N%E1%BB%99i-%C4%90%E1%BB%8Ba-Trung-Cao-C%E1%BA%A5p-i.237253511.10111314561?adsid=0&campaignid=0&position=32",
        "productImgSrc": "https://cf.shopee.vn/file/13c2f91bbb0e79f91b1bbc4600ca1cc7_tn",
        "name": "Bàn Chải Điện Tự Động Đánh Răng 5 Chế Độ Hàng Nội Địa Trung Cao Cấp",
        "price": "₫24.000",
        "selledQuantity": "Đã bán 6k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffLabelPercent": "50%",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/%C3%81o-Kho%C3%A1c-Cardigan-Unisex%E2%9D%A4%EF%B8%8F%C3%81o-Cardigan-SNOPPY-BEMBO-form-r%E1%BB%99ng-Ulzzang-Unisex-Nam-N%E1%BB%AF-(video-th%E1%BA%ADt-100-t%E1%BA%A1i-Shop)-i.345492648.7491654407?adsid=0&campaignid=0&position=33",
        "productImgSrc": "https://cf.shopee.vn/file/e49cade8a4cbeeb3d6ab2eef4a66323f_tn",
        "name": "Áo Khoác Cardigan Unisex❤️Áo Cardigan SNOPPY/BEMBO form rộng Ulzzang Unisex Nam/Nữ (video thật 100% tại Shop)",
        "price": "₫24.900",
        "selledQuantity": "Đã bán 414",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffLabelPercent": "50%",
        "favouriteLabel": "Mall",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Nh%E1%BA%ABn-%C4%91eo-ng%C3%B3n-tay-thi%E1%BA%BFt-k%E1%BA%BF-%C4%91%E1%BB%99c-%C4%91%C3%A1o-th%E1%BB%9Di-trang-cho-n%E1%BB%AF-i.283049275.7945520313?adsid=0&campaignid=0&position=34",
        "productImgSrc": "https://cf.shopee.vn/file/148a6c483ddc5567b032fbb5d076726d_tn",
        "name": "Nhẫn đeo ngón tay thiết kế độc đáo thời trang cho nữ",
        "price": "₫12.000",
        "selledQuantity": "Đã bán 24,7k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffLabelPercent": "40%",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/%C3%81o-Thun-%C3%81o-Ph%C3%B4ng-Tay-L%E1%BB%A1-From-r%E1%BB%99ng-CD-Unisex-i.120723783.3382586017?adsid=0&campaignid=0&position=35",
        "productImgSrc": "https://cf.shopee.vn/file/9d810861f34c96320794243a22ff3a1e_tn",
        "name": "Áo Thun Áo Phông Tay Lỡ From rộng [CD] Unisex",
        "price": "₫69.000",
        "selledQuantity": "Đã bán 9k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "10% Giảm",
        "saleOffLabelPercent": "37%",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-gi%C3%A0y-%C4%91%C3%A1-banh-%E2%9A%A1t%E1%BA%B7ng-t%E1%BA%A5t%E2%9A%A1-%C4%91%C3%A3-kh%C3%A2u-%C4%91%E1%BA%BF-100--i.31982992.2761793810?adsid=0&campaignid=0&position=36",
        "productImgSrc": "https://cf.shopee.vn/file/902b0a469058c27c19a6ba80d908f389_tn",
        "name": "giày đá bóng,giày đá banh ⚡tặng tất⚡ đã khâu đế 100%",
        "price": "₫85.000",
        "selledQuantity": "Đã bán 8,9k",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/K%C3%ADnh-ch%E1%BB%91ng-gi%E1%BB%8Dt-b%E1%BA%AFn-ki%C3%AAm-k%C3%ADnh-ch%E1%BB%91ng-b%E1%BB%87nh-d%E1%BB%8Bch-b%E1%BA%A3o-h%E1%BB%99-lao-%C4%91%E1%BB%99ng-i.79569379.9264503761?adsid=0&campaignid=0&position=37",
        "productImgSrc": "https://cf.shopee.vn/file/cff37133f5d2bda1783e4d989f0e3fda_tn",
        "name": "Kính chống giọt bắn kiêm kính chống bệnh dịch, bảo hộ lao động",
        "price": "₫1.000",
        "selledQuantity": "Đã bán 7,1k",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/File-l%C3%A1-h%E1%BB%8Dc-sinh-A4-Deli-30-40-l%C3%A1-Xanh-d%C6%B0%C6%A1ng-H%E1%BB%93ng-Tr%E1%BA%AFng-1-chi%E1%BA%BFc-72493-72494-i.127805122.4753150087?adsid=0&campaignid=0&position=38",
        "productImgSrc": "https://cf.shopee.vn/file/aa427f98ab576c7a90485378eea5adbb_tn",
        "name": "File lá học sinh A4 Deli - 30/40 lá - Xanh dương/Hồng/Trắng - 1 chiếc - 72493 / 72494",
        "price": "₫45.000",
        "selledQuantity": "Đã bán 2,5k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffLabelPercent": "45%",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/%C3%81o-thun-tay-l%E1%BB%A1-nam-n%E1%BB%AF-%C3%A1o-ph%C3%B4ng-unisex-form-r%E1%BB%99ng-ch%E1%BA%A5t-cotton-m%C3%A1t-m%E1%BB%8Bn-th%E1%BA%A5m-h%C3%BAt-m%E1%BB%93-h%C3%B4i-in-h%C3%ACnh-SI%C3%8AU-CH%E1%BA%A4T-i.470458733.10312975152?adsid=0&campaignid=0&position=39",
        "productImgSrc": "https://cf.shopee.vn/file/ea280060bf3e38b56168ce27c3fe50e8_tn",
        "name": "Áo thun tay lỡ nam nữ, áo phông unisex form rộng chất cotton mát mịn thấm hút mồ hôi in hình SIÊU CHẤT",
        "price": "₫20.000",
        "selledQuantity": "Đã bán 480",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffLabelPercent": "50%",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Tranh-s%E1%BB%91-h%C3%B3a-m%C3%A0u-acrylic-t%C3%B4-theo-m%C3%A3-s%E1%BB%91-tr%C3%AAn-v%E1%BA%A3i-canvas-trang-tr%C3%AD-n%E1%BB%99i-th%E1%BA%A5t-20X20CM-XH123-i.426471934.9044879758?adsid=0&campaignid=0&position=40",
        "productImgSrc": "https://cf.shopee.vn/file/2693d1906473f9739915726ca3293cfd_tn",
        "name": "Tranh số hóa màu acrylic tô theo mã số trên vải canvas trang trí nội thất 20X20CM XH123",
        "price": "₫43.200",
        "selledQuantity": "Đã bán 417",
        "saleOffLabelPercent": "40%",
        "favouriteLabel": "Yêu thích+",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/FREESHIP%E2%9D%A4%EF%B8%8F-B%C3%A1nh-Tr%E1%BB%A9ng-Ch%E1%BA%A3y-Ng%C3%A0n-L%E1%BB%9Bp-%E2%9D%A4%EF%B8%8FDate-m%E1%BB%9Bi-nh%E1%BA%A5t-500-gr-9-chi%E1%BA%BFc-B%C3%A1nh-tr%E1%BB%A9ng-mu%E1%BB%91i-tan-ch%E1%BA%A3y-i.51275889.3160715681?adsid=0&campaignid=0&position=41",
        "productImgSrc": "https://cf.shopee.vn/file/8448ce6577698ebb416fe46f0b16e505_tn",
        "name": "FREESHIP❤️ Bánh Trứng Chảy Ngàn Lớp ❤️Date mới nhất [500 gr] [9 chiếc] Bánh trứng muối tan chảy",
        "price": "₫47.000",
        "selledQuantity": "Đã bán 2,5k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffLabelPercent": "43%",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Th%E1%BA%A3m-L%C3%B4ng-Loang-Tr%E1%BA%A3i-S%C3%A0n-L%C3%B4ng-D%E1%BA%A7y-H%C3%A0ng-%C4%90%E1%BA%B9p-2020-(-K%C3%ADch-Th%C6%B0%E1%BB%9Bc-1m6-x-2m-M%E1%BA%B7t-Sau-Ch%E1%BB%93ng-tr%C6%A1n-tr%C6%B0%E1%BB%A3t)-i.22156385.2656264520?adsid=0&campaignid=0&position=42",
        "productImgSrc": "https://cf.shopee.vn/file/914969325adae0485cb82fd8734c7b4b_tn",
        "name": "Thảm Lông Loang Trải Sàn Lông Dầy Hàng Đẹp 2020 ( Kích Thước 1m6 x 2m - Mặt Sau Chồng trơn trượt)",
        "price": "₫54.000",
        "selledQuantity": "Đã bán 33,5k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffLabelPercent": "41%",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/%C4%90%C3%A8n-Led-Tiktok-5m-Mix-DIY-Tr%C3%AAn-50-M%C3%A0u-i.19562457.4133381819?adsid=0&campaignid=0&position=43",
        "productImgSrc": "https://cf.shopee.vn/file/8e831b015ffce01c72f30730530e716a_tn",
        "name": "Đèn Led Tiktok 5m Mix DIY Trên 50 Màu",
        "price": "₫29.000",
        "selledQuantity": "Đã bán 21,3k",
        "favouriteLabel": "Yêu thích",
        "saleOffText": "Giảm ₫5k",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/S%E1%BA%A1c-laptop-Asus-19V-4.47-3.42-2.37-1.75-i.145578395.4525188760?adsid=0&campaignid=0&position=44",
        "productImgSrc": "https://cf.shopee.vn/file/83a980673d42710c5ad65c9a96e1ce32_tn",
        "name": "Sạc laptop Asus 19V-4.47/3.42/2.37/1.75",
        "price": "₫116.620",
        "selledQuantity": "Đã bán 966",
        "saleOffText": "Giảm ₫5k",
        "saleOffLabelPercent": "7%",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/X%C3%BAc-x%C3%ADch-x%C3%B4ng-kh%C3%B3i-gi%C3%A1-si%C3%AAu-deal.-1-b%E1%BB%8Bch-10-c%C3%A2y-th%C6%A1m-ngon-ch%E1%BA%A5t-l%C6%B0%E1%BB%A3ng.-Giao-s%E1%BB%89-to%C3%A0n-qu%E1%BB%91c.-giao-l%E1%BA%BB-tp-hcm-i.244653818.4562562640?adsid=0&campaignid=0&position=45",
        "productImgSrc": "https://cf.shopee.vn/file/0ddde041952e25027974ca55dd5266bc_tn",
        "name": "Xúc xích xông khói giá siêu deal. 1 bịch 10 cây, thơm ngon chất lượng. Giao sỉ toàn quốc. giao lẻ tp hcm",
        "price": "₫32.000",
        "selledQuantity": "Đã bán 2,1k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffLabelPercent": "9%",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/%C3%81o-Kho%C3%A1c-Hoodie-Tay-B%E1%BB%93ng-In-Ch%E1%BB%AF-N-N%E1%BB%AF-FreeShip-Jacket-c%C3%B3-m%C5%A9-from-r%E1%BB%99ngnhi%E1%BB%81u-i.64457418.9979553620?adsid=0&campaignid=0&position=46",
        "productImgSrc": "https://cf.shopee.vn/file/77f9fc41c291daeaf044814218e3f216_tn",
        "name": "Áo Khoác Hoodie Tay Bồng In Chữ N Nữ [FreeShip] Jacket có mũ from rộngnhiều",
        "price": "₫80.000",
        "selledQuantity": "Đã bán 53",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffLabelPercent": "50%",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/%E2%9D%A4%EF%B8%8FSI%C3%8AU-PH%E1%BA%A8M-M%C3%99A-H%C3%88%E2%9D%A4%EF%B8%8F%C4%90%E1%BB%93-Ng%E1%BB%A7-sexy-ph%E1%BB%91i-ren-c%E1%BB%B1c-m%C3%A1t-%E1%BA%A3nh-th%E1%BA%ADt--i.94381273.11700127097?adsid=0&campaignid=0&position=1",
        "productImgSrc": "https://cf.shopee.vn/file/2fe26dee4aa23d68e82d37ea083a0505_tn",
        "name": "❤️SIÊU PHẨM MÙA HÈ❤️Đồ Ngủ sexy phối ren cực mát[ảnh thật]",
        "price": "₫44.000",
        "selledQuantity": "Đã bán 3,9k",
        "frameImgSrc": "https://cf.shopee.vn/file/f80e7a006b875a0f9d5592295c79c29c",
        "saleOffLabelPercent": "2%",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/R%C3%A8m-c%E1%BB%ADa-d%C3%A1n-keo-kh%C3%B4ng-c%E1%BA%A7n-thanh-treo-(nhi%E1%BB%81u-m%E1%BA%ABu-v%C3%A0-size)-i.16948418.5477228869?adsid=0&campaignid=0&position=47",
        "productImgSrc": "https://cf.shopee.vn/file/5e4090496aaee7a40f01613198410a8d_tn",
        "name": "Rèm cửa dán keo không cần thanh treo (nhiều mẫu và size)",
        "price": "₫55.000",
        "selledQuantity": "Đã bán 9,9k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "sponsorLabel": false
    }
];

/* HTML EXECUTIVE */
var todaySuggestionMainProductIndex = 0;
for(var i = 0; i < 8; i++) {
    for (var j = 0; j < 6; j++) { 
        //#region 1.Add href for todaySuggestionMainProduct
        var todaySuggestionMainProduct = document.querySelector(`.today-suggestion__main__tab-main 
            .today-suggestion__main-list:nth-child(${i+1}) .today-suggestion__main-item:nth-child(${j+1}) > a`);
        todaySuggestionMainProduct.href = todaySuggestionMainProductsInfo[todaySuggestionMainProductIndex].productLink;    
        //#endregion

        //#region 2.Create nodes, add attributes, innerHTML inside <div></div> tag
        var productImg = document.createElement('img');
        productImg.alt = '';
        productImg.src = todaySuggestionMainProductsInfo[todaySuggestionMainProductIndex].productImgSrc;
        productImg.classList.add('today-suggestion__main-product__product-img');

        var frameImg = document.createElement('img');
        frameImg.classList.add('today-suggestion__main-product__frame-img');
        frameImg.alt = '';
        // --> check *sự có mặt*
        if(todaySuggestionMainProductsInfo[todaySuggestionMainProductIndex].frameImgSrc) {
            frameImg.src = todaySuggestionMainProductsInfo[todaySuggestionMainProductIndex].frameImgSrc;
        } else {
            frameImg = undefined;
        }

        var productPart = document.createElement('div');
        productPart.classList.add('today-suggestion__main-product__part');

        var productName = document.createElement('span');
        productName.innerHTML = todaySuggestionMainProductsInfo[todaySuggestionMainProductIndex].name;
        productName.classList.add('today-suggestion__main-product__name');

        var saleOff = document.createElement('div');
        saleOff.classList.add('today-suggestion__main-product__sale-off');

        var saleOffLeftSerrated = document.createElement('img');
        saleOffLeftSerrated.src = "./assests/img/container/today-suggestion/left-serrated.png";
        saleOffLeftSerrated.classList.add('today-suggestion__main-product__sale-off__left-serrated');

        var saleOffText = document.createElement('span');
        saleOffText.innerHTML = todaySuggestionMainProductsInfo[todaySuggestionMainProductIndex].saleOffText;
        saleOffText.classList.add('today-suggestion__main-product__sale-off__text');

        var saleOffRightSerrated = document.createElement('img');
        saleOffRightSerrated.src = "./assests/img/container/today-suggestion/right-serrated.png";
        saleOffRightSerrated.classList.add('today-suggestion__main-product__sale-off__right-serrated');
                
        // --> check *sự có mặt*
        if(! todaySuggestionMainProductsInfo[todaySuggestionMainProductIndex].saleOffText) {
            saleOff = undefined;
        }


        var priceAndSelledQuantity = document.createElement('div');
        priceAndSelledQuantity.classList.add('today-suggestion__main-product__price-and-selled-quantity');

        var price = document.createElement('span');
        price.innerHTML = todaySuggestionMainProductsInfo[todaySuggestionMainProductIndex].price;
        price.classList.add('today-suggestion__main-product__price');

        var selledQuantity = document.createElement('span');
        selledQuantity.innerHTML = todaySuggestionMainProductsInfo[todaySuggestionMainProductIndex].selledQuantity;
        selledQuantity.classList.add('today-suggestion__main-product__selled-quantity');

        var favouriteLabel = document.createElement('div');
        var favouriteLabelImg = undefined;
        favouriteLabel.classList.add('today-suggestion__main-product__favourite-label');

        // --> check *sự có mặt*
        if(todaySuggestionMainProductsInfo[todaySuggestionMainProductIndex].favouriteLabel) {
            var favouriteLabelData = todaySuggestionMainProductsInfo[todaySuggestionMainProductIndex].favouriteLabel;
            
            if(favouriteLabelData == 'Yêu thích') {
                favouriteLabel.classList.add('today-suggestion__main-product__favourite-label--yeuthich');
                favouriteLabel.innerHTML = 'Yêu thích';
            } 
            else {
                if (favouriteLabelData == 'Yêu thích+') {
                    favouriteLabel.classList.add('today-suggestion__main-product__favourite-label--yeuthichplus');
                    favouriteLabelImg = document.createElement('img');
                    favouriteLabelImg.src = './assests/img/container/today-suggestion/yeuthichplus.png';
                } 
                else {
                    if (favouriteLabelData == 'Mall') {
                        favouriteLabel.classList.add('today-suggestion__main-product__favourite-label--mall');
                        favouriteLabelImg = document.createElement('img');
                        favouriteLabelImg.src = './assests/img/container/today-suggestion/mall.png';
                    }  
                }
            }
        }
        else {
            favouriteLabel = undefined;
        }

        
        var saleOffLabel = document.createElement('div');
        saleOffLabel.classList.add('today-suggestion__main-product__sale-off-label');
        
        var saleOffLabelPercent = document.createElement('span');
        saleOffLabelPercent.classList.add('today-suggestion__main-product__sale-off-label__percent');
        // --> check *sự có mặt*
        if(todaySuggestionMainProductsInfo[todaySuggestionMainProductIndex].saleOffLabelPercent) {
            saleOffLabelPercent.innerHTML = todaySuggestionMainProductsInfo[todaySuggestionMainProductIndex].saleOffLabelPercent;
        } else {
            saleOffLabel = undefined;
        }

        var saleOffLabelText = document.createElement('span');
        saleOffLabelText.innerHTML = 'giảm';
        saleOffLabelText.classList.add('today-suggestion__main-product__sale-off-label__text');

        
        var sponsorLabel = document.createElement('div');
        sponsorLabel.innerHTML = 'Tài Trợ';
        sponsorLabel.classList.add('today-suggestion__main-product__sponsor-label');
        // --> check *sự có mặt*
        if(! todaySuggestionMainProductsInfo[todaySuggestionMainProductIndex].sponsorLabel) {
            sponsorLabel = undefined;
        }

    
        var hoverLabel = document.createElement('div');
        hoverLabel.innerHTML = 'Tìm sản phẩm tương tự';
        hoverLabel.classList.add('today-suggestion__main-product__hover-label');
        //#endregion
        
        //#region 3.Append suitable child for above tags 
        priceAndSelledQuantity.appendChild(price);
        priceAndSelledQuantity.appendChild(selledQuantity); 

        productPart.appendChild(productName);

        if(saleOff) {
            saleOff.appendChild(saleOffLeftSerrated);
            saleOff.appendChild(saleOffText);
            saleOff.appendChild(saleOffRightSerrated);
            productPart.appendChild(saleOff);
        }

        productPart.appendChild(priceAndSelledQuantity);

        if(favouriteLabelImg) {
            favouriteLabel.appendChild(favouriteLabelImg);
        }

        if(saleOffLabel) {
            saleOffLabel.appendChild(saleOffLabelPercent);
            saleOffLabel.appendChild(saleOffLabelText);
        }
        //#endregion

        //#region 4.Get <div></div> tag and append child to it 
        var div = document.querySelector(`.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${i+1}) 
            .today-suggestion__main-item:nth-child(${j+1}) > a > div`);
            
        div.appendChild(productImg);

        if(frameImg) {
            div.appendChild(frameImg);
        }

        div.appendChild(productPart);

        if(favouriteLabel) {
            div.appendChild(favouriteLabel);
        }

        if(saleOffLabel) {
            div.appendChild(saleOffLabel);
        }
        
        if(sponsorLabel) {
            div.appendChild(sponsorLabel);
        }

        div.appendChild(hoverLabel);
        //#endregion

        /* 5.Increase the Array of Objects's index */
        todaySuggestionMainProductIndex++;
    }
}


/* CSS EXECUTIVE */
for(var i = 0; i < 8; i++) {
    var check = false;
    var items = document.querySelectorAll(`.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${i+1}) 
        .today-suggestion__main-item .today-suggestion__main-product__sale-off`);
    check = (items.length >= 1);

    var list = document.querySelector(`.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${i+1})`);
    var items = document.querySelectorAll(`.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${i+1}) .today-suggestion__main-item`);
    var products = document.querySelectorAll(`.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${i+1}) .today-suggestion__main-product`);

    if (check) {
        list.style.height = '29.8rem';
        for(var j = 0; j < items.length; j++) {
            items[j].style.height = '29.8rem';
            products[j].style.height = '28.8rem';

            var saleOff = document.querySelector(`.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${i+1}) 
                .today-suggestion__main-item:nth-child(${j+1}) .today-suggestion__main-product__sale-off`);
            if(saleOff == null) {
                var priceAndSelledQuantity = document.querySelector(`.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${i+1}) 
                    .today-suggestion__main-item:nth-child(${j+1}) .today-suggestion__main-product__price-and-selled-quantity`);
                priceAndSelledQuantity.style.marginTop = '2.6rem';
            }
        }
    } 
    else {
        list.style.height = '27.7rem';
        for(var j = 0; j < items.length; j++) {
            items[j].style.height = '27.7rem';
            products[j].style.height = '26.7rem';
        }
    }
}


//--> I'M HERE 
//todaySuggestionMainTabSuperSale88Info
// //#region updateInDOMTodaySuggestionMainTabMain
// var todaySuggestionMainTabMain = document.querySelector('.today-suggestion__main__tab-main');

// function updateInDOMTodaySuggestionMainTabMain () {
//     fetch("db.json")
//         .then (function(response) {
//             return response.json();
//         })
//         .then (function(datas) {
//             handleUpdateInDOMTodaySuggestionMainTabMain(datas.todaySuggestionMainTabMainInfo);
//         })
// }

// function handleUpdateInDOMTodaySuggestionMainTabMain (todaySuggestionMainTabMainInfo) {
//     var listDivTags = '';

//     for(var i = 0; i < todaySuggestionMainTabMainInfo.length; i++) {
//         var listDivTag = '', itemDivTags = '', itemDivTag = '';

//         for (var j = 0; j < todaySuggestionMainTabMainInfo[i].length; j++) {
//             var frameImg = `<img src="${todaySuggestionMainTabMainInfo[i][j].}" class="today-suggestion__main-product__frame-img" alt="">`;
//             var productSaleOff = `<div class="today-suggestion__main-product__sale-off">
//                     <img src="./assests/img/container/today-suggestion/left-serrated.png" class="today-suggestion__main-product__sale-off__left-serrated">
//                     <span class="today-suggestion__main-product__sale-off__text">${todaySuggestionMainTabMainInfo[i][j].}</span>
//                     <img src="./assests/img/container/today-suggestion/right-serrated.png" class="today-suggestion__main-product__sale-off__right-serrated">
//                 </div>`;
//             var favouriteLabel = `
//                 <div class="today-suggestion__main-product__favourite-label today-suggestion__main-product__favourite-label--yeuthich">
//                     ${todaySuggestionMainTabMainInfo[i][j].}
//                 </div>`;
//             var saleOffLabel = `<div class="today-suggestion__main-product__sale-off-label">
//                     <span class="today-suggestion__main-product__sale-off-label__percent">${todaySuggestionMainTabMainInfo[i][j].}</span>
//                     <span class="today-suggestion__main-product__sale-off-label__text">giảm</span>
//                 </div>`;
//             var sponsorLabel = '<div class="today-suggestion__main-product__sponsor-label">Tài Trợ</div>';
            

//             itemDivTag = `
//                 <div class="today-suggestion__main-item">
//                     <a target="_blank" rel="noopener noreferrer" href="${todaySuggestionMainTabMainInfo[i][j].}" class="today-suggestion__main-product">
//                         <div>
//                             <img alt="" src="${todaySuggestionMainTabMainInfo[i][j].}" class="today-suggestion__main-product__product-img">
//                             ${frameImage}
//                             <div class="today-suggestion__main-product__part">
//                                 <span class="today-suggestion__main-product__name">Áo thun tay lỡ DASN, Áo phông tay lỡ Unisex form rộng Oversize</span>
//                                 ${productSaleOff}
//                                 <div class="today-suggestion__main-product__price-and-selled-quantity" style="margin-top: 2.6rem;">
//                                     <span class="today-suggestion__main-product__price">₫10.000</span>
//                                     <span class="today-suggestion__main-product__selled-quantity">Đã bán 8,3k</span>
//                                 </div>
//                             </div>
//                             ${favouriteLabel}
//                             ${saleOffLabel}
//                             ${sponsorLabel}
//                             <div class="today-suggestion__main-product__hover-label">Tìm sản phẩm tương tự</div>
//                         </div>
//                     </a>
//                 </div>`;
//             itemDivTags += itemDivTag;
//         }

//         listDivTag = `<div class="today-suggestion__main-list">${itemDivTags}</div>`;
//         listDivTags += listDivTag;
//     }

//     todaySuggestionMainTabMain.innerHTML = listDivTags;
// }

// updateInDOMTodaySuggestionMainTabMain();
//#endregion 


//#endregion 1.todaySuggestionMainProductsInfo


//#region 2.todaySuggestionMainSuperSaleProductsInfo
var todaySuggestionMainSuperSaleProductsInfo = [
    {
        "productLink": "https://shopee.vn/gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-gi%C3%A0y-%C4%91%C3%A1-banh-%E2%9A%A1t%E1%BA%B7ng-t%E1%BA%A5t%E2%9A%A1-%C4%91%C3%A3-kh%C3%A2u-%C4%91%E1%BA%BF-100--i.31982992.2761793810?adsid=0&campaignid=0&position=0",
        "productImgSrc": "https://cf.shopee.vn/file/902b0a469058c27c19a6ba80d908f389_tn",
        "name": "giày đá bóng,giày đá banh ⚡tặng tất⚡ đã khâu đế 100%",
        "price": "₫85.000",
        "selledQuantity": "Đã bán 8,9k",
        "favouriteLabel": "Mall",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-gi%C3%A0y-%C4%91%C3%A1-banh-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-gi%C3%A0y-th%E1%BB%83-thao-%C4%91%C3%A1-ph%E1%BB%A7i-i.59692223.9720984979?adsid=0&campaignid=0&position=1",
        "productImgSrc": "https://cf.shopee.vn/file/fbbbce222fd220b5fb1138a35f61fa29_tn",
        "name": "Giày đá bóng,giày đá banh sân cỏ nhân tạo,giày thể thao đá phủi",
        "price": "₫20.000",
        "selledQuantity": "Đã bán 688",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/T%E1%BA%A5t-v%E1%BB%9B-nike-cao-c%E1%BB%95-tr%E1%BA%AFng-nam-n%E1%BB%AF-cao-c%E1%BA%A5p-i.144949363.9927646274?adsid=0&campaignid=0&position=2",
        "productImgSrc": "https://cf.shopee.vn/file/ccacce675448cdcd6d375aa00d92af45_tn",
        "name": "Tất vớ nike cao cổ trắng nam nữ cao cấp",
        "price": "₫15.000",
        "selledQuantity": "Đã bán 4,3k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/GI%C3%80Y-%C4%90%C3%81-B%C3%93NG-S%C3%82N-C%E1%BB%8E-NH%C3%82N-T%E1%BA%A0O-TH%C6%AF%C6%A0NG-HI%E1%BB%86U-H%E1%BB%92NG-PH%C3%9AC-SPORT-HP20.3-FULL-H%E1%BB%98P-KH%C3%82U-FULL-%C4%90%E1%BA%BE-T%E1%BA%B6NG-T%E1%BA%A4T-CH%E1%BB%90NG-TR%C6%A0N-i.70632693.6729479562?adsid=0&campaignid=0&position=3",
        "productImgSrc": "https://cf.shopee.vn/file/18bab94d0ccac0caca80145f9454eeb1_tn",
        "name": "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO THƯƠNG HIỆU HỒNG PHÚC SPORT HP20.3 FULL HỘP KHÂU FULL ĐẾ TẶNG TẤT CHỐNG TRƠN",
        "price": "₫217.000",
        "selledQuantity": "Đã bán 1,9k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffText": "Giảm ₫10k",
        "saleOffLabelPercent": "28%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Tu%CC%81i-%C4%91u%CC%9B%CC%A3ng-gia%CC%80y-%C4%91a%CC%81-bo%CC%81ng-d%C3%A2y-r%C3%BAt-ch%C3%ADnh-h%C3%A3ng-MAKAN-i.697924.7664772544?adsid=0&campaignid=0&position=4",
        "productImgSrc": "https://cf.shopee.vn/file/f237327466d8c567cb1d1732966a2e73_tn",
        "name": "Túi đựng giày đá bóng dây rút chính hãng MAKAN",
        "price": "₫21.600",
        "selledQuantity": "Đã bán 2k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "Giảm ₫5k",
        "saleOffLabelPercent": "38%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/-Gi%C3%A1-t%E1%BB%91t-Gi%C3%A0y-%C4%90%C3%A1-B%C3%B3ng-Nam-ARAFOOTBALL-C%E1%BB%94-CAO-Kh%C3%A2u-%C4%90%E1%BA%BF-i.140115397.6946449800?adsid=0&campaignid=0&position=5",
        "productImgSrc": "https://cf.shopee.vn/file/a072eb1081669b2f8bca3ed3e5ab618e_tn",
        "name": "[Giá tốt] Giày Đá Bóng Nam  ARAFOOTBALL CỔ CAO - Khâu Đế",
        "price": "₫157.900",
        "selledQuantity": "Đã bán 1,1k",
        "saleOffLabelPercent": "44%",
        "favouriteLabel": "Yêu thích+",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-Predator-T%E1%BA%B7ng-t%E1%BA%A5t-Kh%C3%A2u-%C4%91%E1%BA%BF-100--i.93425556.3458989326?adsid=0&campaignid=0&position=6",
        "productImgSrc": "https://cf.shopee.vn/file/085d6867259b9350c891be2d3a68e5fd_tn",
        "name": "Giày đá bóng sân cỏ nhân tạo Predator -Tặng tất -Khâu đế 100%",
        "price": "₫59.000",
        "selledQuantity": "Đã bán 1,1k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffLabelPercent": "50%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-gi%C3%A0y-%C4%91%C3%A1-banh-gi%E1%BA%A7y-th%E1%BB%83-thao-%C4%91%C3%A1-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-%C4%91%C3%A3-kh%C3%A2u-%C4%91%E1%BA%BF-100--i.84144916.5644209912?adsid=0&campaignid=0&position=7",
        "productImgSrc": "https://cf.shopee.vn/file/4d2909f616efa73e42c0e3ebc2826f32_tn",
        "name": "Giày đá bóng, giày đá banh,giầy thể thao, đá sân cỏ nhân tạo đã khâu đế 100%",
        "price": "₫13.680",
        "selledQuantity": "Đã bán 685",
        "saleOffLabelPercent": "24%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-%C4%91%C3%A1-banh-ch%C3%ADnh-h%C3%A3ng-AKKA-SPEED-2-i.91245076.2176621104?adsid=0&campaignid=0&position=8",
        "productImgSrc": "https://cf.shopee.vn/file/739bec916aa2d19425b4065fc1fdd0b8_tn",
        "name": "Giày đá bóng đá banh chính hãng AKKA SPEED 2",
        "price": "₫419.000",
        "selledQuantity": "Đã bán 1,7k",
        "frameImgSrc": "https://cf.shopee.vn/file/27e7d77bf644b46cf62e44cc90d5f883",
        "saleOffText": "10% Giảm",
        "saleOffLabelPercent": "39%",
        "favouriteLabel": "Mall",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/T%E1%BA%A5t-ch%E1%BB%91ng-tr%C6%A1n-v%E1%BB%9B-ch%E1%BB%91ng-tr%C6%B0%E1%BB%A3t-%C4%91%C3%A1-b%C3%B3ng-%C4%91%C3%A1-banh-th%E1%BB%83-thao-b%C3%B3ng-chuy%E1%BB%81n-tennis-c%E1%BA%A7u-l%C3%B4ng-Nike-Adidas-Mizuno-Puma-Drew-Jordan.-i.115229802.2754454263?adsid=0&campaignid=0&position=9",
        "productImgSrc": "https://cf.shopee.vn/file/676752d5bd7d3f1f6bcffe7491d1c2b0_tn",
        "name": "Tất chống trơn,vớ chống trượt,đá bóng,đá banh,thể thao,bóng chuyền,tennis,cầu lông,Nike,Adidas,Mizuno,Puma,Drew,Jordan.",
        "price": "₫8.000",
        "selledQuantity": "Đã bán 1k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffLabelPercent": "9%",
        "favouriteLabel": "Mall",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-gi%C3%A0y-%C4%91%C3%A1-banh-gi%E1%BA%A7y-th%E1%BB%83-thao-%C4%91%C3%A1-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-%C4%91%C3%A3-kh%C3%A2u-%C4%91%E1%BA%BF-100--i.31982992.6140598690?adsid=0&campaignid=0&position=10",
        "productImgSrc": "https://cf.shopee.vn/file/da4953e75780b09316bb5b8d695cceb4_tn",
        "name": "Giày đá bóng,giày đá banh,giầy thể thao,đá sân cỏ nhân tạo đã khâu đế 100%",
        "price": "₫105.000",
        "selledQuantity": "Đã bán 511",
        "saleOffLabelPercent": "4%",
        "favouriteLabel": "Yêu thích+",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/-Video-test-Phi%E1%BA%BFu-b%E1%BA%A3o-h%C3%A0nh-Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-X19.1-Gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-Gi%C3%A0y-%C4%91%C3%A1-banh-Size-38-%C4%91%E1%BA%BFn-44-i.140115397.5957597661?adsid=0&campaignid=0&position=11",
        "productImgSrc": "https://cf.shopee.vn/file/d71fc6b27070d4c96e38ff0cd2effcfa_tn",
        "name": "[Video test + Phiếu bảo hành] - Giày đá bóng X19.1 - Giày bóng đá - Giày đá banh - Size 38 đến 44",
        "price": "₫157.900",
        "selledQuantity": "Đã bán 862",
        "saleOffLabelPercent": "43%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-Predator-Kh%C3%A2u-k%C3%ADn-%C4%91%E1%BA%BF-100-T%E1%BA%B7ng-T%E1%BA%A5t-i.93425556.4730489795?adsid=0&campaignid=0&position=12",
        "productImgSrc": "https://cf.shopee.vn/file/6a21a8f06e324d96e1c5dfd9d652bdd2_tn",
        "name": "Giày đá bóng sân cỏ nhân tạo Predator - Khâu kín đế 100% - Tặng Tất",
        "price": "₫155.000",
        "selledQuantity": "Đã bán 1,5k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffLabelPercent": "47%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-gi%C3%A0y-%C4%91%C3%A1-banh-3-s%E1%BB%8Dc-%C4%91%C3%A3-kh%C3%A2u-full-%C4%91%E1%BA%BF-gi%C3%A0y-th%E1%BB%83-thao-nam-i.59692223.8766586466?adsid=0&campaignid=0&position=13",
        "productImgSrc": "https://cf.shopee.vn/file/143a549be2b3e8372344996ad44d13c3_tn",
        "name": "Giày đá bóng,giày đá banh 3 sọc,đã khâu full đế,giày thể thao nam",
        "price": "₫20.000",
        "selledQuantity": "Đã bán 149",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Gi%E1%BA%A7y-%C4%91%C3%A1-b%C3%B3ng-ba-s%E1%BB%8Dc-KH%C3%82U-FULL-%C4%90%E1%BA%BE-TR%E1%BB%B0C-TI%E1%BA%BEP-T%E1%BB%AA-X%C6%AF%E1%BB%9ENG-B%E1%BA%A2O-H%C3%80NH-3-TH%C3%81NG-i.134519589.7518836666?adsid=0&campaignid=0&position=14",
        "productImgSrc": "https://cf.shopee.vn/file/f8ae05a75c835da6983a460a2014d57b_tn",
        "name": "Giầy đá bóng ba sọc KHÂU FULL ĐẾ + TRỰC TIẾP TỪ XƯỞNG + BẢO HÀNH 3 THÁNG",
        "price": "₫30.000",
        "selledQuantity": "Đã bán 684",
        "saleOffLabelPercent": "16%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/-T%E1%BA%B6NG-T%E1%BA%A4T-GI%C3%80Y-%C4%90%C3%81-B%C3%93NG-QH19-NEO-QUANG-H%E1%BA%A2I-FULL-M%C3%80U-i.73788952.4882888333?adsid=0&campaignid=0&position=15",
        "productImgSrc": "https://cf.shopee.vn/file/1ddb3c33782eea36281d4c062bfc65b4_tn",
        "name": "[TẶNG TẤT] GIÀY ĐÁ BÓNG QH19-NEO QUANG HẢI FULL MÀU",
        "price": "₫299.000",
        "selledQuantity": "Đã bán 616",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "20% Giảm",
        "saleOffLabelPercent": "42%",
        "favouriteLabel": "Yêu thích+",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-ch%C3%ADnh-h%C3%A3ng-AKKA-CONTROL-2-TF-%C4%90%E1%BB%95i-size-tho%E1%BA%A3i-m%C3%A1i--i.91245076.4107008312?adsid=0&campaignid=0&position=16",
        "productImgSrc": "https://cf.shopee.vn/file/b7ec2174daf6db46dff20478be80ff64_tn",
        "name": "Giày đá bóng chính hãng AKKA CONTROL 2 TF [Đổi size thoải mái]",
        "price": "₫393.000",
        "selledQuantity": "Đã bán 1,4k",
        "frameImgSrc": "https://cf.shopee.vn/file/27e7d77bf644b46cf62e44cc90d5f883",
        "saleOffText": "10% Giảm",
        "saleOffLabelPercent": "43%",
        "favouriteLabel": "Mall",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%90%C3%A1-B%C3%B3ng-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-X20.1-T%E1%BA%B7ng-T%E1%BA%A5t-KH%C3%82U-%C4%90%E1%BA%BE-100-%C4%91%E1%BA%BF-cao-su-si%C3%AAu-b%E1%BB%81n.-gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-%C4%91%C3%A1-banh-i.112712943.8323300352?adsid=0&campaignid=0&position=17",
        "productImgSrc": "https://cf.shopee.vn/file/21aa93bed00fb443662b5bab52cb7898_tn",
        "name": "Giày Đá Bóng sân cỏ nhân tạo X20.1 -Tặng Tất- KHÂU ĐẾ 100% - đế cao su siêu bền. giày đá bóng đá banh",
        "price": "₫179.000",
        "selledQuantity": "Đã bán 313",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "50% Giảm",
        "saleOffLabelPercent": "49%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/GI%C3%80Y-%C4%90%C3%81-B%C3%93NG-S%C3%82N-C%E1%BB%8E-NH%C3%82N-T%E1%BA%A0O-HP2021-KH%C3%82U-FULL-%C4%90%E1%BA%BE-%C4%90%E1%BB%A6-M%C3%80U-i.77811334.6502790020?adsid=0&campaignid=0&position=18",
        "productImgSrc": "https://cf.shopee.vn/file/531851164e509ded1be6e6ff77280403_tn",
        "name": "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO HP2021 KHÂU FULL ĐẾ ĐỦ MÀU",
        "price": "₫129.000",
        "selledQuantity": "Đã bán 1,6k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffText": "10% Giảm",
        "saleOffLabelPercent": "39%",
        "favouriteLabel": "Mall",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-banh-gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-th%E1%BB%83-thao-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-%C4%91%C3%A3-kh%C3%A2u-%C4%91%E1%BA%BF-i.59692223.3204639845?adsid=0&campaignid=0&position=19",
        "productImgSrc": "https://cf.shopee.vn/file/7e5b2e8e73da310f640fb8401d0cbebe_tn",
        "name": "Giày đá banh,giày đá bóng thể thao sân cỏ nhân tạo,đã khâu đế",
        "price": "₫20.000",
        "selledQuantity": "Đã bán 4,2k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%90%C3%A1-B%C3%B3ng-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-X18-T%E1%BA%B7ng-T%E1%BA%A5t-KH%C3%82U-%C4%90%E1%BA%BE-100-%C4%91%E1%BA%BF-cao-su-si%C3%AAu-b%E1%BB%81n.-gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-%C4%91%C3%A1-banh-i.112712943.1736934349?adsid=0&campaignid=0&position=20",
        "productImgSrc": "https://cf.shopee.vn/file/33d21fcc3cca9ac82dbc19a31fde6b7e_tn",
        "name": "Giày Đá Bóng sân cỏ nhân tạo X18 -Tặng Tất- KHÂU ĐẾ 100% - đế cao su siêu bền. giày đá bóng đá banh",
        "price": "₫182.000",
        "selledQuantity": "Đã bán 4,8k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "50% Giảm",
        "saleOffLabelPercent": "24%",
        "favouriteLabel": "Yêu thích+",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-gi%C3%A0y-%C4%91%C3%A1-banh-s%C3%A2n-c%E1%BB%8F-t%E1%BB%B1-nhi%C3%AAn-%C4%90inh-l%E1%BB%9Bn-i.59692223.1578502071?adsid=0&campaignid=0&position=21",
        "productImgSrc": "https://cf.shopee.vn/file/47118731f9c00d3f219d0a07c062b1a8_tn",
        "name": "Giày đá bóng-giày đá banh sân cỏ tự nhiên Đinh lớn",
        "price": "₫99.000",
        "selledQuantity": "Đã bán 212",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/-CH%C3%8DNH-H%C3%83NG-Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-nam-WIKA-SUPERSPEED-xanh-chu%E1%BB%91i-i.73788952.6042576294?adsid=0&campaignid=0&position=22",
        "productImgSrc": "https://cf.shopee.vn/file/0b9212e2581fb1ca50bb1cb36e65ad8f_tn",
        "name": "[CHÍNH HÃNG] Giày đá bóng nam WIKA SUPERSPEED xanh chuối",
        "price": "₫327.000",
        "selledQuantity": "Đã bán 783",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "25% Giảm",
        "saleOffLabelPercent": "46%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Combo-3-t%E1%BA%A5t-co-gi%C3%A3n-th%E1%BB%9Di-trang-SACAS-TS002-i.36249159.1932943168?adsid=0&campaignid=0&position=23",
        "productImgSrc": "https://cf.shopee.vn/file/b235b66a2050ca594a3ddbc7a596d931_tn",
        "name": "Combo 3 tất co giãn thời trang SACAS TS002",
        "price": "₫20.000",
        "selledQuantity": "Đã bán 9,4k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffLabelPercent": "40%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/T%C3%BAi-%C4%90%E1%BB%B1ng-Gi%C3%A0y-%C4%90%C3%A1-B%C3%B3ng-2Ng%C4%83n-C%C3%A2u-L%E1%BA%A1c-B%E1%BB%99-T%C3%BAi-Hai-Ng%C4%83n-B%C3%B3ng-%C4%90%C3%A1-Th%E1%BB%83-Thao-%C4%90%C3%A1-Banh-i.59692223.1947660105?adsid=0&campaignid=0&position=24",
        "productImgSrc": "https://cf.shopee.vn/file/d4015dae458f4dad7ea08e2845e7d1ca_tn",
        "name": "Túi Đựng Giày Đá Bóng,2Ngăn Câu Lạc Bộ,Túi Hai Ngăn Bóng Đá,Thể Thao,Đá Banh",
        "price": "₫30.000",
        "selledQuantity": "Đã bán 651",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "favouriteLabel": "Mall",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/-Video-5-Phi%E1%BA%BFu-b%E1%BA%A3o-h%C3%A0nh-Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-nam-Gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-Mercurial-Laser-4-May-fulL-i.140115397.3377418984?adsid=0&campaignid=0&position=25",
        "productImgSrc": "https://cf.shopee.vn/file/9c9440fc8d1acbbe9fc09958f5a6f6e2_tn",
        "name": "[Video 5 + Phiếu bảo hành] - Giày đá bóng nam - Giày bóng đá - Mercurial Laser 4 - May fulL",
        "price": "₫88.000",
        "selledQuantity": "Đã bán 348",
        "saleOffLabelPercent": "48%",
        "favouriteLabel": "Yêu thích+",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-%F0%9F%92%8E%F0%9D%91%AD%F0%9D%91%B9%F0%9D%91%AC%F0%9D%91%AC%F0%9D%91%BA%F0%9D%91%AF%F0%9D%91%B0%F0%9D%91%B7%F0%9F%92%8E-Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-3-s%E1%BB%8Dc-Predator-kh%C3%A2u-%C4%91%E1%BA%BF-cao-c%E1%BA%A5p-i.67864923.1768230563?adsid=0&campaignid=0&position=26",
        "productImgSrc": "https://cf.shopee.vn/file/f6e9e85eb89e90b44f3e87d42144427f_tn",
        "name": "Giày đá bóng 💎𝑭𝑹𝑬𝑬𝑺𝑯𝑰𝑷💎 Giày đá bóng 3 sọc Predator khâu đế cao cấp",
        "price": "₫130.000",
        "selledQuantity": "Đã bán 645",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "Giảm ₫5k",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-Predator-Kh%C3%A2u-k%C3%ADn-%C4%91%E1%BA%BF-T%E1%BA%B7ng-T%E1%BA%A5t-i.112712943.6730237359?adsid=0&campaignid=0&position=27",
        "productImgSrc": "https://cf.shopee.vn/file/db71919d728da4ae91e6404ca3f6558a_tn",
        "name": "Giày đá bóng sân cỏ nhân tạo Predator - Khâu kín đế - Tặng Tất",
        "price": "₫175.000",
        "selledQuantity": "Đã bán 568",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "50% Giảm",
        "saleOffLabelPercent": "47%",
        "favouriteLabel": "Mall",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/B%C3%B3ng-%C4%90%C3%A1-Uniforia-Euro-Cup-2021-Size-S%E1%BB%91-4-5-Ph%C3%B9-H%E1%BB%A3p-S%C3%A2n-C%E1%BB%8F-Nh%C3%A2n-T%E1%BA%A1o-V%C3%A0-S%C3%A2n-C%E1%BB%8F-T%E1%BB%B1-Nhi%C3%AAn-(B%C3%B3ng-%C4%90%C3%BAc-Da-PU-Cao-C%E1%BA%A5p)-i.154360938.6702961434?adsid=0&campaignid=0&position=28",
        "productImgSrc": "https://cf.shopee.vn/file/2d1b408b465c38387085050ac6db901b_tn",
        "name": "Bóng Đá Uniforia Euro Cup 2021 Size Số 4 5 Phù Hợp Sân Cỏ Nhân Tạo Và Sân Cỏ Tự Nhiên (Bóng Đúc Da PU Cao Cấp)",
        "price": "₫249.000",
        "selledQuantity": "Đã bán 658",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "Giảm ₫7k",
        "saleOffLabelPercent": "45%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/GI%C3%80Y-%C4%90%C3%81-B%C3%93NG-S%C3%82N-C%E1%BB%8E-NH%C3%82N-T%E1%BA%A0O-X18-K%C3%88M-T%E1%BA%A4T(V%E1%BB%9A)-KH%C3%82U-FULL-%C4%90%E1%BA%BE-i.93425556.1650748115?adsid=0&campaignid=0&position=29",
        "productImgSrc": "https://cf.shopee.vn/file/044e08c0b1a37541d86e396e9859403d_tn",
        "name": "GIÀY ĐÁ BÓNG SÂN CỎ NHÂN TẠO X18 -KÈM TẤT(VỚ) KHÂU FULL ĐẾ",
        "price": "₫129.000",
        "selledQuantity": "Đã bán 1,4k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffLabelPercent": "30%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-Merccriia-%C4%91%E1%BA%BF-trong-si%C3%AAu-h%C3%B3t-si%C3%AAu-b%E1%BB%81n-%C4%91%C3%A3-kh%C3%A2u-h%E1%BA%BFt-%C4%91%E1%BA%BF-i.59692223.1184654456?adsid=0&campaignid=0&position=30",
        "productImgSrc": "https://cf.shopee.vn/file/da3cef9226102d000ba88f2a14379213_tn",
        "name": "Giày đá bóng Merccriia đế trong,siêu hót,siêu bền,đã khâu hết đế",
        "price": "₫19.000",
        "selledQuantity": "Đã bán 290",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "favouriteLabel": "Yêu thích+",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/GI%C3%80Y-%C4%90%C3%81-B%C3%93NG-K%C3%88M-T%E1%BA%A4T-CH%E1%BB%90NG-TR%C6%A0N-KH%C3%82U-FULL-%C4%90%E1%BA%BE-i.70632693.1725766752?adsid=0&campaignid=0&position=31",
        "productImgSrc": "https://cf.shopee.vn/file/3e7af539df5a922def377ccefa922cbb_tn",
        "name": "GIÀY ĐÁ BÓNG KÈM TẤT CHỐNG TRƠN - KHÂU FULL ĐẾ",
        "price": "₫180.000",
        "selledQuantity": "Đã bán 2k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffText": "Giảm ₫10k",
        "saleOffLabelPercent": "49%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/-M%C3%A3-SKAMA8-gi%E1%BA%A3m-8-T%E1%BB%90I-%C4%90A-50K-%C4%91%C6%A1n300K-Gi%E1%BA%A7y-b%C3%B3ng-%C4%91%C3%A1-ph%E1%BB%A7i-3-s%E1%BB%8Dc-CT3-ch%C3%ADnh-h%C3%A3ng-Wika-%C4%91%E1%BA%BF-TF-b%E1%BB%81n-r%E1%BA%BB-%C4%91%E1%BA%B9p-t%E1%BA%B7ng-t%E1%BA%A5t.-i.115229802.2644930766?adsid=0&campaignid=0&position=32",
        "productImgSrc": "https://cf.shopee.vn/file/947b8b76f37cf307abc9f60d2f675426_tn",
        "name": "[Mã SKAMA8 giảm 8% TỐI ĐA 50K đơn300K] Giầy bóng đá phủi 3 sọc, CT3 chính hãng Wika đế TF bền, rẻ, đẹp tặng tất.",
        "price": "₫113.000",
        "selledQuantity": "Đã bán 521",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffLabelPercent": "5%",
        "favouriteLabel": "Mall",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/GI%C3%80Y-B%C3%93NG-%C4%90%C3%81-WIKA-3-S%E1%BB%8CC-GI%C3%80Y-PH%E1%BB%A6I-3-S%E1%BB%8CC-Gi%C3%A0y-%C4%90%C3%A1-Banh-i.281979724.3449928584?adsid=0&campaignid=0&position=33",
        "productImgSrc": "https://cf.shopee.vn/file/83d9db2fa4ff9c0e3e49ce7b35a4b4e3_tn",
        "name": "GIÀY BÓNG ĐÁ WIKA 3 SỌC- GIÀY PHỦI 3 SỌC - Giày Đá Banh",
        "price": "₫99.000",
        "selledQuantity": "Đã bán 902",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "15% Giảm",
        "saleOffLabelPercent": "48%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%90%C3%A1-B%C3%B3ng-%C4%90inh-Cao-X18-Cao-C%E1%BA%A5p-Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-%C4%91inh-to-s%C3%A2n-c%E1%BB%8F-t%E1%BB%B1-nhi%C3%AAn-X18-Xanh-Blue-i.112712943.1852320348?adsid=0&campaignid=0&position=34",
        "productImgSrc": "https://cf.shopee.vn/file/287888491b75a102568dd32f15b9c0f9_tn",
        "name": "Giày Đá Bóng Đinh Cao X18 Cao Cấp- Giày đá bóng đinh to sân cỏ tự nhiên X18 Xanh Blue",
        "price": "₫180.000",
        "selledQuantity": "Đã bán 764",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "50% Giảm",
        "saleOffLabelPercent": "45%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%90%C3%A1-B%C3%B3ng-Messi-c%E1%BB%95-cao-x%C3%A1m-i.39395207.1700776455?adsid=0&campaignid=0&position=35",
        "productImgSrc": "https://cf.shopee.vn/file/a59df0b061765df4a5799d6f560e1373_tn",
        "name": "Giày Đá Bóng Messi cổ cao xám",
        "price": "₫320.000",
        "selledQuantity": "Đã bán 920",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "favouriteLabel": "Yêu thích+",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/-Gi%C3%A1-m%E1%BB%81m-Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-nam-Gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-Gi%C3%A0y-%C4%91%C3%A1-banh-ARAFOOTBALL-C%E1%BB%94-CAO-Kh%C3%A2u-Full-%C4%90%E1%BA%BF-i.140115397.3846544776?adsid=0&campaignid=0&position=36",
        "productImgSrc": "https://cf.shopee.vn/file/bf55641fe52377827145b6586d3e3700_tn",
        "name": "[Giá mềm] Giày đá bóng nam - Giày bóng đá - Giày đá banh ARAFOOTBALL CỔ CAO - Khâu Full Đế",
        "price": "₫156.900",
        "selledQuantity": "Đã bán 417",
        "saleOffLabelPercent": "44%",
        "favouriteLabel": "Mall",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-Tr%E1%BA%BB-em-v%C3%A0-ng%C6%B0%E1%BB%9Di-l%E1%BB%9Bn-gi%C3%A0y-%C4%91%C3%A1-banh-s%C3%A2nc%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-%C4%91%C3%A3-kh%C3%A2u-full-%C4%91%E1%BA%BF-i.59692223.1975735928?adsid=0&campaignid=0&position=37",
        "productImgSrc": "https://cf.shopee.vn/file/ec7aa20e7dc2188fa8623326fc900fc1_tn",
        "name": "Giày đá bóng,Trẻ em và người lớn,giày đá banh sâncỏ nhân tạo đã khâu full đế",
        "price": "₫20.000",
        "selledQuantity": "Đã bán 618",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-%C4%91%C3%A1-banh-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-i.59692223.1808597351?adsid=0&campaignid=0&position=38",
        "productImgSrc": "https://cf.shopee.vn/file/e617a5984842986c5c6504f37eb3b022_tn",
        "name": "Giày đá bóng đá banh sân cỏ nhân tạo",
        "price": "₫99.000",
        "selledQuantity": "Đã bán 1,4k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/-Si%C3%AAu-Ph%E1%BA%A9m-B%C3%A0n-b%E1%BA%AFn-b%C3%B3ng-%C4%91%C3%A1-Football-Table-Sport-Super-Game-i.9231723.5750284739?adsid=0&campaignid=0&position=39",
        "productImgSrc": "https://cf.shopee.vn/file/c5436ed58b9a36f152db71c460f8ff3c_tn",
        "name": "[Siêu Phẩm] Bàn bắn bóng đá - Football Table Sport - Super Game",
        "price": "₫105.000",
        "selledQuantity": "Đã bán 304",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "10% Giảm",
        "saleOffLabelPercent": "34%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-X18.6-T%E1%BA%B7ng-t%E1%BA%A5t-Kh%C3%A2u-%C4%91%E1%BA%BF-100-Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-s%C3%A2n-c%E1%BB%8F-t%E1%BB%B1-nhi%C3%AAn-X18.6-i.93425556.5640702867?adsid=0&campaignid=0&position=40",
        "productImgSrc": "https://cf.shopee.vn/file/511e973c5813b707ef191cf89383ed10_tn",
        "name": "Giày đá bóng sân cỏ nhân tạo X18.6 -Tặng tất -Khâu đế 100% -Giày đá bóng sân cỏ tự nhiên X18.6",
        "price": "₫59.000",
        "selledQuantity": "Đã bán 113",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffLabelPercent": "47%",
        "favouriteLabel": "Mall",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-Gi%C3%A0y-3-s%E1%BB%8Dc-%C4%91%C3%A1-banh-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-gi%C3%A1-r%E1%BA%BB-d%C3%A0nh-cho-nam-n%E1%BB%AF-th%E1%BB%83-thao-b%C3%B3ng-%C4%91%C3%A1-HTSPORT-i.239077327.4721661273?adsid=0&campaignid=0&position=41",
        "productImgSrc": "https://cf.shopee.vn/file/9a9db347f2a91342befa8ec8575d5ee3_tn",
        "name": "Giày đá bóng, Giày 3 sọc đá banh sân cỏ nhân tạo giá rẻ dành cho nam nữ thể thao bóng đá HTSPORT",
        "price": "₫125.000",
        "selledQuantity": "Đã bán 1,2k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-TH%C6%AF%E1%BB%A2NG-%C4%90%C3%8CNH-gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-Th%C4%83ng-Long-THASACO-lo%E1%BA%A1i-cao-c%E1%BA%A5p-i.57459908.2903861489?adsid=0&campaignid=0&position=42",
        "productImgSrc": "https://cf.shopee.vn/file/219a05243c40a9e8d22964ae62c00a63_tn",
        "name": "Giày đá bóng THƯỢNG ĐÌNH,giày bóng đá Thăng Long, THASACO loại cao cấp",
        "price": "₫29.000",
        "selledQuantity": "Đã bán 709",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/T%C3%BAi-%C4%90%E1%BB%B1ng-Gi%C3%A0y-%C4%90%C3%A1-B%C3%B3ng-2-Ng%C4%83n-V%E1%BA%A3i-Zami-Nh%E1%BA%ADp-Kh%E1%BA%A9u-i.697924.6664782853?adsid=0&campaignid=0&position=43",
        "productImgSrc": "https://cf.shopee.vn/file/42014eaa3a469a9ba51b81616ce54564_tn",
        "name": "Túi Đựng Giày Đá Bóng 2 Ngăn Vải Zami Nhập Khẩu",
        "price": "₫58.500",
        "selledQuantity": "Đã bán 347",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "10% Giảm",
        "saleOffLabelPercent": "27%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-3-s%E1%BB%8Dc-CT3-%C4%91%C3%A1-banh-gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-ba-s%E1%BB%8Dc-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-%C4%91%C3%A3-kh%C3%A2u-%C4%91%E1%BA%BF-ch%E1%BA%AFc-ch%E1%BA%AFn-i.57459908.2522856198?adsid=0&campaignid=0&position=44",
        "productImgSrc": "https://cf.shopee.vn/file/be951083636364202b66c7f3b6118cf3_tn",
        "name": "Giày đá bóng 3 sọc CT3 đá banh, giày bóng đá ba sọc sân cỏ nhân tạo đã khâu đế chắc chắn",
        "price": "₫40.000",
        "selledQuantity": "Đã bán 3,2k",
        "saleOffLabelPercent": "18%",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-C_R_7-Mer_Curial-13-h%C3%A0ng-cao-c%E1%BA%A5p-%C4%91%E1%BA%BF-FG-s%C3%A2n-c%E1%BB%8F-t%E1%BB%B1-nhi%C3%AAn-v%C3%A0-%C4%91%E1%BA%BF-TF-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-i.77811334.3124072757?adsid=0&campaignid=0&position=45",
        "productImgSrc": "https://cf.shopee.vn/file/5db0629e50820fe4cccdb22b9544b53d_tn",
        "name": "Giày đá bóng C_R_7 Mer_Curial 13 hàng cao cấp đế FG sân cỏ tự nhiên và đế TF sân cỏ nhân tạo",
        "price": "₫465.000",
        "selledQuantity": "Đã bán 688",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffText": "15% Giảm",
        "saleOffLabelPercent": "23%",
        "favouriteLabel": "Mall",
        "sponsorLabel": true
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-%E2%9A%A1FREESHIP%E2%9A%A1-gi%C3%A0y-%C4%91%C3%A1-banh-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-%C4%91%C3%A3-kh%C3%A2u-%C4%91%E1%BA%BF-100--i.31982992.7153409782?adsid=0&campaignid=0&position=46",
        "productImgSrc": "https://cf.shopee.vn/file/cfd352c72697bfa056fe09c1bc5df1af_tn",
        "name": "Giày đá bóng ⚡FREESHIP⚡ giày đá banh sân cỏ nhân tạo đã khâu đế 100%",
        "price": "₫39.200",
        "selledQuantity": "Đã bán 507",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%90%C3%A1-B%C3%B3ng-S%C3%A2n-C%E1%BB%8F-Nh%C3%A2n-T%E1%BA%A1o-TA11-AS-Tu%E1%BA%A5n-Anh-Kamito-i.353619944.8423257796?adsid=0&campaignid=0&position=47",
        "productImgSrc": "https://cf.shopee.vn/file/1142ec654b5637a6d400ddbc600cc75f_tn",
        "name": "Giày Đá Bóng Sân Cỏ Nhân Tạo TA11-AS Tuấn Anh Kamito",
        "price": "₫690.000",
        "selledQuantity": "Đã bán 131",
        "frameImgSrc": "https://cf.shopee.vn/file/27e7d77bf644b46cf62e44cc90d5f883",
        "saleOffText": "10% Giảm",
        "favouriteLabel": "Yêu thích",
        "sponsorLabel": false
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-%C4%90inh-l%E1%BB%9Bn-gi%C3%A0y-%C4%91%C3%A1-banh-s%C3%A2n-c%E1%BB%8F-t%E1%BB%B1-nhi%C3%AAn-%C4%90inh-l%E1%BB%9Bn-i.59692223.6708330187?adsid=0&campaignid=0&position=48",
        "productImgSrc": "https://cf.shopee.vn/file/65ff1521ed01a4169e274964b768ccb4_tn",
        "name": "Giày đá bóng Đinh lớn,giày đá banh sân cỏ tự nhiên Đinh lớn",
        "price": "99.000",
        "selledQuantity": "Đã bán 663",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffText": "",
        "saleOffLabelPercent": ""
    },
    {
        "productLink": "https://shopee.vn/-M%C3%A3-SKAMA8-gi%E1%BA%A3m-8-T%E1%BB%90I-%C4%90A-50K-%C4%91%C6%A1n300K-Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-TASOKI-nhi%E1%BB%81u-m%C3%A0u-c%E1%BB%95-thun-i.73788952.2790374891?adsid=0&campaignid=0&position=49",
        "productImgSrc": "https://cf.shopee.vn/file/fbbe3580702f03d6e7dbdcd066423176_tn",
        "name": "[Mã SKAMA8 giảm 8% TỐI ĐA 50K đơn300K] Giày đá bóng TASOKI nhiều màu cổ thun",
        "price": "210.000",
        "selledQuantity": "Đã bán 1,8k",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "",
        "saleOffLabelPercent": "50%"
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-Prowin-gi%C3%A0y-%C4%91%C3%A1-banh-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-ch%C3%ADnh-h%C3%A3ng-s%E1%BA%A3n-ph%E1%BA%A9m-g%E1%BB%93m-5-m%C3%A0u-size-t%E1%BB%AB-33-%C4%91%E1%BA%BFn-45-i.95740006.1705778368?adsid=0&campaignid=0&position=50",
        "productImgSrc": "https://cf.shopee.vn/file/44976853e9ac6de823280d9ff951c97f_tn",
        "name": "Giày đá bóng Prowin giày đá banh sân cỏ nhân tạo chính hãng sản phẩm gồm 5 màu size từ 33 đến 45",
        "price": "148.000",
        "selledQuantity": "Đã bán 631",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "",
        "saleOffLabelPercent": "41%"
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-ch%C3%ADnh-h%C3%A3ng-AKKA-CONTROL-2-TF-i.91245076.5070789499?adsid=0&campaignid=0&position=51",
        "productImgSrc": "https://cf.shopee.vn/file/a64ddb2227f210b9cd0d50545a467efd_tn",
        "name": "Giày đá bóng chính hãng AKKA CONTROL 2 TF",
        "price": "349.000",
        "selledQuantity": "Đã bán 73",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "10% Giảm",
        "saleOffLabelPercent": "49%"
    },
    {
        "productLink": "https://shopee.vn/T%E1%BA%A5t-%C4%91%C3%A1-b%C3%B3ng-tr%E1%BA%BB-em-ng%C6%B0%E1%BB%9Di-l%E1%BB%9Bn-ch%E1%BB%91ng-tr%C6%A1n-t%E1%BA%A5t-%C4%91%C3%A1-banh-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-i.57459908.2721819463?adsid=0&campaignid=0&position=52",
        "productImgSrc": "https://cf.shopee.vn/file/64dc1c498ab357af0f02e90e6604945d_tn",
        "name": "Tất đá bóng trẻ em,người lớn chống trơn, tất đá banh sân cỏ nhân tạo",
        "price": "12.000",
        "selledQuantity": "Đã bán 1,3k",
        "frameImgSrc": "",
        "saleOffText": "",
        "saleOffLabelPercent": "43%"
    },
    {
        "productLink": "https://shopee.vn/-M%C3%A3-SKAMA8-gi%E1%BA%A3m-8-T%E1%BB%90I-%C4%90A-50K-%C4%91%C6%A1n300K-GI%C3%81-X%C6%AF%E1%BB%9ENG-T%C3%BAi-%C4%91%E1%BB%B1ng-gi%C3%A0y-%C4%90%C3%81-B%C3%93NG-hai-ng%C4%83n-th%E1%BB%83-thao-i.73788952.6740407341?adsid=0&campaignid=0&position=53",
        "productImgSrc": "https://cf.shopee.vn/file/410407ea4f890037b030c478ee58e168_tn",
        "name": "[Mã SKAMA8 giảm 8% TỐI ĐA 50K đơn300K] [GIÁ XƯỞNG] Túi đựng giày ĐÁ BÓNG hai ngăn thể thao",
        "price": "28.000",
        "selledQuantity": "Đã bán 271",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "",
        "saleOffLabelPercent": "41%"
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-nam-KAMITO-ch%C3%ADnh-h%C3%A3ng-QUANG-H%E1%BA%A2I-gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-%C4%91%C3%A1-banh-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-t%E1%BA%B7ng-th%C3%AAm-t%C3%BAi-r%C3%BAt-%C4%91%E1%BB%B1ng-gi%C3%A0y-QH-19--i.57459908.7407778296?adsid=0&campaignid=0&position=54",
        "productImgSrc": "https://cf.shopee.vn/file/75ef0f893f7f899dedcf3736b7f9ea98_tn",
        "name": "Giày đá bóng nam KAMITO chính hãng QUANG HẢI, giày đá bóng đá banh sân cỏ nhân tạo [ tặng thêm túi rút đựng giày QH 19 ]",
        "price": "200.000",
        "selledQuantity": "Đã bán 1,9k",
        "frameImgSrc": "",
        "saleOffText": "50% Giảm",
        "saleOffLabelPercent": "21%"
    },
    {
        "productLink": "https://shopee.vn/-M%C3%A3-SKAMA8-gi%E1%BA%A3m-8-T%E1%BB%90I-%C4%90A-50K-%C4%91%C6%A1n300K-T%C3%BAi-%C4%91%E1%BB%B1ng-gi%C3%A0y-CH%E1%BB%90NG-N%C6%AF%E1%BB%9AC-T%C3%BAi-%C4%91%E1%BB%B1ng-gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-H%C3%A0ng-VNXK-B%E1%BA%A2O-H%C3%80NH-12-TH%C3%81NG-i.55746979.6933416680?adsid=0&campaignid=0&position=55",
        "productImgSrc": "https://cf.shopee.vn/file/a5017ef70ac36c6757a6217a35fbc245_tn",
        "name": "[Mã SKAMA8 giảm 8% TỐI ĐA 50K đơn300K] Túi đựng giày [ CHỐNG NƯỚC ] Túi đựng giày đá bóng - Hàng VNXK BẢO HÀNH 12 THÁNG",
        "price": "99.000",
        "selledQuantity": "Đã bán 696",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffText": "10% Giảm",
        "saleOffLabelPercent": "34%"
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%90%C3%A1-B%C3%B3ng-S%C3%A2n-C%E1%BB%8F-Nh%C3%A2n-T%E1%BA%A1o-X19.1-TF-Tr%E1%BA%AFng-Cam-Ch%E1%BA%A5t-da-m%E1%BB%81m-nh%E1%BA%B9-Ch%E1%BB%91ng-n%C6%B0%E1%BB%9Bc-t%E1%BB%91t-%C4%90%E1%BA%BF-gi%C3%A0y-%C3%AAm-%C3%A1i-i.274181607.7870420140?adsid=0&campaignid=0&position=56",
        "productImgSrc": "https://cf.shopee.vn/file/7922ee477b6a19af5308e1e8efdc4c65_tn",
        "name": "Giày Đá Bóng Sân Cỏ Nhân Tạo X19.1 TF Trắng Cam | Chất da mềm nhẹ, Chống nước tốt, Đế giày êm ái",
        "price": "494.000",
        "selledQuantity": "Đã bán 108",
        "frameImgSrc": "",
        "saleOffText": "",
        "saleOffLabelPercent": "5%"
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-X18-T%E1%BA%B7ng-t%E1%BA%A5t-Kh%C3%A2u-%C4%91%E1%BA%BF-100-%C4%90%E1%BA%BF-cao-su-si%C3%AAu-b%E1%BB%81n-i.93425556.1552379801?adsid=0&campaignid=0&position=57",
        "productImgSrc": "https://cf.shopee.vn/file/17721f965b5b930bc0cc36c7bfc91200_tn",
        "name": "Giày đá bóng sân cỏ nhân tạo X18 -Tặng tất -Khâu đế 100% -Đế cao su siêu bền",
        "price": "59.000",
        "selledQuantity": "Đã bán 301",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffText": "",
        "saleOffLabelPercent": "35%"
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-gi%C3%A0y-%C4%91%C3%A1-banh-s%C3%A2n-c%E1%BB%8F-nh%C3%A2n-t%E1%BA%A1o-i.59692223.1528704005?adsid=0&campaignid=0&position=58",
        "productImgSrc": "https://cf.shopee.vn/file/d88cdf8635b40a1e99753d6ed67aa202_tn",
        "name": "Giày đá bóng,giày đá banh sân cỏ nhân tạo",
        "price": "90.000",
        "selledQuantity": "Đã bán 3k",
        "frameImgSrc": "https://cf.shopee.vn/file/2e79cc840b4862b7b107b7440bc7a60e",
        "saleOffText": "",
        "saleOffLabelPercent": ""
    },
    {
        "productLink": "https://shopee.vn/Gi%C3%A0y-%C4%91%C3%A1-b%C3%B3ng-Prowin-S50-%C4%91en-tr%E1%BA%BB-em-k%C3%A8m-t%E1%BA%A5t-b%C3%B3ng-%C4%91%C3%A1-cao-c%E1%BB%95-nh%C3%A0-ph%C3%A2n-ph%E1%BB%91i-ch%C3%ADnh-t%E1%BB%AB-h%C3%A3ng-i.95740006.2345574928?adsid=0&campaignid=0&position=59",
        "productImgSrc": "https://cf.shopee.vn/file/0a8118ede924dad46cf4213675f7ce58_tn",
        "name": "Giày đá bóng Prowin S50 đen trẻ em kèm tất bóng đá cao cổ - nhà phân phối chính từ hãng",
        "price": "147.500",
        "selledQuantity": "Đã bán 372",
        "frameImgSrc": "https://cf.shopee.vn/file/a6ebecdf7761f13314a8f089a24d5497",
        "saleOffText": "",
        "saleOffLabelPercent": "41%"
    }
];


/* HTML EXECUTIVE */
var todaySuggestionMainSuperSaleProductsInfoIndex = 0;
for(var i = 0; i < 10; i++) {
    for (var j = 0; j < 6; j++) { 
        //#region 1.Add href for todaySuggestionMainProduct
        var todaySuggestionMainProduct = document.querySelector(`.today-suggestion__main__tab-super-sale-8-8 
            .today-suggestion__main-list:nth-child(${i+1}) .today-suggestion__main-item:nth-child(${j+1}) > a`);
        todaySuggestionMainProduct.href = todaySuggestionMainSuperSaleProductsInfo[todaySuggestionMainSuperSaleProductsInfoIndex].productLink;    
        //#endregion

        //#region 2.Create nodes, add attributes, innerHTML inside <div></div> tag
        var productImg = document.createElement('img');
        productImg.alt = '';
        productImg.src = todaySuggestionMainSuperSaleProductsInfo[todaySuggestionMainSuperSaleProductsInfoIndex].productImgSrc;
        productImg.classList.add('today-suggestion__main-product__product-img');

        var frameImg = document.createElement('img');
        frameImg.classList.add('today-suggestion__main-product__frame-img');
        frameImg.alt = '';
        // --> check *sự có mặt*
        if(todaySuggestionMainSuperSaleProductsInfo[todaySuggestionMainSuperSaleProductsInfoIndex].frameImgSrc) {
            frameImg.src = todaySuggestionMainSuperSaleProductsInfo[todaySuggestionMainSuperSaleProductsInfoIndex].frameImgSrc;
        } else {
            frameImg = undefined;
        }

        var productPart = document.createElement('div');
        productPart.classList.add('today-suggestion__main-product__part');

        var productName = document.createElement('span');
        productName.innerHTML = todaySuggestionMainSuperSaleProductsInfo[todaySuggestionMainSuperSaleProductsInfoIndex].name;
        productName.classList.add('today-suggestion__main-product__name');

        var saleOff = document.createElement('div');
        saleOff.classList.add('today-suggestion__main-product__sale-off');

        var saleOffLeftSerrated = document.createElement('img');
        saleOffLeftSerrated.src = "./assests/img/container/today-suggestion/left-serrated.png";
        saleOffLeftSerrated.classList.add('today-suggestion__main-product__sale-off__left-serrated');

        var saleOffText = document.createElement('span');
        saleOffText.innerHTML = todaySuggestionMainSuperSaleProductsInfo[todaySuggestionMainSuperSaleProductsInfoIndex].saleOffText;
        saleOffText.classList.add('today-suggestion__main-product__sale-off__text');

        var saleOffRightSerrated = document.createElement('img');
        saleOffRightSerrated.src = "./assests/img/container/today-suggestion/right-serrated.png";
        saleOffRightSerrated.classList.add('today-suggestion__main-product__sale-off__right-serrated');
        
        // --> check *sự có mặt*
        if(! todaySuggestionMainSuperSaleProductsInfo[todaySuggestionMainSuperSaleProductsInfoIndex].saleOffText) {
            saleOff = undefined;
        }


        var priceAndSelledQuantity = document.createElement('div');
        priceAndSelledQuantity.classList.add('today-suggestion__main-product__price-and-selled-quantity');

        var price = document.createElement('span');
        price.innerHTML = todaySuggestionMainSuperSaleProductsInfo[todaySuggestionMainSuperSaleProductsInfoIndex].price;
        price.classList.add('today-suggestion__main-product__price');

        var selledQuantity = document.createElement('span');
        selledQuantity.innerHTML = todaySuggestionMainSuperSaleProductsInfo[todaySuggestionMainSuperSaleProductsInfoIndex].selledQuantity;
        selledQuantity.classList.add('today-suggestion__main-product__selled-quantity');
        
        var favouriteLabel = document.createElement('div');
        var favouriteLabelImg = undefined;
        favouriteLabel.classList.add('today-suggestion__main-product__favourite-label');

        // --> check *sự có mặt*
        if(todaySuggestionMainSuperSaleProductsInfo[todaySuggestionMainSuperSaleProductsInfoIndex].favouriteLabel) {
            var favouriteLabelData = todaySuggestionMainSuperSaleProductsInfo[todaySuggestionMainSuperSaleProductsInfoIndex].favouriteLabel;
            
            if(favouriteLabelData == 'Yêu thích') {
                favouriteLabel.classList.add('today-suggestion__main-product__favourite-label--yeuthich');
                favouriteLabel.innerHTML = 'Yêu thích';
            } 
            else {
                if (favouriteLabelData == 'Yêu thích+') {
                    favouriteLabel.classList.add('today-suggestion__main-product__favourite-label--yeuthichplus');
                    favouriteLabelImg = document.createElement('img');
                    favouriteLabelImg.src = './assests/img/container/today-suggestion/yeuthichplus.png';
                } 
                else {
                    if (favouriteLabelData == 'Mall') {
                        favouriteLabel.classList.add('today-suggestion__main-product__favourite-label--mall');
                        favouriteLabelImg = document.createElement('img');
                        favouriteLabelImg.src = './assests/img/container/today-suggestion/mall.png';
                    }  
                }
            }
        }
        else {
            favouriteLabel = undefined;
        }

        var saleOffLabel = document.createElement('div');
        saleOffLabel.classList.add('today-suggestion__main-product__sale-off-label');

        var saleOffLabelPercent = document.createElement('span');
        saleOffLabelPercent.classList.add('today-suggestion__main-product__sale-off-label__percent');
        // --> check *sự có mặt*
        if(todaySuggestionMainSuperSaleProductsInfo[todaySuggestionMainSuperSaleProductsInfoIndex].saleOffLabelPercent) {
            saleOffLabelPercent.innerHTML = todaySuggestionMainSuperSaleProductsInfo[todaySuggestionMainSuperSaleProductsInfoIndex].saleOffLabelPercent;
        } else {
            saleOffLabel = undefined;
        }

        var saleOffLabelText = document.createElement('span');
        saleOffLabelText.innerHTML = 'giảm';
        saleOffLabelText.classList.add('today-suggestion__main-product__sale-off-label__text');
        
        var sponsorLabel = document.createElement('div');
        sponsorLabel.innerHTML = 'Tài Trợ';
        sponsorLabel.classList.add('today-suggestion__main-product__sponsor-label');
        // --> check *sự có mặt*
        if(! todaySuggestionMainSuperSaleProductsInfo[todaySuggestionMainSuperSaleProductsInfoIndex].sponsorLabel) {
            sponsorLabel = undefined;
        }

        var hoverLabel = document.createElement('div');
        hoverLabel.innerHTML = 'Tìm sản phẩm tương tự';
        hoverLabel.classList.add('today-suggestion__main-product__hover-label');
        //#endregion
            
        //#region 3.Append suitable child for above tags 
        priceAndSelledQuantity.appendChild(price);
        priceAndSelledQuantity.appendChild(selledQuantity); 

        productPart.appendChild(productName);

        if(saleOff) {
            saleOff.appendChild(saleOffLeftSerrated);
            saleOff.appendChild(saleOffText);
            saleOff.appendChild(saleOffRightSerrated);
            productPart.appendChild(saleOff);
        }

        productPart.appendChild(priceAndSelledQuantity);

        if(favouriteLabelImg) {
            favouriteLabel.appendChild(favouriteLabelImg);
        }

        if(saleOffLabel) {
            saleOffLabel.appendChild(saleOffLabelPercent);
            saleOffLabel.appendChild(saleOffLabelText);
        }
        //#endregion

        //#region 4.Get <div></div> tag and append child to it 
        var div = document.querySelector(`.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${i+1}) 
            .today-suggestion__main-item:nth-child(${j+1}) > a > div`);
            
        div.appendChild(productImg);

        if(frameImg) {
            div.appendChild(frameImg);
        }

        div.appendChild(productPart);

        if(favouriteLabel) {
            div.appendChild(favouriteLabel);
        }

        if(saleOffLabel) {
            div.appendChild(saleOffLabel);
        }
        
        if(sponsorLabel) {
            div.appendChild(sponsorLabel);
        }

        div.appendChild(hoverLabel);
        //#endregion

        /* 5.Increase the Array of Objects's index */
        todaySuggestionMainSuperSaleProductsInfoIndex++;
    
    }
}


/* CSS EXECUTIVE */
for(var i = 0; i < 10; i++) {
    var check = false;
    var items = document.querySelectorAll(`.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${i+1}) 
        .today-suggestion__main-item .today-suggestion__main-product__sale-off`);
    check = (items.length >= 1);

    var list = document.querySelector(`.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${i+1})`);
    var items = document.querySelectorAll(`.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${i+1}) .today-suggestion__main-item`);
    var products = document.querySelectorAll(`.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${i+1}) .today-suggestion__main-product`);

    if (check) {
        list.style.height = '29.8rem';
        for(var j = 0; j < items.length; j++) {
            items[j].style.height = '29.8rem';
            products[j].style.height = '28.8rem';

            var saleOff = document.querySelector(`.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${i+1}) 
                .today-suggestion__main-item:nth-child(${j+1}) .today-suggestion__main-product__sale-off`);
            if(saleOff == null) {
                var priceAndSelledQuantity = document.querySelector(`.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${i+1}) 
                    .today-suggestion__main-item:nth-child(${j+1}) .today-suggestion__main-product__price-and-selled-quantity`);
                priceAndSelledQuantity.style.marginTop = '2.6rem';
            }
        }
    } 
    else {
        list.style.height = '27.7rem';
        for(var j = 0; j < items.length; j++) {
            items[j].style.height = '27.7rem';
            products[j].style.height = '26.7rem';
        }
    }
}

//#endregion 2.todaySuggestionMainSuperSaleProductsInfo

//#endregion *today-suggestion


//#region todaySuggestionHeadings onclick()
var todaySuggestion = document.querySelector('.today-suggestion');
var todaySuggestionHeadingTabMain = document.querySelector('.today-suggestion__heading-tab-main');
var todaySuggestionHeadingTabSuperSale88 = document.querySelector('.today-suggestion__heading-tab-super-sale-8-8');
var todaySuggestionMainViewAllBtn = document.querySelector('.today-suggestion__main__view-all-btn');
var todaySuggestionMain = document.querySelector('.today-suggestion__main');
var todaySuggestionMainTabMain = document.querySelector('.today-suggestion__main__tab-main');
var todaySuggestionMainTabSuperSale88 = document.querySelector('.today-suggestion__main__tab-super-sale-8-8');


todaySuggestionHeadingTabMain.addEventListener('click', function() {
    if(todaySuggestionHeadingTabSuperSale88.classList.contains('today-suggestion__heading-tab--active')) {
        todaySuggestionHeadingTabSuperSale88.classList.remove('today-suggestion__heading-tab--active');
    }   
    if(! this.classList.contains('today-suggestion__heading-tab--active')) {
        this.classList.add('today-suggestion__heading-tab--active');
    }

    todaySuggestionMainTabSuperSale88.style.display = 'none';
    todaySuggestionMainTabMain.style.display = 'block';
    todaySuggestion.style.height = '254rem';
    todaySuggestionMainViewAllBtn.href = 'https://shopee.vn/daily_discover?pageNumber=2';

    window.scrollTo(0, todaySuggestion.offsetTop);
});


todaySuggestionHeadingTabSuperSale88.addEventListener('click', function() {
    if(todaySuggestionHeadingTabMain.classList.contains('today-suggestion__heading-tab--active')) {
        todaySuggestionHeadingTabMain.classList.remove('today-suggestion__heading-tab--active');
    }   
    if(! this.classList.contains('today-suggestion__heading-tab--active')) {
        this.classList.add('today-suggestion__heading-tab--active');
    }

    todaySuggestionMainTabMain.style.display = 'none';
    todaySuggestionMainTabSuperSale88.style.display = 'block';
    todaySuggestion.style.height = '318rem';
    todaySuggestionMainViewAllBtn.href = 'https://shopee.vn/double_eleven_big_sale/2';

    window.scrollTo(0, todaySuggestion.offsetTop);
});

//#endregion

// -> (3) Cần xử lí (ẩn hiện & animation)
//#region todaySuggestionMainLoading...
var todaySuggestionMainLoading = document.querySelector('.today-suggestion__main__loading');
//#endregion

// -> OK
//#region updateInDOMFooterTextATags
var footerTextATags = document.querySelectorAll('.footer__text a');

function updateInDOMFooterTextATags () {
    fetch("db.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) {
            for(var i = 0; i < footerTextATags.length; i++) {
                footerTextATags[i].href = datas.footerTextATagsInfo[i].href;
                footerTextATags[i].innerHTML = datas.footerTextATagsInfo[i].innerHTML;
            }
        })
}

updateInDOMFooterTextATags();
//#endregion

// -> OK
//#region updateInDOMFooterDirectoryList
var footerDirectoryList = document.querySelector('.footer__directory__list');

function updateInDOMFooterDirectoryList () {
    fetch("db.json")
        .then(function (response){
            return response.json();
        })
        .then(function(datas) {
            handleUpdateInDOMFooterDirectoryList(datas.footerDirectoryListInfo);
        })
}

function handleUpdateInDOMFooterDirectoryList (footerDirectoryListInfo) {
    var partItemQuantity = [
        21, 11, 6, 18, 11, 15, 21, 10, 8, 8, 8, 11, 10, 8, 13, 6, 15, 6, 10, 10, 9, 10, 5, 6, 11, 6
    ]
    
    var liTags = '', thisItemLength = 5, partIndex = 0;

    for(var i = 0; i < footerDirectoryListInfo.length; i++) {
        thisItemLength = (i == 0) ? 6 : 5;
        var divTags = '';
        
        for(var j = 0; j < thisItemLength; j++) {
            var aTags = '';
            for(var k = 0; k < partItemQuantity[partIndex]; k++) {
                var aTag = `<a class="footer__directory__item__part__item" href="${footerDirectoryListInfo[i][j].footerDirectoryItemPartListInfo[k].href}" target="_blank" rel="noopener noreferrer">
                    ${footerDirectoryListInfo[i][j].footerDirectoryItemPartListInfo[k].innerHTML}
                </a>`;
                
                aTags += aTag;
            }
            
            var divTag = `
                <div class="footer__directory__item__part">
                    <a target="_blank" rel="noopener noreferrer" href="${footerDirectoryListInfo[i][j].heading.href}" class="footer__directory__item__part__heading">
                    ${footerDirectoryListInfo[i][j].heading.innerHTML}</a>
                    <div class="footer__directory__item__part__list">
                        ${aTags}
                    </div>
                </div>`;
    
            divTags += divTag;

            partIndex++;
        }
    
        var liTag = `<li class="footer__directory__item">${divTags}</li>`
        liTags += liTag;
    }

    //-> add innerHTML for this element
    footerDirectoryList.innerHTML = liTags;
}

updateInDOMFooterDirectoryList();
//#endregion

// -> OK
//#region updateInDOMFooterLinkAboutTextCSKH
var footerLinkAboutTextCSKH = document.querySelector('.footer__link__about-text-CSKH');

function updateInDOMFooterLinkAboutTextCSKH () {
    fetch("db.json")
        .then(function (response){
            return response.json();
        })
        .then(function(datas){
            var divTags = datas.footerLinkAboutTextCSKHInfo.map(function(data) {
                return `
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="${data.href}" class="footer__link__about-text-CSKH__link">${data.innerHTML}</a>
                    </div>`
            })
            // add innerHTML for this element
            footerLinkAboutTextCSKH.innerHTML = divTags.join('');
        })
}

updateInDOMFooterLinkAboutTextCSKH();
//#endregion

// -> OK
//#region updateInDOMFooterLinkAboutTextVeShopee
var footerLinkAboutTextVeShopee = document.querySelector('.footer__link__about-text-VeShopee');

function updateInDOMFooterLinkAboutTextVeShopee () {
    fetch("db.json")
        .then(function (response){
            return response.json();
        })
        .then(function(datas){
            var divTags = datas.footerLinkAboutTextVeShopeeInfo.map(function(data) {
                return `
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="${data.href}" class="footer__link__about-text-VeShopee__link">${data.innerHTML}</a>
                    </div>`
            })
            // add innerHTML for this element
            footerLinkAboutTextVeShopee.innerHTML = divTags.join('');
        })
}

updateInDOMFooterLinkAboutTextVeShopee();
//#endregion

// -> OK
//#region updateInDOMFooterLinkAboutSocial
var footerLinkAboutSocial = document.querySelector('.footer__link__about-social');

function updateInDOMFooterLinkAboutSocial () {
    fetch("db.json")
        .then(function (response){
            return response.json();
        })
        .then(function(datas){
            var aTags = datas.footerLinkAboutSocialInfo.map(function(data) {
                return `
                    <a target="_blank" rel="noopener noreferrer" href="${data.href}" class="footer__link__about-social__link">
                        <img src="${data.image}" alt="" class="footer__link__about-social__icon">
                        ${data.text}
                    </a>`;
            })

            // add innerHTML for this element
            footerLinkAboutSocial.innerHTML = aTags.join('');
        })
}

updateInDOMFooterLinkAboutSocial();
//#endregion

// -> OK
//#region updateInDOMFooterLinkCopyrightCountryAndAreaList
var footerLinkCopyrightCountryAndAreaList = 
    document.querySelector('.footer__link__copyright__country-and-area__list');

function updateInDOMFooterLinkCopyrightCountryAndAreaList () {
    fetch("db.json")
        .then(function (response){
            return response.json();
        })
        .then(function(datas){
            var aTags = datas.footerLinkCopyrightCountryAndAreaListInfo.map(function(data) {
                return `
                    <a target="_blank" rel="noopener noreferrer" href="${data.href}" class="footer__link__copyright__country-and-area__link">${data.innerHTML}</a>`;
            })

            // add innerHTML for this element
            footerLinkCopyrightCountryAndAreaList.innerHTML = aTags.join('');
        })
}

updateInDOMFooterLinkCopyrightCountryAndAreaList();
//#endregion

// -> OK
//#region updateInDOMFooterPolicyTermsPartTitle
var footerPolicyTermsPartTitle = document.querySelector('.footer__policy-terms__part__title')

function updateInDOMFooterPolicyTermsPartTitle () {
    fetch("db.json")
        .then(function (response) {
            return response.json();
        })
        .then(function(datas){
            var divTags = datas.footerPolicyTermsPartTitleInfo.map(function (data) {
                return `
                    <div class="footer__policy-terms__part__title__part">
                        <a target="_blank" rel="noopener noreferrer" href="${data.href}" class="footer__policy-terms__part__title__link">${data.innerHTML}</a>
                    </div>`;
            })
            footerPolicyTermsPartTitle.innerHTML = divTags.join('');
        })
}

updateInDOMFooterPolicyTermsPartTitle();
//#endregion

// -> OK
//#region updateInDOMFooterPolicyTermsPartCertificate
var footerPolicyTermsPartCertificate = document.querySelector('.footer__policy-terms__part__certificate')

function updateInDOMFooterPolicyTermsPartCertificate () {
    fetch("db.json")
        .then(function (response) {
            return response.json();
        })
        .then(function(datas){
            var aTags = datas.footerPolicyTermsPartCertificateInfo.map(function (data) {
                return `
                    <a target="_blank" rel="noopener noreferrer" href="${data.href}" class="footer__policy-terms__part__certificate__link">
                        <img src="${data.image}" alt="">
                    </a>`
            })
            footerPolicyTermsPartCertificate.innerHTML = aTags.join('');
        })
}

updateInDOMFooterPolicyTermsPartCertificate();
//#endregion

// -> OK
//#region updateInDOMFooterPolicyTermsPartCompanyInfo
var footerPolicyTermsPartCompanyInfo = document.querySelector('.footer__policy-terms__part__company-info');

function updateInDOMFooterPolicyTermsPartCompanyInfo() {
    fetch("db.json")
        .then (function(response) {
            return response.json();
        })
        .then(function(datas) {
            var spanTags = datas.footerPolicyTermsPartCompanyInfoInfo.map(function(data) {
                return `<span class="footer__policy-terms__part__company-info__text">${data}</span>`;
            });
            footerPolicyTermsPartCompanyInfo.innerHTML = spanTags.join('');
        })
}

updateInDOMFooterPolicyTermsPartCompanyInfo();
//#endregion


//#region motionPartChatPopupMainSearchAndOptionsPopupNthChilds onclick()
var motionPartChatPopupMainSearchAndOptionsPopupNthChild1 = 
    document.querySelector('.motion-part__chat__popup__main__search-and-options__popup > div:nth-child(1)');
var motionPartChatPopupMainSearchAndOptionsPopupNthChild2 = 
    document.querySelector('.motion-part__chat__popup__main__search-and-options__popup > div:nth-child(2)');
var motionPartChatPopupMainSearchAndOptionsPopupNthChild3 = 
    document.querySelector('.motion-part__chat__popup__main__search-and-options__popup > div:nth-child(3)');
var motionPartChatPopupMainContent_all = 
    document.querySelector('.motion-part__chat__popup__main__content--all');
var motionPartChatPopupMainContent_unread = 
    document.querySelector('.motion-part__chat__popup__main__content--unread');
var motionPartChatPopupMainContent_pinned = 
    document.querySelector('.motion-part__chat__popup__main__content--pinned');
var motionPartChatPopupMainSearchAndOptionsText = 
    document.querySelector('.motion-part__chat__popup__main__search-and-options__text');


motionPartChatPopupMainContent_unread.style.display = 'none';
motionPartChatPopupMainContent_pinned.style.display = 'none';

motionPartChatPopupMainSearchAndOptionsPopupNthChild1.onclick = function () {
    motionPartChatPopupMainSearchAndOptionsText.innerHTML = this.innerHTML;
    motionPartChatPopupMainContent_all.style.display = 'flex';
    motionPartChatPopupMainContent_unread.style.display = 'none';
    motionPartChatPopupMainContent_pinned.style.display = 'none';
}

motionPartChatPopupMainSearchAndOptionsPopupNthChild2.onclick = function () {
    motionPartChatPopupMainSearchAndOptionsText.innerHTML = this.innerHTML;  
    motionPartChatPopupMainContent_all.style.display = 'none';
    motionPartChatPopupMainContent_unread.style.display = 'flex';
    motionPartChatPopupMainContent_pinned.style.display = 'none';
}

motionPartChatPopupMainSearchAndOptionsPopupNthChild3.onclick = function () {
    motionPartChatPopupMainSearchAndOptionsText.innerHTML = this.innerHTML;   
    motionPartChatPopupMainContent_all.style.display = 'none';
    motionPartChatPopupMainContent_unread.style.display = 'none';
    motionPartChatPopupMainContent_pinned.style.display = 'flex';
}
//#endregion


//#region motionPartChatPopupMainSearchAndOptionsInput (click, blur)
var motionPartChatPopupMainSearchAndOptionsInput = 
    document.querySelector('.motion-part__chat__popup__main__search-and-options > input');
var motionPartChatPopupMainSearchAndOptionsPart = 
    document.querySelector('.motion-part__chat__popup__main__search-and-options__part');
var motionPartChatPopupMainSearchAndOptionsPopup = 
    document.querySelector('.motion-part__chat__popup__main__search-and-options__popup');

motionPartChatPopupMainSearchAndOptionsInput.onclick = function () {
    motionPartChatPopupMainSearchAndOptionsPart.style.display = 'none';
    motionPartChatPopupMainSearchAndOptionsInput.style.width = '100%';
}
motionPartChatPopupMainSearchAndOptionsInput.onblur = function () {
    setTimeout(function () {
        motionPartChatPopupMainSearchAndOptionsPart.style.display = 'flex';
        motionPartChatPopupMainSearchAndOptionsInput.style.width = '13.2rem';
    }, 200);
}
//#endregion


//#region motionPartChatPopupMainSearchAndOptionsPart onclick()
motionPartChatPopupMainSearchAndOptionsPopup.style.display = 'none';
motionPartChatPopupMainSearchAndOptionsPart.onclick =  function () {
    if (motionPartChatPopupMainSearchAndOptionsPopup.style.display == 'none') {
        motionPartChatPopupMainSearchAndOptionsPopup.style.display = 'block';
    } else {
        motionPartChatPopupMainSearchAndOptionsPopup.style.display = 'none';
    }
}
//#endregion


//#region motionPartChatMain, motionPartChatPopupHeader_hidePopupBtn onclick()
var motionPartChatMain = document.querySelector('.motion-part__chat__main');
var motionPartChatPopup = document.querySelector('.motion-part__chat__popup');
var motionPartChatPopupHeader_hidePopupBtn = document.querySelector('.motion-part__chat__popup__header__right-icons > svg:nth-child(3)');

motionPartChatMain.onclick = function () {
    this.style.display = 'none';
    motionPartChatPopup.style.display = 'block';
}
motionPartChatPopupHeader_hidePopupBtn.onclick = function () {
    motionPartChatPopup.style.display = 'none';
    motionPartChatMain.style.display = 'flex';
}
//#endregion


//#region motionPartChatPopupHeader_iconWhenNormal,...Expanded onclick()
var motionPartChatPopup = document.querySelector('.motion-part__chat__popup');
var motionPartChatPopupExpanded = document.querySelector('.motion-part__chat__popup__expanded');
var motionPartChatPopupHeader_iconWhenNormal = document.querySelector('.motion-part__chat__popup__header__icon--when-normal');
var motionPartChatPopupHeader_iconWhenExpanded = document.querySelector('.motion-part__chat__popup__header__icon--when-expanded');


motionPartChatPopupHeader_iconWhenNormal.onclick = function () {
    motionPartChatPopupHeader_iconWhenNormal.style.display = 'none';
    motionPartChatPopupHeader_iconWhenExpanded.style.display = 'block';
    motionPartChatPopup.style.width = '50.8rem';
    motionPartChatPopupExpanded.style.display = 'block';
}

motionPartChatPopupHeader_iconWhenExpanded.onclick = function () {
    motionPartChatPopupHeader_iconWhenExpanded.style.display = 'none';
    motionPartChatPopupHeader_iconWhenNormal.style.display = 'block';
    motionPartChatPopup.style.width = '22.2rem';
    motionPartChatPopupExpanded.style.display = 'none';
}
//#endregion
