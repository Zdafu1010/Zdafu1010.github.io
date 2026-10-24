# DAFU · AI 产品经理求职作品集

个人产品案例展示网站，可使用 GitHub Pages 直接发布。采用纯静态 HTML / CSS / JavaScript，无 API 密钥、无需构建或运行后端。项目内容区展示三个真实产品案例，但不包含产品后端服务。

## 在线发布（GitHub Pages）

1. 登录 GitHub，使用你的账号 **Zdafu1010** 新建一个 **Public** 仓库。推荐命名为 `Zdafu1010.github.io`，这样网站地址是 `https://zdafu1010.github.io/`。若命名 `dafu-portfolio`，则网站地址是 `https://zdafu1010.github.io/dafu-portfolio/`。
2. 将本部署包**解压后的所有文件和文件夹**放在仓库 `main` 分支根目录，确保 `index.html`、`styles.css`、`main.js`、`.nojekyll`、`assets/`、`docs/` 都在根目录，不要多套一层文件夹。
3. 在仓库 **Settings → Pages** 中把 **Build and deployment → Source** 设为 **Deploy from a branch**；Branch 选择 **main**，目录选择 **/(root)**，点击 Save。
4. 在 Pages 页面查看发布状态与生成的网址。检查首页、3 个案例截图、邮箱弹窗、简历 PDF 和作品集 PDF。

## 维护

- 更新简历：用新版 PDF 覆盖 `docs/resume.pdf`，链接不变。
- 更新项目截图：替换 `assets/` 中对应文件，文件名保持不变。
- 更新页面：修改 `index.html`、`styles.css`、`main.js` 并提交，Pages 会自动重新发布。

## 重要说明

- 该仓库必须设置为 Public（常见免费账户方案），**源文件和 `docs/resume.pdf` 都公开**。PDF 内包含本人联系方式等个人信息，发布前请确认可以公开。
- `github.io` 在中国大陆部分地区可以直接访问，但不是国内节点/备案托管，**无法保证所有省份、运营商与企业内网均能访问**。建议同时发送 PDF 作为保底。
- 本包未包含私有代码仓库、API Key、数据库或测试日志。网站是静态案例展示，不意味着 JobRadar、NN-Copilot、PM Workflow Copilot 三个软件已公开在线提供服务。
