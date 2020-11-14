import { BaseAppointment } from './appointments/base-appointment'
import { CategoryType } from './appointments/category-type'
import { DateUtils } from './date-utils'

export class Generator {
  private ical: string[] = []

  private append(key: string, value: string | number | boolean | undefined): void {
    if (typeof value === 'undefined') {
      return
    } else if (typeof value === 'boolean') {
      value = value ? 'TRUE' : 'FALSE'
    }

    this.ical.push(`${key}:${value}`)
  }

  public generate(items: BaseAppointment[]): string {
    this.ical.length = 0

    this.createHeader()
    for (const item of items) {
      this.createItem(item)
    }
    this.createFooter()
    return this.ical.join('\n')
  }

  private createHeader(): void {
    this.append('BEGIN', 'VCALENDAR')
    this.append('PRODID', 'AppointmentCreator')
    this.append('VERSION', '2.0')
    this.append('METHOD', 'PUBLISH')
    this.append('X-MS-OLK-FORCEINSPECTOROPEN', true)
  }

  private createItem(item: BaseAppointment): void {
    this.append('BEGIN', 'VEVENT')

    if (item.categoryKey) {
      this.append('CATEGORIES', CategoryType[item.categoryKey])
    }
    this.append('CLASS', 'PUBLIC')
    this.append('DTSTART;VALUE=DATE', DateUtils.toEightDigits(item.begin))
    this.append('DTEND;VALUE=DATE', DateUtils.toEightDigits(item.end.add(1, 'day')))
    this.append('PRIORITY', 5)
    this.append('SEQUENCE', 0)
    this.append('SUMMARY', item.additionalText ? `${item.text} ${item.additionalText}` : item.text)
    this.append('TRANSP', item.isBlocking ? 'OPAQUE' : 'TRANSPARENT')
    // ToDo
    this.append('UID', `creator-${item.typeKey}-${item.begin.year()}`)
    this.append('X-MICROSOFT-CDO-BUSYSTATUS', item.isBlocking ? 'BUSY' : 'FREE')
    this.append('X-MICROSOFT-CDO-IMPORTANCE', 1)
    this.append('X-MICROSOFT-DISALLOW-COUNTER', false)
    this.append('X-MS-OLK-AUTOSTARTCHECK', false)

    this.append('END', 'VEVENT')
  }

  private createFooter(): void {
    this.append('END', 'VCALENDAR')
  }
}
