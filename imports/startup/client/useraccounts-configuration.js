
AccountsTemplates.configure({
  defaultLayout: 'Appbody',
  defaultLayoutRegions: {
    nav: 'top',
    footer: 'footer'
    },
  defaultContentRegion: 'main',
  confirmPassword: true,
  enablePasswordChange: true,
  showForgotPasswordLink: true,
  enablePasswordChange: true,
 sendVerificationEmail: true,
 confirmPassword: true,
 forbidClientAccountCreation: false,
 showPlaceholders: true,
 continuousValidation: true,
 negativeValidation: true
});

AccountsTemplates.configure({
    defaultLayoutType: 'blaze', // Optional, the default is 'blaze'
    defaultLayout: 'Appbody',
    defaultLayoutRegions: {
        nav: 'top',
        footer: 'footer'
    },
    defaultContentRegion: 'main'
});

AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin',
 layoutType: 'blaze',
defaultLayoutRegions: {        nav: 'top',
        footer: 'footer'},
 contentRegion: 'main',
 layoutTemplate: 'Appbody',
 redirect: '/register'
});

AccountsTemplates.configureRoute('signUp', {
  name: 'join',
  path: '/join',
  defaultLayoutRegions: {        nav: 'top',
          footer: 'footer'},
 layoutType: 'blaze',
 contentRegion: 'main',
 layoutTemplate: 'Appbody'
});

AccountsTemplates.configureRoute('forgotPwd', {
  name: 'forgotPwd',
  path: '/forgot-password',
  defaultLayoutRegions: {},
  layoutType: 'blaze',
  contentRegion: 'main',
  layoutTemplate: 'AppBody'
});

AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetPwd',
  path: '/reset-password',
  defaultLayoutRegions: {},
 layoutType: 'blaze',
 contentRegion: 'main',
 layoutTemplate: 'AppBody'
});

var mysignUpFlow = function (error) {
  if (!error) {
 Router.go('/register');
 }
};
