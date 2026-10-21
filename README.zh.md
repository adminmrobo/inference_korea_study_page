# Inference Korea 学习看板 · 小鸡推理研究所

[한국어](README.md) · [English](README.en.md) · **中文**

[Inference Korea](https://songys.github.io/inference-korea/) 是一个专注于推理工程（如何高效、稳定地运行 AI 模型）的学习社区。
本仓库是我们用 10 周共读《Inference Engineering》（Kiely, P., 2026, Baseten Books）的学习看板。
学习组长和小鸡们，再加上博士太忙、由研究所派来帮忙的助手和果蝇研究员，一起出场。

- 时间：2026 年 10 月 24 日 – 12 月 26 日，每周六晚上 8 点（韩国时间，暂定），共 10 次
- 地点：Zoom 线上（参会链接、会议号和密码见“简报”页的“参加方式”）
- 形式：每次由一人做读书分享、一人做论文分享；特别场（嘉宾讲座）在 Discord 通知
- 讲义：[Google 云端硬盘文件夹](https://drive.google.com/drive/folders/1NxhUYActOe-POABwqiYdxXBaBg5tY44c)
- 日程与分享人来源：[学习时间表（Google 表格）](https://docs.google.com/spreadsheets/d/1pVf5_bPLA5_UhImUO7EJ_Puh3Q5b485w65WVo1QlFsI/edit?usp=sharing)
- 我们的活动：[LangCon 2026](https://songys.github.io/2026Langcon/)

## 页面（韩语 · 英语 · 中文）

| 页面 | 한국어 | English | 中文 |
|---|---|---|---|
| 简报 | `index.html` | `en/index.html` | `zh/index.html` |
| 日程表 | `schedule.html` | `en/schedule.html` | `zh/schedule.html` |
| 主题导览 | `topic.html` | `en/topic.html` | `zh/topic.html` |
| 学习指南 | `guide.html` | `en/guide.html` | `zh/guide.html` |

每个页面右上角都有语言切换（한국어 / EN / 中文）。

```
assets/
  css/board.css   公共样式
  js/data.js      教材范围、论文、视频、Zoom、链接、LangCon 等基础数据（三种语言共用）
  js/board.js     日期计算、读取 Google 表格、各语言界面文字、公共组件
  img/            角色图片
```

## 只需在 Google 表格中更新

页面每次打开时都会读取 Google 表格的“시간표”（时间表）工作表。**每周更新无需提交任何文件。**

| 在表格中修改 | 看板上的变化 |
|---|---|
| **발제자**（分享人）单元格，格式为 `책 : 姓名, 논문: 姓名`（책 = 读书，논문 = 论文） | 各次卡片、下次聚会、空缺分享名额、滚动公告 |
| **날짜**（日期）单元格 | D-day、顺序、日历链接、学习期间 |
| （可选）新增 **시간**（时间）列 | 该次的开始时间 |
| （可选）**발표자료**（讲义）列填写链接 | 卡片上的“打开讲义”（没有则链接到云端硬盘文件夹） |
| （可选）**비고**（备注）列 | 显示在滚动公告和卡片上；填写 `휴강`（或 `停课`、`skip`、`cancel`）即跳过该次 |
| （可选）**완료**（完成）列填 `O` | 即使未到时间也标记为已完成 |

- 每次聚会开始 2 小时后会自动标记为**已完成**：蛋孵化，“下次聚会”顺延到下一次。
- 表格必须设置为 **“知道链接的任何人：查看者”**。读取失败时会显示 `data.js` 中的默认值。
- 请勿修改表头 회차（次数）、날짜（日期）、발제자（分享人）的名称。列的顺序可以调整。
- 英文和中文页面中，若分享人姓名在 `data.js` 的 `names` 表里，会显示为罗马字。只有想显示罗马字时才需要添加新分享人。
- 预览其他日期：在网址后加上 `?today=2026-11-10`。

不常变动的内容（教材范围、参考论文、视频、Zoom 信息、Discord 链接 `discord`、额外滚动公告 `notices`）在 `assets/js/data.js` 中。

## 用 GitHub Pages 发布

1. 将本文件夹的内容放到仓库根目录（文件名和文件夹结构保持不变）。
2. 在 **Settings → Pages → Build and deployment** 中，将 Source 设为 `Deploy from a branch`，分支 `main`，文件夹 `/ (root)`。
3. 稍等片刻即可在 `https://<账号>.github.io/<仓库>/` 访问。

无需构建。字体从 Google Fonts 加载。

## 角色出处

- 学习组长：学习运营团队提供的角色
- 小鸡（啾啾核心、小预、小解、小工）：LangCon 2026 海报角色
- 助手、果蝇研究员：出自安相善《AI 如何区分图像？》系列（CC BY-NC 4.0）

实验室演示中的数值和小鸡比喻均为本看板制作的说明用示例。

---
页面制作：Reon Ahn (Ahn, Sang-Sun) · 联系：sangsun.ahn@m-robo.com · 主页：[www.ahnboat.xyz](https://www.ahnboat.xyz)
