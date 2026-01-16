import { Client } from 'basic-ftp';

const FTP_CONFIG = {
  host: '31.31.196.49',
  user: 'u3382604',
  password: 'pOuePd0d3Wu96FjA',
  secure: false,
  port: 21
};

async function checkStructure() {
  const client = new Client();
  client.ftp.verbose = true;

  try {
    console.log('🔌 Подключаюсь к FTP серверу...');
    await client.access(FTP_CONFIG);
    console.log('✅ Подключение установлено\n');

    // Переходим в корень
    await client.cd('/');
    console.log('📁 Текущая директория: /');
    
    // Список файлов и папок в корне
    console.log('\n📋 Содержимое корневой директории:');
    const rootList = await client.list();
    for (const item of rootList) {
      console.log(`  ${item.isDirectory ? '📁' : '📄'} ${item.name} ${item.isDirectory ? '(папка)' : `(${item.size} байт)`}`);
    }

    // Проверяем public_html
    console.log('\n📁 Проверяю папку /public_html:');
    try {
      await client.cd('/public_html');
      const publicHtmlList = await client.list();
      console.log(`✅ Папка /public_html существует, содержит ${publicHtmlList.length} элементов:`);
      for (const item of publicHtmlList) {
        console.log(`  ${item.isDirectory ? '📁' : '📄'} ${item.name} ${item.isDirectory ? '(папка)' : `(${item.size} байт)`}`);
      }
    } catch (err) {
      console.log(`❌ Папка /public_html не найдена: ${err.message}`);
    }

    // Проверяем www
    console.log('\n📁 Проверяю папку /www:');
    try {
      await client.cd('/');
      await client.cd('/www');
      const wwwList = await client.list();
      console.log(`✅ Папка /www существует, содержит ${wwwList.length} элементов:`);
      for (const item of wwwList) {
        console.log(`  ${item.isDirectory ? '📁' : '📄'} ${item.name} ${item.isDirectory ? '(папка)' : `(${item.size} байт)`}`);
      }
    } catch (err) {
      console.log(`❌ Папка /www не найдена: ${err.message}`);
    }

    // Проверяем www/takto.space - возможно это корневая папка!
    console.log('\n📁 Проверяю папку /www/takto.space (возможно это корневая папка для домена):');
    try {
      await client.cd('/');
      await client.cd('/www/takto.space');
      const taktoList = await client.list();
      console.log(`✅ Папка /www/takto.space существует, содержит ${taktoList.length} элементов:`);
      for (const item of taktoList) {
        console.log(`  ${item.isDirectory ? '📁' : '📄'} ${item.name} ${item.isDirectory ? '(папка)' : `(${item.size} байт)`}`);
      }
    } catch (err) {
      console.log(`❌ Папка /www/takto.space не найдена: ${err.message}`);
    }

    // Проверяем, может быть файлы в корне
    console.log('\n📁 Проверяю, может быть файлы в корне FTP:');
    await client.cd('/');
    const rootFiles = rootList.filter(item => !item.isDirectory && (item.name.includes('index') || item.name.includes('.html')));
    if (rootFiles.length > 0) {
      console.log('⚠️  Найдены HTML файлы в корне:');
      for (const item of rootFiles) {
        console.log(`  📄 ${item.name} (${item.size} байт)`);
      }
    } else {
      console.log('❌ HTML файлы в корне не найдены');
    }

  } catch (err) {
    console.error('❌ Ошибка:', err);
  } finally {
    client.close();
  }
}

checkStructure();
