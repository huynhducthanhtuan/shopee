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
var initialWebsiteOffsetHeight = -html.getBoundingClientRect().y + header.style.height;
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

var checkValidPhoneNumberLogin = false;
var checkValidPasswordLogin = false;
//#endregion

//#region 4. Header
var headerLinksBecomeAShopeeSeller = document.querySelector('.header__links-become-a-shopee-seller');

var headerNotificationLink = document.querySelector('.header__notification__link');
var headerNotificationPopupWhenNotLogin = document.querySelector('.header__notification__popup--when-not-login');
var headerNotificationPopupWhenNotLoginRegisterBtn = document.querySelector('.header__notification__popup--when-not-login__register-btn');
var headerNotificationQuantity = document.querySelector('.header__notification__quantity');
var headerNotificationPopupWhenLoggedIn = document.querySelector('.header__notification__popup--when-logged-in');
var headerCartLink = document.querySelector('.header__cart__link');

var headerRegister = document.querySelector('.header__register');
var headerLogin = document.querySelector('.header__login');
var headerUserAccount = document.querySelector('.header__user-account');
//#endregion

//#region 5. Motion Parts
var motionPartSubBanner = document.querySelector('.motion-part__sub-banner');
var motionPartChat = document.querySelector('.motion-part__chat');

var giftBanner = document.querySelector('.gift-banner');
var giftBannerPopup = document.querySelector('.gift-banner__popup');
var giftBannerPopupCloseBtn = document.querySelector('.gift-banner__popup__close-btn');

var pageLoadBanner = document.querySelector('.page-load-banner');
var pageLoadBannerCloseBtn = document.querySelector('.page-load-banner__close-btn');
//#endregion
//#endregion


/* A. WEBSITE WHEN NOT LOGIN (INITIAL STATUS) */

//#region loadInitialWebsiteNoModal
function loadInitialWebsiteNoModal () {
    registerPage.style.display = 'none';
    loginPage.style.display = 'none';
    headerNotificationLink.removeAttribute('href');
    headerNotificationLink.style.cursor = 'default';
    headerNotificationQuantity.style.display = 'none';
    headerNotificationPopupWhenLoggedIn.style.display = 'none';
    headerUserAccount.style.display = 'none';
    headerCartLink.removeAttribute('href');
    headerCartLink.style.cursor = 'default';
    motionPartChat.style.display = 'none';
    
    body.style.overflow = 'visible!important';
    modal.style.display = 'none';
    pageLoadBanner.style.display = 'none';
    giftBannerPopup.style.display = 'none';
    app.style.position = 'absolute';
    content.style.position = 'relative';
    content.style.top = 0;

    app.style.display = 'block';
    header.style.display = 'block';
    headerRegister.style.display = 'block';
    headerLogin.style.display = 'block';
    container.style.display = 'block';
    footer.style.display = 'block';
    footerText.style.display = 'block';
    footerDirectory.style.display = 'block';

    window.scrollTo(0, initialWebsiteOffsetHeight);
}

loadInitialWebsiteNoModal();
//#endregion

//#region At registerPage/loginPage, click Shopee logo -> back initial page (no modal, no reload)
loginPageHeaderShopeeLink.addEventListener('click', function(e) {
    e.preventDefault();
    setTimeout(function() {
        loadInitialWebsiteNoModal();
    }, 200)
});

registerPageHeaderShopeeLink.addEventListener('click', function(e) {
    e.preventDefault();
    setTimeout(function() {
        loadInitialWebsiteNoModal();
    }, 200)
});
//#endregion 

//#region gift-banner onclick()
giftBanner.addEventListener('click', function() {
    setTimeout(function(){
        modal.style.display = 'block';
        giftBannerPopup.style.display = 'block';

        // prevent scrolling
        body.style.overflow = 'hidden';
    }, 100)
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

        window.scrollTo(0, 0);
    }, 500);
}

headerRegisterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // get current website offsetHeight
    initialWebsiteOffsetHeight = -html.getBoundingClientRect().y + header.style.height;
    loadRegisterPage();
    
    // set auto select for this input
    setTimeout(function () {
        registerPageContentFormInput.focus();
    }, 500)
});

headerNotificationPopupWhenNotLoginRegisterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // get current website offsetHeight
    initialWebsiteOffsetHeight = -html.getBoundingClientRect().y + header.style.height;
    loadRegisterPage();

    // set auto select for this input
    setTimeout(function () {
        registerPageContentFormInput.focus();
    }, 500)
});
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

//#region getAndUpdateConfirmationCodes
var confirmationCodes = [];
var currentConfirmationCode;

function getAndUpdateConfirmationCodes () {
    fetch("db.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) {
            confirmationCodes = datas.confirmationCodes;
        })
}

getAndUpdateConfirmationCodes();
//#endregion

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

            // random confirmation code
            setTimeout(function () {
                currentConfirmationCode = confirmationCodes[Math.floor(Math.random() * confirmationCodes.length)];
                alert(`Mã xác nhận của bạn là "${currentConfirmationCode}"`);
            }, 800);

            // set auto select for this input
            setTimeout(function () {
                registerPageConfirmationFirstFormContentInput.focus();
            }, 500)
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
    
