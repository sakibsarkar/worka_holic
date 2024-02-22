export function formatDate(inputDate) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(inputDate);
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
}