function Calendar({date}) {

    const firstMonthDay = new Date(Date.parse(`${date.getFullYear()}-${date.getMonth() + 1}-01`));

    let firstCalendarDate = firstMonthDay;
    if (firstCalendarDate.getDay() > 1) {
        firstCalendarDate = new Date(firstCalendarDate.getTime() - (firstCalendarDate.getDay() - 1) * 24 * 60 * 60 * 1000);
    }

    function createWeek(startDay) {
        const weekData = [];
        for (let i = 0; i < 7; i++) {
            weekData.push(new Date(startDay.getTime() + i * 86400000));
        }
        let week = weekData.map((date, index) => {
            if (date.getTime() === (new Date()).setHours(0, 0, 0, 0)) {
                return (
                    <td key={index} className="ui-datepicker-today">{date.getDate()}</td>
                );
            }
            if (date.getMonth() === firstMonthDay.getMonth()) {
                return (
                    <td key={index}>{date.getDate()}</td>
                );
            } else {
                return (
                    <td key={index} className="ui-datepicker-other-month">{date.getDate()}</td>
                );
            }
        });
        return (
            <tr>
                {week}
            </tr>
        );

    }

    function createMonth(startDay) {
        let calendar = [];
        while (true) {
            calendar.push(createWeek(startDay));
            startDay = new Date(startDay.getTime() + 7 * 86400000);
            if (startDay.getMonth() !== firstMonthDay.getMonth()) {
                return calendar;
            }
        }
    }

    function dayName(date) {
        switch (date.getDay()) {
            case 0:
                return 'Воскресенье';
            case 1:
                return 'Понедельник';
            case 2:
                return 'Вторник';
            case 3:
                return 'Среда';
            case 4:
                return 'Четверг';
            case 5:
                return 'Пятница';
            case 6:
                return 'Суббота';
        }
    }

    function monthName(date) {
        switch (date.getMonth()) {
            case 0:
                return {'nominative': 'Январь', 'genitive': 'Января'};
            case 1:
                return {'nominative': 'Февраль', 'genitive': 'Февраля'};
            case 2:
                return {'nominative': 'Март', 'genitive': 'Марта'};
            case 3:
                return {'nominative': 'Апрель', 'genitive': 'Апреля'};
            case 4:
                return {'nominative': 'Май', 'genitive': 'Мая'};
            case 5:
                return {'nominative': 'Июнь', 'genitive': 'Июня'};
            case 6:
                return {'nominative': 'Июль', 'genitive': 'Июля'};
            case 7:
                return {'nominative': 'Август', 'genitive': 'Августа'};
            case 8:
                return {'nominative': 'Сентябрь', 'genitive': 'Сентября'};
            case 9:
                return {'nominative': 'Октябрь', 'genitive': 'Октября'};
            case 10:
                return {'nominative': 'Ноябрь', 'genitive': 'Ноября'};
            case 11:
                return {'nominative': 'Декабрь', 'genitive': 'Декабря'};
        }
    }

    const headerCalendar = (
        <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">{dayName(date)}</div>
            <div className="ui-datepicker-material-date">
                <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
                <div className="ui-datepicker-material-month">{monthName(date).genitive}</div>
                <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
            </div>
        </div>
    );

    const monthNode = (
        <div className="ui-datepicker-header">
            <div className="ui-datepicker-title">
                <span className="ui-datepicker-month">{monthName(date).nominative}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
            </div>
        </div>
    );

    const tableColGroups = (
        <colgroup>
            <col/>
            <col/>
            <col/>
            <col/>
            <col/>
            <col className="ui-datepicker-week-end"/>
            <col className="ui-datepicker-week-end"/>
        </colgroup>
    )

    const tableHeader = (
        <thead>
            <tr>
                <th scope="col" title="Понедельник">Пн</th>
                <th scope="col" title="Вторник">Вт</th>
                <th scope="col" title="Среда">Ср</th>
                <th scope="col" title="Четверг">Чт</th>
                <th scope="col" title="Пятница">Пт</th>
                <th scope="col" title="Суббота">Сб</th>
                <th scope="col" title="Воскресенье">Вс</th>
            </tr>
        </thead>
    )

    return (
        <div className="ui-datepicker">
            {headerCalendar}
            {monthNode}
            <table className="ui-datepicker-calendar">
                {tableColGroups}
                {tableHeader}
                <tbody>
                    {createMonth(firstCalendarDate)}
                </tbody>
            </table>
        </div>
    )
}