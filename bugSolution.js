```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-color': '#f00',
      }
    }
  },
  plugins: [],
}
```
```html
<!-- index.html -->
<div class="bg-custom-color"></div>
```