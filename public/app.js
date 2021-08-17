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


//#region BUGS: call API
// var jsURL = 'https://www.freeformatter.com/json-formatter.html';
// var jsURL = 'https://jsonplaceholder.typicode.com/comments';


// fetch(jsURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (array) {
//         console.log(array);
//     })
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

//#region headerSearchFrameInput, headerSearchHistory
var headerSearchFrameInput = document.querySelector('.header__search-frame__input');
var headerSearchHistory = document.querySelector('.header__search-history');
var headerSearchFrameBtn = document.querySelector('.header__search-frame__btn');
var headerSearchHistoryList = document.querySelector('.header__search-history-list');
var headerSearchHistoryItemLinksInfo = [
    {
        innerHTML: 'người yêu giá rẻ',
        href: "https://shopee.vn/search?keyword=" + 'người yêu giá rẻ'
    },
    {
        innerHTML: 'iphone 12 pro max',
        href: "https://shopee.vn/search?keyword=" + 'iphone 12 pro max'
    },
    {
        innerHTML: 'giày converse cổ cao',
        href: "https://shopee.vn/search?keyword=" + 'giày converse cổ cao'
    }
];
var headerSearchHistoryItemIndex = 0;


//#region (f) removeHeaderSearchHistoryItemInDOM
function removeHeaderSearchHistoryItemInDOM () {
    var headerSearchHistoryItems = document.querySelectorAll('.header__search-history-item');

    for(var i = 1; i < headerSearchHistoryItems.length; i++) {
        headerSearchHistoryItems[i].parentNode.removeChild(headerSearchHistoryItems[i]);
    }
}
//#endregion

//#region (f) updateHeaderSearchHistoryItemInDOM
function updateHeaderSearchHistoryItemInDOM () {
    for(var i = 0; i < headerSearchHistoryItemLinksInfo.length; i++) {
        var liTag = document.createElement('li');
        liTag.classList.add('header__search-history-item');

        var aTag = document.createElement('a');
        aTag.classList.add('header__search-history-item__link')
        aTag.href = headerSearchHistoryItemLinksInfo[i].href;
        aTag.innerHTML = headerSearchHistoryItemLinksInfo[i].innerHTML;

        // add these two properties to open link in new tab
        aTag.target = "_blank";
        aTag.rel = "noopener noreferrer";

        liTag.appendChild(aTag);
        headerSearchHistoryList.appendChild(liTag);
    }
}
//#endregion

//#region updateHeaderSearchHistoryItemInDOM --> default data
updateHeaderSearchHistoryItemInDOM();
//#endregion

var headerSearchHistoryItemLinks = document.querySelectorAll('.header__search-history-item__link');


//#region (f) updateHeaderSearchHistoryItemLinksInfo
function updateHeaderSearchHistoryItemLinksInfo (innerHTML, href) {
    var length = headerSearchHistoryItemLinksInfo.length;
    if (length == 10) {
        // insert element at first position of array
        headerSearchHistoryItemLinksInfo.unshift({
            innerHTML, 
            href
        });

        // remove last element & remove, updateHeaderSearchHistoryItemInDOM
        headerSearchHistoryItemLinksInfo.pop();
        removeHeaderSearchHistoryItemInDOM();
        updateHeaderSearchHistoryItemInDOM();
    } 
    else {
        // insert element at first position of array
        headerSearchHistoryItemLinksInfo.unshift({
            innerHTML,
            href
        });
    }
}
//#endregion

//#region (f) removeHeaderSearchHistoryItemLinksHover
function removeHeaderSearchHistoryItemLinksHover () {
    headerSearchHistoryItemLinks.forEach(function (a) {
        if (a.classList.contains('header__search-history-item__link--hover')) {
            a.classList.remove('header__search-history-item__link--hover');
        }
    });
}
//#endregion


//#region headerSearchFrameInput onclick(), onblur()
headerSearchFrameInput.onclick = function () {
    headerSearchHistory.style.display = 'block';
}

headerSearchFrameInput.onblur = function () {
    // return default search option index
    headerSearchHistoryItemIndex = 0;

    removeHeaderSearchHistoryItemLinksHover();

    setTimeout(function() {
        headerSearchHistory.style.display = 'none';
    }, 200);
}
//#endregion


//#region headerSearchFrameBtn onclick() 
headerSearchFrameBtn.addEventListener('click', function(e) {
    
    if(headerSearchFrameInput.value != '') {
        var innerHTML = headerSearchFrameInput.value;
        var href = `https://shopee.vn/search?keyword=` + `${innerHTML}`;

        // optional
        headerSearchFrameBtn.href = href;

        // BUGS...RUN OK BUT NEED JSON JS HANDLE
        /*
        updateHeaderSearchHistoryItemLinksInfo(innerHTML, href);
        removeHeaderSearchHistoryItemInDOM();
        updateHeaderSearchHistoryItemInDOM();
        console.log(headerSearchHistoryItemLinksInfo)
        */
    }   

    // setTimeout
});
//#endregion


//#region headerSearchFrameInput onkeydown()
headerSearchFrameInput.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        // 'Enter'
        case 13: {
            e.preventDefault();

            if (headerSearchFrameInput.value == '') {
                //open search page 'with default option' new tab
                window.open(
                    `${headerSearchFrameBtn.href}`,
                    '_blank'  
                );
            }
            else {
                //open search page 'with keyword' in new tab
                window.open(
                    `https://shopee.vn/search?keyword=` + `${headerSearchFrameInput.value}`,
                    '_blank'  
                );
            }
            break;
        }

        // 'page up'
        case 38: {
            // 1. set next index
            var headerSearchHistoryItemLength = 
                document.querySelectorAll(`.header__search-history-item`).length;

            // if initial position (in input) or when being active first element
            if (headerSearchHistoryItemIndex == 0 || headerSearchHistoryItemIndex == 1) {
                headerSearchHistoryItemIndex = headerSearchHistoryItemLength;
            } else {
                headerSearchHistoryItemIndex--;
            }

            // 2.add class .header__search-history-item__link--hover on next element
            removeHeaderSearchHistoryItemLinksHover();
            headerSearchHistoryItemLinks[headerSearchHistoryItemIndex-1].classList.add('header__search-history-item__link--hover');

            // 3. show current text in headerSearchFrameInput is innerText of headerSearchHistoryItemCurrent
            var headerSearchHistoryItemCurrent = document.querySelector(`
                .header__search-history-item:nth-child(${headerSearchHistoryItemIndex}) > .header__search-history-item__link`);
            headerSearchFrameInput.value = headerSearchHistoryItemCurrent.innerText.trim();

            break;
        }

        // 'page down'
        case 40: {
            // 1. set next index
            var headerSearchHistoryItemLength = 
                document.querySelectorAll(`.header__search-history-item`).length;

            // when being active last element
            if (headerSearchHistoryItemIndex == headerSearchHistoryItemLength) {
                headerSearchHistoryItemIndex = 1;
            } else {
                headerSearchHistoryItemIndex++;
            }

            // 2. add class .header__search-history-item__link--hover on next element
            removeHeaderSearchHistoryItemLinksHover();
            headerSearchHistoryItemLinks[headerSearchHistoryItemIndex-1].classList.add('header__search-history-item__link--hover');

            // 3. show current text in headerSearchFrameInput is innerText of headerSearchHistoryItemCurrent
            var headerSearchHistoryItemCurrent = document.querySelector(`
                .header__search-history-item:nth-child(${headerSearchHistoryItemIndex}) > .header__search-history-item__link`);
            headerSearchFrameInput.value = headerSearchHistoryItemCurrent.innerText.trim();

            break;
        }
    }
});
//#endregion


//#region headerSearchHistoryItemLink onmouseover(), onmouseout()
for(var i = 0; i < headerSearchHistoryItemLinks.length; i++) {
    headerSearchHistoryItemLinks[i].addEventListener('mouseover', function () {
        // off all
        removeHeaderSearchHistoryItemLinksHover();
        // on only it
        this.classList.add('header__search-history-item__link--hover');
    });

    headerSearchHistoryItemLinks[i].addEventListener('mouseleave', function () {
        // off only it
        this.classList.remove('header__search-history-item__link--hover');
    });
}
//#endregion

//#endregion headerSearchFrameInput, headerSearchHistory


//#region headerSearchHistoryKeywordsItems -> update data in DOM
var headerSearchHistoryKeywordsItems = document.querySelectorAll('.header__search-history-keywords-item');

var headerSearchHistoryKeywordsItems_innerHTMLs = [
    'Giày đá bóng nam',
    'Giá đỡ laptop',
    'Kệ để laptop',
    'Kê laptop',
    'Kệ tản nhiệt laptop',
    'Sạc laptop asus',
    'Giá đỡ laptop gỗ',
    'Kệ macbook'
];

for(var i = 0; i < headerSearchHistoryKeywordsItems.length; i++) {
    headerSearchHistoryKeywordsItems[i].href = `https://shopee.vn/search?keyword=${headerSearchHistoryKeywordsItems_innerHTMLs[i]}`;
    headerSearchHistoryKeywordsItems[i].innerHTML = headerSearchHistoryKeywordsItems_innerHTMLs[i];
}
//#endregion


//#region headerNotificationPopupWhenLoggedIn -> update data in DOM
var headerNotificationPopupWhenLoggedInLinks = document.querySelectorAll('.header__notification__popup--when-logged-in__link');
var headerNotificationPopupWhenLoggedInItemImgs = document.querySelectorAll('.header__notification__popup--when-logged-in__item__img > img');
var headerNotificationPopupWhenLoggedInItemTitles = document.querySelectorAll('.header__notification__popup--when-logged-in__item__title');
var headerNotificationPopupWhenLoggedInItemDescriptions = document.querySelectorAll('.header__notification__popup--when-logged-in__item__description');

var headerNotificationPopupWhenLoggedInLinks_href = [
    "https://shopee.vn/m/khung-gio-san-sale?&utm_source=crm&utm_medium=pn&utm_campaign=AP01_MIXPLAT_Normal_2045-Thematic-A7-FlatPice1kn9K-Mix_Promotion_None_Microsite_150821",
    "https://shopee.vn/user/voucher-wallet/?type=0",
    "https://shopee.vn/user/voucher-wallet/?type=0",
    "https://shopee.vn/m/khung-gio-san-sale?&utm_source=crm&utm_medium=pn&utm_campaign=AP01_MIXPLAT_Normal_1145-Thematic-A7-MiddayFlashSale-Mix_FlashSale_None__150821",
    "https://shopee.vn/m/hangquocte-1508"
];

var headerNotificationPopupWhenLoggedInItemImgs_src = [
    "https://cf.shopee.vn/file/86773ac686448ddcbb60e3b454d2e1f0_tn",
    "https://cf.shopee.vn/file/328935aafafe7586e3e6f163ba758e4b_tn",
    "https://cf.shopee.vn/file/7d0f0bfa69163ac64cd4125de27804e3_tn",
    "https://cf.shopee.vn/file/1567991b5d3f8c444c388d2ebd7f13ab_tn",
    "https://cf.shopee.vn/file/ea510c1c21affd0d1236e15fe410b6f7_tn"
];

var headerNotificationPopupWhenLoggedInItemTitles_innerHTML = [
    `Úm ba la mở ra deal 9K HOT`,
    `Voucher Hoàn Xu Xtra 10% tối đa 100K Xu cho đơn
    từ 150K.`,
    `Voucher Hoàn Xu Xtra 20% tối đa 40K Xu cho đơn
    từ 0Ð.`,
    `Sale giữa tháng! Freeship đơn 99K`,
    `Quốc Tế sale cực đã tới 50%`
];

var headerNotificationPopupWhenLoggedInItemDescriptions_innerHTML = [
    `Siêu hot! Đồng giá 1K, 9K. Deal tiết kiệm dưới 99K
    & Freeship toàn sàn từ 99K. Số lượng có hạn! Săn
    ngay!`,
    `Voucher Hoàn Xu Xtra hoàn 10% tối đa 100K Xu đã có sẵn
    trong ví voucher. Hiệu lực: 16/08/2021 00:00 - 21/08/2021
    23:59.`,
    `Voucher Hoàn Xu Xtra hoàn 20% tối đa 40K Xu đã có sấn
    trong ví voucher. Hiệu lực: 16/08/2021 00:00 - 21/08/2021
    23:59. Số lượng có hạn. Dùng ngay bạn nhé!`,
    `12H! Đồng loạt giảm sốc 50%: Điện tử, thời trang,
    tiêu dùng, đời sống. Siêu thị tại nhà cùng Shopee Mart`,
    `Vô vàn deal hot từ 29K, 59K Mặt hàng đa dạng cho
    bạn chọn lựa. Vào săn ngay!`
];


for(var i = 0; i < headerNotificationPopupWhenLoggedInItemTitles.length; i++) {
    headerNotificationPopupWhenLoggedInLinks[i].href = headerNotificationPopupWhenLoggedInLinks_href[i];
    headerNotificationPopupWhenLoggedInItemImgs[i].src = headerNotificationPopupWhenLoggedInItemImgs_src[i];
    headerNotificationPopupWhenLoggedInItemTitles[i].innerHTML = headerNotificationPopupWhenLoggedInItemTitles_innerHTML[i];
    headerNotificationPopupWhenLoggedInItemDescriptions[i].innerHTML = headerNotificationPopupWhenLoggedInItemDescriptions_innerHTML[i];
}
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


//#region slider__favourite-selections (append child: a > img, h4)
var sliderFavouriteSelections = document.querySelector('.slider__favourite-selections');

var sliderFavouriteSelectionsLink_hrefs = [
    'https://shopee.vn/m/shopeesogiday',
    'https://shopee.vn/m/o-nha-khong-kho-co-shopee-lo',
    'https://shopee.vn/m/shopee-tech-zone',
    'https://shopee.vn/m/deal-1k',
    'https://shopee.vn/m/shopee-cashback',
    'https://shopee.vn/digital-product/m/?dp_from_source=1',
    'https://shopee.vn/freeshipxtra',
    'https://shopee.vn/m/tram-ty-uu-dai',
    'https://shopee.vn/hangquocte',
    'https://shopee.vn/m/shopee-premium'
];

var sliderFavouriteSelectionsImg_srcs = [
    './assests/img/container/slider/slider__favourite-selections/selection_1.gif',
    './assests/img/container/slider/slider__favourite-selections/selection_2.png',
    './assests/img/container/slider/slider__favourite-selections/selection_3.png',
    './assests/img/container/slider/slider__favourite-selections/selection_4.png',
    './assests/img/container/slider/slider__favourite-selections/selection_5.png',
    './assests/img/container/slider/slider__favourite-selections/selection_6.png',
    './assests/img/container/slider/slider__favourite-selections/selection_7.png',
    './assests/img/container/slider/slider__favourite-selections/selection_8.png',
    './assests/img/container/slider/slider__favourite-selections/selection_9.gif',
    './assests/img/container/slider/slider__favourite-selections/selection_10.png'
];

