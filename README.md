# lerna + umi-V4 构建monorepe工作区

> 之前用nx很容易搭建一款优秀的monorepe工程，由于公司一直用umijs框架开发，索性尝试一下用umi搭建一下；
> 无意中发现 umi支持通过lerna搭建monorepe
> 所以简单记录当时的操作过程；

## 第一步、准备工作区
创建工作区
```
npm i -g lerna nx
mkdir mating-workspaces && cd mating-workspaces
# lerna 创建工作区
npx lerna init
```

## 第二步、准备工程项目

```
cd packages
npx create-umi@latest eagle-viewer
npx create-umi@latest eagle2-viewer

```
注意 不需要安装；

分别打开 packages/eagle-viewer/package.json、packages/eagle2-viewer/package.json
增加name属性（umi 没加上name）;
```
# lerna 引导项目，并安装包
npx lerna bootstrap
```

> 注意: 全程用npm 装包；

```
# nx 指定缓存 的交互
npx nx init
```
其次，让我们标记build和test成为可缓存的操作。
```
npx add-nx-to-monorepo

// 他会修改 nx.json
{
  "tasksRunnerOptions": {
    "default": {
      "runner": "nx/tasks-runners/default",
      "options": {
        "cacheableOperations": ["build", "test"]
      }
    }
  }
}
```
## 第三步、测试命令

```
# 测试一下命令是否可以正确执行：
npx lerna run test --no-sort
npx lerna run build
npx lerna run dev --scope=eagle-viewer

# 再次执行，是否cache；
```

## 第四步、添加jest测试配置
```
cd packages/eagle-viewer
npx max g jest
```

## 第五步、创建library 
```
mkdir libs/ui
npx create-father ui
```
同样的，跳过安装步骤；

然后修改root Package.json,workspaces中添加"libs/*" （如果是三级目录 "libs/**/*"）
```
  "workspaces": [
    "packages/*",
    "libs/**/*"
  ],
```
执行
```
# 自动更新npm 引导，
 npx lerna bootstrap
```
## 第六步、添加library Jest测试
```
cd libs/ui/image-viewer
# 执行father generators 开启jest 测试
npx father g jest 
```