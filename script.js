function updateCalendar () {

    const now = new Date();
    const day = now.getDate();
    const monthNames = [ "يناير" ,  "فبراير" , "مارس" , "أبريل" , "مايو" , "يونيو" , 
        "يوليو" , "أغسطس" , "سبتمبر" , "أكتوبر" , "نوفمبر" , "ديسمبر"];
    
    const month = monthNames[now.getMonth()];

    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
}

updateCalendar();