var sliderFavouriteSelectionsH4_innerHTMLs = [
    'Shopee Số Gì Đây',
    'Ở Nhà Không Khó',
    'Tech Zone - Siêu Thị Điện Tử',
    'Gì Cũng Rẻ - Từ 1K',
    'Hoàn Xu 20% - Đơn Từ 0Đ',
    'Nạp Thẻ, Dịch Vụ & Phim',
    'Freeship Xtra - Deal giảm tới 50%',
    'Hàng Hiệu -50%',
    'Hàng Quốc Tế',
    'Shopee Premium'
];


for(var i = 0; i < sliderFavouriteSelectionsLink_hrefs.length; i++) {
    // create a tag
    var aTag = document.createElement('a');
    aTag.classList.add('slider__favourite-selections__link');
    aTag.href = sliderFavouriteSelectionsLink_hrefs[i];
    aTag.target = "_blank";
    aTag.rel = "noopener noreferrer";

    // create childs of a
    var imgTag = document.createElement('img');
    imgTag.src = sliderFavouriteSelectionsImg_srcs[i];
    var h4Tag = document.createElement('h4');
    h4Tag.innerHTML = sliderFavouriteSelectionsH4_innerHTMLs[i];

    // append above childs to a
    aTag.appendChild(imgTag);
    aTag.appendChild(h4Tag);

    // make above a tag become the child of sliderFavouriteSelections (div tag)
    sliderFavouriteSelections.appendChild(aTag);
}
//#endregion


//#region outstandingHotSellingProductsLinks, outstandingHotBrandsLinks -> update in DOM
var outstandingHotSellingProductsLinks = document.querySelectorAll('.outstanding__hot-selling-products__link');
var outstandingHotBrandsLinks = document.querySelectorAll('.outstanding__hot-brands__link');

var outstandingHotSellingProductsLinksInfo = [
    {
        href: 'https://shopee.vn/product/278100765/3552233781',
        imgSrc: "https://cf.shopee.vn/file/2474dcd7d8a770fbb862d9fac880e90b_tn", 
        price: '₫135.000',
        saleOffPercent: '27%'
    },
    {
        href: 'https://shopee.vn/product/89827191/9033562627',
        imgSrc: "https://cf.shopee.vn/file/25fecab4d0c9dbfc7dc590df1e732026_tn", 
        price: '₫1.000',
        saleOffPercent: '96%'
    },
    {
        href: 'https://shopee.vn/product/7669738/9351648769',
        imgSrc: "https://cf.shopee.vn/file/6c1cd11be5e5e11a5d6343b235dbe31f_tn", 
        price: '₫9.000',
        saleOffPercent: '84%'
    }
];
var outstandingHotBrandsLinksInfo = [
    {
        href: 'https://shopee.vn/shop/89960894',
        imgSrc: 'https://cf.shopee.vn/file/https%3A%2F%2Fcf.shopee.vn%2Ffile%2Fdf619bb0c4e690913f7d6348d183cd97',
        subImgSrc: "https://cf.shopee.vn/file/80cc0ea48958169be67d1ed574b52434_tn", 
        text: 'GIẢM 50%'
    },
    {
        href: 'https://shopee.vn/shop/55771655',
        imgSrc: 'https://cf.shopee.vn/file/https%3A%2F%2Fcf.shopee.vn%2Ffile%2Fe0f3412ebf428a2284359455bf2c1c77',
        subImgSrc: "https://cf.shopee.vn/file/b40723eb741c71bd1c82ec7eb98a2e0b_tn", 
        text: 'GIẢM 50%'
    },
    {
        href: 'https://shopee.vn/shop/37252407',
        imgSrc: 'https://cf.shopee.vn/file/http%3A%2F%2Ff.shopee.vn%2Ffile%2Fb450ccdedc4efe1f5251a77e556239e8',
        subImgSrc: "https://cf.shopee.vn/file/8e463cf906402ac67ffc45daf452e0ec_tn", 
        text: 'GIẢM 50%'
    }
];


for(var i = 0; i < outstandingHotSellingProductsLinks.length; i++) {

    var img = document.querySelector(`.outstanding__hot-selling-products__link:nth-child(${i+1})
        > .outstanding__hot-selling-products__img`);
    var price = document.querySelector(`.outstanding__hot-selling-products__link:nth-child(${i+1})
        > .outstanding__hot-selling-products__price`);
    var saleOffPercent = document.querySelector(`.outstanding__hot-selling-products__link:nth-child(${i+1})
        .outstanding__hot-selling-products__sale-off-label__percent`);

    outstandingHotSellingProductsLinks[i].href = outstandingHotSellingProductsLinksInfo[i].href;
    img.src = outstandingHotSellingProductsLinksInfo[i].imgSrc;
    price.innerHTML = outstandingHotSellingProductsLinksInfo[i].price;
    saleOffPercent.innerHTML = outstandingHotSellingProductsLinksInfo[i].saleOffPercent;
}

for(var j = 0; j < outstandingHotBrandsLinks.length; j++) {

    var img = document.querySelector(`.outstanding__hot-brands__link:nth-child(${j+1})
        > .outstanding__hot-brands__img`);
    var subImg = document.querySelector(`.outstanding__hot-brands__link:nth-child(${j+1})
        .outstanding__hot-brands__sub-img`);
    var text = document.querySelector(`.outstanding__hot-brands__link:nth-child(${j+1})
        > .outstanding__hot-brands__text`);

    outstandingHotBrandsLinks[j].href = outstandingHotBrandsLinksInfo[j].href;
    img.src = outstandingHotBrandsLinksInfo[j].imgSrc;
    subImg.src = outstandingHotBrandsLinksInfo[j].subImgSrc;
    text.innerHTML = outstandingHotBrandsLinksInfo[j].text;
}
//#endregion


//#region directoryMainItemLinks info
var directoryMainItemLinksInfo = [
    {
        "href": "https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567",
        "imgSrc": "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
        "spanInnerHTML": "Thời Trang Nam"
    },
    {
        "href": "https://shopee.vn/Th%E1%BB%9Di-Trang-N%E1%BB%AF-cat.11035639",
        "imgSrc": "https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
        "spanInnerHTML": "Thời Trang Nữ"
    },
    {
        "href": "https://shopee.vn/%C4%90i%E1%BB%87n-Tho%E1%BA%A1i-Ph%E1%BB%A5-Ki%E1%BB%87n-cat.11036030",
        "imgSrc": "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
        "spanInnerHTML": "Điện Thoại & Phụ Kiện"
    },
    {
        "href": "https://shopee.vn/M%E1%BA%B9-B%C3%A9-cat.11036194",
        "imgSrc": "https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn",
        "spanInnerHTML": "Mẹ & Bé"
    },
    {
        "href": "https://shopee.vn/Thi%E1%BA%BFt-B%E1%BB%8B-%C4%90i%E1%BB%87n-T%E1%BB%AD-cat.11036132",
        "imgSrc": "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
        "spanInnerHTML": "Thiết Bị Điện Tử"
    },
    {
        "href": "https://shopee.vn/Nh%C3%A0-C%E1%BB%ADa-%C4%90%E1%BB%9Di-S%E1%BB%91ng-cat.11036670",
        "imgSrc": "https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn",
        "spanInnerHTML": "Nhà Cửa & Đời Sống"
    },
    {
        "href": "https://shopee.vn/M%C3%A1y-T%C3%ADnh-Laptop-cat.11035954",
        "imgSrc": "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
        "spanInnerHTML": "Máy Tính & Laptop"
    },
    {
        "href": "https://shopee.vn/S%E1%BA%AFc-%C4%90%E1%BA%B9p-cat.11036279",
        "imgSrc": "https://cf.shopee.vn/file/c765998fda99b2be9eb6e348df29af28_tn",
        "spanInnerHTML": "Sắc Đẹp"
    },
    {
        "href": "https://shopee.vn/M%C3%A1y-%E1%BA%A2nh-M%C3%A1y-Quay-Phim-cat.11036101",
        "imgSrc": "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
        "spanInnerHTML": "Máy Ảnh & Máy Quay Phim"
    },
    {
        "href": "https://shopee.vn/S%E1%BB%A9c-Kh%E1%BB%8Fe-cat.11036345",
        "imgSrc": "https://cf.shopee.vn/file/bf87b50b463f646bb7fb8a1a606d9ed2_tn",
        "spanInnerHTML": "Sức Khỏe"
    },
    {
        "href": "https://shopee.vn/%C4%90%E1%BB%93ng-H%E1%BB%93-cat.11035788",
        "imgSrc": "https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn",
        "spanInnerHTML": "Đồng Hồ"
    },
    {
        "href": "https://shopee.vn/Gi%C3%A0y-D%C3%A9p-N%E1%BB%AF-cat.11035825",
        "imgSrc": "https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn",
        "spanInnerHTML": "Giày Dép Nữ"
    },
    {
        "href": "https://shopee.vn/Gi%C3%A0y-D%C3%A9p-Nam-cat.11035801",
        "imgSrc": "https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn",
        "spanInnerHTML": "Giày Dép Nam"
    },
    {
        "href": "https://shopee.vn/T%C3%BAi-V%C3%AD-N%E1%BB%AF-cat.11035761",
        "imgSrc": "https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn",
        "spanInnerHTML": "Túi Ví Nữ"
    },
    {
        "href": "https://shopee.vn/Thi%E1%BA%BFt-B%E1%BB%8B-%C4%90i%E1%BB%87n-Gia-D%E1%BB%A5ng-cat.11036971",
        "imgSrc": "https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn",
        "spanInnerHTML": "Thiết Bị Điện Gia Dụng"
    },
    {
        "href": "https://shopee.vn/Ph%E1%BB%A5-Ki%E1%BB%87n-Trang-S%E1%BB%A9c-N%E1%BB%AF-cat.11035853",
        "imgSrc": "https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn",
        "spanInnerHTML": "Phụ Kiện & Trang Sức Nữ"
    },
    {
        "href": "https://shopee.vn/Th%E1%BB%83-Thao-Du-L%E1%BB%8Bch-cat.11035478",
        "imgSrc": "https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn",
        "spanInnerHTML": "Thể Thao & Du Lịch"
    },
    {
        "href": "https://shopee.vn/B%C3%A1ch-H%C3%B3a-Online-cat.11036525",
        "imgSrc": "https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn",
        "spanInnerHTML": "Bách Hóa Online"
    },
    {
        "href": "https://shopee.vn/%C3%94-T%C3%B4-Xe-M%C3%A1y-Xe-%C4%90%E1%BA%A1p-cat.11036793",
        "imgSrc": "https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn",
        "spanInnerHTML": "Ô Tô & Xe Máy & Xe Đạp"
    },
    {
        "href": "https://shopee.vn/Nh%C3%A0-S%C3%A1ch-Online-cat.11036863",
        "imgSrc": "https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn",
        "spanInnerHTML": "Nhà Sách Online"
    },
    {
        "href": "https://shopee.vn/Balo-T%C3%BAi-V%C3%AD-Nam-cat.11035741",
        "imgSrc": "https://cf.shopee.vn/file/18fd9d878ad946db2f1bf4e33760c86f_tn",
        "spanInnerHTML": "Balo & Túi Ví Nam"
    },
    {
        "href": "https://shopee.vn/Th%E1%BB%9Di-Trang-Tr%E1%BA%BB-Em-cat.11036382",
        "imgSrc": "https://cf.shopee.vn/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn",
        "spanInnerHTML": "Thời Trang Trẻ Em"
    },
    {
        "href": "https://shopee.vn/%C4%90%E1%BB%93-Ch%C6%A1i-cat.11036932",
        "imgSrc": "https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn",
        "spanInnerHTML": "Đồ Chơi"
    },
    {
        "href": "https://shopee.vn/Gi%E1%BA%B7t-Gi%C5%A9-Ch%C4%83m-S%C3%B3c-Nh%C3%A0-C%E1%BB%ADa-cat.11036624",
        "imgSrc": "https://cf.shopee.vn/file/cd8e0d2e6c14c4904058ae20821d0763_tn",
        "spanInnerHTML": "Giặt Giũ & Chăm Sóc Nhà Cửa"
    },
    {
        "href": "https://shopee.vn/Ch%C4%83m-S%C3%B3c-Th%C3%BA-C%C6%B0ng-cat.11036478",
        "imgSrc": "https://cf.shopee.vn/file/cdf21b1bf4bfff257efe29054ecea1ec_tn",
        "spanInnerHTML": "Chăm Sóc Thú Cưng"
    },
    {
        "href": "https://shopee.vn/Voucher-D%E1%BB%8Bch-V%E1%BB%A5-cat.11035898",
        "imgSrc": "https://cf.shopee.vn/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn",
        "spanInnerHTML": "Voucher & Dịch Vụ"
    }
];

var directoryMainItemLinksInfo_index = 0;
var directoryMainItems_length = document.querySelectorAll('.directory__main__item').length;
for(var i = 0; i < directoryMainItems_length; i++) {
    for(var j = 0; j < 2; j++) {
        var directoryMainItemLink = document.querySelector(`.directory__main__item:nth-child(${i+1}) 
            > .directory__main__item__link:nth-child(${j+1})`);
        var directoryMainItemImg = document.querySelector(`.directory__main__item:nth-child(${i+1}) 
            > .directory__main__item__link:nth-child(${j+1}) > .directory__main__item__img`);
        var directoryMainItemTitle = document.querySelector(`.directory__main__item:nth-child(${i+1}) 
            > .directory__main__item__link:nth-child(${j+1}) > .directory__main__item__title`);

        directoryMainItemLink.href = directoryMainItemLinksInfo[directoryMainItemLinksInfo_index].href;
        directoryMainItemImg.src = directoryMainItemLinksInfo[directoryMainItemLinksInfo_index].imgSrc;
        directoryMainItemTitle.innerHTML = directoryMainItemLinksInfo[directoryMainItemLinksInfo_index].spanInnerHTML;

        directoryMainItemLinksInfo_index ++;
    }
}
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


