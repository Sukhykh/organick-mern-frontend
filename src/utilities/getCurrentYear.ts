export const getCurrentYear = () => {
    const currentDate = new Date()
    const year = currentDate.getFullYear();
    return year === 2023 ? '2023' : `2023 - ${year}`
}