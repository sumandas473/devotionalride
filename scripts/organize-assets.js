const fs = require('fs');
const path = require('path');

const srcImagesDir = path.join(__dirname, '..', 'src', 'images');
const targets = [
  path.join(__dirname, '..', 'public', 'assets'),
  path.join(__dirname, '..', 'assets')
];

targets.forEach(targetDir => {
  const dirs = ['logo', 'jackets', 'gloves'];
  dirs.forEach(d => {
    fs.mkdirSync(path.join(targetDir, d), { recursive: true });
  });

  // 1. Process Logo
  const logoSrcDir = path.join(srcImagesDir, 'logo');
  if (fs.existsSync(logoSrcDir)) {
    const logoFiles = fs.readdirSync(logoSrcDir);
    logoFiles.forEach(file => {
      const srcPath = path.join(logoSrcDir, file);
      const names = [
        'devotional-ride-logo.jpeg',
        'devotional-ride-logo.jpg',
        'devotional-ride-logo.png',
        'logo.jpeg',
        'logo.jpg',
        'logo.png'
      ];
      names.forEach(name => {
        fs.copyFileSync(srcPath, path.join(targetDir, 'logo', name));
      });
    });
  }

  // 2. Process Jackets
  const jacketsSrcDir = path.join(srcImagesDir, 'Jackets');
  if (fs.existsSync(jacketsSrcDir)) {
    const files = fs.readdirSync(jacketsSrcDir);
    files.forEach((file, index) => {
      const srcPath = path.join(jacketsSrcDir, file);
      const ext = path.extname(file).toLowerCase();
      const num = index + 1;
      const cleanIndex = String(num).padStart(3, '0');

      fs.copyFileSync(srcPath, path.join(targetDir, 'jackets', `jacket-${cleanIndex}${ext}`));
      fs.copyFileSync(srcPath, path.join(targetDir, 'jackets', `jacket-${num}${ext}`));

      // Also provide a .png alias if it's .jpg, or .jpg alias if .png
      if (ext === '.jpg' || ext === '.jpeg') {
        fs.copyFileSync(srcPath, path.join(targetDir, 'jackets', `jacket-${num}.png`));
        fs.copyFileSync(srcPath, path.join(targetDir, 'jackets', `jacket-${cleanIndex}.png`));
      }
    });
  }

  // 3. Process Gloves
  const glovesSrcDir = path.join(srcImagesDir, 'Gloves');
  if (fs.existsSync(glovesSrcDir)) {
    const files = fs.readdirSync(glovesSrcDir);
    files.forEach((file, index) => {
      const srcPath = path.join(glovesSrcDir, file);
      const ext = path.extname(file).toLowerCase();
      const num = index + 1;
      const cleanIndex = String(num).padStart(3, '0');

      fs.copyFileSync(srcPath, path.join(targetDir, 'gloves', `glove-${cleanIndex}${ext}`));
      fs.copyFileSync(srcPath, path.join(targetDir, 'gloves', `glove-${num}${ext}`));
    });
  }
  console.log(`Assets organized in: ${targetDir}`);
});

console.log('Organization complete with clean naming conventions!');