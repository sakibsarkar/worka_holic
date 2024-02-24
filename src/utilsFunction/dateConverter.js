export function formatDate(inputDate) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(inputDate);
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
}


export function calculateNextDate(lastTime){
    const currentDate = new Date();

    const calculateTime = new Date(currentDate);
    calculateTime.setDate(currentDate.getDate()+lastTime)

    const today = currentDate.toLocaleDateString();
    const deliveryTime = calculateTime.toLocaleDateString();

    return {today, deliveryTime}
     
}