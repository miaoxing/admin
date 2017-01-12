describe('admin/login 管理员登录', function () {
  before(function () {
    casper.start(casper.config.baseUrl + '/admin/login');
  });

  it('应该显示登录按钮', function () {
    casper.then(function () {
      'button[type="submit"]'.should.be.inDOM.and.be.visible.and.contain.text('登录');
    });
  });

  it('当未输入用户名时,应该提示用户名为空', function () {
    casper.then(function () {
      this.fill('form.login-form', {
        username: ''
      }, true);
    });

    casper.waitForSelectorTextChange('.error-message', function () {
      '.error-message'.should.contain.text('用户名不能为空');
    });
  });

  it('当未输入密码时,应该提示密码为空', function () {
    casper.then(function () {
      this.fill('form', {
        username: 'admin'
      }, true);
    });

    casper.waitForSelectorTextChange('.error-message', function () {
      '.error-message'.should.contain.text('密码不能为空');
    });
  });

  it('当输入错误用户名时,应该提示错误', function () {
    casper.then(function () {
      this.fill('form', {
        username: 'not-exist-user',
        password: 'not-exist-password'
      }, true);
    });

    casper.waitForSelectorTextChange('.error-message', function () {
      '.error-message'.should.contain.text('用户名不存在或密码错误');
    });
  });

  it('当输入错误密码时,应该提示错误', function () {
    casper.then(function () {
      this.fill('form', {
        username: 'admin',
        password: 'not-exist-password'
      }, true);
    });

    casper.waitForSelectorTextChange('.error-message', function () {
      '.error-message'.should.contain.text('用户不存在或密码错误');
    });
  });

  it('当用户未启用时,应该提示错误', function () {
    casper.then(function () {
      this.fill('form', {
        username: 'admin-not-enable',
        password: 'admin-not-enable'
      }, true);
    });

    casper.waitForSelectorTextChange('.error-message', function () {
      '.error-message'.should.contain.text('用户未启用,无法登录');
    });
  });

  it('当输入正确用户名密码,登录成功,跳转到默认首页', function () {
    casper.then(function () {
      this.fill('form', {
        username: 'admin',
        password: 'admin'
      }, true);
    });

    casper.waitForSelector('.user-menu', function () {
      '.user-menu'.should.contain.text('我的账号');
    });
  });
});

describe('admin/logout 管理员退出登录', function () {
  it('触发退出登录地址,跳转到登录页面', function () {
    casper.start(casper.config.baseUrl + '/user/logout');

    casper.then(function (response) {
      response.url.should.contain('admin/login');
    });
  });
});
