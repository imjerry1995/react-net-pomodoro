# React-net-pomodoro
## Info
### 作品名稱
React-net-pomodoro 番茄鐘
### 作品網址
[請點我](https://react-net-pomodoro.azurewebsites.net)
### 作品設計稿採用
採用自 [此創用 CC 姓名標示 3.0 台灣 授權條款授權](https://challenge.thef2e.com/user/2760?schedule=2468#works-2468)
前端頁面參照設計稿
### 番茄鐘基本介紹
[番茄工作法](https://zh.wikipedia.org/wiki/番茄工作法)

## 環境
* 架設在 Microsoft Azure
* 使用 Visual Studio 新增 ASP.NET Core
* 前端使用 React.js

## 功能描述
1. 新增待辦事項可以新增、刪除
2. 按下播放鍵會倒數（註：第一個從倒數五秒開始是為了給觀看作品者快速驗證功能）
3. 播放鍵對應目前正在倒數的代辦事項
4. 倒數完會累積番茄（在各個待辦事項標題底下）
5. 左上角三橫線為切換「觀看所有代辦事項」
	* 此網頁為 SPA 
6. 觀看所有代辦事項頁面也能做新增刪除，並觀看已經完成的代辦事項
7. 按下 POMODORO 字樣即可回首頁

## 資料描述
1. 使用 .NET Core 中的 Model & Controller 建立最初的資料
2. 之後更新 React 中的 state，先綁到 localstorage 並同步頁面資料

## 持續改善中
* 持續將資料透過 ASP.NET Core 送進資料庫
* 前端體驗精進中
