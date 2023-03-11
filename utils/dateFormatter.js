function dateFormatter(dateString){
    let date = new Date(dateString);
    return date.toLocaleString('default', { month: 'long', year:'numeric', day:'numeric' })
    return `${date.getDate()} ${date.getMonth()}  ${date.getFullYear()}`
}

export default dateFormatter;