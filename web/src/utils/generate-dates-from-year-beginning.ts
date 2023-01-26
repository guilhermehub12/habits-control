import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {
    const fisrtDayOfTheYear = dayjs().startOf('year')
    const today = new Date()

    const dates = []
    let compareDates = fisrtDayOfTheYear

    while (compareDates.isBefore(today)) {
        dates.push(compareDates.toDate())
        compareDates = compareDates.add(1, 'day')
    }

    return dates
}