// Related actions
registerPageContentFormAskForLoginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    setTimeout(function() {
        loadLoginPage();

        // set auto select for this input
        setTimeout(function () {
            loginPageContentFormFirstInput.focus();
        }, 500)

        window.scrollTo(0, 0);
    }, 200)
});

registerPageConfirmationFirstFormContentHelpResendBtn.addEventListener('click', function(e) {
    e.preventDefault();
    registerPageConfirmationFirstFormContentInput.value = '';

    // random confirmation code
    setTimeout(function () {
        currentConfirmationCode = confirmationCodes[Math.floor(Math.random() * confirmationCodes.length)];
        alert(`Mã xác nhận của bạn là "${currentConfirmationCode}"`);
    }, 1000);

    // set auto select for this input
    setTimeout(function () {
        registerPageConfirmationFirstFormContentInput.focus();
    }, 500)
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
registerPageConfirmationFirstFormContentHelpOtherWayBtn.addEventListener('click', function(e) {
    e.preventDefault();
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
                registerPageConfirmationSecondFormContentInput.value = "Wa.3n.en,mr6@YwT";
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

// set default value for this input
registerPageConfirmationSecondFormContentInput.value = "Wa.3n.en,mr6@YwT";

// set for mouseover - mouseleave action
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
                loadInitialWebsiteNoModal();
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
                    loadInitialWebsiteNoModal();

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

    // set auto select for this input
    setTimeout(function () {
        registerPageConfirmationFirstFormContentInput.focus();
    }, 500)
});

// #endregion

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

        // hide notify error and inputs's errors
        loginPageContentFormNotifyError.style.display = 'none';
        loginPageContentFormFirstInputPartInvalid.style.display = 'none';
        loginPageContentFormFirstInput.classList.remove('login-page__content-form__first-input--invalid');
        loginPageContentFormSecondInputPartInvalid.style.display = 'none';
        loginPageContentFormSecondInput.classList.remove('login-page__content-form__second-input--invalid');
        loginPageContentFormSecondInputMain.classList.remove('login-page__content-form__second-input-main--invalid');

        // set dault value in two inputs
        loginPageContentFormFirstInput.value = '';
        loginPageContentFormSecondInput.value = '';

        // set false for two inputs and not-allowed login button
        checkValidPhoneNumberLogin = false;
        checkValidPasswordLogin = false;
        loginPageContentFormLoginBtn.style.opacity = '0.7';
        loginPageContentFormLoginBtn.style.cursor = 'not-allowed';

        window.scrollTo(0, 0);
    }, 500);
}

function loginSuccess () {
    setTimeout(function () {
        // Disabled
        registerPage.style.display = 'none';
        loginPage.style.display = 'none';
        headerLinksBecomeAShopeeSeller.style.display = 'none';
        headerNotificationPopupWhenNotLogin.style.display = 'none';
        headerNotificationLink.href = 'https://shopee.vn/user/notifications/order';
        headerNotificationLink.style.cursor = 'pointer';
        headerRegister.style.display = 'none';
        headerLogin.style.display = 'none';
        headerCartLink.href = 'https://shopee.vn/cart';
        headerCartLink.style.cursor = 'pointer';
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

        window.scrollTo(0, 0);
    }, 1000);
} 

//#region click to Login / Logout / Register
headerLoginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // get current website offsetHeight
    initialWebsiteOffsetHeight = -html.getBoundingClientRect().y + header.style.height;
    loadLoginPage();

    // set auto select for this input
    setTimeout(function () {
        loginPageContentFormFirstInput.focus();
    }, 500)
});

headerNotificationPopupWhenNotLoginLoginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // get current website offsetHeight
    initialWebsiteOffsetHeight = -html.getBoundingClientRect().y + header.style.height;
    loadLoginPage();

    // set auto select for this input
    setTimeout(function () {
        loginPageContentFormFirstInput.focus();
    }, 500)
});

headerLogoutBtn.onclick = function () {
    setTimeout(function() {
        loadInitialWebsiteNoModal();
    }, 1000);
}

