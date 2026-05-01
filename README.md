# 析言 LEXARA — 语料分析平台

**Lexical Exploration · Analysis · Research & Application**

> 支持中文（字符级 / 词语级）与英文语料，拖放 .txt 文件即可开始分析。
> 完全离线运行，无需注册。

---

## 🌐 在线使用（推荐，无需安装）

打开浏览器直接访问：

👉 **https://andy-jwyan.github.io/Lexera**

支持 Windows / macOS / Linux，使用 Chrome、Edge、Firefox 均可。

---

## 💻 离线使用

将 `index.html` 下载到本地，双击用浏览器打开即可，**不需要网络，不需要安装任何软件**。

---

## 🖥️ 桌面应用版（Windows / macOS / Linux）

如需打包为独立桌面程序（类似 AntConc），需先安装 [Node.js 18+](https://nodejs.org/zh-cn)。

```bash
npm install              # 安装依赖（仅需一次，约 120MB）
npm start                # 本地运行预览

npm run build:win        # 打包 Windows .exe 安装包
npm run build:mac        # 打包 macOS .dmg（Intel）
npm run build:mac-arm    # 打包 macOS .dmg（Apple Silicon M系列）
npm run build:linux      # 打包 Linux AppImage
```

打包产物在 `dist/` 目录，可直接分发给学生安装，**学生无需安装 Node.js**，双击安装包即用。

---

## 三种使用方式对比

| 方式 | 是否需要安装 | 是否需要网络 | 适合场景 |
|---|---|---|---|
| 🌐 在线链接 | 不需要 | 需要 | 随时随地，最方便 |
| 📄 双击 HTML | 不需要 | 不需要 | 本地离线使用 |
| 🖥️ 桌面 .exe | 安装一次 | 不需要 | 分发给学生的正式版 |

---

## 功能一览

| 模块 | 功能 |
|------|------|
| **词表** | 词频列表、TTR、排名、累积频率、CSV 导出 |
| **索引行 KWIC** | 关键词语境检索、正则支持、左右排序 |
| **N-Gram** | 2~5 联词频率分析 |
| **搭配词** | MI 值、T-score、对数似然搭配统计 |
| **统计** | TTR、标准 TTR、平均句长、Hapax 等指标 |
| **可视化** | 词频条形图、Zipf 定律、TTR 曲线、句长分布 |

---

## 使用说明

1. **载入语料**：点击「+ 载入」或将 .txt 文件拖放到左侧面板
2. **勾选文件**：可选择分析全部文件或指定某几个
3. **词表分析**：进入「词表」标签 → 点击「生成词表」
4. **KWIC 检索**：进入「索引行 KWIC」→ 输入词语后按回车
5. **N-Gram**：选择 N 值，设置最低频次 → 点击「分析」
6. **搭配词**：输入节点词 → 点击「分析」获得 MI / T-score
7. **可视化**：选择图表类型 → 点击「绘制」

---

## 语料格式

- 支持格式：`.txt` `.csv` `.tsv`
- 编码建议：UTF-8
- 中文支持词语级分词（Intl.Segmenter）和字符级分词
- 可同时载入多个文件，勾选后合并为一个语料库分析

---

> 析言 LEXARA · Lexical Exploration · Analysis · Research & Application