//#region flashSale -> update data in DOM
var flashSaleMainLinksInfo = [
    {
        "href": "https://shopee.vn/flash_sale?fromItem=6805421995&promotionId=2020998880",
        "bubbleImgSrc": "https://cf.shopee.vn/file/4ec1a78ec68941b9e1c6f0de593ecf4b_tn",
        "frameImgSrc": "https://cf.shopee.vn/file/f286373806fcb09f3f96fd52f820c60d_tn",
        "price": "₫8.000",
        "selledStatus": "Đã bán 148",
        "saleOffPercent": "80%",
        "selledPartWidthPercent": 72
    },
    {
        "href": "https://shopee.vn/flash_sale?fromItem=5632738828&promotionId=2020998880",
        "bubbleImgSrc": "https://cf.shopee.vn/file/305a2d4ba7348f6085c2342be98f127c_tn",
        "frameImgSrc": "https://cf.shopee.vn/file/24533c61f5d7333c5dee7e5b3408b016_tn",
        "price": "₫364.000",
        "selledStatus": "Đã bán 62",
        "saleOffPercent": "26%",
        "selledPartWidthPercent": 71
    },
    {
        "href": "https://shopee.vn/flash_sale?fromItem=6895421166&promotionId=2020998880",
        "bubbleImgSrc": "https://cf.shopee.vn/file/cc7a349da101ad55a0f991ac0ea02078_tn",
        "frameImgSrc": "https://cf.shopee.vn/file/f286373806fcb09f3f96fd52f820c60d_tn",
        "price": "₫1.425.000",
        "selledStatus": "Đã bán 96",
        "saleOffPercent": "5%",
        "selledPartWidthPercent": 75
    },
    {
        "href": "https://shopee.vn/flash_sale?fromItem=3330959266&promotionId=2020998880",
        "bubbleImgSrc": "https://cf.shopee.vn/file/9baf600fe33586d8a0240343c674056e_tn",
        "frameImgSrc": "https://cf.shopee.vn/file/cbee7ffbe0732229dd75b9e8815b6379_tn",
        "price": "₫275.000",
        "selledStatus": "Đã bán 27",
        "saleOffPercent": "24%",
        "selledPartWidthPercent": 16
    },
    {
        "href": "https://shopee.vn/flash_sale?fromItem=3508817294&promotionId=2020998880",
        "bubbleImgSrc": "https://cf.shopee.vn/file/f5134db596490f5543691f700cd6a2a8_tn",
        "frameImgSrc": "https://cf.shopee.vn/file/cbee7ffbe0732229dd75b9e8815b6379_tn",
        "price": "₫343.000",
        "selledStatus": "Đã bán 137",
        "saleOffPercent": "50%",
        "selledPartWidthPercent": 45
    },
    {
        "href": "https://shopee.vn/flash_sale?fromItem=5120130578&promotionId=2020998880",
        "bubbleImgSrc": "https://cf.shopee.vn/file/2d59ced8b26f7747c3bd75fa3b4c3aba_tn",
        "frameImgSrc": "https://cf.shopee.vn/file/cbee7ffbe0732229dd75b9e8815b6379_tn",
        "price": "₫299.000",
        "selledStatus": "Đã bán 34",
        "saleOffPercent": "10%",
        "selledPartWidthPercent": 27
    },
    {
        "href": "https://shopee.vn/flash_sale?fromItem=9033562627&promotionId=2020998880",
        "bubbleImgSrc": "https://cf.shopee.vn/file/25fecab4d0c9dbfc7dc590df1e732026_tn",
        "frameImgSrc": "https://cf.shopee.vn/file/f286373806fcb09f3f96fd52f820c60d_tn",
        "price": "₫1.000",
        "selledStatus": "Đã bán 427",
        "saleOffPercent": "96%",
        "selledPartWidthPercent": 4
    },
    {
        "href": "https://shopee.vn/flash_sale?fromItem=9232133964&promotionId=2020998880",
        "bubbleImgSrc": "https://cf.shopee.vn/file/b61c8aecd845cf4491fe1861cd6cd209_tn",
        "frameImgSrc": "https://cf.shopee.vn/file/cbee7ffbe0732229dd75b9e8815b6379_tn",
        "price": "₫975.000",
        "selledStatus": "Đã bán 16",
        "saleOffPercent": "13%",
        "selledPartWidthPercent": 22
    },
    {
        "href": "https://shopee.vn/flash_sale?fromItem=7117497781&promotionId=2020998880",
        "bubbleImgSrc": "https://cf.shopee.vn/file/26691b698fc74d150f1356309d11c654_tn",
        "frameImgSrc": "https://cf.shopee.vn/file/cbee7ffbe0732229dd75b9e8815b6379_tn",
        "price": "₫709.000",
        "selledStatus": "Đã bán 1",
        "saleOffPercent": "20%",
        "selledPartWidthPercent": 3
    },
    {
        "href": "https://shopee.vn/flash_sale?fromItem=10111329183&promotionId=2020998880",
        "bubbleImgSrc": "https://cf.shopee.vn/file/618dd826bb0fa2a522ccf3908d18e237_tn",
        "frameImgSrc": "https://cf.shopee.vn/file/cbee7ffbe0732229dd75b9e8815b6379_tn",
        "price": "₫219.000",
        "selledStatus": "Đã bán 16",
        "saleOffPercent": "62%",
        "selledPartWidthPercent": 30
    },
    {
        "href": "https://shopee.vn/flash_sale?fromItem=3843067226&promotionId=2020998880",
        "bubbleImgSrc": "https://cf.shopee.vn/file/9885f11a08bb72471b3c2b2f925a91d1_tn",
        "frameImgSrc": "https://cf.shopee.vn/file/24533c61f5d7333c5dee7e5b3408b016_tn",
        "price": "₫479.000",
        "selledStatus": "Đã bán 2",
        "saleOffPercent": "44%",
        "selledPartWidthPercent": 10
    },
    {
        "href": "https://shopee.vn/flash_sale?fromItem=2374546040&promotionId=2020998880",
        "bubbleImgSrc": "https://cf.shopee.vn/file/c96c911936b349191f9c194a5ff8f144_tn",
        "frameImgSrc": "https://cf.shopee.vn/file/24533c61f5d7333c5dee7e5b3408b016_tn",
        "price": "₫325.000",
        "selledStatus": "Đã bán 16",
        "saleOffPercent": "35%",
        "selledPartWidthPercent": 7
    },
    {
        "href": "https://shopee.vn/flash_sale?fromItem=5027646135&promotionId=2020998880",
        "bubbleImgSrc": "https://cf.shopee.vn/file/1cf8933eeb47cb0bfef2827625d96b95_tn",
        "frameImgSrc": "https://cf.shopee.vn/file/cbee7ffbe0732229dd75b9e8815b6379_tn",
        "price": "₫282.000",
        "selledStatus": "Đã bán 74",
        "saleOffPercent": "29%",
        "selledPartWidthPercent": 12
    },
    {
        "href": "https://shopee.vn/flash_sale?fromItem=3227807434&promotionId=2020998880",
        "bubbleImgSrc": "https://cf.shopee.vn/file/efdd9f2b67f8642d7a78a5d023648b07_tn",
        "frameImgSrc": "https://cf.shopee.vn/file/cbee7ffbe0732229dd75b9e8815b6379_tn",
        "price": "₫282.000",
        "selledStatus": "Đã bán 17",
        "saleOffPercent": "29%",
        "selledPartWidthPercent": 4
    },
    {
        "href": "https://shopee.vn/flash_sale?fromItem=9817261646&promotionId=2020998880",
        "bubbleImgSrc": "https://cf.shopee.vn/file/971971bedcc56649f37c58664c544a6f_tn",
        "frameImgSrc": "https://cf.shopee.vn/file/f286373806fcb09f3f96fd52f820c60d_tn",
        "price": "₫199.000",
        "selledStatus": "Đã bán 5",
        "saleOffPercent": "50%",
        "selledPartWidthPercent": 0
    },
    {
        "href": "https://shopee.vn/flash_sale?fromItem=3320220757&promotionId=2020998880",
        "bubbleImgSrc": "https://cf.shopee.vn/file/82599724d05dc2805a3af7df50f70788_tn",
        "frameImgSrc": "https://cf.shopee.vn/file/24533c61f5d7333c5dee7e5b3408b016_tn",
        "price": "₫182.000",
        "selledStatus": "Đã bán 16",
        "saleOffPercent": "26%",
        "selledPartWidthPercent": 0
    }
];

var flashSaleMainLinks = document.querySelectorAll('.flash-sale__main__link');

for(var i = 0; i < flashSaleMainLinks.length; i++) {
    var bubbleImg = document.querySelector(`.flash-sale__main__link:nth-child(${i+1})
        > .flash-sale__main__bubble-img`);
    var frameImg = document.querySelector(`.flash-sale__main__link:nth-child(${i+1})
        > .flash-sale__main__frame-img`);
    var price = document.querySelector(`.flash-sale__main__link:nth-child(${i+1})
        > .flash-sale__main__price`);
    var selledStatus = document.querySelector(`.flash-sale__main__link:nth-child(${i+1})
        .flash-sale__main__percent-bar__selled-status`);
    var saleOffPercent = document.querySelector(`.flash-sale__main__link:nth-child(${i+1})
        .flash-sale__main__sale-off-label__percent`);
    var selledPart = document.querySelector(`.flash-sale__main__link:nth-child(${i+1})
        .flash-sale__main__percent-bar__selled-part`);
    

    flashSaleMainLinks[i].href = flashSaleMainLinksInfo[i].href;
    bubbleImg.src = flashSaleMainLinksInfo[i].bubbleImgSrc;
    frameImg.src = flashSaleMainLinksInfo[i].frameImgSrc;
    price.innerHTML = flashSaleMainLinksInfo[i].price;
    selledStatus.innerHTML = flashSaleMainLinksInfo[i].selledStatus;
    saleOffPercent.innerHTML = flashSaleMainLinksInfo[i].saleOffPercent;

    // add div tag (.flash-sale__main__percent-bar--hot) if conditions match
    selledPart.style.width = `${flashSaleMainLinksInfo[i].selledPartWidthPercent}%`;
    if (flashSaleMainLinksInfo[i].selledPartWidthPercent >= 70) {
        var flashSaleMainPercentBarHot = document.createElement('div');
        flashSaleMainPercentBarHot.classList.add('flash-sale__main__percent-bar--hot');
        selledPart.parentElement.appendChild(flashSaleMainPercentBarHot);
    }
}
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


//#region underFlashSaleLinks -> update data in DOM
var underFlashSaleLinksInfo = [
    {
        href: "https://shopee.vn/m/o-nha-khong-kho-co-shopee-lo",
        imgSrc: "https://cf.shopee.vn/file/de62993c259c6a7f5117008243550e6a"
    },
    {
        href: "https://shopee.vn/m/khung-gio-san-sale",
        imgSrc: "https://cf.shopee.vn/file/707c41a6c0202dfaf68ced7b8518137f"
    },
    {
        href: "https://shopee.vn/m/8-8#phong-cach-song-68",
        imgSrc: "https://cf.shopee.vn/file/96b9c9c82c06b407fa0e7f9e2a9f8855"
    }
];

var underFlashSaleLinks = document.querySelectorAll('.under-flash-sale__link');

for (var i = 0; i < underFlashSaleLinks.length; i++) {
    var underFlashSaleImg = 
        document.querySelector(`.under-flash-sale__link:nth-child(${i+1}) > .under-flash-sale__img`);

    underFlashSaleLinks[i].href = underFlashSaleLinksInfo[i].href;
    underFlashSaleImg.src = underFlashSaleLinksInfo[i].imgSrc;
}
//#endregion


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


//#region shopeeMallMainProductItemLinks -> update data in DOM
var shopeeMallMainProductItemLinksInfo =  {
    href: [
        "https://shopee.vn/uu-dai-vando",
        "https://shopee.vn/dettol-fmcg",
        "https://shopee.vn/rohto",
        "https://shopee.vn/gumac_sieu_sale",
        "https://shopee.vn/tefal-vn",
        "https://shopee.vn/focallure.vn",
        "https://shopee.vn/unilever-hb",
        "https://shopee.vn/perfectdiaryday",
        "https://shopee.vn/larocheposay",
        "https://shopee.vn/loreal",
        "https://shopee.vn/cpc",
        "https://shopee.vn/delivietnam",
        "https://shopee.vn/unilever-hc",
        "https://shopee.vn/cocoon",
        "https://shopee.vn/unicharm-hb",
        "https://shopee.vn/innisfreeday",
        "https://shopee.vn/m/lily-sale-don-he-0704",
        "https://shopee.vn/POLOMAN-uu-dai-Mall-Fes",
        "https://shopee.vn/yody-sieu-sale",
        "https://shopee.vn/nestle",
        "https://shopee.vn/nhasachazvietnam",
        "https://shopee.vn/uudaidentuvicero",
        "https://shopee.vn/nivea-fmcg"
    ],
    imgSrc: [
        "https://cf.shopee.vn/file/a4d85b2c4bba4049289b7cb3e2db849c_xhdpi",
        "https://cf.shopee.vn/file/35404bb6cb6428380de312a23aba6a79_xhdpi",
        "https://cf.shopee.vn/file/4bed0d26c1276288c8776d42517cb6d3_xhdpi",
        "https://cf.shopee.vn/file/27aca02931d04b5f0317260d76c27584_xhdpi",
        "https://cf.shopee.vn/file/52a031d82f78f3b515a0eb1f2f9096fb_xhdpi",
        "https://cf.shopee.vn/file/7d5ddd21cc10e484de60e12d6c58734e_xhdpi",
        "https://cf.shopee.vn/file/30296a7572b4fb5d45802862fe8dd2a3_xhdpi",
        "https://cf.shopee.vn/file/945318089c84f313da7b04082b65f031_xhdpi",
        "https://cf.shopee.vn/file/c5355c3595e546617d2bebe305893b5f_xhdpi",
        "https://cf.shopee.vn/file/8091d0934014d2b1bdf97874ca2c2a52_xhdpi",
        "https://cf.shopee.vn/file/740ae8e67514258739260217675fb3fc_xhdpi",
        "https://cf.shopee.vn/file/ea507ee06252bb4c0d90eed99c1db288_xhdpi",
        "https://cf.shopee.vn/file/7d977851c3587255800db8f1dd8027da_xhdpi",
        "https://cf.shopee.vn/file/a04fa1753f820475db4f018659d4bab4_xhdpi",
        "https://cf.shopee.vn/file/915cd0feb271e1d9bb93eec823ac5ff0_xhdpi",
        "https://cf.shopee.vn/file/5b256291ff44873719ab9a5d72845fbe_xhdpi",
        "https://cf.shopee.vn/file/ffd36a03ea7980d2f7df67ac0c716092_xhdpi",
        "https://cf.shopee.vn/file/00519cb5c56e4ef5845e71d7efdb84be_xhdpi",
        "https://cf.shopee.vn/file/1c0a570cb1c5309a1b7b7ad6b5d023b4_xhdpi",
        "https://cf.shopee.vn/file/acf189bab99ffc428d7219ff434e05b3_xhdpi",
        "https://cf.shopee.vn/file/93255b05c68d1024a8e4dab100efdcbd_xhdpi",
        "https://cf.shopee.vn/file/646a55e27b673e220daadd426eccd8fd_xhdpi",
        "https://cf.shopee.vn/file/7179f99e858435af171aa616d8063626_xhdpi"
    ],
    text: [
        "Mua là có quà",
        "Ưu đãi 30%",
        "Mua là có quà",
        "Siêu sale nhất năm",
        "Siêu sale lớn của năm",
        "Giảm đến 50%",
        "Mua 1 được 2",
        "Siêu ưu đãi đến 50%",
        "Da khỏe sạch mụn",
        "Giảm đến 50%",
        "Quà tặng đến 2 tỷ",
        "Deli giảm tới 50%",
        "Mua là có quà",
        "Mua 1 tặng 1",
        "Mát lạnh dài lâu",
        "Ưu đãi đến 40%",
        "Ưu đãi từ 1k",
        "Ưu đãi đến 45%",
        "Deal sốc 9k",
        "5000 deal 0đ",
        "Siêu deal giảm cực đỉnh",
        "Đồng giá 9k",
        "Quà đến 300K"
    ]
}

var shopeeMallMainProductItemLinks =
    document.querySelectorAll('.shopee-mall__main__product .shopee-mall__main__product-item__link');

