import {
  format,
  addDays,
  isEqual,
  isToday,
  parseISO,
  subMonths,
  addMonths,
  lastDayOfWeek,
  differenceInDays,
  eachWeekOfInterval,
} from 'date-fns';
import locale from 'date-fns/locale/pt-BR';

export type CalendarDate = {
  isShow: boolean;
  isHoliday: boolean;
  date: Date;
};

class DateHelper {
  public format(date: string | Date, pattern = 'dd/MM/yyyy'): string {
    if (typeof date === 'string') {
      return format(parseISO(date), pattern, { locale });
    }

    return format(date, pattern, { locale });
  }

  public subMonths(date: Date, quantity: number): Date {
    return subMonths(date, quantity);
  }

  public addMonths(date: Date, quantity: number): Date {
    return addMonths(date, quantity);
  }

  public isEqual(date: Date, dateToCompare: Date): boolean {
    return isEqual(date, dateToCompare);
  }

  public isToday(date: Date): boolean {
    return isToday(date);
  }

  public getFirstAndLastDatesFromDate(date: Date): [Date, Date] {
    const first = new Date(date.getFullYear(), date.getMonth(), 1);
    const last = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    return [first, last];
  }

  public getCalendarDates(day: Date): CalendarDate[] {
    const array: CalendarDate[] = [];

    const [first, last] = this.getFirstAndLastDatesFromDate(day);

    const weeks = eachWeekOfInterval({
      start: new Date(first.getFullYear(), first.getMonth(), first.getDate()),
      end: new Date(last.getFullYear(), last.getMonth(), last.getDate()),
    });

    const from = weeks[0];
    const to = lastDayOfWeek(weeks[weeks.length - 1]);
    const diff = differenceInDays(to, from);

    for (let i = 0; i <= diff; i++) {
      const date = addDays(from, i);

      if (date.getMonth() === first.getMonth()) {
        array.push({ isShow: true, isHoliday: false, date });
      } else {
        array.push({ isShow: false, isHoliday: false, date });
      }
    }

    return array;
  }
}

const INSTANCE = new DateHelper();

export { INSTANCE as DateHelper };
