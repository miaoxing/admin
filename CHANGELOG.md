## [0.3.2](https://github.com/miaoxing/admin/compare/v0.3.1...v0.3.2) (2021-03-05)





### Dependencies

* **@miaoxing/app:** upgrade from 0.2.6 to 0.2.7
* **@miaoxing/file:** upgrade from 0.1.1 to 0.1.2

## [0.3.1](https://github.com/miaoxing/admin/compare/v0.3.0...v0.3.1) (2021-03-05)





### Dependencies

* **miaoxing:** upgrade from 0.1.6 to 0.1.7
* **@mxjs/upload:** upgrade from 0.3.0 to 0.3.1
* **@miaoxing/dev:** upgrade from 6.1.2 to 6.2.0
* **@miaoxing/app:** upgrade from 0.2.5 to 0.2.6
* **@miaoxing/file:** upgrade from 0.1.0 to 0.1.1

# [0.3.0](https://github.com/miaoxing/admin/compare/v0.2.4...v0.3.0) (2021-03-05)


### Bug Fixes

* 切换页面，要重新计算左侧菜单 ([88aa03c](https://github.com/miaoxing/admin/commit/88aa03c66b5e6acac2713a21272247555e1dd282))
* 解决在子页面刷新后，侧边菜单未选中的问题 ([e7203d0](https://github.com/miaoxing/admin/commit/e7203d05d740689792dd92c7aead61219db030b7))
* 退出登录地址错误 ([abf1670](https://github.com/miaoxing/admin/commit/abf16701dffcf7ef92f0bb13fb55df04e0641539))


### Features

* **theme:** 增加 `danger` 颜色 ([5ba81d4](https://github.com/miaoxing/admin/commit/5ba81d4b18250dd5a909014d70445b58499be8bd))


### Code Refactoring

* 更改头像上传接口为由文件插件提供 ([9ecb305](https://github.com/miaoxing/admin/commit/9ecb3050eb8bcdab4fed719409ff38d76c81d467))


### BREAKING CHANGES

* 升级管理员日志功能
* 管理员接口原来是操作 UserModel，改为操作 AdminModel
* `Service/Model` 拆分出 `ModelTrait`, 改名为 `BaseModel`
* 下线头像上传接口，更改为文件插件的上传接口





### Dependencies

* **miaoxing:** upgrade from 0.1.5 to 0.1.6
* **@mxjs/upload:** upgrade from 0.2.0 to 0.3.0
* **@miaoxing/app:** upgrade from 0.2.4 to 0.2.5
* **@miaoxing/file:** upgrade to 0.1.0

## [0.2.4](https://github.com/miaoxing/admin/compare/v0.2.3...v0.2.4) (2020-09-27)





### Dependencies

* **@miaoxing/app:** upgrade from 0.2.3 to 0.2.4

## [0.2.3](https://github.com/miaoxing/admin/compare/v0.2.2...v0.2.3) (2020-09-25)





### Dependencies

* **miaoxing:** upgrade from 0.1.4 to 0.1.5
* **@miaoxing/dev:** upgrade from 6.1.1 to 6.1.2
* **@miaoxing/app:** upgrade from 0.2.2 to 0.2.3

## [0.2.2](https://github.com/miaoxing/admin/compare/v0.2.1...v0.2.2) (2020-09-06)


### Features

* 增加 jwt 登录 ([0eee357](https://github.com/miaoxing/admin/commit/0eee357ec854d4665a25e27b0d1b81b71a2f99a1))





### Dependencies

* **@miaoxing/app:** upgrade from 0.2.1 to 0.2.2

## [0.2.1](https://github.com/miaoxing/admin/compare/v0.2.0...v0.2.1) (2020-09-01)





### Dependencies

* **@miaoxing/app:** upgrade from 0.2.0 to 0.2.1

# [0.2.0](https://github.com/miaoxing/admin/compare/v0.1.7...v0.2.0) (2020-09-01)


### Code Refactoring

* 前端控制器改为 page 模式 ([3f2ffb8](https://github.com/miaoxing/admin/commit/3f2ffb8705b94b20128117047e2a14c0f81cfec4))
* 后端控制器改为 page 模式 ([be25a85](https://github.com/miaoxing/admin/commit/be25a857c0ab3b4770d0bca15db34efcc4130ed8))
* 重构 app 包，增加 Req，Url，Event 服务，统一配置 ([5ec7b43](https://github.com/miaoxing/admin/commit/5ec7b432c805771bd6bab7b4c4f22245e0ef9c32))


### BREAKING CHANGES

* 重构 app 包，增加 Req，Url，Event 等服务，统一配置
* 前端控制器改为 page 模式
* 后端控制器改为 page 模式





### Dependencies

* **miaoxing:** upgrade from 0.1.3 to 0.1.4
* **@miaoxing/app:** upgrade from 0.1.7 to 0.2.0

## [0.1.7](https://github.com/miaoxing/admin/compare/v0.1.6...v0.1.7) (2020-08-17)





### Dependencies

* **miaoxing:** upgrade from 0.1.2 to 0.1.3
* **@miaoxing/dev:** upgrade from 6.1.0 to 6.1.1
* **@miaoxing/app:** upgrade from 0.1.6 to 0.1.7

## [0.1.6](https://github.com/miaoxing/admin/compare/v0.1.5...v0.1.6) (2020-08-14)





### Dependencies

* **@miaoxing/dev:** upgrade from 6.0.0 to 6.1.0
* **@miaoxing/app:** upgrade from 0.1.5 to 0.1.6

## [0.1.5](https://github.com/miaoxing/admin/compare/v0.1.4...v0.1.5) (2020-08-14)





### Dependencies

* **@miaoxing/dev:** upgrade from  to 0.1.0
* **@miaoxing/app:** upgrade from 0.1.4 to 0.1.5

## [0.1.4](https://github.com/miaoxing/admin/compare/v0.1.3...v0.1.4) (2020-08-11)





### Dependencies

* **@miaoxing/app:** upgrade from 0.1.3 to 0.1.4

## [0.1.3](https://github.com/miaoxing/admin/compare/v0.1.2...v0.1.3) (2020-08-07)


### Features

* 增加 *Action 类，通过组合的方式简化常用的 CRUD 操作 ([65e5cc3](https://github.com/miaoxing/admin/commit/65e5cc36a5a97031998c302b7fb1094d0b44f120))





### Dependencies

* **@miaoxing/app:** upgrade from 0.1.2 to 0.1.3

## [0.1.2](https://github.com/miaoxing/admin/compare/v0.1.1...v0.1.2) (2020-08-06)





### Dependencies

* **@miaoxing/app:** upgrade from 0.1.1 to 0.1.2

## [0.1.1](https://github.com/miaoxing/admin/compare/v0.1.0...v0.1.1) (2020-08-01)





### Dependencies

* **@miaoxing/app:** upgrade from 0.1.0 to 0.1.1

# 0.1.0 (2020-07-30)


### Features

* init