for (var i = 0; i < shopeeMallMainProductItemLinks.length; i++) {
    shopeeMallMainProductItemLinks[i].href = shopeeMallMainProductItemLinksInfo.href[i];

    // .shopee-mall__main__product-item__link__img
    shopeeMallMainProductItemLinks[i].children[0].src = shopeeMallMainProductItemLinksInfo.imgSrc[i];

    // .shopee-mall__main__product-item__link__text
    shopeeMallMainProductItemLinks[i].children[1].innerHTML = shopeeMallMainProductItemLinksInfo.text[i];
}    
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


//#region updateSearchTrendingLinksInDOM
var searchTrendingLinksObjectInfo = {
    "href": [
        [
            "https://shopee.vn/search?keyword=k%E1%BB%87%20%C4%91%E1%BB%83%20laptop",
            "https://shopee.vn/search?keyword=gi%C3%A1%20%C4%91%E1%BB%A1%20laptop%2015%206%20inch",
            "https://shopee.vn/search?keyword=gi%C3%A1%20%C4%91%E1%BB%A1%20laptop%20g%E1%BB%97",
            "https://shopee.vn/search?keyword=gi%C3%A1%20%C4%91%E1%BB%A1%20macbook%20g%E1%BB%97",
            "https://shopee.vn/search?keyword=gi%C3%A1%20k%C3%AA%20laptop"
        ],
        [
            "https://shopee.vn/search?keyword=gi%C3%A1%20k%C3%AA%20laptop",
            "https://shopee.vn/search?keyword=tai-nghe%20bluetooth",
            "https://shopee.vn/search?keyword=sandal%20n%E1%BB%AF",
            "https://shopee.vn/search?keyword=gi%C3%A0y-th%E1%BB%83-thao%20n%E1%BB%AF",
            "https://shopee.vn/search?keyword=balo%20n%E1%BB%AF"
        ],
        [
            "https://shopee.vn/search?keyword=gi%C3%A1%20%C4%91%E1%BB%A1%20laptop%20g%E1%BB%97",
            "https://shopee.vn/search?keyword=k%C3%AA%20laptop",
            "https://shopee.vn/search?keyword=gi%C3%A0y%20%C4%91%C3%A1%20b%C3%B3ng%20%C4%91%C3%A1%20banh",
            "https://shopee.vn/search?keyword=qu%E1%BA%A7n-%C4%91%C3%B9i%20n%E1%BB%AF",
            "https://shopee.vn/search?keyword=s%C6%A1mi%20n%E1%BB%AF"
        ]
    ],
    "productName": [
        [
            "Kệ Để Laptop",
            "Giá Đỡ Laptop 15 6 Inch",
            "Giá Đỡ Laptop Gỗ",
            "Giá Đỡ Macbook Gỗ",
            "Giá Kê Laptop"
        ],
        [
            "Giá Kê Laptop",
            "Tai-Nghe Bluetooth",
            "Sandal Nữ",
            "Giày-Thể-Thao Nữ",
            "Balo Nữ"
        ],
        [
            "Giá Đỡ Laptop Gỗ",
            "Kê Laptop",
            "giày đá bóng đá banh",
            "Quần-Đùi Nữ",
            "SƠMI Nữ"
        ]
    ],
    "productDescription": [
        [
            "172k+ sản phẩm",
            "336k+ sản phẩm",
            "482k+ sản phẩm",
            "445k+ sản phẩm",
            "121k+ sản phẩm"
        ],
        [
            "121k+ sản phẩm",
            "6k+ sản phẩm",
            "263k+ sản phẩm",
            "654k+ sản phẩm",
            "172k+ sản phẩm"
        ],
        [
            "482k+ sản phẩm",
            "65k+ sản phẩm",
            "6k+ sản phẩm",
            "332k+ sản phẩm",
            "568k+ sản phẩm"
        ]
    ],
    "imgSrc": [
        [
            "https://cf.shopee.vn/file/f82404aaa85578c659628a1c9aa24f5f",
            "https://cf.shopee.vn/file/b9207e79313ee0be022a2bd5ad43d01a",
            "https://cf.shopee.vn/file/b6675c985ae196bda8ebbd640ed9c60e",
            "https://cf.shopee.vn/file/1524bf0beaa7c1d1f65b30b48694fd78",
            "https://cf.shopee.vn/file/c1572057c97ce6ae4ada300296d45f13"
        ],
        [
            "https://cf.shopee.vn/file/89a11102e53dfe6cf03d7d36ea69ddd7",
            "https://cf.shopee.vn/file/ffe25b50c0edef17c49bfdf868b4facc",
            "https://cf.shopee.vn/file/93073101321f322c66260c81cb5b50c7",
            "https://cf.shopee.vn/file/d83387eea7d3d76bfd3fa638437f8d01",
            "https://cf.shopee.vn/file/f461a6b775b66c3d1264839ed5a356e5"
        ],
        [
            "https://cf.shopee.vn/file/4adbb5bb3ab835ba2fd95bd501acc18d",
            "https://cf.shopee.vn/file/89a11102e53dfe6cf03d7d36ea69ddd7",
            "https://cf.shopee.vn/file/cb7022fca26a920200deee05ca7c7bcd",
            "https://cf.shopee.vn/file/73970c20f4ce403b5ae1417ff08b5b3e",
            "https://cf.shopee.vn/file/4122b4ed9be44c32ab8b01bc5df0e20c"
        ]
    ]
}

function updateSearchTrendingLinksInDOM (listIndex) {
    var searchTrendingLinks = document.querySelectorAll('.search-trending__link');

    for (var i = 0; i < searchTrendingLinks.length; i++) {
        // 1. get current specific elements
        var productName = document.querySelector(`.search-trending__link:nth-child(${i+1}) .search-trending__text__name`);
        var productDescription = document.querySelector(`.search-trending__link:nth-child(${i+1}) .search-trending__text__description`);
        var productImg = document.querySelector(`.search-trending__link:nth-child(${i+1}) .search-trending__img`);

        // 2. update attributes, innerHTML for them
        searchTrendingLinks[i].href = searchTrendingLinksObjectInfo.href[listIndex][i];
        productName.innerHTML = searchTrendingLinksObjectInfo.productName[listIndex][i];
        productDescription.innerHTML = searchTrendingLinksObjectInfo.productDescription[listIndex][i];
        productImg.src = searchTrendingLinksObjectInfo.imgSrc[listIndex][i];
    }
}

updateSearchTrendingLinksInDOM(0);
//#endregion


//#region searchTrendingHeadingViewMoreBtn onclick() 
var searchTrendingHeadingViewMoreBtn = document.querySelector('.search-trending__heading__view-more-btn');
var searchTrendingListCurrentIndex = 0;

searchTrendingHeadingViewMoreBtn.onclick = function () {
    var searchTrendingNumberList = searchTrendingLinksObjectInfo.href.length;

    if(searchTrendingListCurrentIndex == searchTrendingNumberList-1) {
        searchTrendingListCurrentIndex = 0;
        updateSearchTrendingLinksInDOM(0);
    }
    else {
        searchTrendingListCurrentIndex++;
        updateSearchTrendingLinksInDOM(searchTrendingListCurrentIndex);
    }
}
//#endregion


//#region topSearchMainLinks -> update data in DOM
var topSearchMainLinksInfo = [
    {
        "href": "https://shopee.vn/top_products?catId=834",
        "productImgSrc": "https://cf.shopee.vn/file/22e96943aa497b88da5c27954ffb5060_tn",
        "text": "GUMAC - Top bán chạy"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_58",
        "productImgSrc": "https://cf.shopee.vn/file/300fe9faaec0ed3fa2888e96e788b2a0_tn",
        "price": 3,
        "text": "Giày Đá Bóng"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_157",
        "productImgSrc": "https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a_tn",
        "price": 126,
        "text": "Ốp Lưng Iphone"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_169",
        "productImgSrc": "https://cf.shopee.vn/file/362669996dc2f2f98c47cdc37f6da6d3_tn",
        "price": 114,
        "text": "Bông Tẩy Trang 3 Lớp Cotton Pads"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_173",
        "productImgSrc": "https://cf.shopee.vn/file/f3e77445b1e7f5f72bb5dbbfba98cc34_tn",
        "price": 38,
        "text": "Dây Buộc Tóc Dễ Thương"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_155",
        "productImgSrc": "https://cf.shopee.vn/file/88caf78233a0b901155210a61cf19751_tn",
        "price": 75,
        "text": "Dây Sạc Iphone"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_2230",
        "productImgSrc": "https://cf.shopee.vn/file/85a0a69a1ccdd7e2461acac9977018f1_tn",
        "price": 32,
        "text": "Hạt Giống"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_733",
        "productImgSrc": "https://cf.shopee.vn/file/7ccebb7910c00edd0b767d1f75c03fd2_tn",
        "price": 77,
        "text": "Dây Nhảy Tập Thể Dục"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_3091",
        "productImgSrc": "https://cf.shopee.vn/file/bc24d8e6913f0c917cfca3e9a8db0fd2_tn",
        "price": 75,
        "text": "Bút Kẻ Mắt Chống Nước"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_99",
        "productImgSrc": "https://cf.shopee.vn/file/569f5566d9c55f4b3fa34d70e0d5acc3_tn",
        "price": 67,
        "text": "Nước Tẩy Trang L'Oreal Paris 3-In-1"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_131",
        "productImgSrc": "https://cf.shopee.vn/file/32cc566d008cac4b53f3b7ce245fc9a4_tn",
        "price": 40,
        "text": "Sticker Dán Trang Trí Sổ Dễ Thương"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_2063",
        "productImgSrc": "https://cf.shopee.vn/file/9a67b555ee38eeacc8f483cad33d535c_tn",
        "price": 44,
        "text": "Kẹp Tóc Càng Cua Đơn Giản Cho Nữ"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_41",
        "productImgSrc": "https://cf.shopee.vn/file/99348069fb99f1dccbfe596a8050f4c4_tn",
        "price": 58,
        "text": "Khẩu Trang Kháng Khuẩn"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_26",
        "productImgSrc": "https://cf.shopee.vn/file/9ec433bca2d7e0f8f6fc2ce1c5097882_tn",
        "price": 57,
        "text": "Quần Ống Rộng Nữ"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_174",
        "productImgSrc": "https://cf.shopee.vn/file/7452230b36bbe8c16d4780d2e2ef123c_tn",
        "price": 59,
        "text": "Tai Nghe Nhét Tai"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_769",
        "productImgSrc": "https://cf.shopee.vn/file/c302abe3c6a17063d1271f46ce542210_tn",
        "price": 42,
        "text": "Áo Thun Polo Nam Ngắn Tay"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_5",
        "productImgSrc": "https://cf.shopee.vn/file/4963ce89b97723c97154d95f9e3e31eb_tn",
        "price": 53,
        "text": "Serum Giảm Mụn The Ordinary Niacinamide"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_125",
        "productImgSrc": "https://cf.shopee.vn/file/34f639248c0c5145f9156cf9a5db9d35_tn",
        "price": 41,
        "text": "Áo Thun Form Rộng Ngắn Tay Unisex"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_174",
        "productImgSrc": "https://cf.shopee.vn/file/7452230b36bbe8c16d4780d2e2ef123c_tn",
        "price": 59,
        "text": "Tai Nghe Nhét Tai"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_769",
        "productImgSrc": "https://cf.shopee.vn/file/c302abe3c6a17063d1271f46ce542210_tn",
        "price": 42,
        "text": "Áo Thun Polo Nam Ngắn Tay"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_5",
        "productImgSrc": "https://cf.shopee.vn/file/4963ce89b97723c97154d95f9e3e31eb_tn",
        "price": 53,
        "text": "Serum Giảm Mụn The Ordinary Niacinamide"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_125",
        "productImgSrc": "https://cf.shopee.vn/file/34f639248c0c5145f9156cf9a5db9d35_tn",
        "price": 41,
        "text": "Áo Thun Form Rộng Ngắn Tay Unisex"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_115",
        "productImgSrc": "https://cf.shopee.vn/file/58519a6e4edd72b3fd3a8fa4ca97524f_tn",
        "price": 61,
        "text": "Quần Lót Nữ Cotton"
    },
    {
        "href": "https://shopee.vn/top_products?catId=VN_BITL0_24",
        "productImgSrc": "https://cf.shopee.vn/file/88c7b37f3c2c4481d6dc51edd75b7d00_tn",
        "price": 62,
        "text": "Thảm Yoga"
    }
];
var topSearchMainLinks = document.querySelectorAll('.top-search__main__list > .top-search__main__link');
var topSearchMainLinksInfoIndex = 0;

for (var i = 0; i < topSearchMainLinks.length; i++) {
    var topSearchMainList = 
        document.querySelectorAll(`.top-search__main__list:nth-child(${i+1}) > .top-search__main__link`);

    for (var j = 0; j < topSearchMainList.length; j++) {
        // 1. get current specific elements
        var productImg = document.querySelector(`.top-search__main__list:nth-child(${i+1})
            > .top-search__main__link:nth-child(${j+1}) .top-search__main__product__img`);
        var price = document.querySelector(`.top-search__main__list:nth-child(${i+1})
            > .top-search__main__link:nth-child(${j+1}) .top-search__main__product__statistic__price`);
        var text = document.querySelector(`.top-search__main__list:nth-child(${i+1})
            > .top-search__main__link:nth-child(${j+1}) .top-search__main__footer__text`);
        

        // 2. update attributes, innerHTML for them
        topSearchMainList[j].href = topSearchMainLinksInfo[topSearchMainLinksInfoIndex].href;
        productImg.src = topSearchMainLinksInfo[topSearchMainLinksInfoIndex].productImgSrc;

        // apply for all elements (except the first one)
        if (topSearchMainLinksInfoIndex != 0) {
            price.innerHTML = topSearchMainLinksInfo[topSearchMainLinksInfoIndex].price;
        }
        text.innerHTML = topSearchMainLinksInfo[topSearchMainLinksInfoIndex].text;


        // 3. increase data array's index
        topSearchMainLinksInfoIndex++;
    }
}
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


//#region todaySuggestionMainLoading...
var todaySuggestionMainLoading = document.querySelector('.today-suggestion__main__loading');
//#endregion


//#region all of a tags of .footer__text (add href & innerHTML)
var footerTextATags = document.querySelectorAll('.footer__text a');

