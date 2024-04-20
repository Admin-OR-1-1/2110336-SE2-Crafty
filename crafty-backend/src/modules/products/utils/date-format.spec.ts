import { getDateStringDisplay } from './date-format'

describe('getDateStringDisplay', () => {
  it('should return the correct Thai date display for valid input dates', () => {
    expect(getDateStringDisplay(new Date('2024-01-20 09:24:37.681'))).toBe(
      '20 มกราคม 2567',
    )
    expect(getDateStringDisplay(new Date('2024-02-20 09:24:37.681'))).toBe(
      '20 กุมภาพันธ์ 2567',
    )
    expect(getDateStringDisplay(new Date('2024-03-20 09:24:37.681'))).toBe(
      '20 มีนาคม 2567',
    )
    expect(getDateStringDisplay(new Date('2024-04-20 09:24:37.681'))).toBe(
      '20 เมษายน 2567',
    )
    expect(getDateStringDisplay(new Date('2024-05-20 09:24:37.681'))).toBe(
      '20 พฤษภาคม 2567',
    )
    expect(getDateStringDisplay(new Date('2024-06-20 09:24:37.681'))).toBe(
      '20 มิถุนายน 2567',
    )
    expect(getDateStringDisplay(new Date('2024-07-20 09:24:37.681'))).toBe(
      '20 กรกฎาคม 2567',
    )
    expect(getDateStringDisplay(new Date('2024-08-20 09:24:37.681'))).toBe(
      '20 สิงหาคม 2567',
    )
    expect(getDateStringDisplay(new Date('2024-09-20 09:24:37.681'))).toBe(
      '20 กันยายน 2567',
    )
    expect(getDateStringDisplay(new Date('2024-10-20 09:24:37.681'))).toBe(
      '20 ตุลาคม 2567',
    )
    expect(getDateStringDisplay(new Date('2024-11-20 09:24:37.681'))).toBe(
      '20 พฤศจิกายน 2567',
    )
    expect(getDateStringDisplay(new Date('2024-12-20 09:24:37.681'))).toBe(
      '20 ธันวาคม 2567',
    )
  })

  it('Should auto fill day with 0 if day is less than 10', () => {
    expect(getDateStringDisplay(new Date('2024-01-05 09:24:37.681'))).toBe(
      '05 มกราคม 2567',
    )
    expect(getDateStringDisplay(new Date('2024-02-05 09:24:37.681'))).toBe(
      '05 กุมภาพันธ์ 2567',
    )
    expect(getDateStringDisplay(new Date('2024-03-05 09:24:37.681'))).toBe(
      '05 มีนาคม 2567',
    )
    expect(getDateStringDisplay(new Date('2024-04-05 09:24:37.681'))).toBe(
      '05 เมษายน 2567',
    )
    expect(getDateStringDisplay(new Date('2024-05-05 09:24:37.681'))).toBe(
      '05 พฤษภาคม 2567',
    )
    expect(getDateStringDisplay(new Date('2024-06-05 09:24:37.681'))).toBe(
      '05 มิถุนายน 2567',
    )
    expect(getDateStringDisplay(new Date('2024-07-05 09:24:37.681'))).toBe(
      '05 กรกฎาคม 2567',
    )
    expect(getDateStringDisplay(new Date('2024-08-05 09:24:37.681'))).toBe(
      '05 สิงหาคม 2567',
    )
    expect(getDateStringDisplay(new Date('2024-09-05 09:24:37.681'))).toBe(
      '05 กันยายน 2567',
    )
    expect(getDateStringDisplay(new Date('2024-10-05 09:24:37.681'))).toBe(
      '05 ตุลาคม 2567',
    )
    expect(getDateStringDisplay(new Date('2024-11-05 09:24:37.681'))).toBe(
      '05 พฤศจิกายน 2567',
    )
    expect(getDateStringDisplay(new Date('2024-12-05 09:24:37.681'))).toBe(
      '05 ธันวาคม 2567',
    )
  })

  it('should return "invalid date" for out of bound date (impossible)', () => {
    expect(getDateStringDisplay(new Date('2024-04-35 09:24:37.681'))).toBe(
      'invalid date',
    )
    expect(getDateStringDisplay(new Date('2024-13-20 09:24:37.681'))).toBe(
      'invalid date',
    )
  })

  it('should return "invalid date" for invalid dates', () => {
    expect(getDateStringDisplay(new Date('2asdasdaws'))).toBe('invalid date')
  })
})
