export const getTimeDifference = (targetDate: Date) => {
    const currentDate = new Date();
    const currentTime = currentDate.getTime();
    const targetDateTime = targetDate.getTime();
    const timeDiff = currentTime - targetDateTime;
    const minutesPassed = Math.floor(timeDiff / (1000 * 60));
    const hoursPassed = Math.floor(timeDiff / (1000 * 60 * 60));
    const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const monthsPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 12));

    if (minutesPassed < 60) {
        return `${minutesPassed} min ago`
    } else if (hoursPassed < 24) {
        return `${hoursPassed} hr. ago`
    } else if (daysPassed < 30) {
        return `${daysPassed} day ago`
    } else if (monthsPassed < 12){
        return `${monthsPassed} mo ago`
    } else {
        return `${Math.floor(monthsPassed / 12)} years ago`
    }
}