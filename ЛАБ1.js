function StartLab()
{
    var start;
    start = confirm("Бажаєте розпочати лабораторну роботу?");

    if (start == true)
    {
        var pib;
        pib = prompt("Введіть прізвище, ім'я та по батькові:");

        document.write("<h1>Лабораторна робота №1</h1>");
        document.write("<hr>");
        document.write("<p><b>ПІБ студента:</b> " + pib + "</p>");

        var group;
        group = prompt("Введіть вашу групу:");

        document.write("<p><i>Група:</i> " + group + "</p>");

        var address;
        address = prompt("Введіть вашу адресу:");

        document.write("<p><u>Адреса:</u> " + address + "</p>");

        var subject;
        subject = prompt("Яка дисципліна вивчається?");

        document.write("<p><b>Дисципліна:</b> " + subject + "</p>");
        document.write("<br><hr>");

        document.write("<h2>Бажаємо успіхів у навчанні!</h2>");
        document.write("<p>З найкращими побажаннями, " + pib + "!</p>");
    }
    else
    {
        document.write("<h2>Ви відмовились розпочинати лабораторну роботу.</h2>");
    }
}
