const fs = require('fs');
const path = require('path');

const rootDirectory = process.argv[2];

function deleteFilesWithTestString() {
    // Получаем список файлов в указанной директории
    const directory = path.resolve(__dirname, rootDirectory);
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
        const filePath = path.join(directory, file);

        // Проверяем, является ли файл директорией
        if (fs.statSync(filePath).isDirectory()) {
            // Рекурсивно вызываем функцию для вложенной директории
            deleteFilesWithTestString(filePath);
        } else {
            // Проверяем, содержит ли название файла строку ".test"
            if (file.includes('.stories')) {
                // Удаляем файл
                fs.unlinkSync(filePath);
                console.log(`Удален файл: ${filePath}`);
            }
        }
    });
}

// Запускаем функцию для указанной директории
deleteFilesWithTestString();
