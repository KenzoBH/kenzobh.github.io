function getAge() 
{
    var today = new Date();
    var birthDate = new Date(2003, 7, 22);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

function footer(){
    document.write(`\
        <div id="footer-box">\
        \
            <div id="footer">\
                <div id="footer-infos">\
                    <div>\
                        <h2>Bruno Kenzo Hyodo</h2>\
                        <p>\
                            Shopee BR & USP<br>\
                            São Paulo, Brazil<br>\
                            ${getAge()} yo\
                        </p>\
                    </div>\
                    <div id="footer-icons">\
                        <a href="https://www.linkedin.com/in/bruno-kenzo/" target="_blank" class="fa fa-linkedin"></a>\
                        <a href="https://github.com/KenzoBH" target="_blank" class="fa fa-github"></a>\
                        <a href="https://www.instagram.com/kenzobh/" target="_blank" class="fa fa-instagram"></a>\
                    </div>\
                </div>\
        \
                <div id="footer-date">\
                    <p>${new Date().getFullYear()}</p>\
                </div>\
            </div>\
        \
        </div>\
    `);
}