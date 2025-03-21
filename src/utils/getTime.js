export function getTime(timezone) {
    return new Date().toLocaleString('ru-RU', {
        timeZone: timezone,
        hourCycle: 'h23',
        timeStyle: 'short'
    })
}

