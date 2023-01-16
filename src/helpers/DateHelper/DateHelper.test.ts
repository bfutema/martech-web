import { DateHelper } from './DateHelper';

describe('DateHelper', () => {
  it('should be able to format date string', () => {
    const result = DateHelper.format('2022-01-16', 'dd/MM/yyyy');

    expect(result).toBe('16/01/2022');
  });

  it('should be able to format date', () => {
    const result = DateHelper.format(new Date(2022, 0, 16), 'dd/MM/yyyy');

    expect(result).toBe('16/01/2022');
  });

  it('should be able to subtract a month of one date', () => {
    const result = DateHelper.subMonths(new Date(2022, 1, 16), 1);

    expect(result.getMonth()).toBe(0);
  });

  it('should be able to add a month of one date', () => {
    const result = DateHelper.addMonths(new Date(2022, 1, 16), 1);

    expect(result.getMonth()).toBe(2);
  });

  it('should be able to compare if two dates is equal', () => {
    const result1 = DateHelper.isEqual(
      new Date(2022, 1, 16),
      new Date(2022, 1, 16),
    );

    const result2 = DateHelper.isEqual(
      new Date(2022, 1, 16),
      new Date(2022, 2, 16),
    );

    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });

  it('should be able to check if date is today', () => {
    const result1 = DateHelper.isToday(new Date());
    const result2 = DateHelper.isToday(new Date(1990, 1, 16));

    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });

  it('should returns first and last date of month', () => {
    const result = DateHelper.getFirstAndLastDatesFromDate(new Date());

    const currentDate = new Date();
    const firstCurrentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1,
    );
    const lastCurrentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
    );

    expect(result[0]).toStrictEqual(firstCurrentDate);
    expect(result[1]).toStrictEqual(lastCurrentDate);
  });
});
