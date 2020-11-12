import { BaseAppointment } from './appointments/base-appointment'
import { Datum } from './datum'

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

    this.append('CATEGORIES', item.category)
    this.append('CLASS', 'PUBLIC')
    this.append('DTSTART;VALUE=DATE', Datum.toEightDigits(item.begin))
    this.append('DTEND;VALUE=DATE', Datum.toEightDigits(item.endPlusOneDay))
    this.append('PRIORITY', 5)
    this.append('SEQUENCE', 0)
    this.append('SUMMARY', item.text)
    this.append('TRANSP', item.isBlocking ? 'OPAQUE' : 'TRANSPARENT')
    // ToDo
    this.append('UID', '65d14e8d-3094-42be-9b2a-2fc52446e69e.1473909234213')
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