var footerTextATags_hrefs = [
    "https://shopee.sg/",
    "https://shopee.com.my/",
    "https://shopee.co.id/",
    "https://shopee.co.th/",
    "https://shopee.ph/",
    "https://shopee.tw/",
    "https://shopee.com.br/",
    "https://shopee.vn/mall/",
    "https://banhang.shopee.vn/edu/article/231",
    "https://banhang.shopee.vn/edu/article/119",
    "https://banhang.shopee.vn/edu/article/66",
    "https://shopee.vn/flash_sale/",
    "https://shopee.vn/m/ma-giam-gia",
    "https://shopee.vn/m/mien-phi-van-chuyen",
    "https://shopee.vn/m/4-4",
    "https://shopee.vn/m/99",
    "https://shopee.vn/m/1010",
    "https://shopee.vn/m/11-11",
    "https://shopee.vn/m/12-12",
    "https://shopee.vn/m/tet-sieu-sale",
    "https://shopee.vn/m/shopee-premium",
    "https://shopee.vn/m/tram-ty-uu-dai",
    "https://shopee.vn/m/kiehls-sale",
    "https://shopee.vn/m/fresh-sale",
    "https://shopee.vn/m/the-ordinary-sale",
    "https://shopee.vn/m/foreo-sale",
    "https://shopee.vn/m/transino-sale",
    "https://shopee.vn/m/sk-ii-sale",
    "https://shopee.vn/m/gopro-sale",
    "https://shopee.vn/marshall_official_storevn",
    "https://shopee.vn/m/huion-sale",
    "https://shopee.vn/m/dji-sale",
    "https://shopee.vn/m/harman-kardon-sale",
    "https://shopee.vn/m/razer-sale",
    "https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.78",
    "https://shopee.vn/%C4%90%E1%BB%93ng-H%E1%BB%93-cat.9607",
    "https://shopee.vn/search?keyword=n%C6%B0%E1%BB%9Bc%20r%E1%BB%ADa%20tay%20kh%C3%B4",
    "https://shopee.vn/search?keyword=kh%E1%BA%A9u%20trang%20n95",
    "https://shopee.vn/shopee-coins/",
    "https://shopee.vn/m/mum-club",
    "https://shopee.vn/m/beauty-club",
    "https://shopee.vn/m/book-club"
];
var footerTextATags_innerHTMLs = [
    "Singapore",
    "Malaysia",
    "Indonesia",
    "Thái Lan",
    "Philipin",
    "Đài Loan",
    "Brazil",
    "Shopee Mall",
    "tính năng “Shop tạm nghỉ”",
    "tạo chương trình khuyến mãi trên Shopee",
    "phân loại sản phẩm",
    "Shopee flash sale",
    "mã giảm giá Shopee",
    "mã miễn phí vận chuyển toàn quốc",
    "Siêu hội mua sắm 4.4",
    "Shopee 9.9 sale",
    "Shopee 10.10 sale",
    "Shopee 11.11 sale",
    "Shopee 12.12 sale",
    "Shopee Tết Sale",
    "Shopee Premium",
    "hàng hiệu giảm đến 50%",
    "Kiehl's",
    "Fresh",
    "The Ordinary",
    "Foreo",
    "Transino",
    "SK-II",
    "camera hành trình Gopro",
    "Marshall",
    "bảng vẽ điện tử Huion",
    "máy quay DJI Osmo Pocket",
    "loa Harman Kardon",
    "Razer",
    "thời trang nam",
    "đồng hồ",
    "nước rửa tay khô",
    "khẩu trang N95",
    "Shopee Xu",
    "Shopee Mum's Club",
    "Shopee Beauty Club",
    "Shopee Book Club"
];

for(var i = 0; i < footerTextATags.length; i++) {
    footerTextATags[i].href = footerTextATags_hrefs[i];
    footerTextATags[i].innerHTML = footerTextATags_innerHTMLs[i];
}
//#endregion


