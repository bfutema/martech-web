import React, { useState } from 'react';

import { v4 } from 'uuid';

import { ChevronLeft, ChevronRight } from '@assets/icons';
import { CalendarDate, DateHelper } from '@helpers/DateHelper';

import { Container, Control, Header, Days, Day } from './Calendar.styles';

interface CalendarProps {
  isOpen: boolean;
  selectedDate: Date | undefined;
  onSelect: (day: CalendarDate) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  isOpen,
  selectedDate,
  onSelect,
}) => {
  const [startDate, setStartDate] = useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );

  const header = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return (
    <Container isOpen={isOpen}>
      <Control>
        <button type="button">
          {DateHelper.format(startDate, 'MMMM yyyy')}
        </button>

        <div>
          <button
            type="button"
            onClick={() =>
              setStartDate((state) => DateHelper.subMonths(state, 1))
            }
            data-testid="date-picker-control-prev"
          >
            <ChevronLeft width={24} height={24} />
          </button>

          <button
            type="button"
            onClick={() =>
              setStartDate((state) => DateHelper.addMonths(state, 1))
            }
            data-testid="date-picker-control-next"
          >
            <ChevronRight width={24} height={24} />
          </button>
        </div>
      </Control>

      <Header>
        {header.map((item) => {
          return <span key={v4()}>{item}</span>;
        })}
      </Header>

      <Days>
        {DateHelper.getCalendarDates(startDate).map((day) => {
          const dayString = String(day.date.getDate());
          const monthString = String(day.date.getMonth());
          const yearString = String(day.date.getFullYear());

          const parsedDate = `${dayString}_${monthString}_${yearString}`;

          return (
            <Day
              key={v4()}
              type="button"
              isOpen={day.isShow}
              isHoliday={day.isHoliday}
              isSelected={
                selectedDate
                  ? DateHelper.isEqual(day.date, selectedDate)
                  : false
              }
              isToday={DateHelper.isToday(day.date)}
              onClick={() => onSelect(day)}
              data-testid={`date-picker-day-${parsedDate}`}
            >
              {day.date.getDate()}
            </Day>
          );
        })}
      </Days>
    </Container>
  );
};
