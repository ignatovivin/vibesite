import { createReadStream, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { Client } from 'basic-ftp';

// FTP настройки (можно передать через переменные окружения)
const FTP_CONFIG = {
  host: process.env.FTP_HOST || '31.31.196.49',
  user: process.env.FTP_USER || 'u3382604',
  password: process.env.FTP_PASSWORD || 'pOuePd0d3Wu96FjA',
  secure: false, // false для обычного FTP, true для FTPS
  port: 21
};

const LOCAL_DIR = './dist';
const REMOTE_DIR = '/public_html'; // или /www, в зависимости от вашего хостинга

async function uploadDirectory(client, localPath, remotePath) {
  console.log(`📁 Создаю директорию: ${remotePath}`);
  try {
    await client.ensureDir(remotePath);
  } catch (err) {
    console.log(`⚠️  Директория уже существует или ошибка: ${err.message}`);
  }

  const items = readdirSync(localPath);

  for (const item of items) {
    const localItemPath = join(localPath, item);
    const remoteItemPath = `${remotePath}/${item}`;
    const stat = statSync(localItemPath);

    if (stat.isDirectory()) {
      await uploadDirectory(client, localItemPath, remoteItemPath);
    } else {
      console.log(`📤 Загружаю: ${item}`);
      try {
        await client.uploadFrom(localItemPath, remoteItemPath);
        console.log(`✅ Загружено: ${item}`);
      } catch (err) {
        console.error(`❌ Ошибка при загрузке ${item}:`, err.message);
      }
    }
  }
}

async function deploy() {
  const client = new Client();
  client.ftp.verbose = true; // Включить подробный вывод

  try {
    console.log('🔌 Подключаюсь к FTP серверу...');
    await client.access(FTP_CONFIG);
    console.log('✅ Подключение установлено');

    console.log(`📦 Начинаю загрузку файлов из ${LOCAL_DIR} в ${REMOTE_DIR}...`);
    
    // Переходим в корневую директорию
    await client.cd('/');
    
    // Загружаем все файлы
    await uploadDirectory(client, LOCAL_DIR, REMOTE_DIR);

    console.log('✅ Деплой завершен успешно!');
    console.log(`🌐 Сайт должен быть доступен по адресу: https://takto.space`);

  } catch (err) {
    console.error('❌ Ошибка при деплое:', err);
    process.exit(1);
  } finally {
    client.close();
  }
}

// Запускаем деплой
deploy();
