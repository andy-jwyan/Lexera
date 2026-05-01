# 析言 LEXARA — 语料分析平台

**Lexical Exploration · Analysis · Research & Application**

> 支持中文（字符级 / 词语级）与英文语料，拖放 .txt 文件即可开始分析。

---

## 🌐 在线使用（推荐）

无需安装，打开浏览器直接使用：

👉 **https://andy-jwyan.github.io/Lexera**

---

## 功能一览

| 模块 | 功能 |
|------|------|
| **词表** | 词频列表、TTR、排名、累积频率、CSV 导出 |
| **索引行 KWIC** | 关键词语境检索、正则支持、左右排序 |
| **N-Gram** | 2~5 联词频率分析 |
| **搭配词** | MI 值、T-score、对数似然搭配统计 |
| **统计** | TTR、标准TTR、平均句长、Hapax 等指标 |
| **可视化** | 词频条形图、Zipf 定律、TTR 曲线、句长分布 |

---

## 本地 / 桌面版

如需在本地运行或打包为桌面安装包，需先安装 [Node.js 18+](https://nodejs.org/zh-cn)。

```bash
npm install   # 安装依赖（仅一次）
npm start     # 本地运行

npm run build:win      # 打包 Windows .exe
npm run build:mac      # 打包 macOS .dmg（Intel）
npm run build:mac-arm  # 打包 macOS .dmg（Apple Silicon）
npm run build:linux    # 打包 Linux AppImage
```

打包产物在 `dist/` 目录，可直接分发安装。

---

## 使用说明

1. **载入语料**：点击「+ 载入」或拖放 .txt 文件到左侧面板
2. **勾选文件**：可选择分析全部或指定文件
3. **词表分析**：进入「词表」标签 → 生成词表
4. **KWIC 检索**：进入「索引行 KWIC」→ 输入词语后回车
5. **N-Gram**：选择 N 值，设置最低频次 → 分析
6. **搭配词**：输入节点词 → 分析获得 MI / T-score
7. **可视化**：选择图表类型 → 绘制

---

## 语料格式

- 支持：`.txt` `.csv` `.tsv`，编码建议 UTF-8
- 可同时载入多个文件，勾选后合并分析
