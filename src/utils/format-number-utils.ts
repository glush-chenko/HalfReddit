export const formatNumber = (num: number, commas: boolean) => {
    if (commas) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        if (num > 1000) {
            const roundedNum = Math.round(num / 100) / 10;
            return `${roundedNum}K`
        } else {
            return num.toString();
        }
    }
}