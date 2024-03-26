export const getTimeDifference = (targetDate: Date) => {
    const currentDate = new Date();
    const currentTime = currentDate.getTime();
    const targetDateTime = targetDate.getTime();
    const timeDiff = currentTime - targetDateTime;
    const minutesPassed = Math.floor(timeDiff / (1000 * 60));
    const hoursPassed = Math.floor(timeDiff / (1000 * 60 * 60));
    const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (minutesPassed < 60) {
        return `${minutesPassed} min ago`
    } else if (hoursPassed < 24) {
        return `${hoursPassed} hr. ago`
    } else {
        return `${daysPassed} day ago`
    }
}