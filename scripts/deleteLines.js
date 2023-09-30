const fs = require('fs');
const path = require('path');

function removeLineFromFiles(dirPath) {
    // Прочитать содержимое директории
    const items = fs.readdirSync(dirPath);
    console.log(dirPath);

    items.forEach((item) => {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);

        // Если это директория, вызвать функцию рекурсивно
        if (stat.isDirectory()) {
            removeLineFromFiles(itemPath);
        }
        // Если это файл с расширением .js, обработать его
        else if (stat.isFile() && path.extname(itemPath) === '.js') {
            const content = fs.readFileSync(itemPath, 'utf8');
            const newContent = content.replace(
                /import { useTranslation } from 'react-i18next';\n/g,
                '',
            );
            console.log(`Удалена строчка из ${itemPath}`);
            fs.writeFileSync(itemPath, newContent, 'utf8');
        }
    });
}

// Использование:
removeLineFromFiles(path.resolve(__dirname, '../src/'));