//#region footer__directory__item (part__heading, part__item, part__link)
if (true) {
    var footerDirectoryItems = document.querySelectorAll('.footer__directory__item');

    var footerDirectoryItemPartHeading_innerHTMLs = [
        'Thời Trang Nam', 'Nhà Cửa & Đời Sống', 'Đồng Hồ', 'Phụ Kiện & Trang Sức Nữ', 'Balo & Túi Ví Nam', 'Voucher & Dịch Vụ', 'Thời Trang Nữ', 
        'Máy Tính & Laptop', 'Giày Dép Nữ', 'Thể Thao & Du Lịch', 'Thời Trang Trẻ Em', 'Điện Thoại & Phụ Kiện', 'Sắc Đẹp', 'Giày Dép Nam', 'Bách Hóa Online', 'Đồ Chơi',
        'Mẹ & Bé', 'Máy Ảnh & Máy Quay Phim', 'Túi Ví Nữ', 'Ô Tô & Xe Máy & Xe Đạp', 'Giặt Giũ & Chăm Sóc Nhà Cửa', 'Thiết Bị Điện Tử', 
        'Sức Khỏe', 'Thiết Bị Điện Gia Dụng', 'Nhà Sách Online', 'Chăm Sóc Thú Cưng'
    ];

    var footerDirectoryItemPartHeading_hrefs = [
        "https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567",
        "https://shopee.vn/Nh%C3%A0-C%E1%BB%ADa-%C4%90%E1%BB%9Di-S%E1%BB%91ng-cat.11036670",
        "https://shopee.vn/%C4%90%E1%BB%93ng-H%E1%BB%93-cat.11035788",
        "https://shopee.vn/Ph%E1%BB%A5-Ki%E1%BB%87n-Trang-S%E1%BB%A9c-N%E1%BB%AF-cat.11035853",
        "https://shopee.vn/Balo-T%C3%BAi-V%C3%AD-Nam-cat.11035741",
        "https://shopee.vn/Voucher-D%E1%BB%8Bch-V%E1%BB%A5-cat.11035898",
        "https://shopee.vn/Th%E1%BB%9Di-Trang-N%E1%BB%AF-cat.11035639",
        "https://shopee.vn/M%C3%A1y-T%C3%ADnh-Laptop-cat.11035954",
        "https://shopee.vn/Gi%C3%A0y-D%C3%A9p-N%E1%BB%AF-cat.11035825",
        "https://shopee.vn/Th%E1%BB%83-Thao-Du-L%E1%BB%8Bch-cat.11035478",
        "https://shopee.vn/Th%E1%BB%9Di-Trang-Tr%E1%BA%BB-Em-cat.11036382",
        "https://shopee.vn/%C4%90i%E1%BB%87n-Tho%E1%BA%A1i-Ph%E1%BB%A5-Ki%E1%BB%87n-cat.11036030",
        "https://shopee.vn/S%E1%BA%AFc-%C4%90%E1%BA%B9p-cat.11036279",
        "https://shopee.vn/Gi%C3%A0y-D%C3%A9p-Nam-cat.11035801",
        "https://shopee.vn/B%C3%A1ch-H%C3%B3a-Online-cat.11036525",
        "https://shopee.vn/%C4%90%E1%BB%93-Ch%C6%A1i-cat.11036932",
        "https://shopee.vn/M%E1%BA%B9-B%C3%A9-cat.11036194",
        "https://shopee.vn/M%C3%A1y-%E1%BA%A2nh-M%C3%A1y-Quay-Phim-cat.11036101",
        "https://shopee.vn/T%C3%BAi-V%C3%AD-N%E1%BB%AF-cat.11035761",
        "https://shopee.vn/%C3%94-T%C3%B4-Xe-M%C3%A1y-Xe-%C4%90%E1%BA%A1p-cat.11036793",
        "https://shopee.vn/Gi%E1%BA%B7t-Gi%C5%A9-Ch%C4%83m-S%C3%B3c-Nh%C3%A0-C%E1%BB%ADa-cat.11036624",
        "https://shopee.vn/Thi%E1%BA%BFt-B%E1%BB%8B-%C4%90i%E1%BB%87n-T%E1%BB%AD-cat.11036132",
        "https://shopee.vn/S%E1%BB%A9c-Kh%E1%BB%8Fe-cat.11036345",
        "https://shopee.vn/Thi%E1%BA%BFt-B%E1%BB%8B-%C4%90i%E1%BB%87n-Gia-D%E1%BB%A5ng-cat.11036971",
        "https://shopee.vn/Nh%C3%A0-S%C3%A1ch-Online-cat.11036863",
        "https://shopee.vn/Ch%C4%83m-S%C3%B3c-Th%C3%BA-C%C6%B0ng-cat.11036478"
    ];

    var footerDirectoryItemPartLink_innerHTMLs = [
        ['Áo Khoác', 'Áo Vest và Blazer', 'Áo Hoodie, Áo Len & Áo Nỉ', 'Quần Jeans','Quần Dài/Quần Âu', 'Quần Short', 'Áo', 'Áo Ba Lỗ','Đồ Lót', 'Đồ Ngủ', 'Đồ Bộ', 'Vớ/Tất','Trang Phục Truyền Thống', 'Đồ Hóa Trang', 'Trang Phục Ngành Nghề', 'Khác','Trang Sức Nam', 'Kính Mắt Nam', 'Thắt Lưng Nam', 'Cà vạt & Nơ cổ', 'Phụ Kiện Nam'],
        ['Chăn, Ga, Gối & Nệm','Đồ nội thất','Dụng cụ cầm tay','Trang trí nhà cửa','Dụng cụ & Thiết bị tiện ích','Đồ dùng nhà bếp & Phòng ăn','Đèn','Ngoài trời & Sân vườn','Tủ đựng & Hộp lưu trữ','Khác','Đồ dùng phòng tắm'],
        ['Đồng Hồ Nam','Đồng Hồ Nữ','Bộ Đồng Hồ & Đồng Hồ Cặp','Đồng Hồ Trẻ Em','Phụ Kiện Đồng Hồ','Khác'],
        ['Nhẫn','Bông tai','Khăn choàng','Găng tay','Phụ kiện tóc','Vòng tay & Lắc tay','Lắc chân','Mũ','Dây chuyền','Kính mắt','Kim loại quý','Thắt lưng','Cà vạt & Nơ cổ','Phụ kiện thêm','Bộ phụ kiện','Khác','Vớ/ Tất','Ô/ Dù'],
        ['Ba Lô Nam','Ba Lô Laptop Nam','Túi & Cặp Đựng Laptop','Túi Chống Sốc Laptop Nam','Túi Tote Nam','Cặp Xách Công Sở Nam','Ví Cầm Tay Nam','Túi Đeo Hông & Túi Đeo Ngực Nam','Túi Đeo Chéo Nam','Bóp/Ví Nam','Khác'],
        ['Nhà hàng & Ăn uống','Sự kiện & Giải trí','Nạp tiền tài khoản','Sức khỏe & Làm đẹp','Gọi xe','Khóa học','Du lịch & Khách sạn','Mua sắm','Mã quà tặng Shopee','Thanh toán hóa đơn','Dịch vụ khác','Tiền điện tử','Thẻ game','Streaming','Khác'],
        ['Quần','Quần đùi','Chân váy','Quần jeans','Đầm/Váy','Váy cưới','Đồ liền thân','Áo khoác, Áo choàng & Vest','Áo len & Cardigan','Hoodie và Áo nỉ','Bộ','Đồ lót','Đồ ngủ','Áo','Đồ tập','Đồ Bầu','Đồ truyền thống','Đồ hóa trang','Vải','Vớ/ Tất','Khác'],
        ['Máy Tính Bàn','Màn Hình','Linh Kiện Máy Tính','Thiết Bị Lưu Trữ','Thiết Bị Mạng','Máy In, Máy Scan & Máy Chiếu','Phụ Kiện Máy Tính','Laptop','Khác','Gaming'],
        ['Bốt','Giày Thể Thao/ Sneaker','Giày Đế Bằng','Giày Cao Gót','Giày Đế Xuồng','Xăng-đan Và Dép','Phụ Kiện Giày','Giày Khác'],
        ['Vali','Túi du lịch','Phụ kiện du lịch','Dụng Cụ Thể Thao & Dã Ngoại','Giày Thể Thao','Thời Trang Thể Thao & Dã Ngoại','Phụ Kiện Thể Thao & Dã Ngoại','Khác'],
        ['Trang phục bé trai','Trang phục bé gái','Giày dép bé trai','Giày dép bé gái','Khác','Quần áo em bé','Giày tập đi & Tất sơ sinh','Phụ kiện trẻ em'],
        ['Điện thoại','Máy tính bảng','Pin Dự Phòng','Pin Gắn Trong, Cáp và Bộ Sạc','Ốp lưng, bao da, Miếng dán điện thoại','Bảo vệ màn hình','Đế giữ điện thoại & Gậy Chụp hình','Thẻ nhớ','Sim','Khác','Điện Thoại Bàn'],
        ['Tắm & chăm sóc cơ thể','Chăm sóc tay, chân & móng','Chăm sóc tóc','Chăm sóc nam giới','Nước hoa','Trang điểm','Dụng cụ làm đẹp','Chăm sóc da mặt','Bộ sản phẩm làm đẹp','Khác'],
        ['Bốt','Giày Thể Thao/ Sneakers','Giày Sục','Giày Tây Lười','Giày Oxfords & Giày Buộc Dây','Xăng-đan và Dép','Phụ kiện giày dép','Khác'],
        ['Đồ ăn vặt','Đồ chế biến sẵn','Nhu yếu phẩm','Nguyên liệu nấu ăn','Đồ làm bánh','Sữa - trứng','Đồ uống','Ngũ cốc & mứt','Các loại bánh','Đồ uống có cồn','Bộ quà tặng','Thực phẩm tươi sống và thực phẩm đông lạnh','Khác'],
        ['Đồ chơi mô hình','Đồ chơi giải trí','Đồ chơi giáo dục','Đồ chơi cho trẻ sơ sinh & trẻ nhỏ','Đồ chơi vận động & ngoài trời','Búp bê & Đồ chơi nhồi bông'],
        ['Đồ dùng du lịch cho bé','Đồ dùng ăn dặm cho bé','Phụ kiện cho mẹ','Chăm sóc sức khỏe mẹ','Đồ dùng phòng tắm & Chăm sóc cơ thể bé','Đồ dùng phòng ngủ cho bé','An toàn cho bé','Thực phẩm cho bé','Chăm sóc sức khỏe bé','Tã & bô em bé','Đồ chơi','Bộ & Gói quà tặng','Khác','Sữa công thức trên 24 tháng','Sữa công thức 0-24 tháng tuổi'],
        ['Máy ảnh - Máy quay phim','Camera giám sát & Camera hệ thống','Thẻ nhớ','Ống kính','Phụ kiện máy ảnh','Máy bay camera & Phụ kiện'],
        ['Ba Lô Nữ','Cặp Laptop','Ví Dự Tiệc & Ví Cầm Tay','Túi Đeo Hông & Túi Đeo Ngực','Túi Tote','Túi Quai Xách','Túi Đeo Chéo & Túi Đeo Vai','Ví/Bóp Nữ','Phụ Kiện Túi','Khác'],
        ['Xe đạp, xe điện','Mô tô, xe máy','Xe Ô tô','Mũ bảo hiểm','Phụ kiện xe máy','Phụ tùng xe máy','Chăm sóc xe máy','Phụ tùng, phụ kiện xe đạp, xe đạp điện','Chăm sóc, sửa chữa xe','Chăm sóc ô tô'],
        ['Giặt giũ & Chăm sóc nhà cửa','Giấy vệ sinh, khăn giấy','Vệ sinh nhà cửa','Vệ sinh bát đĩa','Dụng cụ vệ sinh','Chất khử mùi, làm thơm','Thuốc diệt côn trùng','Túi, màng bọc thực phẩm','Bao bì, túi đựng rác'],
        ['Thiết bị đeo thông minh','Phụ kiện tivi','Máy Game Console','Phụ kiện Console','Game Console','Thiết Bị Điện Tử','Loa','Tai Nghe','Tivi','Tivi Box'],
        ['Thực phẩm chức năng','Vật tư y tế','Chăm sóc cá nhân','Hỗ trợ tình dục','Khác'],
        ['Đồ gia dụng nhà bếp','Đồ gia dụng lớn','Máy hút bụi & Thiết bị làm sạch','Quạt & Máy nóng lạnh','Thiết bị chăm sóc quần áo','Khác'],
        ['Đĩa Than','Album Ảnh','Dụng Cụ May Vá','Khác','Tạp Chí & Báo Giấy','Sách','Khác','Văn Phòng Phẩm','Quà Lưu Niệm','Băng - Đĩa','Nhạc Cụ & Phụ Kiện'],
        ['Thức ăn cho thú cưng','Phụ kiện cho thú cưng','Vệ sinh cho thú cưng','Quần áo & phụ kiện','Chăm sóc sức khỏe','Khác']
    ];

    var footerDirectoryItemPartLink_hrefs = [
        ["https://shopee.vn/%C3%81o-Kho%C3%A1c-cat.11035567.11035568", "https://shopee.vn/%C3%81o-Vest-v%C3%A0-Blazer-cat.11035567.11035572", "https://shopee.vn/%C3%81o-Hoodie-%C3%81o-Len-%C3%81o-N%E1%BB%89-cat.11035567.11035578", "https://shopee.vn/Qu%E1%BA%A7n-Jeans-cat.11035567.11035583", "https://shopee.vn/Qu%E1%BA%A7n-D%C3%A0i-Qu%E1%BA%A7n-%C3%82u-cat.11035567.11035584", "https://shopee.vn/Qu%E1%BA%A7n-Short-cat.11035567.11035590", "https://shopee.vn/%C3%81o-cat.11035567.11035592", "https://shopee.vn/%C3%81o-Ba-L%E1%BB%97-cat.11035567.11035597", "https://shopee.vn/%C4%90%E1%BB%93-L%C3%B3t-cat.11035567.11035598", "https://shopee.vn/%C4%90%E1%BB%93-Ng%E1%BB%A7-cat.11035567.11035603", "https://shopee.vn/%C4%90%E1%BB%93-B%E1%BB%99-cat.11035567.11035604", "https://shopee.vn/V%E1%BB%9B-T%E1%BA%A5t-cat.11035567.11035605", "https://shopee.vn/Trang-Ph%E1%BB%A5c-Truy%E1%BB%81n-Th%E1%BB%91ng-cat.11035567.11035606", "https://shopee.vn/%C4%90%E1%BB%93-H%C3%B3a-Trang-cat.11035567.11035611", "https://shopee.vn/Trang-Ph%E1%BB%A5c-Ng%C3%A0nh-Ngh%E1%BB%81-cat.11035567.11035612", "https://shopee.vn/Kh%C3%A1c-cat.11035567.11035613", "https://shopee.vn/Trang-S%E1%BB%A9c-Nam-cat.11035567.11035614", "https://shopee.vn/K%C3%ADnh-M%E1%BA%AFt-Nam-cat.11035567.11035620", "https://shopee.vn/Th%E1%BA%AFt-L%C6%B0ng-Nam-cat.11035567.11035625", "https://shopee.vn/C%C3%A0-v%E1%BA%A1t-N%C6%A1-c%E1%BB%95-cat.11035567.11035626", "https://shopee.vn/Ph%E1%BB%A5-Ki%E1%BB%87n-Nam-cat.11035567.11035627"],
        ["https://shopee.vn/Ch%C4%83n-Ga-G%E1%BB%91i-N%E1%BB%87m-cat.11036670.11036683", "https://shopee.vn/%C4%90%E1%BB%93-n%E1%BB%99i-th%E1%BA%A5t-cat.11036670.11036695", "https://shopee.vn/D%E1%BB%A5ng-c%E1%BB%A5-c%E1%BA%A7m-tay-cat.11036670.11036704", "https://shopee.vn/Trang-tr%C3%AD-nh%C3%A0-c%E1%BB%ADa-cat.11036670.11036717", "https://shopee.vn/D%E1%BB%A5ng-c%E1%BB%A5-Thi%E1%B…BB%8B-ti%E1%BB%87n-%C3%ADch-cat.11036670.11036732", "https://shopee.vn/%C4%90%E1%BB%93-d%C3%B9ng-nh%C3%…1%BA%BFp-Ph%C3%B2ng-%C4%83n-cat.11036670.11036748", "https://shopee.vn/%C4%90%C3%A8n-cat.11036670.11036760", "https://shopee.vn/Ngo%C3%A0i-tr%E1%BB%9Di-S%C3%A2n-v%C6%B0%E1%BB%9Dn-cat.11036670.11036776", "https://shopee.vn/T%E1%BB%A7-%C4%91%E1%BB%B1ng-H%E…BB%99p-l%C6%B0u-tr%E1%BB%AF-cat.11036670.11036783", "https://shopee.vn/Kh%C3%A1c-cat.11036670.11036792", "https://shopee.vn/%C4%90%E1%BB%93-d%C3%B9ng-ph%C3%B2ng-t%E1%BA%AFm-cat.11036670.11036671"],
        ["https://shopee.vn/%C4%90%E1%BB%93ng-H%E1%BB%93-Nam-cat.11035788.11035789", "https://shopee.vn/%C4%90%E1%BB%93ng-H%E1%BB%93-N%E1%BB%AF-cat.11035788.11035790", "https://shopee.vn/B%E1%BB%99-%C4%90%E1%BB%93ng-H%E…93ng-H%E1%BB%93-C%E1%BA%B7p-cat.11035788.11035791", "https://shopee.vn/%C4%90%E1%BB%93ng-H%E1%BB%93-Tr%E1%BA%BB-Em-cat.11035788.11035792", "https://shopee.vn/Ph%E1%BB%A5-Ki%E1%BB%87n-%C4%90%E1%BB%93ng-H%E1%BB%93-cat.11035788.11035793", "https://shopee.vn/Kh%C3%A1c-cat.11035788.11035800"],
        ["https://shopee.vn/Nh%E1%BA%ABn-cat.11035853.11035854", "https://shopee.vn/B%C3%B4ng-tai-cat.11035853.11035855", "https://shopee.vn/Kh%C4%83n-cho%C3%A0ng-cat.11035853.11035856", "https://shopee.vn/G%C4%83ng-tay-cat.11035853.11035857", "https://shopee.vn/Ph%E1%BB%A5-ki%E1%BB%87n-t%C3%B3c-cat.11035853.11035858", "https://shopee.vn/V%C3%B2ng-tay-L%E1%BA%AFc-tay-cat.11035853.11035865", "https://shopee.vn/L%E1%BA%AFc-ch%C3%A2n-cat.11035853.11035866", "https://shopee.vn/M%C5%A9-cat.11035853.11035867", "https://shopee.vn/D%C3%A2y-chuy%E1%BB%81n-cat.11035853.11035868", "https://shopee.vn/K%C3%ADnh-m%E1%BA%AFt-cat.11035853.11035869", "https://shopee.vn/Kim-lo%E1%BA%A1i-qu%C3%BD-cat.11035853.11035874", "https://shopee.vn/Th%E1%BA%AFt-l%C6%B0ng-cat.11035853.11035880", "https://shopee.vn/C%C3%A0-v%E1%BA%A1t-N%C6%A1-c%E1%BB%95-cat.11035853.11035881", "https://shopee.vn/Ph%E1%BB%A5-ki%E1%BB%87n-th%C3%AAm-cat.11035853.11035882", "https://shopee.vn/B%E1%BB%99-ph%E1%BB%A5-ki%E1%BB%87n-cat.11035853.11035891", "https://shopee.vn/Kh%C3%A1c-cat.11035853.11035892", "https://shopee.vn/V%E1%BB%9B-T%E1%BA%A5t-cat.11035853.11035893", "https://shopee.vn/%C3%94-D%C3%B9-cat.11035853.11035897"],
        ["https://shopee.vn/Ba-L%C3%B4-Nam-cat.11035741.11035742", "https://shopee.vn/Ba-L%C3%B4-Laptop-Nam-cat.11035741.11035743", "https://shopee.vn/T%C3%BAi-C%E1%BA%B7p-%C4%90%E1%BB%B1ng-Laptop-cat.11035741.11035744", "https://shopee.vn/T%C3%BAi-Ch%E1%BB%91ng-S%E1%BB%91c-Laptop-Nam-cat.11035741.11035747", "https://shopee.vn/T%C3%BAi-Tote-Nam-cat.11035741.11035748", "https://shopee.vn/C%E1%BA%B7p-X%C3%A1ch-C%C3%B4ng-S%E1%BB%9F-Nam-cat.11035741.11035749", "https://shopee.vn/V%C3%AD-C%E1%BA%A7m-Tay-Nam-cat.11035741.11035750", "https://shopee.vn/T%C3%BAi-%C4%90eo-H%C3%B4ng-T%C3…i-%C4%90eo-Ng%E1%BB%B1c-Nam-cat.11035741.11035751", "https://shopee.vn/T%C3%BAi-%C4%90eo-Ch%C3%A9o-Nam-cat.11035741.11035752", "https://shopee.vn/B%C3%B3p-V%C3%AD-Nam-cat.11035741.11035753", "https://shopee.vn/Kh%C3%A1c-cat.11035741.11035760"],
        ["https://shopee.vn/Nh%C3%A0-h%C3%A0ng-%C4%82n-u%E1%BB%91ng-cat.11035898.11035905", "https://shopee.vn/S%E1%BB%B1-ki%E1%BB%87n-Gi%E1%BA%A3i-tr%C3%AD-cat.11035898.11035899", "https://shopee.vn/N%E1%BA%A1p-ti%E1%BB%81n-t%C3%A0i-kho%E1%BA%A3n-cat.11035898.11035931", "https://shopee.vn/S%E1%BB%A9c-kh%E1%BB%8Fe-L%C3%A0m-%C4%91%E1%BA%B9p-cat.11035898.11035922", "https://shopee.vn/G%E1%BB%8Di-xe-cat.11035898.11035929", "https://shopee.vn/Kh%C3%B3a-h%E1%BB%8Dc-cat.11035898.11035930", "https://shopee.vn/Du-l%E1%BB%8Bch-Kh%C3%A1ch-s%E1%BA%A1n-cat.11035898.11035936", "https://shopee.vn/Mua-s%E1%BA%AFm-cat.11035898.11035909", "https://shopee.vn/M%C3%A3-qu%C3%A0-t%E1%BA%B7ng-Shopee-cat.11035898.11035949", "https://shopee.vn/Thanh-to%C3%A1n-h%C3%B3a-%C4%91%C6%A1n-cat.11035898.11035913", "https://shopee.vn/D%E1%BB%8Bch-v%E1%BB%A5-kh%C3%A1c-cat.11035898.11035914", "https://shopee.vn/Ti%E1%BB%81n-%C4%91i%E1%BB%87n-t%E1%BB%AD-cat.11035898.11035945", "https://shopee.vn/Th%E1%BA%BB-game-cat.11035898.11035947", "https://shopee.vn/Streaming-cat.11035898.11035948", "https://shopee.vn/Kh%C3%A1c-cat.11035898.11035953"],
        ["https://shopee.vn/Qu%E1%BA%A7n-cat.11035639.11035648", "https://shopee.vn/Qu%E1%BA%A7n-%C4%91%C3%B9i-cat.11035639.11035652", "https://shopee.vn/Ch%C3%A2n-v%C3%A1y-cat.11035639.11035656", "https://shopee.vn/Qu%E1%BA%A7n-jeans-cat.11035639.11035657", "https://shopee.vn/%C4%90%E1%BA%A7m-V%C3%A1y-cat.11035639.11035658", "https://shopee.vn/V%C3%A1y-c%C6%B0%E1%BB%9Bi-cat.11035639.11035659", "https://shopee.vn/%C4%90%E1%BB%93-li%E1%BB%81n-th%C3%A2n-cat.11035639.11035660", "https://shopee.vn/%C3%81o-kho%C3%A1c-%C3%81o-cho%C3%A0ng-Vest-cat.11035639.11035665", "https://shopee.vn/%C3%81o-len-Cardigan-cat.11035639.11035672", "https://shopee.vn/Hoodie-v%C3%A0-%C3%81o-n%E1%BB%89-cat.11035639.11035673", "https://shopee.vn/B%E1%BB%99-cat.11035639.11035677", "https://shopee.vn/%C4%90%E1%BB%93-l%C3%B3t-cat.11035639.11035682", "https://shopee.vn/%C4%90%E1%BB%93-ng%E1%BB%A7-cat.11035639.11035692", "https://shopee.vn/%C3%81o-cat.11035639.11035640", "https://shopee.vn/%C4%90%E1%BB%93-t%E1%BA%ADp-cat.11035639.11035730", "https://shopee.vn/%C4%90%E1%BB%93-B%E1%BA%A7u-cat.11035639.11035697", "https://shopee.vn/%C4%90%E1%BB%93-truy%E1%BB%81n-th%E1%BB%91ng-cat.11035639.11035705", "https://shopee.vn/%C4%90%E1%BB%93-h%C3%B3a-trang-cat.11035639.11035711", "https://shopee.vn/V%E1%BA%A3i-cat.11035639.11035713", "https://shopee.vn/V%E1%BB%9B-T%E1%BA%A5t-cat.11035639.11035726", "https://shopee.vn/Kh%C3%A1c-cat.11035639.11035712"],
        ["https://shopee.vn/M%C3%A1y-T%C3%ADnh-B%C3%A0n-cat.11035954.11035955", "https://shopee.vn/M%C3%A0n-H%C3%ACnh-cat.11035954.11035961", "https://shopee.vn/Linh-Ki%E1%BB%87n-M%C3%A1y-T%C3%ADnh-cat.11035954.11035962", "https://shopee.vn/Thi%E1%BA%BFt-B%E1%BB%8B-L%C6%B0u-Tr%E1%BB%AF-cat.11035954.11035975", "https://shopee.vn/Thi%E1%BA%BFt-B%E1%BB%8B-M%E1%BA%A1ng-cat.11035954.11035983", "https://shopee.vn/M%C3%A1y-In-M%C3%A1y-Scan-M%C3%A1y-Chi%E1%BA%BFu-cat.11035954.11035993", "https://shopee.vn/Ph%E1%BB%A5-Ki%E1%BB%87n-M%C3%A1y-T%C3%ADnh-cat.11035954.11036000", "https://shopee.vn/Laptop-cat.11035954.11036015", "https://shopee.vn/Kh%C3%A1c-cat.11035954.11036016", "https://shopee.vn/Gaming-cat.11035954.11036023"],
        ["https://shopee.vn/B%E1%BB%91t-cat.11035825.11035826", "https://shopee.vn/Gi%C3%A0y-Th%E1%BB%83-Thao-Sneaker-cat.11035825.11035830", "https://shopee.vn/Gi%C3%A0y-%C4%90%E1%BA%BF-B%E1%BA%B1ng-cat.11035825.11035831", "https://shopee.vn/Gi%C3%A0y-Cao-G%C3%B3t-cat.11035825.11035837", "https://shopee.vn/Gi%C3%A0y-%C4%90%E1%BA%BF-Xu%E1%BB%93ng-cat.11035825.11035838", "https://shopee.vn/X%C4%83ng-%C4%91an-V%C3%A0-D%C3%A9p-cat.11035825.11035839", "https://shopee.vn/Ph%E1%BB%A5-Ki%E1%BB%87n-Gi%C3%A0y-cat.11035825.11035845", "https://shopee.vn/Gi%C3%A0y-Kh%C3%A1c-cat.11035825.11035852"],
        ["https://shopee.vn/Vali-cat.11035478.11035479", "https://shopee.vn/T%C3%BAi-du-l%E1%BB%8Bch-cat.11035478.11035487", "https://shopee.vn/Ph%E1%BB%A5-ki%E1%BB%87n-du-l%E1%BB%8Bch-cat.11035478.11035492", "https://shopee.vn/D%E1%BB%A5ng-C%E1%BB%A5-Th%E1%BB…-Thao-D%C3%A3-Ngo%E1%BA%A1i-cat.11035478.11035503", "https://shopee.vn/Gi%C3%A0y-Th%E1%BB%83-Thao-cat.11035478.11035531", "https://shopee.vn/Th%E1%BB%9Di-Trang-Th%E1%BB%83-Thao-D%C3%A3-Ngo%E1%BA%A1i-cat.11035478.11035543", "https://shopee.vn/Ph%E1%BB%A5-Ki%E1%BB%87n-Th%E1%B…-Thao-D%C3%A3-Ngo%E1%BA%A1i-cat.11035478.11035553", "https://shopee.vn/Kh%C3%A1c-cat.11035478.11035566"],
        ["https://shopee.vn/Trang-ph%E1%BB%A5c-b%C3%A9-trai-cat.11036382.11036418", "https://shopee.vn/Trang-ph%E1%BB%A5c-b%C3%A9-g%C3%A1i-cat.11036382.11036438", "https://shopee.vn/Gi%C3%A0y-d%C3%A9p-b%C3%A9-trai-cat.11036382.11036461", "https://shopee.vn/Gi%C3%A0y-d%C3%A9p-b%C3%A9-g%C3%A1i-cat.11036382.11036469", "https://shopee.vn/Kh%C3%A1c-cat.11036382.11036477", "https://shopee.vn/Qu%E1%BA%A7n-%C3%A1o-em-b%C3%A9-cat.11036382.11036383", "https://shopee.vn/Gi%C3%A0y-t%E1%BA%ADp-%C4%91i-T%E1%BA%A5t-s%C6%A1-sinh-cat.11036382.11036396", "https://shopee.vn/Ph%E1%BB%A5-ki%E1%BB%87n-tr%E1%BA%BB-em-cat.11036382.11036397"],
        ["https://shopee.vn/%C4%90i%E1%BB%87n-tho%E1%BA%A1i-cat.11036030.11036031", "https://shopee.vn/M%C3%A1y-t%C3%ADnh-b%E1%BA%A3ng-cat.11036030.11036041", "https://shopee.vn/Pin-D%E1%BB%B1-Ph%C3%B2ng-cat.11036030.11036048", "https://shopee.vn/Pin-G%E1%BA%AFn-Trong-C%C3%A1p-v…3%A0-B%E1%BB%99-S%E1%BA%A1c-cat.11036030.11036054", "https://shopee.vn/%E1%BB%90p-l%C6%B0ng-bao-da-Mi%E…91i%E1%BB%87n-tho%E1%BA%A1i-cat.11036030.11036060", "https://shopee.vn/B%E1%BA%A3o-v%E1%BB%87-m%C3%A0n-h%C3%ACnh-cat.11036030.11036064", "https://shopee.vn/%C4%90%E1%BA%BF-gi%E1%BB%AF-%C4%…%ADy-Ch%E1%BB%A5p-h%C3%ACnh-cat.11036030.11036074", "https://shopee.vn/Th%E1%BA%BB-nh%E1%BB%9B-cat.11036030.11036083", "https://shopee.vn/Sim-cat.11036030.11036084", "https://shopee.vn/Kh%C3%A1c-cat.11036030.11036091", "https://shopee.vn/%C4%90i%E1%BB%87n-Tho%E1%BA%A1i-B%C3%A0n-cat.11036030.11036097"],
        ["https://shopee.vn/T%E1%BA%AFm-ch%C4%83m-s%C3%B3c-c%C6%A1-th%E1%BB%83-cat.11036279.11036280", "https://shopee.vn/Ch%C4%83m-s%C3%B3c-tay-ch%C3%A2n-m%C3%B3ng-cat.11036279.11036292", "https://shopee.vn/Ch%C4%83m-s%C3%B3c-t%C3%B3c-cat.11036279.11036297", "https://shopee.vn/Ch%C4%83m-s%C3%B3c-nam-gi%E1%BB%9Bi-cat.11036279.11036304", "https://shopee.vn/N%C6%B0%E1%BB%9Bc-hoa-cat.11036279.11036310", "https://shopee.vn/Trang-%C4%91i%E1%BB%83m-cat.11036279.11036314", "https://shopee.vn/D%E1%BB%A5ng-c%E1%BB%A5-l%C3%A0m-%C4%91%E1%BA%B9p-cat.11036279.11036321", "https://shopee.vn/Ch%C4%83m-s%C3%B3c-da-m%E1%BA%B7t-cat.11036279.11036328", "https://shopee.vn/B%E1%BB%99-s%E1%BA%A3n-ph%E1%BA%…m-l%C3%A0m-%C4%91%E1%BA%B9p-cat.11036279.11036343", "https://shopee.vn/Kh%C3%A1c-cat.11036279.11036344"],
        ["https://shopee.vn/B%E1%BB%91t-cat.11035801.11035802", "https://shopee.vn/Gi%C3%A0y-Th%E1%BB%83-Thao-Sneakers-cat.11035801.11035807", "https://shopee.vn/Gi%C3%A0y-S%E1%BB%A5c-cat.11035801.11035808", "https://shopee.vn/Gi%C3%A0y-T%C3%A2y-L%C6%B0%E1%BB%9Di-cat.11035801.11035809", "https://shopee.vn/Gi%C3%A0y-Oxfords-Gi%C3%A0y-Bu%E1%BB%99c-D%C3%A2y-cat.11035801.11035810", "https://shopee.vn/X%C4%83ng-%C4%91an-v%C3%A0-D%C3%A9p-cat.11035801.11035811", "https://shopee.vn/Ph%E1%BB%A5-ki%E1%BB%87n-gi%C3%A0y-d%C3%A9p-cat.11035801.11035817", "https://shopee.vn/Kh%C3%A1c-cat.11035801.11035824"],
        ["https://shopee.vn/%C4%90%E1%BB%93-%C4%83n-v%E1%BA%B7t-cat.11036525.11036532", "https://shopee.vn/%C4%90%E1%BB%93-ch%E1%BA%BF-bi%E1%BA%BFn-s%E1%BA%B5n-cat.11036525.11036526", "https://shopee.vn/Nhu-y%E1%BA%BFu-ph%E1%BA%A9m-cat.11036525.11036544", "https://shopee.vn/Nguy%C3%AAn-li%E1%BB%87u-n%E1%BA%A5u-%C4%83n-cat.11036525.11036552", "https://shopee.vn/%C4%90%E1%BB%93-l%C3%A0m-b%C3%A1nh-cat.11036525.11036562", "https://shopee.vn/S%E1%BB%AFa-tr%E1%BB%A9ng-cat.11036525.11036591", "https://shopee.vn/%C4%90%E1%BB%93-u%E1%BB%91ng-cat.11036525.11036576", "https://shopee.vn/Ng%C5%A9-c%E1%BB%91c-m%E1%BB%A9t-cat.11036525.11036570", "https://shopee.vn/C%C3%A1c-lo%E1%BA%A1i-b%C3%A1nh-cat.11036525.11036611", "https://shopee.vn/%C4%90%E1%BB%93-u%E1%BB%91ng-c%C3%B3-c%E1%BB%93n-cat.11036525.11036616", "https://shopee.vn/B%E1%BB%99-qu%C3%A0-t%E1%BA%B7ng-cat.11036525.11036622", "https://shopee.vn/Th%E1%BB%B1c-ph%E1%BA%A9m-t%C6%B…%C4%91%C3%B4ng-l%E1%BA%A1nh-cat.11036525.11036601", "https://shopee.vn/Kh%C3%A1c-cat.11036525.11036623"],
        ["https://shopee.vn/%C4%90%E1%BB%93-ch%C6%A1i-m%C3%B4-h%C3%ACnh-cat.11036932.11036933", "https://shopee.vn/%C4%90%E1%BB%93-ch%C6%A1i-gi%E1%BA%A3i-tr%C3%AD-cat.11036932.11036939", "https://shopee.vn/%C4%90%E1%BB%93-ch%C6%A1i-gi%C3%A1o-d%E1%BB%A5c-cat.11036932.11036946", "https://shopee.vn/%C4%90%E1%BB%93-ch%C6%A1i-cho-tr…inh-tr%E1%BA%BB-nh%E1%BB%8F-cat.11036932.11036954", "https://shopee.vn/%C4%90%E1%BB%93-ch%C6%A1i-v%E1%B…9ng-ngo%C3%A0i-tr%E1%BB%9Di-cat.11036932.11036960", "https://shopee.vn/B%C3%BAp-b%C3%AA-%C4%90%E1%BB%93…%A1i-nh%E1%BB%93i-b%C3%B4ng-cat.11036932.11036966"],
        ["https://shopee.vn/%C4%90%E1%BB%93-d%C3%B9ng-du-l%E1%BB%8Bch-cho-b%C3%A9-cat.11036194.11036195", "https://shopee.vn/%C4%90%E1%BB%93-d%C3%B9ng-%C4%83n-d%E1%BA%B7m-cho-b%C3%A9-cat.11036194.11036204", "https://shopee.vn/Ph%E1%BB%A5-ki%E1%BB%87n-cho-m%E1%BA%B9-cat.11036194.11036213", "https://shopee.vn/Ch%C4%83m-s%C3%B3c-s%E1%BB%A9c-kh%E1%BB%8Fe-m%E1%BA%B9-cat.11036194.11036217", "https://shopee.vn/%C4%90%E1%BB%93-d%C3%B9ng-ph%C3%…c%C6%A1-th%E1%BB%83-b%C3%A9-cat.11036194.11036222", "https://shopee.vn/%C4%90%E1%BB%93-d%C3%B9ng-ph%C3%B2ng-ng%E1%BB%A7-cho-b%C3%A9-cat.11036194.11036233", "https://shopee.vn/An-to%C3%A0n-cho-b%C3%A9-cat.11036194.11036240", "https://shopee.vn/Th%E1%BB%B1c-ph%E1%BA%A9m-cho-b%C3%A9-cat.11036194.11036248", "https://shopee.vn/Ch%C4%83m-s%C3%B3c-s%E1%BB%A9c-kh%E1%BB%8Fe-b%C3%A9-cat.11036194.11036253", "https://shopee.vn/T%C3%A3-b%C3%B4-em-b%C3%A9-cat.11036194.11036260", "https://shopee.vn/%C4%90%E1%BB%93-ch%C6%A1i-cat.11036194.11036266", "https://shopee.vn/B%E1%BB%99-G%C3%B3i-qu%C3%A0-t%E1%BA%B7ng-cat.11036194.11036277", "https://shopee.vn/Kh%C3%A1c-cat.11036194.11036278", "https://shopee.vn/S%E1%BB%AFa-c%C3%B4ng-th%E1%BB%A9c-tr%C3%AAn-24-th%C3%A1ng-cat.11036194.11059299", "https://shopee.vn/S%E1%BB%AFa-c%C3%B4ng-th%E1%BB%A…-24-th%C3%A1ng-tu%E1%BB%95i-cat.11036194.11059300"],
        ["https://shopee.vn/M%C3%A1y-%E1%BA%A3nh-M%C3%A1y-quay-phim-cat.11036101.11036102", "https://shopee.vn/Camera-gi%C3%A1m-s%C3%A1t-Camera-h%E1%BB%87-th%E1%BB%91ng-cat.11036101.11036109", "https://shopee.vn/Th%E1%BA%BB-nh%E1%BB%9B-cat.11036101.11036114", "https://shopee.vn/%E1%BB%90ng-k%C3%ADnh-cat.11036101.11036115", "https://shopee.vn/Ph%E1%BB%A5-ki%E1%BB%87n-m%C3%A1y-%E1%BA%A3nh-cat.11036101.11036119", "https://shopee.vn/M%C3%A1y-bay-camera-Ph%E1%BB%A5-ki%E1%BB%87n-cat.11036101.11036129"],
        ["https://shopee.vn/Ba-L%C3%B4-N%E1%BB%AF-cat.11035761.11035762", "https://shopee.vn/C%E1%BA%B7p-Laptop-cat.11035761.11035763", "https://shopee.vn/V%C3%AD-D%E1%BB%B1-Ti%E1%BB%87c-V%C3%AD-C%E1%BA%A7m-Tay-cat.11035761.11035768", "https://shopee.vn/T%C3%BAi-%C4%90eo-H%C3%B4ng-T%C3%BAi-%C4%90eo-Ng%E1%BB%B1c-cat.11035761.11035769", "https://shopee.vn/T%C3%BAi-Tote-cat.11035761.11035770", "https://shopee.vn/T%C3%BAi-Quai-X%C3%A1ch-cat.11035761.11035771", "https://shopee.vn/T%C3%BAi-%C4%90eo-Ch%C3%A9o-T%C3%BAi-%C4%90eo-Vai-cat.11035761.11035772", "https://shopee.vn/V%C3%AD-B%C3%B3p-N%E1%BB%AF-cat.11035761.11035773", "https://shopee.vn/Ph%E1%BB%A5-Ki%E1%BB%87n-T%C3%BAi-cat.11035761.11035780", "https://shopee.vn/Kh%C3%A1c-cat.11035761.11035787"],
        ["https://shopee.vn/Xe-%C4%91%E1%BA%A1p-xe-%C4%91i%E1%BB%87n-cat.11036793.11036794", "https://shopee.vn/M%C3%B4-t%C3%B4-xe-m%C3%A1y-cat.11036793.11036804", "https://shopee.vn/Xe-%C3%94-t%C3%B4-cat.11036793.11036811", "https://shopee.vn/M%C5%A9-b%E1%BA%A3o-hi%E1%BB%83m-cat.11036793.11036817", "https://shopee.vn/Ph%E1%BB%A5-ki%E1%BB%87n-xe-m%C3%A1y-cat.11036793.11036824", "https://shopee.vn/Ph%E1%BB%A5-t%C3%B9ng-xe-m%C3%A1y-cat.11036793.11036831", "https://shopee.vn/Ch%C4%83m-s%C3%B3c-xe-m%C3%A1y-cat.11036793.11036839", "https://shopee.vn/Ph%E1%BB%A5-t%C3%B9ng-ph%E1%BB%A…E1%BA%A1p-%C4%91i%E1%BB%87n-cat.11036793.11036846", "https://shopee.vn/Ch%C4%83m-s%C3%B3c-s%E1%BB%ADa-ch%E1%BB%AFa-xe-cat.11036793.11036852", "https://shopee.vn/Ch%C4%83m-s%C3%B3c-%C3%B4-t%C3%B4-cat.11036793.11036858"],
        ["https://shopee.vn/Gi%E1%BA%B7t-gi%C5%A9-Ch%C4%83m-…C3%B3c-nh%C3%A0-c%E1%BB%ADa-cat.11036624.11036625", "https://shopee.vn/Gi%E1%BA%A5y-v%E1%BB%87-sinh-kh%C4%83n-gi%E1%BA%A5y-cat.11036624.11036634", "https://shopee.vn/V%E1%BB%87-sinh-nh%C3%A0-c%E1%BB%ADa-cat.11036624.11036639", "https://shopee.vn/V%E1%BB%87-sinh-b%C3%A1t-%C4%91%C4%A9a-cat.11036624.11036647", "https://shopee.vn/D%E1%BB%A5ng-c%E1%BB%A5-v%E1%BB%87-sinh-cat.11036624.11036649", "https://shopee.vn/Ch%E1%BA%A5t-kh%E1%BB%AD-m%C3%B9i-l%C3%A0m-th%C6%A1m-cat.11036624.11036654", "https://shopee.vn/Thu%E1%BB%91c-di%E1%BB%87t-c%C3%B4n-tr%C3%B9ng-cat.11036624.11036660", "https://shopee.vn/T%C3%BAi-m%C3%A0ng-b%E1%BB%8Dc-th%E1%BB%B1c-ph%E1%BA%A9m-cat.11036624.11036664", "https://shopee.vn/Bao-b%C3%AC-t%C3%BAi-%C4%91%E1%BB%B1ng-r%C3%A1c-cat.11036624.11036668"],
        ["https://shopee.vn/Thi%E1%BA%BFt-b%E1%BB%8B-%C4%91eo-th%C3%B4ng-minh-cat.11036132.11036160", "https://shopee.vn/Ph%E1%BB%A5-ki%E1%BB%87n-tivi-cat.11036132.11036167", "https://shopee.vn/M%C3%A1y-Game-Console-cat.11036132.11036172", "https://shopee.vn/Ph%E1%BB%A5-ki%E1%BB%87n-Console-cat.11036132.11036182", "https://shopee.vn/Game-Console-cat.11036132.11036184", "https://shopee.vn/Thi%E1%BA%BFt-B%E1%BB%8B-%C4%90i%E1%BB%87n-T%E1%BB%AD-cat.11036132.11036133", "https://shopee.vn/Loa-cat.11036132.11036135", "https://shopee.vn/Tai-Nghe-cat.11036132.11036143", "https://shopee.vn/Tivi-cat.11036132.11036151", "https://shopee.vn/Tivi-Box-cat.11036132.11036157"],
        ["https://shopee.vn/Th%E1%BB%B1c-ph%E1%BA%A9m-ch%E1%BB%A9c-n%C4%83ng-cat.11036345.11036346", "https://shopee.vn/V%E1%BA%ADt-t%C6%B0-y-t%E1%BA%BF-cat.11036345.11036352", "https://shopee.vn/Ch%C4%83m-s%C3%B3c-c%C3%A1-nh%C3%A2n-cat.11036345.11036365", "https://shopee.vn/H%E1%BB%97-tr%E1%BB%A3-t%C3%ACnh-d%E1%BB%A5c-cat.11036345.11036375", "https://shopee.vn/Kh%C3%A1c-cat.11036345.11036381"],
        ["https://shopee.vn/%C4%90%E1%BB%93-gia-d%E1%BB%A5ng-nh%C3%A0-b%E1%BA%BFp-cat.11036971.11036972", "https://shopee.vn/%C4%90%E1%BB%93-gia-d%E1%BB%A5ng-l%E1%BB%9Bn-cat.11036971.11036990", "https://shopee.vn/M%C3%A1y-h%C3%BAt-b%E1%BB%A5i-Th…BB%8B-l%C3%A0m-s%E1%BA%A1ch-cat.11036971.11037000", "https://shopee.vn/Qu%E1%BA%A1t-M%C3%A1y-n%C3%B3ng-l%E1%BA%A1nh-cat.11036971.11037007", "https://shopee.vn/Thi%E1%BA%BFt-b%E1%BB%8B-ch%C4%8…C3%B3c-qu%E1%BA%A7n-%C3%A1o-cat.11036971.11037016", "https://shopee.vn/Kh%C3%A1c-cat.11036971.11037023"],
        ["https://shopee.vn/%C4%90%C4%A9a-Than-cat.11036863.11036928", "https://shopee.vn/Album-%E1%BA%A2nh-cat.11036863.11036929", "https://shopee.vn/D%E1%BB%A5ng-C%E1%BB%A5-May-V%C3%A1-cat.11036863.11036930", "https://shopee.vn/Kh%C3%A1c-cat.11036863.11036931", "https://shopee.vn/T%E1%BA%A1p-Ch%C3%AD-B%C3%A1o-Gi%E1%BA%A5y-cat.11036863.11036864", "https://shopee.vn/S%C3%A1ch-cat.11036863.11036869", "https://shopee.vn/Kh%C3%A1c-cat.11036863.11036905", "https://shopee.vn/V%C4%83n-Ph%C3%B2ng-Ph%E1%BA%A9m-cat.11036863.11036906", "https://shopee.vn/Qu%C3%A0-L%C6%B0u-Ni%E1%BB%87m-cat.11036863.11036914", "https://shopee.vn/B%C4%83ng-%C4%90%C4%A9a-cat.11036863.11036920", "https://shopee.vn/Nh%E1%BA%A1c-C%E1%BB%A5-Ph%E1%BB%A5-Ki%E1%BB%87n-cat.11036863.11036921"],
        ["https://shopee.vn/Th%E1%BB%A9c-%C4%83n-cho-th%C3%BA-c%C6%B0ng-cat.11036478.11036479", "https://shopee.vn/Ph%E1%BB%A5-ki%E1%BB%87n-cho-th%C3%BA-c%C6%B0ng-cat.11036478.11036490", "https://shopee.vn/V%E1%BB%87-sinh-cho-th%C3%BA-c%C6%B0ng-cat.11036478.11036498", "https://shopee.vn/Qu%E1%BA%A7n-%C3%A1o-ph%E1%BB%A5-ki%E1%BB%87n-cat.11036478.11036510", "https://shopee.vn/Ch%C4%83m-s%C3%B3c-s%E1%BB%A9c-kh%E1%BB%8Fe-cat.11036478.11036519", "https://shopee.vn/Kh%C3%A1c-cat.11036478.11036524"]
    ];

    var headingInnerHTMLs_index = 0;

    for(var i = 0; i < footerDirectoryItems.length; i++) {
        var thisPartHeadings = document.querySelectorAll(`
        .footer__directory__item:nth-child(${i+1}) .footer__directory__item__part__heading`);
        var thisPartItems = document.querySelectorAll(`
            .footer__directory__item:nth-child(${i+1}) .footer__directory__item__part__item`);
        

        for(var j = 0; j < thisPartItems.length; j++) {
            // update href and innerHTML for headings
            thisPartHeadings[j].innerHTML = footerDirectoryItemPartHeading_innerHTMLs[headingInnerHTMLs_index];
            thisPartHeadings[j].href = footerDirectoryItemPartHeading_hrefs[headingInnerHTMLs_index];

            // a tag's quantity in each thisPartItems
            var len = footerDirectoryItemPartLink_innerHTMLs[headingInnerHTMLs_index].length;
            for(var k = 0; k < len; k++) {
                // create a node a, add class, href, innerHTML for it 
                var aTag = document.createElement('a');
                aTag.classList.add('footer__directory__item__part__link');
                aTag.href = footerDirectoryItemPartLink_hrefs[headingInnerHTMLs_index][k];
                aTag.innerHTML = footerDirectoryItemPartLink_innerHTMLs[headingInnerHTMLs_index][k];
                // add these two properties to open link in new tab
                aTag.target = "_blank";
                aTag.rel = "noopener noreferrer";

                // make it thisPartItems[j]'s child
                thisPartItems[j].appendChild(aTag);
            }

            // common index for headingsArray 
            headingInnerHTMLs_index++;
        }
    }
}
//#endregion


