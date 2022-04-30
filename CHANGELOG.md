## [0.7.1](https://github.com/miaoxing/admin/compare/v0.7.0...v0.7.1) (2022-04-30)


### Bug Fixes

* **u, admin:** 解决域名绑定后台时，直接访问域名，识别不到是后台而出错 ([9fc31a7](https://github.com/miaoxing/admin/commit/9fc31a7daa7a94df5b135e9ee6635f30d63aa690))


### Features

* **admin, experimental:** 增加 `FormItemUpload` 组件 ([d14a340](https://github.com/miaoxing/admin/commit/d14a3401d65d418f3bc9555e85ea03df7f7de18c))
* 允许设置路径的 `url` 为 false 来不显示面包屑地址 ([5cacd2c](https://github.com/miaoxing/admin/commit/5cacd2c2f55073775b861493e19306378a363ed1))





### Dependencies

* **@mxjs/a-form:** upgrade from `0.3.4` to `0.3.5`
* **@mxjs/a-page:** upgrade from `0.3.4` to `0.3.5`
* **@mxjs/upload:** upgrade from `0.6.2` to `0.6.3`
* **@miaoxing/app:** upgrade from `0.6.2` to `0.6.3`
* **@miaoxing/file:** upgrade from `0.3.1` to `0.3.2`

# [0.7.0](https://github.com/miaoxing/admin/compare/v0.6.0...v0.7.0) (2022-03-31)


### Bug Fixes

* **admin:** 用户分组表增加 `app_id` 字段 ([bf13b2a](https://github.com/miaoxing/admin/commit/bf13b2afef91aba1cdfdc636d2125c2888ec8669))
* **admin:** 解决 fower 1.68+ 不识别 `brand` 颜色 ([4ff21fa](https://github.com/miaoxing/admin/commit/4ff21fafe49de6654e9388f2b3238a1bf1470b7b))


### Features

* 更新 `fower` 到 `^1.70.0` ([0b59c80](https://github.com/miaoxing/admin/commit/0b59c8001c17fd11ad5dbcac4fa1eb7b006bd4d4))
* **admin:** 后台布局没有 token 则提前跳转到登录页面 ([cd6c641](https://github.com/miaoxing/admin/commit/cd6c64112e3b40bf3c9affeb397755144c569b14))


### BREAKING CHANGES

* **admin:** 用户分组表增加 `app_id` 字段





### Dependencies

* **@mxjs/a-clink:** upgrade from `0.2.3` to `0.2.4`
* **@mxjs/a-form:** upgrade from `0.3.3` to `0.3.4`
* **@mxjs/a-page:** upgrade from `0.3.3` to `0.3.4`
* **@mxjs/a-table:** upgrade from `0.4.3` to `0.4.4`
* **@mxjs/api:** upgrade from `0.1.7` to `0.1.8`
* **@mxjs/css:** upgrade from `0.3.1` to `0.3.2`
* **@mxjs/upload:** upgrade from `0.6.1` to `0.6.2`
* **@mxjs/test:** upgrade from `0.2.3` to `0.2.4`
* **@miaoxing/app:** upgrade from `0.6.1` to `0.6.2`
* **@miaoxing/file:** upgrade from `0.3.0` to `0.3.1`

# [0.6.0](https://github.com/miaoxing/admin/compare/v0.5.2...v0.6.0) (2022-03-04)


### Bug Fixes

* 处理路径时，兼容结尾有 `/` 的情况 ([83c2f9d](https://github.com/miaoxing/admin/commit/83c2f9d9e1cf7804dd29dc5bf52cf119d9264376))


### Features

* 数据表 `app_id` 字段由 `int` 升级到 `bigint` ([cbe854e](https://github.com/miaoxing/admin/commit/cbe854ecce433fc49bafc0edfa380f2c3fe7b221))


### BREAKING CHANGES

* 数据表 `app_id` 字段由 `int` 升级到 `bigint`





### Dependencies

* **@mxjs/a-clink:** upgrade from `0.2.2` to `0.2.3`
* **@mxjs/a-form:** upgrade from `0.3.2` to `0.3.3`
* **@mxjs/a-page:** upgrade from `0.3.2` to `0.3.3`
* **@mxjs/a-table:** upgrade from `0.4.2` to `0.4.3`
* **@mxjs/api:** upgrade from `0.1.6` to `0.1.7`
* **@mxjs/upload:** upgrade from `0.6.0` to `0.6.1`
* **@mxjs/test:** upgrade from `0.2.2` to `0.2.3`
* **@miaoxing/app:** upgrade from `0.6.0` to `0.6.1`
* **@miaoxing/file:** upgrade from `0.2.0` to `0.3.0`

## [0.5.2](https://github.com/miaoxing/admin/compare/v0.5.1...v0.5.2) (2022-02-28)


### Bug Fixes

* **admin:** 解决退出登录前端未删除 token ([32be1fb](https://github.com/miaoxing/admin/commit/32be1fbdadf763efdaac7d24c180b9510c310aae))


### Features

* **admin:** 增加 `Upload` 组件 ([4f79a90](https://github.com/miaoxing/admin/commit/4f79a90790f883860fd6e12df737387d38fe4676))





### Dependencies

* **@mxjs/upload:** upgrade from `0.5.2` to `0.6.0`
* **@miaoxing/app:** upgrade from `0.5.1` to `0.6.0`
* **@miaoxing/file:** upgrade from `0.1.15` to `0.2.0`

## [0.5.1](https://github.com/miaoxing/admin/compare/v0.5.0...v0.5.1) (2022-02-05)


### Features

* **admin:** 增加 `AdminPage` 服务来管理页面数据 ([f07859e](https://github.com/miaoxing/admin/commit/f07859e9fb073d76664516eccd98605511ba4d33))
* **admin, experimental:** 允许自定义页面背景图 ([118f5a4](https://github.com/miaoxing/admin/commit/118f5a4efa419efecb44cab5b4e11a381be286f8))





### Dependencies

* **@mxjs/a-clink:** upgrade from `0.2.1` to `0.2.2`
* **@mxjs/a-form:** upgrade from `0.3.1` to `0.3.2`
* **@mxjs/a-page:** upgrade from `0.3.1` to `0.3.2`
* **@mxjs/a-table:** upgrade from `0.4.1` to `0.4.2`
* **@mxjs/api:** upgrade from `0.1.5` to `0.1.6`
* **@mxjs/css:** upgrade from `0.3.0` to `0.3.1`
* **@mxjs/upload:** upgrade from `0.5.1` to `0.5.2`
* **miaoxing:** upgrade from `0.4.0` to `0.4.1`
* **@miaoxing/dev:** upgrade from `8.0.1` to `8.1.0`
* **@mxjs/test:** upgrade from `0.2.1` to `0.2.2`
* **@miaoxing/app:** upgrade from `0.5.0` to `0.5.1`
* **@miaoxing/file:** upgrade from `0.1.14` to `0.1.15`

# [0.5.0](https://github.com/miaoxing/admin/compare/v0.4.0...v0.5.0) (2022-01-12)


### Bug Fixes

* 更新 `[@fower](https://github.com/fower)` 到 `^1.59.0` ([032a475](https://github.com/miaoxing/admin/commit/032a475b4b804e384fad2f8196ba02b6c971b58c))


### Code Refactoring

* **admin:** 管理端移除 PHP 视图功能 ([36d775e](https://github.com/miaoxing/admin/commit/36d775e8ebc527018ba5e70cf815603d2aa70f3c))


### Features

* **admin:** `AdminModelTrait` 增加 `MineTrait` ([8a82ddb](https://github.com/miaoxing/admin/commit/8a82ddb3d902a49f29d3e91c4195c8b9a3dd392d))
* **admin:** 允许带链接的一级菜单 ([fd28717](https://github.com/miaoxing/admin/commit/fd287172cb980fb15f3c78dcb58e3d6d3972b5dc))
* **admin:** 启动时加载配置 ([a44f527](https://github.com/miaoxing/admin/commit/a44f5277ac758b5b41937b32dc86544de070bd6e))
* **admin:** 增加 `FormItemSort` 组件 ([f0f6aef](https://github.com/miaoxing/admin/commit/f0f6aef0ec18e0939df36a881dd68f56ceeb3bfc))
* **admin:** 增加 `fower/react` 配置 ([5976f30](https://github.com/miaoxing/admin/commit/5976f3089f866ca7cd4e88a8d69164d7cc66fdc5))
* **admin:** 增加 `InputPrice` 组件 ([5536919](https://github.com/miaoxing/admin/commit/55369193d6268398890a28fe051388a3aec219ec))
* **admin:** 增加 logo 文件，后台无返回 logo 时显示默认 logo ([540cff6](https://github.com/miaoxing/admin/commit/540cff622ccb21e448f3f6b7a104d3b1479702b2))
* **admin:** 增加后台首页入口 ([ea1cba6](https://github.com/miaoxing/admin/commit/ea1cba6ce41de9fd00f180a7bd39f20ea654e012))
* **admin:** 增加默认头像组件 ([9df06a1](https://github.com/miaoxing/admin/commit/9df06a12b5ba35a6e46fe57114ff9c5affc9aaef))
* **admin:** 配置 `fower` 解析 `sx` 属性 ([0f884a3](https://github.com/miaoxing/admin/commit/0f884a3a900458155a9c39a607036487472e0e98))
* 更新 `[@fower](https://github.com/fower)` 到 `^1.61` ([7c00614](https://github.com/miaoxing/admin/commit/7c006144fb2bb4b94c621938d19bd13d83adf7fc))
* **admin, webpack:** 发布插件的 public 目录，以便通过浏览器直接访问 ([a954ac2](https://github.com/miaoxing/admin/commit/a954ac253eb83bd8e6e626e7bbc15d0c23cb2f59))
* **app:** 更改 `$.alert` 和 `$.confirm` 为 antd 的 Modal 组件 ([8c9c09c](https://github.com/miaoxing/admin/commit/8c9c09c331928e81e16c104b26afb3a4587e8c3f))


### BREAKING CHANGES

* **admin:** 管理端移除 PHP 视图功能





### Dependencies

* **@mxjs/a-clink:** upgrade from `0.2.0` to `0.2.1`
* **@mxjs/a-form:** upgrade from `0.3.0` to `0.3.1`
* **@mxjs/a-page:** upgrade from `0.3.0` to `0.3.1`
* **@mxjs/a-table:** upgrade from `0.4.0` to `0.4.1`
* **@mxjs/api:** upgrade from `0.1.4` to `0.1.5`
* **@mxjs/css:** upgrade from `0.2.3` to `0.3.0`
* **@mxjs/upload:** upgrade from `0.5.0` to `0.5.1`
* **miaoxing:** upgrade from `0.3.0` to `0.4.0`
* **@miaoxing/dev:** upgrade from `8.0.0` to `8.0.1`
* **@mxjs/test:** upgrade from `0.2.0` to `0.2.1`
* **@miaoxing/app:** upgrade from `0.4.0` to `0.5.0`
* **@miaoxing/file:** upgrade from `0.1.13` to `0.1.14`

# [0.4.0](https://github.com/miaoxing/admin/compare/v0.3.15...v0.4.0) (2021-10-28)


### Code Refactoring

* `expand` 参数改为 `include` ([96a4583](https://github.com/miaoxing/admin/commit/96a4583fd841aa5fdc5bb49147b0c16e567fdea3))
* 调整错误码为 001 开始 ([37b4c0b](https://github.com/miaoxing/admin/commit/37b4c0b6caa6652dcefc37b6e4bfcbafcd3ec36a))
* **Model:** 模型的关联方法加上返回值 ([fb0de3d](https://github.com/miaoxing/admin/commit/fb0de3d4599737db10fc6056491aaa434e8bfe21))


### Features

* 数据表主键 由 `int` 改为 `bigint` ([ddcdf46](https://github.com/miaoxing/admin/commit/ddcdf4631f12b2fa0ad01caf3cbff67c58cd515e))
* 更新 `react` 到 17 ([50214bb](https://github.com/miaoxing/admin/commit/50214bb83668857e5043f30551a28b0fda05b719))
* 模型通过 `SnowflakeTrait` 生成 id ([ec384c8](https://github.com/miaoxing/admin/commit/ec384c88cd7e80737fb64075bcc67fc68cad2d09))


### BREAKING CHANGES

* 数据表主键 由 `int` 改为 `bigint`
* `expand` 参数改为 `include`
* 调整错误码为 001 开始
* 更新 `react` 到 17
* **Model:** 模型的关联方法加上返回值





### Dependencies

* **@mxjs/css:** upgrade from `0.2.2` to `0.2.3`
* **miaoxing:** upgrade from `0.2.5` to `0.3.0`
* **@mxjs/upload:** upgrade from `0.4.3` to `0.5.0`
* **@mxjs/a-clink:** upgrade from `0.1.8` to `0.2.0`
* **@mxjs/a-table:** upgrade from `0.3.11` to `0.4.0`
* **@mxjs/a-page:** upgrade from `0.2.8` to `0.3.0`
* **@mxjs/a-form:** upgrade from `0.2.15` to `0.3.0`
* **@mxjs/api:** upgrade from `0.1.3` to `0.1.4`
* **@miaoxing/dev:** upgrade from `7.0.1` to `8.0.0`
* **@mxjs/test:** upgrade from `0.1.8` to `0.2.0`
* **@miaoxing/app:** upgrade from `0.3.3` to `0.4.0`
* **@miaoxing/file:** upgrade from `0.1.12` to `0.1.13`

## [0.3.15](https://github.com/miaoxing/admin/compare/v0.3.14...v0.3.15) (2021-05-21)





### Dependencies

* **@mxjs/upload:** upgrade from `0.4.2` to `0.4.3`
* **@miaoxing/app:** upgrade from `0.3.2` to `0.3.3`
* **@miaoxing/file:** upgrade from `0.1.11` to `0.1.12`

## [0.3.14](https://github.com/miaoxing/admin/compare/v0.3.13...v0.3.14) (2021-05-12)





### Dependencies

* **@mxjs/css:** upgrade from `0.2.1` to `0.2.2`
* **miaoxing:** upgrade from `0.2.4` to `0.2.5`
* **@mxjs/upload:** upgrade from `0.4.1` to `0.4.2`
* **@mxjs/a-clink:** upgrade from `0.1.7` to `0.1.8`
* **@mxjs/a-table:** upgrade from `0.3.10` to `0.3.11`
* **@mxjs/a-page:** upgrade from `0.2.7` to `0.2.8`
* **@mxjs/a-form:** upgrade from `0.2.14` to `0.2.15`
* **@miaoxing/dev:** upgrade from `7.0.0` to `7.0.1`
* **@mxjs/test:** upgrade from `0.1.7` to `0.1.8`
* **@miaoxing/app:** upgrade from `0.3.1` to `0.3.2`
* **@miaoxing/file:** upgrade from `0.1.10` to `0.1.11`

## [0.3.13](https://github.com/miaoxing/admin/compare/v0.3.12...v0.3.13) (2021-05-11)


### Bug Fixes

* 更新默认数据的结构 ([41f97d9](https://github.com/miaoxing/admin/commit/41f97d929a36f00e470989741be550f8a88ceb51))





### Dependencies

* **@mxjs/css:** upgrade from `0.2.0` to `0.2.1`
* **miaoxing:** upgrade from `0.2.3` to `0.2.4`
* **@mxjs/upload:** upgrade from `0.4.0` to `0.4.1`
* **@mxjs/a-clink:** upgrade from `0.1.6` to `0.1.7`
* **@mxjs/a-table:** upgrade from `0.3.9` to `0.3.10`
* **@mxjs/a-page:** upgrade from `0.2.6` to `0.2.7`
* **@mxjs/a-form:** upgrade from `0.2.13` to `0.2.14`
* **@miaoxing/dev:** upgrade from `6.4.0` to `7.0.0`
* **@mxjs/test:** upgrade from `0.1.6` to `0.1.7`
* **@miaoxing/app:** upgrade from `0.3.0` to `0.3.1`
* **@miaoxing/file:** upgrade from `0.1.9` to `0.1.10`

## [0.3.12](https://github.com/miaoxing/admin/compare/v0.3.11...v0.3.12) (2021-04-27)


### Bug Fixes

* 内容过高时背景重复，底部边距失效，头部边距导致出现滚动条 ([8e114f7](https://github.com/miaoxing/admin/commit/8e114f7d1ffbcca43e68a2f328e06ede6f9e69e0))


### Features

* 增加创建页面测试数据的 Seeder ([152446f](https://github.com/miaoxing/admin/commit/152446f0f89f9edeecd13aa4885ec18e75061fe0))





### Dependencies

* **@mxjs/css:** upgrade from `0.1.0` to `0.2.0`
* **@miaoxing/dev:** upgrade from `6.3.4` to `6.4.0`
* **miaoxing:** upgrade from `0.2.2` to `0.2.3`
* **@mxjs/upload:** upgrade from `0.3.10` to `0.4.0`
* **@miaoxing/app:** upgrade from `0.2.13` to `0.3.0`
* **@miaoxing/file:** upgrade from `0.1.8` to `0.1.9`

## [0.3.11](https://github.com/miaoxing/admin/compare/v0.3.10...v0.3.11) (2021-03-22)





### Dependencies

* **@miaoxing/dev:** upgrade from `6.3.3` to `6.3.4`
* **miaoxing:** upgrade from `0.2.1` to `0.2.2`
* **@mxjs/upload:** upgrade from `0.3.9` to `0.3.10`
* **@miaoxing/app:** upgrade from `0.2.12` to `0.2.13`
* **@miaoxing/file:** upgrade from `0.1.7` to `0.1.8`

## [0.3.10](https://github.com/miaoxing/admin/compare/v0.3.9...v0.3.10) (2021-03-17)





### Dependencies

* **@mxjs/upload:** upgrade from `0.3.8` to `0.3.9`
* **@miaoxing/app:** upgrade from `0.2.11` to `0.2.12`
* **@miaoxing/file:** upgrade from `0.1.6` to `0.1.7`

## [0.3.9](https://github.com/miaoxing/admin/compare/v0.3.8...v0.3.9) (2021-03-12)


### Bug Fixes

* 更新前端包依赖 ([114d5d7](https://github.com/miaoxing/admin/commit/114d5d76c6a9d060d83c6a57c11ce07517eddd70))





### Dependencies

* **@miaoxing/dev:** upgrade from `6.3.2` to `6.3.3`
* **miaoxing:** upgrade from `0.2.0` to `0.2.1`
* **@mxjs/upload:** upgrade from `0.3.7` to `0.3.8`
* **@miaoxing/app:** upgrade from `0.2.10` to `0.2.11`
* **@miaoxing/file:** upgrade from `0.1.5` to `0.1.6`

## [0.3.8](https://github.com/miaoxing/admin/compare/v0.3.7...v0.3.8) (2021-03-11)





### Dependencies

* **miaoxing:** upgrade from `0.1.10` to `0.2.0`
* **@mxjs/upload:** upgrade from `0.3.6` to `0.3.7`

## [0.3.7](https://github.com/miaoxing/admin/compare/v0.3.6...v0.3.7) (2021-03-11)





### Dependencies

* **@mxjs/upload:** upgrade from `0.3.5` to `0.3.6`

## [0.3.6](https://github.com/miaoxing/admin/compare/v0.3.5...v0.3.6) (2021-03-10)





### Dependencies

* **@mxjs/upload:** upgrade from `0.3.4` to `0.3.5`

## [0.3.5](https://github.com/miaoxing/admin/compare/v0.3.4...v0.3.5) (2021-03-10)





### Dependencies

* **miaoxing:** upgrade from 0.1.9 to 0.1.10
* **@mxjs/upload:** upgrade from 0.3.3 to 0.3.4
* **@miaoxing/dev:** upgrade from 6.3.1 to 6.3.2
* **@miaoxing/app:** upgrade from 0.2.9 to 0.2.10
* **@miaoxing/file:** upgrade from 0.1.4 to 0.1.5

## [0.3.4](https://github.com/miaoxing/admin/compare/v0.3.3...v0.3.4) (2021-03-09)





### Dependencies

* **miaoxing:** upgrade from 0.1.8 to 0.1.9
* **@mxjs/upload:** upgrade from 0.3.2 to 0.3.3
* **@miaoxing/dev:** upgrade from 6.3.0 to 6.3.1
* **@miaoxing/app:** upgrade from 0.2.8 to 0.2.9
* **@miaoxing/file:** upgrade from 0.1.3 to 0.1.4

## [0.3.3](https://github.com/miaoxing/admin/compare/v0.3.2...v0.3.3) (2021-03-09)





### Dependencies

* **miaoxing:** upgrade from 0.1.7 to 0.1.8
* **@mxjs/upload:** upgrade from 0.3.1 to 0.3.2
* **@miaoxing/dev:** upgrade from 6.2.0 to 6.3.0
* **@miaoxing/app:** upgrade from 0.2.7 to 0.2.8
* **@miaoxing/file:** upgrade from 0.1.2 to 0.1.3

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
