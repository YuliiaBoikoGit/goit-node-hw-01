# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
result: https://monosnap.com/file/78XjRl9EBrVHSRrIQpAvzevkqyMh2o

# Получаем контакт по id
node index.js --action get --id 5
result: https://monosnap.com/file/kpcOjgOpdBfZmFj7Vrfj3uM47JpZ96

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
result: https://monosnap.com/file/3AMWUE7VmQTiM00kpEBC1yAbDadDX8

# Удаляем контакт
node index.js --action remove --id=3
result: https://monosnap.com/file/H0uSYYqnQ4y0KEY5bxDh5cJoZmTpSW
