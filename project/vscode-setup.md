# Hướng dẫn chi tiết sử dụng VS Code với PlanbookAI

## 🚀 Bước 1: Cài đặt môi trường

### Tải và cài đặt các công cụ cần thiết:
1. **VS Code**: https://code.visualstudio.com/
2. **Node.js**: https://nodejs.org/ (chọn phiên bản LTS)
3. **Git** (tùy chọn): https://git-scm.com/

## 📁 Bước 2: Mở project trong VS Code

### Cách 1: Từ file ZIP đã tải
1. Giải nén file ZIP từ Bolt
2. Mở VS Code
3. **File > Open Folder** → Chọn thư mục đã giải nén
4. VS Code sẽ mở toàn bộ project

### Cách 2: Tạo project mới
1. Mở VS Code
2. **File > Open Folder** → Tạo thư mục mới "planbookai-landing"
3. Copy tất cả file từ Bolt vào thư mục này
4. VS Code sẽ tự động detect các file

## 🔧 Bước 3: Cài đặt Extensions quan trọng

Nhấn **Ctrl+Shift+X** (Windows) hoặc **Cmd+Shift+X** (Mac) để mở Extensions:

### Extensions bắt buộc:
- **ES7+ React/Redux/React-Native snippets** - Hỗ trợ React syntax
- **Tailwind CSS IntelliSense** - Autocomplete cho Tailwind
- **TypeScript Importer** - Auto import TypeScript

### Extensions khuyến nghị:
- **Auto Rename Tag** - Tự động đổi tên tag HTML
- **Bracket Pair Colorizer 2** - Màu sắc cho dấu ngoặc
- **Prettier - Code formatter** - Format code đẹp
- **GitLens** - Hỗ trợ Git nâng cao
- **Live Server** - Preview HTML (nếu cần)
- **Thunder Client** - Test API (nếu có backend)

## 💻 Bước 4: Sử dụng Terminal trong VS Code

### Mở Terminal:
- **Ctrl+`** (dấu backtick)
- Hoặc **Terminal > New Terminal**

### Kiểm tra môi trường:
```bash
node --version    # Kiểm tra Node.js
npm --version     # Kiểm tra npm
```

## 📦 Bước 5: Cài đặt và chạy project

### Cài đặt dependencies:
```bash
npm install
```

### Chạy development server:
```bash
npm run dev
```

### Build cho production:
```bash
npm run build
```

## ⚙️ Bước 6: Cấu hình VS Code cho project

### Tạo file `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  }
}
```

### Tạo file `.vscode/extensions.json`:
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "dsznajder.es7-react-js-snippets",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

## 🎯 Bước 7: Workflow làm việc hiệu quả

### Shortcuts hữu ích:
- **Ctrl+Shift+P**: Command Palette
- **Ctrl+P**: Quick Open file
- **Ctrl+Shift+F**: Search trong toàn project
- **Ctrl+D**: Select next occurrence
- **Alt+Shift+F**: Format document
- **Ctrl+/**: Comment/uncomment
- **Ctrl+Shift+L**: Select all occurrences

### Làm việc với React:
1. Gõ `rafce` → Tạo React functional component
2. Gõ `imr` → Import React
3. Gõ `clg` → console.log()

### Làm việc với Tailwind:
- VS Code sẽ gợi ý class names
- Hover để xem CSS properties
- Ctrl+Click để jump to definition

## 🐛 Bước 8: Debug và troubleshooting

### Xem lỗi:
- **Problems panel**: Ctrl+Shift+M
- **Terminal**: Xem lỗi build/runtime
- **Browser DevTools**: F12 khi chạy app

### Debug React:
1. Cài extension **React Developer Tools** cho browser
2. Sử dụng `console.log()` để debug
3. Breakpoints trong VS Code (click vào line number)

## 📤 Bước 9: Deploy từ VS Code

### Với Netlify:
1. Build: `npm run build`
2. Drag & drop thư mục `dist/` vào Netlify

### Với Vercel:
1. Cài Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel --prod`

### Với GitHub Pages:
1. Push code lên GitHub
2. Settings → Pages → Deploy from branch

## 💡 Tips và tricks

### Tăng tốc development:
1. Sử dụng **Emmet** cho HTML/CSS
2. **Multi-cursor editing**: Alt+Click
3. **Zen Mode**: Ctrl+K Z (focus mode)
4. **Split Editor**: Ctrl+\

### Quản lý file:
1. **Explorer**: Ctrl+Shift+E
2. **Search**: Ctrl+Shift+F
3. **Source Control**: Ctrl+Shift+G

### Customization:
1. **Settings**: Ctrl+,
2. **Themes**: Ctrl+K Ctrl+T
3. **Keybindings**: Ctrl+K Ctrl+S

## 🔄 Workflow hoàn chỉnh

1. **Mở VS Code** → Open project folder
2. **Cài extensions** → Restart VS Code
3. **Open Terminal** → `npm install`
4. **Start dev server** → `npm run dev`
5. **Code** → Save → Auto format
6. **Test** → Browser tự reload
7. **Build** → `npm run build`
8. **Deploy** → Upload `dist/` folder

Với hướng dẫn này, bạn sẽ có một môi trường development hoàn chỉnh và chuyên nghiệp với VS Code!