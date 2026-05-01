# 析言 LEXARA 1.0 — 本地语料分析平台

---

## 功能一览

| 模块 | 功能 |
|------|------|
| **词表** | 词频列表、TTR、排名、累积频率、CSV 导出 |
| **索引行 KWIC** | 关键词语境检索、正则支持、左右排序 |
| **N-Gram** | 2~5联词频率分析 |
| **搭配词** | MI值、T-score、对数似然搭配统计 |
| **统计** | TTR、标准TTR、平均句长、Hapax 等指标 |
| **可视化** | 词频条形图、Zipf定律、TTR曲线、句长分布 |

支持中文（字符级/词语级）与英文（字符级/词语级）语料。拖放 .txt 文件即可开始分析。

---

## 方案一：直接打开（无需安装）

双击 `index.html` 用浏览器打开即可使用。
> 注意：浏览器模式下「导出」功能通过下载实现，其余功能完全相同。

---

## 方案二：构建桌面应用（推荐）

### 环境要求
- [Node.js 18+](https://nodejs.org/zh-cn) — 下载 LTS 版本

### 步骤

```bash
# 进入项目目录
cd lexara2

# 安装 Electron（仅一次，约 120MB）
npm install

# 开发运行
npm start

# 打包 Windows 安装包 (.exe)
npm run build:win

# 打包 macOS (.dmg，Intel)
npm run build:mac

# 打包 macOS (.dmg，Apple Silicon M系列)
npm run build:mac-arm

# 打包 Linux (AppImage)
npm run build:linux
```

打包产物在 `dist/` 目录，可直接分发安装。

---

## 使用说明

1. **载入语料**：点击「+ 载入」或拖放 .txt 文件到左侧面板
2. **词表分析**：进入「词表」标签，点击「生成词表」
3. **KWIC 检索**：进入「索引行 KWIC」，输入词语后回车
4. **N-Gram**：选择 N 值，设置最低频次，点击「分析」
5. **搭配词**：输入节点词，点击「分析」获得 MI/T-score
6. **可视化**：进入「可视化」，选择图表类型，点击「绘制」

---

## 语料说明

- 支持格式：`.txt` `.csv` `.tsv`
- 编码：UTF-8（推荐）
- 中文：字符级分词（每个汉字为一个 Token）
- 英文：词语级分词（按空格/标点切分）
- 可同时载入多个文件，合并为一个语料库分析

---

> 析言 LEXARA — Lexcial Exploration, Analysis, Research & Application