//#region footerLinkAboutTextCSKHLinks, footerLinkAboutTextVeShopeeLinks (add href & innerHTML)
if (true) {
    var footerLinkAboutTextCSKHLinks = 
        document.querySelectorAll('.footer__link__about-text-CSKH .footer__link__about-text-CSKH__link');
    var footerLinkAboutTextVeShopeeLinks = 
        document.querySelectorAll('.footer__link__about-text-VeShopee .footer__link__about-text-VeShopee__link');


    var footerLinkAboutTextCSKHLinks_hrefs = [
        "https://help.shopee.vn/vn/s",
        "https://shopee.vn/blog",
        "https://help.shopee.vn/vn/s/article/C%C3%A1c-c%C3%A2u-h%E1%BB%8Fi-li%C3%AAn-quan-%C4%91%E1%BA%BFn-SHOPEE-MALL",
        "https://help.shopee.vn/vn/s/article/H%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-mua-h%C3%A0ng-t%E1%BA%A1i-Shopee-1542942315487",
        "https://help.shopee.vn/vn/s/article/L%C3%A0m-c%C3%A1ch-n%C3%A0o-%C4%91%E1%BB%83-b%E1%BA%AFt-%C4%91%E1%BA%A7u-%C4%91%C4%83ng-b%C3%A1n-tr%C3%AAn-Shopee-1542942317110",
        "https://help.shopee.vn/vn/s/topic/0TO6F000000QzBjWAK/thanh-to%C3%A1n",
        "https://help.shopee.vn/vn/s/article/Shopee-Xu-l%C3%A0-g%C3%AC-1542942386643",
        "https://help.shopee.vn/vn/s/topic/0TO6F000000QzKWWA0/v%E1%BA%ADn-chuy%E1%BB%83n",
        "https://help.shopee.vn/vn/s/article/C%C3%A1c-c%C3%A2u-h%E1%BB%8Fi-li%C3%AAn-quan-%C4%91%E1%BA%BFn-Tr%E1%BA%A3-h%C3%A0ng-Ho%C3%A0n-ti%E1%BB%81n-1542942680526",
        "https://help.shopee.vn/vn/s/contactus",
        "https://help.shopee.vn/vn/s/article/CH%C3%8DNH-S%C3%81CH-B%E1%BA%A2O-H%C3%80NH-T%E1%BA%A0I-SHOPEE-1542942563283"
    ];
    var footerLinkAboutTextCSKHLinks_innerHTMLs = [
        "Trung Tâm Trợ Giúp", 
        "Shopee Blog", 
        "Shopee Mall", 
        "Hướng Dẫn Mua Hàng",
        "Hướng Dẫn Bán Hàng", 
        "Thanh Toán",  
        "Shopee Xu", 
        "Vận Chuyển",
        "Trả Hàng & Hoàn Tiền",  
        "Chăm Sóc Khách Hàng", 
        "Chính Sách Bảo Hành"
    ];

    var footerLinkAboutTextVeShopeeLinks_hrefs = [
        "https://careers.shopee.com/about/",
        "https://careers.shopee.com/jobs",
        "https://shopee.vn/legaldoc/policies/",
        "https://shopee.vn/docs/3603",
        "https://shopee.vn/mall/",
        "https://banhang.shopee.vn/",
        "https://shopee.vn/flash_sale/",
        "https://shopee.vn/affiliate/",
        "mailto:media.vn%40shopee.com"
    ];
    var footerLinkAboutTextVeShopeeLinks_innerHTMLs = [
        "Giới Thiệu Về Shopee Việt Nam",
        "Tuyển Dụng", 
        "Điều Khoản Shopee", 
        "Chính Sách Bảo Mật", 
        "Chính Hãng",
        "Kênh Người Bán", 
        "Flash Sales", 
        "Chương Trình Tiếp Thị Liên Kết Shopee", 
        "Liên Hệ Với Truyền Thông"
    ];


    for(var i = 0; i < footerLinkAboutTextCSKHLinks.length; i++) {
        footerLinkAboutTextCSKHLinks[i].href = footerLinkAboutTextCSKHLinks_hrefs[i];
        footerLinkAboutTextCSKHLinks[i].innerHTML = footerLinkAboutTextCSKHLinks_innerHTMLs[i];
    }
    for(var i = 0; i < footerLinkAboutTextVeShopeeLinks.length; i++) {
        footerLinkAboutTextVeShopeeLinks[i].href = footerLinkAboutTextVeShopeeLinks_hrefs[i];
        footerLinkAboutTextVeShopeeLinks[i].innerHTML = footerLinkAboutTextVeShopeeLinks_innerHTMLs[i];
    }
}
//#endregion