loginPageContentFormAskForRegisterRegisterBtn.addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(function () {
        loadRegisterPage();

        // set auto select for this input
        setTimeout(function () {
            registerPageContentFormInput.focus();
        }, 500)

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

//#region headerSearchFrameInput, headerSearchHistory - variable declaration
var headerSearchFrameInput = document.querySelector('.header__search-frame__input');
var headerSearchHistory = document.querySelector('.header__search-history');
var headerSearchFrameBtn = document.querySelector('.header__search-frame__btn');
var headerSearchHistoryList = document.querySelector('.header__search-history-list');
var headerSearchHistoryItemLinks = document.querySelectorAll('.header__search-history-item__link');
var headerSearchHistoryItemIndex = 0;
var headerSearchHistoryListInfoAPI = "https://shopee-hdttuan.web.app/headerSearchHistoryListInfo.json";
var headerSearchHistoryListInfoAPIFirstObiectId = 1;
//#endregion

//--> ADVANCED FEATURE (BUGS)
// //#region Logic ok but need an auth API to handle 
// //#region updateInDOMHeaderSearchHistoryList
// function updateInDOMHeaderSearchHistoryList (url) {
//     var options = {
//         method: 'GET', 
//         mode: 'cors',
//         cache: 'no-cache', 
//         credentials: 'same-origin', 
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         redirect: 'follow', 
//         referrerPolicy: 'no-referrer'
//     }

//     fetch(url, options)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (datas) {
//             var liTags = datas.map(function (data) {
//                 return `<li class="header__search-history-item">
//                             <a class="header__search-history-item__link" href="${data.href}">${data.innerHTML}</a>
//                         </li>`
//             });

//             var defaultLiTag = `<li class="header__search-history-item header__search-history-item--default">
//                     <a href="https://shopee.vn/search?noCorrection=true&searchPrefill=1037" class="header__search-history-item__link">
//                         Deal hot kèm 2 mã freeship
//                         <img src="./assests/img/header/header__search/Dealquocte.png" alt=""  class="header__search-history-item__link__dtth31k-img">
//                     </a>
//                 </li>`;

//             headerSearchHistoryList.innerHTML = defaultLiTag + liTags.join('');
//         })
// }

// updateInDOMHeaderSearchHistoryList(headerSearchHistoryListInfoAPI);
// //#endregion

// //#region (f) Work with API
// function deleteObjInAPI (url, id) {
//     var options = {
//         method: 'DELETE', 
//         mode: 'cors',
//         cache: 'no-cache', 
//         credentials: 'same-origin', 
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         redirect: 'follow', 
//         referrerPolicy: 'no-referrer'
//     }

//     fetch(`${url}/${id}`, options)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(datas) {
//             console.log(datas);
//         })
//         .catch(function(err) {
//             console.log(err);
//         })
// }

// function createObjInAPI (url, data) {
//     var options = {
//         method: 'POST', 
//         mode: 'cors',
//         cache: 'no-cache', 
//         credentials: 'same-origin', 
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         redirect: 'follow', 
//         referrerPolicy: 'no-referrer',
//         body: JSON.stringify(data) 
//     }

//     fetch(url, options)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(datas){
//             console.log(datas)
//         })
//         .catch(function(err) {
//             console.log(err);
//         })
// }
// //#endregion

// //#region (f) updateHeaderSearchHistoryItemLinksInfo
// function addAndUpdateAPI (data) {
//     var length = 3;
//     if (length == 10) {
//         // 0,1,2,3,4,5,6,7,8,9
//         // DELETE(id = 1) POST(id = 10)
//         deleteObjInAPI(headerSearchHistoryListInfoAPI, headerSearchHistoryListInfoAPIFirstObiectId);
//         createObjInAPI(headerSearchHistoryListInfoAPI, data);

//         // id++;
//         headerSearchHistoryListInfoAPIFirstObiectId++;
//     } 
//     else {
//         // 0,1,2,3,4
//         // PUT (id = 5)
//         createObjInAPI(headerSearchHistoryListInfoAPI, data);

//         // id++;
//         headerSearchHistoryListInfoAPIFirstObiectId++;
//     }
// }
// //#endregion
// //#endregion

//#region (f) removeHeaderSearchHistoryItemLinksHover
function removeHeaderSearchHistoryItemLinksHover () {
    headerSearchHistoryItemLinks.forEach(function (headerSearchHistoryItemLink) {
        if (headerSearchHistoryItemLink.classList.contains('header__search-history-item__link--hover')) {
            headerSearchHistoryItemLink.classList.remove('header__search-history-item__link--hover');
        }
    });
}
//#endregion

//#region headerSearchFrameInput onclick(), onblur()
headerSearchFrameInput.onclick = function () {
    headerSearchHistory.style.display = 'block';
}

headerSearchFrameInput.onblur = function () {
    // return default search option index, remove hover on all of item
    headerSearchHistoryItemIndex = 0;
    removeHeaderSearchHistoryItemLinksHover();

    setTimeout(function() {
        headerSearchHistory.style.display = 'none';
    }, 200);
}
//#endregion

//#region headerSearchFrameInput onkeydown()
headerSearchFrameInput.addEventListener('keydown', function(e) {
    // update nodelist headerSearchHistoryItemLinks
    headerSearchHistoryItemLinks = document.querySelectorAll('.header__search-history-item__link');

    switch (e.code) {
        case 'Enter': {
            e.preventDefault();
            headerSearchFrameBtn.click();
            break;
        }
        case 'ArrowUp': {
            // 1. update headerSearchHistoryItemLength
            var headerSearchHistoryItemLength = headerSearchHistoryItemLinks.length;

            // 2. set next index: 
            // if initial position (in input) or being active on first element
            if (headerSearchHistoryItemIndex == 0 || headerSearchHistoryItemIndex == 1) {
                headerSearchHistoryItemIndex = headerSearchHistoryItemLength;
            } else {
                headerSearchHistoryItemIndex--;
            }

            // 2. add class hover on next element
            removeHeaderSearchHistoryItemLinksHover();
            headerSearchHistoryItemLinks[headerSearchHistoryItemIndex-1].classList.add('header__search-history-item__link--hover');

            // 3. show current text in headerSearchFrameInput is innerText of headerSearchHistoryItemCurrent
            var headerSearchHistoryItemCurrent = document.querySelector(`
                .header__search-history-item:nth-child(${headerSearchHistoryItemIndex}) > .header__search-history-item__link`);
            headerSearchFrameInput.value = headerSearchHistoryItemCurrent.innerText.trim();

            break;
        }
        case 'ArrowDown': {
            // 1. update headerSearchHistoryItemLength
            var headerSearchHistoryItemLength = headerSearchHistoryItemLinks.length;

            // 2. set next index: 
            // when being active on last element
            if (headerSearchHistoryItemIndex == headerSearchHistoryItemLength) {
                headerSearchHistoryItemIndex = 1;
            } else {
                headerSearchHistoryItemIndex++;
            }

            // 2. add class hover on next element
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

//#region headerSearchFrameBtn onclick() 
headerSearchFrameBtn.addEventListener('click', function(e) {
    
    if (headerSearchFrameInput.value != '') {
        var innerHTML = headerSearchFrameInput.value;
        var href = `https://shopee.vn/search?keyword=${innerHTML}`;

        /* RUN OK BUT NEED AUTH API
        var data = {
            href: href, 
            innerHTML: innerHTML
        };
        addAndUpdateAPI(data);
        updateInDOMHeaderSearchHistoryList(headerSearchHistoryListInfoAPI); */

        // update headerSearchFrameBtn.href
        headerSearchFrameBtn.href = href;
    }   

    // -> no need handle, it will take the default action
});
//#endregion


//#region updateInDOMHeaderSearchHistoryKeywordsList
var headerSearchHistoryKeywordsList = document.querySelector('.header__search-history-keywords-list');

function updateInDOMHeaderSearchHistoryKeywordsList () {
    fetch("db.json") 
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) {
            var aTags = datas.headerSearchHistoryKeywordsListInfo.map(function (data) {
                return `<a class="header__search-history-keywords-item" 
                    href="${data.href}">${data.innerHTML}</a>`;
            });
            headerSearchHistoryKeywordsList.innerHTML = aTags.join('');
        })
}

updateInDOMHeaderSearchHistoryKeywordsList ();
//#endregion


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
                        <a href="${data.href}" class="header__notification__popup--when-logged-in__link">
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
                    <a class="slider__favourite-selections__link" href="${data.href}">
                        <img class="slider__favourite-selections__link-img" src="${data.image}">
                        <h4 class="slider__favourite-selections__link-text">${data.text}</h4>
                    </a>`;
            });
            sliderFavouriteSelections.innerHTML = aTags.join('');
        })
}

updateInDOMSliderFavouriteSelections();
//#endregion


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
            <a href="${datas.outstandingHotSellingProductsInfo.outstandingHotSellingProductsInfoInfo.href}" class="outstanding__hot-selling-products__info__view-more-btn">
                Xem thêm <i class="fas fa-chevron-right"></i>
            </a>
        </div>`;

    var aTags = datas.outstandingHotSellingProductsInfo.outstandingHotSellingProductsListInfo.map(function (data) {
        return `<a href="${data.href}" class="outstanding__hot-selling-products__item">
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
            <a href="${datas.outstandingHotBrandsInfo.outstandingHotBrandsInfoInfo.href}" class="outstanding__hot-brands__info__view-more-btn">
                Xem thêm <i class="fas fa-chevron-right"></i>
            </a>
        </div>`;

    var aTags = datas.outstandingHotBrandsInfo.outstandingHotBrandsListInfo.map(function (data) {
        return `
            <a href="${data.href}" class="outstanding__hot-brands__item">
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
                        <a href="${datas.directoryMainItemListInfo[i].href}" class="directory__main__item__link">
                            <img src="${datas.directoryMainItemListInfo[i].itemImage}" alt="" class="directory__main__item__img">
                            <span class="directory__main__item__title">${datas.directoryMainItemListInfo[i].itemTitle}</span>
                        </a>
                        <a href="${datas.directoryMainItemListInfo[i+1].href}" class="directory__main__item__link">
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

//#region directoryMainBtns onclick() 
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
            <a href="${flashSaleMainListInfo[i].href}" class="flash-sale__main__link">
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
            </a>`;
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

//#region updateInDOMFlashSalePart
var underFlashSalePart = document.querySelector('.under-flash-sale__part');

function updateInDOMFlashSalePart () {
    fetch("db.json") 
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) {
            var aTags = datas.underFlashSalePartInfo.map(function(data) {
                return `<a href="${data.href}" class="under-flash-sale__link">
                    <img src="${data.image}" alt="" class="under-flash-sale__img">   
                </a>`;
            });
            
            underFlashSalePart.innerHTML = aTags.join('');
        })
}

updateInDOMFlashSalePart();
//#endregion


//#region updateInDOMShopeeMallMainMotionLinkAndQueueItems
var shopeeMallMainMotion = document.querySelector('.shopee-mall__main__motion');
var shopeeMallMainMotionLink = document.querySelector('.shopee-mall__main__motion__link');
var shopeeMallMainMotionImage = document.querySelector('.shopee-mall__main__motion__img');
var shopeeMallMainMotionQueueItems = document.querySelectorAll('.shopee-mall__main__motion__queue-item');

function updateInDOMShopeeMallMainMotionLinkAndQueueItems () {
    fetch("db.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (datas) {
            handleShopeeMallMainMotionLinkAndQueueItems (datas.shopeeMallMainMotionLinkInfo);
        })
}

function handleShopeeMallMainMotionLinkAndQueueItems (shopeeMallMainMotionLinkInfo) {
    var currentIndex = 0;
    var queueLength = shopeeMallMainMotionQueueItems.length;
    
    for(var shopeeMallMainMotionQueueItem of shopeeMallMainMotionQueueItems) {
        shopeeMallMainMotionQueueItem.addEventListener('click', function(e) {
            e.preventDefault();

            var parent = this.parentNode;
            // get this's index in parent's queue
            var index = Array.prototype.indexOf.call(parent.children, this);
    
            // update current item
            shopeeMallMainMotionQueueItems[currentIndex].classList.remove('shopee-mall__main__motion__queue-item--current');
            shopeeMallMainMotionQueueItems[index].classList.add('shopee-mall__main__motion__queue-item--current');
            
            // update src, href
            shopeeMallMainMotionLink.href = shopeeMallMainMotionLinkInfo[index].href;
            shopeeMallMainMotionImage.src = shopeeMallMainMotionLinkInfo[index].image;
    
            // update currentIndex
            currentIndex = index;
        })
    }
    
    setInterval (function () {
        if(currentIndex < queueLength-1) {
            shopeeMallMainMotionQueueItems[currentIndex].classList.remove('shopee-mall__main__motion__queue-item--current');
            shopeeMallMainMotionQueueItems[currentIndex + 1].classList.add('shopee-mall__main__motion__queue-item--current');
            currentIndex++;
        } else {
            shopeeMallMainMotionQueueItems[queueLength - 1].classList.remove('shopee-mall__main__motion__queue-item--current');
            shopeeMallMainMotionQueueItems[0].classList.add('shopee-mall__main__motion__queue-item--current');
            currentIndex = 0;
        }
        
        // update src, href
        shopeeMallMainMotionLink.href = shopeeMallMainMotionLinkInfo[currentIndex].href;
        shopeeMallMainMotionImage.src = shopeeMallMainMotionLinkInfo[currentIndex].image;
    }, 5000);
}

updateInDOMShopeeMallMainMotionLinkAndQueueItems();
//#endregion

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
                <a href="${shopeeMallMainProductListInfo[i].href}" class="shopee-mall__main__product-item__link">
                    <img src="${shopeeMallMainProductListInfo[i].image}" alt="" class="shopee-mall__main__product-item__link__img">
                    <span class="shopee-mall__main__product-item__link__text">${shopeeMallMainProductListInfo[i].text}</span>
                </a>
                <a href="${shopeeMallMainProductListInfo[i+1].href}" class="shopee-mall__main__product-item__link">
                    <img src="${shopeeMallMainProductListInfo[i+1].image}" alt="" class="shopee-mall__main__product-item__link__img">
                    <span class="shopee-mall__main__product-item__link__text">${shopeeMallMainProductListInfo[i+1].text}</span>
                </a>
            </li>`
    }

    // special case: the last li element
    liTags += `
        <li class="shopee-mall__main__product-item">
            <a href="${shopeeMallMainProductListInfo[i].href}" class="shopee-mall__main__product-item__link">
                <img src="${shopeeMallMainProductListInfo[i].image}" alt="" class="shopee-mall__main__product-item__link__img">
                <span class="shopee-mall__main__product-item__link__text">${shopeeMallMainProductListInfo[i].text}</span>
            </a>
            <div class="shopee-mall__main__product-item__link__exception">
                <a href="https://shopee.vn/mall" class="shopee-mall__heading__view-all-btn">
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
                    <a href="${data.href}" class="search-trending__main__item">
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
        <a href="${topSearchMainListInfo[0].href}" class="top-search__main__link">
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
            <a href="${topSearchMainListInfo[i].href}" class="top-search__main__link">
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


//#region updateInDOMTodaySuggestionMainTabMain
var todaySuggestionMainTabMain = document.querySelector('.today-suggestion__main__tab-main');

function updateInDOMTodaySuggestionMainTabMain () {
    fetch("db.json")
        .then (function(response) {
            return response.json();
        })
        .then (function(datas) {
            handleUpdateInDOMTodaySuggestionMainTabMain(datas.todaySuggestionMainTabMainInfo);
        })
}

function handleUpdateInDOMTodaySuggestionMainTabMain (todaySuggestionMainTabMainInfo) {
    var listDivTags = '';

    for(var i = 0; i < todaySuggestionMainTabMainInfo.length; i++) {
        var listDivTag = '', itemDivTags = '', itemDivTag = '';

        for (var j = 0; j < todaySuggestionMainTabMainInfo[i].length; j++) {
            var frameImage = (todaySuggestionMainTabMainInfo[i][j].frameImage) ?
                `<img src="${todaySuggestionMainTabMainInfo[i][j].frameImage}" class="today-suggestion__main-product__frame-img" alt="">`
                : "";
            
            var productSaleOff = (todaySuggestionMainTabMainInfo[i][j].saleOffText) ?
                `<div class="today-suggestion__main-product__sale-off">
                    <img src="./assests/img/container/today-suggestion/left-serrated.png" class="today-suggestion__main-product__sale-off__left-serrated">
                    <span class="today-suggestion__main-product__sale-off__text">${todaySuggestionMainTabMainInfo[i][j].saleOffText}</span>
                    <img src="./assests/img/container/today-suggestion/right-serrated.png" class="today-suggestion__main-product__sale-off__right-serrated">
                </div>`
                : "";

            var favouriteLabel = "", favouriteLabelActiveClass = "", favouriteLabelInnerHTML = "";
            if (todaySuggestionMainTabMainInfo[i][j].favouriteLabel) {
                if (todaySuggestionMainTabMainInfo[i][j].favouriteLabel == 'Yêu thích') {
                    favouriteLabelActiveClass = 'today-suggestion__main-product__favourite-label--yeuthich';
                    favouriteLabelInnerHTML = "Yêu thích";
                }
                else {
                    if (todaySuggestionMainTabMainInfo[i][j].favouriteLabel == 'Yêu thích+') {
                        favouriteLabelActiveClass = 'today-suggestion__main-product__favourite-label--yeuthichplus';
                        favouriteLabelInnerHTML = 
                            '<img src="./assests/img/container/today-suggestion/yeuthichplus.png" alt="" class="today-suggestion__main-product__favourite-label--yeuthichplus__img">';
                        
                    }
                    else {
                        favouriteLabelActiveClass = 'today-suggestion__main-product__favourite-label--mall';
                        favouriteLabelInnerHTML = 
                            '<img src="./assests/img/container/today-suggestion/mall.png" alt="" class="today-suggestion__main-product__favourite-label--mall__img">';
                    }
                }

                favouriteLabel = 
                    `<div class="today-suggestion__main-product__favourite-label ${favouriteLabelActiveClass}">
                        ${favouriteLabelInnerHTML}
                    </div>`;
            }
 
            var saleOffLabel = (todaySuggestionMainTabMainInfo[i][j].saleOffLabelPercent) ?
                `<div class="today-suggestion__main-product__sale-off-label">
                    <span class="today-suggestion__main-product__sale-off-label__percent">${todaySuggestionMainTabMainInfo[i][j].saleOffLabelPercent}</span>
                    <span class="today-suggestion__main-product__sale-off-label__text">giảm</span>
                </div>`
                : "";

            var sponsorLabel = (todaySuggestionMainTabMainInfo[i][j].sponsorLabel) ?
                '<div class="today-suggestion__main-product__sponsor-label">Tài Trợ</div>'
                : "";


            itemDivTag = `
                <div class="today-suggestion__main-item">
                    <a href="${todaySuggestionMainTabMainInfo[i][j].productLink}" class="today-suggestion__main-product">
                        <div>
                            <img alt="" src="${todaySuggestionMainTabMainInfo[i][j].productImage}" class="today-suggestion__main-product__product-img">
                            ${frameImage}
                            <div class="today-suggestion__main-product__part">
                                <span class="today-suggestion__main-product__name">${todaySuggestionMainTabMainInfo[i][j].name}</span>
                                ${productSaleOff}
                                <div class="today-suggestion__main-product__price-and-selled-quantity">
                                    <span class="today-suggestion__main-product__price">${todaySuggestionMainTabMainInfo[i][j].price}</span>
                                    <span class="today-suggestion__main-product__selled-quantity">${todaySuggestionMainTabMainInfo[i][j].selledQuantity}</span>
                                </div>
                            </div>
                            ${favouriteLabel}
                            ${saleOffLabel}
                            ${sponsorLabel}
                            <div class="today-suggestion__main-product__hover-label">Tìm sản phẩm tương tự</div>
                        </div>
                    </a>
                </div>`;
            itemDivTags += itemDivTag;
        }

        listDivTag = `<div class="today-suggestion__main-list">${itemDivTags}</div>`;
        listDivTags += listDivTag;
    }

    todaySuggestionMainTabMain.innerHTML = listDivTags;
}

updateInDOMTodaySuggestionMainTabMain();
//#endregion 

//#region handleCSSTodaySuggestionMainTabMain
function handleCSSTodaySuggestionMainTabMain () {

    for(var i = 0; i < 8; i++) {
        var check = (document.querySelectorAll(`.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${i+1}) 
            .today-suggestion__main-product__sale-off`).length  >=  1);
    
        var list = document.querySelector(`.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${i+1})`);
        var items = document.querySelectorAll(`.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${i+1}) 
            .today-suggestion__main-item`);
        var products = document.querySelectorAll(`.today-suggestion__main__tab-main .today-suggestion__main-list:nth-child(${i+1}) 
            .today-suggestion__main-product`);
        
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
}

setTimeout(function () {
    handleCSSTodaySuggestionMainTabMain();
}, 2000)
//#endregion 

//#region updateInDOMTodaySuggestionMainTabSuperSale88
var todaySuggestionMainTabSuperSale88 = document.querySelector('.today-suggestion__main__tab-super-sale-8-8');

function updateInDOMTodaySuggestionMainTabSuperSale88 () {
    fetch("db.json")
        .then (function(response) {
            return response.json();
        })
        .then (function(datas) {
            handleUpdateInDOMTodaySuggestionMainTabSuperSale88(datas.todaySuggestionMainTabSuperSale88Info);
        })
}

function handleUpdateInDOMTodaySuggestionMainTabSuperSale88 (todaySuggestionMainTabSuperSale88Info) {
    var listDivTags = '';

    for(var i = 0; i < todaySuggestionMainTabSuperSale88Info.length; i++) {
        var listDivTag = '', itemDivTags = '', itemDivTag = '';

        for (var j = 0; j < todaySuggestionMainTabSuperSale88Info[i].length; j++) {
            var frameImage = (todaySuggestionMainTabSuperSale88Info[i][j].frameImage) ?
                `<img src="${todaySuggestionMainTabSuperSale88Info[i][j].frameImage}" class="today-suggestion__main-product__frame-img" alt="">`
                : "";
            
            var productSaleOff = (todaySuggestionMainTabSuperSale88Info[i][j].saleOffText) ?
                `<div class="today-suggestion__main-product__sale-off">
                    <img src="./assests/img/container/today-suggestion/left-serrated.png" class="today-suggestion__main-product__sale-off__left-serrated">
                    <span class="today-suggestion__main-product__sale-off__text">${todaySuggestionMainTabSuperSale88Info[i][j].saleOffText}</span>
                    <img src="./assests/img/container/today-suggestion/right-serrated.png" class="today-suggestion__main-product__sale-off__right-serrated">
                </div>`
                : "";

            var favouriteLabel = "", favouriteLabelActiveClass = "", favouriteLabelInnerHTML = "";
            if (todaySuggestionMainTabSuperSale88Info[i][j].favouriteLabel) {
                if (todaySuggestionMainTabSuperSale88Info[i][j].favouriteLabel == 'Yêu thích') {
                    favouriteLabelActiveClass = 'today-suggestion__main-product__favourite-label--yeuthich';
                    favouriteLabelInnerHTML = "Yêu thích";
                }
                else {
                    if (todaySuggestionMainTabSuperSale88Info[i][j].favouriteLabel == 'Yêu thích+') {
                        favouriteLabelActiveClass = 'today-suggestion__main-product__favourite-label--yeuthichplus';
                        favouriteLabelInnerHTML = 
                            '<img src="./assests/img/container/today-suggestion/yeuthichplus.png" alt="" class="today-suggestion__main-product__favourite-label--yeuthichplus__img">';
                    }
                    else {
                        favouriteLabelActiveClass = 'today-suggestion__main-product__favourite-label--mall';
                        favouriteLabelInnerHTML = 
                            '<img src="./assests/img/container/today-suggestion/mall.png" alt="" class="today-suggestion__main-product__favourite-label--mall__img">';
                    }
                }

                favouriteLabel = 
                    `<div class="today-suggestion__main-product__favourite-label ${favouriteLabelActiveClass}">
                        ${favouriteLabelInnerHTML}
                    </div>`;
            }
 
            var saleOffLabel = (todaySuggestionMainTabSuperSale88Info[i][j].saleOffLabelPercent) ?
                `<div class="today-suggestion__main-product__sale-off-label">
                    <span class="today-suggestion__main-product__sale-off-label__percent">${todaySuggestionMainTabSuperSale88Info[i][j].saleOffLabelPercent}</span>
                    <span class="today-suggestion__main-product__sale-off-label__text">giảm</span>
                </div>`
                : "";

            var sponsorLabel = (todaySuggestionMainTabSuperSale88Info[i][j].sponsorLabel) ?
                '<div class="today-suggestion__main-product__sponsor-label">Tài Trợ</div>'
                : "";


            itemDivTag = `
                <div class="today-suggestion__main-item">
                    <a href="${todaySuggestionMainTabSuperSale88Info[i][j].productLink}" class="today-suggestion__main-product">
                        <div>
                            <img alt="" src="${todaySuggestionMainTabSuperSale88Info[i][j].productImage}" class="today-suggestion__main-product__product-img">
                            ${frameImage}
                            <div class="today-suggestion__main-product__part">
                                <span class="today-suggestion__main-product__name">${todaySuggestionMainTabSuperSale88Info[i][j].name}</span>
                                ${productSaleOff}
                                <div class="today-suggestion__main-product__price-and-selled-quantity">
                                    <span class="today-suggestion__main-product__price">${todaySuggestionMainTabSuperSale88Info[i][j].price}</span>
                                    <span class="today-suggestion__main-product__selled-quantity">${todaySuggestionMainTabSuperSale88Info[i][j].selledQuantity}</span>
                                </div>
                            </div>
                            ${favouriteLabel}
                            ${saleOffLabel}
                            ${sponsorLabel}
                            <div class="today-suggestion__main-product__hover-label">Tìm sản phẩm tương tự</div>
                        </div>
                    </a>
                </div>`;
            itemDivTags += itemDivTag;
        }

        listDivTag = `<div class="today-suggestion__main-list">${itemDivTags}</div>`;
        listDivTags += listDivTag;
    }

    todaySuggestionMainTabSuperSale88.innerHTML = listDivTags;
}

updateInDOMTodaySuggestionMainTabSuperSale88();
//#endregion 

//#region handleCSSTodaySuggestionMainTabSuperSale88
function handleCSSTodaySuggestionMainTabSuperSale88 () {

    for(var i = 0; i < 8; i++) {
        var check = (document.querySelectorAll(`.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${i+1}) 
            .today-suggestion__main-product__sale-off`).length  >=  1);
    
        var list = document.querySelector(`.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${i+1})`);
        var items = document.querySelectorAll(`.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${i+1}) 
            .today-suggestion__main-item`);
        var products = document.querySelectorAll(`.today-suggestion__main__tab-super-sale-8-8 .today-suggestion__main-list:nth-child(${i+1}) 
            .today-suggestion__main-product`);
        
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
}

setTimeout(function () {
    handleCSSTodaySuggestionMainTabSuperSale88();
}, 2000)
//#endregion 

//#region todaySuggestionHeadings onclick()
var todaySuggestion = document.querySelector('.today-suggestion');
var todaySuggestionHeadingTabMain = document.querySelector('.today-suggestion__heading-tab-main');
var todaySuggestionHeadingTabSuperSale88 = document.querySelector('.today-suggestion__heading-tab-super-sale-8-8');
var todaySuggestionMainViewAllBtn = document.querySelector('.today-suggestion__main__view-all-btn');
var todaySuggestionMain = document.querySelector('.today-suggestion__main');
var todaySuggestionMainTabMain = document.querySelector('.today-suggestion__main__tab-main');
var todaySuggestionMainTabSuperSale88 = document.querySelector('.today-suggestion__main__tab-super-sale-8-8');


todaySuggestionHeadingTabMain.addEventListener('click', function() {
    setTimeout(function () {
        if(todaySuggestionHeadingTabSuperSale88.classList.contains('today-suggestion__heading-tab--active')) {
            todaySuggestionHeadingTabSuperSale88.classList.remove('today-suggestion__heading-tab--active');
        }   
        if(! todaySuggestionHeadingTabMain.classList.contains('today-suggestion__heading-tab--active')) {
            todaySuggestionHeadingTabMain.classList.add('today-suggestion__heading-tab--active');
        }
    
        todaySuggestionMainTabSuperSale88.style.display = 'none';
        todaySuggestionMainTabMain.style.display = 'block';
        todaySuggestion.style.height = '254rem';
        todaySuggestionMainViewAllBtn.href = 'https://shopee.vn/daily_discover?pageNumber=2';
    
        window.scrollTo(0, todaySuggestion.offsetTop);
    }, 200);
});


todaySuggestionHeadingTabSuperSale88.addEventListener('click', function() {
    setTimeout(function () {
        if(todaySuggestionHeadingTabMain.classList.contains('today-suggestion__heading-tab--active')) {
            todaySuggestionHeadingTabMain.classList.remove('today-suggestion__heading-tab--active');
        }   
        if(! todaySuggestionHeadingTabSuperSale88.classList.contains('today-suggestion__heading-tab--active')) {
            todaySuggestionHeadingTabSuperSale88.classList.add('today-suggestion__heading-tab--active');
        }
    
        todaySuggestionMainTabMain.style.display = 'none';
        todaySuggestionMainTabSuperSale88.style.display = 'block';
        todaySuggestion.style.height = '318rem';
        todaySuggestionMainViewAllBtn.href = 'https://shopee.vn/double_eleven_big_sale/2';
    
        window.scrollTo(0, todaySuggestion.offsetTop);
    }, 200);
});

//#endregion


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
                var aTag = `<a class="footer__directory__item__part__item" href="${footerDirectoryListInfo[i][j].footerDirectoryItemPartListInfo[k].href}">
                    ${footerDirectoryListInfo[i][j].footerDirectoryItemPartListInfo[k].innerHTML}
                </a>`;
                
                aTags += aTag;
            }
            
            var divTag = `
                <div class="footer__directory__item__part">
                    <a href="${footerDirectoryListInfo[i][j].heading.href}" class="footer__directory__item__part__heading">
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
                        <a href="${data.href}" class="footer__link__about-text-CSKH__link">${data.innerHTML}</a>
                    </div>`
            })
            // add innerHTML for this element
            footerLinkAboutTextCSKH.innerHTML = divTags.join('');
        })
}

updateInDOMFooterLinkAboutTextCSKH();
//#endregion

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
                        <a href="${data.href}" class="footer__link__about-text-VeShopee__link">${data.innerHTML}</a>
                    </div>`
            })
            // add innerHTML for this element
            footerLinkAboutTextVeShopee.innerHTML = divTags.join('');
        })
}

updateInDOMFooterLinkAboutTextVeShopee();
//#endregion


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
                    <a href="${data.href}" class="footer__link__copyright__country-and-area__link">${data.innerHTML}</a>`;
            })

            // add innerHTML for this element
            footerLinkCopyrightCountryAndAreaList.innerHTML = aTags.join('');
        })
}

updateInDOMFooterLinkCopyrightCountryAndAreaList();
//#endregion


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
                        <a href="${data.href}" class="footer__policy-terms__part__title__link">${data.innerHTML}</a>
                    </div>`;
            })
            footerPolicyTermsPartTitle.innerHTML = divTags.join('');
        })
}

updateInDOMFooterPolicyTermsPartTitle();
//#endregion

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
