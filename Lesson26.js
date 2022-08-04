//     const S = ['9:00- на работу','23:00- домой']
//     const M = ['8:00 - подъем ','12:00-13:00 - обед','16:00- Курсы','19:00 Домой','23:00-00:00- Спать']
//     const T = ['9:00- на работу','23:00- домой']
//     const W  = ['8:00 - подъем ','12:00-13:00 - обед','16:00- Курсы','19:00 Домой','23:00-00:00- Спать']
//     const TH = ['9:00- на работу','23:00- домой']
//     const F = ['8:00 - подъем ','12:00-13:00 - обед','16:00- Курсы','19:00 Домой','23:00-00:00- Спать']
//     const SA = ['9:00- на работу','23:00- домой']


// ['Sunday', 'Monday', 'Tuesday', 'Wednesday']

// const schedule = [{}]

// function todaySchedule1() {
//     const date = new Date()
//     date.getDay() // 1
//     return 'Sunday: 9:00 - ','23:00- домой'
// }
// const schedule1 = [{}]

// function todaySchedule2() {
//     const date = new Date()
//     date.getDay() // 1
//     return 'Monday: 12:00 - Обед'
// }
// console.log(todaySchedule1())

// const schedule = [{}]

// function todaySchedule1() {
//     const date = new Date()
//     date.getDay() // 1
//     return '8:00 - Wake up\n' + '8:30 - Breakfast\n' + '12:00 - Lunch\n' + '19:00 - Supper\n' + '00:00 - Sleep\n'
    
// }
// console.log(todaySchedule1())


const schedule = [
    {
        day: 'Sun',
        events: [
            ['12:00', 'Wake up'],
            ['13:00', 'Chill'],
        ]
    },
    {
        day: 'Mon',
        events: [
            ['09:00', 'Wake up'],
            ['10:00', 'Work'],
            ['16:00', 'JS courses']
        ]
    },
    {
        day: 'Tue',
        events: [
            ['09:00', 'Wake up'],
            ['10:00', 'Work'],
            ['16:00', 'JS courses']
        ]
    },
    {
        day: 'Wed',
        events: [
            ['09:00', 'Wake up'],
            ['10:00', 'Work'],
            ['16:00', 'JS courses']
        ]
    },
    {
        day: 'Thu',
        events: [
            ['11:00', 'Wake up'],
            ['12:00', 'Work'],
            ['17:00', 'Volleyball']
        ]
        
    },
    {
        day: 'Fri',
        events: [
            ['09:00', 'Wake up'],
            ['10:00', 'Work'],
            ['16:00', 'JS courses']
        ]
    },
    {
        day: 'Sat',
        events: [
            ['12:00', 'Wake up'],
            ['13:00', 'Work'],
            ['17:00', 'Volleyball']
        ]
    },

]

const weekDays =  ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

function getSchedule() {
    const date = new Date()

try {
    const dayIndex = date.getDate()
    const daySchedule = schedule[dayIndex]
    let result = `${daySchedule}:\n`

    daySchedule.events.map(event => result += `\n${events[0]} - ${events[1]}`)
    return result
} catch(err) {
    console.log(err.message)
    return 'Is not Defind' + 'a'
}

// console.log(date.getDate(), schedule[date.getDate()].day)
    // return schedule[date.getDate()].events
}

console.log(getSchedule())