//#region footer__link__copyright__country-and-area__link (add href & innerHTML)
if (true) {
    var footerLinkCopyrightCountryAndAreaLinks = 
        document.querySelectorAll('.footer__link__copyright__country-and-area__link');

    var footerLinkCopyrightCountryAndAreaLinks_hrefs = [
        "https://shopee.sg/",
        "https://shopee.co.id/",
        "https://shopee.tw/",
        "https://shopee.co.th/",
        "https://shopee.com.my/",
        "https://shopee.vn/",
        "https://shopee.ph/",
        "https://shopee.com.br/",
        "https://shopee.com.mx/",
        "https://shopee.com.co/",
        "https://shopee.cl/"
    ];
    var footerLinkCopyrightCountryAndAreaLinks_innerHTML = [
        "Singapore",
        "Indonesia",
        "Đài Loan",
        "Thái Lan",
        "Malaysia",
        "Việt Nam",
        "Philippines",
        "Brazil",
        "México",
        "Colombia",
        "Chile"
    ];

    for(var i = 0; i < footerLinkCopyrightCountryAndAreaLinks.length; i++) {
        footerLinkCopyrightCountryAndAreaLinks[i].href = footerLinkCopyrightCountryAndAreaLinks_hrefs[i];
        footerLinkCopyrightCountryAndAreaLinks[i].innerHTML = footerLinkCopyrightCountryAndAreaLinks_innerHTML[i];
    }
}
//#endregion


//#region footerPolicyTermsPartCompanyInfoTexts (add innerHTML)
var footerPolicyTermsPartCompanyInfoTexts = document.querySelectorAll('.footer__policy-terms__part__company-info__text');

var footerPolicyTermsPartCompanyInfoTexts_innerHTMLs = [
    'Công ty TNHH Shopee',
    'Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn',
    'Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)',
    'Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015',
    '© 2015 - Bản quyền thuộc về Công ty TNHH Shopee'
]

for(var i = 0; i < footerPolicyTermsPartCompanyInfoTexts.length; i++) {
    footerPolicyTermsPartCompanyInfoTexts[i].innerHTML = footerPolicyTermsPartCompanyInfoTexts_innerHTMLs[i];
}
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
